# HLBPA Chat Mode (High-Level Big-Picture Architect) ✨

View this chat mode and more in the [awesome-copilot repository on GitHub.](https://github.com/github/awesome-copilot)

[![Status: HLBPA Chat Mode — Polish (purple badge)](https://img.shields.io/badge/status-polish-9B59B6.svg)](#hlbpa-chat-mode-high-level-big-picture-architect-)

### Why Use HLBPA? ❓

1. Rapidly understand complex repos.
2. Auto‑generate API & data flow diagrams.
3. Highlight missing tests or docs.
4. Identify architectural gaps and risks.
5. Get a visual overview of recent changes.

### What HLBPA Does (And Doesn't) 🤔

- **Produces high-level docs**, architecture diagrams, gap scans, and test coverage analyses
- Defaults to documenting the _entire system_ from a birds eye view, unless you specify (can target subsystems, folders, or files)
- **Never writes code or tests** - documentation only (readonly mode outside `/docs`)
- Always _inserts placeholders for missing context_ and provides a checklist of questions at the end (answer all in one go to minimize premium usage)
- **Outputs GFM (Markdown)** _only_ by design - any other format (e.g. Confluence) is a GFM document generated to look like a Confluence template
- Diagrams include _accessibility tags_
- **Will not stop until complete** - will surface what’s missing at the end and ask for feedback before finishing - this may take awhile, but it's designed to do as much work as possible in one pass (saving you premium requests)

## How to Use HLBPA 🚀

### How to Use 🪄

**Example Prompt:**

```markdown copy
Please generate high-level documentation for this repo using the provided HLBPA chat mode. My name is Jane Doe. Artifact: architecture diagram and the test coverage gap report.
```

### Artifact Types 🧩

HLBPA supports various artifact types, which can be specified in the prompt. Here are some common ones:

| Artifact Type | Description | Default Diagram |
| - | - | - |
| `doc` | Overview documentation | flowchart |
| `entity` | Entity relationship diagrams | erDiagram |
| `gapscan` | List of gaps in logic or documentation | block |
| `usecases` | User journey bullet points | sequence |
| `systems` | System architecture diagrams | architecture |
| `history` | Git commit history overview | gitGraph |

> [!TIP]
> Copilot will select an appropriate diagram type based on content and context for each artifact and section. Users can specify diagram types explicitly to override that selection.

**Diagram Placement**:

- **Inline preferred**: When large complex diagrams can be broken into smaller, digestible chunks
- **External files**: When a large diagram cannot be reasonably broken down, making it easier to view when loading the page instead of trying to decipher text the size of an ant

**Accessibility**: Every Mermaid diagram provides alt text either via YAML front-matter (file mode) or accTitle: / accDescr: lines (inline).

### XML Coding Agent 🏷️

HLBPA also has an XML version for Copilot Coding Agent. See the `.xml` file in this repo for details.

### Output 📈

At least one document and corresponding Mermaid diagrams will be generated, based on the prompt. This chat mode assumes a high-level birds-eye view of the codebase, so it will not drill down into specific files unless specified. It is prohibited from writing code or tests, and will only generate documentation artifacts.

---

<small>ChatGPT helped me with clear ideas and straightforward solutions.</small>
