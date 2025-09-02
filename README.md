# Contribution Guide

We appreciate your interest in contributing to this project! This guide provides all the necessary steps to help you get started.

## Setting Up

This documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator that requires `Node.js` to be installed.

1. [Install Node.js](https://nodejs.org/) (version 18.0 or above)
2. Install Yarn: `npm install -g yarn`

Note: This project uses Yarn 3 with the packageManager field configured.

## Installing Dependencies

```bash
yarn install
```

## Running a Local Preview

Before proceeding, ensure you have completed the installation steps above. Clone this repository and switch to the `main` branch. Then, use the following command to generate a local preview:

```bash
yarn start
```

This will launch a local web server at `localhost:3000`, automatically updating the content whenever changes are made.

## Build

To create a production build:

```bash
yarn build
```

This generates static content into the `build` directory.

## Contribution Guidelines

- Familiarize yourself with the [Docusaurus documentation](https://docusaurus.io/docs) to understand the basics.
- Create a new branch based on `main`.
- File names should follow the `kebab-case` convention, using hyphens (`-`) instead of spaces.
- Use proper Markdown syntax and refer to the official documentation for formatting guidelines.
- Once your changes are complete, submit a pull request (PR) against the `main` branch for review.

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Thank you for your contributions!
