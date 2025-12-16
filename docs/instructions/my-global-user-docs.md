# My Copilot Behavior Modification System 🤖

![Check - Blue](https://img.shields.io/badge/status-check-3A86FF.svg)

> [!IMPORTANT]
> Grab the instructions file from [.github/instructions/my-global-user.instructions.md](../../.github/instructions/my-global-user.instructions.md)

## Quick FYI 📌

This file is **personal-level Copilot behavior** configured as a global user instructions file in VS Code.

Translation: it teaches AI how to behave around *me* and my repos and is not designed as a starter pack for your new religion.

## What this instructions file *is* ✅

- A consistent baseline for **tone**, **assumptions**, and **boundaries**
- A way to stop repeating the same “no, don’t do that” rules in every chat
- A set of defaults for **isolated environments**, **validation**, and **minimal diffs**

## What this instructions file *isn’t* 🚫

- A repo-friendly Copilot guide
- A replacement for linters, tests, or personal brain function
- A promise the AI will always be right (it won’t be) or polite (also no)

## Defaults you’re opting into 🧭

### Isolation first 🧪

AI should assume:

- there are **no  global dependencies**
- `uv` handles Python, `volta` has Node, `sdkman` for Java-y things
- repeatability beats vibes

### Git boundaries 🔒

- AI does **not** stage, commit, or push
- all git commands must use `--no-pager` (so the diff stops sticking)

### Validation expectations 🧪

Before calling something “done,” the AI should validate what it changed (format, lint, tests, docs/security when relevant).

If the repo has `make ai-checks`, that’s the preferred path.

### Diff and design rules ✂️

- **KISS** and **YAGNI** win above all others
- diffs should be minimal and intentional
- no stealth edits to repo config (dotfiles, package metadata, lint configs, etc.) unless explicitly told

## Why it’s in this repo at all 🧠

Because I use these defaults everywhere, and I’d rather ship one file than re-litigate the same expectations forever.

> 🦄 If you don’t like it, remove it. If you do like it, steal it. Either way, everyone survives.
