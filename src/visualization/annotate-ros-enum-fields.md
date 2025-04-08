# Annotating ROS Enum Fields

ROS messages do not natively support enumerations, but Lichtblick provides two ways to treat constant values as enums: using a separate enum message or applying inline annotations.

## Using Separate Enum Messages

Traditionally, ROS messages define enums by declaring named constants within a message definition alongside a corresponding field of the same type. For example, the following `PrimaryColor` message defines constants for different colors:

```ros
# In color_msgs/PrimaryColor.msg

uint8 RED=1
uint8 YELLOW=2
uint8 BLUE=3

uint8 data
```

Another message can then reference `PrimaryColor` as a field:

```ros
# In color_msgs/Object.msg

color_msgs/PrimaryColor color
```

Lichtblick recognizes that `PrimaryColor` defines named constants (`RED`, `YELLOW`, `BLUE`) adjacent to the `data` field with a matching `uint8` type. As a result, the platform displays these constant names alongside raw values in visualization panels such as **Raw Messages** and **State Transitions**.

### Note:
Using separate enum messages requires accessing the value indirectly (e.g., `.color.data`). To simplify access, consider using inline annotations.

## Using Inline Enum Annotations

Lichtblick allows you to annotate enum fields directly, eliminating the need for an intermediary message.

### Steps:
1. Convert the enum field to its primitive type (e.g., `uint8`).
2. Add an accompanying field with a `_lichtblick_enum` suffix that references the enum schema. Define this annotation on the line before the field declaration:

```ros
# In color_msgs/Object.msg

color_msgs/PrimaryColor color_lichtblick_enum
uint8 color
```

Double underscores (`__lichtblick_enum`) are also supported, though only valid in ROS 1.

### Updating the Enum Message
With inline annotations, you can remove the `data` field from the enum message, making it an empty structure:

```ros
# In color_msgs/PrimaryColor.msg

uint8 RED=1
uint8 YELLOW=2
uint8 BLUE=3
```

- In **ROS 1**, an empty message does not affect serialization.
- In **ROS 2**, an empty message introduces an extra padding byte in serialization.

Now, the `color` value is stored directly in `.color`, rather than `.color.data`. Lichtblick will recognize the annotation and display the `PrimaryColor` constants in the **Raw Messages** and **State Transitions** panels.
