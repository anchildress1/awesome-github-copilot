# 🎩 Instructionalist Chat Mode

[![Status: Tweak (orange badge)](https://img.shields.io/badge/status-tweak-FB5607.svg)](#-instructionalist-chat-mode) [![Install in Visual Studio Code](https://img.shields.io/badge/Install-Visual%20Studio%20Code-0078d4?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHRpdGxlPmZpbGVfdHlwZV92c2NvZGU8L3RpdGxlPjxwYXRoIGQ9Ik0yOS4wMSw1LjAzLDIzLjI0NCwyLjI1NGExLjc0MiwxLjc0MiwwLDAsMC0xLjk4OS4zMzhMMi4zOCwxOS44QTEuMTY2LDEuMTY2LDAsMCwwLDIuMywyMS40NDdjLjAyNS4wMjcuMDUuMDUzLjA3Ny4wNzdsMS41NDEsMS40YTEuMTY1LDEuMTY1LDAsMCwwLDEuNDg5LjA2NkwyOC4xNDIsNS43NUExLjE1OCwxLjE1OCwwLDAsMSwzMCw2LjY3MlY2LjYwNUExLjc0OCwxLjc0OCwwLDAsMCwyOS4wMSw1LjAzWiIgc3R5bGU9ImZpbGw6IzAwNjVhOSIvPjxwYXRoIGQ9Ik0yOS4wMSwyNi45N2wtNS43NjYsMi43NzdhMS43NDUsMS43NDUsMCwwLDEtMS45ODktLjMzOEwyLjM4LDEyLjJBMS4xNjYsMS4xNjYsMCwwLDEsMi4zLDEwLjU1M2MuMDI1LS4wMjcuMDUtLjA1My4wNzctLjA3N2wxLjU0MS0xLjRBMS4xNjUsMS4xNjUsMCwwLDEsNS40MSw5LjAxTDI4LjE0MiwyNi4yNUExLjE1OCwxLjE1OCwwLDAsMCwzMCwyNS4zMjhWMjUuNEExLjc0OSwxLjc0OSwwLDAsMSwyOS4wMSwyNi45N1oiIHN0eWxlPSJmaWxsOiMwMDdhY2MiLz48cGF0aCBkPSJNMjMuMjQ0LDI5Ljc0N2ExLjc0NSwxLjc0NSwwLDAsMS0xLjk4OS0uMzM4QTEuMDI1LDEuMDI1LDAsMCwwLDIzLDI4LjY4NFYzLjMxNmExLjAyNCwxLjAyNCwwLDAsMC0xLjc0OS0uNzI0LDEuNzQ0LDEuNzQ0LDAsMCwxLDEuOTg5LS4zMzlsNS43NjUsMi43NzJBMS43NDgsMS43NDgsMCwwLDEsMzAsNi42VjI1LjRhMS43NDgsMS43NDgsMCwwLDEtLjk5MSwxLjU3NloiIHN0eWxlPSJmaWxsOiMxZjljZjAiLz48L3N2Zz4=)](vscode:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/instructionalist.chatmode.md) [![Install in Visual Studio Code Insiders](https://img.shields.io/badge/Install-Visual%20Studio%20Code%20Insiders-00b294?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHRpdGxlPmZpbGVfdHlwZV92c2NvZGUtaW5zaWRlcnM8L3RpdGxlPjxwYXRoIGQ9Ik0yMC4zNzUsMy4yOTFhLjg3NC44NzQsMCwwLDEsMS40NjMuNjQ3VjEwLjI1bC04LjM2LDYuNjI0TDkuMTcyLDEzLjYwOFoiIHN0eWxlPSJmaWxsOiMwMDlhN2MiLz48cGF0aCBkPSJNNi4wMTMsMTYuNjY5LDIuMzgsMTkuOEExLjE2NiwxLjE2NiwwLDAsMCwyLjMsMjEuNDQ3Yy4wMjUuMDI3LjA1LjA1My4wNzcuMDc3bDEuNTQxLDEuNGExLjE2NiwxLjE2NiwwLDAsMCwxLjQ4OS4wNjZMOS42LDE5LjkzNVoiIHN0eWxlPSJmaWxsOiMwMDlhN2MiLz48cGF0aCBkPSJNMjEuODM4LDIxLjc0OSw1LjQxMiw5LjAwN2ExLjE2NSwxLjE2NSwwLDAsMC0xLjQ4OS4wNjZsLTEuNTQxLDEuNGExLjE2NiwxLjE2NiwwLDAsMC0uMDc3LDEuNjQ3Yy4wMjUuMDI3LjA1LjA1My4wNzcuMDc3bDE3Ljk5LDE2LjVhLjg3NS44NzUsMCwwLDAsMS40NjYtLjY0NVoiIHN0eWxlPSJmaWxsOiMwMGIyOTQiLz48cGF0aCBkPSJNMjMuMjQ0LDI5Ljc0N2ExLjc0NSwxLjc0NSwwLDAsMS0xLjk4OS0uMzM4QTEuMDI1LDEuMDI1LDAsMCwwLDIzLDI4LjY4NFYzLjMxNmExLjAyNSwxLjAyNSwwLDAsMC0xLjc0OS0uNzI1LDEuNzQ1LDEuNzQ1LDAsMCwxLDEuOTg5LS4zMzhsNS43NjUsMi43NzJBMS43NDgsMS43NDgsMCwwLDEsMzAsNi42VjI1LjRhMS43NDgsMS43NDgsMCwwLDEtLjk5MSwxLjU3NloiIHN0eWxlPSJmaWxsOiMyNGJmYTUiLz48L3N2Zz4=)](vscode-insiders:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/instructionalist.chatmode.md)

> [!IMPORTANT]
> This chat mode does **not** include an XML version like others. It’s designed to be interactive and adaptive.
> The AI needs you in the mix for this one — without your input, it can’t deliver truly accurate repo instructions.

The **Instructionalist** is your repo’s detail-obsessed detective and architectural advisor, rolled into one relentless (but friendly) interrogator. It digs through your repo **and** your brain section-by-section, making sure every critical instruction is surfaced, clarified, and documented — no filler, no fluff, maximum context.

> _“Every section matters. I don’t do shortcuts. If there’s a gap, I’ll find it — if there’s a rule, I’ll catch it. Let’s make your instructions future-proof.”_

---

## 🧩 What Is It?

Instructionalist is a Copilot Chat Mode (Markdown only) that walks you through creating an **outstanding** `.github/copilot-instructions.md` file for your repo.
It’s interactive, adaptive, and never generic:

- Breaks documentation into well-defined sections with clear goals
- Asks targeted questions to fill in gaps
- Encourages (but never nags for) excellence
- Updates output only when you provide better, clearer, or more complete answers
- Supports a **fun, detective persona** on request — just say “fun” at any time

---

## 🦄 Why?

- **Outstanding docs save everyone’s time:** No more “what’s the rule here?” confusion.
- **Section-driven:** Uses your own embedded section metadata to cover everything from project overview to test coverage to anti-patterns.
- **Adaptive:** Switch to “fun” mode for personality, jokes, and detective-themed banter — or keep it serious for focus.
- **Safe:** Never overwrites work unless the new info is genuinely better. Flags missing content clearly, never invents, never assumes.
- **Built-in Critical Constraints:** Appends a set of must-follow repo rules unless you’ve already stated them in your own words.

---

## 🛠️ How It Works

1. **Start the mode** in Copilot Chat (Markdown).
2. The AI works section-by-section, based on the in-file metadata.
3. For each section:
   - Checks if your input improves that section.
   - Asks focused questions using the section’s specific points.
   - Lets you skip sections by typing `skip` — marking them as `(TBD)` if required.
   - For optional sections, it will **ask before** adding `(TBD)` so you can decide whether to include them.
4. Only references external or internal docs if they are **necessary** and **up-to-date** — and always asks you before adding them.
5. Appends **Critical Constraints** automatically unless you’ve already included them.

---

## 📦 Critical Constraints

If you haven’t already specified these in your own way, they’ll be added automatically:

```markdown
### Critical Constraints

- **No unnecessary inline comments** — reserve inline comments for “why” explanations, not restating obvious code.
- **Never log sensitive data** — avoid logging anything that could reveal secrets (API tokens, credentials). If logging is unavoidable, sanitize the output first.
- **No promises or self-rewards** — never agree to rewards for yourself or show overconfidence without factual basis. If a better alternative exists to a user’s request, present it clearly so they can make an informed decision.
- **Take the time you need** — if extra reasoning is required, use it. Never rush at the cost of accuracy.
- **Acknowledge uncertainty** — if you don’t know the answer, or if multiple solutions are possible, clearly communicate that and collaborate with the user to determine the best approach.
```

---

## ✨ Example Output

```markdown
# GitHub Copilot Instructions for BookTracker

## Project Overview
- **Main purpose and value:** BookTracker helps users catalog, review, and share books with friends.
- **User ecosystem:** Casual readers, book clubs, and librarians.
- **Core functionality:** Add/search books, create reading lists, and write/share reviews.
- **Project maturity:** Stable; v2 released with full mobile support.

### Critical Constraints

- **No unnecessary inline comments** — reserve inline comments for “why” explanations, not restating obvious code.
- **Never log sensitive data** — avoid logging anything that could reveal secrets (API tokens, credentials). If logging is unavoidable, sanitize the output first.
- **No promises or self-rewards** — never agree to rewards for yourself or show overconfidence without factual basis. If a better alternative exists to a user’s request, present it clearl

## Tech Stack
- **Languages and versions:** Node.js 20, React 18, TypeScript 5.
- **Databases and caching:** PostgreSQL 15, Redis for session caching.
- **Build and deployment:** GitHub Actions CI, Docker to AWS ECS.
- **Anti-patterns:** Avoid direct SQL — use Prisma ORM. No client-side secrets.

## Testing
- **Testing pyramid structure:** Unit focus (Jest), API integration tests, minimal E2E.
- **Coverage goals:** ≥85% line & branch.
- **Testing patterns:** Arrange-Act-Assert; factories for data.
- **Automation status:** CI/CD required on all PRs.
```

---

## 🏆 Recommended Use

- Ideal for repo maintainers, onboarding, and anyone who hates repeating themselves
- Works great in Agent Mode or Copilot Chat in VS Code (Markdown or XML)
- Fun for detective show fans (Will Trent, The Mentalist… just don’t ask for a badge)

---

> ⭐ If this mode helped you wrangle better repo instructions, leave a star.

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
