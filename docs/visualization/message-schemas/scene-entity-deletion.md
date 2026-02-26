# SceneEntityDeletion

An instruction to delete entities that were previously added to the scene.

## Parent schema

`SceneEntityDeletion` appears in the [`SceneUpdate`](./scene-update.md) message schema.

## Schema

| Field       | Type                                                              | Description                                                                                    |
| ----------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)                                | The time at which the deletion is applied. Only entities with a timestamp before this value will be removed. |
| `type`      | [`SceneEntityDeletionType`](./enum-scene-entity-deletion-type.md) | The kind of deletion operation to execute.                                                                   |
| `id`        | [`string`](./built-in-types.md#string)                            | The entity identifier to match when `type` is set to `MATCHING_ID`.                                         |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntityDeletion.msg)        |
| ROS 2       | [`foxglove_msgs/msg/SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntityDeletion.msg)    |
| JSON        | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntityDeletion.json)      |
| Protobuf    | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntityDeletion.proto) |
| FlatBuffers | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntityDeletion.fbs)       |
| OMG IDL     | [`foxglove::SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntityDeletion.idl) |
