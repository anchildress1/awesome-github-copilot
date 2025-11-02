# Design Principles (Hen House Edition) ✨

![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)

Like a watchful mother hen (or a really opinionated senior dev), this instruction circles your design decisions, pokes at your logic, and clucks loudly anytime your architecture starts to look like a spaghetti-and-meatball special.

Feed it your system diagram, component interface, or a block of core logic. It will return a structured list of opinions, critiques, and validation questions — always focused on scalability, clarity, testability, and *vibe*.

See [`design-principles.instructions.md`](../../.github/instructions/design-principles.instructions.md) for full guidance.

> [!TIP]
>
> Use it early and often. Better to get roasted by a fake chicken than your future tech lead.

## Installation & Usage 🛠️

1. Give the agent a system diagram, architecture block, or code structure description.
2. It will:
   - Identify weak design decisions and assumptions
   - Suggest design alternatives (with tradeoffs)
   - Flag risks to clarity, testing, or long-term evolution
3. You’ll get a markdown list of issues + mitigation questions

### Why Use This Instruction? ✅

- Forces you to justify every choice (and that’s a good thing)
- Promotes clearer, simpler, more maintainable designs
- Great for early-stage planning or late-night doubt spirals

### Constraints ⛔

- No implementation feedback — design only
- Doesn’t review code syntax or formatting
- Will not give a “pass/fail” judgment — just discussion points

### Example Minimal Prompt 📟

```markdown copy
Please evaluate the design of this proposed component using `#.github/instructions/design-principles.instructions.md`. Artifact: `#subsystems.mmd`.
```

---

<small>Written by Ashley Childress. Powered by GitHub Copilot and ChatGPT.</small>
