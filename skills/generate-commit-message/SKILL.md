---
status: check
name: generate-commit-message
description: >
  Generate a single Conventional Commit message with proper AI attribution.
argument-hint: "optional: JIRA-123 or issue key/scope hint"
allowed-tools: Bash, Read, Write
disable-model-invocation: false
user-invocable: true
---

## Purpose

When commit-message generation is requested or implied, produce exactly one Conventional Commit message derived
strictly from the git diff and write it to `commit.tmp`.

## Inputs

- Preferred: staged diff via `git --no-pager diff --cached` or equivalent tool
- Fallback: working tree diff via `git --no-pager diff` or equivalent tool

## Hard safety boundary

- NEVER run: `git add`, `git commit`, `git push`, history mutation commands unless directed by user.
- NEVER modify repository files.
  - Allowed write target: `commit.tmp` ONLY.
  - Forbidden: editing any source/docs/config, generating files, formatting, refactors, etc.
- NEVER infer scope from anything other than: user-provided key > branch name > existing commit.tmp.
- CRITICAL: AI attribution footer is MANDATORY. A commit message without attribution is a failure.

## Deterministic workflow

### 0) Determine commit scope (issue key priority)

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

Implementation steps:

1. Extract issue key from the user input / argument hint (if present).
2. Else run `git --no-pager rev-parse --abbrev-ref HEAD` and extract the first matching issue key.
3. Else, if `commit.tmp` exists:
   - Read the first line.
   - If it matches `type(<scope>):` and `<scope>` matches the Jira key regex, reuse it.
4. Else scope is empty.

### 1) Acquire diff

1. Run: `git --no-pager diff --cached` or equivalent
2. If output is empty, run: `git --no-pager diff` or equivalent
3. If both are empty or error, stop and report: unable to generate commit message (no diff).

### 2) Derive intent (diff-only)

Infer `<type>`, optional `(scope)`, and the subject/body content strictly from diff hunks.
Do not use chat history, memory, or prior commits to decide what changed.

Scope note: scope MUST follow the precedence rules from step 0. Diff may inform type/subject, not scope.

### 3) Estimate AI contribution (quick heuristic)

Based on diff hunks + session memory only, select exactly one attribution tier:

- Majority → `Generated-by`
- Roughly half → `Co-authored-by`
- Minor → `Assisted-by`
- Trivial → `Commit-generated-by`
  If uncertain, default to crediting the human (pick the less-crediting tier).

### 4) Compose message (Conventional Commits)

Structure:

```
<type>(<optional-scope>): <subject>

- <single-line bullet>
- <single-line bullet>

<footer(s)>
```

Formatting rules:

- Subject line: ≤ 72 chars
- Body lines: ≤ 100 chars
- Exactly one blank line after subject
- Exactly one blank line before footers
- No other blank lines
- Body bullets are single-line only (no wrapping)

Writing rules:

- Imperative, present tense; active voice
- Summarize grouped changes; avoid listing files
- Prefer quantified summaries when useful
- Explain what changed and why (not how)

### 5) Footers

Include only applicable footers, in this order:

1. Breaking change (only if user action required):

```
BREAKING CHANGE: <explicit incompatibility and required action>
```

2. RAI attribution (required, at least one):

```
<Attribution-Tier>: <YOUR_AI_NAME> <noreply@email.com>
```

Prohibited:

- Never include `Signed-off-by`

### 6) Pre-save revalidation (staleness guard)

Immediately before writing `commit.tmp`:

1. Re-run staged diff (then fallback diff if needed).
2. If the diff changed vs what was used to draft, abort, re-derive, and regenerate.
3. If diff cannot be re-run, warn output may be stale and proceed best-effort.

### 7) Output contract

- Write exactly one commit message to `commit.tmp`.
- Do not write to or modify any other file.
- Do not run formatting, lint fixes, tests, or any repo mutation.
- Verify `commit.tmp` contains exactly one valid RAI attribution footer before finishing.
