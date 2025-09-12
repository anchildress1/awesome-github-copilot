# 🤝 Contributing to awesome-github-copilot

Welcome to the creative chaos! This repository is a curated collection of **Custom Instructions, Prompts, and Chat Modes** for GitHub Copilot and other AI agents. Every contribution helps build a more powerful toolkit for developers worldwide.

> 🦄 **New here?** Start by reading this guide thoroughly. It's designed to get you up and running quickly while ensuring all contributions meet our quality standards.

---

## 📚 Repository Overview

This repository contains three main types of content:

- **🧱 Custom Instructions**: Reusable, testable instructions that behave like command-line utilities for AI agents
- **🧑‍🚀 Prompts**: High-level prompts for Agent Mode that orchestrate complex workflows
- **👷‍♂️ Chat Modes**: Unique AI personalities for specific workflows and use cases

Each piece of content is carefully crafted, tested, and marked with a [status badge](./docs/status-badge-lifecycle.md) to indicate its readiness level.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Git** with conventional commit knowledge
- **GitHub Copilot** or compatible AI agent for testing
- A text editor (VS Code recommended for Copilot integration)

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anchildress1/awesome-github-copilot.git
   cd awesome-github-copilot
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify your setup**:
   ```bash
   npm run check    # Lint markdown files
   npm run format   # Format markdown and fix GitHub alerts
   ```

4. **Set up git hooks** (optional but recommended):
   ```bash
   npx lefthook install
   ```

---

## 📁 Repository Structure

Understanding the file structure is crucial for effective contributions:

```
.
├── .github/                    # GitHub-specific files
│   ├── instructions/          # VS Code compatible instruction files
│   ├── prompts/              # Agent Mode prompt files
│   ├── chatmodes/            # Chat mode definition files
│   └── CODEOWNERS            # Code ownership rules
├── docs/                      # Main documentation
│   ├── instructions/         # Instruction documentation
│   ├── prompts/             # Prompt documentation
│   ├── chatmodes/           # Chat mode documentation
│   └── status-badge-lifecycle.md
├── scripts/                   # Utility scripts
├── package.json              # Dependencies and scripts
├── commitlint.config.js      # Commit message rules
├── lefthook.yml             # Git hooks configuration
├── .remarkrc.js             # Markdown linting config
└── README.md                # Main project documentation
```

### File Naming Conventions

- **Instructions**: `kebab-case.md` (e.g., `format-conventional-commit.md`)
- **Prompts**: `kebab-case.md` (e.g., `generate-commit-message.md`)
- **Chat Modes**: `kebab-case.md` (e.g., `logfather.md`)
- **Status**: Use lowercase for consistency across all files

---

## 🎯 Creating New Content

### 📝 Instructions

Instructions are reusable AI directives that should behave like command-line utilities.

1. **Create the documentation file**:
   ```
   docs/instructions/your-instruction-name.md
   ```

2. **Create the VS Code compatible file**:
   ```
   .github/instructions/your-instruction-name.instructions.md
   ```

3. **Use this template structure**:

   ```markdown
   ---
   status: Draft
   title: Your Instruction Title
   description: |
     A clear, concise description of what this instruction does.
   applyTo: '**'
   ---

   # 🎯 Your Instruction Title

   Brief introduction explaining the purpose and use case.

   ## ✅ Do This
   - Clear, actionable guidelines
   - Use bullet points for clarity

   ## ❌ Don't Do This
   - Things to avoid
   - Common mistakes

   ## 🧪 Examples
   ``language
   // Example code or usage
   ```

   ## 🧠 Summary for Copilot Execution

   - Key points for AI agents
   - Expected behavior patterns

   ```
   ```

### 🚀 Prompts

Prompts are high-level directives for Agent Mode that orchestrate workflows.

1. **Create the documentation file**:
   ```
   docs/prompts/your-prompt-name.md
   ```

2. **Create the Agent Mode file**:
   ```
   .github/prompts/your-prompt-name.prompt.md
   ```

3. **Follow the prompt template pattern** from existing prompts

### 🤖 Chat Modes

Chat modes define unique AI personalities for specific workflows.

1. **Create the documentation file**:
   ```
   docs/chatmodes/your-chatmode-name.md
   ```

2. **Create the chat mode file**:
   ```
   .github/chatmodes/your-chatmode-name.chatmode.md
   ```

3. **Include personality, capabilities, and usage examples**

---

## 🌈 Status Badge System

Every piece of content must include a status badge indicating its readiness:

| Status | Badge | When to Use |
| - | - | - |
| `Draft` | ![Draft](https://img.shields.io/badge/status-draft-F72585.svg) | First pass, wild ideas—expect changes |
| `Tweak` | ![Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg) | Rapid iterations, testing different approaches |
| `Polish` | ![Polish](https://img.shields.io/badge/status-polish-9B5DE5.svg) | In review, refining details |
| `Check` | ![Check](https://img.shields.io/badge/status-check-3A86FF.svg) | Actively tested, feedback wanted |
| `Ready` | ![Ready](https://img.shields.io/badge/status-ready-007F5F.svg) | Polished, proven, production-ready |

**Guidelines**:

- Start new content with `Draft` status
- Update status as content matures
- Include status in YAML frontmatter
- Add corresponding badge to README.md tables

---

## 📝 Commit Guidelines

This project uses **Conventional Commits** with strict validation via commitlint.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Required Rules

- **Types**: `feat`, `fix`, `refactor`, `perf`, `test`, `ci`, `docs`, `style`, `build`, `chore`
- **Scopes**: `config`, `instructions`, `prompts`, `chatmodes`, `build`, `deps`, `tooling`, `readme`
- **Subject**: Sentence case, max 72 characters, no period
- **Body**: Required, max 100 characters per line
- **Footer**: Must include `Signed-off-by: Your Name <email@example.com>`

### Examples

```bash
# Adding new instruction
feat(instructions): Add logging best practices instruction

- create comprehensive logging guidelines
- include multi-language examples
- add security considerations

Signed-off-by: John Doe <john@example.com>

# Fixing documentation
fix(docs): Correct status badge examples in contributing guide

- fix broken badge links
- update color codes to match current system
- improve example formatting

Signed-off-by: Jane Smith <jane@example.com>
```

### Validation

Commits are automatically validated using lefthook and commitlint:

```bash
# Test your commit message
echo "feat(docs): Add contributing guidelines" | npx commitlint

# Manual validation
npx commitlint --edit
```

---

## 🧪 Testing and Validation

### Markdown Linting

```bash
# Check all markdown files
npm run check

# Format and fix issues
npm run format
```

### Content Testing

1. **Test instructions with Copilot**:
   - Copy instruction to VS Code settings
   - Verify behavior matches documentation
   - Test edge cases and error scenarios

2. **Test prompts in Agent Mode**:
   - Use prompts in GitHub Copilot Agent Mode
   - Verify tool usage (`#changes`, `#editFiles`, etc.)
   - Check output quality and completeness

3. **Test chat modes**:
   - Apply chat mode in compatible AI tools
   - Verify personality and behavior
   - Test with various scenarios

### Pre-commit Validation

The repository includes automated validation:

- **Markdown linting** via remark
- **Commit message validation** via commitlint
- **Automatic formatting** of staged files

---

## 🔄 Pull Request Process

### Before Submitting

1. **Test thoroughly**:
   - Validate with actual AI agents
   - Check markdown formatting
   - Verify all links work

2. **Update documentation**:
   - Add entries to README.md tables
   - Include proper status badges
   - Update any related docs

3. **Follow naming conventions**:
   - Use kebab-case for filenames
   - Match existing patterns
   - Check CODEOWNERS requirements

### PR Requirements

- [ ] **Clear description** of changes and motivation
- [ ] **Testing evidence** (screenshots, examples, test results)
- [ ] **Status badge** appropriately set
- [ ] **Conventional commits** with proper validation
- [ ] **Documentation updated** (README.md, related files)
- [ ] **No breaking changes** without justification

### Review Process

1. **Automated checks** must pass (commitlint, remark)
2. **Manual review** by code owners
3. **Testing verification** by reviewers
4. **Documentation review** for clarity and completeness

---

## 🎨 Style Guidelines

### Markdown Standards

- Use **GFM (GitHub Flavored Markdown)**
- **Single underscore** for emphasis: `_emphasis_`
- **Hyphens** for lists: `- item`
- **No pipe alignment** in tables
- **Emoji prefixes** for headers when appropriate

### Content Guidelines

- **Be concise** but comprehensive
- **Use examples** liberally
- **Include context** for AI agents
- **Test thoroughly** before submitting
- **Document edge cases** and limitations

### Language Style

- **Active voice** preferred
- **Clear, actionable** language
- **Professional but approachable** tone
- **Consistent terminology** across content

---

## 🆘 Getting Help

### Resources

- [Status Badge Lifecycle](./docs/status-badge-lifecycle.md)
- [Existing Instructions](./docs/instructions/)
- [Prompt Examples](./docs/prompts/)
- [Chat Mode Gallery](./docs/chatmodes/)

### Community

- **GitHub Issues**: Report bugs or request features
- **GitHub Discussions**: Ask questions or share ideas
- **Pull Requests**: Contribute improvements

### Common Issues

1. **Commit validation failures**: Check `commitlint.config.js` rules
2. **Markdown linting errors**: Run `npm run format` to auto-fix
3. **Git hook issues**: Ensure lefthook is installed properly
4. **Badge not displaying**: Check badge URL format and status value

---

## 🏆 Recognition

Contributors are recognized in several ways:

- **Commit attribution** via signed-off-by
- **GitHub contributor stats** on the repository
- **Mention in release notes** for significant contributions
- **Collaborative spirit** acknowledgment in README

---

## 🔮 Future Roadmap

This project continues to evolve. Areas of focus include:

- **Enhanced testing frameworks** for AI content
- **Automated quality assessment** tools
- **Community contribution templates**
- **Integration with more AI platforms**
- **Performance optimization** for large-scale usage

---

> 🦄 **Remember**: Every contribution makes this toolkit more powerful for developers worldwide. Whether you're fixing a typo or creating a revolutionary new chat mode, your work matters!

Thank you for contributing to the creative chaos that makes awesome-github-copilot truly awesome. 🚀
