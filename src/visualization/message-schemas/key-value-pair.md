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
| ROS 1       | [`foxglove_msgs/KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/KeyValuePair.msg) |
| ROS 2       | [`foxglove_msgs/msg/KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/KeyValuePair.msg) |
| JSON        | [`foxglove.KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/KeyValuePair.json) |
| Protobuf    | [`foxglove.KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/KeyValuePair.proto) |
| FlatBuffers | [`foxglove.KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/KeyValuePair.fbs) |
| OMG IDL     | [`foxglove::KeyValuePair`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/KeyValuePair.idl) |
