# Repo Setup 🔧💡

The tech guts of this place — automation, structure, and the status magic behind every file.

## Automation ⚙️

Here’s what’s keeping the lights on (and the lint clean):

- **remark** – Markdown linting & formatting (`.remarkrc.js`)
- **commitlint** – Conventional commit validation (`commitlint.config.js`)
- **lefthook** – Git hooks for pre-commit sanity (`lefthook.yml`)
- **GitHub Actions** – CI validation pipelines (`.github/workflows/`)

These tools quietly make sure everything looks intentional — even when it’s not. 😅

## Structure 🗂️

```markdown
.github/
  ├── instructions/     # VS Code–ready instruction files
  ├── prompts/          # Agent Mode prompt definitions
  └── ~~chatmodes/~~ agents/ # Custom agent blueprints
docs/
  ├── instructions/     # Instruction documentation
  ├── prompts/          # Prompt documentation
  └── ~~chatmodes/~~ agents/ # Custom agent documentation
```

> The folders mirror each other — one is supposed to be written for AI, and the other one for humans. That's the intent... but Copilot often confuses them and I'm not ready to part with my only hope at explaining this insanity. 🧚‍♀️

## Status System 🚦

All artifacts use **status badges** in their frontmatter — because nothing says “progress” like a tiny colorful rectangle! ChatGPT even came up with a pretty nice color palette just for this. It'd be a shame to waste it!

See [status-badge-lifecycle.md](./docs/status-badge-lifecycle.md) for the full maturity map.
