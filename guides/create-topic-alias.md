---
sidebar_position: 4
---

# Create Topic Alias

Build a topic alias extension to create alternative names for topics, simplifying complex hierarchies or standardizing naming conventions.

Topic aliases are useful for standardizing naming across robots, simplifying complex hierarchies, creating semantic names, and supporting legacy configurations.

## Prerequisites

See the [Getting Started](./#getting-started) section for extension setup requirements.

## Basic implementation

```typescript
import { ExtensionContext } from "@lichtblick/suite";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerTopicAliases(({ baseTopics, globalVariables }) => {
    const aliases: TopicAlias[] = [];

    // Simplify camera topics
    const cameraTopics = baseTopics.filter(
      (topic) =>
        topic.name.includes("/cameras/") && topic.name.endsWith("/image_raw")
    );

    cameraTopics.forEach((topic) => {
      if (topic.name.includes("/front/")) {
        aliases.push({
          name: "/camera/front/image",
          sourceTopicName: topic.name,
        });
      }
    });

    // Simplify IMU topics
    const imuTopics = baseTopics.filter(
      (topic) => topic.name.includes("/imu/") && topic.name.endsWith("/data")
    );

    if (imuTopics.length > 0) {
      aliases.push({
        name: "/imu/data",
        sourceTopicName: imuTopics[0].name,
      });
    }

    return aliases;
  });
}
```

### Multi-environment support

Different aliases for different deployment environments using globalVariables:

```typescript
export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerTopicAliases(({ baseTopics, globalVariables }) => {
    const aliases: TopicAlias[] = [];
    const environment = globalVariables.ROBOT_ENV || "development";

    if (environment === "production") {
      // Production aliases with full names
      const prodCamera = baseTopics.find(
        (topic) => topic.name === "/production/sensors/front_camera/image_raw"
      );
      if (prodCamera) {
        aliases.push({
          name: "/camera/front",
          sourceTopicName: prodCamera.name,
        });
      }
    } else {
      // Development aliases with simulator topics
      const devCamera = baseTopics.find(
        (topic) => topic.name === "/gazebo/robot/camera/image"
      );
      if (devCamera) {
        aliases.push({
          name: "/camera/front",
          sourceTopicName: devCamera.name,
        });
      }
    }

    return aliases;
  });
}
```

## Building and testing

Follow the standard [extension building process](./introduction.md#building-and-testing).

Both original and aliased topics will appear in the topic list, and panels can subscribe to either version.

Your topic alias extension is now ready to simplify and organize your data source topics!

### Testing your aliases

1. Package and install your extension in Lichtblick
2. Load a data source that contains your original topic
3. Check that both original and aliased topics appear in the topic list
4. Verify that panels can subscribe to both versions
5. Confirm that the aliased topics show the same data as the originals

## Best practices

- **Topic validation**: Always check if topics exist in baseTopics before creating aliases
- **Descriptive names**: Make alias names descriptive and intuitive
- **Avoid conflicts**: Ensure alias names don't conflict with existing topics
- **Documentation**: Document your aliasing scheme for team members

```typescript
// Good: Check topic exists and use descriptive name
const cameraTopic = baseTopics.find(
  (topic) => topic.name === "/robot/camera/front/image_raw"
);
if (cameraTopic) {
  aliases.push({
    name: "/camera/front/image",
    sourceTopicName: cameraTopic.name,
  });
}

// Avoid: Creating aliases without validation
aliases.push({
  name: "/s/c/f/img",
  sourceTopicName: "/might/not/exist",
});
```

## Next steps

- Learn about [message schemas](../docs/visualization/message-schemas) to understand data types
- Explore [custom panels](../docs/visualization/panels/panels-introduction) that can use your aliased topics
- Check out [message converters](../docs/extensions/extension-api/message-converters) for transforming message formats
- Read about [live data connections](../docs/connecting-to-data/live-data) to understand data sources

Your topic alias extension is now ready to simplify and organize your data source topics for better usability in Lichtblick!
