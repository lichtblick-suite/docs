---
sidebar_position: 2
---

# ExtensionContext

The `ExtensionContext` is passed to your `activate()` function and lets you register everything your extension provides. Think of it as your toolbox for adding panels, converters, aliases, and more.

Quick start:

```ts
import type { ExtensionContext } from "@lichtblick/suite";

export function activate(extensionContext: ExtensionContext): void {
  // use extensionContext.* to register features
}
```

## What it provides

### extensionContext.mode

"production" | "development" | "test"

Use this to enable debug logs or dev-only features.

```ts
if (extensionContext.mode === "development") {
  console.debug("My extension loaded in dev mode");
}
```

### extensionContext.registerPanel()

Register a custom visualization panel.

```ts
extensionContext.registerPanel({
  name: "My Panel",
  initPanel, // (context) => void | () => void
});
```

- name: Unique within your extension.
- initPanel: Called once when the panel mounts. Return an optional cleanup function.

Minimal example (see [PanelExtensionContext](./panel-extension-context) for panel APIs):

```ts
import type { PanelExtensionContext } from "@lichtblick/suite";

function initPanel(context: PanelExtensionContext) {
  context.onRender?.((_state, done) => done());
  return () => {
    /* cleanup if needed */
  };
}
```

### extensionContext.registerMessageConverter()

Convert messages from one schema to another so panels can subscribe to the target schema.

```ts
extensionContext.registerMessageConverter<{ x: number; y: number }>({
  fromSchemaName: "custom/Point2D",
  toSchemaName: "foxglove.Point2",
  converter: (msg) => ({ x: msg.x, y: msg.y }),
});
```

- fromSchemaName/toSchemaName: Source and target schema names.
- converter(msg, event): Return the converted object. Return undefined to skip an output for that message.

You can optionally add per-topic settings for panels via `panelSettings` (see the [Settings API](./settings-api)) when you need a UI to tweak converter behavior.

### extensionContext.registerTopicAliases()

Create alternate topic names based on available topics and global variables.

```ts
extensionContext.registerTopicAliases(({ topics, globalVariables }) => {
  const hasPose = topics.some((t) => t.name === "/robot/pose");
  const enabled = globalVariables["useShortPose"] === true;
  return enabled && hasPose
    ? [{ name: "/pose", sourceTopicName: "/robot/pose" }]
    : [];
});
```

- Receives `{ topics, globalVariables }`.
- Return an array of `{ name, sourceTopicName }` pairs.

### extensionContext.registerCameraModel()

Provide a custom camera distortion/projection model for the Images panel.

```ts
extensionContext.registerCameraModel({
  name: "MyFisheye",
  modelBuilder: (cameraInfo) => new MyFisheyeModel(cameraInfo),
});
```

- name: Must match the `distortion_model` string in incoming camera calibration messages.
- modelBuilder(cameraInfo): Return an object implementing the camera model behavior.

That’s it — use the `ExtensionContext` to register your features inside `activate()`. For details, see: [Message Converters](./message-converters), [Topic Aliases](./topic-aliases), and [Custom Camera Models](./custom-camera-models).

