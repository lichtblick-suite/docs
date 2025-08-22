# SceneEntityDeletionType

An enumeration indicating which entities should match a `SceneEntityDeletion` command.

## Parent type

`SceneEntityDeletionType` appears in the [`SceneEntityDeletion`](./scene-entity-deletion.md) message schema.

## Values

| Name          | Value | Description                                                           |
| ------------- | ----- | --------------------------------------------------------------------- |
| `MATCHING_ID` | 0     | Delete the existing entity on the same topic that has the provided id |
| `ALL`         | 1     | Delete all existing entities on the same topic                        |
