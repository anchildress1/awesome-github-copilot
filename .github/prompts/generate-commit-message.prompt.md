---
status: "polish"
title: "Generate Conventional Commit Message"
description: "Generate a conventional commit message from staged changes and save to ./commit.tmp"
tools: [
  "execute",
  "read",
  "edit",
  "search"
]
---

<custom-prompt id="generate-commit-message">
<goal-definition>

## Goal

Generate a valid conventional commit message based on staged git changes and save it to a `commit.tmp` file.

</goal-definition>
<style-guidelines>

## Writing Guidelines ✍️

- **Be concise**: Summarize groups of similar changes; don't list every single file.
- **Focus on intent**: Explain WHAT changed and WHY, not HOW.
- **Use active voice**: Use imperative present verbs (e.g. "Replace feature" not "Replaced feature").
- **Quantify when helpful**: "Rename 4 files" is better than listing each one.
- **Subject Line**:
  - Prefer minor types (`fix`, `refactor`) unless functionality warrants a major release (`feat`).
  - If a Jira key exists, use it strictly as the scope; otherwise use a one-word area description.

</style-guidelines>
<formatting-constraints>

## Formatting Rules 🧱

- **User Constraints**:
  - Check for existing commit linters/rules in the repo. If found, follow them (except RAI footer, which is mandatory).
  - Suggest adding references to instructions if a linter is found.
  - Fall back to these rules if no linter is found.
- **Line Length**:
  - Subject: ≤ 72 characters.
  - Body: ≤ 100 characters per line.
- **Structure**:
  - Single blank line after subject.
  - Single blank line before footers.
  - No other blank lines.
- **Body Content**:
  - Each bullet on its own line.
  - No multi-line bullet points.
- **Validation**:
  - Rephrase subject or split long bullets to comply with length limits.
  - Ensure no single bullet spans multiple lines.

</formatting-constraints>
<workflow-overview>

## Workflow 📋

0. **Check Tool Availability**: Verify available tools. If required tools are missing, warn user but proceed with best effort.

1. **Analyze Changes**:
   - Get changed files (staged); if none, use unstaged.
   - Fallback to all local changes if no staged changes exist.
   - If analysis fails, stop and alert user.

2. **Capture Context**:
   - Check branch name, staged context, or prior commits for ticket/story IDs.
   - Carry these into the commit message scope or footer.

3. **Determine Intent**: Derive purpose (fix, feature, refactor) strictly from the diff. Do not rely on memory/chat history for *what* changed, only for *why* and attribution.

4. **Assess AI Contribution**:
   - Compare diff hunks to your memory of the session.
   - Estimate contribution tier (Majority, Half, Some, Tiny) for the RAI footer.

5. **Draft & Safety Check**:
   - Draft the message following all guidelines.
   - **CRITICAL**: Re-verify index matches the diff used for drafting. If changed, abort and re-analyze.
   - **NEVER** execute `git add`, `git commit`, or `git push`.

6. **Save and Output**:
   - Write to `commit.tmp`.
   - Display in a copy-paste-friendly code block.
   - Wait for user approval.

</workflow-overview>
<footer-constraints class="critical">

## Critical Constraints 👣

<scope-constraints>

### Scope Rules 🎯

- If a Jira key or issue ID exists, it **MUST** be used as the scope.
- Example: `feat(PROJ-123): add new feature`

</scope-constraints>

<breaking-changes>

### Breaking Changes 💥

- Use `BREAKING CHANGE:` for incompatibilities (actions required from end user).
- Example: `BREAKING CHANGE: The getUser API now returns an object instead of an ID.`

</breaking-changes>
<rai-attribution>

### RAI Attribution (REQUIRED) 🖋️

Choose exactly one footer based on contribution estimate:

- **`Generated-by`**: **Majority** (67-100% AI).
- **`Co-authored-by`**: **Half** (34-66% AI).
- **`Assisted-by`**: **Some** (1-33% AI).
- **`Commit-generated-by`**: **Tiny** (0% code, message only).

Format: `<attribution-footer>: <AI_NAME> <ai.email@example.com>`

</rai-attribution>
<prohibited-actions>

### Prohibited 🛑

- No `Signed-off-by` unless explicitly asked.
- No git history modifications.

</prohibited-actions>
</footer-constraints>
<valid-output-example>

## Output Example

This example follows all guidelines:

- The subject is concise and informative (`type(scope): message`).
- The body uses bullets to explain the *what* and *why*.
- It groups related changes (e.g., renames).
- It correctly declares a `BREAKING CHANGE` in the footer.
- Include the `Co-authored-by` RAI footer when AI contribution is estimated at 34–66% (attribution unverifiable without context).

```plaintext
refactor(JIRA-123)!: Adopt new authentication client and align naming

- Replace legacy auth client with `NewAuthClient` to improve security
- Rename user data access methods for consistency (`getUser` -> `findUser`)

BREAKING CHANGE: The authentication client now requires an API key instead of a token
Co-authored-by: GitHub Copilot <github.copilot@github.com>
```

</valid-output-example>
<output-instructions>

## Output 📤

1. Write the complete commit message to `commit.tmp`.
2. Display the exact same commit message in a markdown code block.

</output-instructions>
</custom-prompt>

<!-- GitHub Copilot generated his document again and again -->
