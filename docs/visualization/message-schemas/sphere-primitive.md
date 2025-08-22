# SpherePrimitive

A primitive representing a sphere or ellipsoid.

## Parent schema

`SpherePrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field   | Type                      | Description                                               |
| ------- | ------------------------- | --------------------------------------------------------- |
| `pose`  | [`pose`](./pose.md)       | Position of the center of the sphere and its orientation. |
| `size`  | [`Vector3`](./vector3.md) | Size (diameter) of the sphere along each axis.            |
| `color` | [`Color`](./color.md)     | Color of the sphere.                                      |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                              |
| ----------- | ----------------------------------- |
| ROS 1       | [`foxglove_msgs/SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SpherePrimitive.msg) |
| ROS 2       | [`foxglove_msgs/msg/SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SpherePrimitive.msg) |
| JSON        | [`foxglove.SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SpherePrimitive.json) |
| Protobuf    | [`foxglove.SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SpherePrimitive.proto) |
| FlatBuffers | [`foxglove.SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SpherePrimitive.fbs) |
| OMG IDL     | [`foxglove::SpherePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SpherePrimitive.idl) |
