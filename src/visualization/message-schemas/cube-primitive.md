# CubePrimitive

A primitive representing a cube or rectangular prism.

## Parent schema

`CubePrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field   | Type                      | Description                                             |
| ------- | ------------------------- | ------------------------------------------------------- |
| `pose`  | [`pose`](./pose.md)       | Position of the center of the cube and its orientation. |
| `size`  | [`Vector3`](./vector3.md) | Size of the cube along each axis.                       |
| `color` | [`Color`](./color.md)     | Color of the cube.                                      |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                            |
| ----------- | --------------------------------- |
| ROS 1       | `foxglove_msgs/CubePrimitive`     |
| ROS 2       | `foxglove_msgs/msg/CubePrimitive` |
| JSON        | `foxglove.CubePrimitive`          |
| Protobuf    | `foxglove.CubePrimitive`          |
| FlatBuffers | `foxglove.CubePrimitive`          |
| OMG IDL     | `foxglove::CubePrimitive`         |
