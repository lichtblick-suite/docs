# Vector3

A directional vector defined in three-dimensional space.

## Parent schemas

`Vector3` appears in the [`CubePrimitive`](./cube-primitive.md), [`CylinderPrimitive`](./cylinder-primitive.md), [`FrameTransform`](./frame-transform.md), [`ModelPrimitive`](./model-primitive.md), [`Pose`](./pose.md), and [`SpherePrimitive`](./sphere-primitive.md) message schemas.

## Schema

| Field | Type                                     | Description         |
| ----- | ---------------------------------------- | ------------------- |
| `x`   | [`float64`](./built-in-types.md#float64) | x coordinate length |
| `y`   | [`float64`](./built-in-types.md#float64) | y coordinate length |
| `z`   | [`float64`](./built-in-types.md#float64) | z coordinate length |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`geometry_msgs/Vector3`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Vector3.html)             |
| ROS 2       | [`geometry_msgs/msg/Vector3`](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Vector3.html)              |
| JSON        | [`foxglove.Vector3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Vector3.json)      |
| Protobuf    | [`foxglove.Vector3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Vector3.proto) |
| FlatBuffers | [`foxglove.Vector3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Vector3.fbs)       |
| OMG IDL     | [`foxglove::Vector3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Vector3.idl) |
