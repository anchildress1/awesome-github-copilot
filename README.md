# awesome-github-copilot

> [!IMPORTANT]
>
> 🦄 Hack Time Update: Contest Mode Activated!
>
> I’m off chasing glory in a coding contest through the end of September, 2025, so this repo’s usual hustle is on a quick coffee break. I’ll ninja-drop updates whenever I can between rounds, but please hang tight while I duke it out on the leaderboard.
>
> Thanks for your patience - and may your builds always pass! 🏅✨

Welcome to my collection of **Custom Instructions, Prompts, and Chat Modes** — your go-to resource for uniquely crafted, obsessively refined GitHub Copilot personalities. These were built for creative chaos, workflow upgrades, and the occasional code emergency.

Every mode here is handwritten by me (with ChatGPT running background triage and GitHub Copilot chiming in like a never-silent backseat driver). I occasionally take inspiration from other sources (always crediting them), but I always put my own spin on things to make them truly unique.

Each entry is clearly labeled by status, so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis. Use the badges to gauge readiness and stability, then dive into the docs for detailed usage.

Some ideas aren’t fully baked yet — a few are wild concepts still in beta-brainstorm mode, while others are rock-solid and battle-tested in my daily workflow. Either way, everything’s clearly marked so you know exactly what you’re getting into. Check out the [Status Lifecycle & Badges](./docs/status-badge-lifecycle.md) for the full rundown.

> 🦄 If things start to feel a little wild, just remember: it’s not quite _The Pitt_... but I do like to keep you on your toes!

---

---

## 💥 Sparked It. Shaped It. Shoutouts.

> 🦄 This project isn’t fully baked yet - it’s somewhere between “I might be onto something” and “what if I made it do _this_ too?”
> But from the beginning, a few people showed up, encouraged the madness, and gave me room to run wild just to test a theory.
>
> **Thank you** for your ideas, your encouragement, your feedback, and for listening during all the times _I wouldn’t shut up about it!_ These shoutouts are for you. 🥰

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

Hand-tuned AI workflows for common dev tasks — written for Copilot, but useful for any AI with a clue.

If you’re using VS Code, these load automatically when your file matches the `applyTo` pattern. If not, just pull them in manually with a trusty `#file` reference and keep movin’.

| File | Status | Purpose | Notes |
| - | :-: | - | - |
| [`format-conventional-commit`](#-format-conventional-commit) | [![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)]() | Turns your ordinary commit into beautifully conventional git poetry | Contains RAI trailers |
| [`analyze-git-diff`](#-analyze-git-diff) | [![Status: Refining (purple badge)](https://img.shields.io/badge/status-refining-6B33A2.svg)]() | Parses the git diff and generates a clean, contextual explanation designed for use in the commit message body — because “fixed stuff” isn’t enough. | |
| [`design-principles`](#-design-principles) | [![Status: Final (green badge)](https://img.shields.io/badge/status-final-32852F.svg)]() | Reviews architectural and design choices for testability, scalability, and long-term regret avoidance | Ideal for early planning, system diagrams, or "wait... why did we do it that way?" moments |

---

### ✨ Format Conventional Commit

[![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)]()

Use this when you want a commit message that doesn’t just _pass linting_ - it tells the real story. Whether you're refining a draft or pulling details straight from your `git diff`, this mode delivers clean, compliant messages with just the right amount of nerdy precision. See [`format-conventional-commit.instructions.md`](.github/instructions/format-conventional-commit.instructions.md) for the full breakdown.

#### 💡 Highlights

- ✅ **Objective explanations**: Strips the drama, keeps the facts - clearly explains what changed and why
- ✅ **Context-aware**: Pulls from everything it’s got, but refuses to fake it - uses `(TBD)` when things get murky
- ✅ **Breaking change callouts**: Loud and clear when something’s gonna break, with suggested mitigations
- ✅ **RAI disclaimers**: Adds my Responsible AI trailer so you know where the humans end and the models begin (works with more than just Copilot)

#### ⛔️ Constraints

- Using a commit linter like `commitlint`? Validation issues may slow things down a bit
- Missing context? You’ll get a `(TBD)` and a neat little list of follow-up questions
- Output is **just** the raw commit message—no intro, no fluff, no commentary

#### 📟 Example Minimal Prompt

```markdown
Generate a commit message for changes defined in `#diff-report.tmp` using instructions in `#commit-message.instructions.md`.
```

> [!TIP]
>
> Running this in Agent Mode? It'll automatically generate the diff for you using `#changes` or `#runInTerminal`.
> Flying solo? Use `git diff --staged > diff.tmp` to roll your own, then feed it in manually. Either way, you’re golden.

---

### ✨ Analyze Git Diff

[![Status: Refining (purple badge)](https://img.shields.io/badge/status-refining-6B33A2.svg)]()

This instruction powers the commit message body generator inside [`format-conventional-commit`](#-format-conventional-commit), but it’s just as handy on its own. Feed it any `git diff` and it’ll return a clean, no-nonsense breakdown of what changed. For the full expert workflow, see [`analyze-git-diff.instructions.md`](.github/instructions/analyze-git-diff.instructions.md).

#### 💡 Highlights

- ✅ **Context-aware**: Generates a sharp, assumption-free bullet list based on your diff and any available chat context
- ✅ **Prompts for gaps**: Flags missing info with `(TBD)` and adds smart follow-up questions at the end
- ✅ **Breaking change callouts**: Loud and clear — anything risky gets a proper label so you don’t miss it

### ⛔️ Constraints

- No fake rationale — if it doesn't know _why_, it says so with `(TBD)`
- Output is a pure markdown bullet list — no summary, no side notes, no small talk
- Keeps lines under 100 characters for clean commit body compatibility
- Won’t stop early — explains every change or flags it for follow-up

### 📟 Example Minimal Prompt

```markdown
Please analyze the following git diff using the instructions in `.github/instructions/analyze-git-diff.instructions.md`.
```

> [!IMPORTANT]
>
> In Ask Mode, chat history isn’t saved and `#changes` isn’t available.
> You’ll need to generate your own diff file with:
> `git diff --staged > diff.tmp`
> Then reference it manually in your prompt as `#diff.tmp`.

---

---

### ✨ Design Principles

[![Status: Final (green badge)](https://img.shields.io/badge/status-final-32852F.svg)]()

This one’s for your inner architect — or anyone who’s ever rewritten their own feature three times because “I finally figured out how it should work.” Give it a diagram, a structure, or a description of your system, and it’ll tear it apart just enough to build it better.

#### 💡 Highlights

- ✅ **Encourages clarity**: Forces explicit decisions — no more vague “we’ll figure it out later”
- ✅ **Flags risk areas**: Points out brittle spots, circular dependencies, or testing traps
- ✅ **Non-blocking by design**: It won’t say you failed — it just gives you better questions to ask

#### ⛔️ Constraints

- Not for code review — doesn’t read or analyze implementation
- Requires a system-level input: diagram, architecture text, or structure block
- May return questions, not answers — it’s a thought partner, not a judge

#### 📟 Example Minimal Prompt

```markdown
Evaluate this proposed architecture using `#.github/instructions/design-principles.instructions.md`. Target: `#cart` and `#checkout` modules.
```

---

---

## 🎼 Prompts

Hand-crafted prompt templates for directing the AI symphony. These aren’t instructions or personas — they’re conductors: fully orchestrated workflows that tell Copilot when to call in the specialists (like the 🧠 Commit Surgeon or 🎩 Diff Philosopher).

Each one uses `agent` mode and is designed to act as a lead prompt that orchestrates other instructions behind the scenes.

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`generate-commit-message`](#-generate-commit-message) | [![Status: Iterating (orange badge)](https://img.shields.io/badge/status-iterating-FF6600.svg)]() | Directs Copilot to generate and validate a Conventional Commit using diff analysis and formatting experts | Uses Maestro persona to coordinate two instruction layers |

---

### 🎼 Generate Commit Message

[![Status: Iterating (orange badge)](https://img.shields.io/badge/status-iterating-FF6600.svg)]()

Think of this as the AI version of a pit conductor — not writing the music, but cueing every section at just the right time. This agent-mode prompt coordinates two separate instruction files: one to explain the `git diff`, and one to craft the final commit message. It validates the result using `commitlint` and saves the output to `commit.tmp`.

#### 💡 Highlights

- ✅ **Agent Mode**: Designed for tools like GitHub Copilot Agent or compatible AI extensions
- ✅ **Delegates with purpose**: Relies on `analyze-git-diff` and `format-conventional-commit` to do the heavy lifting
- ✅ **Validates output**: Ensures the final commit passes `commitlint` before saving or displaying
- ✅ **Flexible input**: Works with provided `diff` or auto-generates one using `#changes` if available

#### ⛔️ Constraints

- Doesn’t do analysis or formatting itself — it just conducts
- Requires `commitlint` validation to succeed before completing
- Only produces the final commit message — no commentary, no helper text

#### 📟 Example Minimal Prompt

```markdown copy
/generate-coommit-message for all staged changes
```

> [!TIP]
> This works best in Agent Mode, where `#changes`, `#runInTerminal`, and `#editFiles` are available. If you’re flying manual, generate your own diff using:
>
> `git diff --staged > diff.tmp`
>
> Then reference it in the prompt as `#diff.tmp`.

---

---

## 📟 Chat Modes

Custom Copilot personalities, built for focused chaos. Use them in GitHub Copilot Chat or any AI extension that supports custom prompts.

Each mode brings its own voice, purpose, and attitude — because sometimes you need a debugger, and sometimes you need a hype squad. 🥳

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`hlbpa`](#-hlbpa-high-level-big-picture-architect-chat-mode) (High-Level Big-Picture Architect) | ![Status: Iterating (orange badge)](https://img.shields.io/badge/status-iterating-FF6600.svg) | Configure Copilot Chat (or any AI/MCP extension host) to act as a Principal Systems Architect focused on high-level, architectural **documentation and review** | Not designed to write code or tests. |

---

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

---

> ⭐️ If you tried a chat mode and it helped you out, leave a star! Check back soon for updates.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
