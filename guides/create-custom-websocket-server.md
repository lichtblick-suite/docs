---
sidebar_position: 6
---

# Create Custom WebSocket Server

Build a WebSocket server using the Foxglove WebSocket Protocol to stream real-time robotics data to Lichtblick.

:::note

The `@foxglove/ws-protocol` package is currently used, but `@lichtblick/ws-protocol` will be available soon with the same API.

:::

## Prerequisites

- Node.js 18+ or Python 3.8+
- Understanding of your data source and message formats

## Node.js server setup

```bash
npm init -y
npm install @foxglove/ws-protocol ws @types/ws
npm install -D typescript @types/node

npx tsc --init # initialize a basic TS configuration
```

## Basic server implementation

Create an `index.ts` file with the following code:

```typescript
// @ts-nocheck

const { FoxgloveServer } = require("@foxglove/ws-protocol");
const { WebSocketServer } = require("ws");

function delay(durationSec: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, durationSec * 1000));
}

// Generate random sensor data
function generateSensorData(sensorId: string) {
  return {
    sensorId,
    timestamp: Date.now(),
    temperature: Math.round((20 + Math.random() * 15) * 100) / 100, // 20-35°C
    humidity: Math.round((40 + Math.random() * 40) * 100) / 100, // 40-80%
    pressure: Math.round((980 + Math.random() * 50) * 100) / 100, // 980-1030 hPa
    batteryLevel: Math.max(0, Math.round(Math.random() * 100 * 100) / 100),
    status: Math.random() > 0.1 ? "active" : "warning",
  };
}

// Generate GPS coordinates (simulating movement around San Francisco)
function generateGpsData() {
  const baseLat = 37.7749;
  const baseLng = -122.4194;
  const radius = 0.01; // Small radius for realistic movement

  return {
    deviceId: "vehicle_001",
    timestamp: Date.now(),
    latitude: baseLat + (Math.random() - 0.5) * radius,
    longitude: baseLng + (Math.random() - 0.5) * radius,
    altitude: Math.round((50 + Math.random() * 100) * 100) / 100,
    speed: Math.round(Math.random() * 60 * 100) / 100, // km/h
    heading: Math.round(Math.random() * 360),
    satellites: Math.floor(Math.random() * 8) + 4, // 4-12 satellites
  };
}

async function main() {
  console.log("🚀 Starting IoT Data Streaming Server...");

  const server = new FoxgloveServer({
    name: "iot-data-hub",
  });

  const ws = new WebSocketServer({
    port: 8765,
    handleProtocols: (protocols: string[]) => server.handleProtocols(protocols),
  });

  ws.on("listening", () => {
    console.log("🌐 Server listening on port 8765");
    console.log("📡 Ready to stream IoT data...");
  });

  ws.on("connection", (conn: any, req: any) => {
    const clientAddr = `${req.socket.remoteAddress}:${req.socket.remotePort}`;
    console.log("🔌 New client connected:", clientAddr);
    server.handleConnection(conn, clientAddr);
  });

  server.on("subscribe", (chanId: number) => {
    console.log("📊 Client subscribed to channel:", chanId);
  });

  server.on("unsubscribe", (chanId: number) => {
    console.log("📴 Client unsubscribed from channel:", chanId);
  });

  server.on("error", (err: Error) => {
    console.error("❌ Server error:", err.message);
  });

  // Create channels for different data types
  const sensorChannel = server.addChannel({
    topic: "sensors/environmental",
    encoding: "json",
    schemaName: "EnvironmentalData",
    schema: JSON.stringify({
      type: "object",
      properties: {
        sensorId: { type: "string" },
        timestamp: { type: "number" },
        temperature: { type: "number" },
        humidity: { type: "number" },
        pressure: { type: "number" },
        batteryLevel: { type: "number" },
        status: { type: "string" },
      },
    }),
  });

  const gpsChannel = server.addChannel({
    topic: "vehicles/gps_tracking",
    encoding: "json",
    schemaName: "GPSData",
    schema: JSON.stringify({
      type: "object",
      properties: {
        deviceId: { type: "string" },
        timestamp: { type: "number" },
        latitude: { type: "number" },
        longitude: { type: "number" },
        altitude: { type: "number" },
        speed: { type: "number" },
        heading: { type: "number" },
        satellites: { type: "number" },
      },
    }),
  });

  const textEncoder = new TextEncoder();
  let messageCount = 0;

  console.log("📈 Starting data simulation...\n");

  // Main data streaming loop
  while (true) {
    messageCount++;
    const timestamp = BigInt(Date.now()) * 1_000_000n;

    // Send environmental sensor data (every 500ms)
    if (messageCount % 1 === 0) {
      const sensors = ["sensor_A1", "sensor_B2", "sensor_C3"];
      for (const sensorId of sensors) {
        const sensorData = generateSensorData(sensorId);
        server.sendMessage(
          sensorChannel,
          timestamp,
          textEncoder.encode(JSON.stringify(sensorData))
        );
      }
      console.log(`🌡️  Environmental data sent (${messageCount} messages)`);
    }

    // Send GPS data (every 1 second)
    if (messageCount % 2 === 0) {
      const gpsData = generateGpsData();
      server.sendMessage(
        gpsChannel,
        timestamp,
        textEncoder.encode(JSON.stringify(gpsData))
      );
      console.log(`🛰️  GPS tracking data sent`);
    }

    console.log("---");

    await delay(0.5); // 500ms interval between iterations
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down gracefully...");
  process.exit(0);
});

main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
```

## Testing your server

1. **Start your server:**

   ```bash
   npx ts-node index.ts # It depends on your TS setup
   ```

2. **Connect from Lichtblick:**

   - Open Lichtblick
   - Go to "Open connection" → "Foxglove WebSocket"
   - Enter: `ws://localhost:8765`

3. **Verify data streaming:**
   - Check topics appear in the topic list
   - Add panels to visualize the data

## Best practices

### Error handling

- **Validate message schemas** before publishing
- **Handle client disconnections** gracefully
- **Log errors** for debugging
- **Implement health checks**

### Security considerations

- **Use authentication** for production deployments
- **Validate all input data** from clients
- **Rate limit connections** to prevent DoS attacks
- **Use TLS/WSS** for encrypted connections

## Next steps

Now that you have a custom WebSocket server running:

- **Connect to Lichtblick** using the [live data connection](../docs/connecting-to-data/live-data) guide
- **Create custom panels** to visualize your data using the [custom panel guide](./create-custom-panel.md)
- **Transform message formats** with [message converters](./create-message-converter.md)
- **Explore more examples** at [lichtblick-suite/ws-protocol](https://github.com/lichtblick-suite/ws-protocol)
- **Deploy to production** with proper security and monitoring

Your custom WebSocket server is now ready to stream real-time robotics data to Lichtblick with full support for topics, parameters, and services!
