# CompressedVideo

A single frame of a compressed video bitstream.

## Panel support

<!--TODO: Link missing documentation when available-->

`CompressedVideo` is used in the [3D](#) and [Image](#) panels.

## Schema

| Field       | Type                                   | Description                                                                                                                                                                                                                                                                                                                                   |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Timestamp of the video frame.                                                                                                                                                                                                                                                                                                                 |
| `frame_id`  | [`string`](./built-in-types.md#string) | Frame of reference for the video. The origin is the optical center of the camera. +X points right, +Y points down, and +Z points into the plane.                                                                                                                                                                                              |
| `data`      | [`bytes`](./built-in-types.md#bytes)   | Compressed video frame data. For packet-based video codecs, this data must begin and end on packet boundaries (no partial packets), and must contain enough video packets to decode exactly one image (either a keyframe or delta frame). Note: Foxglove does not support video streams that include B frames because they require lookahead. |
| `format`    | [`string`](./built-in-types.md#string) | Video format. Supported value: `h264`.                                                                                                                                                                                                                                                                                                        |

## Format details for h264 (Annex B)

- Use Annex B formatted data.
- Each `CompressedVideo` message should contain enough NAL units to decode exactly one video frame.
- Each message containing a key frame (IDR) **must** also include an SPS NAL unit.

> **Note:** Compressed video support is subject to hardware limitations and patent licensing, so not all encodings may be supported on all platforms.

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                              |
| ----------- | ----------------------------------- |
| ROS 1       | `foxglove_msgs/CompressedVideo`     |
| ROS 2       | `foxglove_msgs/msg/CompressedVideo` |
| JSON        | `foxglove.CompressedVideo`          |
| Protobuf    | `foxglove.CompressedVideo`          |
| FlatBuffers | `foxglove.CompressedVideo`          |
| OMG IDL     | `foxglove::CompressedVideo`         |
