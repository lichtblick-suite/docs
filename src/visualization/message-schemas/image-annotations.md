# ImageAnnotations

Array of annotations for a 2D image.

## Panel support

<!--TODO: Link missing documentation when available-->

`ImageAnnotations` is used in the [`Image`](#) panel.

## Schema

| Field     | Type                                           | Description         |
| --------- | ---------------------------------------------- | ------------------- |
| `circles` | [`CircleAnnotation[]`](./circle-annotation.md) | Circle annotations. |
| `points`  | [`PointsAnnotation[]`](./points-annotation.md) | Points annotations. |
| `texts`   | [`TextAnnotation[]`](./text-annotation.md)     | Text annotations.   |

## Reference implementations

Foxglove schemas are framework-agnostic and can be implemented using any supported message encoding:

| Encoding    | Schema                               |
| ----------- | ------------------------------------ |
| ROS 1       | `foxglove_msgs/ImageAnnotations`     |
| ROS 2       | `foxglove_msgs/msg/ImageAnnotations` |
| JSON        | `foxglove.ImageAnnotations`          |
| Protobuf    | `foxglove.ImageAnnotations`          |
| FlatBuffers | `foxglove.ImageAnnotations`          |
| OMG IDL     | `foxglove::ImageAnnotations`         |
