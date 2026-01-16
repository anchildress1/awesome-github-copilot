## Plugin Skeleton (ESM)

```js
const plugin = {
  meta: {
    name: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    namespace: NAMESPACE,
  },
  rules: RULES,
  configs: {},
  // processors: {}
};

export default plugin;
```

---

## Config Assignment Pattern

Use this pattern when configs need access to the plugin object:

```js
Object.assign(plugin.configs, {
  "flat/recommended": [
    {
      plugins: {
        [plugin.meta.namespace]: plugin,
      },
      rules: {
        // "<namespace>/<ruleId>": "error"
      },
    },
  ],

  "legacy-recommended": {
    plugins: [plugin.meta.namespace],
    rules: {
      // "<namespace>/<ruleId>": "error"
    },
  },
});
```

---

## Strategy Selection

### Use Strategy A when

- Creating a new plugin.
- You control the public API.
- You want zero ambiguity.

### Use Strategy B when

- Legacy config names already exist.
- Breaking changes are not acceptable.

---

## Rule Keying

- Rule IDs inside the plugin must not contain `/`.
- Rule references in configs must always be `<namespace>/<ruleId>`.

---

## Prohibited Patterns

- Flat config objects exported as legacy configs.
- Legacy configs exported as arrays.
- Plugin rules referenced without namespace.
