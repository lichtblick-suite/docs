---
sidebar_position: 7
---

# Custom Camera Models

Add support for lenses or projections not covered by the built-in pinhole model (e.g., fisheye). When a camera stream’s calibration (`CameraInfo`) declares your distortion model, the Image panel uses your math to project/unproject pixels.

## Register via ExtensionContext

Register your model in `activate()` using `registerCameraModel()` from your [ExtensionContext](./extension-context):

```ts
import type {
  ExtensionContext,
  CameraInfo,
  ICameraModel,
} from "@lichtblick/suite";

class MyFisheyeModel implements ICameraModel {
  constructor(info: CameraInfo) {
    // store intrinsics / distortion params
  }
  // implement projection / unprojection methods as required by the app
}

export function activate(ctx: ExtensionContext): void {
  ctx.registerCameraModel({
    name: "MyFisheye", // must match CameraInfo.distortion_model
    modelBuilder: (info: CameraInfo) => new MyFisheyeModel(info),
  });
}
```

## Naming rules

- The `name` is compared to `CameraInfo.distortion_model` exactly (case-sensitive).
- When a calibration message matches the name, Lichtblick instantiates your model with that `CameraInfo`.

## Tips

- Keep the builder fast; heavy precomputation can be cached inside your model.
- Validate input arrays (intrinsics, distortion coeffs) and handle edge cases.
- Test with real calibration data whenever possible.
