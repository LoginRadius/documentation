/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
import apisidebar from "./docs/api/sidebar";
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  DocsSidebar: [ {
    type: "category",
    label: "Authentication",
    items: [
      // Main Section
      "authentication/overview",

      // Quick Start Subcategories
      {
        type: "category",
        label: "Quick Start",
        items: [
          "authentication/quick-start/standard-login",
          "authentication/quick-start/social-login",
          "authentication/quick-start/sso-implementation",
        ],
      },

      // Tutorials Section
      {
        type: "category",
        label: "Tutorial",
        items: [
          "authentication/tutorial/phone-login",
          "authentication/tutorial/one-touch-login",
          "authentication/tutorial/passkey-authentication",
          "authentication/tutorial/passwordless-login",
          "authentication/tutorial/smart-login",
          "authentication/tutorial/username-login",
        ],
      },

      // Concepts Section
      {
        type: "category",
        label: "Concepts",
        items: [
          "authentication/concepts/password-policy",
          "authentication/concepts/email-communications",
          "authentication/concepts/roles-and-membership",
          "authentication/concepts/email-verification-workflow",
          "authentication/concepts/advanced-workflow",
          "authentication/concepts/session-management",
          "authentication/concepts/sms-communication",
          "authentication/concepts/customer-security",
          "authentication/concepts/progressive-profiling",
          {
            type: "category",
            label: "Customer Data Management",
            items: [

             "authentication/concepts/Customer Data Management/introduction",
              "authentication/concepts/Customer Data Management/profile-editor",
            ],
          },
        ],
      },

      // FAQ Section
      {
        type: "category",
        label: "FAQ",
        items: [
          "authentication/faq/troubleshooting",
          "authentication/faq/account-linking",
          "authentication/faq/age-verification",
          "authentication/faq/billing-faq",
          "authentication/faq/identity-provider-apps",
          "authentication/faq/support-faq",
          "authentication/faq/supported-browsers",
        ],
      },
    
],
},
{
  type: "category",
  label: "Customer Intelligence",
  items: [
    // Main Section
"customer-intelligence/overview",
"customer-intelligence/analytics-overview",
"customer-intelligence/key-terminology",
"customer-intelligence/identity-analytics",
"customer-intelligence/provider-analytics",
"customer-intelligence/login-analytics",
"customer-intelligence/comparative-analysis",
"customer-intelligence/utilize-insights-data",
"customer-intelligence/api-analytics",
"customer-intelligence/sms-analytics",

    
  
],
},
{
  type: "category",
  label: "Customer Management",
  items: [
    // Main Section
    "customer-management/overview",
"customer-management/add-a-new-customer",
"customer-management/profile-view",
"customer-management/blocked-customer",

    // Quick Start Subcategories
    {
      type: "category",
      label: "Customer Segmentation",
      items: [
        "customer-management/customer-segmentation/customer-segmentation",
        "customer-management/customer-segmentation/basic-segmentation",
        "customer-management/customer-segmentation/advanced-segmentation", 
"customer-management/customer-segmentation/save-segmentation",
      ],
    },

    // Tutorials Section
    {
      type: "category",
      label: "Data Query",
      items: [
        "customer-management/data-query/data-query-overview",
        "customer-management/data-query/customer-query",
        "customer-management/data-query/custom-object-query",
      ],
    },

    // Concepts Section
    {
      type: "category",
      label: "User Data Export",
      items: [
        "customer-management/user-data-export/data-export-overview",
       "customer-management/user-data-export/on-demand-export",
       "customer-management/user-data-export/scheduled-export",
       "customer-management/user-data-export/export-logs",
          ],
        },
      ],
    },

    {
      type: "category",
      label: "Governance",
      items: [
        // Main Section
        "governance/overview",
  "governance/data-schema",
  "governance/custom-field-configuration",
  "governance/configure-social-data-settings",
  "governance/advanced-social-data-points",
  
        // Quick Start Subcategories
        {
          type: "category",
          label: "Customer Profiling",
          items: [
            "governance/customer-profiling/custom-fields-and-custom-objects",
            "governance/customer-profiling/custom-object-overview",
            "governance/customer-profiling/user-profile-scopes", 
  "governance/customer-profiling/consent-management",
  "governance/customer-profiling/privacy-policy",
  "governance/customer-profiling/data-security",
          ],
        },
            
  ],
  },
  {
    type: "category",
    label: "Integrations",
    items: [
      // Main Section
      "integrations/overview",
"integrations/available-integrations",


      // Quick Start Subcategories
      {
        type: "category",
        label: "Audit Log Integration",
        items: [
          "integrations/audit-log/overview",
        ],
      },

 {
        type: "category",
        label: "Cloud Connectors",
        items: [
          "integrations/server-side-cloud-connectors/overview",
        ],
      },

 {
        type: "category",
        label: "Client Side Connectors",
        items: [
          "integrations/client-side-connectors/getting-started",
    "integrations/client-side-connectors/amplitude",
    "integrations/client-side-connectors/customerio",
    "integrations/client-side-connectors/facebook-app-events",
    "integrations/client-side-connectors/google-analytics",
    "integrations/client-side-connectors/google-dfp",
    "integrations/client-side-connectors/gosquared",
    "integrations/client-side-connectors/hubspot",
    "integrations/client-side-connectors/intercom",
    "integrations/client-side-connectors/keen",
    "integrations/client-side-connectors/kissmetrics",
    "integrations/client-side-connectors/lotame",
    "integrations/client-side-connectors/matomo",
    "integrations/client-side-connectors/mixpanel",
    "integrations/client-side-connectors/olark",
    "integrations/client-side-connectors/salesmachine",
"integrations/client-side-connectors/wootric",
"integrations/client-side-connectors/zendesk",
        ],
      },

       {
        type: "category",
        label: "Third Party Integration Platforms",
        items: [
          "integrations/third-party-integration-platforms/overview",
    "integrations/third-party-integration-platforms/segment",
    "integrations/third-party-integration-platforms/zapier",
        ],
      },

  {
        type: "category",
        label: "Internet of Things (IoT)",
        items: [
          "integrations/internet-of-things-iot/alexa-skills-kit",
     "integrations/internet-of-things-iot/google-assistant",
        ],
      },
   {
        type: "category",
        label: "Marketplace",
        items: [
          "integrations/marketplace/microsoft-dynamics",
     "integrations/marketplace/disqus",
  "integrations/marketplace/zendesk-app",
        ],
      },
   
],
},
  {
    type: "category",
    label: "Libraries",
    link: {
      type: "generated-index",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "libraries",
      },
    ],
  },
  {
    type: "category",
    label: "Security",
    items: [
      // Main Section
      "security/overview",


      // Quick Start Subcategories
      {
        type: "category",
        label: "Infrastructure",
        items: [
          "security/infrastructure/loginradius-cdn",
      "security/infrastructure/multiple-environment",
      "security/infrastructure/smtp-overview",
      "security/infrastructure/ip-addresses-list",
      "security/infrastructure/loginradius-data-regions",
        ],
      },

 {
        type: "category",
        label: "Platform Security",
        items: [
          "security/platform-security/account-verification-overview",
 "security/platform-security/threat-prevention",
 "security/platform-security/identity-data-compliance",
 "security/platform-security/social-data-compliance",
 "security/platform-security/password-security",
 "security/platform-security/cryptographic-hashing-algorithms",
 "security/platform-security/data-migration-security",
        ],
      },

 {
        type: "category",
        label: "Data Management",
        items: [
          "security/data-management/user-data-overview",
    "security/data-management/confidentiality-integrity-and-availability",
    "security/data-management/loginradius-tokens",
    "security/data-management/data-auditing-andlogging",
    "security/data-management/consumer-audit-logs",
    "security/data-management/browser-information-storage-cookies",
    ],
      },

       {
        type: "category",
        label: "Customer Security",
        items: [
          "security/user-security/fraud-prevention",
    "security/user-security/registration-security",
    "security/user-security/login-security",
 "security/user-security/password-management",
        ],
      },
   
],
},
  {
    type: "category",
    label: "Single-Sign-On",
    link: {
      type: "generated-index",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "single-sign-on",
      },
    ],
  }
  ,],

  // But you can create a sidebar manually
  /*
  AdminConsoleSidebar: [
    'Governance',
    'customer profiling',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['customer-profiling/overview'],
    },
  ],
   */
  // APISideBar: [
  //   {
  //     type: "category",
  //     label: "Auth APIs",
  //     link: {
  //       type: "category",
  //       title: "Auth APIs",
  //       slug: "/category/auth-api",
  //     },
  //     items: [
  //       {
  //         type: "autogenerated",
  //         dirName: "api", // '.' means the current docs folder
  //       },
  //     ],
   // },
    apiside: [
      {
        type: "category",
        label: "Auth APIs",
        link: {
          type: "generated-index",
          title: "Auth APIs",
          description:
            "API Reference contains all the essential documents on technical specifications, process flows, resources and available tools to configure and implement the LoginRadius platform to meet your business requirements. This comprehensive guide will assist you in incorporating the various platform feature offered by the LoginRadius solution.",
          slug: "/category/apis",
        },
        items:[
          {
            type: "autogenerated",
            dirName: "api", // '.' means the current docs folder
          },
        ], //apisidebar,
      }
  ],
};

export default sidebars;
