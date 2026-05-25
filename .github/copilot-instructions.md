# Copilot Instructions — Lichtblick Documentation

Documentation site for [Lichtblick](https://github.com/lichtblick-suite/lichtblick), a robotics
visualization and diagnosis tool. Built with Docusaurus 3.10.1, hosted on GitHub Pages at
`https://lichtblick-suite.github.io/docs/`.

## Contributing

Read [`README.md`](../README.md) for the full contribution guide. Key standards:

- Create a new branch based on `main` for every change
- File names must follow `kebab-case` (e.g., `3d-panel.md`, `gauge-panel.png`)
- Submit changes as a pull request against `main` for review

## Commands

```bash
yarn start      # Dev server on port 3000
yarn build      # Production build (verifies broken links)
yarn lint:md    # Markdown linting
```

## Content Structure

```
docs/           → Core documentation (features, panels, settings, schemas)
guides/         → Step-by-step how-to guides
static/         → Static assets (logo, homepage image)
src/            → Custom React components and CSS
sample-data/    → Sample files for reproducible screenshots
  source-files/ → .mcap and .bag data files
  layouts/      → Layout JSON presets
  extensions/   → .foxe extension packages
```

## Writing Conventions

- **Audience**: Robotics engineers familiar with ROS, MCAP, and data visualization
- **Tone**: Professional, direct, concise — no marketing language
- **Person**: Second person ("you") when addressing the reader
- **Voice**: Active voice, present tense ("Click the button", not "The button should be clicked")
- **Sentence length**: Target ~25 words max per sentence

## Formatting Rules

- Headings: ATX-style (`#`, `##`, `###`), one blank line before/after
- UI elements: **bold** (e.g., **Add panel**, **Settings**)
- Code/config values: backticks (e.g., `receiveTime`, `/topic.field`)
- File paths: backticks (e.g., `docs/visualization/panels/`)
- Tables: Use for settings, parameters, and option lists — bold field names in first column
- Links: Relative paths for internal docs (e.g., `[Plot panel](./plot-panel.md)`)

## Docusaurus Conventions

- Every page requires frontmatter with `title`, `description`, `sidebar_position`, and `keywords` (list of search terms)
- Folder ordering via `_category_.json` files
- Images stored in the nearest `images/` subdirectory, referenced with relative paths
- MDX components are supported but plain Markdown is preferred
- Sidebar auto-generated from filesystem structure

## Image & Screenshot Standards

- Format: PNG only
- Naming: lowercase, hyphenated (e.g., `state-transitions-settings.png`)
- Alt text: Required, must describe the image content
- Viewport: 1280x800 for all captures, cropped to the target element via Playwright
- No personal data or sensitive information in screenshots
- All screenshots must come from the live app via Playwright MCP — no placeholders
- The app runs at `http://localhost:8080` (start with `yarn web:serve` in the lichtblick directory)

## Linting

Uses `markdownlint-cli2`. Key rules (see `.markdownlint-cli2.jsonc`):

- No line length limit (tables can be wide)
- HTML is allowed (MDX compatibility)
- Duplicate headings allowed in sibling sections only

Always run `yarn lint:md` after writing documentation.

## Validation

Always run before committing:

1. `yarn lint:md` — checks markdown formatting
2. `yarn build` — verifies no broken links or missing images

## Do NOT

- Add content that contradicts the live application behavior
- Use absolute file paths in markdown links
- Commit screenshots with visible debug overlays or developer tools
- Skip alt text on images
- Use `<img>` tags when `![alt](path)` suffices
- Use placeholder or mock screenshots — always capture from the live app
