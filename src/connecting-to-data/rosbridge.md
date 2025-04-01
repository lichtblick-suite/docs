# Rosbridge

<div class="warning">
For better performance, we recommend using the Foxglove websocket connection instead.
</div>

The rosbridge package enables communication between [ROS 1](../connecting-to-data/ros1.md) or [ROS 2](../connecting-to-data/ros2.md) and external applications via a websocket connection. It allows non-ROS systems, including web applications, to interact with ROS topics, services, and parameters.

## Overview 
Rosbridge provides a websocket-based API for sending and receiving ROS messages over the network. It is designed for general-purpose communication, enabling integration with web applications, cloud services, and custom remote interfaces.

**Key features:**

* Supports ROS 1 and ROS 2

* Implements the rosbridge_protocol for structured websocket communication

* Enables non-ROS clients to subscribe, publish, and call services

* Allows remote monitoring and control of ROS systems from web applications

## Connecting 

A Rosbridge connection uses a standardized protocol to link Lichtblick with your ROS master over websockets. While it does require running an additional ROS node [rosbridge_server](https://wiki.ros.org/rosbridge_server), it is a good option if a network firewall separates ROS and Lichtblick, as it minimizes port exposure.

To open a Rosbridge connection, you need to have installed [rosbridge-suite](https://wiki.ros.org/rosbridge_suite):

`$ sudo apt install ros-noetic-rosbridge-suite`

Next, start the websocket server, and review the command printout to determine the port it is listening on (e.g. `ws://0.0.0.0:9090`):

`$ roslaunch rosbridge_server rosbridge_websocket.launch`

Finally "Open connection" in the "Open data source" dialog, select "Rosbridge" and then enter the URL to your Rosbridge server:

To test if everything is working well, you can check the topics tab on the left sidebar.

![connect-to-rosbridge](../images/connect-to-rosbridge.png)

## Example connection 

As you can see below this enables real-time communication between ROS and Lichtblick using rosridge websocket. 

In the example, the ROSBridge server runs inside a Docker container, exposing a websocket interface that Lichtblick can connect to. Data is exchanged by publishing and subscribing to ROS topics via websocket messages, allowing seamless integration between ROS and external applications. 

![connect-to-rosbridge-real-time](../images/rosbridge-connection-to-lichtblick.png)