# RawImage

A raw image.

## Panel support

<!--TODO: Link missing documentation when available-->

`RawImage` can be used in the following panels: [3D](#) and [Image](#).

## Schema

| Field       | Type                                   | Description                                                                                                                                                                       |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Timestamp indicating when the image was captured.                                                                                                                                 |
| `frame_id`  | [`string`](./built-in-types.md#string) | Frame of reference for the image. The origin of the frame is the optical center of the camera. +x points to the right, +y points down, and +z points into the plane of the image. |
| `width`     | [`uint32`](./built-in-types.md#uint32) | Width of the image.                                                                                                                                                               |
| `height`    | [`uint32`](./built-in-types.md#uint32) | Height of the image.                                                                                                                                                              |
| `encoding`  | [`string`](./built-in-types.md#string) | Encoding of the raw image data.                                                                                                                                                   |
| `step`      | [`uint32`](./built-in-types.md#uint32) | Length in bytes of a single row of the image.                                                                                                                                     |
| `data`      | [`bytes`](./built-in-types.md#bytes)   | Raw image data buffer. The content depends on the encoding and includes all pixel data row-wise.                                                                                  |

Supported values:

`8UC1`, `8UC3`, `16UC1` (little endian), `32FC1` (little endian), `bayer_bggr8`, `bayer_gbrg8`, `bayer_grbg8`, `bayer_rggb8`, `bgr8`, `bgra8`, `mono8`, `mono16`, `rgb8`, `rgba8`, `uyvy` or `yuv422`, `yuyv` or `yuv422_yuy2`

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                          |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/RawImage.msg)        |
| ROS 2       | [`foxglove_msgs/msg/RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/RawImage.msg)    |
| JSON        | [`foxglove.RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/RawImage.json)      |
| Protobuf    | [`foxglove.RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/RawImage.proto) |
| FlatBuffers | [`foxglove.RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/RawImage.fbs)       |
| OMG IDL     | [`foxglove::RawImage`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/RawImage.idl) |
