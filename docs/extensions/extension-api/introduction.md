# Extension API

The [`@lichtblick/suite`](https://www.npmjs.com/package/@lichtblick/suite) package provides type definitions and helpers for building Lichtblick extensions.

### Getting Started

Your extension must export an `ExtensionModule` with an `activate()` function. This serves as the entry point for your extension and gives access to extension registration capabilities.

```ts
export function activate(extensionContext: ExtensionContext): void {
  // Register panels, schema converters, topic aliases, or data loaders here
}
```

---

### Custom Panels

Custom panels let you define your own visualization components using React or JavaScript. Use your `ExtensionContext` to register a panel:

```ts
extensionContext.registerPanel({
  name: "My Custom Panel",
  initPanel, // TODO link to INIT PANEL
});
```

---

### Schema Converters

Schema converters enable your extension to map custom messages to built-in Lichtblick schemas:

```ts
extensionContext.registerMessageConverter({
  fromSchemaName: "custom_msgs/Point_2",
  toSchemaName: "foxglove.Point2",
  converter: (message: any) => {
    return {
      x: message.point.x,
      y: message.point.y,
    };
  },
});
```

---

### Topic Aliases

Simplify topic names by registering aliases:

```ts
extensionContext.registerTopicAliases((topics, globalVariables) => {
  return [
    {
      name: "/new/topic",
      sourceTopicName: "existent/topic",
    },
  ];
});
```

Now, panels can subscribe to either original or aliased names.

---

### Camera Models

Simplify topic names by registering aliases:

```ts
extensionContext.registerTopicAliases((topics, globalVariables) => {
  return [
    {
      name: "/new/topic",
      sourceTopicName: "existent/topic",
    },
  ];
});
```

Now, panels can subscribe to either original or aliased names.

---

### Other Types

While the full interface suite includes other advanced types and helpers (e.g., for panel settings trees, Subscription objects, or layout actions), the core functionality is encompassed by the modules above.

---

### Summary Table

| Feature          | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **activate()**   | Main entry point for your extension            |
| **Panels**       | Custom UI components and visualizations        |
| **Converters**   | Transform your custom data into native schemas |
| **Aliases**      | Normalize or simplify topic names              |
| **CameraModels** | Add custom image distortions                   |
