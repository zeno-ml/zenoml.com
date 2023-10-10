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
      {
        gtag: {
          trackingID: "G-ZL2PD9TQNF",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-WWXQ3HNL",
        },
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
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/zeno.png",
      // announcementBar: {
      //   id: "support_us",
      //   content:
      //     '🎉  Zeno was selected to be part of the <a href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/">Mozilla Technology Fund</a> cohort on AI auditing tools!',
      //   backgroundColor: "white",
      //   textColor: "#6a1b9a",
      //   isCloseable: true,
      // },
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
          // { to: "/blog", label: "Blog", position: "left" },
          { to: "/about", label: "About", position: "left" },
          {
            type: "html",
            position: "right",
            value:
              "<a style='margin-left: 10px' href='https://hub.zenoml.com/signup'>Sign up</a>",
          },
          {
            type: "html",
            position: "right",
            value:
              "<a style='margin-left: 10px' href='https://hub.zenoml.com/login'><button class='sign-in'>Sign In</button></a>",
          },
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
                label: "About",
                to: "/about/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/km62pDKAkE",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/zeno",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/try_zeno",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/zeno-ml/zeno",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zeno`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["toml", "json"],
      },
    }),
};

module.exports = config;
