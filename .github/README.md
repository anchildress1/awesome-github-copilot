# 📚 The `.github/` Directory

Welcome to the heart of this repository’s GitHub automation, documentation, and creative workflow tools. This folder contains the essential resources and configuration files that power collaboration, automation, and custom Copilot experiences across the project.

Whether you’re looking for unique Copilot personalities, reusable prompt templates, or detailed instructions for contributors and bots, you’ll find the entry points here. For the full library of modes, prompts, and instructions, see the [`docs/`](../docs/) folder.

Each document is clearly labeled by status (see [Status Lifecycle & Badges](../docs/status-badge-lifecycle.md)), so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis.

> 🦄 This repo thrives on creative chaos and workflow upgrades. If you’re new, start here to get oriented!

---

## 📦 Folder Overview

| Folder | Purpose | Example Contents |
| - | - | - |
| `chatmodes/` | Copilot personalities and chat mode definitions for specialized workflows | `hlbpa.chatmode.md`, `logfather.chatmode.md` |
| `prompts/` | Prompt templates and reusable prompt fragments for Copilot and bots | `pull-request-review.prompt.md`, `commit-message.prompt.md` |
| `instructions/` | Contributor and bot instructions, best practices, and process docs | `design-principles.md`, `logging-best-practices.md` |

> [!INFO]
> For detailed documentation and the full library, visit the [`docs/`](../docs/) directory.

---

## 🤹 Custom Instructions

This is where the magic lives — reusable, testable, sometimes over-engineered instructions for GitHub Copilot and other AI agents. These aren’t prompts you paste once and forget — they’re designed to behave like little command-line utilities for your agent.

> [!INFO]
>
> If you're using VS Code, you can enable custom instructions for Copilot by setting the `⚙️ copilot.customInstructions`field in your settings. If you're _not_ using VS Code... well, you probably know what you're doing and I trust you to handle it.

---

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`format-conventional-commit`](../docs/instructions/format-conventional-commits.md) | [![Status: Check (blue badge)](https://img.shields.io/badge/status-check-3A86FF.svg)](../docs/instructions/format-conventional-commits.md) | Converts staged changes into a conventional commit message | Utilizes companion [diff analysis instruction](./instructions/analyze-git-diff.instructions.md) |
| [`analyze-git-diff`](../docs/instructions/analyze-git-diff.md) | [![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)](../docs/instructions/analyze-git-diff.md) | Analyze git diff and generate explanations | Best used before commit generation for better results |
| [`design-principles`](../docs/instructions/design-principles.md) | [![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](../docs/instructions/design-principles.md) | Evaluates design decisions for clarity, stability, and future impact | Inspired by legacy code PTSD and late-night refactors |
| [`logging-best-practices`](../docs/instructions/logging-best-practices.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](../docs/instructions/logging-best-practices.md) | Checklist of logging do's and don'ts with multi-language examples | Designed to power [`The Logfather`](../docs/chatmodes/logfather.md) chat mode |

> 🦄 If Athena helped you bring order to your chaos, leave a star. You know she’s not asking for it — but she earned it.

---

## 🧑‍🚀 Prompts

These are your spectral conductors — high-level prompts designed for Agent Mode that don’t _do_ the work, they summon the right specialists to do it for them. Think: “raise the Diff Philosopher, call in the Commit Surgeon, validate it all without lifting a mortal finger.”

Each one knows exactly which tools to use (`#changes`, `#editFiles`, `#runInTerminal`) and when to call them. You’re not just generating content — you’re performing a séance on your staging area with precision and a clipboard.

---

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| `generate-commit-message` | [![Status: Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg)](../docs/prompts/generate-commit-message.md) | Directs Copilot to analyze a git diff, format a conventional commit, validate it, and save to `commit.tmp` | Use Agent Mode for best results. |
| [`get-current-timestamp`](../docs/prompts/get-current-timestamp.md) | [![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](../docs/prompts/get-current-timestamp.md) | Prompts Copilot to return the current timestamp in a standard format | Useful for scripts, logs, or automation. |

---

# 👷‍♂️ Chat Modes

Welcome to my collection of Chat Modes - your go-to ER for uniquely crafted GitHub Copilot personalities, all designed for creative chaos, workflow upgrades, and occasional code emergencies. Every mode here is handpicked by me (with ChatGPT running triage in the background).

> 🦄 If things start to feel a little wild, just remember: it’s not quite The Pitt—but we do like to keep you on your toes.

---

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`hlbpa`](../docs/chatmodes/hlbpa.md) (High-Level Big-Picture Architect) | [![Status: Tweak (orange badge)](https://img.shields.io/badge/status-tweak-FB5607.svg)](../docs/chatmodes/hlbpa.md) | Configure Copilot Chat (or any AI/MCP extension host) to act as a Principal Systems Architect focused on high-level, architectural **documentation and review** | Not designed to write code or tests. |
| [`logfather`](../docs/chatmodes/logfather.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](../docs/chatmodes/logfather.md) | Secure, structured log enforcement with swagger and severity | Works alone or paired with `logging-best-practices` |
| [`instructionalist`](../docs/chatmodes/instructionalist.md) | [![Status: Draft (red badge)](https://img.shields.io/badge/status-draft-F72585.svg)]() | Interactive, section-driven repo instructions wizard with a detective vibe | Section metadata built-in; fun mode available |

---

> 🦄 Request several artifacts in one go to maximize each run. It may use extra GitHub Actions minutes, but you'll save on premium requests by reducing the total number of prompts.

> ⭐️ If you tried a chat mode and it helped you out, leave a star! Check back soon for updates.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
