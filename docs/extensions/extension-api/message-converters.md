---
sidebar_position: 5
---

# Message Converters

Message converters transform messages from one schema to another. In Lichtblick, converters are schema-based (not topic-based): you map a source schema name to a target schema name. Panels then opt in to the converted output using the `convertTo` option when [subscribing](./panel-extension-context).

## How it works

- You register a converter with `fromSchemaName` and `toSchemaName` using the [ExtensionContext](./extension-context).
- A converter runs only when a panel subscribes to a topic with `convertTo: toSchemaName`.
- For each incoming message with `schemaName === fromSchemaName`, Lichtblick calls your converter and provides the returned object to the panel.
- If your converter returns `undefined`, that message is skipped (no output for that input).

Converters do not rename or alias topics; they only change the schema of the message provided to panels. For naming, use [Topic Aliases](./topic-aliases).

## Registering a converter

```ts
extensionContext.registerMessageConverter<{ x: number; y: number }>({
  fromSchemaName: "custom/Point2D",
  toSchemaName: "foxglove.Point2",
  converter: (msg, event) => ({ x: msg.x, y: msg.y }),
});
```

- `fromSchemaName`: Source schema your data arrives as.
- `toSchemaName`: Target schema panels will receive when opting in.
- `converter(msg, event)`: Synchronous function. Return the converted value, or `undefined` to drop this message.

After registration, topics carrying `custom/Point2D` will advertise they are convertible to `foxglove.Point2` in the UI.

## Using a converter in a panel

```ts
context.subscribe([{ topic: "/points_raw", convertTo: "foxglove.Point2" }]);

context.watch("currentFrame");
context.onRender?.(({ currentFrame }, done) => {
  for (const evt of currentFrame ?? []) {
    // evt.message now matches foxglove.Point2
  }
  done();
});
```

## Settings API

You can add per-topic settings to your converter via `panelSettings`. This attaches a Settings Tree to topics that use your target schema so users can tweak behavior (per panel type).

At a glance:

- Define UI with `settings(config) → SettingsTreeNode`.
- Handle edits in `handler(action, config)` (mutate `config`).
- Provide `defaultConfig` for initial values.

For a complete guide and examples, see Settings API.

[Open Settings API →](./settings-api)

## Notes and limits

- Schema-only: converters do not change topic names. For aliasing, use Topic Aliases.
- When it runs: only for subscribers that request `convertTo` for a matching topic/schema.
- Purity: keep converters fast and side‑effect free; they are called per message.
- Return type: must match the target schema shape expected by panels.
- Skipping: return `undefined` to omit a converted output for specific messages.

