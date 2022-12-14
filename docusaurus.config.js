// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zeno",
  tagline: "Interactive Framework for Machine Learning Evaluation",
  url: "https://zenoml.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zenoml", // Usually your GitHub org/user name.
  projectName: "zeno", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "Zeno",
        logo: {
          alt: "Zeno Logo",
          src: "img/zeno.png",
          srcDark: "img/zeno_dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/cmudig/zeno",
            // label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Zeno",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Docs",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Gitter Chat",
                href: "https://gitter.im/zeno-ml-eval/community",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/zeno",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/zeno_mlops",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cmudig/zeno",
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Alex Cabrera`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["toml"],
      },
    }),
};

module.exports = config;
