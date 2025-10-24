# SceneUpdate

An update to the entities displayed in a 3D scene.

## Panel support

<!--TODO: Link missing documentation when available-->

`SceneUpdate` is used in the [3D](../panels/3d-panel.md) and [Image](../panels/image-panel.md) panels.

## Schema

| Field       | Type                                                  | Description                       |
| ----------- | ----------------------------------------------------- | --------------------------------- |
| `deletions` | [`SceneEntityDeletion[]`](./scene-entity-deletion.md) | Scene entities to delete.         |
| `entities`  | [`SceneEntity[]`](./scene-entity.md)                  | Scene entities to add or replace. |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                          |
| ----------- | ------------------------------- |
| ROS 1       | [`foxglove_msgs/SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/SceneUpdate.msg) |
| ROS 2       | [`foxglove_msgs/msg/SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/SceneUpdate.msg) |
| JSON        | [`foxglove.SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/SceneUpdate.json) |
| Protobuf    | [`foxglove.SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/SceneUpdate.proto) |
| FlatBuffers | [`foxglove.SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/SceneUpdate.fbs) |
| OMG IDL     | [`foxglove::SceneUpdate`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/SceneUpdate.idl) |
