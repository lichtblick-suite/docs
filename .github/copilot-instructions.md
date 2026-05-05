# Copilot Instructions — Lichtblick Documentation

These instructions apply to all Copilot interactions in this repository.

## Repository Overview

This is the documentation site for [Lichtblick](https://github.com/lichtblick-suite/lichtblick), a robotics visualization and diagnosis tool. Built with Docusaurus, hosted on GitHub Pages.

For general project conventions, structure, and development workflow, refer to the [Lichtblick CONTRIBUTING.md](https://github.com/lichtblick-suite/lichtblick/blob/develop/CONTRIBUTING.md).

## Writing Conventions

- **Audience**: Robotics engineers and developers familiar with ROS, MCAP, and data visualization
- **Tone**: Professional, direct, concise — no marketing language
- **Person**: Use second person ("you") when addressing the reader
- **Voice**: Active voice, present tense ("Click the button", not "The button should be clicked")
- **Sentence length**: Target ~25 words max per sentence

## Formatting Rules

- Headings: ATX-style (`#`, `##`, `###`), one blank line before/after
- UI elements: **bold** (e.g., **Add panel**)
- Code/config values: backticks (e.g., `receiveTime`, `/topic.field`)
- File paths: backticks (e.g., `docs/visualization/panels/`)
- Tables: Use for settings, parameters, and option lists
- Links: Relative paths for internal docs (e.g., `[Plot panel](./plot-panel.md)`)

## Docusaurus Conventions

- Every page needs frontmatter with at least a `title` (use `description` and `sidebar_position` when helpful)
- Folder ordering via `_category_.json` files
- Images stored in the nearest `images/` subdirectory, referenced with relative paths
- MDX components are supported but plain Markdown is preferred

## Image & Screenshot Standards

- Format: PNG only
- Naming: lowercase, hyphenated (e.g., `state-transitions-settings.png`)
- Alt text: Required, must describe the image content
- Viewport: 1280×800 for full-page, 900×600 for panel-focused shots
- No personal data or sensitive information in screenshots
- Screenshots must come from the live app via Playwright MCP — no placeholders

## Linting

This repository uses `markdownlint-cli2` for markdown linting. Run with:

```bash
yarn lint:md
```

Key rules (see `.markdownlint-cli2.jsonc` for full config):
- No line length limit (tables can be wide)
- HTML is allowed (MDX compatibility)
- Duplicate headings allowed in sibling sections only

## Content Structure

```
docs/           → Core documentation (features, panels, settings)
guides/         → Step-by-step how-to guides
static/         → Static assets (logo, videos)
src/            → Custom React components and CSS
```

## Do NOT

- Add content that contradicts the live application behavior
- Use absolute file paths in markdown links
- Commit screenshots with visible debug overlays or developer tools
- Skip alt text on images
- Use `<img>` tags when `![alt](path)` suffices
