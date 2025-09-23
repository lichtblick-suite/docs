# CameraCalibration

Contains intrinsic and extrinsic calibration parameters for a camera.

## Panel support

<!--TODO: Link missing documentation when available-->

`CameraCalibration` is supported in the following panels: [3D](../panels/3d-panel.md) and [Image](#).

## Schema

| Field              | Type                                         | Description                                                                                                                           |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`        | [`time`](./built-in-types.md#time)           | Time at which the calibration parameters are valid.                                                                                   |
| `frame_id`         | [`string`](./built-in-types.md#string)       | Reference frame of the camera. The origin is the optical center. +X points right, +Y points down, and +Z points into the image plane. |
| `width`            | [`uint32`](./built-in-types.md#uint32)       | Image width in pixels.                                                                                                                |
| `height`           | [`uint32`](./built-in-types.md#uint32)       | Image height in pixels.                                                                                                               |
| `distortion_model` | [`string`](./built-in-types.md#string)       | Distortion model used for the camera lens.                                                                                            |
| `D`                | [`float64[]`](./built-in-types.md#float64)   | Distortion coefficients, format depends on the chosen model.                                                                          |
| `K`                | [`float64[9]`](./built-in-types.md#float64)  | Intrinsic matrix of the raw (distorted) image, in 3x3 row-major format.                                                               |
| `R`                | [`float64[9]`](./built-in-types.md#float64)  | Rectification matrix for stereo configurations, 3x3 row-major format.                                                                 |
| `P`                | [`float64[12]`](./built-in-types.md#float64) | Projection matrix of the rectified image, 3x4 row-major format.                                                                       |

## Distortion models

The following distortion models are supported:

- `plumb_bob`: k1, k2, p1, p2, k3
- `rational_polynomial`: k1, k2, p1, p2, k3, k4, k5, k6
- `kannala_brandt`: k1, k2, k3, k4

The `plumb_bob` and `rational_polynomial` models are based on OpenCV’s pinhole model.  
The `kannala_brandt` model corresponds to OpenCV’s fisheye model.

## K — Intrinsic matrix

A 3x3 matrix used to project 3D camera coordinates to 2D pixel coordinates:

```
[fx  0  cx]
[ 0 fy  cy]
[ 0  0   1]
```

Where `fx`, `fy` are the focal lengths, and `cx`, `cy` are the optical center.

## R — Rectification matrix

Used to align the camera’s coordinate frame with a common stereo image plane, ensuring the epipolar lines are parallel in both images.

## P — Projection matrix

```
[fx'  0  cx'  Tx]
[ 0  fy' cy'  Ty]
[ 0   0   1    0]
```

This matrix projects 3D points into rectified 2D image space using possibly updated intrinsics (`fx'`, `fy'`, `cx'`, `cy'`).  
For monocular setups, `Tx = Ty = 0`.

In stereo configurations:

- The first (left) camera has `Tx = Ty = 0`.
- The second (right) camera usually has `Ty = 0`, and `Tx = -fx' * B`, where `B` is the baseline distance.

Given a 3D point `[X Y Z]'`, its projection `[x y]` on the image is computed as:

```
[u v w]' = P * [X Y Z 1]'
x = u / w
y = v / w
```

This applies to both images in a stereo pair.

## Reference implementations

Foxglove schemas are implementation-independent and can be used with any of the supported message encodings:

| Encoding    | Schema                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/CameraCalibration.msg)        |
| ROS 2       | [`foxglove_msgs/msg/CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/CameraCalibration.msg)    |
| JSON        | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/CameraCalibration.json)      |
| Protobuf    | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/CameraCalibration.proto) |
| FlatBuffers | [`foxglove.CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/CameraCalibration.fbs)       |
| OMG IDL     | [`foxglove::CameraCalibration`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/CameraCalibration.idl) |
