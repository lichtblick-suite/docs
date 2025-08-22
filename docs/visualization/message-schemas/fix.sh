#!/bin/bash

FILE="$1"
TMP=$(mktemp)

while IFS= read -r line; do
  if echo "$line" | grep -qE '^\| *[^|]+ *\| *[^|]+ *\|'; then
    encoding=$(echo "$line" | cut -d'|' -f2 | xargs)
    schema=$(echo "$line" | cut -d'|' -f3 | xargs)
    schema_clean=$(echo "$schema" | sed 's/`//g')

    # Extrair última palavra após / ou . ou :
    last_word=$(echo "$schema_clean" | awk -F'[/:.]' '{print $NF}')

    case "$encoding" in
      "ROS 1")       url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros1/${last_word}.msg" ;;
      "ROS 2")       url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/ros2/${last_word}.msg" ;;
      "JSON")        url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/jsonschema/${last_word}.json" ;;
      "Protobuf")    url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/proto/foxglove/${last_word}.proto" ;;
      "FlatBuffers") url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/flatbuffer/${last_word}.fbs" ;;
      "OMG IDL")     url="https://github.com/foxglove/foxglove-sdk/blob/main/schemas/omgidl/foxglove/${last_word}.idl" ;;
      *)             url="" ;;
    esac

    if [ -n "$url" ]; then
      printf "| %-11s | [\`%s\`](%s) |\n" "$encoding" "$schema_clean" "$url" >> "$TMP"
    else
      echo "$line" >> "$TMP"
    fi
  else
    echo "$line" >> "$TMP"
  fi
done < "$FILE"

mv "$TMP" "$FILE"
echo "✅ Updated: $FILE"
