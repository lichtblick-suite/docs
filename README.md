# Contribution Guide  

We appreciate your interest in contributing to this project! This guide provides all the necessary steps to help you get started.  

## Setting Up  

This documentation is built using [mdBook](https://rust-lang.github.io/mdBook/index.html), which requires `Rust` and `Cargo` to be installed.  

1. [Install Rust](https://www.rust-lang.org/tools/install) 

 **Note:** If you're on **Windows** you might need to install `Visual Studio Build Tools` before installing mdbook:

#### [Windows] Step 1: Install Visual Studio Build Tools
1. Download **Build Tools for Visual Studio** from the official [Microsoft site](https://visualstudio.microsoft.com/downloads/):  
2. Scroll down and download **"Build Tools for Visual Studio"**.
3. Open the installer and select **"C++ build tools"**.
4. Ensure the following components are selected:
   - MSVC v143 (or latest)
   - Windows 10 SDK (or latest)
   - CMake (optional but recommended)

#### [Windows] Step 2: Set Up the Environment
1. Open **"x86 Native Tools Command Prompt for VS"** from the Start menu.
2. Run the following command to set Rust to the stable version:
   ```sh
   rustup default stable
    ```

## Installing mdBook

```bash
cargo install mdbook
```  

To fully utilize this documentation, you also need to install `mdbook-tabs`. You can do so with the following command:

```bash
cargo install mdbook-tabs
```  

## Running a Local Preview  

Before proceeding, ensure you have completed the installation steps above. Clone this repository and switch to the `main` branch. Then, use the following command to generate a local preview:  

```
mdbook serve
```  

This will launch a local web server at `localhost:3000`, automatically updating the content whenever changes are made.  

## Contribution Guidelines  

- Familiarize yourself with the [mdBook documentation](https://rust-lang.github.io/mdBook/guide/creating.html) to understand the basics.  
- Create a new branch based on `main`.  
- File names should follow the `kebab-case` convention, using hyphens (`-`) instead of spaces.  
- Use proper Markdown syntax and refer to the official documentation for formatting guidelines.  
- Once your changes are complete, submit a pull request (PR) against the `main` branch for review.  

Thank you for your contributions!
