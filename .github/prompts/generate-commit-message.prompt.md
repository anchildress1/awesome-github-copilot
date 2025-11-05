---
status: "check"
mode: "agent"
title: "Generate Conventional Commit Message 📝"
description: "Generate a conventional commit message from staged changes and save to ./commit.tmp"
---

<custom-prompt id="generate-commit-message">
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

0. **Check Tool Availability (REQUIRED)**: Before any other step, verify which tools are available in your environment.

- If any required tool is unavailable or inaccessible, display a chat warning listing only the missing tools at the end of your turn. Do not stop execution; continue the workflow and return best effort results.

1. **Analyze Changes**: Retrieve staged changes first; if none exist, retrieve all local changes.

- If the analysis fails for any reason, retry using the command line with `git --no-pager diff --cached`. If `--cached` returns no output, rerun with `git --no-pager diff` to capture all local changes.

- If both attempts return an error, no changes, or any other failure to analyze changes, you should stop immediately and alert the user of the problem preventing you from proceeding.

2. **Determine Intent from the Diff (MANDATORY)**: Derive the purpose of the changes (e.g., fix, feature, refactor) strictly from the analyzed diff output (staged; fall back to all local changes only if no staged changes exist).

- Do NOT rely on conversation history, prior edits, or memory to decide what changed. Conversation history may only be consulted to help with ambiguous attribution after the message content is fully derived from the diff.

3. **Assess AI Contribution (Best-Guesstimate)**: Look only at the diff hunks and compare them to the work you remember doing. From that lightweight comparison, estimate your contribution level.

- **Goal**: Decide whether the AI wrote the majority, about half, some, or only a tiny bit of the changes.
- **Method**: Treat this as a quick gut-check. Do **not** re-open full files, recompute line counts, or inspect unchanged code.
- **Heuristic**:
  - If the diff hunks match what you remember implementing, credit the AI.
  - If the diff hunks diverge from your memory—or you are unsure—credit the user.
- **Focus**: This estimate drives the diff report attribution only; no detailed reporting is required.

***CRITICAL SAFETY***: NEVER run `git commit` or `git push` automatically.

Before writing `commit.tmp`: immediately re-run the diff analysis (staged first, then all local changes if needed) and verify the index matches the diff you used to draft the message. If the index changed, abort the save, re-analyze the new diff, and draft a fresh message. If you cannot re-run the diff, warn the user that the message may be stale and continue with best-effort output.

- Always write the commit message to `commit.tmp`, display it, and wait for explicit user approval before staging, signing, or committing.
- If the user asks you to prepare a commit, stop after creating `commit.tmp` and explicitly ask for confirmation to perform the commit.
- You are not allowed under any circumstances to execute a `git add` or `git commit` command.

4. **Draft Commit Message**: Write a commit message that follows the **Writing Guidelines** and **Footer Rules**.

5. **Save and Output**: Write the final message to `commit.tmp` and display it in a copy-paste-friendly code block.

</workflow-overview>
<tool-failure-handling>

## Tool Failure Handling (CRITICAL) ⚠️

- If any tool call fails for any reason at any step, you should continue making a best-effort attempt to complete the task using alternative methods or your own knowledge.
- Capture and report: the tool name, the command or parameters attempted, the exact error message or exit code, and any stdout/stderr or partial output.
- After you complete the task, report the failure details to the user along with your best-effort results.
- When retrying, limit retries to one automatic retry unless the user authorizes more.

</tool-failure-handling>
<footer-constraints class="critical">

## Footer Rules (CRITICAL) 👣

Include correct footers based on changes.

<breaking-changes>

### Breaking Changes 💥

Breaking changes are a modification in the code that requires an action from the end user. If we handle it already, then it does not qualify as breaking.

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
  - Fixes or Resolves should only be applied if the referenced issue or story is fully fixed or resolved by this specific commit. If there is outstanding work, use Refs instead.
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

<rules-for-attribution-determination>

#### Rules for Attribution Determination

1. **Analyze Diff Hunks**: Review only the staged diff hunks—ignore unchanged file content.
2. **Compare to Memory**: Contrast those hunks with the work you remember doing during the session.
3. **Estimate Contribution**: Make a best-guess tier (majority/half/some/tiny). If unsure, default to crediting the user.
4. **Select Footer**: Choose the footer that best matches your estimate.

</rules-for-attribution-determination>
<attribution-rules>

#### Attribution Tiers

Choose exactly one footer from this list based on your best-guess estimate.

- **`Generated-by`**: **Majority**. AI is estimated to have authored the majority of the changes.
- **`Co-authored-by`**: **Half**. Contribution is estimated to be roughly equal between AI and the user.
- **`Assisted-by`**: **Some**. AI's contribution is estimated to be minor compared to the user's changes.
- **`Commit-generated-by`**: **Tiny Bit**. AI's contribution was trivial (e.g., formatting, comments, renames).

Format: `<attribution-footer>: <AI_NAME> <ai.email@example.com>`

</attribution-rules>
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
- It verbosely lists file changes without explaining the *what* or *why*.
- It fails to identify a breaking change.
- It is missing the required `RAI` attribution footer.

```plaintext
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
- The body uses bullets to explain the *what* and *why*.
- It groups related changes (e.g., renames).
- It correctly declares a `BREAKING CHANGE` in the footer.
- Include the `Co-authored-by` RAI footer when AI contribution is estimated at 34–66% (attribution unverifiable without context).

```plaintext
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

1. Write the complete commit message to `commit.tmp`.
2. Display the exact same commit message in a markdown code block for easy copy-pasting.

</output-instructions>
</custom-prompt>

<!-- This document was generated by GitHub Copilot as directed by Ashley Childress. -->
