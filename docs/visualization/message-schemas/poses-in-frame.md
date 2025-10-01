# PosesInFrame

An array of timestamped poses for an object or reference frame in 3D space.

## Panel support

<!--TODO: Link missing documentation when available-->

`PosesInFrame` can be used in the following panels: [3D](../panels/3d-panel.md) and [Image](#).

## Schema

| Field       | Type                                   | Description                                                |
| ----------- | -------------------------------------- | ---------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Timestamp indicating when the pose was recorded.           |
| `frame_id`  | [`string`](./built-in-types.md#string) | Name of the coordinate frame that the pose is relative to. |
| `pose`      | [`Pose[]`](./pose.md)                  | The position and orientation in 3D space.                  |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PosesInFrame.msg)        |
| ROS 2       | [`foxglove_msgs/msg/PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PosesInFrame.msg)    |
| JSON        | [`foxglove.PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PosesInFrame.json)      |
| Protobuf    | [`foxglove.PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PosesInFrame.proto) |
| FlatBuffers | [`foxglove.PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PosesInFrame.fbs)       |
| OMG IDL     | [`foxglove::PosesInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PosesInFrame.idl) |
