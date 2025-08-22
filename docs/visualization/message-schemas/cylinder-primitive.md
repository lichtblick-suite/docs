# CylinderPrimitive

A primitive representing a cylinder, elliptic cylinder, or truncated cone.

## Parent schema

`CylinderPrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field          | Type                                     | Description                                                                                                   |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `pose`         | [`pose`](./pose.md)                      | Position of the center of the cylinder and its orientation. The flat face(s) are perpendicular to the z-axis. |
| `size`         | [`Vector3`](./vector3.md)                | Size of the cylinder's bounding box.                                                                          |
| `bottom_scale` | [`float64`](./built-in-types.md#float64) | Ratio (0-1) of the diameter of the cylinder's bottom face (min z) relative to the bounding box bottom.        |
| `top_scale`    | [`float64`](./built-in-types.md#float64) | Ratio (0-1) of the diameter of the cylinder's top face (max z) relative to the bounding box top.              |
| `color`        | [`Color`](./color.md)                    | Color of the cylinder.                                                                                        |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CylinderPrimitive.msg)        |
| ROS 2       | [`foxglove_msgs/msg/CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CylinderPrimitive.msg)    |
| JSON        | [`foxglove.CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CylinderPrimitive.json)      |
| Protobuf    | [`foxglove.CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CylinderPrimitive.proto) |
| FlatBuffers | [`foxglove.CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CylinderPrimitive.fbs)       |
| OMG IDL     | [`foxglove::CylinderPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CylinderPrimitive.idl) |
