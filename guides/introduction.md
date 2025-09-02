---
sidebar_position: 1
title: Introduction
slug: /
---

# Introduction

Welcome to the Lichtblick Guides section! Here you'll find comprehensive, step-by-step tutorials for extending Lichtblick's capabilities and integrating it with your robotics workflows.

## Extension Development

Learn how to build custom extensions to enhance Lichtblick's functionality:

- **[Create Custom Panel](./create-custom-panel.md)** - Build interactive panels for visualizing and controlling your robotics data
- **[Create Message Converter](./create-message-converter.md)** - Transform custom message formats into Lichtblick-supported schemas
- **[Create Topic Alias](./create-topic-alias.md)** - Simplify complex topic hierarchies with intuitive naming
- **[Create Custom Camera Model](./create-custom-camera-model.md)** - Support specialized camera configurations and projection models

## Data Integration

Connect your data sources and systems to Lichtblick:

- **[Create Custom WebSocket Server](./create-custom-websocket-server.md)** - Stream real-time data using the Foxglove WebSocket Protocol

## Getting Started

### Extension Setup

All extension guides assume you have:

- Node.js 18+
- Basic knowledge of TypeScript

To create any extension, use:

```bash
npm init lichtblick-extension@latest my-extension-name
```

### Building and Testing

All extensions follow the same build process:

```bash
npm run package  # It creates a '.foxe' file in the root of the extension project
```

To install your extension:

1. Open Lichtblick
2. Drag and drop your `.foxe` file
3. Your extension will be available immediately

**Local development**: For faster development iterations, you can use:

```bash
npm run local-install
```

This installs the extension directly to `~/.lichtblick-suite/extensions` and makes it available in the desktop version of Lichtblick without needing to package and drag-drop the `.foxe` file.

### Guide Structure

Each guide focuses on the specific implementation details for that extension type, with complete working code examples and best practices.

Whether you're building your first extension or integrating complex robotics systems, these guides will help you get the most out of Lichtblick.
