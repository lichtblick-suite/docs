# NumericType

The data type used to represent a numeric value.

## Parent type

`NumericType` appears in the [`PackedElementField`](./packed-element-field.md) message schema.

## Values

| Name                                     | Value | Description                  |
| ---------------------------------------- | ----- | ---------------------------- |
| `UNKNOWN`                                | 0     | The numeric type could not be determined.              |
| `UINT8`                                  | 1     | A whole number stored as an unsigned 8-bit integer.    |
| `INT8`                                   | 2     | A whole number stored as a signed 8-bit integer.       |
| `UINT16`                                 | 3     | A whole number stored as an unsigned 16-bit integer.   |
| `INT16`                                  | 4     | A whole number stored as a signed 16-bit integer.      |
| [`uint32`](./built-in-types.md#uint32)   | 5     | A whole number stored as an unsigned 32-bit integer.   |
| `INT32`                                  | 6     | A whole number stored as a signed 32-bit integer.      |
| `FLOAT32`                                | 7     | A decimal number stored as a 32-bit floating-point.    |
| [`float64`](./built-in-types.md#float64) | 8     | A decimal number stored as a 64-bit floating-point.    |
