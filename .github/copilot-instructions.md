# 🚀 awesome-github-copilot Repository Instructions

Welcome to the **awesome-github-copilot** repository! This is Ashley Childress's curated collection of AI prompts, custom instructions, and chat modes for GitHub Copilot and other AI tools.

## 📋 Repository Purpose

This repository contains:
- **Custom Instructions**: Reusable, testable instructions for GitHub Copilot (`.github/instructions/`)
- **Prompts**: High-level prompts for Agent Mode (`docs/prompts/`)
- **Chat Modes**: Personality-driven AI configurations (`docs/chatmodes/`)
- **Documentation**: Comprehensive guides and examples (`docs/`)

## 🎯 Core Principles

When contributing to this repository, follow these guidelines:

### 📁 File Organization
- **Instructions**: Place in `.github/instructions/` with `.instructions.md` suffix
- **Prompts**: Place in `docs/prompts/` directory
- **Chat Modes**: Place in `docs/chatmodes/` directory
- **Documentation**: Use `docs/` for supporting materials

### 🏷️ Status System
Every artifact uses a status badge to indicate maturity:

- ![Draft](https://img.shields.io/badge/status-draft-F72585.svg) **Draft**: Early concept, may not work reliably
- ![Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg) **Tweak**: Functional but needs refinement
- ![Polish](https://img.shields.io/badge/status-polish-9B5DE5.svg) **Polish**: Works well, minor improvements needed
- ![Check](https://img.shields.io/badge/status-check-3A86FF.svg) **Check**: Stable, undergoing final validation
- ![Ready](https://img.shields.io/badge/status-ready-007F5F.svg) **Ready**: Production-ready and battle-tested

### 📝 Content Guidelines

#### For Instructions (.github/instructions/)
- Start with YAML frontmatter including `status`, `title`, `description`, and `applyTo`
- Use clear sections with emoji headers for visual organization
- Include practical examples where applicable
- Focus on actionable guidance, not theory
- Reference existing instructions when building upon them

#### For Prompts (docs/prompts/)
- Design for Agent Mode usage with specific tool references (`#changes`, `#editFiles`, etc.)
- Include clear purpose and expected outcomes
- Provide usage examples and tips
- Link to related instructions when applicable

#### For Chat Modes (docs/chatmodes/)
- Define clear personality and behavioral guidelines
- Specify use cases and scenarios
- Include interaction examples
- Note any dependencies on instructions or tools

## 🛠️ Development Workflow

### Writing Style
- Use active voice and clear, concise language
- Include emojis for visual organization (consistently with existing patterns)
- Keep technical jargon minimal and well-explained
- Write for practitioners who need immediate, actionable guidance

### Quality Standards
- Follow the [design principles](./.github/instructions/design-principles.instructions.md)
- Apply [logging best practices](./.github/instructions/logging-best-practices.instructions.md) when relevant
- Use [conventional commits](./docs/instructions/format-conventional-commits.md) for all changes
- Maintain consistency with existing file patterns and structures

### Testing and Validation
- Test instructions with actual GitHub Copilot usage
- Verify prompts work as expected in Agent Mode
- Validate chat modes produce desired personality and responses
- Ensure markdown formatting renders correctly

## 🔧 Tools and Automation

This repository uses:
- **remark**: Markdown linting and formatting (`npm run check`, `npm run format`)
- **commitlint**: Conventional commit enforcement
- **lefthook**: Git hooks for quality gates
- **GitHub Actions**: Automated testing and validation

## 🤝 Contribution Guidelines

### Before Creating New Content
1. Check existing instructions, prompts, and modes for overlap
2. Review the [Status Badge Lifecycle](./docs/status-badge-lifecycle.md)
3. Understand the target audience and use case
4. Consider how it fits into the overall collection

### Creating New Instructions
1. Start with `status: draft` in frontmatter
2. Use descriptive, kebab-case filenames ending in `.instructions.md`
3. Include comprehensive `description` field explaining purpose and usage
4. Test thoroughly before advancing status
5. Update main README.md with new entry and appropriate status badge

### Updating Existing Content
1. Maintain backwards compatibility when possible
2. Update status badge if making significant improvements
3. Test changes against existing usage patterns
4. Document breaking changes clearly

## 🎨 Creative Philosophy

This repository embraces **creative chaos** and **workflow upgrades**. Content should be:
- **Uniquely crafted**: Not just rehashed generic advice
- **Obsessively refined**: Tested and improved through real usage
- **Clearly labeled**: Status badges help users understand maturity
- **Personality-driven**: Chat modes especially should have distinct character

## 📚 Learning Resources

- [Status Badge Lifecycle](./docs/status-badge-lifecycle.md): Understanding the maturity system
- [Design Principles](./.github/instructions/design-principles.instructions.md): Core architectural guidance
- [Analyze Git Diff](./.github/instructions/analyze-git-diff.instructions.md): Understanding change analysis
- [Format Conventional Commit](./.github/instructions/format-conventional-commit.instructions.md): Commit message standards

## 🦄 Final Notes

Remember: This isn't just a collection of prompts—it's a curated experience designed to make AI tools more effective and enjoyable to use. Every piece should add real value and reflect the creative, practical spirit of the project.

When in doubt, check existing patterns, test thoroughly, and don't be afraid to iterate. The goal is to create tools that developers actually want to use in their daily workflow.

> If you're contributing, thank you for being part of the creative chaos! 🥰