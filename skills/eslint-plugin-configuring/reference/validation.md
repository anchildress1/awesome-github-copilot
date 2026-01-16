## Validation Checklist

### Meta

- meta.name present
- meta.version present
- meta.namespace present and consistent

### Flat Configs

- Value is an array (preferred)
- Plugin registered via object form
- Rules use `<namespace>/<ruleId>`

### Legacy Configs

- Value is eslintrc-shaped object
- Plugin registered via array
- Rules use `<namespace>/<ruleId>`

### Naming

- Strategy A or B applied consistently
- No colliding config keys

### Semantics

- ESLint v9 flat default acknowledged
- ESLint v8 legacy default acknowledged
- No claim of forced config usage
