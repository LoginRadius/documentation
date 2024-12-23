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

          account: { // Add a new API specification
            specPath: "src/account.json", // Path to the new OpenAPI spec
            outputDir: "docs/account", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
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
          insights: { // Add a new API specification
            specPath: "src/insights.json", // Path to the new OpenAPI spec
            outputDir: "docs/cloud-directory-api/insights", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
            },
          },
          sso: { // Add a new API specification
            specPath: "src/sso.json", // Path to the new OpenAPI spec
            outputDir: "docs/sso", // Output directory for the generated files
            sidebarOptions: {
              groupPathsBy: "tag", // Group sidebar items by operation "tag"
            },
          },
        },
      },
       
    ],
    async function myCustomCSSPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
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
        inkeepConfig: {
          baseSettings: {
            // see https://docusaurus.io/docs/deployment#using-environment-variables to use docusaurus environment variables
            apiKey: "0eddffabefd5e923b8e222beb495a2eaae6c35d0e82dd24b", // required
            integrationId: "cm3qv5k4t0026ctns1w4ugr8s", // required
            organizationId: "org_7WE77CMkrySCsff3", // required
            primaryBrandColor: "#26D6FF", // required -- your brand color, the widget color scheme is derived from this
            organizationDisplayName: "Inkeep",
            // ...optional settings
            theme: {
              stylesheetUrls: ['/inkeep-overrides.css'], // optional
              // syntaxHighlighter: {
              //   lightTheme: lightCodeTheme, // optional -- pass in the Prism theme you're using
              //   darkTheme: darkCodeTheme, // optional -- pass in the Prism theme you're using
              // },
            }
          },
          modalSettings: {
            // optional settings
          },
          searchSettings: {
            // optional settings
          },
          aiChatSettings: {
            // optional settings
            botAvatarSrcUrl: "/img/logoonly.png", // use your own bot avatar
            quickQuestions: [
              "Get Started with LoginRadius",
              "How does the LoginRadius User Registration System work?",
              "Invalid Request URI Error?",
              "Consumer Audit Logs?",
            ],
          },
        },
    
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',  // LoginRadius
        logo: {
          alt: 'LoginRadius Logo',
          src: 'img/logo.svg',
          srcDark:'img/logo-dark.svg'
        },

        items: [
       
        ],
      },
      footer: {
        links: [
          {
            html: `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px;">
  <div style="flex: 1; text-align: left;">
    Help us Improve our docs
  </div>
  <div style="flex: 1; text-align: center;">
Copyright © ${new Date().getFullYear()} LoginRadius Inc.  </div>
  <div style="flex: 1; text-align: right;">
    <a href="https://www.loginradius.com/privacy-policy/" style="margin-left: 10px;">Privacy Policy</a>
    <a href="https://www.loginradius.com/terms/" style="margin-left: 10px;">Terms</a>
  </div>
</div>
              `,
          },        
         
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    },
};

export default config;
