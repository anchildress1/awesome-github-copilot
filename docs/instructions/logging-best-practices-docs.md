# Logging Best Practices — Instruction ReadMe 🧾

![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)

> "Whether you’re flying solo or under the protection of The Logfather, this one’s got your back."

This instruction file provides a clean, reusable summary of application logging best practices — designed for use with Copilot’s `editFiles` and `readFiles` capabilities.

Originally crafted as a companion to [`The Logfather`](../../agents/logfather.agent.md), it provides opinionated but practical guidance for improving structured logging, log level usage, runtime configuration, and secure output — all **without** requiring infrastructure changes or external dependencies.

---

## Designed for... 🤝

- **The Logfather** agent — for automated agent-driven logging audits and fixes
- **Manual use** — by developers who want to up their observability game
- **Copilot agent tasks** — like logging linting, log upgrades, or secure log refactors

---

## What It Covers ✨

- ✅ JSON-structured logging best practices
- ✅ Log level definitions and guidance
- ✅ Context enrichment (trace IDs, modules, etc)
- ✅ Runtime control of log levels
- ✅ Secure log handling (no PII, no auth leaks)
- ✅ Language-specific examples (Java, Python, JS)

---

## How to Use 📎

You can:

- Drop this into any `.instructions.md` loader or reference it via `#logging-best-practices.instructions.md`
- Bundle it with a agent like The Logfather
- Invoke it directly inside a Copilot Agent or compatible AI tool
- Upload as guide for GitHub Coding Agent

---

## AI Behavior When Used 🧠

When loaded in context, Copilot should:

- Recommend structured JSON log formats
- Insert proper log levels based on context
- Suggest central logger use (but not enforce setup)
- Avoid business logic changes
- Respect scoped paths or modules

---

## Example Prompt 📟

```markdown
Please review this file using `#./instructions/logging-best-practices.instructions.md` and insert structured logs with appropriate levels.
```

> 🎩 Want it automatic? Pair it with [`The Logfather`](../../agents/logfather.agent.md) and let the capo handle it.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
