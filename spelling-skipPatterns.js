
const WORD_EXCEPTIONS_ACRONYMS = [
  "MacOS", "WebGPU", "GraphQL", "TypeScript", "npm", "js", "md",
  "ROS", "ROS1", "ROS2", "MCAP", "MCAPs", "mcap", "ROS_MASTER_URI",
  "ROS_HOSTNAME", "ULog", "PX4", "GCS", "IMU",
  "JSON", "CSV", "PCM", "UDP", "TCP", "UTF", "CDR", "CORS", "SAS",
  "Mbps", "base64", "json", "enum",
  "3D", "2D", "ENU", "LIDAR", "S3",
  "UI", "IDL", "OMG", "CLI", "Ctrl", "Cmd", "Enum", "NoSQL",
  "Point2", "Point3"
];

const WORD_EXCEPTIONS_WORDS = [
  "Lichtblick", "lichtblick", "Protobuf", "fisheye", "schemas", "schema",
  "Velodyne", "velodyne", "Quaternion", "quaternion", "endian",
  "booleans", "Encodings", "encodings", "Rosbridge", "rosbridge",
  "websockets", "websocket", "config", "Terraform", "realtime",
  "unprojection", "intrinsics", "detections", "normals", "bitstream",
  "Sparkline", "sparkline", "serie", "integrations", "presigned",
  "datasource", "enums", "natively", "workspaces", "preload", "preloads",
  "Preloading", "preloaded", "submenu", "endtab", "entabs", "IndexedDB",
  "autocomplete", "Schemas", "schemaless", "pre", "Teleop",
  "programmatically", "deprecations", "codebase", "Tooltip", "Changelog",
  "Dropdown", "lifecycle", "multimodal", "webhooks", "Jupyter"
];

const BASE_PATTERNS = [
  // snake_case identifiers
  "/\\b[a-z]+(?:_[a-z0-9]+)+\\b/",
  // camelCase identifiers
  "/\\b[a-z]+(?:[A-Z][a-z]+)+\\b/",
  // PascalCase identifiers
  "/\\b[A-Z][a-z]+(?:[A-Z][a-z]+)+\\b/",
  // pure numbers (e.g. 14, 3.14)
  "/\\b\\d+(\\.\\d+)?\\b/",
  // e.g. 10ms, 100ms, 500ms
  "/\\b\\d+ms\\b/",
  // version numbers like v111, v14
  "/\\bv\\d+\\b/"
];


module.exports = [
  ...BASE_PATTERNS,
  ...WORD_EXCEPTIONS_ACRONYMS.map(w => `/\\b${w}\\b/`),
  ...WORD_EXCEPTIONS_WORDS.map(w => `/\\b${w}\\b/`)
];
