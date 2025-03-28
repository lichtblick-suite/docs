# Live Data

Connect to live data sources using Lichtblick's WebSocket, Rosbridge, and Velodyne Lidar integrations for real-time streaming. You can also load remote data files via URL for easy access and processing.

## Supported formats

|   | Supported formats              | Configuration options     |
|---|------------------------------|-----------------------------|
| **Foxglove WebSocket** | <ul><li>[ROS 1]()</li><li>[ROS 2]()</li><li>[Custom]()</li><li>[MCAP]()</li></ul> | WebSocket URL |
| **Rosbridge** | <ul><li>[ROS 1]()</li><li>[ROS 2]()</li></ul>| WebSocket URL |
| **ROS 1** | [ROS 1]() Desktop only | ROS_MASTER_URI and ROS_HOSTNAME |
| **Velodyne Lidar** | [Velydone]() Desktop only | UDP port |
| **Remote file** | <ul><li>[ROS 1]()</li><li>[MCAP]()</li></ul> | Requires CORS setup |

## Limitations 

When connecting to a live robotics stack, each connection will have different capabilities.

| Feature                  | Foxglove WebSocket | Rosbridge | ROS 1 |
|--------------------------|-------------------|-----------|------|
| **Stream ROS 1 data**    | ✓                 | ✓         | ✓    |
| **Stream ROS 2 data**    | ✓                 | ✓         |      |
| **Stream custom data**   | ✓                 |           |      |
| **Custom message schemas** | ✓                 | ✓         | ✓    |
| **Publish messages**     | ✓ (ROS 1, ROS 2, JSON) | ✓     | ✓    |
| **Call services**        | ✓                 | ✓         |      |
| **Call actions**         |                   |           |      |
| **Read and set parameters** | ✓                 |  | ✓    |
