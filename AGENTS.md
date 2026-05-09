# awesome-github-copilot Repository Instructions 🚀

Custom instructions, prompts, and chat modes for GitHub Copilot and AI tools.

## File Organization 📁

- **Instructions**: `instructions/` with `.instructions.md` suffix
- **Prompts**: `prompts/` with `.prompt.md` suffix
- **Agents (formerly Chat Modes)**: `agents/` with `.agent.md` suffix

## Status System 🏷️

All artifacts above use status values in YAML frontmatter. Documentation files in `docs/` are user-facing and don't require frontmatter. See [status-badge-lifecycle.md](./docs/status-badge-lifecycle.md) for definitions.

## Content Standards 📝

- Emojis in headers MUST come **after** the text for accessibility. Screen readers announce emojis first when they appear at the start, which disrupts comprehension.

### Documentation (docs/)

- User-facing explanations, guides, examples
- No frontmatter required (documentation for humans, not AI artifacts)
- Explains the purpose and usage of artifacts to end users with examples where appropriate
- Contains status badge for visual indicator of status
- Prefer existing patterns over introducing new format

## Development Standards 🛠️

- **Writing**: Active voice, concise language, minimal jargon
- **Formatting**: Consistent emoji placement, markdown structure
  - **remark**: Markdown linting (`npm run check`, `npm run format`)
  - **commitlint**: Conventional commit enforcement with custom plugin
- **lefthook**: Pre-commit/pre-push hooks
