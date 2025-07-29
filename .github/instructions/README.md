# 🤹 Custom Instructions

This is where the magic lives — reusable, testable, sometimes over-engineered instructions for GitHub Copilot and other AI agents. These aren’t prompts you paste once and forget — they’re designed to behave like little command-line utilities for your agent.

Every instruction is labeled by lifecycle status (see [Status Lifecycle & Badges](../../docs/status-badge-lifecycle.md)), so you’ll know exactly what kind of chaos you’re invoking: draft, refining, validating, or final.

> [!INFO]
>
> If you're using VS Code, you can enable custom instructions for Copilot by setting the `copilot.customInstructions`field in your settings. If you're _not_ using VS Code... well, you probably know what you're doing and I trust you to handle it.

---

## 📄 Current Instructions

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`format-conventional-commit`](#-format-conventional-commit-bobby-nash-edition) | [![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)](#-format-conventional-commit-bobby-nash-edition) | Converts staged changes into a conventional commit message | Utilizes companion [diff analysis instruction](./analyze-git-diff.instructions.md) |
| [`analyze-git-diff`](#-analyze-git-diff-athena-grant-edition) | [![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)](#-analyze-git-diff-athena-grant-edition) | Analyze git diff and generate explanations | Best used before commit generation for better results |
| [`design-principles`](#-design-principles-hen-house-edition) | [![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](#-design-principles-hen-house-edition) | Evaluates design decisions for clarity, stability, and future impact | Inspired by legacy code PTSD and late-night refactors |
| [`logging-best-practices`](../../docs/instructions/logging-best-practices.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)]() | Checklist of logging do's and don'ts with multi-language examples | Designed to power [`The Logfather`](../../docs/chatmodes/logfather.md) chat mode |

> 🦄 If Athena helped you bring order to your chaos, leave a star. You know she’s not asking for it — but she earned it.

---

<small>Written by Ashley Childress. Powered by GitHub Copilot and ChatGPT. Backed by Bobby Nash and Athena Grant.</small>
