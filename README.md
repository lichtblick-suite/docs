# Contribution Guide  

We appreciate your interest in contributing to this project! This guide provides all the necessary steps to help you get started.  

## Setting Up  

This documentation is built using [mdBook](https://rust-lang.github.io/mdBook/index.html), which requires `Rust` and `Cargo` to be installed.  

1. [Install Rust](https://www.rust-lang.org/tools/install)  

After installing Rust, you can install mdBook by running the following command:  

```bash
cargo install mdbook
```  

## Running a Local Preview  

Before proceeding, ensure you have completed the installation steps above. Clone this repository and switch to the `docs` branch. Then, use the following command to generate a local preview:  

```
mdbook serve
```  

This will launch a local web server at `localhost:3000`, automatically updating the content whenever changes are made.  

## Contribution Guidelines  

- Familiarize yourself with the [mdBook documentation](https://rust-lang.github.io/mdBook/guide/creating.html) to understand the basics.  
- Create a new branch based on `main`.  
- File names should follow the `kebab-case` convention, using hyphens (`-`) instead of spaces.  
- Use proper Markdown syntax and refer to the official documentation for formatting guidelines.  
- Once your changes are complete, submit a pull request (PR) against the `docs` branch for review.  

Thank you for your contributions!
