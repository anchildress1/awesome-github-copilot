## ✨ Format Conventional Commit (Bobby Nash Edition)

[![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)]()

This instruction brings Bobby Nash energy: calm, dependable, and always prepared. It reads your staged changes and produces a clean, conventional commit message — lintable, readable, and responsibly documented. No shortcuts. No excuses.
See [`format-conventional-commit.instructions.md`](./format-conventional-commit.instructions.md) for the full expert workflow.

> [!TIP]
>
> This instruction quietly calls on `analyze-git-diff` (Athena) to get the full story before committing. You don’t have to ask — Bobby’s already got backup on the way.

### 🛠️ Installation & Usage

1. Stage your changes in git.
2. Run the Copilot agent with this instruction.
3. The agent will:
   - Analyze all staged changes with full context
   - Generate a commit message that meets Conventional Commits + commitlint
   - Output to `commit.tmp` and/or in the chat window
4. Validate the result (optional):
   ```bash copy
   npm run commitlint -- commit.tmp
   ```

### ✅ Why Use This Instruction?

- Delivers structured, assumption-free messages
- Highlights breaking changes and unresolved questions
- Makes your repo easier to maintain — now _and_ six months from now

### ⛔ Constraints

- No made-up reasons — uses `(TBD)` when logic is unclear
- Output is a raw commit message only — no summary or sidebar
- Refuses to complete until a valid, lint-passing message is produced

### 📟 Example Minimal Prompt

```markdown copy
Generate a commit message for staged changes using `#./.github/instructions/format-conventional-commit.instructions.md`.
```

### 📟 Alternate: Using VS Code

Want this to run automatically from the Command Palette? Add the following to your settings:

```json copy
"github.copilot.chat.commitMessageGeneration.instructions": [
  {
    "file": ".github/instructions/format-conventional-commit.instructions.md"
  }
]
```

Then:

1. Stage your changes.
2. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`).
3. Run `Copilot: Generate Commit Message`.

---

<small>Ashley Childress had help writing this file from ChatGPT.</small>
