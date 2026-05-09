# Generate Commit Message Skill 🧠

![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)

This is the skill you point at when you want a Conventional Commit message that's:

- derived strictly from the diff (not vibes)
- formatted like a grown-up (72/100 char limits, sane blank lines)
- stamped with AI attribution (because provenance matters)

Skill source: [`skills/generate-commit-message/SKILL.md`](../../skills/generate-commit-message/SKILL.md)

> 🦄 **Why this exists:** writing commit messages is important and annoying — perfect job for automation.
> Automation still doesn't get to be sloppy:
>
> - deterministic output
> - lint-friendly formatting
> - honest about AI involvement

---

## What It Does 🛠️

When invoked, the skill:

- reads the highest-priority diff evidence (staged first, then working tree)
- infers the best-fit Conventional Commit type (`docs`, `fix`, `feat`, etc.)
- writes **exactly one** commit message into `commit.tmp`
- adds **exactly one** AI attribution footer (`Generated-by`, `Co-authored-by`, `Assisted-by`, or `Commit-generated-by`)

Hard boundary: it does **not** stage, commit, push, or mutate history. It just drafts the message.

---

## How to Use It 📝

1. Make your changes.
2. **Optionally stage them** (recommended if you want the commit message to match what you intend to commit).
3. Invoke the skill and let it write `commit.tmp`.

If the staged diff is empty, it falls back to the working tree diff.
If *both* are empty, it stops (because there's nothing to describe).

---

## Output Rules (The Parts That Keep You Out of Trouble) 📏

The message must follow this structure:

- Subject line: `type(optional-scope): subject` (≤ 72 chars)
- Exactly one blank line
- Optional single-line bullets (each line ≤ 100 chars; no wrapped bullets)
- Exactly one blank line
- Footers (AI attribution required)

No extra blank lines. No paragraphs that wrap at 143 characters like a novel. No file lists.

---

## AI Attribution (Deterministic, Not Performative) 🖋️

The skill selects **exactly one** attribution tier based on the diff:

- **Generated-by**: AI wrote most of the changed lines
- **Co-authored-by**: AI did a meaningful chunk
- **Assisted-by**: AI did minor but real edits
- **Commit-generated-by**: AI only drafted the commit message

If it's unclear, it defaults to **crediting the human more** (i.e., the less-crediting tier).

---

## Example Output 📤

```text
docs(skills): document generate-commit-message skill

- Add skill docs page with usage rules and attribution guidance
- Update README skills table to include generate-commit-message

Assisted-by: GitHub Copilot <copilot@github.com>
```

That message gets written to `commit.tmp` and echoed back in chat.

---

## Practical Notes 🧰

- If your repo enforces commitlint, this skill is designed to play nicely — but you still own the final message.
- If you touched multiple unrelated areas, the *correct* answer is usually "split your commits." The skill won't lie for you.

---
