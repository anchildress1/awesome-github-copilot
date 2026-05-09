# Generate Commit Message Skill 🧠

![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)

This is the skill you point at when you want a Conventional Commit message that's:

- derived strictly from the diff (not vibes)
- formatted to pass commitlint out of the box
- stamped with honest AI attribution
- capable of making the actual commit when you ask

Skill source: [`skills/generate-commit-message/SKILL.md`](../../skills/generate-commit-message/SKILL.md)

> 🦄 **Why this exists:** writing commit messages is important and annoying — perfect job for automation.
> Automation still doesn't get to be sloppy:
>
> - deterministic output
> - lint-friendly formatting
> - honest about AI involvement

---

## What It Does 🛠️

The skill has two modes. It picks the right one based on what you asked for.

**Draft mode** (default):

- reads the highest-priority diff evidence (staged first, then working tree)
- infers the best-fit Conventional Commit type
- writes exactly one commit message to `commit.tmp`
- adds exactly one AI attribution footer

**Commit mode** (when you ask it to commit):

- does everything draft mode does
- then runs `git commit -S` on the already-staged diff
- reports the new commit SHA on success
- falls back to `commit.tmp` if anything blocks it (and tells you why)

---

## How to Use It 📝

**To draft a message:**

1. Make your changes.
2. Optionally stage them (recommended — staged diff wins over working tree).
3. Say something like `write a commit message` or `/generate-commit-message`.

The message lands in `commit.tmp`.

**To draft AND commit in one shot:**

Say something like `commit this`, `go ahead and commit`, or `git commit`. The skill switches to commit mode automatically.

Commit mode only fires if:

- there is a non-empty staged diff
- you are not on `main`/`master` (or you explicitly said to commit there)
- the `git commit` call is permitted in the current session

If any of those is false, it drafts instead and tells you why.

---

## Output Rules (The Parts That Keep You Out of Trouble) 📏

Follows [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and passes `@commitlint/config-conventional` defaults.

**Header:**

- `type[(scope)][!]: subject`
- subject ≤ 72 chars, no trailing period, lowercase or identifier-case
- type must be one of: `build` `chore` `ci` `docs` `feat` `fix` `perf` `refactor` `revert` `style` `test`

**Body (optional):**

- one blank line after subject
- single-line bullets only, each ≤ 100 chars
- explains *what* changed and *why*, not *how*

**Footers:**

- one blank line before footers
- order: issue refs → `BREAKING CHANGE` → AI attribution
- no other blank lines

**Breaking changes:**

- `feat(api)!: drop /v1 endpoints` — terse form, use when no migration detail needed
- `BREAKING CHANGE: <migration note>` — verbose form, use when users need explicit steps
- both may appear together

---

## Scope & Jira Keys 🎯

Scope is set by precedence, never guessed from the diff:

1. Key you provided in the request
2. Key extracted from the branch name
3. Key found in an existing `commit.tmp`
4. Nothing (scope omitted)

Jira keys are emitted uppercase (`feat(PROJ-123):`). If commitlint rejects that, override `scope-case` in your commitlint config — the skill won't lowercase a Jira key to pass a lint rule.

---

## AI Attribution (Deterministic, Not Performative) 🖋️

The skill picks exactly one tier based on the diff:

- **Generated-by**: AI wrote the majority of changed lines
- **Co-authored-by**: roughly half-and-half
- **Assisted-by**: AI did minor but real edits
- **Commit-generated-by**: AI only drafted this commit message

If it's unclear, it defaults to crediting the human more.

One thing it will never add: `Signed-off-by`. That's yours to add if your project requires DCO sign-off.

---

## Example Output 📤

**Bug fix, no scope, minor AI assist:**

```text
fix: pin qs to 6.14.2 to address prototype-pollution vulnerability

- add npm override for qs across the dependency tree
- align instantsearch.js resolution to the pinned version

Assisted-by: Claude Haiku 4.5 <noreply@anthropic.com>
```

**Feature with Jira scope, AI did most of it:**

```text
feat(PROJ-123): add OAuth2 device-code flow to login

- support polling token endpoint with backoff
- surface user_code + verification_uri in CLI output
- cover happy-path and timeout in unit tests

Refs: PROJ-123
Generated-by: Claude Opus 4.7 <noreply@anthropic.com>
```

**Breaking change:**

```text
feat(api)!: drop deprecated /v1 endpoints

- remove /v1/users and /v1/sessions handlers
- migrate fixture suite to /v2 equivalents

BREAKING CHANGE: clients pinned to /v1 must upgrade to /v2 before this release. See docs/migration-v2.md.
Generated-by: Claude Opus 4.7 <noreply@anthropic.com>
```

**Docs-only, trivial AI involvement:**

```text
docs: clarify token-refresh semantics in README

- note that refresh tokens rotate on every use
- add a sequence diagram for the silent-renewal flow

Commit-generated-by: Claude Haiku 4.5 <noreply@anthropic.com>
```

---

## Practical Notes 🧰

- If nothing is staged and the working tree diff is also empty, the skill stops. It won't invent changes.
- If you touched multiple unrelated areas, the right answer is usually "split your commits." The skill won't lie for you.
- It never runs `git add`, `git push`, `git rebase`, `--no-verify`, or `--amend`. The only repo-mutating command it can run is `git commit -S` in commit mode.
- Commit mode always signs with GPG (`-S`). If your signing key isn't configured, it'll surface the error and fall back to draft.

---
