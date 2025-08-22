# SceneEntity

A visual element in a 3D scene. An entity may be composed of multiple primitives which all share the same frame of reference.

## Parent schema

`SceneEntity` appears in the [`SceneUpdate`](./scene-update.md) message schema.

## Schema

| Field          | Type                                                      | Description                                                                                                                                                            |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`    | [`time`](./built-in-types.md#time)                        | Timestamp of the entity.                                                                                                                                               |
| `frame_id`     | [`string`](./built-in-types.md#string)                    | Frame of reference.                                                                                                                                                    |
| `id`           | [`string`](./built-in-types.md#string)                    | Identifier for the entity. An entity will replace any prior entity on the same topic with the same id.                                                                 |
| `lifetime`     | [`duration`](./built-in-types.md#duration)                | Length of time (relative to `timestamp`) after which the entity should be automatically removed. Zero means it remains visible until replaced or deleted.              |
| `frame_locked` | [`boolean`](./built-in-types.md#boolean)                  | Whether the entity should keep its location in the fixed frame (`false`) or follow the frame specified in `frame_id` as it moves relative to the fixed frame (`true`). |
| `metadata`     | [`KeyValuePair[]`](./key-value-pair.md)                   | Additional user-provided metadata associated with the entity. Keys must be unique.                                                                                     |
| `arrows`       | [`ArrowPrimitive[]`](./arrow-primitive.md)                | Arrow primitives.                                                                                                                                                      |
| `cubes`        | [`CubePrimitive[]`](./cube-primitive.md)                  | Cube primitives.                                                                                                                                                       |
| `spheres`      | [`SpherePrimitive[]`](./sphere-primitive.md)              | Sphere primitives.                                                                                                                                                     |
| `cylinders`    | [`CylinderPrimitive[]`](./cylinder-primitive.md)          | Cylinder primitives.                                                                                                                                                   |
| `lines`        | [`LinePrimitive[]`](./line-primitive.md)                  | Line primitives.                                                                                                                                                       |
| `triangles`    | [`TriangleListPrimitive[]`](./triangle-list-primitive.md) | Triangle list primitives.                                                                                                                                              |
| `texts`        | [`TextPrimitive[]`](./text-primitive.md)                  | Text primitives.                                                                                                                                                       |
| `models`       | [`ModelPrimitive[]`](./model-primitive.md)                | Model primitives.                                                                                                                                                      |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                          |
| ----------- | ------------------------------- |
| ROS 1       | [`foxglove_msgs/SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntity.msg) |
| ROS 2       | [`foxglove_msgs/msg/SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntity.msg) |
| JSON        | [`foxglove.SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntity.json) |
| Protobuf    | [`foxglove.SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntity.proto) |
| FlatBuffers | [`foxglove.SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntity.fbs) |
| OMG IDL     | [`foxglove::SceneEntity`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntity.idl) |
