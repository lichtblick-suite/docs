# SpherePrimitive

A primitive that describes a spherical or ellipsoidal shape.

## Parent schema

`SpherePrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field   | Type                      | Description                                               |
| ------- | ------------------------- | --------------------------------------------------------- |
| `pose`  | [`pose`](./pose.md)       | The location of the sphere's center and the rotation applied to it. |
| `size`  | [`Vector3`](./vector3.md) | The diameter of the sphere measured along each axis.                |
| `color` | [`Color`](./color.md)     | The color applied to the sphere.                                    |

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
