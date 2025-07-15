# TriangleListPrimitive

A primitive representing a set of triangles or a surface tiled by triangles.

## Parent schema

`TriangleListPrimitive` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field     | Type                                     | Description                                                                                                                         |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `pose`    | [`Pose`](./pose.md)                      | Origin of triangles relative to reference frame.                                                                                    |
| `points`  | [`Point3[]`](./point3.md)                | Vertices to use for triangles, interpreted as a list of triples (0-1-2, 3-4-5, ...).                                                |
| `color`   | [`Color`](./color.md)                    | Solid color to use for the whole shape. One of [`Color`](./color.md) or `colors` must be provided.                                  |
| `colors`  | [`Color[]`](./color.md)                  | Per-vertex colors (if specified, must have the same length as `points`). One of [`Color`](./color.md) or `colors` must be provided. |
| `indices` | [`uint32[]`](./built-in-types.md#uint32) | Indices into the `points` and `colors` arrays, which can be used to avoid duplicating attribute data.                               |

### indices

If omitted or empty, indexing will not be used. This default behavior is equivalent to specifying `[0, 1, ..., N-1]` for the indices (where N is the number of points provided).

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                    |
| ----------- | ----------------------------------------- |
| ROS 1       | `foxglove_msgs/TriangleListPrimitive`     |
| ROS 2       | `foxglove_msgs/msg/TriangleListPrimitive` |
| JSON        | `foxglove.TriangleListPrimitive`          |
| Protobuf    | `foxglove.TriangleListPrimitive`          |
| FlatBuffers | `foxglove.TriangleListPrimitive`          |
| OMG IDL     | `foxglove::TriangleListPrimitive`         |
