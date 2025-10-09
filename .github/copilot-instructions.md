# 🚀 awesome-github-copilot Repository Instructions

Custom instructions, prompts, and chat modes for GitHub Copilot and AI tools.

## File Organization 📁

- **Instructions**: `.github/instructions/` with `.instructions.md` suffix
- **Prompts**: `.github/prompts/` with `.prompt.md` suffix
- **Chat Modes**: `.github/chatmodes/` with `.chatmode.md` suffix
- **Documentation**: `docs/` (explanatory materials and guides) with `.md` suffix
- **Core Guides**: Root-level (CONTRIBUTING.md, DEVELOPMENT.md, etc.)

## Status System 🏷️

All artifacts in `.github/` use status values in YAML frontmatter. Documentation files in `docs/` are user-facing and don't require frontmatter. See [status-badge-lifecycle.md](../docs/status-badge-lifecycle.md) for definitions.

## Content Standards 📝

> **Note**: Emojis in headers should come **after** the text for accessibility. Screen readers announce emojis first when they appear at the start, which disrupts comprehension.

### Instructions (.github/instructions/)

- YAML frontmatter: `status`, `description`, `applyTo` (optional)
- Status values: `draft`, `tweak`, `polish`, `check`, `ready`, `deprecated`
- Focus on actionable guidance of behaviors for a given scenario
- Include examples only when they clarify non-obvious behavior

### Prompts (.github/prompts/)

- YAML frontmatter: `status`, `mode`, `description`, `tools` (array)
- Status values: `draft`, `tweak`, `polish`, `check`, `ready`, `deprecated`
- Specify step-by-step recipes with expected outcomes and Agent Mode tool usage
- Link to related instructions when dependencies exist

### Chat Modes (.github/chatmodes/)

- YAML frontmatter: `status`, `model` (optional), `description`, `tools` (array)
- Status values: `draft`, `tweak`, `polish`, `check`, `ready`, `deprecated`
- Define personality, use cases, and behavioral constraints
- Note dependencies on instructions or specific tools

### Documentation (docs/)

- User-facing explanations and guides
- No frontmatter required (documentation for humans, not AI artifacts)
- Explains the purpose and usage of artifacts to end users with examples where appropriate

## Development Standards 🛠️

- **Writing**: Active voice, concise language, minimal jargon
- **Formatting**: Consistent emoji placement, markdown structure
- **Quality Gates**:
  - Run `npm run check` before committing
  - Follow conventional commits (see `.github/prompts/generate-commit-message.prompt.md`)
  - Test instructions/prompts with actual Copilot usage

## Automation Stack 🔧

- **remark**: Markdown linting (`npm run check`, `npm run format`)
- **commitlint**: Conventional commit enforcement
- **lefthook**: Pre-commit/pre-push hooks
- **GitHub Actions**: CI validation

## Key References 📚

- [Design Principles](instructions/design-principles.instructions.md): Architectural guidance
- [Logging Best Practices](instructions/logging-best-practices.instructions.md): Language-agnostic logging standards
- [Status Lifecycle](../docs/status-badge-lifecycle.md): Badge maturity system
