# Open via CLI

Easily open local files using the command line by installing the Lichtblick desktop application. This allows you to quickly access .mcap files without manually navigating through the interface.

---

### Local Files

Once the desktop application is installed, Lichtblick will automatically be set as the default handler for `.mcap` files. You can open files directly from the command line based on your operating system:

{{#tabs}}
{{#tab name="Linux"}}

```sh
lichtblick /path/to/your/file.mcap

# Open multiple .mcap files simultaneously
lichtblick /path/to/your/file1.mcap /path/to/your/file2.mcap

# Open all .mcap files from a specific directory
lichtblick /path/to/your/files/*.mcap
```

{{#endtab}}
{{#tab name="macOS"}}

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

{{#endtab}}
{{#tab name="Windows"}}

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

{{#endtab}}
{{#endtabs}}

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

  These parameters help optimize the user experience by enabling quicker access to files and configurations without navigating through the UI manually.

### Important Note

Multiple files are available only to `.mcap` files at the moment.
