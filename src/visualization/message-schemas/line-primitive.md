# LinePrimitive

A primitive representing a series of points connected by lines.

## Parent schema

<!--TODO: Link missing documentation when available-->
`LinePrimitive` appears in the [`SceneEntity`]() message schema.

## Schema 

| Field         | Type       | Description                                                                                                                                                                         |
|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `timestamp`   | [`time`]() | Timestamp of scan.                                                                                                                                                                  |
| `frame_id`    | [`string`]()| Frame of reference.                                                                                                                                                                 |
| `pose`        | [`Pose`](./pose.md) | The scan origin is defined relative to the frame of reference. Point positions are specified in the x-y plane with respect to this origin. Angles are measured as counterclockwise rotations around the z-axis, with 0 radians aligned with the positive x-axis. |
| `start_angle` | [`float64`]()  | Bearing of first point, in radians.                                                                                                                                                 |
| `end_angle`   | [`float64`]()  | Bearing of last point, in radians.                                                                                                                                                  |
| `ranges`      | [`float64[]`]()| Distances of detections from the origin, assumed to be measured at equally spaced angles between the start angle and end angle.                                                                      |
| `intensities` | [`float64[]`]()| Intensity of detections.                                                                                                                                                            |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding     | Schema                                   |
|--------------|------------------------------------------|
| ROS 1        | [`foxglove_msgs/LinePrimitive`](https://docs.ros.org/en/noetic/api/foxglove_msgs/html/msg/LinePrimitive.html)          |
| ROS 2        | [`foxglove_msgs/msg/LinePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LinePrimitive.msg)      |
| JSON         | [`foxglove.LinePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LinePrimitive.json)               |
| Protobuf     | [`foxglove.LinePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LinePrimitive.proto)               |
| FlatBuffers  | [`foxglove.LinePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LinePrimitive.fbs)               |
| OMG IDL      | [`foxglove::LinePrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LinePrimitive.idl)              |
