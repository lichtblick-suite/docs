# Grid

A 2D grid of data.

## Panel support

<!--TODO: Link missing documentation when available-->

`Grid` is used in the [3D](../panels/3d-panel.md) and [Image](#) panels.

## Schema

| Field          | Type                                                | Description                                                                                                          |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `timestamp`    | [`time`](./built-in-types.md#time)                  | Timestamp of the grid.                                                                                               |
| `frame_id`     | [`string`](./built-in-types.md#string)              | Frame of reference.                                                                                                  |
| `pose`         | [`pose`](./pose.md)                                 | Origin of grid's corner relative to frame of reference; grid is positioned in the x-y plane relative to this origin. |
| `column_count` | [`uint32`](./built-in-types.md#uint32)              | Number of grid columns.                                                                                              |
| `cell_size`    | [`Vector2`](./vector2.md)                           | Size of a single grid cell along x and y axes, relative to [`pose`](./pose.md).                                      |
| `row_stride`   | [`uint32`](./built-in-types.md#uint32)              | Number of bytes between rows in `data`.                                                                              |
| `cell_stride`  | [`uint32`](./built-in-types.md#uint32)              | Number of bytes between cells within a row in `data`.                                                                |
| `fields`       | [`PackedElementField[]`](./packed-element-field.md) | Fields in `data`. Red, green, blue, and alpha are optional for customizing the grid's color.                         |
| `data`         | [`bytes`](./built-in-types.md#bytes)                | Grid cell data, interpreted using `fields`, in row-major (y-major) order.                                            |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                   |
| ----------- | ------------------------ |
| ROS 1       | [`foxglove_msgs/Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Grid.msg) |
| ROS 2       | [`foxglove_msgs/msg/Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Grid.msg) |
| JSON        | [`foxglove.Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Grid.json) |
| Protobuf    | [`foxglove.Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Grid.proto) |
| FlatBuffers | [`foxglove.Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Grid.fbs) |
| OMG IDL     | [`foxglove::Grid`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Grid.idl) |
