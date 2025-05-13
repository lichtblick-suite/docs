# Raw Messages

A panel that makes it simple to inspect message paths in the data source.

As new messages are received for a specific path, the panel tree will show just the last message. It's also possible to expand and collapse keys, and that will persist across playback

![Raw messages panel](../images/raw-messages-panel.png)

A link to documentation about the selected schema is available at the top.

![Raw messages panel message link](../images/raw-messasges-panel-message-link.png)

## Settings 

| Field | Descripiton |
|----------|--------|
| Font size | Font size for text displayed on the panel |

## Controls and shortcuts


### Diff mode

Compares messages showing additions (green), deletions (red), and changes (yellow) to their fields across 2 categories:

- `previous message` - Compare the immediately previous message on the same message path;
- `custom` - Compare different topic messages in the same timestamp;

![Raw messages panel message link](../images/diff-mode.png)

### Loading current data to other panels

Raw messages panel aslo provides an feature that allow users to open a specific message they're currently analyzing in [Plot](../panels/plot-panel.md) and [State Transitions]().

![Raw messages panel message link](../images/raw-message-plot-shortcut.png)
![Raw messages panel message link](../images/raw-message-state-transitions-shortcut.png)


## Enum 

Raw Messages panel also shows additional information when a final topic is selected.


![Additional info on raw messages](../images/additional-value-on-raw-messages.png)
