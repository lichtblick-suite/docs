---
sidebar_position: 1
---

# ExtensionModule

The ExtensionModule is the entry point of a Lichtblick extension. Your bundle must export a single `activate()` function. Lichtblick calls this function once when your extension loads and passes an [ExtensionContext](./extension-context) you use to register features.

Use `activate()` to set up anything your extension provides — custom panels, [message converters](./message-converters), [topic aliases](./topic-aliases), or other extension features. Keep this function fast and avoid long‑running work; registration is typically synchronous.

## Signature

```ts
export interface ExtensionModule {
  activate(context: ExtensionContext): void;
}
```

In practice, you export the function directly:

```ts
import type { ExtensionContext } from "@lichtblick/suite";

export function activate(context: ExtensionContext): void {
  // Register extension capabilities here
}
```

## Example

```ts
import type { ExtensionContext } from "@lichtblick/suite";

export function activate(ctx: ExtensionContext): void {
  // Register a custom panel
  ctx.registerPanel({ name: "My Panel", initPanel });

  // Register a simple message converter
  ctx.registerMessageConverter({
    fromSchemaName: "custom/Point2D",
    toSchemaName: "foxglove.Point2",
    converter: (msg) => ({ x: msg.x, y: msg.y }),
  });

  // Optional: add topic aliases
  ctx.registerTopicAliases(() => [
    { name: "/pose", sourceTopicName: "/robot/pose" },
  ]);
}
```

That’s all you need: export `activate(context)` and register what your extension offers. To build panels, see [PanelExtensionContext](./panel-extension-context). For converters, aliases, and camera models, see their respective pages.
