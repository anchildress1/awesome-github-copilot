# Generate Simple Conventional Commit Message 🧠

[![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)]()

This one exists because the old commit generator was trying too hard. It walked Copilot through every diff like a nervous parent, while modern models were already doing the homework on their own.

So this version simplifies the job: read your staged changes, figure out what happened, and write a [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) to `./commit.tmp`.

No step-by-step rituals. No noise. Just intent, attribution, and accuracy.

> Good commits tell the truth about what changed and who helped.

---

## Why This Exists 💡

When GitHub changed the rules, the original multi-step prompt became irrelevant. Copilot doesn’t need training wheels anymore — it just needs the same thing we do: guardrails.

This version keeps those. The format, the tone, and the responsibility stay. Everything else got cut, because all it ever needed to do was make clear, traceable history.

---

## RAI Footers Explained 🧾

Every commit that used AI to get there should say so. That’s not a disclaimer — it’s context.

If you haven’t read it yet, the [RAI section of my blog post](https://dev.to/anchildress1/can-we-set-the-record-straight-ai-content-and-a-bit-of-sanity-1inj#5-ai-code-is-ai-content-writers-you-too) walks through why that matters and why I’m not budging on it. This isn’t about permission. _It’s about provenance._

Use **one** footer — no more, no less.

```text
Generated-by: GitHub Copilot <github.copilot@github.com>
Co-authored-by: GitHub Copilot <github.copilot@github.com>
Assisted-by: GitHub Copilot <github.copilot@github.com>
Commit-generated-by: GitHub Copilot <github.copilot@github.com>
```

That’s how we draw the line between collaboration and confusion.

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

Related DEVOPS-2025
Co-authored-by: GitHub Copilot <github.copilot@github.com>
```

That message gets written to `commit.tmp` and echoed right back in chat — ready to use, or tweak, or question out loud if you want to see how honest it feels.

---

## Philosophy 🧭

This isn’t really about making better commit messages. It’s about leaving a paper trail that means something.

AI doesn’t erase authorship — it complicates it. So this little generator exists to keep that balance visible: you write code, Copilot helps, and both of you sign the work the same way anyone else would.

> Because if we’re going to build with AI, we should at least have the decency to leave our names on the door.

And if you want to go one better — use a **GPG key** to sign your commits and include your own `Signed-off-by` footer. That extra signature isn’t performative; it’s proof. It says, **this was reviewed, this was intentional, _and this is mine_.**

---

🛡️ _Generated with the help of ChatGPT as directed by Ashley Childress_
