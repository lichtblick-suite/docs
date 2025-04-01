# Schema encodings

Both MCAP-based and websockets sources support several message and schema encodings.

## JSON

For JSON data, use schema encoding "`jsonschema`" and message encoding "`json`".

Connections via websocket require schemas to be JSON Schema definitions with `"type": "object"`.

Each message must be UTF-8 encoded JSON representing an object. Any binary data should be encoded as a base64 string within the JSON object. The schema should specify this using "contentEncoding": "base64" (e.g., `{ "type": "string", "contentEncoding": "base64" }`).

## Protobuf

For Protobuf data, use schema encoding `"protobuf"` and message encoding `"protobuf"`.

Lichtblick requires the schema data to be a binary [`FileDescriptorSet`](https://protobuf.dev/programming-guides/techniques/#self-description). For websocket connections, this binary data must also be base64-encoded since it is represented as a string.

Lichtblick also expects `schemaName` to be one of the message types defined in the `FileDescriptorSet`.

## FlatBuffers 

For FlatBuffers data, set the schema encoding to `flatbuffer` and the message encoding to `flatbuffer`.

Lichtblick requires the schema data to be a binary-encoded FlatBuffers schema (`.bfbs`) file, generated from the source FlatBuffers schema (`.fbs`) file. For websocket connections, this schema must be base64-encoded since it is represented as a string.

Use the FlatBuffers schema compiler to generate `.bfbs` files:

```sh
flatc --schema -b -o <PATH_TO_BFBS_OUTPUT_DIR> <PATH_TO_FBS_INPUT_DIR>
```

## ROS 1 and ROS 2

For ROS 1 data, use the schema encoding `ros1msg` and the message encoding `ros1`.

For ROS 2 data, use the schema encoding `ros2msg` or `ros2idl` and the message encoding `cdr`.

Lichtblick requires the schema data to be a concatenation of the referenced `.msg` or `.idl` file along with its dependencies. For details on the concatenated format, refer to the [MCAP specific documentation](https://mcap.dev/spec/registry#ros1msg-data-format).

## OMG IDL 

For IDL schemas with CDR data, use the schema encoding `omgidl` and the message encoding `cdr`.

To encode OMG IDL schemas into MCAP, follow the conventions outlined in the [MCAP Format Registry](https://mcap.dev/spec/registry#omgidl).
