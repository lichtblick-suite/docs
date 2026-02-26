# Vector2

A directional vector defined in two-dimensional space.

## Parent schema

`Vector2` appears in the [`Grid`](./grid.md) message schema.

## Schema

| Field | Type                                     | Description         |
| ----- | ---------------------------------------- | ------------------- |
| `x`   | [`float64`](./built-in-types.md#float64) | x coordinate length |
| `y`   | [`float64`](./built-in-types.md#float64) | y coordinate length |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                      |
| ----------- | --------------------------- |
| ROS 1       | [`foxglove_msgs/Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Vector2.msg) |
| ROS 2       | [`foxglove_msgs/msg/Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Vector2.msg) |
| JSON        | [`foxglove.Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Vector2.json) |
| Protobuf    | [`foxglove.Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Vector2.proto) |
| FlatBuffers | [`foxglove.Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Vector2.fbs) |
| OMG IDL     | [`foxglove::Vector2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Vector2.idl) |
