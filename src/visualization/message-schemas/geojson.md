# GeoJSON

GeoJSON data for annotating maps.

## Panel support

<!--TODO: Link missing documentation when available-->

`GeoJSON` is used in the [Map](#) panel.

## Schema

| Field     | Type                                   | Description                             |
| --------- | -------------------------------------- | --------------------------------------- |
| `geojson` | [`string`](./built-in-types.md#string) | GeoJSON data encoded as a UTF-8 string. |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                      |
| ----------- | --------------------------- |
| ROS 1       | `foxglove_msgs/GeoJSON`     |
| ROS 2       | `foxglove_msgs/msg/GeoJSON` |
| JSON        | `foxglove.GeoJSON`          |
| Protobuf    | `foxglove.GeoJSON`          |
| FlatBuffers | `foxglove.GeoJSON`          |
| OMG IDL     | `foxglove::GeoJSON`         |
