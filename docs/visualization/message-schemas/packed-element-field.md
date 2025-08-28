# PackedElementField

A field present within each element in a byte array of packed elements.

## Parent schema

`PackedElementField` appears in the following message schemas: [`Grid`](./grid.md) and [`PointCloud`](./point-cloud.md).

## Schema

| Field            | Type                                     | Description                                                                                                                                                                                               |
| ---------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pose`           | [`Pose`](./pose.md)                      | The position and orientation of the model relative to the reference frame.                                                                                                                                |
| `scale`          | [`Vector3`](./vector3.md)                | Scale factor applied to the model along each axis.                                                                                                                                                        |
| `color`          | [`Color`](./color.md)                    | Solid color applied to the entire model if `override_color` is set to true.                                                                                                                               |
| `override_color` | [`boolean`](./built-in-types.md#boolean) | If true, overrides the model's original material colors with the specified [`Color`](./color.md).                                                                                                         |
| `url`            | [`string`](./built-in-types.md#string)   | URL linking to the external model file. One of `url` or `data` must be provided.                                                                                                                          |
| `media_type`     | [`string`](./built-in-types.md#string)   | [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) of the embedded model (e.g., `model/gltf-binary`). Required if `data` is used instead of `url`. Overrides inferred type. |
| `data`           | [`bytes`](./built-in-types.md#bytes)     | Embedded model data. If provided, `media_type` must be specified. One of `url` or `data` must be provided.                                                                                                |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PackedElementField.msg)        |
| ROS 2       | [`foxglove_msgs/msg/PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PackedElementField.msg)    |
| JSON        | [`foxglove.PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PackedElementField.json)      |
| Protobuf    | [`foxglove.PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PackedElementField.proto) |
| FlatBuffers | [`foxglove.PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PackedElementField.fbs)       |
| OMG IDL     | [`foxglove::PackedElementField`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PackedElementField.idl) |
