---
name: screenshot-workflow
description: Captures live screenshots from the Lichtblick web app using Playwright MCP tools. Covers app lifecycle, viewport sizing, navigation, data loading, and image saving.
---

# Screenshot Workflow

Captures live screenshots from the running Lichtblick web application using
Playwright MCP. All documentation screenshots **must** come from the live app.
Never use placeholder images.

---

## Prerequisites

- Lichtblick web app running at `http://localhost:8080`
  (started with `yarn web:serve` from the lichtblick directory)
- Playwright MCP configured in `.vscode/mcp.json`

## Browser Mode

Playwright MCP runs in **headed mode** (visible browser window). Headless mode
is not used — the MCP server launches a real browser so the agent can interact
with the live UI via `browser_snapshot`, `browser_click`, and related tools.

The default viewport is **1280×800**, set via `--viewport-size=1280,800` in
`.vscode/mcp.json`. Do not change this — all documentation screenshots must use
this viewport for visual consistency.

Element selectors are obtained at runtime from `browser_snapshot`, which returns
an accessibility tree with exact element references. Never hard-code CSS selectors
or XPath — always derive them from the current snapshot.

---

## Step-by-Step Process

### 1. Verify the App is Running

Navigate to `http://localhost:8080` using `browser_navigate`.

If the page fails to load, ask the user to start the app:

> Please run `yarn web:serve` in the lichtblick directory and wait for
> the webpack compilation to complete (about 60-90 seconds).

Do **not** attempt to start the app yourself — it requires a long-running
terminal process.

### 2. Set the Viewport Size

Use `browser_resize` to 1280x800 **before** navigating. This is the standard
viewport for all captures — the actual screenshot is then cropped to the
element, not the full window (see Step 6).

### 3. Load Sample Data (if needed)

Use these approaches in order of preference:

**a) Drag-and-drop a local file**

Use `browser_drop` with the file chosen during pre-flight
(from `docs/sample-data/source-files/`):

```
paths: ["<absolute-path-to-docs>/sample-data/source-files/<chosen-file>"]
```

**b) Load a layout**

If a specific layout was chosen during pre-flight, follow the
**app-setup** skill to import it from `docs/sample-data/layouts/`.

**c) Install an extension**

If an extension was chosen during pre-flight, follow the
**app-setup** skill to install it from `docs/sample-data/extensions/`
before loading data or taking screenshots.

### 4. Navigate to the Target UI Area

Use `browser_snapshot` to inspect the current page state, then:

- Open the **Add panel** menu to add a specific panel type
- Click settings icons, sidebar tabs, or menu items
- Use `browser_click` on specific UI elements identified in the snapshot

### 5. Wait for Rendering

After loading data or switching panels:

- Use `browser_wait_for` with a short delay (2-3 seconds) to allow
  3D rendering, image decoding, or plot drawing to complete
- Use `browser_snapshot` to verify the scene is fully rendered
- For 3D/WebGL content, wait 3-5 seconds — the first render is slower

### 6. Take the Screenshot

**Always capture only the element being documented — never the full page.**

Use `browser_snapshot` to locate the exact element reference for the panel,
dialog, or UI component being documented, then pass it as the `target` parameter
to `browser_take_screenshot`. This crops the output to the element only and
excludes surrounding chrome, sidebars, and browser UI.

Use `browser_take_screenshot` with:

- `type`: `"png"` (always)
- `filename`: Target path in the docs images directory
- `target`: Element reference from `browser_snapshot` — **required**

Example:

```
target: "panel[data-panelid='gauge']"   ← from browser_snapshot
filename: "docs/docs/visualization/panels/images/gauge-panel.png"
```

Only omit `target` when the subject of documentation is the full application
layout itself (e.g., a page documenting the workspace overview).

### 7. Verify the Screenshot

After saving:

- Confirm the file exists at the expected path
- Use `browser_snapshot` to verify the UI state matches what was captured
- Ensure no debug overlays, developer tools, or dialogs are visible

---

## Naming Conventions

| Screenshot Type | Pattern | Example |
| --- | --- | --- |
| Panel overview | `<panel-name>.png` | `gauge-panel.png` |
| Panel with feature | `<panel-name>-<feature>.png` | `3d-custom-layers.png` |
| Settings view | `<panel-name>-settings.png` | `state-transitions-settings.png` |
| UI interaction | `<feature>-<action>.png` | `raw-messages-filtering.png` |
| General feature | `<feature-name>.png` | `search-panels.png` |

All filenames: lowercase, hyphenated, `.png` extension.

---

## Image Placement

Save screenshots to the nearest `images/` subdirectory relative to the
markdown file that references them:

| Markdown Location | Image Directory |
| --- | --- |
| `docs/visualization/panels/*.md` | `docs/visualization/panels/images/` |
| `docs/visualization/*.md` | `docs/visualization/images/` |
| `docs/connecting-to-data/*.md` | `docs/connecting-to-data/images/` |
| `docs/*.md` | `docs/images/` |
| `guides/*.md` | `guides/images/` |

Create the `images/` directory if it does not exist.

---

## Troubleshooting

### App not responding at localhost:8080

The Lichtblick web app is not running. Ask the user to start it:
`cd <lichtblick-dir> && yarn web:serve`

The first build takes 60-90 seconds. Subsequent hot-reloads are faster.

### Blank or partially rendered 3D scene

3D content needs time to initialize WebGL and load assets.
Wait 3-5 seconds after data loads, then verify with `browser_snapshot`.

### Data source dialog blocks the view

After loading a file, the dialog may remain open. Close it with
`browser_press_key` (Escape) or `browser_click` on the close button.

### Panel shows "No data" or "Waiting for data"

Ensure a data file is loaded AND the panel's topic is configured.
Use `browser_snapshot` to inspect the panel state and topic settings.

### File picker not available in web mode

The web app cannot access the local filesystem via a file dialog.
Use `browser_drop` (drag-and-drop) or URL-based data loading instead.

### Screenshot contains debug overlays

Close any open developer tools, dismiss notification banners, and
ensure no modals are visible before taking the screenshot.
