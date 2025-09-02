---
sidebar_position: 5
---

# Create Custom Camera Model

Build a custom camera model extension to handle specialized camera configurations not supported by the standard camera models in Lichtblick.

Custom camera models are essential for fisheye cameras, omnidirectional cameras, multi-lens systems, and industrial cameras with proprietary calibration formats.

## Prerequisites

See the [Getting Started](./introduction.md#getting-started) section for extension setup requirements.

## Camera model interface

Your custom camera model must implement the `ICameraModel` interface:

```typescript
import { CameraInfo, ICameraModel, Vector2, Vector3 } from "@lichtblick/suite";

export type Matrix3 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type Matrix3x4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type Vec8 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

interface ICameraModel {
  /** Intrinsic parameters */
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  D: Readonly<Vec8>;
  K: Readonly<Matrix3>;
  P: Readonly<Matrix3x4>;
  R: Readonly<Matrix3>;
  width: number;
  height: number;

  /** Projects a 2D image pixel onto a 3D point on the projection plane */
  projectPixelTo3dPlane(out: Vector3, pixel: Readonly<Vector2>): Vector3;

  /** Projects a 2D image pixel into a normalized 3D ray direction */
  projectPixelTo3dRay(out: Vector3, pixel: Readonly<Vector2>): Vector3;
}
```

## Example: Cylindrical camera model

```typescript
import {
  ExtensionContext,
  CameraInfo,
  ICameraModel,
  Vector2,
  Vector3,
} from "@lichtblick/suite";

export type Matrix3 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
export type Matrix3x4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];
export type Vec8 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

/**
 * A cylindrical camera model that can be used to rectify, unrectify, and project pixel coordinates.
 *
 * In this model the image is assumed to be formed by projecting the scene onto a cylindrical surface.
 * The intrinsic matrix `K` represents the parameters of the raw (cylindrically distorted) image,
 * while the projection matrix `P` relates to the processed cylindrical projection.
 */
export class CylinderCameraModel implements ICameraModel {
  public fx: number;
  public fy: number;
  public cx: number;
  public cy: number;
  /**
   * Distortion parameters `[k1, k2, p1, p2, k3, k4, k5, k6]`. All eight parameters shall be set to zero.
   */
  public D: Readonly<Vec8>;
  /**
   * Intrinsic camera matrix for the raw (distorted) images. 3x3 row-major matrix.
   */
  public K: Readonly<Matrix3>;
  /**
   * Projection matrix (not applicable for cylindrical model)
   */
  public P: Readonly<Matrix3x4>;
  /**
   * Rectification matrix (stereo cameras only). 3x3 row-major matrix.
   */
  public R: Readonly<Matrix3>;
  /** The full camera image width in pixels. */
  public readonly width: number;
  /** The full camera image height in pixels. */
  public readonly height: number;

  public constructor(cameraInfo: CameraInfo) {
    const {
      binning_x,
      binning_y,
      roi,
      distortion_model: model,
      D,
      K,
      P,
      R,
      width,
      height,
    } = cameraInfo;

    this.fx = K[0] ?? 0;
    this.fy = K[4] ?? 0;
    this.cx = K[2] ?? 0;
    this.cy = K[5] ?? 0;

    if (width <= 0 || height <= 0) {
      throw new Error(`Invalid image size ${width}x${height}`);
    }
    if (model.length > 0 && model !== "CylinderCameraModel") {
      throw new Error(`Unrecognized distortion_model "${model}"`);
    }
    if (K.length !== 0 && K.length !== 9) {
      throw new Error(`K.length=${K.length}, expected 9`);
    }
    if (this.fx === 0 || this.fy === 0) {
      throw new Error(`Invalid focal length (fx=${this.fx}, fy=${this.fy})`);
    }

    const D8 = [...D];
    while (D8.length < 8) {
      D8.push(0);
    }
    this.D = D8 as Vec8;
    this.K = K.length === 9 ? (K as Matrix3) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    this.P = P as Matrix3x4;
    this.R = R.length === 9 ? (R as Matrix3) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    this.width = width;
    this.height = height;

    // Binning = 0 is considered the same as binning = 1 (no binning).
    const binningX = binning_x !== 0 ? binning_x : 1;
    const binningY = binning_y !== 0 ? binning_y : 1;

    const adjustBinning = binningX > 1 || binningY > 1;
    const adjustRoi = roi.x_offset !== 0 || roi.y_offset !== 0;

    if (adjustBinning || adjustRoi) {
      throw new Error(
        "Failed to initialize camera model: unable to handle adjusted binning and adjusted roi camera models."
      );
    }
  }

  /**
   * Projects a 2D image pixel onto a 3D point on the unit cylinder.
   */
  public projectPixelTo3dPlane(
    out: Vector3,
    pixel: Readonly<Vector2>
  ): Vector3 {
    const { K } = this;
    const fx = K[0];
    const fy = K[4];
    const cx = K[2];
    const cy = K[5];

    // Undo K to get normalized coordinates
    out.x = (pixel.x - cx) / fx;
    out.y = (pixel.y - cy) / fy;
    out.z = 1.0;

    const theta = out.x;
    out.x = Math.sin(theta);
    out.z = Math.cos(theta);

    return out;
  }

  /**
   * Projects a 2D image pixel into a normalized 3D ray direction for the cylindrical camera model.
   */
  public projectPixelTo3dRay(out: Vector3, pixel: Readonly<Vector2>): Vector3 {
    this.projectPixelTo3dPlane(out, pixel);

    // Normalize the ray direction
    const invNorm =
      1.0 / Math.sqrt(out.x * out.x + out.y * out.y + out.z * out.z);
    out.x *= invNorm;
    out.y *= invNorm;
    out.z *= invNorm;

    return out;
  }
}

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerCameraModel({
    name: "CylinderCameraModel", // Camera model name
    modelBuilder: (info) => new CylinderCameraModel(info), // Camera model constructor
  });
}
```

## Multiple models in one extension

```typescript
export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerCameraModel({
    name: "CylinderCameraModel",
    modelBuilder: (info) => new CylinderCameraModel(info),
  });

  extensionContext.registerCameraModel({
    name: "FisheyeCameraModel",
    modelBuilder: (info) => new FisheyeCameraModel(info),
  });

  extensionContext.registerCameraModel({
    name: "CustomIndustrialModel",
    modelBuilder: (info) => new CustomIndustrialModel(info),
  });
}
```

## Building and testing

Follow the standard [extension building process](./#building-and-testing).

### Testing your camera model

1. Install your extension
2. Load data with camera_info messages using your distortion model
3. Verify Image and 3D panels correctly use your model

## Common use cases

### Converting from other formats

Many camera calibration tools use different parameter formats:

## Best practices

- **Validate inputs**: Check for NaN/Infinity values and handle edge cases in constructor
- **Performance**: Cache computed parameters for repeated calls
- **Documentation**: Comment your camera model parameters clearly
- **Error handling**: Throw descriptive errors for invalid configurations

```typescript
public constructor(cameraInfo: CameraInfo) {
  // Validate image dimensions
  if (width <= 0 || height <= 0) {
    throw new Error(`Invalid image size ${width}x${height}`);
  }

  // Validate focal lengths
  if (this.fx === 0 || this.fy === 0) {
    throw new Error(`Invalid focal length (fx=${this.fx}, fy=${this.fy})`);
  }

  // Check distortion model compatibility
  if (model.length > 0 && model !== "ExpectedModelName") {
    throw new Error(`Unrecognized distortion_model "${model}"`);
  }
}
```

Your custom camera model extension is now ready to handle specialized camera configurations in Lichtblick!
