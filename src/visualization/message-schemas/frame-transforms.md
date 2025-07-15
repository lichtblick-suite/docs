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
| ROS 1       | `foxglove_msgs/FrameTransforms`     |
| ROS 2       | `foxglove_msgs/msg/FrameTransforms` |
| JSON        | `foxglove.FrameTransforms`          |
| Protobuf    | `foxglove.FrameTransforms`          |
| FlatBuffers | `foxglove.FrameTransforms`          |
| OMG IDL     | `foxglove::FrameTransforms`         |
