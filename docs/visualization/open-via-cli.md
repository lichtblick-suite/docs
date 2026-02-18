# Open via CLI

Easily open local files using the command line by installing the Lichtblick desktop application. This allows you to quickly access .mcap files without manually navigating through the interface.

---

### Local Files

Once the desktop application is installed, Lichtblick will automatically be set as the default handler for `.mcap` files. You can open files directly from the command line based on your operating system:

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>

```sh
lichtblick /path/to/your/file.mcap

# Open multiple .mcap files simultaneously
lichtblick /path/to/your/file1.mcap /path/to/your/file2.mcap

# Open all .mcap files from a specific directory
lichtblick /path/to/your/files/*.mcap
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```sh
# Open a single .mcap file using the default application handler
open /path/to/your/file.mcap

# Alternatively, execute the Lichtblick binary directly (using the absolute path)
/Applications/Lichtblick.app/Contents/MacOS/lichtblick /path/to/your/file.mcap

# To open multiple .mcap files, run the binary directly with multiple paths or use a wildcard
/Applications/Lichtblick.app/Contents/MacOS/lichtblick /path/to/your/file1.mcap /path/to/your/file2.mcap
/Applications/Lichtblick.app/Contents/MacOS/lichtblick /path/to/your/files/*.mcap

# Optional: add to PATH for easier usage
echo 'export PATH="/Applications/Lichtblick.app/Contents/MacOS:$PATH"' >> ~/.zshrc && source ~/.zshrc
lichtblick /path/to/your/file.mcap
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```sh
# Open a single .mcap file using the default application handler
start /path/to/your/file.mcap

# Alternatively, execute the Lichtblick binary directly (using the absolute path)
C:\Users\<USER>\AppData\Local\Programs\lichtblick\Lichtblick.exe /path/to/your/file.mcap

# To open multiple .mcap files, run the binary directly with multiple paths or use a wildcard
C:\Users\<USER>\AppData\Local\Programs\lichtblick\Lichtblick.exe /path/to/your/file1.mcap /path/to/your/file2.mcap
C:\Users\<USER>\AppData\Local\Programs\lichtblick\Lichtblick.exe /path/to/your/files/*.mcap


# Optional: add to PATH for easier usage
setx PATH "%PATH%;C:\Users\<USER>\AppData\Local\Programs\lichtblick" # need to restart the terminal
lichtblick.exe /path/to/your/files/*.mcap
```

  </TabItem>
</Tabs>

### Flags and Parameters

Lichtblick supports several command-line parameters to streamline your workflow by preloading specific configurations, eliminating the need for manual adjustments.

- `--defaultLayout`: Loads a predefined layout upon opening Lichtblick. This does not upload or modify the layout—only selects an existing one.

  ```sh
  lichtblick --defaultLayout="my-custom-layout"
  ```

- `--source`: Opens one or multiple .mcap files, or an entire directory, directly upon launch.

  ```sh
  lichtblick --source="path/to/your/file.mcap"

  # For multiple mcaps
  lichtblick --source="path/to/your/file1.mcap,path/to/your/file2.mcap"

  # For a directory
  lichtblick --source="path/to/your/files/"
  ```

- `--time`: Opens Lichtblick player at a specific timestamp.

  ```sh
  # Specify the time as a UNIX timestamp (in seconds)
  lichtblick --time=1633046400  # Interpreted as 2021-10-01 12:00:00 AM UTC

  # Specify the time using a string format
  lichtblick --time="2024-12-02 11:45"
  lichtblick --time="2020-04-07 04:45:21 PM"
  lichtblick --time="2020-04-07 04:45:21 PM CET"  # Lichtblick will attempt to convert this to the timezone used in the MCAP file
  ```

- `--force-multiple-windows`: Forces Lichtblick to open a new window instance while bypassing the default single-instance behavior. This flag ensures that files and deep links are handled independently in separate windows, preventing resource conflicts that can occur when multiple processes attempt to access the same locked resources.

  ```sh
  lichtblick --force-multiple-windows
  ```

  **Note:** On Linux systems, process isolation typically allows multiple Lichtblick instances to run without conflicts. However, on macOS and Windows, the default single-instance architecture can cause resource contention and process conflicts. This flag is essential on these platforms when you need to run multiple independent Lichtblick sessions simultaneously.

These parameters help optimize the user experience by enabling quicker access to files and configurations without navigating through the UI manually.

### Live and cloud data sources

Lichtblick also offers the option of opening live and cloud data sources from CLI. For instance:

<Tabs>
  <TabItem value="linux" label="Linux" default>

```sh
lichtblick "lichtblick://open?ds=foxglove-websocket&ds.url=ws://localhost:8765/"
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```sh
open "lichtblick://open?ds=foxglove-websocket&ds.url=ws://localhost:8765/"
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```sh
start "lichtblick://open?ds=foxglove-websocket&ds.url=ws://localhost:8765/"
```

  </TabItem>
</Tabs>

This will open the desktop app and connect to `ws://localhost:8765/`

### Important Note

Multiple files are available only to `.mcap` files at the moment.
