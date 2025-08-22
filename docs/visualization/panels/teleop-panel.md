# Teleoperation Panel

The Teleoperation Panel allows you to remotely control your robot by sending [geometry\_msgs/Twist](https://docs.ros.org/en/api/geometry_msgs/html/msg/Twist.html) or [geometry\_msgs/msg/Twist](https://github.com/ros2/common_interfaces/blob/master/geometry_msgs/msg/Twist.msg) messages directly to your active ROS system.

Using the Teleoperation Panel:

To remotely maneuver your robot using the directional control interface, ensure you are actively connected via either a native ROS connection or through Rosbridge.

### General Settings

* Message Frequency: Determines how frequently geometry\_msgs/Twist or geometry\_msgs/msg/Twist messages are published.
* ROS Topic: Specifies the ROS topic where geometry\_msgs/Twist or geometry\_msgs/msg/Twist messages will be published.
* Up Control: Choose the parameter (linear/angular: x, y, or z) and define the value sent when the Up arrow is activated.
* Down Control: Select the parameter (linear/angular: x, y, or z) and define the value sent when the Down arrow is pressed.
* Left Control: Assign the parameter (linear/angular: x, y, or z) and specify the value sent when pressing the Left arrow.
* Right Control: Set the parameter (linear/angular: x, y, or z) and input the value sent when activating the Right arrow.

---
#### Supported Message Types:

Ensure your connection provides messages matching one of these compatible message types to utilize this panel effectively.
