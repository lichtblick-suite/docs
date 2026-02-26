# TextPrimitive

A primitive used to display a text label in a 3D scene.

## Parent schema

`TextPrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field             | Type                                     | Description                                                                                                                                                    |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pose`            | [`pose`](./pose.md)                      | Location of the text box center and the rotation applied to the text. A default (identity) orientation places the text flat in the xy-plane, running from -x to +x. |
| `billboard`       | [`boolean`](./built-in-types.md#boolean) | Controls whether the text follows the rotation in `pose.orientation` (`false`) or is always rotated to face the camera (`true`).                                     |
| `font_size`       | [`float64`](./built-in-types.md#float64) | The height of a single line of text, used to determine the font size.                                                                                               |
| `scale_invariant` | [`boolean`](./built-in-types.md#boolean) | Specifies whether `font_size` is a constant screen-space pixel size (`true`), or a world-space measurement that changes with camera distance (`false`).              |
| `color`           | [`Color`](./color.md)                    | The color applied to the text.                                                                                                                                      |
| `text`            | [`string`](./built-in-types.md#string)   | The string to be rendered as the label.                                                                                                                             |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                            |
| ----------- | --------------------------------- |
| ROS 1       | [`foxglove_msgs/TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TextPrimitive.msg) |
| ROS 2       | [`foxglove_msgs/msg/TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TextPrimitive.msg) |
| JSON        | [`foxglove.TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TextPrimitive.json) |
| Protobuf    | [`foxglove.TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TextPrimitive.proto) |
| FlatBuffers | [`foxglove.TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TextPrimitive.fbs) |
| OMG IDL     | [`foxglove::TextPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TextPrimitive.idl) |
