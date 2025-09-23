# PoseInFrame

A position and orientation for an object or reference frame in 3D space.

## Panel support

`PoseInFrame` can be used in the following panels: [3D](../panels/3d-panel.md) and [Image](#).

## Schema

| Field       | Type                                   | Description                                                |
| ----------- | -------------------------------------- | ---------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Timestamp indicating when the pose was recorded.           |
| `frame_id`  | [`string`](./built-in-types.md#string) | Name of the coordinate frame that the pose is relative to. |
| `pose`      | [`Pose`](./pose.md)                    | The position and orientation in 3D space.                  |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PoseInFrame.msg)        |
| ROS 2       | [`foxglove_msgs/msg/PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PoseInFrame.msg)    |
| JSON        | [`foxglove.PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PoseInFrame.json)      |
| Protobuf    | [`foxglove.PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PoseInFrame.proto) |
| FlatBuffers | [`foxglove.PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PoseInFrame.fbs)       |
| OMG IDL     | [`foxglove::PoseInFrame`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PoseInFrame.idl) |
