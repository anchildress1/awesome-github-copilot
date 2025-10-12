# New Developer Checklist ✅

Use this checklist to ensure you're ready to contribute to awesome-github-copilot.

## Environment Setup 🛠️

- [ ] **Node.js v18+** installed (`node --version`)
- [ ] **npm v9+** installed (`npm --version`)
- [ ] **Git v2.30+** installed (`git --version`)
- [ ] **Repository cloned** locally
- [ ] **Dependencies installed** (`npm install` or `npm ci`)
- [ ] **Git hooks configured** (`npx lefthook install`)

## Git Configuration 🔧

- [ ] **Username set** (`git config user.name "Your Name"`)
- [ ] **Email set** (`git config user.email "your.email@example.com"`)
- [ ] **Commit signing enabled** (optional but recommended)
- [ ] **Test commit successful** (create test branch, commit, delete)

## Documentation Review 📚

- [ ] **Read [REPO-SETUP.md](./REPO-SETUP.md)** - Quick start guide
- [ ] **Read [CONTRIBUTING.md](./CONTRIBUTING.md)** - Full contribution guidelines
- [ ] **Understand conventional commits** format and requirements
- [ ] **Know status badge system** from [status-badge-lifecycle.md](./docs/status-badge-lifecycle.md)
- [ ] **Familiar with file structure** and naming conventions

## Testing Setup 🧪

- [ ] **VS Code installed** (for GitHub Copilot testing)
- [ ] **GitHub Copilot enabled** in VS Code
- [ ] **Know how to test instructions** (custom instructions in settings)
- [ ] **Know how to test prompts** (Agent Mode)
- [ ] **Know how to test chat modes** (compatible AI tools)

## First Contribution Ready 🎯

- [ ] **Understand repository purpose** (AI content for GitHub Copilot)
- [ ] **Know the three content types** (Instructions, Prompts, Chat Modes)
- [ ] **Can create proper commit messages** (with scope, body, signed-off-by)
- [ ] **Know how to run quality checks** (`npm run check`, `npm run format`)
- [ ] **Ready to create test branch** and make first contribution

## Quick Test 💡

Create a test branch and commit to verify everything works:

```bash
git checkout -b test-setup
echo "# Test Setup" > test-setup.md
git add test-setup.md
git commit -m "test(setup): Verify development environment setup

- add test file to validate commit process
- confirm all quality gates are working
- ensure git hooks are properly configured

Signed-off-by: Your Name <your.email@example.com>"
git checkout main
git branch -D test-setup
rm test-setup.md
```

If this completes without errors, you're ready to contribute! 🎉

---

## Common Issues 🆘

### Dependencies won't install ⛓️

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Git hooks not working 🔗

```bash
npx lefthook uninstall
npx lefthook install
npx lefthook list  # verify installation
```

### Commit message rejected 🚫

- Check you included scope: `feat(docs): message`
- Check you included body after blank line
- Check you included `Signed-off-by:` footer
- Keep subject under 72 characters

### VS Code Copilot not working 🤖

- Ensure GitHub Copilot extension is installed and enabled
- Check your GitHub Copilot subscription status

---

> ✅ **All checked?** You're ready to make awesome contributions to awesome-github-copilot!
