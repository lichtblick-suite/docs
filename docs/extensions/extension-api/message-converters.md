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
  converter: (msg, event, globalVariables) => ({ x: msg.x, y: msg.y }),
});
```

- `fromSchemaName`: Source schema your data arrives as.
- `toSchemaName`: Target schema panels will receive when opting in.
- `converter(msg, event, globalVariables)`: Synchronous function. Return the converted value, or `undefined` to drop this message.

After registration, topics carrying `custom/Point2D` will advertise they are convertible to `foxglove.Point2` in the UI.
Message converters may access `globalVariables` in the context. 

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

- **Optional**: `globalVariables` does not need to be used in every converter.
- **Read-only**: `globalVariables` is immutable within converters.
- **Performance**: Access is fast, but avoid complex computations based on variables that change frequently.
- **Defaults**: Always provide fallback values since variables may be undefined.
- **Type safety**: Global variables are typed as `Readonly<Record<string, VariableValue>>` where `VariableValue` can be strings, numbers, booleans, or nested objects.

Users can set global variables through the Variables panel in the Lichtblick UI or through other extensions.

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