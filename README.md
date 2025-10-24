# awesome-github-copilot 🔭

[![wakatime](https://wakatime.com/badge/github/anchildress1/awesome-github-copilot.svg)](https://wakatime.com/badge/github/anchildress1/awesome-github-copilot) [![GitHub License](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)

> [!NOTE]
>
> So my initial idea to make these easily accessible with a Copilot Extension is impossible for a couple of reasons. Most recently, GitHub has announced a sunset notice for that entire functionality in favor of MCP.
> The [awesome-copilot](http://github.com/github/awesome-copilot) repo already supports MCP functionality plus an install into VS Code or Visual Studio. So I've started moving some of the better tested versions into that repo, too. I'll try to note where, but this version will _probably_ be more up-to-date anyway.
>
> Drop a line if you want to collaborate or have questions! Check my socials on my profile page. 🦄

---

Welcome to my collection of **Custom Instructions, Prompts, and Chat Modes** — your go-to resource for uniquely crafted, obsessively refined GitHub Copilot personalities. These were built for creative chaos, workflow upgrades, and the occasional code emergency.

Every mode here is handwritten by me (with ChatGPT running background triage and GitHub Copilot chiming in like a never-silent backseat driver). I occasionally take inspiration from other sources (always crediting them), but I always put my own spin on things to make them truly unique.

Each entry is clearly labeled by status, so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis. Use the badges to gauge readiness and stability, then dive into the docs for detailed usage.

Some ideas aren’t fully baked yet — a few are wild concepts still in beta-brainstorm mode, while others are rock-solid and battle-tested in my daily workflow. Either way, everything’s clearly marked so you know exactly what you’re getting into. Check out the [Status Lifecycle & Badges](./docs/status-badge-lifecycle.md) for the full rundown.

> 🦄 If things start to feel a little wild, just remember: it’s not quite _The Pitt_... but I do like to keep you on your toes!

---

## Sparked It. Shaped It. Shoutouts. 💥

> 🦄 This project isn’t fully baked yet - it’s somewhere between “I might be onto something” and “what if I made it do _this_ too?”
> But from the beginning, a few people showed up, encouraged the madness, and gave me room to run wild just to test a theory.
>
> **Thank you** for your ideas, your encouragement, your feedback, and for listening during all the times _I wouldn’t shut up about it!_ These shoutouts are for you. 🥰

### Courtney 🕹️

For jumping into early testing with zero hesitation, breaking everything in sight (in the best way), and somehow still being excited to tell others about it. I appreciate the feedback, the encouragement, and your willingness to _poke the bear_ to make things better.
Your early involvement helps shape what this will become - **thank you** for being part of the chaos.

### Vijaya 🧨

**Thank you** for planting the original idea that I immediately ran with, rewired, and reimagined into something you probably don’t even recognize - but it's still firmly rooted in your vision of what _useful_ actually looks like.
Your influence, clarity, and push for building things that scale across teams lit the fuse. This entire project is built on that spark and simply wouldn’t exist without you.

---

# The `.github/` Directory 📚

Welcome to the heart of this repository’s GitHub automation, documentation, and creative workflow tools. This folder contains the essential resources and configuration files that power collaboration, automation, and custom Copilot experiences across the project.

Whether you’re looking for unique Copilot personalities, reusable prompt templates, or detailed instructions for contributors and bots, you’ll find the entry points here. For the full library of modes, prompts, and instructions, see the [`docs/`](./docs/) folder.

Each document is clearly labeled by status (see [Status Lifecycle & Badges](./docs/status-badge-lifecycle.md)), so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis.

> 🦄 This repo thrives on creative chaos and workflow upgrades. If you’re new, start here to get oriented!

## Getting Started 🚀

**New to this repository?** Start with these essential guides:

- **[🎯 REPO-SETUP.md](./REPO-SETUP.md)** - Quick 5-minute setup for new developers
- **[🤝 CONTRIBUTING.md](./CONTRIBUTING.md)** - Save time and check out [github/awesome-copilot](https://github.com/github/awesome-copilot)
- **[🛠️ DEVELOPMENT.md](./DEVELOPMENT.md)** - Technical details and advanced workflows

These guides ensure you understand our standards and can contribute effectively from day one.

---

## Custom Instructions 🤹

This is where the magic lives — reusable, testable, sometimes over-engineered instructions for GitHub Copilot and other AI agents. These aren’t prompts you paste once and forget — they’re designed to behave like little command-line utilities for your agent.

> [!NOTE]
> If you're using VS Code, you can enable custom instructions for Copilot by setting the `⚙️ copilot.customInstructions`field in your settings. If you're _not_ using VS Code... well, you probably know what you're doing and I trust you to handle it.

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`design-principles`](./docs/instructions/design-principles.md) | [![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](./docs/instructions/design-principles.md) | Evaluates design decisions for clarity, stability, and future impact | Inspired by legacy code PTSD and late-night refactors |
| [`logging-best-practices`](./docs/instructions/logging-best-practices.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](./docs/instructions/logging-best-practices.md) | Checklist of logging do's and don'ts with multi-language examples | Designed to power [`The Logfather`](./docs/chatmodes/logfather.md) chat mode, but not actively used there anymore |
| `format-conventional-commit` | ![Removed - Dark Gray](https://img.shields.io/badge/status-removed-4B4B4B.svg) | | Modern models are capable of handling this natively. |
| `analyze-git-diff` | ![Removed - Dark Gray](https://img.shields.io/badge/status-removed-4B4B4B.svg) | | No longer necessary with modern models |

> 🦄 If Athena helped you bring order to your chaos, leave a star. You know she’s not asking for it — but she earned it.

---

## Prompts 🧑‍🚀

These are your spectral conductors — high-level prompts designed for Agent Mode that don’t _do_ the work, they summon the right specialists to do it for them. Think: “raise the Diff Philosopher, call in the Commit Surgeon, validate it all without lifting a mortal finger.”

Each one knows exactly which tools to use (`#changes`, `#editFiles`, `#runInTerminal`) and when to call them. You’re not just generating content — you’re performing a séance on your staging area with precision and a clipboard.

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`generate-commit-message`](./docs/prompts/generate-commit-message.md) (v2) | [![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)](./docs/prompts/generate-commit-message.md) | One-shot commit message generator with RAI annotation | Simple, responsible, zero orchestration. |
| `get-current-timestamp` | ![Deprecated - Gray](https://img.shields.io/badge/status-deprecated-A0A0A0.svg) | Prompts Copilot to return the current timestamp in a standard format | Recent updates to Copilot's system instructions means it's now capable of handling this one on its own. |
| `generate-commit-message` (v1) | ![Removed - Dark Gray](https://img.shields.io/badge/status-removed-4B4B4B.svg) | Original prompt was too noisy for newer models, re-written with that in mind as v2. | |

---

# Chat Modes 👷‍♂️

Welcome to my collection of Chat Modes - your go-to ER for uniquely crafted GitHub Copilot personalities, all designed for creative chaos, workflow upgrades, and occasional code emergencies. Every mode here is handpicked by me (with ChatGPT running triage in the background).

> 🦄 If things start to feel a little wild, just remember: it’s not quite The Pitt—but we do like to keep you on your toes.

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`hlbpa`](./docs/chatmodes/hlbpa.md) (High-Level Big-Picture Architect) | [![Status: Polish (purple badge)](https://img.shields.io/badge/status-polish-9B5DE5.svg)](./docs/chatmodes/hlbpa.md) | Configure Copilot Chat (or any AI/MCP extension host) to act as a Principal Systems Architect focused on high-level, architectural **documentation and review**. | Not designed to write code or tests. <br>**Note:** This also lives in [awesome-copilot](https://github.com/github/awesome-copilot) repo. |
| [`logfather`](./docs/chatmodes/logfather.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](./docs/chatmodes/logfather.md) | Secure, structured log enforcement with swagger and severity | Works alone or paired with `logging-best-practices` |
| [`instructionalist`](./docs/chatmodes/instructionalist.md) | [![Status: Tweak (orange badge)](https://img.shields.io/badge/status-tweak-FB5607.svg)](./docs/chatmodes/instructionalist.md) | Interactive, section-driven repo instructions wizard with a detective vibe | Section metadata built-in; fun mode available |
| [`Principal Pragmatist`](./docs/chatmodes/pragmatist.md) | [![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](./docs/chatmodes/pragmatist.md) | Configure Copilot Chat to act as a senior-to-principal engineer 🧭: concise, pragmatic, humorous, and peer-level. Always considers all options 🔍, challenges when needed 🤝, and obeys instructions to the letter 🛠️. | This works for most everything _except_ what I wrote it for. \[WIP] |

> 🦄 Request several artifacts in one go to maximize each run. It may use extra GitHub Actions minutes, but you'll save on premium requests by reducing the total number of prompts.

---

> ⭐️ If you tested any of the above modes and it helped you out, leave a star! If it failed spectacularly, let me know and I'll investigate. Check back soon for updates.

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
