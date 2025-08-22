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
| ROS 1       | [`foxglove_msgs/ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/ImageAnnotations.msg) |
| ROS 2       | [`foxglove_msgs/msg/ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/ImageAnnotations.msg) |
| JSON        | [`foxglove.ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/ImageAnnotations.json) |
| Protobuf    | [`foxglove.ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/ImageAnnotations.proto) |
| FlatBuffers | [`foxglove.ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/ImageAnnotations.fbs) |
| OMG IDL     | [`foxglove::ImageAnnotations`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/ImageAnnotations.idl) |
