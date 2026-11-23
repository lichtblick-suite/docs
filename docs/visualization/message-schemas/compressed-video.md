# CompressedVideo

A single frame of a compressed video bitstream.

## Panel support

`CompressedVideo` is used in the [3D](../panels/3d.md) and [Image](../panels/image-panel.md) panels.

## Schema

| Field | Type | Description |
| --- | --- | --- |
| `timestamp` | [`time`](./built-in-types.md#time) | Timestamp of the video frame. |
| `frame_id` | [`string`](./built-in-types.md#string) | Frame of reference for the video. The origin is the optical center of the camera. +X points right, +Y points down, and +Z points into the plane. |
| `data` | [`bytes`](./built-in-types.md#bytes) | Compressed video frame data. For packet-based video codecs, this data must begin and end on packet boundaries (no partial packets), and must contain enough video packets to decode exactly one image (either a keyframe or delta frame). Note: Lichtblick does not support video streams that include B frames because they require lookahead. |
| `format` | [`string`](./built-in-types.md#string) | Video format. Supported values: `h264` and `h265`. For H.265, the aliases `hevc`, `hvc1`, and `hev1` are also accepted. |

## Format details for h264 (Annex B)

- Use Annex B formatted data.
- Each `CompressedVideo` message should contain enough NAL units to decode exactly one video frame.
- Each message containing a key frame (IDR) **must** also include an SPS NAL unit.

## Format details for h265 (HEVC)

- Use Annex B formatted data (start codes `00 00 01` or `00 00 00 01`). Length-prefixed data (4-byte big-endian NAL unit lengths, as used in MP4/`hvcC` samples) is also accepted and converted to Annex B automatically.
- The `format` field may be `h265`, `hevc`, `hvc1`, or `hev1`. All are treated as H.265.
- Each `CompressedVideo` message should contain enough NAL units to decode exactly one video frame.
- Each message containing a key frame (an IRAP picture: IDR, CRA, or BLA) **must** also include the VPS, SPS, and PPS NAL units. The SPS is used to derive the codec string (for example `hvc1.1.6.L93.B0`) and the coded dimensions. If no SPS can be parsed, Lichtblick falls back to the generic codec string `hvc1.1.6.L93.B0`.
- Delta frames (P frames) do not need to repeat parameter sets. If present, they are stripped before decoding.
- **B frames are not supported.** Frames whose slices include B slices are skipped and the last decoded image remains displayed. Encode with only I and P slices (no frame reordering) so that decode order equals presentation order.
- Because P frames depend on previous frames, Lichtblick replays the current group of pictures (the most recent key frame and all frames after it) when seeking. Use a regular key frame interval so that playback and seeking can start quickly.
- H.265 decoding may take longer to produce output than H.264, especially when no hardware decoder is available. Lichtblick tries hardware acceleration first and falls back to software decoding if the configuration is rejected.

> **Note:** Compressed video support is subject to hardware limitations and patent licensing, so not all encodings may be supported on all platforms.

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding | Schema |
| --- | --- |
| ROS 1 | [`foxglove_msgs/CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CompressedVideo.msg) |
| ROS 2 | [`foxglove_msgs/msg/CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CompressedVideo.msg) |
| JSON | [`foxglove.CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CompressedVideo.json) |
| Protobuf | [`foxglove.CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CompressedVideo.proto) |
| FlatBuffers | [`foxglove.CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CompressedVideo.fbs) |
| OMG IDL | [`foxglove::CompressedVideo`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CompressedVideo.idl) |
