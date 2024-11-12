// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import governanceSideBar from "./docs/governance/sidebars.js"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Identity Platform Documentation',
  tagline: 'Explore the LoginRadius Identity Platform documentation to seamlessly integrate identity management into your application. Access quick start guides, implementation tutorials, and example code. Find SDKs, APIs, and sample demos to simplify your identity management journey.',
  favicon: 'img/favicon-lr.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LoginRadius', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      sidebar: {
        governanceSideBar,
      },

      algolia: {
        appId: 'Z5ZYP9YXTO', // Replace with your Algolia Application ID
        apiKey: '57abca036fc42fdece204fd0cc114563', // Replace with your Search-Only API Key
        indexName: 'loginradius', 
        contextualSearch: true
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',  // LoginRadius
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },

        
        items: [
          {
            //type: 'docSidebar',
            //sidebarId: 'DocsSidebar', // AdminConsoleSidebar
            href: '/',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://adminconsole.loginradius.com/dashboard',
            label: 'Admin Console',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/authentication/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Terms',
                href: 'https://www.loginradius.com/terms/',
              },
              {
                label: 'Privacy',
                href: 'https://www.loginradius.com/privacy-policy/',
              },
              {
                label: 'Contact',
                href: 'https://www.loginradius.com/contact-sales/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Engineering Blog',
                to: 'https://www.loginradius.com/engineering/',
              },
              {
                label: 'Status Page',
                href: 'https://status.loginradius.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LoginRadius Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    },
};

export default config;
