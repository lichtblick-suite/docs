# LocationFix

A navigation satellite fix for any Global Navigation Satellite System

## Panel support

<!--TODO: Link missing documentation when available-->
`LocationFix` can be used in the following panels: [Map](#).

## Schema 

| Field                     | Type                                                   | Description                                                                                                                         |
|---------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `timestamp`               | [`time`](#)                                           | Time when the message was recorded.                                                                                                |
| `frame_id`                | [`string`](#)                                         | Reference frame for the sensor. Latitude and longitude are relative to the origin of this frame.                                  |
| `latitude`                | [`float64`](#)                                        | Latitude in degrees.                                                                                                               |
| `longitude`               | [`float64`](#)                                        | Longitude in degrees.                                                                                                              |
| `altitude`                | [`float64`](#)                                        | Altitude in meters.                                                                                           |
| `position_covariance`     | [`float64[9]`](#)                                     | Position covariance matrix (m²) relative to a tangential plane through the reported position. Components are ENU (East-North-Up) frame, stored in row-major order.            |
| `position_covariance_type`| [`PositionCovarianceType`](#)                         | If `position_covariance` is available, `position_covariance_type` must be set to indicate the type of covariance.                                                               |


## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding     | Schema                                   |
|--------------|------------------------------------------|
| ROS 1        | [`foxglove_msgs/LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/LocationFix.msg)          |
| ROS 2        | [`foxglove_msgs/msg/LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/LocationFix.msg)      |
| JSON         | [`foxglove.LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/LocationFix.json)        |
| Protobuf     | [`foxglove.LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/LocationFix.proto)   |
| FlatBuffers  | [`foxglove.LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/LocationFix.fbs)         |
| OMG IDL      | [`foxglove::LocationFix`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/LocationFix.idl)   |
