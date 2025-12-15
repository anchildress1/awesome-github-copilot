---
status: "ready"
description: "This instruction evaluates design decisions for clarity, stability, and future impact."
applyTo: "**"
---

# Design Principles 📝

## Core Patterns & Principles 🧭

- 🔄 **Modular/Hexagonal Architecture (Ports & Adapters):** Split core business logic from external systems via well-defined interfaces.
- 🎯 **Single Responsibility Principle (SRP):** Each module, function, or class should have one clear responsibility.
- 🔍 **Separation of Concerns:** Keep business logic, API integrations, and presentation in separate modules.
- 🚪 **Open/Closed Principle:** Design modules to be open for extension but closed for modification.
- 💉 **Dependency Injection:** Inject dependencies (loggers, clients, config) where possible to improve testability and flexibility.
- ❄️ **Immutability:** Prefer immutable data structures and avoid mutating shared state.
- ⚡ **Fail Fast & Defensive Programming:** Validate inputs and fail early with clear errors.
- 🛠️ **Configuration as Code:** Store all configuration in environment variables or config files, never in code.
- 🐣 **YAGNI (You Aren’t Gonna Need It):** Don’t add features or abstractions until they are needed.
- 🤓 **KISS (Keep It Simple, Stupid):** Prefer simple, straightforward solutions over complex ones.
- 📚 **Documentation-Driven Development:** Write or update documentation as you design new features or refactor code.
- 🛡️ **Centralized Error Handling & Logging:** Handle errors in a consistent way and use structured logging, avoiding sensitive data leaks.
- 🔄 **Consistent Error & Response Formats:** Ensure handlers and utilities return errors and responses uniformly.
- 🔺 **Test Pyramid:** Favor more unit tests than integration tests, and more integration tests than end-to-end tests. Keep tests fast and focused.
- **Pre-release App**: This application is currently in pre-release. It is not intended for production use and may contain bugs or incomplete features. **NEVER** account for backwards-compatibility in this codebase. If you need to make a change that breaks backwards compatibility, do so without hesitation, since this version WILL NOT be used in production.

## API Strategy 🛣️

- 📜 **Versioning & Deprecation:** Embed version (e.g., `v1`) in endpoint paths or headers, and mark deprecated fields in GraphQL schemas instead of removing them abruptly.
- 🤝 **Contract-First Testing & API Governance:** Use Pact/contract tests to keep client and server in sync; publish breaking-change calendars and require explicit opt-in flags for deprecated fields.

## Security 🔒

- ⚙️ **OAuth 2.0 & Least Privilege:** Request only the scopes needed; rotate tokens regularly; consider short-lived credentials with refresh workflows.
- 🔍 **Supply-Chain Security & Dependency Hygiene:** Maintain an up-to-date SBOM; automate dependency scans (Dependabot, Snyk) and block builds on critical CVEs.
- 🏷️ **Immutable Releases:** Build once, tag the exact artifact (container/zip), and deploy the same binary everywhere.
- 📝 **Verify & Throttle:** Always validate request signatures and implement rate limits and circuit breakers around third-party APIs.
- 🧰 **Defensive Coding & Audit:** Automate dependency scans and SAST in CI; log security-relevant events (failed auth, scope changes) to a SIEM.

## Resilience & Observability 🔭

- 🔁 **Retries & Backoff with Jitter:** Wrap external calls in retry logic to handle transient failures gracefully.
- 🔎 **Distributed Tracing & Metrics:** Instrument code with OpenTelemetry to trace full flows and surface key SLAs (e.g., api-to-response time).
- 💥 **Chaos Engineering & Resiliency Drills:** Inject faults (kill worker pods, simulate latency) regularly and run game days to validate failure scenarios and run-books.
- 🎯 **Service Level Objectives (SLOs):** Define and monitor metrics such as “95% of API calls reply in <300 ms” and “error rate <0.1%,” with alerts on SLO budgets.
- 🏷️ **Log Correlation & Context Propagation:** Attach unique request or trace IDs to all actions for end-to-end observability.

## DevOps & CI/CD ⚙️

- 🤖 **GitHub Actions for CI/CD:** Automate linting, unit tests, security scans, and staging deploys on every PR, requiring ≥2 approvals before production merges.
- 🌐 **Infrastructure as Code:** Define cloud services (AWS Lambda, Cloud Run) and IAM roles using Terraform or Pulumi, versioned alongside application code.

## Integration Patterns 🔗

- 🔔 **Webhook Subscriptions:** Subscribe only to necessary GitHub events (e.g., `pull_request`, `check_run`) to minimize processing overhead.
- 📦 **GraphQL Bulk Fetching:** Use the GitHub GraphQL API to batch data queries (e.g., fetching multiple PR details) and conserve rate limits.
- 🔄 **Event-Driven Architecture:** Publish webhooks to a message broker (Kafka, Pub/Sub) to decouple processing and enable event replay.
- 🪄 **Saga Patterns:** Orchestrate multi-step workflows (approve PR → deploy → notify → analytics) with compensating actions on failure.

## Virtual Collaboration & Workflow 🌐

- 🔔 **Asynchronous Design Reviews:** Automate context-rich reminders (e.g., “[**@alice**](https://github.com/alice), PR idle for 48 hrs”) via Slack threads to maintain transparency.
- 📖 **Living Documentation:** Store design docs and API contracts in your repo; surface them via `/help` commands or Home Tab panels.
- 🚩 **Feature Flags & Gradual Rollout:** Use feature flags (LaunchDarkly or simple toggles) to pilot features before full rollouts.

## Data Management & Compliance 📊

- 🗑️ **Data Retention Policies:** Automate purges of logs, messages, and audit events to comply with GDPR and manage storage costs.
- 🔐 **Encryption-in-Transit & At-Rest:** Ensure that all storage buckets, databases, and secret vaults use encryption with regular key rotation.

## Governance & Team Flow ⚖️

- 🌿 **Branching & Release Cadence:** Favor trunk-based development with short-lived feature flags; if using release branches, automate merges and cherry-picks.
- 🗂️ **Living Architecture Decision Records (ADRs):** Record major architectural choices (e.g., GraphQL over REST, API gateway selection) for future reference.
