# Message Path Syntax

In Lichtblick, message path syntax is utilized to precisely access specific data within your messages.

## Topics and Fields

Consider a message published on the `/my_models` topic:

```json
{
  "total": 4,
  "objects": [
    { "width": 10, "height": 20 },
    { "width": 15, "height": 30 },
    { "width": 20, "height": 40 },
    { "width": 25, "height": 50 }
  ]
}
```

To display all messages for this topic, simply use the topic name:

```javascript
/my_models =>
{
  total: 4,
  objects: [
    { width: 10, height: 20 },
    { width: 15, height: 30 },
    { width: 20, height: 40 },
    { width: 25, height: 50 }
  ]
}
```

To access nested fields, append the field name using dot notation:

```javascript
/my_models.total => 4
```

When typing in a message path input field, a list of matching autocomplete options will appear, including any topics or nested fields that contain the input text.

### Indexing into an Array

To access specific elements within an array, use bracket notation with the desired index:

```javascript
/my_models.objects[1].width => 15
/my_models.objects[-1].width => 25
```

## Slices

Consider a message on the `/my_options` topic:

```json
{
  "colors": [
    { "r": 10, "g": 20, "b": 100 },
    { "r": 15, "g": 30, "b": 50 },
    { "r": 20, "g": 40, "b": 20 },
    { "r": 25, "g": 50, "b": 70 },
    { "r": 30, "g": 60, "b": 90 }
  ],
  "numbers": [3, 5, 7, 9, 10]
}
```

Slices allow you to retrieve a subset of values:

```javascript
/my_options.colors[1:3] => [{ r: 15, g: 30, b: 50 }, { r: 20, g: 40, b: 20 }]
/my_options.numbers[-2:] => [9, 10]
```

When using dot notation after an array of objects, you can retrieve a specific field across all elements:

```javascript
/my_options.colors[1:3].r => [15, 20, 25]
/my_options.colors[:].g => [20, 30, 40, 50, 60]
```

### Using Variables in Slices

To slice based on variables, prefix the variable name with `$`. For example, defining `start` as `3` and `end` as `5`:

```javascript
/my_options.colors[$start:$end] => [{ r: 25, g: 50, b: 70 }, { r: 30, g: 60, b: 90 }]
/my_options.colors[$start:$end].b => [70, 90]
/my_options.numbers[$start:$end] => [9, 10]
```

## Filters

Consider messages on the `/my_books` topic:

**Message 1:**

```json
{
  "stats": {
    "pages": 100,
    "author": "Beatrice Potter"
  },
  "readers": [
    { "id": 1, "name": "John", "currentlyReading": true },
    { "id": 2, "name": "Mary", "currentlyReading": false },
    { "id": 3, "name": "Scott", "currentlyReading": true }
  ]
}
```

**Message 2:**

```json
{
  "stats": {
    "pages": 210,
    "author": "Tommy \"Two Gun\" Simon"
  },
  "readers": [
    { "id": 4, "name": "Anna", "currentlyReading": true },
    { "id": 5, "name": "Patrick", "currentlyReading": false },
    { "id": 6, "name": "Richard", "currentlyReading": false }
  ]
}
```

To filter messages based on field values (booleans, numbers, or strings), use comparison operators like `==`, `!=`, `<`, `<=`, `>`, and `>=`.

Apply filters within curly braces `{}` to select only matching messages:

```javascript
/my_books{stats.pages>200} =>
{
  stats: {
    pages: 210,
    author: "Tommy \"Two Gun\" Simon"
  }
}
```

### Filtering on Nested Fields

To filter messages using nested fields:

```javascript
/my_books{stats.pages>200} =>
{
  stats: {
    pages: 210,
    author: "Tommy \"Two Gun\" Simon"
  }
}
```

### Using Variables to Filter

Filters can be dynamic using variables. If `minPages` is set to `150`:

```javascript
/my_books{stats.pages>$minPages} =>
{
  stats: {
    pages: 210,
    author: "Tommy \"Two Gun\" Simon"
  }
}
```

### Using Multiple Filters

You can apply multiple conditions at once:

```javascript
/my_books.readers[:]{id==1}{isCurrentlyReading==true}.name =>
  "John" // message 1
  // No value returned for message 2

/my_books.readers[:]{id==1}{isCurrentlyReading==false}.name =>
  // No value returned for message 1
  // No value returned for message 2

/my_books.readers[:]{id==5}{isCurrentlyReading==false}.name =>
  // No value returned for message 1
  "Patrick" // message 2
```

### Other Considerations

- If a filter references a field that does not exist, the message is ignored.
- Filters can be used to refine queries dynamically, improving data handling efficiency.
- Brackets `[ ]` are used to reference specific elements in arrays while `{ }` applies conditions on message selection.
- Quotation marks in strings are not escaped, but you can use either single or double quotes to represent most values:

```javascript
/my_books{stats.author=='Tommy "Two Gun" Simon'}.readers[:].name =>
  // No value returned for message 1
  ["Dana", "Ethan", "Frank"] // message 2
```

- Variables are restricted to slicing and filtering within message paths and cannot be used elsewhere.
