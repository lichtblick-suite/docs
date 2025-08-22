# Pose

A position and orientation for an object or reference frame in 3D space.

## Parent schema

`Pose` appears in the following message schemas: [`ArrowPrimitive`](./arrow-primitive.md), [`CubePrimitive`](./cube-primitive.md), [`CylinderPrimitive`](./cylinder-primitive.md), [`Grid`](./grid.md), [`LaserScan`](./laser-scan.md), [`LinePrimitive`](./line-primitive.md), [`ModelPrimitive`](./model-primitive.md), [`PointCloud`](./point-cloud.md), [`PoseInFrame`](./pose-in-frame.md), [`PosesInFrame`](./poses-in-frame.md), [`SpherePrimitive`](./sphere-primitive.md), [`TextPrimitive`](./text-primitive.md), and [`TriangleListPrimitive`](./triangle-list-primitive.md).

## Schema

| Field         | Type                            | Description                                       |
| ------------- | ------------------------------- | ------------------------------------------------- |
| `position`    | [`Vector3`](./vector3.md)       | 3D point representing the position in space.      |
| `orientation` | [`Quaternion`](./quaternion.md) | Quaternion representing the orientation in space. |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/Pose`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Pose.html)             |
| ROS 2       | [`foxglove_msgs/msg/Pose`](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Pose.html)              |
| JSON        | [`foxglove.Pose`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Pose.json)      |
| Protobuf    | [`foxglove.Pose`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Pose.proto) |
| FlatBuffers | [`foxglove.Pose`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Pose.fbs)       |
| OMG IDL     | [`foxglove::Pose`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Pose.idl) |
