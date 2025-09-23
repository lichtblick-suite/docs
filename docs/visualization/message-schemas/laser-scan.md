# LaserScan

Single scan from a planar laser range-finder

## Panel support

<!--TODO: Link missing documentation when available-->

`LaserScan` can be used in the following panels: [3D](../panels/3d-panel.md) and [Image](#).

## Schema

| Field             | Type                                     | Description                                                                                                                              |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`            | [`LineType`](./enum-line-type.md)        | Type of line primitive to draw.                                                                                                          |
| `pose`            | [`Pose`](./pose.md)                      | The position and orientation of the line relative to the reference frame.                                                                |
| `thickness`       | [`float64`](./built-in-types.md#float64) | Thickness of the line.                                                                                                                   |
| `scale_invariant` | [`boolean`](./built-in-types.md#boolean) | If true, thickness is fixed in screen pixels. If false, thickness scales with distance in world units.                                   |
| `points`          | [`Point3[]`](./point3.md)                | Points along the line                                                                                                                    |
| `color`           | [`Color`](./color.md)                    | Single color applied to the entire line. Either this or `colors` must be provided.                                                       |
| `colors`          | [`Color[]`](./color.md)                  | Per-point colors along the line. If specified, must match the number of `points`. Either this or [`Color`](./color.md) must be provided. |
| `indices`         | [`uint32[]`](./built-in-types.md#uint32) | Optional index list into the `points` and `colors` arrays to reuse points and avoid duplication.                                         |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                            |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/LaserScan`](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/LaserScan.html)               |
| ROS 2       | [`foxglove_msgs/msg/LaserScan`](https://docs.ros2.org/foxy/api/sensor_msgs/msg/LaserScan.html)                    |
| JSON        | [`foxglove.LaserScan`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LaserScan.json)      |
| Protobuf    | [`foxglove.LaserScan`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LaserScan.proto) |
| FlatBuffers | [`foxglove.LaserScan`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LaserScan.fbs)       |
| OMG IDL     | [`foxglove::LaserScan`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LaserScan.idl) |
