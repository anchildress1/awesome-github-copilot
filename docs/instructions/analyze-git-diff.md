## ✨ Analyze Git Diff (Athena Grant Edition)

\[![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)]

This instruction is Athena. It shows up first, surveys the entire scene, and calmly reports exactly what happened — no guesswork, no drama, just facts. Feed it a `git diff`, and it will return a structured, objective breakdown you can trust.
See [`analyze-git-diff.instructions.md`](./analyze-git-diff.instructions.md) for more.

> [!TIP]
>
> You don’t need to run this directly unless you want to. It’s already built into Bobby’s workflow — but Athena’s always on call if you need her to take point.

### 🛠️ Installation & Usage

1. Run the agent with this instruction or pass in a saved diff file (e.g., `diff.tmp`).
2. The agent will:
   - Analyze the full diff and chat context
   - Output a markdown bullet list (≤100 chars/line)
   - Use `(TBD)` for missing rationale and group questions at the end

### ✅ Why Use This Instruction?

- Cuts straight to the facts — no filler, no hand-waving
- Flags unclear reasoning and prompts you to investigate
- Highlights breaking changes clearly and calmly

### ⛔ Constraints

- Never invents rationale — it marks ambiguity with `(TBD)`
- Only outputs a bulleted markdown list
- No line exceeds 100 characters
- Won’t stop until the entire diff is explained or flagged

### 📟 Example Minimal Prompt

```markdown copy
Analyze `#diff.tmp` using `#./.github/instructions/analyze-git-diff.instructions.md`.
```

---

<small>Written by Ashley Childress. Powered by GitHub Copilot and ChatGPT. Backed by Bobby Nash and Athena Grant.</small>
