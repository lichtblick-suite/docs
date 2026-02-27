# LineType

An enumeration that defines how a set of input points is connected to form lines.

## Parent type

`LineType` appears in the [`LinePrimitive`](./line-primitive.md) message schema.

## Values

| Name         | Value | Description                                     |
| ------------ | ----- | ----------------------------------------------- |
| `LINE_STRIP` | 0     | A series of connected segments linking consecutive points: 0-1, 1-2, ..., (n-1)-n |
| `LINE_LOOP`  | 1     | A closed shape where the last point connects back to the first: 0-1, 1-2, ..., (n-1)-n, n-0 |
| `LINE_LIST`  | 2     | Separate, unconnected segments drawn between paired points: 0-1, 2-3, 4-5, ... |
