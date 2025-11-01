# GitHub Alerts Fix for Remark

This directory contains a solution for preserving GitHub's special alert syntax when using remark for markdown formatting.

## Problem

Remark was escaping GitHub alert syntax like:

- `[!IMPORTANT]` → `//[!IMPORTANT]`
- `[!NOTE]` → `//[!NOTE]`
- `[!TIP]` → `//[!TIP]`
- `[!WARNING]` → `//[!WARNING]`
- `[!CAUTION]` → `//[!CAUTION]`

This broke the colored banner functionality in GitHub.

## Solution

We (Copilot and I) created a post-processing script that runs after remark to fix escaped GitHub alerts:

1. **`fix-github-alerts.js`** - Scans all markdown files and unescapes GitHub alert syntax
2. **Updated npm scripts** - The `format` command now runs remark followed by the fix script
3. **Updated lefthook** - Pre-commit hooks now work correctly with GitHub alerts preserved

## Usage

```bash
# Format and fix GitHub alerts
npm run format
```

## Supported Alert Types

The script preserves these GitHub alert types:

- `[!IMPORTANT]`
- `[!NOTE]`
- `[!TIP]`
- `[!WARNING]`
- `[!CAUTION]`

These will render as colored banners in GitHub's markdown display.

---

<small>Generated with GitHub Copilot as directed by Ashley Childress</small>
