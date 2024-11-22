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
          lr: { // the <id> referenced when running CLI commands
            specPath: "src/OpenApi3.json", // path to OpenAPI spec, URLs supported
            outputDir: "docs/api", // output directory for generated files
            sidebarOptions: { // optional, instructs plugin to generate sidebar.js
              groupPathsBy: "tag", // group sidebar items by operation "tag"
            },
          },
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs","@inkeep/docusaurus/chatButton", "@inkeep/docusaurus/searchBar"],
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

       //inkeep ai agent
      inkeepConfig: {
        baseSettings: {
          apiKey: "0eddffabefd5e923b8e222beb495a2eaae6c35d0e82dd24b", // required
          integrationId: "cm3qv5k4t0026ctns1w4ugr8s", // required
          organizationId: "org_7WE77CMkrySCsff3", // required
          primaryBrandColor: "#26D6FF", // required -- your brand color, the widget color scheme is derived from this
          organizationDisplayName: "Inkeep",
          // ...optional settings
          theme: {
            // stylesheetUrls: ['/path/to/stylesheets'], // optional
            syntaxHighlighter: {

            },
          }
        },
        modalSettings: {
          // optional settings
        },
        searchSettings: {
          // optional settings
        },
        aiChatSettings: {
          chatSubjectName: "LoginRadius",
          botAvatarSrcUrl: "https://www.loginradius.com/wp-content/uploads/fbrfg/apple-touch-icon.png",
          getHelpCallToActions: [
            {
              name: "Contact",
              url: "https://www.loginradius.com/contact-sales/",
              icon: {
                builtIn: "IoChatbubblesOutline"
              }
            }
          ],
          quickQuestions: [
            "Get Started with LoginRadius",
            "How does the LoginRadius User Registration System work?",
            "Invalid Request URI Error?",
            "Consumer Audit Logs?"
          ]
        },
      },
    //end of inkeep ai agent
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
