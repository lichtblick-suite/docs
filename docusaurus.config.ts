import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Lichtblick Documentation",
  tagline: "An integrated visualization and diagnosis tool for robotics",
  favicon: "img/logo.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://lichtblick-suite.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Lichtblick-Suite", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "guides",
        routeBasePath: "guides",
        sidebarPath: "./sidebars.ts",
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/home-page-image.png",
    navbar: {
      title: "Lichtblick",
      logo: {
        alt: "Lichtblick Logo",
        src: "img/logo.png",
        href: "/",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "docSidebar",
          sidebarId: "guidesSidebar",
          position: "left",
          label: "Guides",
          docsPluginId: "guides",
        },
        {
          type: "html",
          position: "right",
          value: "<div></div>", // Spacer
        },
        {
          href: "https://github.com/Lichtblick-Suite/lichtblick",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/Lichtblick-Suite/lichtblick/releases",
          label: "Releases",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/docs/",
            },
            {
              label: "Connecting to Data",
              to: "/docs/docs/connecting-to-data/introduction",
            },
            {
              label: "Visualization",
              to: "/docs/docs/visualization/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Lichtblick-Suite/lichtblick",
            },
            {
              label: "Issues",
              href: "https://github.com/Lichtblick-Suite/lichtblick/issues",
            },
            {
              label: "Discussions",
              href: "https://github.com/Lichtblick-Suite/lichtblick/discussions",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Releases",
              href: "https://github.com/Lichtblick-Suite/lichtblick/releases",
            },
            {
              label: "Contributing",
              href: "https://github.com/Lichtblick-Suite/lichtblick/blob/main/CONTRIBUTING.md",
            },
            {
              label: "License",
              href: "https://github.com/Lichtblick-Suite/lichtblick/blob/main/LICENSE",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lichtblick Suite. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
