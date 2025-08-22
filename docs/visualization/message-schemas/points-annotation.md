# PointsAnnotation

An array of points on a 2D image.

## Parent schema

`PointsAnnotation` appears in the following message schemas: [`ImageAnnotations`](./image-annotations.md).

## Schema

| Field            | Type                                                       | Description                                                                                                                             |
| ---------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`      | [`time`](./built-in-types.md#time)                         | Time when the annotation was created.                                                                                                   |
| `type`           | [`PointsAnnotationType`](./enum-points-annotation-type.md) | Type of points annotation to render.                                                                                                    |
| `points`         | [`Point2[]`](./point2.md)                                  | List of 2D points in image coordinates (pixels).                                                                                        |
| `outline_color`  | [`Color`](./color.md)                                      | Color used for the outline of points or lines.                                                                                          |
| `outline_colors` | [`Color[]`](./color.md)                                    | Per-point outline colors (if `type` is `POINTS`) or per-segment stroke colors (if `type` is `LINE_LIST`, `LINE_STRIP`, or `LINE_LOOP`). |
| `fill_color`     | [`Color`](./color.md)                                      | Fill color for points.                                                                                                                  |
| `thickness`      | [`float64`](./built-in-types.md#float64)                   | Stroke thickness in pixels for outlines or lines.                                                                                       |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointsAnnotation.msg)        |
| ROS 2       | [`foxglove_msgs/msg/PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointsAnnotation.msg)    |
| JSON        | [`foxglove.PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointsAnnotation.json)      |
| Protobuf    | [`foxglove.PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointsAnnotation.proto) |
| FlatBuffers | [`foxglove.PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointsAnnotation.fbs)       |
| OMG IDL     | [`foxglove::PointsAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointsAnnotation.idl) |
