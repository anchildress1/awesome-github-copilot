# 🎼 Custom Prompts

These are your spectral conductors — high-level prompts designed for Agent Mode that don’t _do_ the work, they summon the right specialists to do it for them. Think: “raise the Diff Philosopher, call in the Commit Surgeon, validate it all without lifting a mortal finger.”

Each one knows exactly which tools to use (`#changes`, `#editFiles`, `#runInTerminal`) and when to call them. You’re not just generating content — you’re performing a séance on your staging area with precision and a clipboard.

Every prompt is tagged by lifecycle status (see [Status Lifecycle & Badges](../../docs/status-badge-lifecycle.md)) so you’ll know if you're working with a certified exorcist or just some intern trying to make cold spots feel like features.

> 🦄 “No need to flinch... these prompts aren’t dead like me — they just don’t run without instructions.”
> — Wally _School Spirits_ probably, if he got stuck debugging commitlint in the afterlife 👻

---

## 📄 Current Prompts

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| `generate-commit-message` | [![Status: Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg)](#-generate-commit-message) | Directs Copilot to analyze a git diff, format a conventional commit, validate it, and save to `commit.tmp` | Use Agent Mode for best results. |

---

## 🪄 generate-commit-message

[![Status: Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg)](#-generate-commit-message)

This is the **Maestro** prompt — it doesn't write the commit message itself. Instead, it _conducts_:

- The **Diff Philosopher**, who decodes the `git diff`
- The **Commit Surgeon**, who formats the final message
- The validation toolchain (`commitlint`) to make sure everything’s perfect

It supplies the tools, too — editing the file via `#editFiles`, running validation via `#runInTerminal`, and managing inputs like `${input:diff}` or `#changes`. You don’t just get orchestration — you get the instruments, the baton, and a clipboard with the setlist.

### 👂 Responsibilities

- Delegates analysis to: `🎩 Diff Philosopher`
- Delegates formatting to: `🧠 Commit Surgeon`
- Runs validation via: `npm run commitlint -- commit.tmp`
- Provides the tools: `#changes`, `#editFiles`, `#runInTerminal`

### 💾 Output Behavior

- Writes final commit message to `commit.tmp`
- Returns output in markdown format for copy-paste ease
- Does _not_ execute a commit — generation only

---

## ✨ Timestamp Handling (Utility Mode)

[![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](#-timestamp-handling-utility-mode)

This is a helper instruction, not a standalone utility. It’s designed to be called by other prompts — especially when you ask Copilot to track its own work in a report or log. It generates a dual-format timestamp that’s both human-readable and machine-parseable, using your local timezone and Unix epoch.

> [!IMPORTANT]
>
> This instruction should be invoked with `#runTasks` (task: `current-timestamp`) to allow for reuse and maintainability. It’s not a standalone command but a utility to be used in conjunction with other prompts.

---

### 🛠️ Installation & Usage

1. Ensure the command is set up in `.vscode/tasks.json` - you have to escape the parentheses in the command to prevent the terminal from interpreting them. Here’s the task definition:

   ```json
   {
     "label": "current-timestamp",
     "type": "shell",
     "command": "echo $(date) \\($(date +%s)\\)"
   }
   ```

2. In any other prompt file, make sure the `runTasks` tool is available. Then, call the timestamp generation like this:

   ```markdown
   Log the current timestamp as ${beginTimestamp} for your report by following [get-current-timestamp](./get-current-timestamp.prompt.md)
   ```

3. Have Copilot record the timestamp by referencing the variable `${beginTimestamp}` in your report or log template.

### ✅ Why Use This Instruction?

- Copilot does not have context of itself, and thus is really _terrible_ at attempting to generate timestamps.
- This instruction ensures consistency across all prompts that need a timestamp.

### ⛔ Constraints

- You **MUST** use `#runTasks` to generate the value
- Manual creation or reformatting is disallowed

### 📟 Example Minimal Prompt

Really, this is not the recommended way to use this prompt, but if you want to see how it works in isolation, just invoke the prompt - no other instructions necessary:

```markdown copy
/get-current-timestamp
```

> [!NOTE]
> The `${variable:beginTimestamp}` syntax is unique to VS Code and is not a standard Copilot feature. It's just luck that allows Copilot to understand and utilize them in the same way, but it's not equivalent to `const beginTimestamp = now();` and should not be treated as such.
> It’s used here to demonstrate how you might capture the output of the timestamp command in a variable for later use. You can learn more about this in the [VS Code documentation](https://code.visualstudio.com/docs/editor/variables-reference).

---

---

> 👻 _Haunted by bad commits?_
>
> Let the Maestro raise the right specialists. This one’s got just enough _School Spirits_ to keep your commit history from turning into a poltergeist of regret.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress.</small>
