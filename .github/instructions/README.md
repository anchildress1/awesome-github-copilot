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
| [`format-conventional-commit`](#-format-conventional-commit-bobby-nash-edition) | [![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)](#-format-conventional-commit-bobby-nash-edition) | Converts staged changes into a conventional commit message | Utilizes companion [diff analysis instruction](./analyze-git-diff.instructions.md) |
| [`analyze-git-diff`](#-analyze-git-diff-athena-grant-edition) | [![Status: Refining (purple badge)](https://img.shields.io/badge/status-refining-6B33A2.svg)](#-analyze-git-diff-athena-grant-edition) | Analyze git diff and generate explanations | Best used before commit generation for better results |
| [`design-principles`](#-design-principles-hen-house-edition) | [![Status: Final (green badge)](https://img.shields.io/badge/status-final-32852F.svg)](#-design-principles-hen-house-edition) | Evaluates design decisions for clarity, stability, and future impact | Inspired by legacy code PTSD and late-night refactors |
| [`logging-best-practices`](../../docs/instructions/logging-best-practices.md) | [![Status: Draft (red badge)](https://img.shields.io/badge/status-draft-D90429.svg)]() | Checklist of logging do's and don'ts with multi-language examples | Designed to power [`The Logfather`](../../docs/chatmodes/logfather.md) chat mode |

---

## ✨ Format Conventional Commit (Bobby Nash Edition)

[![Status: Validating (blue badge)](https://img.shields.io/badge/status-validating-0070A3.svg)](#-format-conventional-commit-bobby-nash-edition)

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

## ✨ Analyze Git Diff (Athena Grant Edition)

[![Status: Refining (purple badge)](https://img.shields.io/badge/status-refining-6B33A2.svg)](#-analyze-git-diff-athena-grant-edition)

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

## ✨ Design Principles (Hen House Edition)

[![Status: Final (green badge)](https://img.shields.io/badge/status-final-32852F.svg)](#-design-principles-hen-house-edition)

Like a watchful mother hen (or a really opinionated senior dev), this instruction circles your design decisions, pokes at your logic, and clucks loudly anytime your architecture starts to look like a spaghetti-and-meatball special.

Feed it your system diagram, component interface, or a block of core logic. It will return a structured list of opinions, critiques, and validation questions — always focused on scalability, clarity, testability, and _vibe_.

See [`design-principles.instructions.md`](./design-principles.instructions.md) for full guidance.

> [!TIP]
>
> Use it early and often. Better to get roasted by a fake chicken than your future tech lead.

### 🛠️ Installation & Usage

1. Give the agent a system diagram, architecture block, or code structure description.
2. It will:
   - Identify weak design decisions and assumptions
   - Suggest design alternatives (with tradeoffs)
   - Flag risks to clarity, testing, or long-term evolution
3. You’ll get a markdown list of issues + mitigation questions

### ✅ Why Use This Instruction?

- Forces you to justify every choice (and that’s a good thing)
- Promotes clearer, simpler, more maintainable designs
- Great for early-stage planning or late-night doubt spirals

### ⛔ Constraints

- No implementation feedback — design only
- Doesn’t review code syntax or formatting
- Will not give a “pass/fail” judgment — just discussion points

### 📟 Example Minimal Prompt

```markdown copy
Please evaluate the design of this proposed component using `#.github/instructions/design-principles.instructions.md`. Artifact: `#subsystems.mmd`.
```

---

> 🦄 If Athena helped you bring order to your chaos, leave a star. You know she’s not asking for it — but she earned it.

---

<small>Written by Ashley Childress. Powered by GitHub Copilot and ChatGPT. Backed by Bobby Nash and Athena Grant.</small>
