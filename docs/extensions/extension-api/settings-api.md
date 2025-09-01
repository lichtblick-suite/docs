---
sidebar_position: 6
---

# Settings API

Use the Settings API to attach per-topic settings UI to [message converters](./message-converters) (scoped by panel type). This lets users adjust converter behavior directly from the panel sidebar with a [Settings Tree](./settings-tree).

## PanelSettings

The `PanelSettings<ExtensionSettings>` interface defines the structure for managing custom settings associated with message converters and panels. It allows users to define settings that can be dynamically applied to specific topics or schemas, enabling flexible configuration of message processing behavior.

### Type Parameter

- `ExtensionSettings`: Represents the type of the custom settings object. This is user-defined and should match the structure of the settings you want to configure.

### Properties

1. settings(config)

```typescript
settings: (config?: ExtensionSettings) => SettingsTreeNode;
```

- **Purpose**: Defines how the settings should be rendered in the settings UI.
- **Parameters:**

  - `config`: An optional object containing the current configuration values. Its type is inferred from the `defaultConfig` property.

- **Returns:** A `SettingsTreeNode` (see [Settings Tree](./settings-tree)) that describes the structure of the settings UI. This node will be merged with the settings tree for the associated topic (under the path `["topics", "__topic_name__"]`).

- **Example:**

```typescript
settings: (config) => ({
  fields: {
    threshold: {
      input: "number",
      value: config?.threshold,
      label: "Threshold Value",
    },
  },
}),
```

---

2. handler(action, config)

```typescript
handler: (action: SettingsTreeAction, config?: ExtensionSettings) => void;
```

- **Purpose**: Handles changes to the settings made by the user in the UI.
- **Parameters:**

  - `action`: A `SettingsTreeAction` object describing the user's action (e.g., updating a field).
  - `config`: A mutable object representing the current configuration. Modifying this object updates the state.

- **Behavior:**

  - This function is called after the default settings handler.
  - It allows you to validate or transform the settings before they are applied.

- **Example:**

```typescript
handler: (action, config) => {
  if (action.action === "update" && action.payload.path[1] === "threshold") {
    // Ensure threshold is within valid range
    config.threshold = Math.max(0, Math.min(1, action.payload.value));
  }
},
```

---

3. defaultConfig

```typescript
defaultConfig?: ExtensionSettings;
```

- **Purpose:** Provides default values for the settings. These values are used when no configuration is explicitly set.
- **Type:** Must match the `ExtensionSettings` type.

- **Example:**

```typescript
defaultConfig: {
  threshold: 0.5,
  enableFeature: true,
},
```

---

## Expected Behavior

When implementing this interface:

1. **Settings UI:** The `settings` function defines how the settings are displayed in the UI. It creates a settings tree node that is merged into the topic's settings.
2. **Configuration Management:** The `handler` function processes user interactions with the settings UI, allowing you to validate or transform the configuration.
3. **Defaults:** The `defaultConfig` provides initial values for the settings, ensuring the panel or converter has a valid configuration even if the user hasn't customized it.

## Outcomes

1. **Dynamic Settings UI:**

   - The `settings` defined in the settings function will appear in the UI under the associated topic.
   - Users can modify these settings, and changes will be handled by the `handler` function.

2. **Custom Configuration:**

   - The `handler` function allows you to enforce constraints or transform values before they are applied.
   - For example, you can ensure a threshold value stays within a valid range.

3. **Default Behavior:**
   - If no custom configuration is provided, the `defaultConfig` values are used.
   - This ensures the panel or converter works out of the box without requiring user input.

---

## Example

```typescript
type Schema1Schema = {
  value: number;
};

type Schema2Schema = {
  value: number;
};

// Define the configuration type
type Config = { threshold: number };

// Helper function to cast PanelSettings to the correct type
const generatePanelSettings = <T>(obj: PanelSettings<T>) =>
  obj as PanelSettings<unknown>;

export function activate(extensionContext: ExtensionContext): void {
  // Register the message converter
  extensionContext.registerMessageConverter({
    fromSchemaName: "schema1",
    toSchemaName: "schema2",

    converter: (msg: Schema1Schema, event): Schema2Schema | undefined => {
      // Access the threshold setting for the current topic
      const config = event.topicConfig as Config | undefined;
      const threshold = config?.threshold;

      // Filter messages based on the threshold
      if (threshold && msg.value > threshold) {
        return { value: msg.value }; // Forward the message if it exceeds the threshold
      }

      return undefined; // Ignore the message if it doesn't meet the threshold
    },
    // Define the settings for the threshold
    panelSettings: {
      ThresholdPanel: generatePanelSettings({
        settings: (config) => ({
          fields: {
            threshold: {
              label: "Threshold Value",
              input: "number",
              value: config?.threshold,
              placeholder: "Enter a threshold value",
            },
          },
        }),

        handler: (action, config) => {
          if (config == undefined) {
            return;
          }

          // Update the threshold setting when the user changes it in the UI
          if (
            action.action === "update" &&
            action.payload.path[2] === "threshold"
          ) {
            config.threshold = action.payload.value as number;
          }
        },
        defaultConfig: {
          threshold: 0.5, // Default threshold value
        },
      }),
    },
  });
}
```

## Use Case

This interface is typically used when registering a message converter:

```typescript
extensionContext.registerMessageConverter({
  fromSchemaName: "schema1",
  toSchemaName: "schema2",

  converter: (msg: Schema1Schema, event): Schema2Schema | undefined => {

      // Access the threshold setting for the current topic
      const config = event.topicConfig as Config | undefined;
      const threshold = config?.threshold;

      // Filter messages based on the threshold
      if (msg.value > threshold) {
        return { value: msg.value }; // Forward the message if it exceeds the threshold
      }

      return undefined; // Ignore the message if it doesn't meet the threshold
},
```

---

## Summary

The `PanelSettings<ExtensionSettings>` interface provides a structured way to:

1. Define custom settings for panels or message converters.
2. Render these settings in the UI.
3. Handle user interactions with the settings.
4. Provide default values for the settings.

By implementing this interface, you enable users to configure their panel or converter dynamically, making it more flexible and adaptable to different use cases. In panels, render the editor via `updatePanelSettingsEditor` on the [PanelExtensionContext](./panel-extension-context).

