## HLBPA Chat Mode (High-Level Big-Picture Architect) ✨

[![Status: HLBPA Chat Mode — Polish (purple badge)](https://img.shields.io/badge/status-polish-9B59B6.svg)](#hlbpa-chat-mode-high-level-big-picture-architect-) [![Install in Visual Studio Code](https://img.shields.io/badge/Install-Visual%20Studio%20Code-0078d4?)](vscode:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/hlbpa.chatmode.md) [![Install in Visual Studio Code Insiders](https://img.shields.io/badge/Install-Visual%20Studio%20Code%20Insiders-00b294?)](vscode-insiders:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/hlbpa.chatmode.md)

### Why Use HLBPA?

1. Rapidly understand complex repos.
2. Auto‑generate API & data flow diagrams.
3. Highlight missing tests or docs.
4. Identify architectural gaps and risks.
5. Get a visual overview of recent changes.

### What HLBPA Does (And Doesn’t)

- **Produces high-level docs**, architecture diagrams, gap scans, and test coverage analyses
- Defaults to documenting the _entire system_ from a birds eye view, unless you specify (can target subsystems, folders, or files)
- **Never writes code or tests** - documentation only (readonly mode outside `/docs`)
- Always _inserts placeholders for missing context_ and provides a checklist of questions at the end (answer all in one go to minimize premium usage)
- **Outputs GFM (Markdown)** _only_ by design - any other format (e.g. Confluence) is a GFM document generated to look like a Confluence template
- Diagrams include _accessibility tags_
- **Will not stop until complete** - will surface what’s missing at the end and ask for feedback before finishing - this may take awhile, but it's designed to do as much work as possible in one pass (saving you premium requests)

## How to Use HLBPA

### 🪄 Minimum Input Required

| Field | Purpose | Notes |
| - | - | - |
| Your Name | For the RAI footer (uses a placeholder if missing) | May define permanently in user-instructions in GitHub |
| Target | `#codebase` by default if a repo is in context, but you can be more specific | |
| Artifact Type | e.g. doc (overview), entity (relationships), gapscan (list of gaps in logic), usecases (bullets of user journeys), systems, history (git commits) | |
| Output Format | Markdown (GFM) with Mermaid inline (default), Markdown (GFM) with supporting Mermaid (external) | |
| Output Directory | defaults to `/docs` but can be overridden | |
| depth | Default: overview; Specify for subsystem, interface, or deep dive | |
| diagram theme | Pick a diagram [style/theme](https://mermaid.js.org/config/theming.html#available-themes) | `forest` |

#### Example Minimal Prompt

```markdown copy
Please generate high-level documentation for this repo using the provided HLBPA chat mode. My name is Jane Doe. Artifact: architecture diagram and the test coverage gap report.
```

### Artifact Types

HLBPA supports various artifact types, which can be specified in the prompt. Here are some common ones:

| Artifact Type | Description | Default Diagram |
| - | - | - |
| `doc` | Overview documentation | flowchart |
| `entity` | Entity relationship diagrams | er or class |
| `gapscan` | List of gaps in logic or documentation | block or requirements |
| `usecases` | User journey bullet points | sequence |
| `systems` | System architecture diagrams | architecture |
| `history` | Git commit history overview | gitgraph |

### Coding Agent

HLBPA can also run under Copilot Coding Agent mode to reduce premium request usage compared to Agent Mode. To set this up:

1. Upload the `hlbpa.xml` spec to <https://github.com/copilot/agents>
2. Select your repository in the Agents dashboard
3. Invoke Copilot with the same prompt syntax

```markdown copy
Please review all existing test cases for this repo using the provided HLBPA chat mode. My name is John Doe. Artifact: SWOT-style block diagram and a test coverage gap report.
```

> 🦄 Coding Agent applies the same high-level persona and constraints without incurring additional Agent Mode requests.

### 📈 Output

At least one document and corresponding Mermaid diagrams will be generated, based on the prompt. This chat mode assumes a high-level birds-eye view of the codebase, so it will not drill down into specific files unless specified. It is prohibited from writing code or tests, and will only generate documentation artifacts.

> 🦄 I coded in a preview of external `.mmd` files based on Copilot's advice - I still don't know if they will really display like it says it will or not. Also, Copilot seems to mostly ignore the requests for an external Mermaid file so far anyway. 🤷‍♀️

#### Overriding Defaults

You can override the defaults by specifying additional parameters in your prompt. For example, to generate a subsystem diagram with a specific theme:

```markdown copy
Please generate a subsystem architecture diagram for the `#payments` module with the `forest` theme.
```

---

<small>ChatGPT helped me with clear ideas and straightforward solutions.</small>
