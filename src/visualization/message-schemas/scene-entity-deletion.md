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

| Encoding    | Schema                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneEntityDeletion.msg)        |
| ROS 2       | [`foxglove_msgs/msg/SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneEntityDeletion.msg)    |
| JSON        | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneEntityDeletion.json)      |
| Protobuf    | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneEntityDeletion.proto) |
| FlatBuffers | [`foxglove.SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneEntityDeletion.fbs)       |
| OMG IDL     | [`foxglove::SceneEntityDeletion`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneEntityDeletion.idl) |
