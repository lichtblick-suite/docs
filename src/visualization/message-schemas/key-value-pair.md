# KeyValuePair

A key with its associated value.

## Parent schema

`KeyValuePair` appears in the [`SceneEntity`](./scene-entity.md) message schema.

## Schema

| Field   | Type                                   | Description |
| ------- | -------------------------------------- | ----------- |
| `key`   | [`string`](./built-in-types.md#string) | Key         |
| `value` | [`string`](./built-in-types.md#string) | Value       |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                           |
| ----------- | -------------------------------- |
| ROS 1       | `foxglove_msgs/KeyValuePair`     |
| ROS 2       | `foxglove_msgs/msg/KeyValuePair` |
| JSON        | `foxglove.KeyValuePair`          |
| Protobuf    | `foxglove.KeyValuePair`          |
| FlatBuffers | `foxglove.KeyValuePair`          |
| OMG IDL     | `foxglove::KeyValuePair`         |
