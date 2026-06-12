import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Visantara Wiki",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://wiki.visantara.com",
  baseUrl: "/",

  organizationName: "VisantaraDevelopment",
  projectName: "VisantaraDevelopment.github.io",
  deploymentBranch: "gh-pages",

  trailingSlash: true,
  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },

        // Nonaktifkan blog jika tidak digunakan
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "Visantara Wiki",

      logo: {
        alt: "Visantara Logo",
        src: "img/visan.webp",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },

        // GitHub Button
        // {
        //   href: "https://github.com/VisantaraDevelopment/VisantaraDevelopment.github.io",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },

    footer: {
      style: "dark",

      copyright: `Copyright © ${new Date().getFullYear()} Visantara. Dibuat dengan ❤️.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;