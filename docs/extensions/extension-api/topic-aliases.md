---
sidebar_position: 8
---

# Topic Aliases

Topic aliases let your extension expose friendlier or standardized topic names without changing the data source. Panels can subscribe to an alias, and Lichtblick will route it to the real source topic.

Register aliases in `activate()` using your [ExtensionContext](./extension-context):

```ts
extensionContext.registerTopicAliases(({ topics, globalVariables }) => {
  // return an array of { name, sourceTopicName }
  return [];
});
```

## Types

```ts
type BaseTopic = { name: string; schemaName?: string };
type TopicAlias = { name: string; sourceTopicName: string };

type TopicAliasFunction = (args: {
  topics: BaseTopic[];
  globalVariables: Readonly<Record<string, unknown>>; // see Variables docs for full type
}) => TopicAlias[];
```

## Examples

### 1) Simple rename

Map a long source name to a short one.

```ts
extensionContext.registerTopicAliases(({ topics }) => {
  const exists = topics.some((t) => t.name === "/robot/pose");
  return exists ? [{ name: "/pose", sourceTopicName: "/robot/pose" }] : [];
});
```

### 2) Conditional alias via variable

Toggle an alias using a global variable (set in the Variables UI or programmatically).

```ts
extensionContext.registerTopicAliases(({ topics, globalVariables }) => {
  const enabled = globalVariables["useShortLaser"] === true;
  const src = "/sensors/laser/points";
  return enabled && topics.some((t) => t.name === src)
    ? [{ name: "/laser", sourceTopicName: src }]
    : [];
});
```

### 3) Prefix a namespace

Expose a namespaced view (e.g., `/sim/*`) without modifying source topics.

```ts
extensionContext.registerTopicAliases(({ topics }) => {
  const PREFIX = "/sim";
  return topics.map((t) => ({ name: `${PREFIX}${t.name}`, sourceTopicName: t.name }));
});
```

### 4) Schema-aware alias

Only alias topics with a specific schema.

```ts
extensionContext.registerTopicAliases(({ topics }) => {
  const targetSchema = "foxglove.Image";
  return topics
    .filter((t) => t.schemaName === targetSchema)
    .map((t) => ({ name: `/images${t.name}`, sourceTopicName: t.name }));
});
```

## Using aliases in panels

Panels subscribe to the alias name just like any topic (see [PanelExtensionContext](./panel-extension-context)):

```ts
context.subscribe([{ topic: "/pose" }]); // will read from /robot/pose
```

## Notes

- Aliases do not create new data — they are alternate names that resolve to existing topics.
- Avoid cycles or duplicates. If multiple extensions define the same alias name, the last loaded wins.
- Keep functions fast and deterministic; they run when topics or variables change.
- Combine with [message converters](./message-converters): panels can also set `convertTo` on an aliased topic.

