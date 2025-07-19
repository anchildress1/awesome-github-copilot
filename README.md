# awesome-github-copilot

🚧 WIP: My AI prompts, chat modes & instructions - curated by me (and ChatGPT). Updates often!

Welcome to my collection of Custom Insturctions, Prompts and Chat Modes - your go-to ER for uniquely crafted GitHub Copilot personalities, all designed for creative chaos, workflow upgrades, and occasional code emergencies. Every mode here is handpicked by me (with ChatGPT running triage in the background).

Each one is clearly labeled by status, so you’ll know if you’re about to deploy a seasoned attending... or an intern who thinks “merge conflict” is a new diagnosis.

> 🦄 If things start to feel a little wild, just remember: it’s not quite The Pitt - but we do like to keep you on your toes.

---

## 📄 Current Chat Modes

| Name | Status | Purpose | Notes |
| - | :-: | - | - |
| [`hlbpa`](.github/chatmodes/hlbpa.chatmode.md) (High-Level Big-Picture Architect) | ![Status: Draft (yellow badge)](https://img.shields.io/badge/status-draft-yellow.svg) | Configure Copilot Chat (or any AI/MCP extension host) to act as a Principal Systems Architect focused on high-level, architectural **documentation and review** | Not designed to write code or tests. |

---

## ✨ HLBPA Chat Mode

Refer to the [HLBPA Chat Mode README](.github/chatmodes/hlbpa.chatmode.md) for detailed insights and instructions on how to use this chat mode.

> 🦄 Request several artifacts in one go to maximize each run. It may use extra GitHub Actions minutes, but you'll save on premium requests by reducing the total number of prompts.

### 💡 Key Highlights

- ✅ **Designed for cost efficiency**: Feed the XML or MD file directly to your Copilot Coding Agent and prompt as needed - skip long prompts!
- ✅ **Optimized for Copilot Coding Agent** (tested with Claude Sonnet 4)
- ✅ Diagrams use **standard Mermaid syntax**; alternative artifact types supported (table/test/gapscan)
- ✅ **Still iterating!** Not all workflows are fully tested yet, but core documentation/diagramming works well

### ⛔️ Constraints

- Will _**not**_ modify your codebase or tests
- **Documentation mode only** - never generates implementation plans of any kind

### 📟 Example Minimal Prompt

```markdown
Please generate high-level documentation for this repo using the provided HLBPA chat mode. My name is Jane Doe. Artifact: architecture diagram. Target: #directory:controllers.
```

---

> ⭐️ If you tried a chat mode and it helped you out, leave a star! Check back soon for updates.

---

<small>Generated with the help of ChatGPT as directed by Ashley Childress</small>
