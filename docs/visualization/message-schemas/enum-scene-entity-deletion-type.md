---
sidebar_position: 16
title: "SceneEntityDeletionType"
description: "Enum defining deletion scope for SceneEntityDeletion messages in the 3D panel."
keywords: [scene entity deletion type, enum, 3d panel, deletion, schema]
---

# SceneEntityDeletionType

An enumeration that specifies the scope of entities targeted by a `SceneEntityDeletion` command.

## Parent type

`SceneEntityDeletionType` appears in the [`SceneEntityDeletion`](./scene-entity-deletion.md) message schema.

## Values

| Name          | Value | Description                                                           |
| ------------- | ----- | --------------------------------------------------------------------- |
| `MATCHING_ID` | 0     | Removes only the entity on the same topic whose id matches the one provided. |
| `ALL`         | 1     | Removes every entity currently published on the same topic.                  |
