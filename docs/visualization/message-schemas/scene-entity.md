# SceneEntity

A graphical object within a 3D scene. An entity can consist of several primitives that all operate within the same coordinate frame.

## Parent schema

`SceneEntity` appears in the [`SceneUpdate`](./scene-update.md) message schema.

## Schema

| Field          | Type                                                      | Description                                                                                                                                                            |
| -------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`    | [`time`](./built-in-types.md#time)                        | The time associated with this entity.                                                                                                                                              |
| `frame_id`     | [`string`](./built-in-types.md#string)                    | The coordinate frame this entity is defined in.                                                                                                                                    |
| `id`           | [`string`](./built-in-types.md#string)                    | Unique name for the entity. A new entity sharing the same topic and id will overwrite any existing one.                                                                            |
| `lifetime`     | [`duration`](./built-in-types.md#duration)                | Duration (relative to `timestamp`) before the entity is automatically removed from the scene. A value of zero keeps the entity visible until it is explicitly replaced or deleted. |
| `frame_locked` | [`boolean`](./built-in-types.md#boolean)                  | Determines if the entity stays fixed in place (`false`) or moves along with the frame defined in `frame_id` as it shifts relative to the fixed frame (`true`).                     |
| `metadata`     | [`KeyValuePair[]`](./key-value-pair.md)                   | Optional key-value pairs supplied by the user to attach extra information to the entity. Each key must be distinct.                                                                |
| `arrows`       | [`ArrowPrimitive[]`](./arrow-primitive.md)                | A list of arrow-shaped primitives.                                                                                                                                                 |
| `cubes`        | [`CubePrimitive[]`](./cube-primitive.md)                  | A list of cube-shaped primitives.                                                                                                                                                  |
| `spheres`      | [`SpherePrimitive[]`](./sphere-primitive.md)              | A list of sphere-shaped primitives.                                                                                                                                                |
| `cylinders`    | [`CylinderPrimitive[]`](./cylinder-primitive.md)          | A list of cylinder-shaped primitives.                                                                                                                                              |
| `lines`        | [`LinePrimitive[]`](./line-primitive.md)                  | A list of line primitives.                                                                                                                                                         |
| `triangles`    | [`TriangleListPrimitive[]`](./triangle-list-primitive.md) | A list of triangle-mesh primitives.                                                                                                                                                |
| `texts`        | [`TextPrimitive[]`](./text-primitive.md)                  | A list of text label primitives.                                                                                                                                                   |
| `models`       | [`ModelPrimitive[]`](./model-primitive.md)                | A list of 3D model primitives.                                                                                                                                                     |

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
