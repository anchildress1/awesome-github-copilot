# awesome-github-copilot

🚧 WIP: My AI prompts, chat modes & instructions - curated by me (and ChatGPT). Updates often!

> [!IMPORTANT]
>
> 🦄 Hack Time Update: Contest Mode Activated!
>
> I’m off chasing glory in a coding contest through the end of September, 2025, so this repo’s usual hustle is on a quick coffee break. I’ll ninja-drop updates whenever I can between rounds, but please hang tight while I duke it out on the leaderboard.
>
> Thanks for your patience - and may your builds always pass! 🏅✨

Welcome to my collection of Custom Instructions, Prompts and Chat Modes - your go-to ER for uniquely crafted GitHub Copilot personalities, all designed for creative chaos, workflow upgrades, and occasional code emergencies. Every mode here is handpicked by me (with ChatGPT running triage in the background).

Each one is clearly labeled by status, so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis.

> 🦄 If things start to feel a little wild, just remember: it’s not quite The Pitt - but we do like to keep you on your toes.

---

---

## 💥 Sparked It. Shaped It. Shoutouts.

> 🦄 This project isn’t fully baked yet - it’s somewhere between “I might be onto something” and “what if I made it do _this_ too?”
> But from the beginning, a few people showed up, encouraged the madness, and gave me room to run wild just to test a theory.
>
> **Thank you** for your ideas, your encouragement, your feedback, and your willingness to let it get weird. These shoutouts are for you.

---

### 🕹️ Courtney

For jumping into early testing with zero hesitation, breaking everything in sight (in the best way), and somehow still being excited to tell others about it. I appreciate the feedback, the encouragement, and your willingness to _poke the bear_ to make things better.
Your early involvement helps shape what this will become - **thank you** for being part of the chaos.

---

### 🧨 Vijaya

**Thank you** for planting the original idea that I immediately ran with, rewired, and reimagined into something you probably don’t even recognize - but it's still firmly rooted in your vision of what _useful_ actually looks like.
Your influence, clarity, and push for building things that scale across teams lit the fuse. This entire project is built on that spark and simply wouldn’t exist without you.

---

---

## 📋 Instructions

AI-powered Copilot guidelines for common tasks. Manually pull a task into context, or use the corresponding glob pattern to auto-apply it in your workflow.

| File | Status | Purpose | Notes |
| - | :-: | - | - |
| [`generate-commit-message`](#-generate-commit-message) | ![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg) | Generate conventional commit messages with validation | Contains RAI trailers |

---

## ✨ Generate Commit Message

![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)

Refer to [`generate-commit-message.instructions.md`](.github/instructions/generate-commit-message.instructions.md) for the full expert workflow.

### 💡 Highlights

- ✅ **Ensures conventional commits**: Follows Conventional Commits 1.0.0 spec and your repo's commitlint config
- ✅ **Assumption-free**: Never guesses "why" - uses `(TBD)` and aggregates questions for user review
- ✅ **Validation built-in**: Will not stop until a valid, linted commit message is produced
- ✅ **Outputs to file**: Creates `commit.tmp` for easy validation and reuse

### ⛔️ Constraints

- Never guesses "why" - uses `(TBD)` and aggregates questions for user at end
- Only outputs raw commit message (no explanations)
- Will not stop until a valid, linted commit message is produced

### 📟 Example Minimal Prompt

```markdown
Please generate a conventional commit message for all staged changes using the instructions in `.github/instructions/commit-message.instructions.md`.
```

---

## 📄 Current Chat Modes

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`hlbpa`](#-hlbpa-high-level-big-picture-architect-chat-mode) (High-Level Big-Picture Architect) | ![Status: Iterating (orange badge)](https://img.shields.io/badge/status-iterating-FF6600.svg) | Configure Copilot Chat (or any AI/MCP extension host) to act as a Principal Systems Architect focused on high-level, architectural **documentation and review** | Not designed to write code or tests. |

## ✨ HLBPA (High-Level Big-Picture Architect) Chat Mode

Refer to the [HLBPA Chat Mode README](.github/chatmodes/hlbpa.chatmode.md) for detailed insights and instructions on how to use this chat mode.

> 🦄 Request several artifacts in one go to maximize each run. It may take longer to execute, but you'll save on premium requests.

### 💡 Highlights

- ✅ **Designed for cost efficiency**: Feed the XML file directly to your Copilot Coding Agent or use the MD file as an Agent Chat Mode, and then prompt as needed.
- ✅ **Optimized for Copilot Coding Agent** (tested with Claude Sonnet 4)
- ✅ Diagrams use **standard Mermaid syntax**; alternative artifact types supported (table/test/gapscan)
- ✅ **Still iterating!** Not all workflows are fully tested yet, but core documentation/diagramming works well

### ⛔️ Constraints

- Will _**not**_ modify your codebase or tests
- **Documentation mode only** - never generates implementation plans of any kind

### 📟 Example Minimal Prompt

```markdown
Please generate high-level documentation for this repo using the provided HLBPA chat mode. My name is Jane Doe. Artifact: architecture diagram. Target: #directory:controllers.
```

---

> ⭐️ If you tried a chat mode and it helped you out, leave a star! Check back soon for updates.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
