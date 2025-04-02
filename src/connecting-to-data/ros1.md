# ROS 1

Load local and remote ROS 1 (`.bag`) files, or connect directly to a live ROS 1 stack.

## Live data

[Install ROS 1](https://wiki.ros.org/ROS/Installation), and make sure you're connected to the same network as the robot.

Then, in Lichtblick, select ["Open connection"](./introduction.md), either on the initial welcome pop up or via the app bar menu.

![open-connection](../images/open-connection.png)

### Live connections

You can use [Rosbridge](../connecting-to-data/rosbridge.md) or [Ros foxglove bridge](https://docs.foxglove.dev/docs/connecting-to-data/ros-foxglove-bridge) to establish a live connection between Lichtblick and ROS. This enables real-time data streaming, allowing you to interact with ROS topics, services, and parameters directly from Lichtblick.

## Native

<div class="warning">
Desktop Only
</div>

For direct access to your ROS master and nodes, connect using a native TCP (Transmission Control Protocol) connection.

Ensure you have a working [ROS 1 setup](https://wiki.ros.org/ROS/Installation) and then run `roscore` in your terminal.

Select "ROS 1" in the "Open data source" dialog, and enter your [ROS_MASTER_URI](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_MASTER_URI) (ROS master's IP and port) and [ROS_HOSTNAME](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_IP.2FROS_HOSTNAME):

![connect-to-ros1](../images/connect-to-ros1.png)

If you encounter connectivity issues, verify that your ROS stack and Lichtblick have unrestricted network access, as ROS communicates over multiple ports.

If ROS and Lichtblick are running on different machines, refer to the ROS 1 [Network Setup documentation](https://wiki.ros.org/ROS/NetworkSetup) to properly configure your environment.

## Remote File

For this option just select the "Remote file" in the "Open connection" option and enter the URL to your remote `.bag` file.

![open-remote-file](../images/open-remote-file.png)

Don't forget to [set up CORS](../connecting-to-data/live-data.html#cross-origin-resource-sharing-cors-setup) if you intend to host the files yourself and load them into Lichtblick.

## Local Data 

You can load local files for visualization by: 

* The "Open local file(s)..." in the initial pop up or the menu on the top left;
* You can drag'n drop the files from your OS file manager;

{{#include ../components/foxglove_note.md}}
