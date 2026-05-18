---
name: app-setup
description: Step-by-step Playwright MCP instructions for loading layouts and installing extensions in the Lichtblick web app before taking screenshots.
---

# App Setup

Prepares the Lichtblick web app for documentation screenshots by loading a
layout or installing an extension via Playwright MCP.

Run these steps **after** verifying the app is running at `http://localhost:8080`
(see the **screenshot-workflow** skill) and **before** taking any screenshots.

---

## Load a Layout

1. **Open the layout menu**

   Use `browser_snapshot` to inspect the page, then click the layout name shown
   in the top navigation bar (it displays the current layout name, e.g. **Default**).

   ```
   browser_click → layout name button in the top bar
   ```

2. **Open the import dialog**

   In the layout panel that appears, click **Import from file…**.

   ```
   browser_click → "Import from file…" menu item
   ```

3. **Upload the layout file**

   A file picker will open. Use `browser_file_upload` with the absolute path to
   the chosen layout file:

   ```
   paths: ["<absolute-path-to-docs>/sample-data/layouts/<chosen-layout>.json"]
   ```

4. **Confirm the layout loaded**

   Use `browser_snapshot` to verify the layout name in the top bar has changed
   to match the imported layout. If the app shows an error, check that the JSON
   file is a valid Lichtblick layout export.

---

## Install an Extension

1. **Open the Extensions panel**

   Click the **Extensions** icon in the left sidebar (puzzle-piece icon), or
   open it via the top-right app menu → **Extensions**.

   ```
   browser_click → Extensions sidebar icon
   ```

2. **Open the install dialog**

   Click the **Install local extension** button (or the `+` / upload icon
   within the Extensions panel).

   ```
   browser_click → "Install local extension" button
   ```

3. **Upload the extension file**

   A file picker will open. Use `browser_file_upload` with the absolute path to
   the chosen extension:

   ```
   paths: ["<absolute-path-to-docs>/sample-data/extensions/<chosen-extension>.foxe"]
   ```

4. **Confirm the extension is active**

   Use `browser_snapshot` to verify the extension appears in the Extensions
   panel list with a status of **Installed** (or equivalent active state).
   Reload the page with `browser_navigate` to `http://localhost:8080` if the
   extension requires a restart to activate.

---

## Order of Operations

When both a layout and an extension are needed, always follow this order:

1. Install the extension
2. Reload the app (`browser_navigate` to `http://localhost:8080`)
3. Load the layout
4. Load the data file (see **screenshot-workflow** skill)
5. Take screenshots
