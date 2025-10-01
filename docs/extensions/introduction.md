# Extensions

Extend Lichtblick's capabilities with custom extensions to better support your team's unique workflows. Build bespoke panels, convert custom messages to Lichtblick-supported schemas, and alias topic names for easy visualization.

Once you've developed and installed your extension, you can open your app settings to display all available and installed extensions.

---

## Custom panels

While Lichtblick offers a suite of built-in panels for robotics data visualization and debugging, many users have domain-specific needs that the out-of-the-box offering does not address.

Custom panel extensions allow you to build an entire panel. Custom panels can subscribe to messages on various topics, advertise and publish, and display the message information in whatever form is most relevant for your workflow.

Custom panels are ideal when your visualization or interaction needs are bespoke and not easily solved via one of the built-in panels.

**Links and resources**

- Guide: [Create custom panel](/guides/create-custom-panel)

---

## Message converters

Message converter extensions allow you to convert messages from one schema to another. They are ideal when there is a 1:1 relationship between some internal schema and a well-known Lichtblick schema.

For example, converting a custom GPS message to `lichtblick.LocationFix` for visualization in the Map panel.

|                     | Message Converter                               |
| ------------------- | ----------------------------------------------- |
| **Use case**        | Visualize custom messages using built-in panels |
| **Conversion type** | 1:1 schema mapping                              |
| **Input source**    | Any schema                                      |
| **State handling**  | Stateless                                       |
| **Output**          | Well-known schema                               |

:::note

Message converters run on-demand only when the topic is subscribed to by a panel.

:::

**Links and resources**

- Guide: [Create message converter](/guides/create-message-converter)

---

## Topic aliases

Topic alias extensions allow you to alias topics in your data source to new topics. Lichtblick panels can subscribe to both the aliased topics and the original data source's topics.

---

**Links and resources**

- Guide: [Create Topic Aliases](/guides/create-topic-alias)

---

## Writing an extension

You can write extensions in JavaScript or TypeScript and package them into `.foxe` files. You can distribute these files privately to your organization or publicly via the Lichtblick registry – installing extensions via the registry is only supported on the desktop app. A single extension can include multiple panels or converters.

Lichtblick provides a set of starter templates and commands in the `create-lichtblick-extension` package to simplify authoring an extension.

**Requirements**

- Node.js 18+

To set up your extension project, navigate to the directory where you'll want your source code to live and run the following command in a Terminal window:

```bash
npm init lichtblick-extension@latest my-extension-name
```

This will set up an extension directory structure. The entrypoint of your extension is the `index.ts` file.

The entrypoint script **MUST** export an `ExtensionModule` — that is, a single `activate` function which accepts a single `ExtensionContext` argument.

---

## API reference

- [`ExtensionContext`](./extension-api/extension-context.md)
- [`@lichtblick/suite`](https://www.npmjs.com/package/@lichtblick/suite)
