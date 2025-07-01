# RawAudio

A block of an audio bitstream


## Schema 

| Field                 | Type                          | Description                                                                                                        |
|-----------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------|
| `timestamp`           | [`time`](#)                   | Timestamp indicating the start of the audio block.                                                                |
| `data`                | [`bytes`](#)                  | Raw audio data. Samples are interleaved and encoded in little-endian format.                                       |
| `format`              | [`string`](#)                 | Audio format. Only `'pcm-s16'` (16-bit signed PCM) is currently supported.                                         |
| `sample_rate`         | [`uint32`](#)                 | Sample rate in Hertz (Hz).                                                                                         |
| `number_of_channels`  | [`uint32`](#)                 | Number of audio channels.                                                                                          |



## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding     | Schema                                   |
|--------------|------------------------------------------|
| ROS 1        | [`foxglove_msgs/RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/RawAudio.msg)          |
| ROS 2        | [`foxglove_msgs/msg/RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/RawAudio.msg)      |
| JSON         | [`foxglove.RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/RawAudio.json)        |
| Protobuf     | [`foxglove.RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/RawAudio.proto)   |
| FlatBuffers  | [`foxglove.RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/RawAudio.fbs)         |
| OMG IDL      | [`foxglove::RawAudio`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/RawAudio.idl)   |
