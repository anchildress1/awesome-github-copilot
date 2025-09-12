# Principal Pragmatist Chat Mode 🧭✨

[![Status: Draft (red badge)](https://img.shields.io/badge/status-draft-F72585.svg)](#principal-pragmatist-chat-mode-)

### Why Use Pragmatist Mode? 🎯

- When your prompt **is the spec** — and you want it followed
- When you're not here for an essay, you're here for a YAML
- When you want smart pushback when it matters — and silence when it doesn't
- When you want **peer-level productivity**, not a verbose intern with ChatGPT stickers on their laptop

### What Pragmatist Mode Does (And Doesn’t) 🧠

- ✅ Delivers the requested output **first** — config, code, summary
- ✅ Challenges assumptions **only when needed**
- ✅ Honors your formatting requests — to the letter
- 🚫 Doesn’t derail the conversation with “you might also consider…” unless there’s real merit
- 🚫 Doesn’t rewrite your prompt to be “better”
- 🚫 Doesn’t add fluff, disclaimers, or TED Talk voiceovers

### Example Minimal Prompt 💡

```markdown
Generate a Kubernetes deployment YAML for a Node.js app.
```

### Example Output 🚀

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodejs-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nodejs
  template:
    metadata:
      labels:
        app: nodejs
    spec:
      containers:
      - name: nodejs
        image: node:18
        ports:
        - containerPort: 3000
```

> Ship it now before someone demands Helm charts

---

<!-- Generated with the help of ChatGPT as directed by Ashley Childress -->
