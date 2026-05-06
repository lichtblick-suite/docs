---
sidebar_position: 5
title: "Message Converters"
description: "Transform messages from one schema to another using Lichtblick message converter extensions."
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
  converter: (msg, event, globalVariables) => ({ x: msg.x, y: msg.y }),
});
```

- `fromSchemaName`: Source schema your data arrives as.
- `toSchemaName`: Target schema panels will receive when opting in.
- `converter(msg, event, globalVariables)`: Synchronous function. Return the converted value, or `undefined` to drop this message.

After registration, topics carrying `custom/Point2D` will advertise they are convertible to `foxglove.Point2` in the UI.
Message converters may access `globalVariables` in the context.

## Performance: latest-per-render-tick sampling

By default, every message on a subscribed topic is decoded and passed to your converter. For high-frequency snapshot topics, this can be expensive because many intermediate messages are decoded but never rendered.

When you set `supportsLatestPerRenderTick: true` in `registerMessageConverter`, you signal that your converter is **stateless** — it produces a correct result from any single message in isolation, with no dependency on previous messages. Lichtblick can then apply `latest-per-render-tick` sampling: only the newest raw message per topic per render window is decoded before being forwarded to your converter.

```ts
extensionContext.registerMessageConverter({
  fromSchemaName: "custom/SensorSnapshot",
  toSchemaName: "foxglove.SceneUpdate",
  supportsLatestPerRenderTick: true, // safe to skip intermediate messages
  converter: (msg) => buildScene(msg),
});
```

**When to set `supportsLatestPerRenderTick: true`:**

- Your converter derives output **only from the current message** — it holds no accumulated state across messages (no running totals, no history buffers).
- Skipping intermediate messages does not affect the correctness of the result.

**When to leave it `false` (default):**

- Your converter builds cumulative state (e.g., appending to a list or tracking previous values).
- Every message must be processed to produce a correct output.

:::note
Panels request sampling via the [`sampling` subscription option](./panel-extension-context). The optimization only activates when **both** the panel opts in **and** the converter declares `supportsLatestPerRenderTick: true`. If either side does not opt in, the topic falls back to full pass-through decoding.
:::

## Converter message input shape

Message converters receive already-deserialized, JSON-like JavaScript objects, not raw encoding-native runtime objects.
The exact structure of those objects depends on how the topic was decoded: message encoding, schema definition, and decoder-specific mapping behavior all matter.

Because of that, it is not guaranteed that two data sources with the same schema name but different encodings will produce the same converter input shape.
Potential differences include field naming, default handling, numeric representation, binary field mapping, and presence semantics.

With evolving schemas (for example when a converter targets a newer schema version than the data source), version mismatches can cause fields expected by converter types to be missing at runtime.

In short, converters should treat input as decoder-dependent and explicitly validate assumptions when strict compatibility is required.

## Using global variables

The `converter` function receives `globalVariables` as its third parameter, allowing you to use user-defined variables to customize conversion behavior:

```ts
extensionContext.registerMessageConverter({
  fromSchemaName: "custom/Point2D",
  toSchemaName: "foxglove.Point2",
  converter: (msg, event, globalVariables) => {
    const maxDistance = globalVariables.maxPointDistance ?? Infinity;
    const distance = Math.sqrt(msg.x ** 2 + msg.y ** 2);
    
    // Skip points beyond threshold
    if (distance > maxDistance) {
      return undefined;
    }
    
    return { x: msg.x, y: msg.y };
  },
});
```

**Important considerations:**

- **Optional**: `globalVariables` does not need to be used in every converter.
- **Read-only**: `globalVariables` is immutable within converters.
- **Performance**: Access is fast, but avoid complex computations based on variables that change frequently.
- **Defaults**: Always provide fallback values since variables may be undefined.
- **Type safety**: Global variables are typed as `Readonly<Record<string, VariableValue>>` where `VariableValue` can be strings, numbers, booleans, or nested objects.

Users can set global variables through the Variables panel in the Lichtblick UI or through other extensions.

#### Emitting alerts from a message converter

Use `context.emitAlert()` inside the `converter` function to raise an alert. An optional `alertId` string can be provided to deduplicate repeated alerts of the same kind — only the most recent alert for a given ID is shown.

```ts
import {
  ExtensionContext,
  MessageConverterAlert,
  MessageConverterContext,
} from "@lichtblick/suite";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerMessageConverter({
    fromSchemaName: "custom/SensorData",
    toSchemaName: "foxglove.SceneUpdate",
    converter: (msg: unknown, _event: unknown, _globalVariables?: unknown, context?: MessageConverterContext) => {
      const data = msg as { value: number };

      if (data.value < 0) {
        const alert: MessageConverterAlert = {
          severity: "warn",
          message: "Sensor value out of expected range",
          tip: "Check the sensor calibration or data source configuration.",
          error: new Error(`Received negative value: ${data.value}`),
        };
        // "range-check" deduplicates this alert — only the latest is shown
        context?.emitAlert(alert, "range-check");
        return undefined;
      }

      return { entities: [], deletions: [] };
    },
  });
}
```

**Important considerations:**

- **Manual alert management**: The extension developer is responsible for deciding when to emit alerts, what severity to use, and how to tag them with `alertId` for deduplication. Choose meaningful IDs and messages to help users troubleshoot.
- **Exception handling**: If the converter throws an exception, Lichtblick will automatically catch it and raise an error alert. However, explicitly catching errors and calling `emitAlert()` gives the extension developer more control over the message, severity, and tip shown to the user.
- **Performance**: Avoid emitting alerts on every message if the same issue persists. Use `alertId` to deduplicate so only one alert appears for repeated occurrences of the same problem.

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
