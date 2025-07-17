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
| ROS 1       | [`foxglove_msgs/CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CubePrimitive.msg) |
| ROS 2       | [`foxglove_msgs/msg/CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CubePrimitive.msg) |
| JSON        | [`foxglove.CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CubePrimitive.json) |
| Protobuf    | [`foxglove.CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CubePrimitive.proto) |
| FlatBuffers | [`foxglove.CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CubePrimitive.fbs) |
| OMG IDL     | [`foxglove::CubePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CubePrimitive.idl) |
