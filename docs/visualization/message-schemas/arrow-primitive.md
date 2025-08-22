# ArrowPrimitive

Represents a visual arrow used to indicate direction or orientation in 3D space.

## Panel support

<!--TODO: Link missing documentation when available-->

`ArrowPrimitive` can be displayed in the following panels: [3D](#).

## Schema

| Field            | Type                                     | Description                                                                                           |
| ---------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `pose`           | [`Pose`](./pose.md)                      | Defines the tail position and direction of the arrow. A neutral rotation points it along the +X axis. |
| `shaft_length`   | [`float64`](./built-in-types.md#float64) | Total length of the arrow's shaft segment.                                                            |
| `shaft_diameter` | [`float64`](./built-in-types.md#float64) | Diameter of the cylindrical shaft section.                                                            |
| `head_length`    | [`float64`](./built-in-types.md#float64) | Length of the arrowhead portion.                                                                      |
| `head_diameter`  | [`float64`](./built-in-types.md#float64) | Diameter of the arrowhead base.                                                                       |
| `color`          | [`Color`](./color.md)                    | Single color applied to the entire arrow, including shaft and head.                                   |

## Reference implementations

Foxglove schemas are designed to be cross-platform and are compatible with multiple encoding formats. Use the exact schema names listed below to ensure compatibility:

| Encoding    | Schema                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ArrowPrimitive.msg)        |
| ROS 2       | [`foxglove_msgs/msg/ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ArrowPrimitive.msg)    |
| JSON        | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ArrowPrimitive.json)      |
| Protobuf    | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ArrowPrimitive.proto) |
| FlatBuffers | [`foxglove.ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ArrowPrimitive.fbs)       |
| OMG IDL     | [`foxglove::ArrowPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ArrowPrimitive.idl) |
