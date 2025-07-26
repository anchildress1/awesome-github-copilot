
# 🤹 Custom Instructions

Welcome to the Instructions directory - your source for AI-powered Copilot prompts and automation flows. Each instruction is labeled by lifecycle status (see [Status Lifecycle & Badges](../../docs/status-badge-lifecycle.md)).


> [!INFO]
> In VS Code, you can enable custom instructions for Copilot by setting the `copilot.customInstructions` setting in your user or workspace settings. This allows you to tailor Copilot's behavior with your own prompts and automation flows.

---

## 📄 Current Instructions

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`/generate-commit-message`](generate-commit-message.instructions.md) | [![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)](#-generate-commit-message) | Generate conventional commit messages | Split from its original version |

---

## ✨ Generate Commit Message

[![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)](#-generate-commit-message)

Generate a conventional commit message for all staged changes using GitHub Copilot and includes my personal RAI trailers for AI. Check out my [blog post](https://dev.to/anchildress1/is-github-copilot-safe-the-fun-and-hard-truth-about-responsible-ai-3b95) that explains the reasoning behind this instruction.

Refer to [`generate-commit-message.instructions.md`](./generate-commit-message.instructions.md) for the full expert workflow.

> [!TIP]
> By default, Copilot uses the signed-in user information for personalization. You can override this by setting a custom user instruction in your settings.

### Installation & Usage

1. Stage your changes in git.
2. Use the Copilot agent to run the commit message instructions.
3. The agent will:
	- Analyze staged changes
	- Generate a conventional commit message
	- Output to `commit.tmp` (if edit permission exists) and a copy-paste block in chat
4. Validate with:
	```bash
	npm run commitlint -- commit.tmp
	```

### Why Use This Instruction?

- Ensures every commit message is meaningful, assumption-free, and passes lint
- Follows Conventional Commits 1.0.0 spec and your repo’s commitlint config
- Surfaces all missing context/questions at the end for one-pass review

### Constraints

- Never guesses “why” - uses `(TBD)` and aggregates questions for user at end
- Only outputs raw commit message (no explanations)
- Will not stop until a valid, linted commit message is produced

### Example Minimal Prompt

```markdown
Please generate a conventional commit message for all staged changes using the instructions in `#./generate-commit-message.instructions.md`.
```

### Alternate Example: Using VS Code

If you use VS Code, you can run the Copilot agent directly from the Command Palette:

1. Stage your changes in the Source Control panel.
2. Open the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows/Linux).
3. Type and select `Copilot: Generate Commit Message`.
4. The agent will analyze staged changes and output the commit message to `commit.tmp`.
5. Validate with:
	```bash
	npm run commitlint -- commit.tmp
	```
---

---

> 🦄 If you found this instruction useful, leave a star! Check back for updates.

---

<small>Generated with the help of GitHub Copilot as directed by Ashley Childress</small>
