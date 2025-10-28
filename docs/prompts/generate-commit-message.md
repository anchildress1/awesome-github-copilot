# Generate Simple Conventional Commit Message 🧠

[![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)](../../.github/prompts/generate-commit-message.prompt.md)

This one exists because the old commit generator was trying too hard. It walked Copilot through every diff like a nervous parent, while modern models were already doing the homework on their own.

This generator creates a Conventional Commit message from your repository changes and writes it to `./commit.tmp` for review.

## How to use 📝

- Stage the changes you want included in the commit (recommended). The generator prefers staged changes but can fall back to unstaged changes if needed.
- Run the generator (via the repository's Copilot workflow). It will attempt to collect changed files and draft a conventional commit message for you.

## What the generator does ⚙️

- It checks that two helper capabilities are available: `runInTerminal` (for running shell checks) and `get_changed_files` (to enumerate changed files).
- If either helper is unavailable, you'll receive a brief chat warning listing only the missing helper(s). This is informational — the generator will continue and produce best-effort output.
- The generator analyzes the changes, infers intent (fix/feat/refactor), estimates AI contribution for the RAI footer, and drafts a concise Conventional Commit message that respects repo lint rules when present.
- The final message is written to `commit.tmp` and also shown in chat so you can copy or edit it before committing.

## Troubleshooting & notes 🛠️

- If file collection fails (for example, `get_changed_files` produces an error), the generator will stop and report the problem — fix the error and try again.
- The RAI attribution footer is required. If a diff-analysis tool is unavailable, the generator will include a short disclaimer that attribution is an estimate based on conversation context.
- If your project enforces commit linting, the generator will try to follow discovered lint rules; you should still verify the message meets your linter before committing.

## Note on Commit Linting 📏

The AI will search for any existing commit lint rules in the repository. If found, it will suggest to the user adding a reference to the relevant instructions (e.g., design principles or logging best practices) to ensure compliance.

> Good commits tell the truth about what changed and who helped.

---

## Why This Exists 💡

When GitHub changed the rules, the original multi-step prompt became irrelevant. Copilot doesn’t need training wheels anymore — it just needs the same thing we do: guardrails.

This version keeps those. The format, the tone, and the responsibility stay. Everything else got cut, because all it ever needed to do was make clear, traceable history.

---

## RAI Attribution Explained 🖋️

Every commit that used AI to get there should say so. That’s not a disclaimer — it’s context about who contributed what.

Choose exactly one footer that best describes the AI's role. Higher-level attributions take precedence:

- **Generated-by**: AI created most of the code (roughly 67-100% AI-written) — the AI wrote all the modified or added code, even if it involved refactoring existing logic
- **Co-authored-by**: AI substantially contributed (roughly 34-66% AI-written) — major AI help with refactoring or new features
- **Assisted-by**: AI made minor edits (roughly 3-33% AI-written) — small fixes or improvements
- **Commit-generated-by**: AI only wrote the commit message — no code changes, just the message itself

Format: `<type>: GitHub Copilot <github.copilot@github.com>`

---

## Issue References 🔗

When your changes relate to an issue or ticket that AI can see, then it will add a footer to show the connection. Different footers indicate different types of relationships:

**`Fixes #123`** - This commit completely solves the issue. The problem is gone, the root cause is addressed, and the issue can be closed.

**`Resolves #456`** - Same as Fixes, but some projects prefer this word. It means the issue is fully resolved.

**`Refs #789`** - This work is related to the issue but doesn't close it. Maybe it's a partial fix, adds tests, or provides context for future work.

---

## Output Example 📤

```text
feat(search-index): introduce incremental indexer with content dedupe

- Add `buildIncrementalIndex()` pipeline for batched documents
- Implement `getPendingDocs()` repository for staged fetches
- Remove legacy full-reindex job per YAGNI
- Add `dedupeByContentHash()` helper to prevent duplicate writes
- Enrich index entries with `ingestedAt` from the datastore
- Add comprehensive test coverage for indexer and repository layers
- Update design notes and runbook to reflect the streamlined flow

Fixes DEVOPS-2025
Co-authored-by: GitHub Copilot <github.copilot@github.com>
```

That message gets written to `commit.tmp` and echoed right back in chat — ready to use, or tweak, or question out loud if you want to see how honest it feels.

---

## Philosophy 🧭

This isn’t really about making better commit messages. It’s about leaving a paper trail that means something.

AI doesn’t erase authorship — it complicates it. So this little generator exists to keep that balance visible: you write code, Copilot helps, and both of you sign the work the same way anyone else would.

> Because if we’re going to build with AI, we should at least have the decency to leave our names on the door.

And if you want to go one better — use a **GPG key** to sign your commits and include your own `Signed-off-by` footer. That extra signature isn’t performative; it’s proof. It says, **this was reviewed, this was intentional, _and it is mine_.**

> 🦄 If you haven't read it yet, I wrote a post about [RAI and commit attribution](https://dev.to/anchildress1/did-ai-erase-attribution-your-git-history-is-missing-a-co-author-1m2l) that walks through why it matters—it's not about permission, _it's about provenance._

---

🛡️ _Generated with the help of ChatGPT and GitHub Copilot as directed by Ashley Childress_
