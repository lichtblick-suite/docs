# Log

A log message

## Panel support

<!--TODO: Link missing documentation when available-->

`Log` can be used in the following panels: [Log](#).

## Schema

| Field       | Type                                   | Description                                                             |
| ----------- | -------------------------------------- | ----------------------------------------------------------------------- |
| `timestamp` | [`time`](./built-in-types.md#time)     | Time when the log message was recorded.                                 |
| `level`     | [`LogLevel`](./enum-log-level.md)      | Severity level of the log message (e.g., debug, info, warning, error).  |
| `message`   | [`string`](./built-in-types.md#string) | The log message content.                                                |
| `name`      | [`string`](./built-in-types.md#string) | Name of the process, node, or component that generated the log message. |
| `file`      | [`string`](./built-in-types.md#string) | Source filename where the log entry originated.                         |
| `line`      | [`uint32`](./built-in-types.md#uint32) | Line number in the source file corresponding to the log event.          |

## Reference implementations

Foxglove schemas are independent of any specific framework and can be used with any supported message encoding. The schema names should be specified as seen below:

| Encoding    | Schema                                                                                                |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| ROS 1       | [`foxglove_msgs/Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/Log.msg)        |
| ROS 2       | [`foxglove_msgs/msg/Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/Log.msg)    |
| JSON        | [`foxglove.Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/Log.json)      |
| Protobuf    | [`foxglove.Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/Log.proto) |
| FlatBuffers | [`foxglove.Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/Log.fbs)       |
| OMG IDL     | [`foxglove::Log`](https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/Log.idl) |
