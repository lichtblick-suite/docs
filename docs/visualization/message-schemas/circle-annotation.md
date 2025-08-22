# CircleAnnotation

A circle annotation on a 2D image.

## Panel support

`CircleAnnotation` appears in the [ImageAnnotations](./image-annotations.md) message schema.

## Schema

| Field           | Type                                     | Description                                                                                                     |
| --------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `timestamp`     | [`time`](./built-in-types.md#time)       | Timestamp of the circle.                                                                                        |
| `position`      | [`Point2`](./point2.md)                  | Center of the circle in 2D image coordinates (pixels). The origin is the top-left corner of the top-left pixel. |
| `diameter`      | [`float64`](./built-in-types.md#float64) | Diameter of the circle in pixels.                                                                               |
| `thickness`     | [`float64`](./built-in-types.md#float64) | Line thickness in pixels.                                                                                       |
| `fill_color`    | [`Color`](./color.md)                    | Fill color of the circle.                                                                                       |
| `outline_color` | [`Color`](./color.md)                    | Outline color of the circle.                                                                                    |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CircleAnnotation.msg)        |
| ROS 2       | [`foxglove_msgs/msg/CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CircleAnnotation.msg)    |
| JSON        | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CircleAnnotation.json)      |
| Protobuf    | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CircleAnnotation.proto) |
| FlatBuffers | [`foxglove.CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CircleAnnotation.fbs)       |
| OMG IDL     | [`foxglove::CircleAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CircleAnnotation.idl) |
