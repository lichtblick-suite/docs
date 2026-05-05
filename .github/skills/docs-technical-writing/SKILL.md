# Technical Documentation Writing Skill

This skill provides conventions, patterns, and workflow instructions for writing Lichtblick documentation using Docusaurus with Playwright MCP-assisted screenshots.

## Documentation Platform

- **Framework**: Docusaurus v3+ (with v4 future compatibility enabled)
- **Language**: English only
- **Hosting**: GitHub Pages at `https://lichtblick-suite.github.io/docs/`
- **Source structure**: Two doc sections — `docs/` (core) and `guides/` (how-to)

## Frontmatter Conventions

Every documentation page must include YAML frontmatter:

```yaml
---
title: "Human-readable page title"
description: "One-line summary for SEO and link previews"
sidebar_position: 3  # Controls ordering in the sidebar
---
```

Optional fields:
- `id`: Override the doc ID (defaults to filename without extension)
- `slug`: Override the URL path

## Writing Style

| Rule | Example |
|------|---------|
| Use second person ("you") | "You can configure the panel..." |
| Active voice | "The panel renders..." not "The panel is rendered by..." |
| Present tense | "Click the button" not "You will click the button" |
| Concise sentences | Max ~25 words per sentence |
| Technical accuracy | Always verify against the running app |
| No marketing language | Avoid "powerful", "cutting-edge", "revolutionary" |

## Markdown Conventions

- Use ATX-style headings (`#`, `##`, `###`)
- One blank line before and after headings
- Use fenced code blocks with language identifiers: ` ```typescript `
- Use tables for settings/parameters documentation
- Use `**bold**` for UI element names
- Use backticks for: code values, file paths, config keys, commands
- Relative links for cross-references: `[3D Panel](../panels/3d-panel.md)`

## Image & Screenshot Conventions

### File Naming

```
{feature-name}.png          # e.g., 3d-panel.png
{feature-name}-{detail}.png # e.g., 3d-panel-settings.png
```

- All lowercase
- Hyphenated (no underscores or spaces)
- Descriptive but concise
- PNG format only

### Image Placement

Save images in the nearest `images/` directory relative to the markdown file:

```
docs/visualization/panels/
├── 3d-panel.md
├── image-panel.md
└── images/
    ├── 3d.png
    ├── 3d-panel-settings.png
    └── image-panel.png
```

### Markdown Image Syntax

```markdown
![Descriptive alt text](images/filename.png)
```

- Alt text must describe what the image shows (accessibility)
- Use relative paths from the markdown file location
- Do NOT use absolute paths or URLs for local images

### Screenshot Workflow with Playwright MCP

The Lichtblick web app must be running at `http://localhost:8080` before taking screenshots.

**To start the app** (in the `lichtblick` repo):
```bash
yarn web:serve
```

**Screenshot process:**

1. **Navigate**: Use `mcp_playwright_browser_navigate` to open the target page
2. **Prepare state**: Load a data file, open a panel, adjust settings as needed
3. **Resize viewport**: Set to standard dimensions:
   - Full page: 1280×800
   - Panel focus: 900×600
   - Dialog/modal: fit content
4. **Wait**: Use `mcp_playwright_browser_wait_for` to ensure content is rendered
5. **Capture**: Use `mcp_playwright_browser_take_screenshot` to save the image
6. **Verify**: Confirm the screenshot captures the intended content

**Preparing a single-panel layout:**

When documenting a specific panel, the layout must show only that panel — no other panels should be visible. The default sample data source loads multiple panels, so you need to remove the extras:

1. Open the app with sample data (e.g., `?ds=sample-nuscenes`)
2. For each unwanted panel, hover over it to reveal the toolbar, click the **⋮** (More) button, then select **Remove panel**
3. Repeat until only the target panel remains
4. Hide the left sidebar using the `button[aria-label="Hide left sidebar"]` button before taking the main screenshot

> **Note:** Do not attempt to manipulate `localStorage` or inject layout JSON — the sample data source overrides layout on load. Removing panels one-by-one via the UI is the reliable approach.

**Available sample data sources:**

| URL parameter | Description |
| --- | --- |
| `?ds=sample-nuscenes` | NuScenes v1.0 mini scene — loads a remote MCAP file with camera, lidar, GPS, and IMU data. This is the only user-facing sample data source. |

The sample data source is activated via URL only (e.g., `http://localhost:8080/?ds=sample-nuscenes`). It does not appear in the data source dialog. The default layout is defined in `packages/suite-base/src/dataSources/SampleNuscenesLayout.json`.

**Tips for good screenshots:**

- Close sidebars if they're not relevant to the documentation topic
- Use a clean layout with only the panel being documented
- Ensure no personal data or sensitive info is visible
- Dismiss any lingering tooltips before capturing — click an empty area of the panel to clear them
- The playback bar at the bottom is always visible; this is expected and should not be cropped out

### Lichtblick UI Selectors Reference

When interacting with the Lichtblick app via Playwright MCP, use these patterns:

**Panel toolbar buttons** use the `title` attribute (not `aria-label`):

```
button[title="Settings"]
button[title="More"]
button[title="Enter fullscreen"]
```

**Sidebar toggle** uses `aria-label`:

```
button[aria-label="Hide left sidebar"]
button[aria-label="Show left sidebar"]
```

**Panel containers** use `data-testid` with the format `panel-mouseenter-container {PanelType}!{id}`:

```
[data-testid="panel-mouseenter-container StateTransitions!3010q0i"]
```

**Panel menu items** use `data-testid`:

```
[data-testid="panel-menu-item State Transitions"]
```

**Important:** Playwright MCP element refs (`ref=eNNN`) go stale between snapshots. Always use CSS selectors or re-take a snapshot before interacting with elements. Do not reuse refs from a previous snapshot.

### Research Workflow Before Writing

Before writing panel documentation, read the panel's source code in the Lichtblick repo to build an accurate settings list. The key files follow a consistent pattern:

| File | What it provides |
| --- | --- |
| `packages/suite-base/src/panels/{PanelName}/types.ts` | Config types and interfaces — shows all available settings fields |
| `packages/suite-base/src/panels/{PanelName}/hooks/usePanelSettings.ts` | Settings tree builder — shows how settings are grouped (General, X Axis, Series, etc.) and their UI controls |
| `packages/suite-base/src/i18n/en/{panelName}.ts` | All user-facing strings — labels, descriptions, and tooltip text |

**If the `lichtblick` repo is in the workspace**, use `read_file` to access these paths directly under the local repo root.

**If the `lichtblick` repo is NOT in the workspace**, browse the source on GitHub instead:

```
https://github.com/lichtblick-suite/lichtblick/tree/develop/packages/suite-base/src/panels/{PanelName}
```

Use the `web` tool to fetch file contents from GitHub. The `develop` branch is the default and has the latest code.

This is faster and more reliable than reverse-engineering settings from the UI alone. Always cross-reference with the live app to confirm the source code matches the deployed build.

## Page Templates

### Panel Documentation Template

```markdown
---
title: "{Panel Name} Panel"
description: "{One-line description of what the panel does}"
sidebar_position: {N}
---

## Overview

{2-3 sentences explaining the panel's purpose and primary use case.}

![{Panel name} overview](images/{panel-name}.png)

## Settings

### {Setting Category}

| Field | Description |
| --- | --- |
| **{Setting name}** | {What it does} |

## Topics

{List of message types/topics this panel subscribes to, if applicable.}

## Examples

{Concrete usage examples with screenshots if helpful.}
```

### Guide Template

```markdown
---
title: "{Action phrase: Create/Build/Configure X}"
description: "{What the reader will accomplish}"
sidebar_position: {N}
---

## Prerequisites

{What the reader needs before starting.}

## Steps

### 1. {First step title}

{Instructions with screenshots.}

### 2. {Second step title}

{Instructions with screenshots.}

## Result

{What the reader should see when done.}

## Troubleshooting

{Common issues and solutions.}
```

### Feature Documentation Template

```markdown
---
title: "{Feature Name}"
description: "{One-line description}"
sidebar_position: {N}
---

## Overview

{What this feature is and why it exists.}

## How It Works

{Technical explanation of behavior.}

## Configuration

{Settings, options, or parameters.}

## Usage

{Step-by-step or examples.}
```

## Sidebar Configuration

The sidebar is auto-generated from the file structure. To control ordering:

1. Use `sidebar_position` in frontmatter for individual pages
2. Use `_category_.json` files for folder ordering:

```json
{
  "label": "Panels",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "Available visualization panels"
  }
}
```

## Cross-References

- Link to other docs using relative paths: `[Layouts](../layouts.md)`
- Link to guides from docs: `[Create a Custom Panel](/guides/create-custom-panel)`
- Never use absolute file paths

## Quality Checklist

Before finalizing documentation:

- [ ] All screenshots are current and captured from the running app
- [ ] Image alt text is descriptive and accurate
- [ ] All internal links resolve correctly
- [ ] Frontmatter includes title, description, and sidebar_position
- [ ] Settings tables match actual UI options
- [ ] Code examples are tested and correct
- [ ] No broken markdown formatting
- [ ] Consistent terminology with existing docs
