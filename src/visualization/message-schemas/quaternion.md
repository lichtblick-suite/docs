# Quaternion

A [quaternion](https://eater.net/quaternions) representing a rotation in 3D.

## Parent schema

<!--TODO: Link missing documentation when available-->
`Quaternion` appears in the following message schemas: [`FrameTransform`]() and [`Pose`](./pose.md).


## Schema 

| Field | Type                         | Description                            |
|-------|-------------------------------|---------------------------------------|
| `x`   | [`float64`](#)                | X component of the quaternion.        |
| `y`   | [`float64`](#)                | Y component of the quaternion.        |
| `z`   | [`float64`](#)                | Z component of the quaternion.        |
| `w`   | [`float64`](#)                | W component of the quaternion.        |


## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding     | Schema                                   |
|--------------|------------------------------------------|
| ROS 1        | [`foxglove_msgs/Quaternion`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Quaternion.html)          |
| ROS 2        | [`foxglove_msgs/msg/Quaternion`](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Quaternion.html)      |
| JSON         | [`foxglove.Quaternion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Quaternion.json)        |
| Protobuf     | [`foxglove.Quaternion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Quaternion.proto)   |
| FlatBuffers  | [`foxglove.Quaternion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Quaternion.fbs)         |
| OMG IDL      | [`foxglove::Quaternion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Quaternion.idl)   |
