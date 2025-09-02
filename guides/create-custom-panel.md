---
sidebar_position: 2
---

# Create Custom Panel

Build a custom panel extension to visualize and interact with your robotics data in ways that best suit your workflow.

Custom panels are ideal when your visualization or interaction needs are bespoke and not easily solved via one of the built-in panels. They allow you to subscribe to messages on various topics, advertise and publish messages, and display information in whatever form is most relevant for your use case.

## Prerequisites

See the [Getting Started](./#getting-started) section for extension setup requirements.

## Project structure

Your extension project will have the following structure:

```
my-custom-panel/
├── src/
│   ├── ExamplePanel.tsx    # Main panel component
│   └── index.ts           # Extension entry point
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Understanding the entry point

The `index.ts` file is the entry point for your extension. It must export an `activate` function that accepts a single `extensionContext` argument:

```typescript
import { ExtensionContext } from "@lichtblick/suite";
import { initExamplePanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({
    name: "my-custom-panel",
    initPanel: initExamplePanel,
  });
}
```

## Building your panel component

The main panel component is a React component that receives a `PanelExtensionContext`. Here's a basic structure:

```tsx
import { MessageEvent, PanelExtensionContext, Topic } from "@lichtblick/suite";
import { useEffect, useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";

type Props = {
  context: PanelExtensionContext;
};

function MyCustomPanel({ context }: Props): JSX.Element {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [messages, setMessages] = useState<MessageEvent<unknown>[]>([]);

  const [renderDone, setRenderDone] = useState<(() => void) | undefined>();

  // Subscribe to topics and handle updates
  useLayoutEffect(() => {
    context.onRender = (renderState, done) => {
      setRenderDone(() => done);

      if (renderState.topics) {
        setTopics(renderState.topics);
      }

      if (renderState.currentFrame) {
        setMessages(renderState.currentFrame);
      }
    };

    context.watch("topics");
    context.watch("currentFrame");
  }, [context]);

  // Signal that render is complete
  useEffect(() => {
    renderDone?.();
  }, [renderDone]);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>My Custom Panel</h3>

      <div style={{ marginTop: "1rem" }}>
        <h4>Latest Messages ({messages.length})</h4>
        <h5>Topics ({topics.length})</h5>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "0.5rem",
            maxHeight: "400px",
            overflow: "auto",
          }}
        >
          {messages.length > 0
            ? JSON.stringify(messages[messages.length - 1], null, 2)
            : "No messages received"}
        </pre>
      </div>
    </div>
  );
}

export function initExamplePanel(context: PanelExtensionContext): () => void {
  const root = createRoot(context.panelElement);
  root.render(<MyCustomPanel context={context} />);

  return () => {
    root.unmount();
  };
}
```

## Advanced features

### Publishing messages

Your panel can also publish messages to topics:

## Building and testing

Follow the standard [extension building process](./#building-and-testing).

To test your panel: add it from the panel library after installing your extension.

## Best practices

- **Performance**: Avoid expensive operations in the render loop. Use `useMemo` and `useCallback` for optimization.
- **Error handling**: Wrap your panel logic in error boundaries to prevent crashes.
- **Configuration**: Make your panel configurable so users can adapt it to their needs.
- **Accessibility**: Follow React accessibility guidelines for better usability.

## Next steps

- Explore the [Extension API reference](../docs/extensions/extension-api/introduction) for more advanced features
- Learn about [message schemas](../docs/visualization/message-schemas) to work with different data types
- Check out [variables](../docs/visualization/variables) for dynamic panel configuration

Your custom panel is now ready to visualize and interact with your robotics data in exactly the way your workflow requires!
