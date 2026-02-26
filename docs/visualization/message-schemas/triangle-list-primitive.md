# TriangleListPrimitive

A primitive that defines a collection of triangles or a surface constructed from a triangular mesh.

## Parent schema

`TriangleListPrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field     | Type                                     | Description                                                                                                                         |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `pose`    | [`Pose`](./pose.md)                      | The position and orientation of the triangle set relative to its reference frame.                                                                |
| `points`  | [`Point3[]`](./point3.md)                | Vertex positions that form the triangles, grouped in consecutive sets of three (0-1-2, 3-4-5, ...).                                              |
| `color`   | [`Color`](./color.md)                    | A uniform color applied across the entire shape. Either this field or `colors` must be set.                                                      |
| `colors`  | [`Color[]`](./color.md)                  | Individual colors assigned to each vertex. If provided, the length must match that of `points`. Either this field or `color` must be set.        |
| `indices` | [`uint32[]`](./built-in-types.md#uint32) | References into the `points` and `colors` arrays, allowing shared vertex data to be reused without repetition.                                   |

### indices

If omitted or empty, indexing will not be used. This default behavior is equivalent to specifying `[0, 1, ..., N-1]` for the indices (where N is the number of points provided).

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                    |
| ----------- | ----------------------------------------- |
| ROS 1       | [`foxglove_msgs/TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/TriangleListPrimitive.msg) |
| ROS 2       | [`foxglove_msgs/msg/TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/TriangleListPrimitive.msg) |
| JSON        | [`foxglove.TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/TriangleListPrimitive.json) |
| Protobuf    | [`foxglove.TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/TriangleListPrimitive.proto) |
| FlatBuffers | [`foxglove.TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/TriangleListPrimitive.fbs) |
| OMG IDL     | [`foxglove::TriangleListPrimitive`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/TriangleListPrimitive.idl) |
