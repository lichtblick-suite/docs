# Built-in types

Primitive types are the building blocks of Foxglove's supported message schemas.

Each field in a message schema has a type. This type can be another message schema, an enum, or one of the primitive types documented below:

---

## boolean

Either `true` or `false`.

---

## bytes

Raw binary data, represented as a `Uint8Array` in JavaScript.

---

## enum

Number that serves as a key in a set of named constants.

---

## float64

64-bit floating-point number.

---

## string

String value encoded as UTF-8.

---

## time

| Field | Type   | Required | Description                        |
| ----- | ------ | -------- | ---------------------------------- |
| sec   | uint32 | ✓        | Seconds since epoch                |
| nsec  | uint32 | ✓        | Additional nanoseconds since epoch |

> **Note:** Foxglove's Protobuf schemas represent time values with `google.protobuf.Timestamp`, which uses `seconds` and `nanos` fields. However, in user scripts, message converters, and the rest of Foxglove, the values will appear as `sec` and `nsec` fields, for consistency with other data formats.

---

## duration

| Field | Type   | Required | Description                             |
| ----- | ------ | -------- | --------------------------------------- |
| sec   | int32  | ✓        | Seconds offset                          |
| nsec  | uint32 | ✓        | Nanoseconds offset (positive direction) |

> **Note:** Foxglove's Protobuf schemas represent duration values with `google.protobuf.Duration`, which uses `seconds` and `nanos` fields. However, in user scripts, message converters, and the rest of Foxglove, the values will appear as `sec` and `nsec` fields, for consistency with other data formats.

---

## uint32

Non-negative integer value between 0 and 2³²−1.

---

## int32

Integer value between −2³¹ and 2³¹−1.
