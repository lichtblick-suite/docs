# TextAnnotation

A textual annotation overlaid on a 2D image.

## Parent schema

`TextAnnotation` appears in the [`ImageAnnotations`](./image-annotations.md) message schema.

## Schema

| Field              | Type                                     | Description                                                            |
| ------------------ | ---------------------------------------- | ---------------------------------------------------------------------- |
| `timestamp`        | [`time`](./built-in-types.md#time)       | The time at which the annotation is recorded.                                  |
| `position`         | [`Point2`](./point2.md)                  | The bottom-left corner of the text label in 2D image coordinates (pixels).     |
| `text`             | [`string`](./built-in-types.md#string)   | The content of the annotation label.                                           |
| `font_size`        | [`float64`](./built-in-types.md#float64) | The size of the font, measured in pixels.                                      |
| `text_color`       | [`Color`](./color.md)                    | The color used to render the text.                                             |
| `background_color` | [`Color`](./color.md)                    | The color used to fill the background behind the text.                         |

## Position

The coordinate uses the top-left corner of the top-left pixel of the image as the origin.

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                             |
| ----------- | ---------------------------------- |
| ROS 1       | [`foxglove_msgs/TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextAnnotation.msg) |
| ROS 2       | [`foxglove_msgs/msg/TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextAnnotation.msg) |
| JSON        | [`foxglove.TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextAnnotation.json) |
| Protobuf    | [`foxglove.TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextAnnotation.proto) |
| FlatBuffers | [`foxglove.TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextAnnotation.fbs) |
| OMG IDL     | [`foxglove::TextAnnotation`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextAnnotation.idl) |
