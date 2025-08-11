# 🎯 Repository Setup Guide

Quick-start guide for new developers to get up and running with awesome-github-copilot development.

---

## ⚡ Quick Start (5 minutes)

### 1. Prerequisites Check

Ensure you have these installed:

```bash
# Check Node.js version (need v18+)
node --version

# Check npm version (need v9+)
npm --version

# Check Git version (need v2.30+)
git --version
```

If missing, install from:
- **Node.js**: [nodejs.org](https://nodejs.org/) (LTS version)
- **Git**: [git-scm.com](https://git-scm.com/)

### 2. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/anchildress1/awesome-github-copilot.git
cd awesome-github-copilot

# Install dependencies (may take 1-2 minutes)
npm install

# Install git hooks for quality control
npx lefthook install

# Verify everything works
npm run check
```

### 3. Configure Git

Set up your identity for contributions:

```bash
# Required: Set your name and email
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Recommended: Enable commit signing
git config commit.gpgsign true
git config user.signingkey YOUR_GPG_KEY_ID
```

### 4. Test Your Setup

```bash
# Create a test branch
git checkout -b test-setup

# Make a small change
echo "# Test" > test.md

# Test the commit process
git add test.md
git commit -m "test(setup): Verify development environment

- add test file to verify commit process
- ensure all tools are working correctly

Signed-off-by: Your Name <your.email@example.com>"

# Clean up
git checkout main
git branch -D test-setup
rm test.md
```

If this works without errors, you're ready to contribute! 🎉

---

## 🎯 Understanding the Repository

### What This Repository Contains

This is a curated collection of AI content for GitHub Copilot and other AI agents:

- **🧱 Instructions**: Reusable directives that modify AI behavior
- **🚀 Prompts**: High-level workflows for Agent Mode
- **🤖 Chat Modes**: Complete AI personalities for specific tasks

### File Organization

```
awesome-github-copilot/
├── .github/                    # GitHub-specific implementations
│   ├── instructions/          # VS Code compatible instruction files
│   ├── prompts/              # Agent Mode prompt files
│   └── chatmodes/            # Chat mode definition files
├── docs/                      # Human-readable documentation
│   ├── instructions/         # Instruction documentation
│   ├── prompts/             # Prompt documentation
│   └── chatmodes/           # Chat mode documentation
├── scripts/                   # Maintenance utilities
├── CONTRIBUTING.md           # How to contribute (start here!)
├── DEVELOPMENT.md           # Technical development details
└── README.md               # Project overview and usage
```

### Key Concepts

1. **Status Badges**: Every piece of content has a status (Draft, Tweak, Polish, Check, Ready)
2. **Dual Documentation**: Content exists in both `.github/` (implementation) and `docs/` (documentation)
3. **Strict Standards**: Conventional commits, markdown linting, and quality gates
4. **Testing Required**: All content must be tested with actual AI agents

---

## 🛠️ Development Workflow

### Creating New Content

1. **Choose your content type**:
   - **Instruction**: Modifies AI behavior for specific tasks
   - **Prompt**: Orchestrates complex workflows
   - **Chat Mode**: Creates a complete AI personality

2. **Start with Draft status**:
   ```markdown
   ---
   status: Draft
   title: Your Content Title
   description: What this does and why it's useful
   ---
   ```

3. **Create both files**:
   - Documentation: `docs/{type}/your-name.md`
   - Implementation: `.github/{type}/your-name.{type}.md`

4. **Test thoroughly** with actual AI agents

5. **Update README.md** to include your content in the appropriate table

### Making Changes

```bash
# Create a feature branch
git checkout -b feat/your-feature-name

# Make your changes
# ... edit files ...

# Add files to staging
git add .

# Commit with conventional format (hooks will validate)
git commit -m "feat(instructions): Add new logging instruction

- create comprehensive logging guidelines
- include security best practices
- add multi-language examples

Signed-off-by: Your Name <your.email@example.com>"

# Push to GitHub
git push origin feat/your-feature-name
```

### Quality Checks

The repository has automated quality control:

```bash
# Before committing, these run automatically:
npm run format    # Formats markdown files
npm run check     # Lints all markdown

# These validate your commits:
npx commitlint    # Checks commit message format
```

---

## 📝 Commit Message Requirements

This repository uses **strict conventional commits**. Here's the format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Required Elements

- **Type**: `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `chore`
- **Scope**: `instructions`, `prompts`, `chatmodes`, `docs`, `config`, `build`
- **Subject**: Clear description, max 72 characters, sentence case
- **Body**: **Required** - explain what and why, max 100 chars per line
- **Footer**: **Required** - must include `Signed-off-by: Name <email>`

### Examples

```bash
# Adding new content
feat(instructions): Add API security guidelines

- create comprehensive security instruction
- include authentication best practices
- add example implementations for popular frameworks

Signed-off-by: John Doe <john@example.com>

# Fixing documentation
fix(docs): Correct badge links in README

- update broken status badge URLs
- fix formatting in tables
- improve clarity of descriptions

Signed-off-by: Jane Smith <jane@example.com>

# Updating dependencies
build(deps): Update remark to v13

- update remark-cli to latest version
- update related plugins for compatibility
- test all markdown processing

Signed-off-by: Dev Team <dev@example.com>
```

---

## 🧪 Testing Your Content

### Instructions Testing

1. **In VS Code**:
   ```json
   // Add to settings.json
   {
     "github.copilot.advanced.customInstructions": "path/to/your/instruction.md"
   }
   ```

2. **Test scenarios**:
   - Normal use cases
   - Edge cases
   - Error conditions
   - Different file types

3. **Document results** in your PR

### Prompts Testing

1. **Use GitHub Copilot Agent Mode**
2. **Test tool integration** (`#changes`, `#editFiles`, `#runInTerminal`)
3. **Verify output quality**
4. **Check error handling**

### Chat Modes Testing

1. **Apply in compatible tools** (Copilot Chat, Claude, etc.)
2. **Test personality consistency**
3. **Try various scenarios**
4. **Document limitations**

---

## 🚨 Common Issues and Solutions

### Commit Message Rejected

```bash
# Error: "scope-empty: scope may not be empty"
# Fix: Always include a scope
git commit -m "feat(instructions): Your message"

# Error: "body-empty: body may not be empty"  
# Fix: Always include a body after a blank line
git commit -m "feat(instructions): Your subject

Your detailed explanation here

Signed-off-by: Your Name <email>"
```

### Markdown Linting Errors

```bash
# Run formatter to auto-fix most issues
npm run format

# Check specific errors
npx remark your-file.md -f
```

### Git Hooks Not Working

```bash
# Reinstall hooks
npx lefthook uninstall
npx lefthook install

# Verify installation
npx lefthook list
```

### Dependencies Issues

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 Your First Contribution

Ready to make your first contribution? Here's a beginner-friendly approach:

### Option 1: Fix Documentation

1. Find a typo or unclear section in any `.md` file
2. Fix it and test with `npm run check`
3. Commit with type `docs`

### Option 2: Improve Existing Content

1. Test an existing instruction/prompt/chat mode
2. Suggest improvements or report issues
3. Submit changes with type `fix` or `refactor`

### Option 3: Create New Content

1. Start with a simple instruction for a common task
2. Follow the templates in existing content
3. Begin with `Draft` status
4. Submit with type `feat`

---

## 📚 Resources and Next Steps

### Essential Reading

1. **[CONTRIBUTING.md](./CONTRIBUTING.md)**: Complete contribution guidelines
2. **[DEVELOPMENT.md](./DEVELOPMENT.md)**: Technical details and advanced workflows
3. **[Status Lifecycle](./docs/status-badge-lifecycle.md)**: Understanding content maturity
4. **[README.md](./README.md)**: Project overview and content catalog

### Getting Help

- **Issues**: Report bugs or request features
- **Discussions**: Ask questions or share ideas
- **Pull Requests**: Contribute improvements
- **Code Owners**: Check `.github/CODEOWNERS` for specific areas

### Community Guidelines

- **Be respectful** and constructive
- **Test thoroughly** before submitting
- **Document clearly** what you've created
- **Follow established patterns** for consistency
- **Ask questions** when unsure

---

## ✅ Setup Checklist

Before you start contributing, ensure:

- [ ] **Node.js v18+** installed
- [ ] **Repository cloned** and dependencies installed
- [ ] **Git configured** with your name and email
- [ ] **Git hooks installed** (`npx lefthook install`)
- [ ] **Quality checks pass** (`npm run check`)
- [ ] **Test commit successful** (see Quick Start section)
- [ ] **Read CONTRIBUTING.md** thoroughly
- [ ] **Understand conventional commits** format
- [ ] **Know how to test** your content type
- [ ] **VS Code setup** (if using GitHub Copilot)

---

> 🎉 **Welcome to the team!** You're now ready to contribute to awesome-github-copilot. Start small, ask questions, and help us build something amazing together!