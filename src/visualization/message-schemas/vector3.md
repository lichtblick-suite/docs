# Vector3

A vector in 3D space that represents a direction only.

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

| Encoding    | Schema                      |
| ----------- | --------------------------- |
| ROS 1       | `geometry_msgs/Vector3`     |
| ROS 2       | `geometry_msgs/msg/Vector3` |
| JSON        | `foxglove.Vector3`          |
| Protobuf    | `foxglove.Vector3`          |
| FlatBuffers | `foxglove.Vector3`          |
| OMG IDL     | `foxglove::Vector3`         |
