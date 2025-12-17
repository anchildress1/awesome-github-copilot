---
status: "polish"
title: "Generate Conventional Commit Message v3"
description: "Generate a conventional commit message with AI attribution and saves to ./commit.tmp"
tools: [
  "execute",
  "read",
  "edit",
  "search"
]
---

## Goal

Generate a conventional commit message from the best available evidence and write it to `commit.tmp`.

---

## Evidence Priority (STRICT)

1. Repo-aware diff tools (staged first, then working tree)
2. CLI git diff (`--cached`, then working tree)
3. Chat memory only if no diff can be obtained by any method

If memory is used, treat all conclusions as estimated and select attribution via fallback rules.

---

## Commit Structure

- Format: `type(scope): Subject`
- Scope selection:
  1. Ticket/issue ID if clearly relevant (preferred when present)
  2. Area/module keyword (short, specific)
  3. Omit scope if neither applies

Multi-area rule:

- If changes span multiple unrelated areas with no clear dominant area:
  - The commit message must NOT encode this ambiguity
  - The AI should recommend splitting the changes into multiple commits
  - This recommendation must be emitted outside the commit message (chat/stdout), not written to `commit.tmp`

---

## Type Selection (Canonical)

Core policy: choose the lowest-impact valid type consistent with the diff.

Use standard conventional commit types (`fix`, `feat`, `refactor`, `chore`, `docs`, `test`, `ci`, `build`, `perf`, `style`, `revert`).

Semver impact is implicit:

- PATCH: default for fixes, refactors, chores, docs, tests, CI, build, style, perf
- MINOR: `feat` only when adding new user-facing capability
- MAJOR: only when breaking change criteria are met (see rule below)

---

## Breaking Change Rules

A change is breaking only if ALL are true:

- A prior non-draft, non-prerelease release exists (publicly consumable)
- AND upgrading requires users to modify code, config, or usage (explicit user action required)
- AND the change is not backward-compatible

If breaking:

- Add `!` to the subject: `type(scope)!: Subject`
- Add footer: `BREAKING CHANGE: <required user action in one line>`

If no prior release exists, do not mark breaking and do not use `!`.

---

## Formatting Constraints

- Subject ≤ 72 chars
- Body lines ≤ 100 chars
- Body is optional:
  - If body exists: one blank line after subject, bullets are one per line, no wrapping
  - If no body: subject is followed by one blank line, then footers
- Footers:
  - Exactly one blank line before footers
  - No other blank lines

---

## AI Attribution Selection Rules (DETERMINISTIC)

Select exactly one attribution footer based primarily on evidence from the diff.

Primary signal: approximate share of modified/added lines authored by AI in this change.

- Estimate using the diff and any available authorship context.
- Do not use chat memory to change commit content.
- Chat memory may be consulted only to refine attribution when the diff does not reveal authorship signal.

Quantitative brackets (apply top-down, first match wins):

1. **Generated-by**
   - AI authored ≥ 60% of modified/added lines

2. **Co-authored-by**
   - AI authored 25%–59% of modified/added lines

3. **Assisted-by**
   - AI authored 1%–24% of modified/added lines (minor but non-trivial)

4. **Commit-generated-by**
   - AI authored 0% of modified/added lines
   - OR no substantive change beyond message generation

Tie-breakers:

- If unsure between two adjacent brackets, choose the higher attribution.
- Do not downgrade attribution solely to minimize AI credit.
- Do not upgrade attribution without evidence.

Fallback (last resort):

- If no diff can be obtained at all, default to **Co-authored-by**.

---

## AI Attribution Signing

Use this guide when choosing the appropriate AI attribution signature:

| AI Name | Expected Attribution Signature |
| - | - |
| GitHub Copilot | `GitHub Copilot <copilot@github.com>` |
| Verdent AI | `Verdent AI <noreply@verdent.ai>` |
| Claude | `Claude <claude@anthropic.com>` |
| Gemini | `Gemini <gemini@google.com>` |
| Codex | `Codex <codex@openai.com>` |
| ChatGPT | `ChatGPT <chatgpt@openai.com>` |

---

## Workflow

1. Determine evidence source using priority rules (staged preferred when available)
2. Analyze diff for intent and affected areas
3. Check branch name for ticket ID (e.g., PROJ-123) and use as scope if found
4. If multiple unrelated areas are detected:
   - Emit a recommendation to split the changes into multiple commits (outside the commit message)
5. Choose minimal valid type and scope
6. Apply breaking change rule (requires prior real release + required user action)
7. Choose exactly one AI attribution footer using deterministic rules
8. Write message to `commit.tmp`
9. Output the identical commit message in a single code block (chat output or stdout)

---

## Prohibited

- Never run git add/commit/push
- Never modify history
