# Repo Setup 🔧

Technical setup details for this repository.

## Automation

- **remark**: Markdown linting/formatting (`.remarkrc.js`)
- **commitlint**: Conventional commit validation (`commitlint.config.js`)
- **lefthook**: Git hooks (`lefthook.yml`)
- **GitHub Actions**: CI validation (`.github/workflows/`)

## Structure

```
.github/
  ├── instructions/     # VS Code compatible instructions
  ├── prompts/          # Agent Mode prompts
  └── agents/           # Chat mode definitions
docs/
  ├── instructions/     # Instruction documentation
  ├── prompts/          # Prompt documentation
  └── agents/           # Chat mode documentation
```

## Status System

All artifacts use status badges in frontmatter. See [status-badge-lifecycle.md](./docs/status-badge-lifecycle.md).
