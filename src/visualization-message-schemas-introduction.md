# Message Schemas

Lichtblick relies on structured message formats to ensure accurate data visualization and processing. By adhering to Lichtblick's schema standards, users can leverage the platform's robust visualization tools effectively.

## Supported Schema Formats
Lichtblick supports a variety of message formats, enabling seamless integration with diverse data sources. The supported formats include:

- Protobuf
- JSON Schema
- ROS 1
- ROS 2
- TypeScript
- FlatBuffers

If your existing message formats differ from these, Lichtblick provides tools to convert them into compatible schemas using a message conversion extension.

### Working with Protobuf and JSON Schema

To use Protobuf or JSON Schema with Lichtblick, follow these steps:

1. **Protobuf**: Include the necessary `.proto` files in your project. These files can be used to publish data via a WebSocket connection or log data into an MCAP file.
2. **JSON Schema**: Similarly, copy the required `.json` schema files into your project.

**Note on Protobuf Time Formats**: When using `google.protobuf.Timestamp` or `google.protobuf.Duration`, Lichtblick represents time values with `sec` and `nsec` fields (instead of `seconds` and `nanos`). This ensures consistency across time and duration formats in user scripts, message converters, and other platform components.

For JSON Schema integration, you can import schemas directly using the `@lichtblick/schemas` npm package:

```typescript
import { CompressedImage } from "@lichtblick/schemas/jsonschema";
```

Lichtblick also offers WebSocket libraries for real-time data handling in Python, JavaScript, and C++, as well as MCAP writers for logging pre-recorded datasets. For a practical example, refer to our blog post on **Recording Robotic Data with MCAP**, which demonstrates how to use the MCAP C++ writer to log Protobuf data.

### Schemaless JSON Support

Lichtblick supports schemaless JSON messages through MCAP. To send JSON data without a schema:

1. Set the channel's message encoding to `json`.
2. Assign the schema ID as `0` to indicate no associated schema.

For more details, consult the [MCAP Specification on Channels](https://mcap.dev/spec#channel-op0x04).


## ROS Integration

Lichtblick provides dedicated ROS message packages for both ROS 1 and ROS 2. To integrate:

1. Install the appropriate package for your ROS version:
```sh
sudo apt install ros-noetic-lichtblick-msgs # For ROS 1
```
```sh
sudo apt install ros-galactic-lichtblick-msgs # For ROS 2
```

2. Import the necessary schemas into your ROS project to begin publishing data:

```python
from lichtblick_msgs.msg import Vector2

...
msg = Vector2()
msg.x = 0.5
msg.y = 0.7
```

## TypeScript Integration

Lichtblick schemas can be imported as TypeScript types, enabling type-checking and message validation. Here’s how to use them:

1. **In User Scripts**: Specify the schema using `Message<"lichtblick.[SchemaName]">` in the User Scripts panel:

```typescript
import { Input, Message } from "./types";

type Output = Message<"lichtblick.Point2">;

export const inputs = ["/input/topic"];
export const output = "/studio_script/output_topic";

export default function script(event: Input<"/input/topic">): Output {
  return { x: 1, y: 2 };
}
```

2. **In TypeScript Projects**: Import types directly from the `@lichtblick/schemas` npm package:

```typescript
import { Point2 } from "@lichtblick/schemas";

const myImage: Point2 = { x: 1, y: 2 };
```

These types are compatible with JavaScript WebSocket or MCAP projects and can be used when writing custom data transformation scripts within Lichtblick's User Scripts panel.