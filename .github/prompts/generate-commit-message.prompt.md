---
status: 'polish'
mode: 'agent'
title: 'Generate Conventional Commit Message'
description: 'Generate a conventional commit message from staged changes and save to ./commit.tmp'
tools: [
  'runInTerminal',
  'get_changed_files'
]
---
<custom-prompt id="generate-commit-message">

# 📝 Generate Conventional Commit Message

<goal-definition>

## 🎯 Task

Generate a valid conventional commit message based on staged git changes and save it to a `commit.tmp` file.

</goal-definition>
<style-guidelines>

## ✍️ Writing Guidelines

- **Be concise**: Summarize groups of similar changes; don't list every single file.
- **Focus on intent**: Explain WHAT changed and WHY, not HOW.
- **Use active voice**: Use imperative present verbs (e.g. "Replace feature" not "Replaced feature").
- **Quantify when helpful**: "Rename 4 files" is better than listing each one.

</style-guidelines>
<formatting-constraints>

## 🧱 Formatting Rules

- **Line Length**:
  - Subject: 72 characters maximum.
  - Body: 100 characters maximum per line.
- **Structure**:
  - Use a single blank line after the subject.
  - Use a single blank line before the footers.
  - Do not use any other blank lines.
- **Body Content**:
  - Each bullet point must be on its own line.
  - Do not wrap text or add multi-line bullet points.

<formatting-enforcement>

### Enforcement

- Keep the subject to ≤72 characters and each body line to ≤100 characters. Rephrase the subject or split long bullets to comply. Verify these limits before saving to `commit.tmp`.

</formatting-enforcement>
</formatting-constraints>
<workflow-overview>

## 📋 Workflow

1. **Analyze Changes**: Use `get_changed_files` (filter for `staged`; if none, use `unstaged`) or `git diff --cached` (or `git diff` if no staged).
2. **Determine Intent**: Understand the purpose of the changes (e.g., fix, feature, refactor).
3. **Assess AI Contribution**: Analyze the diff to determine your level of contribution. The specific attribution footer is detailed in the **Footer Rules** section below.
4. **Draft Commit Message**: Write a commit message that follows the **Writing Guidelines** and **Footer Rules**.
5. **Save and Output**: Write the final message to `commit.tmp` and display it in a copy-paste-friendly code block.

</workflow-overview>
<footer-constraints class="critical">

## Footer Rules (CRITICAL)

Include correct footers based on changes.

<breaking-changes>

### Breaking Changes

- Use `BREAKING CHANGE:` for incompatibilities.
- Example: `BREAKING CHANGE: The getUser API now returns an object instead of an ID.`

</breaking-changes>
<issue-story-references>

### Issue/Ticket References

- GitHub: `Fixes #123`, `Closes #456`.
- Jira: `Fixes PROJ-123` (no #).
- Multiple: `Related PROJ-123, #72`.
- **Finding IDs**: Check branch name (e.g., `feature/PROJ-123-add-auth`), PR description, or commit context.

</issue-story-references>
<rai-attribution>

### RAI Attribution (REQUIRED)

- Choose exactly one footer from this list; higher entries override lower ones.
- **`Generated-by`**: Entirely authored features/files (67-100% AI-written).
- **`Co-authored-by`**: Substantial changes/refactoring (34-66% AI-written).
- **`Assisted-by`**: Minor edits/fixes (1-33% AI-written).
- **`Commit-generated-by`**: Only message generation (0% code changes) — use this when none of the higher levels apply.
- Format: `<type>: <AI_NAME> <ai.email@example.com>`

</rai-attribution>
<prohibited-actions>

### Prohibited

- Never include `Signed-off-by` unless asked.

</prohibited-actions>
</footer-constraints>
<reference-examples>

## 💡 Output Examples

<invalid-output-example>

### ❌ Invalid Output

This example violates multiple rules:

- The subject is vague.
- It contains prose instead of a bulleted list.
- It verbosely lists file changes without explaining the _what_ or _why_.
- It fails to identify a breaking change.
- It is missing the required `RAI` attribution footer.

```
feat: update services

I updated the user service to use the new authentication method. This was a big change that affects how users log in. I also renamed some files to make more sense.

- updated user.ts
- updated auth.ts
- updated api.ts
- renamed getUser.ts to findUser.ts
- renamed deleteUser.ts to removeUser.ts

Fixes #123
```

</invalid-output-example>
<valid-output-example>

### ✅ Valid Output

This example follows all guidelines:

- The subject is concise and informative (`type(scope): message`).
- The body uses bullets to explain the _what_ and _why_.
- It groups related changes (e.g., renames).
- It correctly declares a `BREAKING CHANGE` in the footer.
- Include the `Co-authored-by` RAI footer when AI contribution is estimated at 34–66% (attribution unverifiable without context).

```
refactor(auth): adopt new authentication client and align naming

 - Replace legacy auth client with `NewAuthClient` to improve security
 - Rename user data access methods for consistency (`getUser` -> `findUser`)

BREAKING CHANGE: The `getUser` method is now `findUser`. The authentication client now requires an API key instead of a token.
Fixes #123
Co-authored-by: GitHub Copilot <github.copilot@github.com>
```

</valid-output-example>
<output-instructions>

## 📤 Output

1. Write the complete commit message to a temporary file named `commit.tmp` using a shell redirect.
   - Example: `cat > commit.tmp << 'EOF'`
2. Display the exact same commit message in a markdown code block for easy copy-pasting.

</output-instructions>
</custom-prompt>

<!-- This document was generated by GitHub Copilot as directed by Ashley Childress. -->
