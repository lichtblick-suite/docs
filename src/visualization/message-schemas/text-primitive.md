# TextPrimitive

A primitive representing a text label.

## Parent schema

`TextPrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field             | Type                                     | Description                                                                                                                                                    |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pose`            | [`pose`](./pose.md)                      | Position of the center of the text box and orientation of the text. Identity orientation means the text is oriented in the xy-plane and flows from -x to +x.   |
| `billboard`       | [`boolean`](./built-in-types.md#boolean) | Whether the text should respect `pose.orientation` (`false`) or always face the camera (`true`).                                                               |
| `font_size`       | [`float64`](./built-in-types.md#float64) | Font size (height of one line of text).                                                                                                                        |
| `scale_invariant` | [`boolean`](./built-in-types.md#boolean) | Indicates whether `font_size` is a fixed size in screen pixels (`true`), or specified in world coordinates and scales with distance from the camera (`false`). |
| `color`           | [`Color`](./color.md)                    | Color of the text.                                                                                                                                             |
| `text`            | [`string`](./built-in-types.md#string)   | Text content.                                                                                                                                                  |

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
