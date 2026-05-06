---
sidebar_position: 19
title: "GeoJSON"
description: "Schema for GeoJSON data displayed as geographic overlays in the Map panel."
keywords: [geojson, map, geographic, gps, location, overlay, schema]
---

# GeoJSON

GeoJSON data for annotating maps.

## Panel support

`GeoJSON` is used in the [Map](../panels/map-panel.md) panel.

## Schema

| Field     | Type                                   | Description                             |
| --------- | -------------------------------------- | --------------------------------------- |
| `geojson` | [`string`](./built-in-types.md#string) | GeoJSON data encoded as a UTF-8 string. |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/GeoJSON.msg)        |
| ROS 2       | [`foxglove_msgs/msg/GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/GeoJSON.msg)    |
| JSON        | [`foxglove.GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/GeoJSON.json)      |
| Protobuf    | [`foxglove.GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/GeoJSON.proto) |
| FlatBuffers | [`foxglove.GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/GeoJSON.fbs)       |
| OMG IDL     | [`foxglove::GeoJSON`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/GeoJSON.idl) |
