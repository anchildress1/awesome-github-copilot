# 🛠️ Development Guide

This guide provides technical details for setting up and maintaining the awesome-github-copilot development environment.

---

## 🏗️ Development Environment Setup

### System Requirements

- **Node.js**: v18+ (LTS recommended)
- **npm**: v9+ (comes with Node.js)
- **Git**: v2.30+ with conventional commit support
- **VS Code**: Latest version (for Copilot integration testing)

### Environment Configuration

1. **Clone with development setup**:
   ```bash
   git clone https://github.com/anchildress1/awesome-github-copilot.git
   cd awesome-github-copilot
   npm install
   ```

2. **Configure Git for this project**:
   ```bash
   # Set up signed commits (recommended)
   git config user.signingkey YOUR_GPG_KEY_ID
   git config commit.gpgsign true

   # Set up commit template (optional)
   git config commit.template .gitmessage
   ```

3. **Install development hooks**:
   ```bash
   npx lefthook install
   ```

### VS Code Setup

For optimal development experience with GitHub Copilot:

1. **Install recommended extensions**:
   - GitHub Copilot
   - Remark (for markdown)
   - Commitizen
   - GitLens

2. **Configure Copilot custom instructions**:
   ```json
   {
     "github.copilot.enable": {
       "*": true,
       "yaml": false,
       "plaintext": false,
       "markdown": true
     },
     "github.copilot.advanced.customInstructions": {
       "markdown": "Follow the repository's markdown style guide. Use emoji prefixes for headers. Include status badges for new content."
     }
   }
   ```

---

## 📋 Available Scripts

### Primary Scripts

```bash
# Lint all markdown files
npm run check

# Format markdown and fix GitHub alerts
npm run format

# Validate commit messages
npm run commitlint -- <commit-message-file>
```

### Development Workflows

```bash
# Full validation pipeline
npm run check && npm run format

# Quick format staged files
git add . && npm run format

# Test commit message format
echo "feat(docs): Add development guide" | npx commitlint
```

---

## 🔧 Tool Configuration

### Commitlint Configuration

Located in `commitlint.config.js`, this enforces strict conventional commit standards:

```javascript
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'
    ]],
    'scope-enum': [2, 'always', [
      'config', 'instructions', 'prompts', 'chatmodes', 'build', 'deps', 'tooling', 'readme'
    ]],
    // ... additional strict rules
  }
};
```

**Key Requirements**:

- Scope is **required** (not optional)
- Body is **required** (not optional)
- Signed-off-by trailer is **required**
- Maximum line lengths strictly enforced

### Remark Configuration

Located in `.remarkrc.js`, this handles markdown linting and formatting:

```javascript
export default {
  settings: {
    emphasis: '_',
    bullet: '-',
    listItemIndent: 'one',
    tablePipeAlign: false,
    maximumLineLength: false,
  },
  plugins: [
    [remarkFrontmatter, { type: 'yaml', marker: '-' }],
    [remarkGfm, { singleTilde: false, tablePipeAlign: false }],
  ],
};
```

### Lefthook Configuration

Located in `lefthook.yml`, this manages git hooks:

```yaml
pre-commit:
  parallel: true
  commands:
    format:
      run: |
        STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM)
        if [ -n "$STAGED_FILES" ]; then
          echo "$STAGED_FILES" | xargs -r npm run format
          echo "$STAGED_FILES" | xargs -r git add
        fi

commit-msg:
  parallel: true
  commands:
    commitlint:
      run: npm run commitlint -- {1}
```

---

## 🧪 Testing Strategies

### Markdown Validation

```bash
# Lint specific files
npx remark docs/instructions/new-instruction.md -f

# Check all markdown with exit codes
npx remark . -f -q

# Format and fix issues automatically
npx remark . -o
```

### Instruction Testing

For testing custom instructions:

1. **Manual testing in VS Code**:
   ```json
   // In VS Code settings.json
   {
     "github.copilot.advanced.customInstructions": "path/to/instruction.md"
   }
   ```

2. **Validation checklist**:
   - [ ] Instruction loads without errors
   - [ ] Behavior matches documentation
   - [ ] Edge cases handled appropriately
   - [ ] No unintended side effects

### Prompt Testing

For Agent Mode prompts:

1. **Test in GitHub Copilot Agent Mode**
2. **Verify tool usage** (`#changes`, `#editFiles`, `#runInTerminal`)
3. **Check output quality** and completeness
4. **Validate error handling**

### Chat Mode Testing

1. **Apply in compatible AI tools**
2. **Test personality consistency**
3. **Verify behavior across scenarios**
4. **Document limitations and edge cases**

---

## 🏗️ Build Process

### File Generation

The repository uses scripts to maintain consistency:

```bash
# Fix GitHub alert formatting
node scripts/fix-github-alerts.js

# This script processes all markdown files and:
# - Standardizes alert syntax
# - Fixes formatting inconsistencies
# - Maintains GitHub compatibility
```

### Validation Pipeline

1. **Pre-commit hooks**:
   - Format staged files
   - Run basic linting
   - Add formatted files back to staging

2. **Commit message validation**:
   - Enforce conventional commit format
   - Validate against configured rules
   - Require signed-off-by trailer

3. **CI/CD integration** (future):
   - Full markdown validation
   - Link checking
   - Content quality assessment

---

## 🐛 Debugging Common Issues

### Commit Message Failures

```bash
# Test commit message format
echo "your-commit-message" | npx commitlint

# Common issues:
# - Missing scope (required in this repo)
# - Missing body (required in this repo)
# - Missing signed-off-by trailer
# - Subject too long (max 72 chars)
```

### Markdown Linting Errors

```bash
# Show detailed errors
npx remark . -f

# Common issues:
# - Inconsistent list formatting
# - Missing blank lines
# - Table formatting issues
# - Emphasis style inconsistencies
```

### Git Hook Problems

```bash
# Reinstall hooks
npx lefthook uninstall
npx lefthook install

# Check hook status
npx lefthook list

# Skip hooks temporarily (development only)
LEFTHOOK=0 git commit -m "message"
```

---

## 📦 Dependency Management

### Current Dependencies

```json
{
  "devDependencies": {
    "@commitlint/cli": "19.8.1",
    "@commitlint/config-conventional": "19.8.1",
    "glob": "11.0.3",
    "ignore": "7.0.5",
    "lefthook": "1.12.2",
    "remark-cli": "12.0.1",
    "remark-frontmatter": "5.0.0",
    "remark-gfm": "4.0.1"
  }
}
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific dependency
npm install package-name@latest --save-dev
```

### Security Considerations

```bash
# Audit for vulnerabilities
npm audit

# Fix automatically fixable issues
npm audit fix

# Review unfixable issues
npm audit --audit-level=moderate
```

---

## 🚀 Release Process

### Version Management

This repository uses semantic versioning:

- **MAJOR**: Breaking changes to instruction formats
- **MINOR**: New instructions, prompts, or chat modes
- **PATCH**: Bug fixes, documentation updates

### Content Status Progression

1. **Draft** → **Tweak**: Initial testing and iteration
2. **Tweak** → **Polish**: Refinement and edge case handling
3. **Polish** → **Check**: Community testing and feedback
4. **Check** → **Ready**: Production-ready, fully documented

### Quality Gates

Before promoting content status:

- [ ] **Functionality**: Works as documented
- [ ] **Documentation**: Complete and accurate
- [ ] **Testing**: Validated across use cases
- [ ] **Style**: Follows repository conventions
- [ ] **Integration**: Compatible with existing content

---

## 🔍 Code Review Guidelines

### For Reviewers

1. **Functionality review**:
   - Test instructions/prompts/chat modes
   - Verify documented behavior
   - Check edge cases

2. **Documentation review**:
   - Clarity and completeness
   - Proper status badge usage
   - Consistent formatting

3. **Code quality review**:
   - Follows repository conventions
   - No conflicts with existing content
   - Proper file organization

### For Contributors

1. **Self-review checklist**:
   - [ ] All tests pass locally
   - [ ] Documentation is complete
   - [ ] Status badge is appropriate
   - [ ] Commit messages follow conventions
   - [ ] No sensitive information included

2. **PR preparation**:
   - Clear description of changes
   - Testing evidence provided
   - Related issues referenced
   - Breaking changes documented

---

## 📈 Performance Considerations

### File Organization

- Keep individual files focused and modular
- Use clear naming conventions
- Maintain logical directory structure
- Avoid deeply nested hierarchies

### Content Optimization

- Write concise but comprehensive instructions
- Use examples effectively
- Minimize redundancy across content
- Optimize for AI agent processing

### Repository Size

- Use `.remarkignore` to exclude build artifacts
- Keep assets optimized and necessary
- Regular cleanup of temporary files
- Monitor repository size growth

---

## 🔮 Future Development

### Planned Improvements

1. **Enhanced testing frameworks**:
   - Automated instruction validation
   - Performance benchmarking
   - Quality assessment metrics

2. **Developer tools**:
   - Content generation templates
   - Validation utilities
   - Integration helpers

3. **Community features**:
   - Contribution metrics
   - Quality scoring
   - Collaborative editing tools

### Technical Debt

- Standardize all instruction formats
- Improve cross-platform compatibility
- Enhance error handling and validation
- Optimize build and validation processes

---

> 🛠️ **Development is an ongoing process**: This guide evolves with the project. Suggest improvements via issues or pull requests!
