# FrameTransform

A transform between two reference frames in 3D space.

## Panel support

<!--TODO: Link missing documentation when available-->

`FrameTransform` is used in the [3D](../panels/3d-panel.md) and [Image](#) panels.

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
| ROS 1       | [`foxglove_msgs/FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/FrameTransform.msg) |
| ROS 2       | [`foxglove_msgs/msg/FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/FrameTransform.msg) |
| JSON        | [`foxglove.FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/FrameTransform.json) |
| Protobuf    | [`foxglove.FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/FrameTransform.proto) |
| FlatBuffers | [`foxglove.FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/FrameTransform.fbs) |
| OMG IDL     | [`foxglove::FrameTransform`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/FrameTransform.idl) |
