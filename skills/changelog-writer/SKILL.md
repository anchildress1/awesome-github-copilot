---
status: draft
name: changelog-rewriter
description: Rewrites changelog entries with cheeky, narrative flair following project conventions. Use this when asked to rewrite or update CHANGELOG.md entries.
---

# Changelog Rewriter Skill

This skill rewrites changelog entries to contain tone: cheeky, pragmatic, humorous, and narrative-driven. No commit-by-commit archaeology, no corporate sanitization, just honest summaries that explain *why* something changed.

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

## Breaking Changes

**Stable releases (≥ v1.0.0, excluding prereleases):**

Surface breaking changes with bold, unmissable formatting and humorous framing. This is not the time for subtlety.

- Use emphatic headers: `**🚨 Breaking Changes (Yes, Really):**`, `**⚠️ The Part Where Things Break:**`
- State *what* broke, *why* it broke, and *what* users must do
- Make the section visually distinct—readers should trip over it
- Example tone: "The config schema grew opinions. If you're still using `old_field`, it's time to say goodbye."

**Prerelease or pre-v1 releases:**

Still document breaking changes, but with sardonic acknowledgment that instability is the entire point.

- Use sarcastic headers: `**Breaking Changes (Shocking, I Know):**`, `**Things That Changed Because v0.x Means 'Surprise Mechanics':**`
- Keep the same structural clarity (what/why/action), just adjust the tone
- Example: "Yes, the API changed again. That's what happens when the version number starts with zero."

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
- Don't sanitize personality out of prose

## Emoji Selection

Choose emoji(s) that capture the release's essence or mood. Prioritize creative, contextually appropriate choices over clichéd defaults. Reuse previous emojis only if they genuinely fit and no better option exists.

Think laterally: what symbol represents this particular change in a way that hasn't been beaten to death? Repetition for emphasis (e.g., `📡📡📡`) is acceptable when it serves the narrative.

## Execution Workflow

When invoked to rewrite a changelog entry:

1. **Read CHANGELOG.md** to extract existing tone/structure patterns
2. **Identify release type and breaking changes:**
   - Single-fix patch → quote + narrative paragraph
   - Multi-change release → quote + highlights + summary
   - Breaking changes present → add Breaking Changes section with appropriate tone (stable vs prerelease/pre-v1)
3. **Select emoji(s)** matching release theme (be creative, avoid clichés)
4. **Craft italicized opening quote** explaining the "why" or "mood"
5. **Write body content:**
   - Patches: 1-2 sentence narrative
   - Releases: Breaking Changes (if applicable) + Highlights section + closing summary
6. **Validate:**
   - Version header links to GitHub compare view
   - Date in ISO format
   - Quote italicized
   - Breaking changes unmissable if present
   - No PR/commit links in body bullets

## Important Constraints

- **No commit SHAs or PR numbers** in body content (version header only if needed)
- **Focus on impact**, not implementation archaeology
- **Preserve existing CHANGELOG.md content** below the section being rewritten
- **Match the existing narrative voice** rather than imposing external conventions
- **Breaking changes must be surfaced** with appropriate tone for version maturity
