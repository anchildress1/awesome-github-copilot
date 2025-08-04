# 🎩 Instructionalist Chat Mode

[![Status: Draft (red badge)](https://img.shields.io/badge/status-draft-D90429.svg)]()

> [!IMPORTANT]
> This chat mode does not include the XML version like others. That's because it's designed to be interactive and adaptive. The AI needs you in the mix for this one, or it's never going to come up with the correct answers on it's own.

The **Instructionalist** is your repo’s detail-obsessed detective and architectural advisor, all rolled into one. Designed to interrogate your repo (and you!) section by section, it makes sure every critical instruction gets surfaced, clarified, and documented with zero filler and maximum context.

> _“Every section matters. I don’t do shortcuts. If there’s a gap, I’ll find it—if there’s a rule, I’ll catch it. Let’s make your instructions future-proof.”_

---

## 🧩 What Is It?

Instructionalist is a Copilot Chat Mode (Markdown or XML) that walks you through building an outstanding `.github/copilot-instructions.md` file for your repo. It’s interactive, adaptive, and never generic:

- Breaks documentation down by well-defined sections
- Asks targeted questions to fill gaps
- Encourages (but never nags for) excellence
- Only updates output when you provide better answers
- Supports a fun, “detective” persona if you want some personality in your Q\&A

---

## 🦄 Why?

- **Outstanding docs save everyone’s time:** No more guessing “what’s the rule here?”
- **Section-driven:** It uses your own metadata structure (see in-file reference) to cover everything from project overview to test coverage to anti-patterns.
- **Adaptive:** If you say “fun,” it dials up the humor and leans into the detective motif.
- **Safe:** Never overwrites work unless new info is _better_. Always flags what’s missing—never invents, never assumes.

---

## 🛠️ How It Works

1. **Start the mode** (in Markdown or XML).
2. The AI introduces itself only if asked, then works section-by-section.
3. For each section:
   - Checks if user input improves the section.
   - Asks focused questions based on your in-file section metadata.
   - Allows skipping sections by typing 'skip', marking them as (TBD).
   - Updates the output file only if the answer is better, clearer, or more complete.
   - Unaddressed sections are always marked `(TBD)`.
4. Encourages, never nags. Fun mode available anytime.
5. At any time, you can type “done” to get a fully copy-pasteable `.github/copilot-instructions.md` for your repo.

---

## ✨ Example Output

```markdown
# GitHub Copilot Instructions for BookTracker

## Project Overview
- **Main purpose and value:** BookTracker helps users catalog, review, and share books with friends.
- **User ecosystem:** Casual readers, book clubs, and librarians.
- **Core functionality:** Add/search books, create reading lists, and write/share reviews.
- **Project maturity:** Stable; v2 released with full mobile support.

## Tech Stack
- **Languages and versions:** Node.js 20, React 18, TypeScript 5.
- **Databases and caching:** PostgreSQL 15, Redis for session caching.
- **Build and deployment:** GitHub Actions CI, Docker-based deployment to AWS ECS.
- **Anti-patterns:** Avoid direct SQL queries—use Prisma ORM. No client-side secrets.

## Testing
- **Testing pyramid structure:** Emphasis on unit tests (Jest), integration tests for API endpoints, minimal E2E.
- **Coverage goals:** Minimum 85% line and branch coverage.
- **Testing patterns:** Arrange-Act-Assert, use Factories for test data.
- **Automation status:** All tests automated in CI/CD; required for all pull requests.
```

---

## 📝 Section Reference (for the AI, but handy for you too!)

All section definitions (points, goals, required/optional) are included **directly in the chat mode file**, so nothing is ever missing or out of sync.

---

## 🏆 Recommended Use

- Ideal for repo maintainers, onboarding, and anyone who hates repeating themselves
- Works great in Agent Mode or Copilot Chat in VS Code (Markdown or XML)
- Fun for detective show fans (Will Trent, The Mentalist… just don’t ask for a badge)

---

<small>
Generated with the help of ChatGPT as directed by Ashley Childress
</small>
