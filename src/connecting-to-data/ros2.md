# ROS 2

Load local and remote [MCAP](../connecting-to-data/mcap.md) files containing ROS 2 data, or connect directly to a live ROS 2 stack.

## Live data

[Install ROS 2](https://wiki.ros.org/ROS/Installation), and make sure you're connected to the same network as the robot.

Then, in Lichtblick, select ["Open connection"](./introduction.md), either on the initial welcome pop up or via the app bar menu.

![open-connection](../images/open-connection.png)

## Foxglove WebSocket

Using Foxglove WebSocket will ensure a simple and reliable connection especially if you have a firewall between ROS and Lichtblick. This method requires opening only one port on your ROS host.

To use this option, you'll need to run an additional ROS node (`foxglove_bridge`). Follow the installation instructions [here]().

### Connecting 

After setting up the Foxglove bridge, select "Foxglove WebSocket" in the "Open connection" window, then insert the URL to your Foxglove bridge server.

![connect-to-foxglove-websocket](../images/connect-to-foxglove-websocket.png)

### Reset Connection

To reconnect to a Foxglove WebSocket in a different context, you must first clear the most recently visualized data in Foxglove.

To reset your visualizations and start a new session, resend the [`serverInfo message`](https://github.com/lichtblick-suite/ws-protocol/blob/main/docs/spec.md#fields) with an updated value for its optional sessionID field (`string`). This signals to the Foxglove WebSocket connection that you are initiating a fresh connection rather than attempting to restore a dropped one.

### Limitations 

Foxglove WebSocket connections allow both publishing data back to your ROS stack and reading or modifying ROS parameters.

## Rosbridge 

<div class="warning">
For better performance, we recommend using the Foxglove WebSocket connection instead.
</div>
<br>

If you prefer, you can connect Foxglove to your running ROS stack via WebSockets using a Rosbridge connection. This method also requires only a single open port between Foxglove and your robot.

A Rosbridge connection uses a standardized protocol to link Lichtblick with your ROS master over WebSockets. While it does require running an additional ROS node [rosbridge_server](https://wiki.ros.org/rosbridge_server), it is a good option if a network firewall separates ROS and Lichtblick, as it minimizes port exposure.

To open a Rosbridge connectionm, you need to have installed [rosbridge-suite](https://wiki.ros.org/rosbridge_suite):

`$ sudo apt install ros-galactic-rosbridge-suite`

Next, start the WebSocket server, and review the command printout to determine the port it is listening on (e.g. `ws://0.0.0.0:9090`):

`$ ros2 launch rosbridge_server rosbridge_websocket_launch.xml`

Finally "Open connection" in the "Open data source" dialog, select "Rosbridge" and then enter the URL to your Rosbridge server:

To test if everything is working well, you can check the topics tab on the left sidebar.

![connect-to-rosbridge](../images/connect-to-rosbridge.png)

### Limitations
Rosbridge connections support publishing back to your ROS stack, but not reading or setting ROS parameters.

## Remote File

Remote ROS 2 `.db3` files are not supported, but you can convert them into MCAP files for remote file support. Select the "Remote file" option after opening the "Open connection".

![open-remote-file](../images/open-remote-file.png)

Don't forget to [set up CORS](../connecting-to-data/live-data.html#cross-origin-resource-sharing-cors-setup) if you intend to host the files yourself and load them into Lichtblick.

## Local Data 

You can load local files for visualization by: 

* The "Open local file(s)..." in the initial pop up or the menu on the top left;
* By dragging the files from your OS file manager;

{{#include ../components/foxglove_note.md}}
