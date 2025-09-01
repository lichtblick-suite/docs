---
sidebar_position: 3
---

# PanelExtensionContext

The `PanelExtensionContext` is passed to your panel’s `initPanel()` function. It is how your panel interacts with Lichtblick: subscribe to data, render on updates, save state, open panels, publish messages, and more.

Quick start:

```ts
import type { PanelExtensionContext } from "@lichtblick/suite";

export function initPanel(context: PanelExtensionContext) {
  // Re-render when new messages arrive
  context.watch("currentFrame");

  context.onRender?.((state, done) => {
    // state.currentFrame -> new messages since last render
    done();
  });
}
```

## Key Concepts

### RenderState

The object passed to `onRender` describing the app state for this frame:

- `currentFrame`: New `MessageEvent[]` since last render
- `didSeek`: True if playback jumped; clear any cached state
- `allFrames`: Best-effort list of all available messages (requires `preload`)
- `parameters`: Map of parameter values
- `variables`: Map of global variables
- `topics`: List of available topics
- `services`: List of available services
- `currentTime`/startTime/endTime: Playback times
- `previewTime`: Hover/preview time (seconds)
- `colorScheme`: "light" | "dark"
- `appSettings`: Subscribed app settings

Only the fields you `watch()` trigger re-renders.

### Subscription

How your panel asks for data:

```ts
context.subscribe([
  { topic: "/pose" },
  { topic: "/laser", convertTo: "foxglove.PointCloud" },
  { topic: "/odom", preload: true },
]);
```

- topic: Name to subscribe
- convertTo: Convert incoming messages using a registered [message converter](./message-converters)
- preload: Load full history, then access it via `state.allFrames`

### LayoutActions

Open or update panels in the layout:

```ts
context.layout.addPanel({
  position: "sibling",
  type: "my-extension.My Panel",
  updateIfExists: true,
  getState: (existing) => existing ?? { foo: 1 },
});
```

## Methods

### watch(field)

Trigger renders only when a specific `RenderState` field changes.

```ts
context.watch("currentFrame");
```

### subscribe(subscriptions)

Subscribe to topics with options like `convertTo` and `preload`.

```ts
context.subscribe([
  { topic: "/chatter" },
  { topic: "/points", convertTo: "foxglove.PointCloud" },
  { topic: "/odom", preload: true },
]);
```

### subscribe(topics)

Deprecated: use the `Subscription[]` form.

```ts
context.subscribe(["/chatter"]);
```

### unsubscribeAll()

Remove all current subscriptions.

```ts
context.unsubscribeAll();
```

### onRender(handler)

Render callback. Call `done()` when finished.

```ts
context.onRender?.((state, done) => {
  // process state.currentFrame, state.variables, etc.
  done();
});
```

### saveState(partial)

Persist panel state into the layout.

```ts
context.saveState({ selected: "left" });
```

### setDefaultPanelTitle(title)

Set or clear the default panel title.

```ts
context.setDefaultPanelTitle("My Panel");
```

### setSharedPanelState(state)

Share transient state across panels of the same type.

```ts
context.setSharedPanelState({ hoveredId: 42 });
```

### setVariable(name, value)

Set a global variable accessible across panels and scripts.

```ts
context.setVariable("selectedTopic", "/camera");
```

### setParameter(name, value)

Set a data-source parameter (availability depends on source).

```ts
context.setParameter("/use_sim_time", true);
```

### setPreviewTime(time)

Share a hover/preview time (seconds) across panels.

```ts
context.setPreviewTime(12.34);
```

### seekPlayback(time)

Seek playback to a time. Optional based on data source.

```ts
context.seekPlayback?.({ sec: 123, nsec: 0 });
```

### subscribeAppSettings(keys)

Get notified when specific app settings change.

```ts
context.subscribeAppSettings(["colorScheme"]);
context.watch("appSettings");
```

### updatePanelSettingsEditor(tree)

Show a settings editor using a [Settings Tree](./settings-tree).

```ts
context.updatePanelSettingsEditor({
  actionHandler: (action) => {
    /* handle updates */
  },
  nodes: {
    general: {
      label: "General",
      fields: {
        showGrid: { label: "Show grid", input: "boolean", value: true },
      },
    },
  },
});
```

### advertise(topic, schemaName, options?)

Declare intent to publish on a topic.

```ts
context.advertise?.("/cmd_vel", "geometry_msgs/Twist");
```

### publish(topic, message)

Publish a message (after advertising).

```ts
context.publish?.("/cmd_vel", {
  linear: { x: 1, y: 0, z: 0 },
  angular: { x: 0, y: 0, z: 0 },
});
```

### unadvertise(topic)

Stop advertising a topic.

```ts
context.unadvertise?.("/cmd_vel");
```

### callService(service, request)

Call a service and await the result.

```ts
const result = await context.callService?.("/reset_map", { force: true });
```

### unstable_subscribeMessageRange(args)

Stream full message history for a topic (offline sources).

Note: Experimental/unstable API. Behavior and signature may change. This streaming iterator is the future path to replace block-based loaders and reliance on `allFrames`. Your extension is responsible for iterating batches and managing its own history/indexed state.

```ts
const stop = context.unstable_subscribeMessageRange({
  topic: "/odom",
  // convertTo? -> if a message converter should be called
  onNewRangeIterator: async (iter) => {
    for await (const batch of iter) {
      // batch: MessageEvent[] ordered by log time
    }
  },
});
// later
stop();
```

Tip: Keep `onRender` fast. Heavy work should be incremental or batched.
