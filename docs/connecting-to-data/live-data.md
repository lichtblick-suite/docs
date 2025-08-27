---
position: 2
---

# Live Data

Connect to live data sources using Lichtblick's WebSocket, Rosbridge, and Velodyne Lidar integrations for real-time streaming. You can also load remote data files via URL for easy access and processing.

## Supported formats

|  | Supported formats | Configuration options |
| --- | --- | --- |
| **Foxglove WebSocket** | <ul><li>[ROS 1](./frameworks/ros1.md)</li><li>[ROS 2](./frameworks/ros2.md)</li><li>[Rosbridge](./frameworks/rosbridge.md)</li><li>[MCAP](./frameworks/mcap.md)</li></ul> | WebSocket URL |
| **Rosbridge** | <ul><li>[ROS 1](./frameworks/ros1.md)</li><li>[ROS 2](./frameworks/ros2.md)</li></ul> | WebSocket URL |
| **ROS 1** | [ROS 1](./frameworks/ros1.md) Desktop only | ROS_MASTER_URI and ROS_HOSTNAME |
| **Velodyne Lidar** | [Velydone](./frameworks/velodyne.md) Desktop only | UDP port |
| **Remote file** | <ul><li>[ROS 1](./frameworks/ros1.md)</li><li>[MCAP](./frameworks/mcap.md)</li></ul> | Requires CORS setup |

## Limitations

When connecting to a live robotics stack, each connection will have different capabilities.

| Feature                     | Foxglove WebSocket     | Rosbridge | ROS 1 |
| --------------------------- | ---------------------- | --------- | ----- |
| **Stream ROS 1 data**       | ✓                      | ✓         | ✓     |
| **Stream ROS 2 data**       | ✓                      | ✓         |       |
| **Stream custom data**      | ✓                      |           |       |
| **Custom message schemas**  | ✓                      | ✓         | ✓     |
| **Publish messages**        | ✓ (ROS 1, ROS 2, JSON) | ✓         | ✓     |
| **Call services**           | ✓                      | ✓         |       |
| **Call actions**            |                        |           |       |
| **Read and set parameters** | ✓                      |           | ✓     |

## Cross-Origin Resource Sharing (CORS) setup

To load remote data files, they must be hosted on a server or cloud provider that supports **Cross-Origin Resource Sharing (CORS)** and **range requests**.

For seamless playback and analysis in **Lichtblick**, we recommend using cloud providers like **Amazon S3, Google Cloud Storage (GCS), or Azure Storage**. While you can host files on your own server, setting up CORS and range request support can be complex and time-consuming.

### Handling Sensitive Data

If your data is sensitive, use a **signed URL** to securely grant temporary access. Ensure that the URL points directly to the resource, as redirects will not work with CORS.

- **S3** – [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)
- **GCS** – [Signed URLs](https://cloud.google.com/storage/docs/access-control/signed-urls)
- **Azure Storage** – [Grant limited access with SAS](https://learn.microsoft.com/en-us/azure/storage/common/storage-sas-overview)

Since signed URLs expire after a set time, consider configuring your server to generate them dynamically for authenticated users.

### Configuring CORS

To enable remote data loading, you need to properly configure CORS. For example, if you're using **Amazon S3**, you can define CORS settings using **Terraform** or another infrastructure-as-code tool. Check out the following example of a Terraform config for an S3 bucket:

```sh
cors_rule {
  allowed_methods = ["GET", "HEAD", "OPTIONS"]
  allowed_origins = ["https://yourdomain.com"]
  allowed_headers = ["*"]
  expose_headers = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```

And a Terraform config for a GCS bucket:

```sh
cors {
  origin = ["https://yourdomain.com"]
  method = ["GET", "HEAD", "OPTIONS"]
  response_header = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```
