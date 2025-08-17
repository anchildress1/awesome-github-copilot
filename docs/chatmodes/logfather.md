# The Logfather: Logging Review Chat Mode

[![Status: Draft (pink badge)](https://img.shields.io/badge/status-draft-F72585.svg)](#the-logfather-logging-review-chat-mode) [![Install in Visual Studio Code](https://img.shields.io/badge/Install-Visual%20Studio%20Code-0078d4?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHRpdGxlPmZpbGVfdHlwZV92c2NvZGU8L3RpdGxlPjxwYXRoIGQ9Ik0yOS4wMSw1LjAzLDIzLjI0NCwyLjI1NGExLjc0MiwxLjc0MiwwLDAsMC0xLjk4OS4zMzhMMi4zOCwxOS44QTEuMTY2LDEuMTY2LDAsMCwwLDIuMywyMS40NDdjLjAyNS4wMjcuMDUuMDUzLjA3Ny4wNzdsMS41NDEsMS40YTEuMTY1LDEuMTY1LDAsMCwwLDEuNDg5LjA2NkwyOC4xNDIsNS43NUExLjE1OCwxLjE1OCwwLDAsMSwzMCw2LjY3MlY2LjYwNUExLjc0OCwxLjc0OCwwLDAsMCwyOS4wMSw1LjAzWiIgc3R5bGU9ImZpbGw6IzAwNjVhOSIvPjxwYXRoIGQ9Ik0yOS4wMSwyNi45N2wtNS43NjYsMi43NzdhMS43NDUsMS43NDUsMCwwLDEtMS45ODktLjMzOEwyLjM4LDEyLjJBMS4xNjYsMS4xNjYsMCwwLDEsMi4zLDEwLjU1M2MuMDI1LS4wMjcuMDUtLjA1My4wNzctLjA3N2wxLjU0MS0xLjRBMS4xNjUsMS4xNjUsMCwwLDEsNS40MSw5LjAxTDI4LjE0MiwyNi4yNUExLjE1OCwxLjE1OCwwLDAsMCwzMCwyNS4zMjhWMjUuNEExLjc0OSwxLjc0OSwwLDAsMSwyOS4wMSwyNi45N1oiIHN0eWxlPSJmaWxsOiMwMDdhY2MiLz48cGF0aCBkPSJNMjMuMjQ0LDI5Ljc0N2ExLjc0NSwxLjc0NSwwLDAsMS0xLjk4OS0uMzM4QTEuMDI1LDEuMDI1LDAsMCwwLDIzLDI4LjY4NFYzLjMxNmExLjAyNCwxLjAyNCwwLDAsMC0xLjc0OS0uNzI0LDEuNzQ0LDEuNzQ0LDAsMCwxLDEuOTg5LS4zMzlsNS43NjUsMi43NzJBMS43NDgsMS43NDgsMCwwLDEsMzAsNi42VjI1LjRhMS43NDgsMS43NDgsMCwwLDEtLjk5MSwxLjU3NloiIHN0eWxlPSJmaWxsOiMxZjljZjAiLz48L3N2Zz4=)](vscode:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/logfather.chatmode.md) [![Install in Visual Studio Code Insiders](https://img.shields.io/badge/Install-Visual%20Studio%20Code%20Insiders-00b294?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHRpdGxlPmZpbGVfdHlwZV92c2NvZGUtaW5zaWRlcnM8L3RpdGxlPjxwYXRoIGQ9Ik0yMC4zNzUsMy4yOTFhLjg3NC44NzQsMCwwLDEsMS40NjMuNjQ3VjEwLjI1bC04LjM2LDYuNjI0TDkuMTcyLDEzLjYwOFoiIHN0eWxlPSJmaWxsOiMwMDlhN2MiLz48cGF0aCBkPSJNNi4wMTMsMTYuNjY5LDIuMzgsMTkuOEExLjE2NiwxLjE2NiwwLDAsMCwyLjMsMjEuNDQ3Yy4wMjUuMDI3LjA1LjA1My4wNzcuMDc3bDEuNTQxLDEuNGExLjE2NiwxLjE2NiwwLDAsMCwxLjQ4OS4wNjZMOS42LDE5LjkzNVoiIHN0eWxlPSJmaWxsOiMwMDlhN2MiLz48cGF0aCBkPSJNMjEuODM4LDIxLjc0OSw1LjQxMiw5LjAwN2ExLjE2NSwxLjE2NSwwLDAsMC0xLjQ4OS4wNjZsLTEuNTQxLDEuNGExLjE2NiwxLjE2NiwwLDAsMC0uMDc3LDEuNjQ3Yy4wMjUuMDI3LjA1LjA1My4wNzcuMDc3bDE3Ljk5LDE2LjVhLjg3NS44NzUsMCwwLDAsMS40NjYtLjY0NVoiIHN0eWxlPSJmaWxsOiMwMGIyOTQiLz48cGF0aCBkPSJNMjMuMjQ0LDI5Ljc0N2ExLjc0NSwxLjc0NSwwLDAsMS0xLjk4OS0uMzM4QTEuMDI1LDEuMDI1LDAsMCwwLDIzLDI4LjY4NFYzLjMxNmExLjAyNSwxLjAyNSwwLDAsMC0xLjc0OS0uNzI1LDEuNzQ1LDEuNzQ1LDAsMCwxLDEuOTg5LS4zMzhsNS43NjUsMi43NzJBMS43NDgsMS43NDgsMCwwLDEsMzAsNi42VjI1LjRhMS43NDgsMS43NDgsMCwwLDEtLjk5MSwxLjU3NloiIHN0eWxlPSJmaWxsOiMyNGJmYTUiLz48L3N2Zz4=)](vscode-insiders:chat-mode/install?url=https://raw.githubusercontent.com/anchildress1/awesome-github-copilot/refs/heads/main/.github/chatmodes/logfather.chatmode.md)

> In this family, we don’t print to console. We speak in structured truths.

The Logfather doesn’t just scan your logs — he runs the neighborhood. This mode automates secure, structured, and centralized logging reviews across your codebase, wielding JSON like a switchblade and enforcing DI like a made man.

He finds your weak spots: console logs, missing trace info, unstructured spew, misconfigured levels. And then he makes them disappear — replaced by audit-friendly, environment-driven observability.

## 🪪 Who’s This For?

- Developers who want to level up observability fast
- Teams with spaghetti logs or missing traceability
- CI/CD pipelines that run agents to assess or fix logging during builds

## 🧪 What It Does

- Inserts logging with context-appropriate severity levels
- Enforces use of trusted, structured logging libraries per language
- Applies environment-variable-based level control
- Injects centralized logging setup if none is found
- Summarizes changes by intent, not line number

## ⚠️ Rules of Engagement

- ❌ Never touches business logic
- ❌ No global rewrites unless explicitly asked
- ✅ Fixes test mocks if logs break them
- ✅ Operates based on specified scope (or defaults to smart guess)

## 📜 Sample Prompts

```markdown
/logfather Audit logging for checkout flow
/logfather Fix all logger setups in backend/worker
/logfather Make my logs traceable and JSON-only
/logfather Review my service for log injection risks
```

## 📦 Supported Languages & Libraries

> Keep your logs clean and your config cleaner.

| 💻 Language | 🧰 Preferred Logging Libraries |
| - | - |
| Node.js | `winston`, `pino` |
| Java | `log4j2`, `slf4j + logback` |
| Python | `structlog`, `loguru`, `standard logging` |
| Rust | `tracing`, `log`, `env_logger` |
| TypeScript | `winston`, `pino` |
| Go | `log`, `zap`, `logrus` |
| C# / .NET | `Microsoft.Extensions.Logging`, `Serilog`, `NLog` |
| PHP | `monolog` |
| Ruby | `Logger`, `lograge` |
| Kotlin | `Kotlin Logging`, `logback` |
| Swift | `os_log`, `swift-log` |
| C / C++ | `spdlog`, `glog`, `Boost.Log` |
| Scala | `slf4j`, `logback`, `scala-logging` |
| Elixir | `Logger`, `lager` |
| Dart / Flutter | `logger`, `logging` |
| Bash / Shell | `logger`, `echo`, `syslog` |
| Haskell | `fast-logger`, `katip` |
| R | `futile.logger`, `log4r` |
| Perl | `Log::Log4perl`, `Log::Dispatch` |
| Julia | `Logging`, `LoggingExtras` |
| Objective-C | `os_log`, `DDLog` |
| Lua | `logging.lua`, `log.lua` |

> 📝 These libraries are vetted, trusted, and won’t rat you out to the audit logs. The Logfather’s word is law.

---

<small>This file was generated with ChatGPT as directed by Ashley Childress</small>

```
```
