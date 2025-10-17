# PointCloud

A collection of N-dimensional points, which may contain additional fields with information like normals, intensity, etc.

## Panel support

<!--TODO: Link missing documentation when available-->

`PointCloud` can be used in the following panels: [3D](../panels/3d-panel.md) and [Image](../panels/image-panel.md).

## Schema

| Field          | Type                                                | Description                                                                                                                                                                  |
| -------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`    | [`time`](./built-in-types.md#time)                  | Time when the point cloud was captured.                                                                                                                                      |
| `frame_id`     | [`string`](./built-in-types.md#string)              | Reference frame that the point cloud is positioned relative to.                                                                                                              |
| `pose`         | [`Pose`](./pose.md)                                 | Position of the point cloud origin relative to the reference frame.                                                                                                          |
| `point_stride` | [`uint32`](./built-in-types.md#uint32)              | Number of bytes between points in the `data`.                                                                                                                                |
| `fields`       | [`PackedElementField[]`](./packed-element-field.md) | List of fields describing the data layout for each point. Requires at least two of `x`, `y`, or `z` for position. Optional fields like color (`r, g, b, a`) can be included. |
| `data`         | [`bytes`](./built-in-types.md#bytes)                | Point data, interpreted using `fields`                                                                                                                                       |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/PointCloud.msg)        |
| ROS 2       | [`foxglove_msgs/msg/PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/PointCloud.msg)    |
| JSON        | [`foxglove.PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/PointCloud.json)      |
| Protobuf    | [`foxglove.PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/PointCloud.proto) |
| FlatBuffers | [`foxglove.PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/PointCloud.fbs)       |
| OMG IDL     | [`foxglove::PointCloud`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/PointCloud.idl) |
