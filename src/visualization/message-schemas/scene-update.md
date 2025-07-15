# SceneUpdate

An update to the entities displayed in a 3D scene.

## Panel support

<!--TODO: Link missing documentation when available-->

`SceneUpdate` is used in the [3D](#) and [Image](#) panels.

## Schema

| Field       | Type                                                  | Description                       |
| ----------- | ----------------------------------------------------- | --------------------------------- |
| `deletions` | [`SceneEntityDeletion[]`](./scene-entity-deletion.md) | Scene entities to delete.         |
| `entities`  | [`SceneEntity[]`](./scene-entity.md)                  | Scene entities to add or replace. |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                          |
| ----------- | ------------------------------- |
| ROS 1       | `foxglove_msgs/SceneUpdate`     |
| ROS 2       | `foxglove_msgs/msg/SceneUpdate` |
| JSON        | `foxglove.SceneUpdate`          |
| Protobuf    | `foxglove.SceneUpdate`          |
| FlatBuffers | `foxglove.SceneUpdate`          |
| OMG IDL     | `foxglove::SceneUpdate`         |
