// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Evaluation Platform",
  tagline: "Interactive Framework for AI Evaluation",
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
        },
        blog: {
          blogTitle: "Zeno Blog",
          blogDescription: "Updates and news from the Zeno team",
          blogSidebarCount: "ALL",
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
      navbar: {
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
          { to: "blog", label: "Blog", position: "left" }, // or position: 'right'
          { to: "/about", label: "About", position: "left" },
          { to: "/faq", label: "FAQ", position: "left" },
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
            href: "https://twitter.com/try_zeno",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://github.com/zeno-ml",
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
              {
                label: "About",
                to: "/about/",
              },
              {
                label: "FAQ",
                to: "/faq/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/nW8AtcYdKF",
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
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: ["toml", "json"],
      },
    }),
};

module.exports = config;
