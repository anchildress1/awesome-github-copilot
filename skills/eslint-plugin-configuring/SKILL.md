---
status: draft
name: eslint-plugin-configs
description: Generate or update an ESLint plugin that exports rule configs compatible with ESLint v8 (eslintrc) and ESLint v9 (flat config).
---

## Role

You are the agent responsible for creating or modifying an **ESLint plugin package** that exports:

- `rules`
- `configs` (flat and/or legacy)
- optional `processors`
- recommended `meta` (`name`, `version`, `namespace`)

Your output is plugin source code plus correct consumer usage examples.

This Skill targets **ESLint v8.x and v9.x** behavior explicitly.

---

## Operating Assumptions

### ESLint Version Semantics

- **ESLint v9**
  - Flat config is the default.
  - `.eslintrc*` is deprecated.
  - Legacy configs only apply if `ESLINT_USE_FLAT_CONFIG=false`.

- **ESLint v8**
  - `.eslintrc*` is the common default.
  - Flat config is opt-in via `eslint.config.js` or `ESLINT_USE_FLAT_CONFIG=true`.

You must not misstate these behaviors.

---

## Non-Goals (Hard Constraints)

- Do not claim the plugin can force configuration usage.
- Do not invent undocumented config resolution logic.
- Do not mix flat and legacy config shapes.
- Do not introduce ambiguous or colliding config names.

---

## Required Inputs (Implicit)

Assume the following exist or are derivable:

- `PACKAGE_NAME` (npm package name)
- `NAMESPACE` (rule/config prefix)
- `RULES` (map of `ruleId -> rule implementation`)
- Optional desired config set (e.g. `recommended`, `strict`)

---

## Mandatory Plugin Shape

The plugin **must** export a single object with:

- `meta`
  - `name`
  - `version`
  - `namespace`
- `rules`
- `configs`
- optional `processors`

Preferred export is **ESM default export**.

---

## Meta Rules

- `meta.namespace` is the canonical prefix for:
  - rules
  - configs
  - plugin registration
- All rule references must use `"<namespace>/<ruleId>"`.
- Namespace consistency is mandatory across all outputs.

---

## Config Export Strategies

Choose **exactly one** strategy and apply it consistently.

### Strategy A — New Plugin (Recommended)

Use explicit separation:

- Flat configs: `flat/<configName>`
- Legacy configs: `legacy-<configName>`

This avoids collisions and makes intent unambiguous.

### Strategy B — Existing Plugin Compatibility

If a legacy config already exists as `<configName>` and cannot be renamed:

- Preserve legacy key: `<configName>`
- Add flat variant: `flat/<configName>`

Never remove or silently rename an existing legacy config.

---

## Flat Config Requirements (ESLint v9 Primary)

Flat configs must:

- Be arrays of config objects (preferred).
- Register the plugin using object form:
  - `plugins: { [namespace]: plugin }`
- Enable rules using namespaced keys.
- Optionally define `languageOptions`.

Example shape (conceptual):

- `configs["flat/recommended"] -> Array<FlatConfigObject>`

---

## Legacy Config Requirements (ESLint v8 Compatibility)

Legacy configs must:

- Be plain eslintrc-shaped objects.
- Register plugin using:
  - `plugins: ["<namespace>"]`
- Enable rules using namespaced keys.
- Optionally include `globals`, `parserOptions`, etc.

Example shape (conceptual):

- `configs["legacy-recommended"] -> EslintrcObject`

---

## Self-Reference Rule (Critical)

If configs need to reference the plugin object itself:

1. Instantiate `plugin` with empty `configs`.
2. Assign configs **after** plugin creation (e.g. via `Object.assign`).

Never reference `plugin` before it exists.

---

## Consumer Mapping Rules

### Flat Config Consumers

If the plugin exports:

- `configs["flat/recommended"]`

Then consumers extend:

- `"namespace/recommended"`

The `flat/` prefix is **not** used by consumers.

### Legacy Consumers

If the plugin exports:

- `configs["legacy-recommended"]`

Then consumers extend:

- `"namespace/legacy-recommended"`

If preserving an existing legacy name:

- `configs["recommended"]` → `"namespace/recommended"`

---

## Required Consumer Examples

Unless explicitly excluded, you must output:

1. **Flat config example**
   - `eslint.config.js`
   - Uses `defineConfig`
   - Registers plugin
   - Uses `extends`

2. **Legacy config example**
   - `.eslintrc` (JSON/YAML/JS)
   - Uses `plugins` + `extends`

Examples must match the chosen naming strategy exactly.

---

## Repair / Migration Rules

When updating existing plugins:

- Legacy only → add `flat/<name>` if dual support is required.
- Flat only → add `legacy-<name>` if v8 support is required.
- Missing `meta.namespace` → add it and realign all rule prefixes.
- Incorrect consumer examples → regenerate to match config keys.

Never silently change public config names.

---

## Validation Checklist (Fail Fast)

Confirm all of the following:

- `plugin.meta.namespace` exists and matches all rule prefixes.
- Flat configs:
  - arrays (preferred)
  - register plugin via object form
- Legacy configs:
  - eslintrc object shape
  - plugin registered via array
- No config key collisions.
- ESLint v8 vs v9 behavior is stated correctly.
- No claim that the plugin forces config usage.

---

## Output Expectations

When executing this Skill, output:

- Plugin source code (or diffs).
- Flat consumer example.
- Legacy consumer example.
- Brief validation confirmation.
