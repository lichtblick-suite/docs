# Color

A color represented in RGBA format.

## Panel support

<!--TODO: Link missing documentation when available-->

`Color` is used in the [3D](#) and [Image](#) panels.

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

| Encoding    | Schema                    |
| ----------- | ------------------------- |
| ROS 1       | `foxglove_msgs/Color`     |
| ROS 2       | `foxglove_msgs/msg/Color` |
| JSON        | `foxglove.Color`          |
| Protobuf    | `foxglove.Color`          |
| FlatBuffers | `foxglove.Color`          |
| OMG IDL     | `foxglove::Color`         |
