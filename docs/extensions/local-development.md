---
sidebar_position: 1
---

# Local Development

Develop and test your **Lichtblick extensions locally** using the official scaffolding tool.

---

## Prerequisites

You’ll use **[create-lichtblick-extension](https://github.com/Lichtblick-Suite/create-lichtblick-extension)**, a TypeScript starter that bootstraps an extension project with build scripts, an example panel, and the required SDK bindings.

**Requirements:**

- Node.js 18
- A modern editor (VS Code recommended)

---

## Getting started

Inside the directory where you want to keep your project, run:

```bash
npm init lichtblick-extension@latest my-extension
cd my-extension
npm install
```

This will generate a ready-to-use project with:

- `index.ts` — the extension entry point
- `ExamplePanel.tsx` — a React panel example
- Scripts for build and install

---

## Iterating locally

To build and install your extension into Lichtblick, run:

```bash
npm run local-install
```

This command:

- Compiles your extension
- Packages it into a `.foxe` archive
- Installs it into your local Lichtblick extensions folder (e.g. `~/.lichtblick/extensions/unknown.my-extension-0.0.0`)

Open or reload the Lichtblick desktop app and you should see your extension listed in **Settings** and your panel (e.g. `ExamplePanel`) available in **Add panel**.

Repeat `npm run local-install` whenever you change the code.

---

## Build only

If you just want to check compilation without installing:

```bash
npm run build
```

This generates the `.foxe` file in `dist/`, which you can later install manually (drag-and-drop into the app, or copy to your extensions folder).

---

## Why this workflow?

- **Fast**: one command handles build + packaging + install.
- **Lightweight**: no extra configuration needed.
- **Transparent**: `.foxe` is just a ZIP — you can unzip, inspect, and distribute it easily.

---

## Next steps

- Explore `src/index.ts` to learn how to register your extension.
- Study `src/ExamplePanel.tsx` for a React-based panel implementation.

:::info

Lichtblick extensions use the .foxe file format (for now) originally introduced by Foxglove. While the core functionality is compatible, extensions are not guaranteed to be 100% interoperable. Lichtblick aims to maintain maximum backward compatibility with Foxglove 1.x, but extensions may not work with newer Foxglove features that go beyond the shared core.

:::
