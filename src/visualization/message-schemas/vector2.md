# Vector2

A vector in 2D space that represents a direction only.

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
| ROS 1       | `foxglove_msgs/Vector2`     |
| ROS 2       | `foxglove_msgs/msg/Vector2` |
| JSON        | `foxglove.Vector2`          |
| Protobuf    | `foxglove.Vector2`          |
| FlatBuffers | `foxglove.Vector2`          |
| OMG IDL     | `foxglove::Vector2`         |
