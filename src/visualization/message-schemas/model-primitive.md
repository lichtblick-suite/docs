# ModelPrimitive

A primitive representing a 3D model file loaded from an external URL or embedded data.

## Parent schema

<!--TODO: Link missing documentation when available-->
`ModelPrimitive` appears in the [`SceneEntity`]() message schema.

## Schema 

| Field           | Type                       | Description                                                                                                                            |
|-----------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `pose`          | [`Pose`](#)                | The position and orientation of the model relative to the reference frame.                                                            |
| `scale`         | [`Vector3`](#)             | Scale factor applied to the model along each axis.                                                                          |
| `color`         | [`Color`](#)               | Solid color applied to the entire model if `override_color` is set to true.                                                           |
| `override_color`| [`boolean`](#)             | If true, overrides the model's original material colors with the specified `color`.                                                   |
| `url`           | [`string`](#)              | URL linking to the external model file. One of `url` or `data` must be provided.                                                      |
| `media_type`    | [`string`](#)              | [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) of the embedded model (e.g., `model/gltf-binary`). Required if `data` is used instead of `url`. Overrides inferred type.   |
| `data`          | [`bytes`](#)               | Embedded model data. If provided, `media_type` must be specified. One of `url` or `data` must be provided.                           |




## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding     | Schema                                   |
|--------------|------------------------------------------|
| ROS 1        | [`foxglove_msgs/ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ModelPrimitive.msg)          |
| ROS 2        | [`foxglove_msgs/msg/ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ModelPrimitive.msg)      |
| JSON         | [`foxglove.ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ModelPrimitive.json)        |
| Protobuf     | [`foxglove.ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ModelPrimitive.proto)   |
| FlatBuffers  | [`foxglove.ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ModelPrimitive.fbs)         |
| OMG IDL      | [`foxglove::ModelPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ModelPrimitive.idl)   |
