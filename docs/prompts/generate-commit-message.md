# 🪄 generate-commit-message

[![Status: Tweak](https://img.shields.io/badge/status-tweak-FB5607.svg)](#-generate-commit-message)

This is the **Maestro** prompt — it doesn't write the commit message itself. Instead, it _conducts_:

- The **Diff Philosopher**, who decodes the `git diff`
- The **Commit Surgeon**, who formats the final message
- The validation toolchain (`commitlint`) to make sure everything’s perfect

It supplies the tools, too — editing the file via `#editFiles`, running validation via `#runInTerminal`, and managing inputs like `${input:diff}` or `#changes`. You don’t just get orchestration — you get the instruments, the baton, and a clipboard with the setlist.

## 👂 Responsibilities

- Delegates analysis to: `🎩 Diff Philosopher`
- Delegates formatting to: `🧠 Commit Surgeon`
- Runs validation via: `npm run commitlint -- commit.tmp`
- Provides the tools: `#changes`, `#editFiles`, `#runInTerminal`

## 💾 Output Behavior

- Writes final commit message to `commit.tmp`
- Returns output in markdown format for copy-paste ease
- Does _not_ execute a commit — generation only

> 👻 _Haunted by bad commits?_
>
> Let the Maestro raise the right specialists. This one’s got just enough _School Spirits_ to keep your commit history from turning into a poltergeist of regret.
