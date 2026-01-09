---
status: "draft"
title: "Generate Documentation Sync for PRs"
description: "Generate comprehensive documentation updates for PR changes with AI attribution"
---

## Mission

Analyze PR diff comprehensively. Update documentation to reflect changes. Ensure alignment with project conventions. Minimize noise. Maximize signal.

## Non-Negotiables

- **Edits:** Modify **only** `.md` files (including root `README.md`).
- **Reads:** You may read **any** files (code/config/tests) to understand reality, but you must not modify them.
- **Secrets:** Never document secrets/credentials/PII. Env vars: document **name + purpose only**, never values.
- **Diagrams:** Mermaid only. Include `accTitle:` and `accDescr:` as the first lines of every Mermaid diagram.
- **No TOCs:** Never add table-of-contents sections.

## Scope Analysis

### Step 1: Diff Analysis

- Extract full PR diff using `gh pr diff`
- Identify all modified files (code, config, tests, infrastructure)
- Classify changes: new features, bug fixes, refactors, config updates, API changes, schema changes
- Flag: security-relevant changes, environment variable additions, external API integrations, breaking changes

### Step 2: Documentation Discovery

- Scan existing documentation structure (typically `/docs`, `/features`, root README)
- Identify documentation conventions (ADRs, API specs, architecture diagrams, user guides)
- Map changes to potentially affected documentation categories:
  - API documentation
  - Architecture documentation
  - Configuration/environment documentation
  - Flow/process documentation
  - Testing documentation
  - Feature definitions
- Identify: obsolete docs, contradictions, missing context

### Step 3: Repository Context

- Read repository-specific instructions (e.g., `.github/copilot-instructions.md`, `.github/agents/`)
- Identify project-specific constraints, conventions, and patterns
- Note: coding standards, validation rules, technology-specific requirements

## Documentation Updates

### Strategy

- **Update existing first**: Prefer inline updates over new files
- **Rename over duplicate**: If file name/location misaligns with content, rename instead of creating duplicate
- **Create new only when**: topic genuinely lacks existing home AND adds user/developer value
- **Delete obsolete**: Remove docs contradicting current implementation
- **Consolidate duplicates**: Merge redundant documentation into single authoritative source
- **Use Mermaid for diagrams**: Include `accTitle:`/`accDescr:` and validate diagrams before final output

### Anti-Patterns to Avoid

- Creating separate doc files per feature (use behavioral specs like Gherkin instead)
- Documenting test coverage metrics or test case catalogs
- Generating summary documents about other documents (meta-documentation)
- Duplicating information across multiple files
- Creating docs/README.md files that just list other docs
- Excessive granularity (15 feature files when 5 would suffice)

### Primary Targets

- Root `README.md` (project overview / quickstart / high-level changes)
- `docs/` (developer-facing detail, only when changes materially affect usage)

### Common Update Targets

Only document changes when they impact user understanding or developer onboarding:

#### High-Value Documentation

- **API changes**: New endpoints, schema changes, breaking changes
- **Architecture changes**: Component additions/removals, integration patterns
- **Configuration changes**: New env vars (purpose only), deployment requirements
- **Flow changes**: Significant workflow or business logic modifications

#### Low-Value Documentation (Avoid)

- Test coverage metrics, test case catalogs, or exhaustive test documentation
- Implementation details visible in code
- Duplicate information across multiple files
- Redundant summaries or meta-documentation about documentation
- Per-feature specification files when behavioral specs exist

## Validation Phase

### Review All Existing Docs

- Scan for outdated references to removed code
- Check for contradictions with current implementation
- **Identify duplicate content** across multiple files
- **Flag file rename candidates** (misaligned name vs. content)
- Identify orphaned docs with no corresponding code
- Flag potential errors from previous documentation runs

### Minimum Viable Corrections

- Fix critical inaccuracies only
- Do not rewrite stable documentation
- Preserve historical context where appropriate
- Prioritize correctness over completeness

### Pre-Commit Checklist

- [ ] All mermaid diagrams validated
- [ ] No secrets or credentials documented
- [ ] Configuration documented (purpose only, never values)
- [ ] Breaking changes called out explicitly
- [ ] Documentation aligns with code capabilities
- [ ] Links to source files use workspace-relative paths
- [ ] Accessibility: diagrams include labels
- [ ] Terminology consistency with codebase

## AI Execution Notes

**Context Gathering:**

- Read PR diff completely
- Read all existing documentation
- Read repository-specific instructions and conventions
- Read relevant source code for context

**Execution Order:**

1. Analyze diff
2. Gather repository context
3. Identify affected docs
4. Update existing docs
5. Create new docs (only if justified)
6. Review all docs for obsolescence
7. Apply minimum viable corrections
8. Validate output

**Forbidden:**

- Any non-`.md` edits
- Secrets/credentials/PII (including env var values)
- Meta-documentation, duplicates, TOCs, test catalogs, or implementation trivia

**Success Criteria:**

- Documentation accurately reflects PR changes
- Zero contradictions between docs and code
- **Zero duplicate content** across files
- New functionality properly documented (when user-facing)
- Obsolete/redundant docs identified and removed
- File renames proposed when name misaligns with content
- Mermaid diagrams render correctly
- No secrets, PII, or credentials documented
