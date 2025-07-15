# SceneEntityDeletion

Command to remove previously published entities.

## Parent schema

`SceneEntityDeletion` appears in the [`SceneUpdate`](./scene-update.md) message schema.

## Schema

| Field       | Type                                                              | Description                                                                                    |
| ----------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)                                | Timestamp of the deletion. Only matching entities earlier than this timestamp will be deleted. |
| `type`      | [`SceneEntityDeletionType`](./enum-scene-entity-deletion-type.md) | Type of deletion action to perform.                                                            |
| `id`        | [`string`](./built-in-types.md#string)                            | Identifier which must match if `type` is `MATCHING_ID`.                                        |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                  |
| ----------- | --------------------------------------- |
| ROS 1       | `foxglove_msgs/SceneEntityDeletion`     |
| ROS 2       | `foxglove_msgs/msg/SceneEntityDeletion` |
| JSON        | `foxglove.SceneEntityDeletion`          |
| Protobuf    | `foxglove.SceneEntityDeletion`          |
| FlatBuffers | `foxglove.SceneEntityDeletion`          |
| OMG IDL     | `foxglove::SceneEntityDeletion`         |
