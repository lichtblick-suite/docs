# Color

A color represented in RGBA format.

## Panel support

<!--TODO: Link missing documentation when available-->

`Color` is used in the [3D](../panels/3d-panel.md) and [Image](#) panels.

## Parent schemas

`Color` appears in the following message schemas:

[`ArrowPrimitive`](./arrow-primitive.md), [`CircleAnnotation`](./circle-annotation.md), [`CubePrimitive`](./cube-primitive.md), [`CylinderPrimitive`](./cylinder-primitive.md), [`LinePrimitive`](./line-primitive.md), [`ModelPrimitive`](./model-primitive.md), [`PointsAnnotation`](./points-annotation.md), [`SpherePrimitive`](./sphere-primitive.md), [`TextAnnotation`](./text-annotation.md), [`TextPrimitive`](./text-primitive.md) and [`TriangleListPrimitive`](./triangle-list-primitive.md).

## Schema

| Field | Type                                     | Description                           |
| ----- | ---------------------------------------- | ------------------------------------- |
| `r`   | [`float64`](./built-in-types.md#float64) | Red value between 0 and 1             |
| `g`   | [`float64`](./built-in-types.md#float64) | Green value between 0 and 1           |
| `b`   | [`float64`](./built-in-types.md#float64) | Blue value between 0 and 1            |
| `a`   | [`float64`](./built-in-types.md#float64) | Alpha (opacity) value between 0 and 1 |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Color.msg)        |
| ROS 2       | [`foxglove_msgs/msg/Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Color.msg)    |
| JSON        | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Color.json)      |
| Protobuf    | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Color.proto) |
| FlatBuffers | [`foxglove.Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Color.fbs)       |
| OMG IDL     | [`foxglove::Color`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Color.idl) |
