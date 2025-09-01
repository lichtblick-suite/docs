---
sidebar_position: 3
---

# Create Message Converter

Build a message converter extension to transform custom messages into Foxglove-supported schemas for visualization in built-in panels.

Message converters are ideal when there's a 1:1 relationship between your internal message format and a well-known Foxglove schema. For example, converting a custom GPS message to `foxglove.LocationFix` for visualization in the Map panel.

## Prerequisites

See the [Getting Started](./introduction.md#getting-started) section for extension setup requirements.

## Understanding the entry point

The `index.ts` file in your project's `src` folder is the entry point for your extension source code. It must export an `activate` function that accepts a single `extensionContext` argument of type `ExtensionContext`.

To register a message converter, call `registerMessageConverter` on the `extensionContext` argument with:

- The type `"schema"`
- The source schema name (`fromSchemaName`)
- The destination schema name (`toSchemaName`)
- The actual `converter` function

```typescript
import { ExtensionContext } from "@lichtblick/suite";

type CustomGPSMessage = {
  latitude: number;
  longitude: number;
};

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerMessageConverter({
    fromSchemaName: "custom_msgs/CustomGPS",
    toSchemaName: "foxglove.Point2",
    converter: (message: CustomGPSMessage) => {
      return {
        x: message.latitude * 1.0001,
        y: message.longitude * 1.0001,
      };
    },
  });
}
```

The `converter` function takes two arguments:

- **inputMessage**: The input topic message
- **messageEvent**: The full message event containing metadata like `publishTime`, `receiveTime`, and `topic` name

## Example: GPS message converter

Let's build a converter that transforms custom GPS messages to the `foxglove.LocationFix` schema for use with the Map panel.

Assume our data contains GPS messages of type `sensors.MyGps` with `lat` and `lon` fields:

```typescript
type MyGps = {
  lat: number;
  lon: number;
  altitude?: number;
  accuracy?: number;
  timestamp: number;
};
```

The [Map panel] requires messages in the `foxglove.LocationFix` format.

## More complex example: IMU converter

Here's a more complex example converting custom IMU data to `sensor_msgs.Imu`:

```typescript
type MyImu = {
  acceleration: { x: number; y: number; z: number };
  gyroscope: { x: number; y: number; z: number };
  orientation?: { w: number; x: number; y: number; z: number };
  timestamp: number;
};

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "sensors.MyImu",
    toSchemaName: "sensor_msgs.Imu",
    converter: (myImu: MyImu, messageEvent: MessageEvent<MyImu>) => {
      return {
        header: {
          stamp: {
            sec: Math.floor(myImu.timestamp),
            nsec: (myImu.timestamp % 1) * 1e9,
          },
          frame_id: messageEvent.topic.replace(/^\//, ""), // Remove leading slash
        },
        orientation: myImu.orientation ?? { w: 1, x: 0, y: 0, z: 0 },
        orientation_covariance: new Array(9).fill(-1), // Unknown covariance
        angular_velocity: myImu.gyroscope,
        angular_velocity_covariance: new Array(9).fill(-1),
        linear_acceleration: myImu.acceleration,
        linear_acceleration_covariance: new Array(9).fill(-1),
      };
    },
  });
}
```

## Multiple converters in one extension

You can register multiple converters in a single extension:

```typescript
export function activate(extensionContext: ExtensionContext) {
  // GPS converter
  extensionContext.registerMessageConverter({
    type: "schema",
    fromSchemaName: "sensors.MyGps",
    toSchemaName: "foxglove.LocationFix",
    converter: convertGps,
  });

  // IMU converter
  extensionContext.registerMessageConverter({
    type: "schema",
    fromSchemaName: "sensors.MyImu",
    toSchemaName: "sensor_msgs.Imu",
    converter: convertImu,
  });

  // Camera info converter
  extensionContext.registerMessageConverter({
    type: "schema",
    fromSchemaName: "sensors.MyCameraInfo",
    toSchemaName: "sensor_msgs.CameraInfo",
    converter: convertCameraInfo,
  });
}
```

## Building and testing

Follow the standard [extension building process](./#building-and-testing).

### Testing your converter

1. Install your extension in Lichtblick
2. Load data containing your custom message types
3. Add panels that support the target schema (e.g., Map panel for `foxglove.LocationFix`)
4. In the Raw Messages panel, click the schema dropdown and select your converted schema

:::note

Message converters run on-demand only when the topic is subscribed to by a panel.

:::

## Best practices

- **Performance**: Keep converters lightweight as they run for every message
- **Error handling**: Add proper error handling to prevent converter crashes:

```typescript
converter: (input: MyType, messageEvent) => {
  try {
    return {
      // conversion logic
    };
  } catch (error) {
    console.error("Conversion failed:", error);
    throw error;
  }
};
```

- **Type safety**: Define TypeScript types for your input and output schemas
- **Validation**: Validate input data before conversion when dealing with unreliable sources

## Next steps

- Explore more [message schemas](../docs/visualization/message-schemas)
- Learn about [custom panels](../docs/visualization/panels/panels-introduction) for more complex visualizations
- Check the [Extension API reference](../docs/extensions/extension-api/introduction) for advanced features

Your message converter is now ready to transform your custom messages for seamless visualization in Lichtblick's built-in panels!
