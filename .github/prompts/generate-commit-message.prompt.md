---
status: "polish"
mode: "agent"
description: "Generate a conventional commit message from staged changes and save to ./commit.tmp"
tools: [
  "runInTerminal",
  "get_changed_files",
  "edit_diff_history"
]
---

<custom-prompt id="generate-commit-message">

# Generate Conventional Commit Message 📝

<goal-definition>

## Task 🎯

Generate a valid conventional commit message based on staged git changes and save it to a `commit.tmp` file.

</goal-definition>
<style-guidelines>

## Writing Guidelines ✍️

- **Be concise**: Summarize groups of similar changes; don't list every single file.
- **Focus on intent**: Explain WHAT changed and WHY, not HOW.
- **Use active voice**: Use imperative present verbs (e.g. "Replace feature" not "Replaced feature").
- **Quantify when helpful**: "Rename 4 files" is better than listing each one.

</style-guidelines>
<formatting-constraints>

## Formatting Rules 🧱

- **User Constraints**:
  - There may be an existing linter set up for the repo.
  - You must always search for one and if found, suggest to the user adding a reference to instructions.
  - Regardless, if any commit lint rules exist in the repo you are required to follow them above this except in the case of the RAI footer. The RAI footer is always required.
  - Fall back to the rules in this prompt if no linter is found.
- **Line Length**:
  - Subject: ≤ 72 characters maximum.
  - Body: ≤ 100 characters maximum per line.
  - Elimininate noise, rephrase, or be less explicit to meet limits.
  - Verify before saving to `commit.tmp`.
- **Structure**:
  - Use a single blank line after the subject.
  - Use a single blank line before the footers.
  - Do not use any other blank lines.
- **Body Content**:
  - Each bullet point must be on its own line.
  - Do not wrap text or add multi-line bullet points.

</formatting-constraints>
<workflow-overview>

## Workflow 📋

1. **Analyze Changes**: Use `get_changed_files` (filter for `staged`; if none, use `unstaged`) or `git diff --cached` (or `git diff` if no staged).

   - If both commands return an error, no changes, or any other failure to analyze changes, you should stop immediately and alert the user of the problem preventing you from proceeding.

2. **Determine Intent**: Understand the purpose of the changes (e.g., fix, feature, refactor) based on your conversation history with the user and any access to issue tracking.

3. **Assess AI Contribution**: Use the `edit_diff_history` tool to determine your level of contribution or the percentage of file edits made by AI. The specific attribution footer is detailed in the **Footer Rules** section below.

***CRITICAL SAFETY***: NEVER run `git commit` or `git push` automatically. Always write the commit message to `commit.tmp`, display it, and wait for explicit user approval before staging, signing, or committing. If the user asks you to prepare a commit, stop after creating `commit.tmp` and explicitly ask for confirmation to perform the commit.

4. **Draft Commit Message**: Write a commit message that follows the **Writing Guidelines** and **Footer Rules**.

5. **Save and Output**: Write the final message to `commit.tmp` and display it in a copy-paste-friendly code block.

</workflow-overview>
<footer-constraints class="critical">

## Footer Rules (CRITICAL) 👣

Include correct footers based on changes.

<breaking-changes>

### Breaking Changes 💥

- Use `BREAKING CHANGE:` for incompatibilities.
- Example: `BREAKING CHANGE: The getUser API now returns an object instead of an ID.`

</breaking-changes>
<issue-story-references>

### Issue/Ticket References 🔗

<footer-selection-rules>

#### Footer Selection

Choose one per referenced issue:

- **`Fixes`**: Commit fully resolves/closes issue (bug fix, root cause removal). Merging auto-closes issue.
- **`Resolves`**: Equivalent to `Fixes` when project prefers this keyword. Closes issue on merge.
- **`Refs`**: Default fallback when relationship cannot be confidently determined (ambiguous scope, missing metadata). Does NOT close issue.

</footer-selection-rules>
<formatting-rules>

#### Formatting

- One footer line per issue/external ID.
- Format: `<KEYWORD> <ISSUE>` (e.g., `Fixes RPLNSHMNT-1234`, `Refs https://tickets.example.com/1234`).
- Multiple issues with mixed relationships: use explicit per-line keywords (e.g., `Fixes FOO-1`, `Refs FOO-2`).

</formatting-rules>
<decision-heuristics>

#### Decision Heuristics

- Message/body states "fixes/removes/closes bug/root cause" → use `Fixes` (or `Resolves` if repo standard).
- Message indicates "WIP", "preliminary", "adds tests for", "related to", or work that doesn't finish issue → use `Refs`.
- PR/branch metadata shows linked issue explicitly marked "closes" or matching ID in PR title/body → use `Fixes`/`Resolves`.
- Cannot infer intent or explicit action not stated → use `Refs` (avoid accidental closure).

</decision-heuristics>
<finding-ids>

#### Finding IDs

- Use your conversation history with the user along with the existing ID in the `./commit.tmp` file, branch name (e.g., `feature/PROJ-123-add-auth`), PR description, or commit context.
- If you have accessible tools to access issue trackers, use them to verify IDs you find match the context of the change.
  - If there are discrepancies, you must CLARIFY with the user that you have used a preferred issue they mentioned in chat, branch name or existing commit message ID, and that they should verify it is correct before pushing.
- If no IDs are found, omit this footer entirely.

</finding-ids>
</issue-story-references>
<rai-attribution>

### RAI Attribution (REQUIRED) 🖋️

- Choose exactly one footer from this list; higher entries override lower ones.
- **Generated-by**: Most/all lines changed were AI-written — estimate/guestimate the AI's contribution level and pick the best fit (AI wrote all modified/added code, even if refactoring existing logic).
- **Co-authored-by**: Significant portion of lines changed were AI-written — estimate/guestimate the AI's contribution level and pick the best fit (substantial AI contribution to refactoring or new features).
- **Assisted-by**: Few lines changed were AI-written — estimate/guestimate the AI's contribution level and pick the best fit (minor AI edits or fixes).
- **Commit-generated-by**: Only message generation (0% logic changes, but some trivial changes may exist) or trivial change other than direct manipulation of code (e.g., whitespace, comments, renames).
- Format: `<type>: <AI_NAME> <ai.email@example.com>`

</rai-attribution>
<prohibited-actions>

### Prohibited 🛑

- Never include `Signed-off-by` unless asked.
- You are not allowed to modify the git history or make any commits yourself. You job ends when the commit message is written to `commit.tmp` and displayed conversationally in a code block.

</prohibited-actions>
</footer-constraints>
<reference-examples>

## Output Examples 💡

<invalid-output-example>

### Invalid Output ❌

This example violates multiple rules:

- The subject is vague and begins with lowercase letter.
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

### Valid Output ✅

This example follows all guidelines:

- The subject is concise and informative (`type(scope): Message`).
- The body uses bullets to explain the _what_ and _why_.
- It groups related changes (e.g., renames).
- It correctly declares a `BREAKING CHANGE` in the footer.
- Include the `Co-authored-by` RAI footer when AI contribution is estimated at 34–66% (attribution unverifiable without context).

```
refactor(auth): Adopt new authentication client and align naming

 - Replace legacy auth client with `NewAuthClient` to improve security
 - Rename user data access methods for consistency (`getUser` -> `findUser`)

BREAKING CHANGE: The `getUser` method is now `findUser`. The authentication client now requires an API key instead of a token.
Fixes #123
Co-authored-by: GitHub Copilot <github.copilot@github.com>
```

</valid-output-example>
<output-instructions>

## Output 📤

1. Write the complete commit message to a temporary file named `commit.tmp` using a shell redirect.
   - Example: `cat > commit.tmp << 'EOF'`
2. Display the exact same commit message in a markdown code block for easy copy-pasting.

</output-instructions>
</custom-prompt>

<!-- This document was generated by GitHub Copilot as directed by Ashley Childress. -->
