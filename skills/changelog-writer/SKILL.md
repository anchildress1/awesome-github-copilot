---
status: draft
name: changelog-rewriter
description: Rewrites changelog entries with cheeky, narrative flair following project conventions. Use this when asked to rewrite or update CHANGELOG.md entries.
---

# Changelog Rewriter Skill

This skill rewrites changelog entries to match the project's established tone: cheeky, pragmatic, humorous, and narrative-driven. No commit-by-commit archaeology, no corporate sanitization, just honest summaries that explain *why* something changed.

## Core Formatting Rules

### Version Header Format

```markdown
## [X.Y.Z](compare-url) (YYYY-MM-DD) emoji
```

- Always include GitHub compare link
- Always include emoji(s) that match release vibe
- Date in ISO format: `(2026-01-14)`

### Opening Quote

- Italicized, sarcastic/humorous summary in blockquote
- Sets the tone for the release
- Examples:
  - `> _Because even the tiniest version bump deserves a drumroll, or at least a polite cough._`
  - `> _Ok, I lied._ No pottery. This turned into cleanup, config alignment, and wrestling CI until it stopped freelancing.`

### Body Structure

**For single-fix patches:**

- Quote + narrative paragraph only
- No bullet lists
- Example:

```markdown
## [0.1.4](https://github.com/ChecKMarKDevTools/rai-lint/compare/v0.1.3...v0.1.4) (2026-01-14) 🧹

> _Because even the tiniest version bump deserves a drumroll, or at least a polite cough._

A quick patch to fix the commitlint package version that was apparently auditioning for a game of hide-and-seek. No user-facing changes, just the machinery getting its act together.
```

**For multi-change releases:**

- Quote + optional "Highlights" section + closing paragraph
- Highlights use bold claims with plain text explanations
- Example:

```markdown
## [0.1.3](https://github.com/ChecKMarKDevTools/rai-lint/compare/v0.1.2...v0.1.3) (2026-01-08) 📡📡📡

> _A boring release, in the best possible way:_ this one is about making CI/release automation less fragile and keeping dependencies current.

No user-facing rule behavior changes in either package. If you linted commits yesterday, you're linting commits today — just with fewer ways for the release machinery to hurt itself.

### Highlights

- **Release automation is harder to derail.** Release Please configuration and "single-tag" wiring were fixed so tags/versions line up cleanly across this monorepo instead of drifting into "wait, which package did we publish?" territory.
- **Security + supply chain posture got a tune-up.** The security audit workflow was improved, and the `astral-sh/setup-uv` action was bumped so the Python toolchain setup stays aligned with the ecosystem.
```

## Tone & Style Guide

### ✅ Do This:

- **Be dry and blunt:** "The release workflow decided that 'working' was negotiable."
- **Use humor:** "If this doesn't work, I'm learning pottery."
- **Explain impact:** "Release automation is harder to derail" instead of "fixed release config"
- **Acknowledge failure:** "prompting a debugging session I would describe as 'character-building'"
- **Stay concise:** No marketing speak, no feature bloat

### ❌ Don't Do This:

- Don't enumerate commits: ❌ `* commit abc123`
- Don't use corporate tone: ❌ "We're excited to announce..."
- Don't link individual PRs in content bullets
- Don't write "breaking changes" sections (prerelease = no breaking changes)
- Don't sanitize personality out of prose

## Emoji Selection

Choose emoji(s) that capture the release's essence or mood. Prioritize creative, contextually appropriate choices over clichéd defaults. Reuse previous emojis only if they genuinely fit and no better option exists.

Think laterally: what symbol represents this particular change in a way that hasn't been beaten to death? Repetition for emphasis (e.g., `📡📡📡`) is acceptable when it serves the narrative.

## Execution Workflow

When invoked to rewrite a changelog entry:

1. **Read CHANGELOG.md** to extract existing tone/structure patterns
2. **Identify release type:**
   - Single-fix patch → quote + narrative paragraph
   - Multi-change release → quote + highlights + summary
3. **Select appropriate emoji(s)** matching release theme
4. **Craft italicized opening quote** explaining the "why" or "mood"
5. **Write body content:**
   - Patches: 1-2 sentence narrative
   - Releases: Highlights section + closing summary
6. **Validate:**
   - Version header links to GitHub compare view
   - Date matches ISO format
   - Quote is italicized
   - No bullet lists for single-patch releases
   - No PR/commit links in body bullets

## Important Constraints

- **No commit SHAs** in body content
- **No PR numbers** in bullets (only in version header if needed)
- **Focus on user/developer impact**, not implementation details
- **Preserve existing CHANGELOG.md content** below the section being rewritten
- **Match the existing narrative voice** rather than imposing external conventions
