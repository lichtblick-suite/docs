---
sidebar_position: 4
---

# Settings Tree

Use a Settings Tree to render a simple settings UI for your panel or [message converter](./message-converters). You describe fields and groups as a tree, and handle updates via a single action handler.

## Quick Example

```ts
ctx.updatePanelSettingsEditor({ // from PanelExtensionContext
  actionHandler: (action) => {
    if (action.action === "update") {
      const { path, value } = action.payload;
      // path like ["general", "showGrid"]
      // apply value to your own state, then refresh the tree
    }
    if (action.action === "perform-node-action") {
      // action.payload.id for clicked action in a node menu
    }
  },
  nodes: {
    general: {
      label: "General",
      fields: {
        showGrid: { label: "Show grid", input: "boolean", value: true },
        opacity: {
          label: "Opacity",
          input: "slider",
          value: 0.8,
          min: 0,
          max: 1,
          step: 0.05,
        },
      },
    },
  },
});
```

## Anatomy

- SettingsTree: `{ actionHandler, nodes, enableFilter?, focusedPath? }`
- SettingsTreeNodes: Record of top-level nodes shown in the editor
- SettingsTreeNode: One group in the editor with optional `label`, `icon`, `fields`, and `children`
- SettingsTreeFields: Inputs inside a node; each key maps to one field

## Fields

Set `label`, `input`, and optionally `value` and UI hints:

- input: One of `autocomplete`, `boolean`, `rgb`, `rgba`, `gradient`, `messagepath`, `number`, `select`, `string`, `toggle`, `slider`, `vec3`, `vec2`, `legendcontrols`
- value: Type depends on input (e.g., boolean, number, string)
- Optional: `placeholder`, `help`, `tooltip`, `disabled`, `readonly`, `error`

Examples:

```ts
fields: {
  color: { label: "Color", input: "rgba", value: "rgba(255,0,0,0.7)" },
  count: { label: "Count", input: "number", value: 3, min: 0, max: 10, step: 1 },
  mode: {
    label: "Mode",
    input: "select",
    value: "fast",
    options: [
      { label: "Fast", value: "fast" },
      { label: "Accurate", value: "accurate" },
    ],
  },
}
```

## Nodes

Optional metadata to control presentation and actions:

- label: Title shown for this node
- icon: One of the predefined settings icons
- defaultExpansionState: "collapsed" | "expanded"
- order: Number or string to order nodes before others
- renamable: Allow user to rename node
- visible: Show a visibility toggle on the node
- enableVisibilityFilter: Add a visibility filter in the toolbar
- actions: Array of menu or inline actions, or dividers

Example actions:

```ts
actions: [
  {
    type: "action",
    id: "reset",
    label: "Reset",
    icon: "Clear",
    display: "menu",
  },
  { type: "divider" },
  {
    type: "action",
    id: "center",
    label: "Center",
    icon: "Map",
    display: "inline",
  },
];
```

## Handling Actions

You receive actions in your `actionHandler`:

- Update a field value:

```ts
if (action.action === "update") {
  const { path, input, value } = action.payload;
  // apply value to your state based on the path
}
```

- Respond to a node action (menu or inline button):

```ts
if (action.action === "perform-node-action") {
  const { id, path } = action.payload;
  if (id === "reset") {
    // reset settings under the node at path
  }
}
```

After updating your state, call `updatePanelSettingsEditor()` again with a fresh tree object to reflect the changes.

## Tips

- Keep your settings tree derived from your panel state to avoid drift.
- Use `focusedPath` to briefly highlight and scroll to a node.
- Use `enableFilter` for quick search in large trees.

For converter-scoped settings, see the [Settings API](./settings-api). To render this editor in a panel, use `updatePanelSettingsEditor` on the [PanelExtensionContext](./panel-extension-context).
