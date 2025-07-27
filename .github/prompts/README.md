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
| `generate-commit-message` | [![Status: Iterating](https://img.shields.io/badge/status-iterating-FF6600.svg)](#-generate-commit-message) | Directs Copilot to analyze a git diff, format a conventional commit, validate it, and save to `commit.tmp` | Use Agent Mode for best results. |

---

## 🪄 generate-commit-message

[![Status: Iterating](https://img.shields.io/badge/status-iterating-FF6600.svg)](#-generate-commit-message)

This is the **Maestro** prompt — it doesn't write the commit message itself. Instead, it _conducts_:

- The 🎩 **Diff Philosopher**, who decodes the `git diff`
- The 🧠 **Commit Surgeon**, who formats the final message
- The validation toolchain (`commitlint`) to make sure everything’s perfect

It supplies the tools, too — editing the file via `#editFiles`, running validation via `#runInTerminal`, and managing inputs like `${input:diff}` or `#changes`. You don’t just get orchestration — you get the instruments, the baton, and a clipboard with the setlist.

### 👂 Responsibilities

- 🤝 Delegates analysis to: `🎩 Diff Philosopher`
- ✍️ Delegates formatting to: `🧠 Commit Surgeon`
- 🧪 Runs validation via: `npm run commitlint -- commit.tmp`
- 🛠️ Provides the tools: `#changes`, `#editFiles`, `#runInTerminal`

### 💾 Output Behavior

- ✅ Writes final commit message to `commit.tmp`
- ✅ Returns output in markdown format for copy-paste ease
- ❌ Does _not_ execute a commit — generation only

---

> 👻 _Haunted by bad commits?_
>
> Let the Maestro raise the right specialists. This one’s got just enough _School Spirits_ to keep your commit history from turning into a poltergeist of regret.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress.</small>
