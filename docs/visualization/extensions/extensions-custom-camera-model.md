---
sidebar_position: 2
title: Custom Camera Models
---

## Custom Camera Models

Custom camera model extensions enable support for specialized lens distortion or projection models beyond Lichtblick’s built-in camera model. By registering a custom camera model, you can ensure that camera images with unique distortion (e.g. fisheye or other wide-angle lenses) are interpreted correctly in Lichtblick’s Image panel. This allows the Images panel to accurately render images using your custom projection logic, just as it does for the standard pinhole camera model.

To register a custom camera model, use the `extensionContext.registerCameraModel` API in your extension’s `activate` function. This function ties a distortion model name (string) to a `CameraModelBuilder` – a function that takes a `CameraInfo` object (containing the camera’s calibration parameters like intrinsics and distortion coefficients) and returns an implementation of your camera model. The `CameraInfo` type represents the incoming calibration message (similar to ROS `CameraInfo` with fields such as K, D, etc.), and your `CameraModelBuilder` should use this data to construct a model with the necessary projection/unprojection logic. Once registered, Lichtblick will automatically use your model whenever it encounters a `CameraInfo` whose `distortion_model` matches the name you provided.

**Note:** Distortion model name matching is case-sensitive. Ensure that the `distortion_model` string in your incoming `CameraInfo` messages exactly matches the name you register. The Images panel will seamlessly switch to your custom model for any camera stream with that distortion model, without additional user configuration.

**Example:** To create a custom camera model, first implement a class that encapsulates your distortion model (for example, a `CylinderCameraModel` class implementing the necessary camera projection interface). Then, in your extension’s entry point (the `activate` function), register the new camera model using the `extensionContext.registerCameraModel`.

For example, the code below registers a camera model named `"CylinderCameraModel"` and supplies a builder function that instantiates a `CylinderCameraModel` with the provided calibration data:

```typescript
import { ExtensionContext, CameraInfo } from "@lichtblick/suite";
import { CylinderCameraModel } from "./CylinderCameraModel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerCameraModel({
    name: "CylinderCameraModel",
    modelBuilder: (cameraInfo: CameraInfo) =>
      new CylinderCameraModel(cameraInfo),
  });
}
```

In the code above, the string `"CylinderCameraModel"` is the unique name of your distortion model. This name should exactly match the `distortion_model` field in any camera calibration messages (camera info) that you want to be handled by your custom model. When Lichtblick encounters a camera calibration with `distortion_model: "CylinderCameraModel"`, it will call the provided builder function to create an instance of your `CylinderCameraModel` class for processing that camera’s data.

### Testing a Custom Camera Model in the User Scripts Panel

After registering your custom camera model, you can quickly **test it using the User Scripts panel**. A user script can intercept an existing camera calibration message, alter its `distortion_model` to your custom model’s name, and publish the modified message on a new topic. This allows you to feed an image through your custom distortion model and verify its behavior in real time.

For example, suppose you have a camera info topic `/CAM_FRONT/camera_info` from a front camera. You can create a user script to output a new camera info on `/camera_info_custom` with the same calibration data but the `distortion_model` set to `"CylinderCameraModel"`. An image panel subscribed to the new calibration topic (and the corresponding image topic) will then apply your custom distortion logic. Below is a sample user script that accomplishes this:

_**Note:** Ensure that the /camera_info_custom (output) topic is not already in use to avoid conflicts._

```typescript
import { Input } from "./types";
import { CameraCalibration } from "@foxglove/schemas";

export const DISTORTION_MODEL = "CylinderCameraModel";

export const inputs = ["/CAM_FRONT/camera_info"];
export const output = "/camera_info_custom";

export default function script(
  event: Input<"/CAM_FRONT/camera_info">
): CameraCalibration {
  return {
    ...event.message,
    distortion_model: DISTORTION_MODEL,
  };
}
```

In this script, we listen to the original camera info message on `/CAM_FRONT/camera_info`, copy its contents, and override the `distortion_model` field to `"CylinderCameraModel"`. The modified camera calibration is emitted on the `/camera_info_custom` topic. By opening the User Scripts panel in Lichtblick and running this script, you can then point an Image panel to use the `/camera_info_custom` calibration (along with the camera’s image topic). This setup will route the camera’s data through your custom distortion model, allowing you to verify that your `CylinderCameraModel` is functioning correctly in the visualization.
