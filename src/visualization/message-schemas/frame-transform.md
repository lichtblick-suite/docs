# FrameTransform

A transform between two reference frames in 3D space.

## Panel support

<!--TODO: Link missing documentation when available-->

`FrameTransform` is used in the [3D](#) and [Image](#) panels.

## Parent schema

`FrameTransform` appears in the [`FrameTransforms`](./frame-transforms.md) message schema.

## Schema

| Field             | Type                                   | Description                             |
| ----------------- | -------------------------------------- | --------------------------------------- |
| `timestamp`       | [`time`](./built-in-types.md#time)     | Timestamp of the transform.             |
| `parent_frame_id` | [`string`](./built-in-types.md#string) | Name of the parent frame.               |
| `child_frame_id`  | [`string`](./built-in-types.md#string) | Name of the child frame.                |
| `translation`     | [`Vector3`](./vector3.md)              | Translation component of the transform. |
| `rotation`        | [`Quaternion`](./quaternion.md)        | Rotation component of the transform.    |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                             |
| ----------- | ---------------------------------- |
| ROS 1       | `foxglove_msgs/FrameTransform`     |
| ROS 2       | `foxglove_msgs/msg/FrameTransform` |
| JSON        | `foxglove.FrameTransform`          |
| Protobuf    | `foxglove.FrameTransform`          |
| FlatBuffers | `foxglove.FrameTransform`          |
| OMG IDL     | `foxglove::FrameTransform`         |
