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
            docRootComponent: "@theme/DocRoot",
            docItemComponent: "@theme/ApiItem",
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

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: {
          lr: {
            specPath: "src/OpenApi3.json",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          identity: { // Add a new API specification
            specPath: "src/identity.json", // Path to the new OpenAPI spec
            outputDir: "docs/cloud-directory-api/identity", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
            },
          },
          custom_object: { // Add a new API specification
            specPath: "src/custom-object.json", // Path to the new OpenAPI spec
            outputDir: "docs/cloud-directory-api/custom-object", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
            },
          },
          insighst: { // Add a new API specification
            specPath: "src/insights.json", // Path to the new OpenAPI spec
            outputDir: "docs/cloud-directory-api/insights", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
            },
          },
        },
      },
       
    ],
    [
      "@orama/plugin-docusaurus-v3",
      {
        cloud: {
          indexId: "z6ji7q9h38h8yrdd4pmg5kw0", // This is your index ID
          oramaCloudAPIKey: "GCTg59dSHq1574qzLUAVeYdGGiykaHGV", // Your Private API key
          deploy: false
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
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
           type: 'docSidebar',
           sidebarId: 'DocsSidebar', // AdminConsoleSidebar
            position: 'left',
            label: 'Docs',
            href: '/',
          },

          {
            to: 'docs/apidocs/getting-started/introduction',
            label: 'API Reference',
            position: 'left',
          },

          {
            to: 'docs/category/apis',
            label: 'APIs',
            position: 'left',
            rel: '',
          },

          {to: 'https://www.loginradius.com/engineering/', label: 'Blog', position: 'left'},
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
