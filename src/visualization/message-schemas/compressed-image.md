# CompressedImage

A compressed image.

## Panel support

<!--TODO: Link missing documentation when available-->

`CompressedImage` is used in the [3D](#) and [Image](#) panels.

## Schema

| Field       | Type                                   | Description                                                                                                                                                            |
| ----------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Timestamp of the image.                                                                                                                                                |
| `frame_id`  | [`string`](./built-in-types.md#string) | Frame of reference for the image. The origin of the frame is the optical center of the camera. +X points right in the image, +Y points down, +Z points into the plane. |
| `data`      | [`bytes`](./built-in-types.md#bytes)   | Compressed image data.                                                                                                                                                 |
| `format`    | [`string`](./built-in-types.md#string) | Image format. Supported values: `jpeg`, `png`, `webp`, `avif`.                                                                                                         |

> **Note:** A new ROS image format string will be accepted but **not parsed or decoded** by the viewer. Only the standard formats (`jpeg`, `png`, `webp`, `avif`) will be recognized and decoded natively.  
> Other format strings will rely on JavaScript's Blob MIME type parsing, which does **not** support the ROS-specific format strings..

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                              |
| ----------- | ----------------------------------- |
| ROS 1       | [`foxglove_msgs/CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CompressedImage.msg) |
| ROS 2       | [`foxglove_msgs/msg/CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CompressedImage.msg) |
| JSON        | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CompressedImage.json) |
| Protobuf    | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CompressedImage.proto) |
| FlatBuffers | [`foxglove.CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CompressedImage.fbs) |
| OMG IDL     | [`foxglove::CompressedImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CompressedImage.idl) |
