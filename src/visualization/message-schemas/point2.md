# Point2

A point representing a position in 2D space.

## Parent schema

`Point2` appears in the following message schemas: [`CircleAnnotation`](./circle-annotation.md), [`PointsAnnotation`](./points-annotation.md) and [`TextAnnotation`](./text-annotation.md).

## Schema

| Field | Type                                     | Description            |
| ----- | ---------------------------------------- | ---------------------- |
| `x`   | [`float64`](./built-in-types.md#float64) | X coordinate position. |
| `y`   | [`float64`](./built-in-types.md#float64) | Y coordinate position. |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Point2.msg)        |
| ROS 2       | [`foxglove_msgs/msg/Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Point2.msg)    |
| JSON        | [`foxglove.Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Point2.json)      |
| Protobuf    | [`foxglove.Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Point2.proto) |
| FlatBuffers | [`foxglove.Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Point2.fbs)       |
| OMG IDL     | [`foxglove::Point2`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Point2.idl) |
