# ✨ Timestamp Handling (Utility Mode)

[![Status: Ready (green badge)](https://img.shields.io/badge/status-ready-007F5F.svg)](#-timestamp-handling-utility-mode)

This is a helper instruction, not a standalone utility. It’s designed to be called by other prompts — especially when you ask Copilot to track its own work in a report or log. It generates a dual-format timestamp that’s both human-readable and machine-parseable, using your local timezone and Unix epoch.

> [!IMPORTANT]
>
> This instruction should be invoked with `#runTasks` (task: `current-timestamp`) to allow for reuse and maintainability. It’s not a standalone command but a utility to be used in conjunction with other prompts.

---

## 🛠️ Installation & Usage

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

## ✅ Why Use This Instruction?

- Copilot does not have context of itself, and thus is really _terrible_ at attempting to generate timestamps.
- This instruction ensures consistency across all prompts that need a timestamp.

## ⛔ Constraints

- You **MUST** use `#runTasks` to generate the value
- Manual creation or reformatting is disallowed

## 📟 Example Minimal Prompt

Really, this is not the recommended way to use this prompt, but if you want to see how it works in isolation, just invoke the prompt - no other instructions necessary:

```markdown copy
/get-current-timestamp
```

> [!NOTE]
> The `${variable:beginTimestamp}` syntax is unique to VS Code and is not a standard Copilot feature. It's just luck that allows Copilot to understand and utilize them in the same way, but it's not equivalent to `const beginTimestamp = now();` and should not be treated as such.
> It’s used here to demonstrate how you might capture the output of the timestamp command in a variable for later use. You can learn more about this in the [VS Code documentation](https://code.visualstudio.com/docs/editor/variables-reference).
