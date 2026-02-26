# LogLevel

The severity level assigned to a log entry.

## Parent type

`LogLevel` appears in the [`Log`](./log.md) message schema.

## Values

| Name      | Value | Description       |
| --------- | ----- | ----------------- |
| `UNKNOWN` | 0     | The log level could not be determined. |
| `DEBUG`   | 1     | Detailed diagnostic output for debugging purposes. |
| `INFO`    | 2     | General informational messages about system operation. |
| `WARNING` | 3     | Indicates a potential issue that does not stop execution. |
| `ERROR`   | 4     | Signals a failure that may affect functionality. |
| `FATAL`   | 5     | A critical failure that causes the process to terminate. |
