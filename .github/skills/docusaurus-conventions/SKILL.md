---
name: docusaurus-conventions
description: Formatting rules, page structure templates, and Docusaurus-specific conventions for the Lichtblick documentation site.
---

# Docusaurus Conventions

Applies to all documentation pages in `docs/` and `guides/`.

---

## Frontmatter

Every page **must** include all required frontmatter fields listed below.

### Required Fields

| Field | Description |
| --- | --- |
| `title` | Page title shown in the sidebar and browser tab |
| `description` | One sentence summarizing the page — used for SEO and Algolia search |
| `sidebar_position` | Integer controlling the page order within its sidebar section |
| `keywords` | List of search keywords for Algolia (e.g., `[gauge, panel, visualization]`) |

### Optional Fields

| Field | When to Use |
| --- | --- |
| `id` | When the filename differs from the desired URL slug (e.g., `id: 3d` for `3d-panel.md`) |
| `slug` | For section root pages that need a custom URL path |

### Example

```yaml
---
id: gauge
title: Gauge Panel
description: Display a single numeric value as a gauge with configurable ranges and colors.
sidebar_position: 5
keywords: [gauge, panel, numeric, visualization, threshold]
---
```

---

## Page Structure — Panel Documentation

Use this template for documenting Lichtblick panels:

```markdown
---
title: Panel Name
description: One-sentence summary.
sidebar_position: 1
keywords: [panel, keyword1, keyword2]
---

## Overview

One to three paragraphs explaining what the panel does and when to use it.

![panel-name](images/panel-name.png)

## Settings

### Setting Category

| Field | Description |
| --- | --- |
| **Field Name** | What it does. Active voice, present tense. |

## Supported Messages

List the message schemas this panel subscribes to, with links to
the message-schemas section.

## User Interactions

Describe mouse, keyboard, and context-menu interactions.

## Troubleshooting

Common issues and solutions (include only if applicable).
```

---

## Page Structure — Guide / Tutorial

Use this template for step-by-step guides:

```markdown
---
title: Guide Title
description: One-sentence summary.
sidebar_position: 1
keywords: [guide, keyword1, keyword2]
---

## Introduction

What the reader will accomplish and prerequisites.

## Steps

### 1. First Step

Instructions with screenshots.

### 2. Second Step

More instructions.

## Summary

What was accomplished and links to related documentation.
```

---

## Markdown Formatting

### Headings

- ATX-style only (`#`, `##`, `###`)
- One blank line before and after each heading
- Do not skip heading levels (e.g., go from `##` to `####`)

### UI Elements

- **Bold** for UI element names: **Add panel**, **Settings**, **Display frame**
- Do not use quotes or backticks for UI elements

### Code and Config Values

- Backticks for code, config values, topic names, field names: `receiveTime`, `/camera/image_raw`, `frame_id`
- Backticks for file paths: `docs/visualization/panels/`

### Tables

Use tables for settings, parameters, and option lists. Always bold the field name column:

```markdown
| Field | Description |
| --- | --- |
| **Field Name** | Description in active voice. |
```

### Images

- Format: PNG only
- Filenames: lowercase, hyphenated (e.g., `gauge-panel-settings.png`)
- Alt text: Required, describes the image content
- Store in the nearest `images/` subdirectory
- Reference with relative paths: `![alt](images/filename.png)`

### Links

- Internal links: relative paths (e.g., `[Plot panel](./plot-panel.md)`, `[Raw Image](../message-schemas/raw-image.md)`)
- External links: full URLs (e.g., `[GitHub](https://github.com/lichtblick-suite/lichtblick)`)
- Never use absolute file paths in markdown links

---

## Sidebar Ordering

### Folder Ordering

Use `_category_.json` in each folder:

```json
{
  "label": "Panels",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Lichtblick visualization panels."
  }
}
```

### Page Ordering

Use `sidebar_position` in frontmatter to control page order within a folder.
If not set, Docusaurus orders alphabetically by filename.

---

## Cross-Referencing

- Link from panel docs to message schemas: `[Raw Image](../message-schemas/raw-image.md)`
- Link from docs to guides: `[Create Custom Panel](/guides/create-custom-panel)`
- Link from guides to docs: `[3D Panel](/docs/visualization/panels/3d-panel)`

---

## Markdownlint Rules

This project uses `markdownlint-cli2`. Key disabled rules (see `.markdownlint-cli2.jsonc`):

- **MD013** (line length): Disabled — tables can be wide
- **MD033** (inline HTML): Disabled — MDX compatibility
- **MD025** (single top-level heading): Disabled — Docusaurus frontmatter
- **MD024** (duplicate headings): Allowed in sibling sections only
- **MD001** (heading increment): Disabled — intentional level skips in existing docs

Run `yarn lint:md` to validate before committing.
