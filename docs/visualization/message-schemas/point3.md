# Point3

A point representing a position in 3D space.

## Parent schema

`Point3` appears in the following message schemas: [`LinePrimitive`](./line-primitive.md) and [`TriangleListPrimitive`](./triangle-list-primitive.md).

## Schema

| Field | Type                                     | Description            |
| ----- | ---------------------------------------- | ---------------------- |
| `x`   | [`float64`](./built-in-types.md#float64) | X coordinate position. |
| `y`   | [`float64`](./built-in-types.md#float64) | Y coordinate position. |
| `z`   | [`float64`](./built-in-types.md#float64) | Z coordinate position. |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/Point3`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/Point.html)              |
| ROS 2       | [`foxglove_msgs/msg/Point3`](https://docs.ros2.org/galactic/api/geometry_msgs/msg/Point.html)               |
| JSON        | [`foxglove.Point3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point3.json)      |
| Protobuf    | [`foxglove.Point3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point3.proto) |
| FlatBuffers | [`foxglove.Point3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point3.fbs)       |
| OMG IDL     | [`foxglove::Point3`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point3.idl) |
