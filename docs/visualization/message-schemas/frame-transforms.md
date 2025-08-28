# FrameTransforms

An array of [`FrameTransform`](./frame-transform.md) messages.

## Schema

| Field        | Type                                       | Description          |
| ------------ | ------------------------------------------ | -------------------- |
| `transforms` | [`FrameTransform[]`](./frame-transform.md) | Array of transforms. |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                              |
| ----------- | ----------------------------------- |
| ROS 1       | [`foxglove_msgs/FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/FrameTransforms.msg) |
| ROS 2       | [`foxglove_msgs/msg/FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/FrameTransforms.msg) |
| JSON        | [`foxglove.FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/FrameTransforms.json) |
| Protobuf    | [`foxglove.FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/FrameTransforms.proto) |
| FlatBuffers | [`foxglove.FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/FrameTransforms.fbs) |
| OMG IDL     | [`foxglove::FrameTransforms`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/FrameTransforms.idl) |
