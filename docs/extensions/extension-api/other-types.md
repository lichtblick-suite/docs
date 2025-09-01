---
sidebar_position: 10
---

# Other types

All public types live in `@lichtblick/suite` — see the package for the authoritative source: https://www.npmjs.com/package/@lichtblick/suite

Import example:

```ts
import type {
  Topic,
  Subscription,
  MessageEvent,
  RenderState,
  PanelExtensionContext,
  ExtensionContext,
} from "@lichtblick/suite";
```

## Core

```ts
// Utility
export type Immutable<T> = Readonly<T>;

// Primitives
export type ParameterValue =
  | undefined
  | boolean
  | number
  | string
  | Date
  | Uint8Array
  | ParameterValue[]
  | { [key: string]: ParameterValue };

export type VariableValue =
  | undefined
  | boolean
  | number
  | string
  | VariableValue[]
  | { [key: string]: VariableValue };

export type VariableStruct = { [key: string]: VariableValue };

export type AppSettingValue = string | number | boolean | undefined;
```

## Topics & Messages

```ts
export type Topic = {
  name: string;
  schemaName: string;
  convertibleTo?: readonly string[];
};

export type Subscription = {
  topic: string;
  convertTo?: string;
  preload?: boolean;
};

export type Metadata = { name: string; metadata: Record<string, string> };

export type MessageEvent<T = unknown> = {
  topic: string;
  schemaName: string;
  receiveTime: Time;
  publishTime?: Time;
  message: T;
  sizeInBytes: number;
  originalMessageEvent?: MessageEvent;
};
```

## Panel Runtime

```ts
export interface LayoutActions {
  addPanel(params: {
    position: "sibling";
    type: string;
    updateIfExists: boolean;
    getState: (existing?: unknown) => unknown;
  }): void;
}

export type RenderState = {
  currentFrame?: MessageEvent[];
  allFrames?: MessageEvent[];
  didSeek?: boolean;
  parameters?: Map<string, ParameterValue>;
  variables?: Map<string, VariableValue>;
  topics?: Topic[];
  services?: string[];
  currentTime?: Time;
  startTime?: Time;
  endTime?: Time;
  previewTime?: number | undefined;
  colorScheme?: "dark" | "light";
  appSettings?: Map<string, AppSettingValue>;
};

export type SubscribeMessageRangeArgs = {
  topic: string;
  convertTo?: string;
  onNewRangeIterator: (
    batchIterator: AsyncIterable<Immutable<MessageEvent[]>>
  ) => Promise<void>;
};

export type PanelExtensionContext = {
  panelElement: HTMLDivElement;
  initialState: unknown;
  layout: LayoutActions;
  dataSourceProfile?: string;
  metadata?: ReadonlyArray<Readonly<Metadata>>;
  watch(field: keyof RenderState): void;
  saveState(state: Partial<unknown>): void;
  setParameter(name: string, value: ParameterValue): void;
  setSharedPanelState(state: undefined | Record<string, unknown>): void;
  setVariable(name: string, value: VariableValue): void;
  setPreviewTime(time: number | undefined): void;
  seekPlayback?(time: number | Time): void;
  subscribe(topics: string[] | Subscription[]): void;
  unsubscribeAll(): void;
  subscribeAppSettings(settings: string[]): void;
  advertise?(
    topic: string,
    schemaName: string,
    options?: Record<string, unknown>
  ): void;
  unadvertise?(topic: string): void;
  publish?(topic: string, message: unknown): void;
  callService?(service: string, request: unknown): Promise<unknown>;
  onRender?(state: Immutable<RenderState>, done: () => void): void;
  updatePanelSettingsEditor(settings: Immutable<SettingsTree>): void;
  setDefaultPanelTitle(title: string | undefined): void;
  unstable_subscribeMessageRange(args: SubscribeMessageRangeArgs): () => void;
};
```

## Extension Entry

```ts
export type ExtensionPanelRegistration = {
  name: string;
  initPanel: (context: PanelExtensionContext) => void | (() => void);
};

export type RegisterMessageConverterArgs<Src> = {
  fromSchemaName: string;
  toSchemaName: string;
  converter: (msg: Src, event: Immutable<MessageEvent<Src>>) => unknown;
  panelSettings?: Record<string, PanelSettings<unknown>>;
};

export type TopicAliasFunction = (args: {
  topics: { name: string; schemaName?: string }[];
  globalVariables: Readonly<Record<string, VariableValue>>;
}) => { name: string; sourceTopicName: string }[];

export interface ExtensionContext {
  readonly mode: "production" | "development" | "test";
  registerPanel(params: ExtensionPanelRegistration): void;
  registerMessageConverter<Src>(args: RegisterMessageConverterArgs<Src>): void;
  registerTopicAliases(fn: TopicAliasFunction): void;
  registerCameraModel(args: RegisterCameraModelArgs): void;
}

export type ExtensionActivate = (ctx: ExtensionContext) => void;
export interface ExtensionModule {
  activate: ExtensionActivate;
}
```

## Camera Models

```ts
// Helpers (conceptual)
export type FloatArray = number[] | Float32Array | Float64Array;
export type DistortionModel =
  | "plumb_bob"
  | "rational_polynomial"
  | (string & {});

export type CameraInfo = Readonly<{
  width: number;
  height: number;
  binning_x: number;
  binning_y: number;
  roi: {
    x_offset: number;
    y_offset: number;
    height: number;
    width: number;
    do_rectify: boolean;
  };
  distortion_model: DistortionModel;
  D: FloatArray;
  K: FloatArray;
  P: FloatArray;
  R: FloatArray;
}>;

export type Vector2 = { x: number; y: number };
export type Vector3 = { x: number; y: number; z: number };

export interface ICameraModel {
  width: number;
  height: number;
  fx: number;
  fy: number;
  cx: number;
  cy: number;
  projectPixelTo3dPlane(out: Vector3, pixel: Readonly<Vector2>): Vector3;
  projectPixelTo3dRay(out: Vector3, pixel: Readonly<Vector2>): Vector3;
}

export type CameraModelBuilder = (info: CameraInfo) => ICameraModel;

export type RegisterCameraModelArgs = {
  name: DistortionModel;
  modelBuilder: CameraModelBuilder;
};
```

## Settings Tree (editor)

```ts
// Icons
type SettingsIcon =
  | "Add"
  | "Addchart"
  | "AutoAwesome"
  | "Background"
  | "Camera"
  | "Cells"
  | "Check"
  | "Circle"
  | "Clear"
  | "Clock"
  | "Collapse"
  | "Cube"
  | "Delete"
  | "Expand"
  | "Flag"
  | "Folder"
  | "FolderOpen"
  | "Grid"
  | "Hive"
  | "ImageProjection"
  | "Map"
  | "Move"
  | "MoveDown"
  | "MoveUp"
  | "NorthWest"
  | "Note"
  | "NoteFilled"
  | "Points"
  | "PrecisionManufacturing"
  | "Radar"
  | "Settings"
  | "Shapes"
  | "Share"
  | "SouthEast"
  | "Star"
  | "Timeline"
  | "Topic"
  | "Walk"
  | "World";

// Fields & nodes (simplified)
type SettingsTreeField = {
  label: string;
  input:
    | "boolean"
    | "number"
    | "string"
    | "select"
    | "toggle"
    | "rgba"
    | "rgb"
    | "gradient"
    | "messagepath"
    | "slider"
    | "vec2"
    | "vec3"
    | "autocomplete"
    | "legendcontrols";
  value?: unknown;
  disabled?: boolean;
  readonly?: boolean;
  help?: string;
  tooltip?: string;
  error?: string;
};

type SettingsTreeNode = {
  label?: string;
  icon?: SettingsIcon;
  defaultExpansionState?: "collapsed" | "expanded";
  fields?: Record<string, SettingsTreeField>;
  children?: Record<string, SettingsTreeNode>;
  actions?: Array<
    | {
        type: "action";
        id: string;
        label: string;
        icon?: SettingsIcon;
        display?: "menu" | "inline";
      }
    | { type: "divider" }
  >;
  order?: number | string;
  renamable?: boolean;
  visible?: boolean;
  enableVisibilityFilter?: boolean;
};

type SettingsTree = {
  actionHandler: (action: SettingsTreeAction) => void;
  nodes: Record<string, SettingsTreeNode>;
  enableFilter?: boolean;
  focusedPath?: readonly string[];
};

type SettingsTreeAction =
  | {
      action: "update";
      payload: { path: readonly string[]; input: string; value: unknown };
    }
  | {
      action: "perform-node-action";
      payload: { id: string; path: readonly string[] };
    };

type PanelSettings<ExtensionSettings> = {
  settings: (config?: ExtensionSettings) => SettingsTreeNode;
  handler: (action: SettingsTreeAction, config?: ExtensionSettings) => void;
  defaultConfig?: ExtensionSettings;
};
```

For editor UIs, see [Settings Tree](./settings-tree) and [Settings API](./settings-api) for end‑to‑end examples.
