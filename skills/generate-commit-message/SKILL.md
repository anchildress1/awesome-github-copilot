---
status: check
name: generate-commit-message
description: >
  Use this skill whenever you need to commit changes or generate a conventional commit message for user review.
argument-hint: "optional: JIRA-123 or issue key/scope hint"
allowed-tools: Bash, Read, Write
disable-model-invocation: false
user-invocable: true
---

## Purpose

Produce exactly one Conventional Commits v1.0.0 message derived strictly from the git diff. Output must pass `@commitlint/config-conventional` default rules out of the box (with one documented Jira-scope caveat).

Two output modes (chosen by request intent + permission, see §"Output mode"):

- **Draft mode**: write the message to `commit.tmp`. No repo mutation.
- **Commit mode**: write a signed commit using the message. No `commit.tmp` written on success.

## Inputs

- Preferred: staged diff via `git --no-pager diff --cached`
- Fallback: working tree diff via `git --no-pager diff`

## Output mode (commit vs. draft)

Pick **commit mode** only when ALL of these are true:

1. **User intent is to commit**, not just draft. Triggering phrases include `commit this`, `commit these changes`, `/commit`, `go ahead and commit`, `make the commit`, `git commit`, or post-draft confirmations like `yes, commit it` / `looks good, commit`.
2. **Permission is available**: a `git commit` invocation by this skill is allowed in the current session (Claude Code permission mode is `acceptEdits`/`bypassPermissions`, OR the user has granted the prompt). If the commit call gets blocked, see §"Commit blocked — fall back to draft".
3. **State is committable**:
   - There is a non-empty staged diff (`git --no-pager diff --cached` returns content).
   - Current branch is not `main`/`master` UNLESS the user explicitly said to commit on that branch in this turn.

If any of those is false, use **draft mode**.

Phrases like `write a commit message`, `draft a commit message`, `what would the commit message be`, `save a commit message` always force draft mode regardless of permission.

## Hard safety boundary

- NEVER run `git add`, `git push`, `git rebase`, `git reset`, `git commit --amend`, or any other history-mutating command. The only repo-mutating command the skill may run is **`git commit -S`** in commit mode.
- NEVER stage files. The skill commits only what is already staged. If nothing is staged, abort and tell the user.
- NEVER modify repository files. Source/docs/config are off-limits — no formatters, lint fixes, refactors, test runs.
- Allowed write target in draft mode: `commit.tmp` ONLY.
- NEVER `--no-verify`, `--no-gpg-sign`, or any flag that bypasses hooks or signing.
- NEVER infer scope from anything other than: user-provided key > branch name > existing `commit.tmp`.
- AI attribution footer is MANDATORY in both modes. A commit message without attribution is a failure.
- NEVER commit on `main`/`master` unless the user explicitly directed it this turn.

## Conventional Commits v1.0.0 — rules this skill enforces

Reference: <https://www.conventionalcommits.org/en/v1.0.0/>

Format:

```
<type>[optional scope][!]: <subject>

[optional body]

[optional footer(s)]
```

### Type

- MUST be one of (commitlint `type-enum` defaults):
  `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`
- MUST be lowercase (`type-case: lower-case`).
- MUST NOT be empty (`type-empty: never`).
- `feat` MUST be used when adding a feature (SemVer MINOR).
- `fix` MUST be used for bug fixes (SemVer PATCH).

### Scope (optional)

- Wrapped in parentheses, immediately after type: `feat(parser):`
- commitlint default `scope-case: lower-case`.
- **Jira-key exception**: this skill emits Jira keys uppercase (`feat(PROJ-123):`) per the scope precedence below. If your project uses Jira keys, override `scope-case` in your commitlint config:

  ```js
  rules: { 'scope-case': [0] }
  // or restrict to upper-case for Jira:
  rules: { 'scope-case': [2, 'always', 'upper-case'] }
  ```

### Subject

- MUST follow the colon and a single space.
- MUST NOT end with a period (`subject-full-stop: never`).
- MUST NOT be empty (`subject-empty: never`).
- MUST NOT be sentence-case, start-case, pascal-case, or upper-case (`subject-case: never [...]`). Lowercase or mixed lowercase/identifier-case is fine.
- MUST be ≤ 72 characters (stricter than commitlint default of 100; matches kernel/git convention).
- Imperative, present tense, active voice.

### Body (optional)

- MUST be preceded by exactly one blank line after the subject.
- Lines ≤ 100 characters (matches `body-max-line-length` default).
- Bullets are single-line only; no wrapping inside a bullet.
- Explain *what* changed and *why*, not *how*. Avoid listing files; group changes.

### Breaking changes

Two forms, both valid per spec:

1. **Bang in header** (terse): `feat(api)!: drop deprecated /v1 endpoint`
2. **Footer trailer** (verbose): include `BREAKING CHANGE: <details>` (or `BREAKING-CHANGE:` — spec §16 makes the hyphen form synonymous).

Use the `!` form when the body/footer already explains the break elsewhere or when no extra detail is required. Use the footer form when the user needs explicit migration steps. You may use both together.

### Footers

- MUST be preceded by exactly one blank line.
- Each footer is a git trailer: `Token-Name: value` or `Token-Name #value`.
- Tokens use `-` instead of spaces (e.g., `Reviewed-by`), except `BREAKING CHANGE` (which the spec exempts).
- **Lines ≤ 100 characters** (matches `footer-max-line-length` default). If a footer value would exceed 100 chars, fold it onto continuation lines with a leading space (git trailer continuation), or shorten the prose. Do not let any line exceed 100.
- Common trailers:
  - `Refs: PROJ-123`
  - `Closes #42`
  - `BREAKING CHANGE: <migration note>`
  - AI attribution (see below)
- PROHIBITED in this skill: `Signed-off-by` (out of scope; user must add manually if DCO-required).

## Deterministic workflow

### 0) Determine commit scope (issue-key precedence)

Goal: choose an optional scope value (prefer a Jira-style key) with this precedence:

1. **User-provided** Jira key / issue key (explicit in request or `argument-hint`)
2. **Branch name** key (from current branch)
3. **Existing `commit.tmp`** scope (if already present)
4. **None** (omit scope)

Rules:

- Jira key regex (case-insensitive match; normalize to uppercase in output):
  - `[A-Z][A-Z0-9]+-\d+`
- If multiple keys are found, use the first match by precedence.
- Do not invent a scope keyword (like `docs`/`core`) when no issue key exists. Omit scope.

Steps:

1. Extract issue key from user input / argument hint (if present).
2. Else run `git --no-pager rev-parse --abbrev-ref HEAD` and extract the first matching issue key.
3. Else, if `commit.tmp` exists, read line 1 and reuse a scope matching the Jira regex.
4. Else scope is empty.

### 1) Acquire diff

1. Run `git --no-pager diff --cached`.
2. If empty, run `git --no-pager diff`.
3. If both empty or error, stop and report: unable to generate commit message (no diff).

### 2) Derive intent (diff-only)

Infer `<type>`, optional `(scope)`, breaking-change indicator, and subject/body strictly from diff hunks. Do not use chat history, prior commits, or memory to decide what changed.

Type heuristics (in order; first match wins):

- Public API removed / signature changed / config key dropped → likely breaking. Add `!` or `BREAKING CHANGE:` footer.
- New user-visible feature added → `feat`.
- Bug-fix only (defect repair, no new surface) → `fix`.
- Performance work without behavior change → `perf`.
- Code restructure, no behavior change → `refactor`.
- Whitespace, formatting, semicolons → `style`.
- Tests-only changes → `test`.
- Docs-only changes (README, comments, KDoc, JSDoc) → `docs`.
- CI config (.github/workflows, .circleci, etc.) → `ci`.
- Build system, deps, packaging → `build`.
- Reverts a prior commit → `revert`.
- Maintenance with no production-code impact → `chore`.

Scope is determined by §0 only — diff may inform type and subject, never scope.

### 3) Estimate AI contribution (graduated attribution)

Pick exactly one tier from diff hunks + session memory only:

- **Majority** of work AI-driven → `Generated-by`
- **Roughly half** AI / half human → `Co-authored-by`
- **Minor** AI assist (small edits, suggestions) → `Assisted-by`
- **Trivial** (just generated this commit message) → `Commit-generated-by`

If uncertain, default to crediting the human (pick the less-crediting tier).

### 4) Compose message

```
<type>[(<scope>)][!]: <subject>

- <single-line bullet>
- <single-line bullet>

<footer(s)>
```

Hard formatting rules:

- Subject line: ≤ 72 chars, no trailing period, allowed cases per `subject-case` above.
- Body lines: ≤ 100 chars.
- Exactly one blank line after subject.
- Exactly one blank line before footers.
- No other blank lines.
- Body bullets are single-line only.

Writing rules:

- Imperative, present tense, active voice.
- Group changes; avoid file-by-file listings.
- Quantify when useful ("add 3 fixtures", "drop 412 LOC").
- Explain *what* and *why*, never *how*.

### 5) Footers

Order, when present:

1. **Issue refs** (if user-provided or branch-derived):
   ```
   Refs: PROJ-123
   ```
   Or `Closes #42` if a GitHub issue number was provided.

2. **Breaking change** (only when user action is required and not fully captured by `!`):
   ```
   BREAKING CHANGE: <explicit incompatibility and required action>
   ```

3. **AI attribution** (REQUIRED, exactly one):
   ```
   <Attribution-Tier>: <YOUR_AI_NAME> <noreply@email.com>
   ```

Prohibited:

- Never include `Signed-off-by`.

### 6) Pre-output revalidation (staleness guard)

Immediately before writing `commit.tmp` OR running `git commit`:

1. Re-run staged diff (then fallback diff if needed).
2. If diff changed vs. what was used to draft, abort, re-derive, and regenerate.
3. If diff cannot be re-run, warn output may be stale and proceed best-effort.

### 7) Validate format (both modes)

Before any output, verify:

- Header matches: `^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([^)]+\))?!?: .+$` and is ≤ 72 chars.
- No body or footer line exceeds 100 chars.
- Subject does not end with `.`.
- Type is lowercase and in the enum above.
- Exactly one valid AI-attribution footer is present.

If any check fails, regenerate before output. Do not emit a non-conformant message.

### 8) Output — choose by mode (see §"Output mode")

**Draft mode**:

- Write exactly one commit message to `commit.tmp` in the current working directory.
- Do not write to any other file.
- Do not run any git mutation.
- Done.

**Commit mode**:

1. Re-confirm preconditions one more time:
   - Staged diff is non-empty.
   - Branch is not `main`/`master` (or user explicitly OK'd it).
   - User intent is to commit, not just draft.

2. Run the commit using a HEREDOC for proper formatting and `-S` for gpg signing:

   ```bash
   git commit -S -m "$(cat <<'EOF'
   <full message body here, including blank lines and footers>
   EOF
   )"
   ```

3. Do NOT pass `--no-verify` or `--no-gpg-sign`. Hooks and signing must run.

4. Do NOT stage anything. Commit only what is already staged.

5. If commit succeeds: report the new commit's short SHA + subject. Do not write `commit.tmp`.

6. If commit fails (hook rejection, permission denied, signing failure, etc.):
   - Do NOT retry blindly.
   - Do NOT amend.
   - Save the message to `commit.tmp` so work isn't lost.
   - Surface the exact failure output to the user along with a short, factual diagnosis (what failed; what they likely need to do).
   - Stop. The model handles the underlying issue and re-invokes the skill.

### 9) Commit blocked — fall back to draft

If at any point during commit-mode the commit cannot be performed because:

- Claude Code denied the `git commit` permission, OR
- the staged diff is empty, OR
- the branch is `main`/`master` and the user did not explicitly authorize, OR
- a pre-commit hook or signature failed,

…then write the message to `commit.tmp` instead and tell the user exactly why commit was skipped. Never silently downgrade — the user needs to know their commit didn't happen.

## Examples

**1) Minor bug fix, no scope, AI assisted**

```
fix: pin qs to 6.14.2 to address prototype-pollution vulnerability

- add npm override for qs across the dependency tree
- align instantsearch.js resolution to the pinned version

Assisted-by: Claude Haiku 4.5 <noreply@anthropic.com>
```

**2) Feature with Jira scope, AI majority**

```
feat(PROJ-123): add OAuth2 device-code flow to login

- support polling token endpoint with backoff
- surface user_code + verification_uri in CLI output
- cover happy-path and timeout in unit tests

Refs: PROJ-123
Generated-by: Claude Opus 4.7 <noreply@anthropic.com>
```

**3) Breaking change via `!`**

```
feat(api)!: drop deprecated /v1 endpoints

- remove /v1/users and /v1/sessions handlers
- migrate fixture suite to /v2 equivalents

BREAKING CHANGE: clients pinned to /v1 must upgrade to /v2 before this release. See docs/migration-v2.md.
Generated-by: Claude Opus 4.7 <noreply@anthropic.com>
```

**4) Docs-only, trivial AI involvement**

```
docs: clarify token-refresh semantics in README

- note that refresh tokens rotate on every use
- add a sequence diagram for the silent-renewal flow

Commit-generated-by: Claude Haiku 4.5 <noreply@anthropic.com>
```
