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
  DocsSidebar: [
    {
      type: "category",
      label: "Authentication",
      items: [
        // Authentication >
        "authentication/overview",

        // Authentication > Quick Start >
        {
          type: "category",
          label: "Quick Start",
          items: [
            "authentication/quick-start/standard-login",
            "authentication/quick-start/social-login",
            "authentication/quick-start/sso-implementation",
          ],
        },

        // Authentication > Tutorial >
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

        // Authentication > Concepts >
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

        // Authentication > FAQ >
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
        // Customer Intelligence >
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
        // Customer Management >
        "customer-management/overview",
        "customer-management/add-a-new-customer",
        "customer-management/profile-view",
        "customer-management/blocked-customer",

        // Customer Management > Customer Segmentation >
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

        // Customer Management > Data Query >
        {
          type: "category",
          label: "Data Query",
          items: [
            "customer-management/data-query/data-query-overview",
            "customer-management/data-query/customer-query",
            "customer-management/data-query/custom-object-query",
          ],
        },

        // Customer Management > User Data Export >
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
        // Governance >
        "governance/overview",
        "governance/data-schema",
        "governance/custom-field-configuration",
        "governance/configure-social-data-settings",
        "governance/advanced-social-data-points",

        // Governance > Customer Profiling
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
        // Integrations >
        "integrations/overview",
        "integrations/available-integrations",

        // Integrations > Audit Log Integration >
        {
          type: "category",
          label: "Audit Log Integration",
          items: [
            "integrations/audit-log/overview",
          ],
        },

        // Integrations > Cloud Connectors >
        {
          type: "category",
          label: "Cloud Connectors",
          items: [
            "integrations/server-side-cloud-connectors/overview",
          ],
        },

        // Integrations > Client Side Connectors >
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

        // Integrations > Third Party Integration Platforms >
        {
          type: "category",
          label: "Third Party Integration Platforms",
          items: [
            "integrations/third-party-integration-platforms/overview",
            "integrations/third-party-integration-platforms/segment",
            "integrations/third-party-integration-platforms/zapier",
          ],
        },

        // Integrations > Internet of Things (IoT) >
        {
          type: "category",
          label: "Internet of Things (IoT)",
          items: [
            "integrations/internet-of-things-iot/alexa-skills-kit",
            "integrations/internet-of-things-iot/google-assistant",
          ],
        },

        // Integrations > Marketplace >
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
      items: [
        // Libraries >
        "libraries/overview",

        // Libraries > JS Libraries >
        {
          type: "category",
          label: "JS Libraries",
          items: [
            "libraries/js-libraries/getting-started",
            "libraries/js-libraries/javascript-hooks",
            "libraries/js-libraries/advanced-js-customizations",
            "libraries/js-libraries/js-form-library",
            "libraries/js-libraries/localization",
            "libraries/js-libraries/customization-by-context",
          ],
        },

        // Libraries > Identity Experience Framework >
        {
          type: "category",
          label: "Identity Experience Framework",
          items: [
            "libraries/identity-experience-framework/overview",
            "libraries/identity-experience-framework/usage",
            "libraries/identity-experience-framework/customization",
            "libraries/identity-experience-framework/features-use-cases",
            "libraries/identity-experience-framework/multi-branding-configuration",
            "libraries/identity-experience-framework/idx-selfhosted",
          ],
        },

        // Libraries > SDK Libraries >
        {
          type: "category",
          label: "SDK Libraries",
          items: [
            "libraries/sdk-libraries/overview",
          ],
        },

        // Libraries > Mobile SDK Libraries >
        {
          type: "category",
          label: "Mobile SDK Libraries",
          items: [
            "libraries/mobile-sdk-libraries/overview",
            "libraries/mobile-sdk-libraries/ios-library",
            "libraries/mobile-sdk-libraries/android-library",
            "libraries/mobile-sdk-libraries/ionic-library",
            "libraries/mobile-sdk-libraries/ionic-2-library",
            "libraries/mobile-sdk-libraries/phonegap-library",
            "libraries/mobile-sdk-libraries/xamarin-library",
            "libraries/mobile-sdk-libraries/react-native-library",
          ],
        },

        // Libraries > Turn-Key Plugins >
        {
          type: "category",
          label: "Turn-Key Plugins",
          items: [
            "libraries/turn-key-plugins/overview",
            "libraries/turn-key-plugins/general-cms-integrations",
            "libraries/turn-key-plugins/perfectmind",
            "libraries/turn-key-plugins/drupal-v7-x-customer-identity-module-instructions",
            "libraries/turn-key-plugins/drupal-v8-x-customer-identity-module-instructions",
            "libraries/turn-key-plugins/joomla-v2-x-and-v3-x-customer-identity-module-instructions",
            "libraries/turn-key-plugins/magento-1-x-extension",
            "libraries/turn-key-plugins/magento-2-x-extension",
            "libraries/turn-key-plugins/sitecore-integration",
            "libraries/turn-key-plugins/wordpress-2-x-plugin",
            "libraries/turn-key-plugins/bigcommerce-blueprint-plugin",
            "libraries/turn-key-plugins/bigcommerce-stencil-plugin",
            "libraries/turn-key-plugins/shopify-multipass-integration",
            "libraries/turn-key-plugins/salesforce-commerce-cloud-cartridge",
            "libraries/turn-key-plugins/aem-Integration",
            "libraries/turn-key-plugins/hybris-Integration",
          ],
        },

        // Libraries > Use Cases/Demos >
        {
          type: "category",
          label: "Use Cases/Demos",
          items: [
            "libraries/demos/overview",
            "libraries/demos/html-and-js-demo",
            "libraries/demos/html-themed-demo",
            "libraries/demos/iframe-implementation-demo",
            "libraries/demos/amp-demo",
            "libraries/demos/angularjs-demo",
            "libraries/demos/angular-6-demo",
            "libraries/demos/emberjs-demo",
            "libraries/demos/google-assistant-demo",
            "libraries/demos/polymer-demo",
            "libraries/demos/react-demo",
            "libraries/demos/vue-demo",
            "libraries/demos/preact-demo",
            "libraries/demos/aurelia-demo",
            "libraries/demos/meteor-demo",
            "libraries/demos/backbonejs-demo",
            "libraries/demos/cakephp-demo",
            "libraries/demos/codeigniter-demo",
            "libraries/demos/laravel-demo",
            "libraries/demos/symfony-demo",
            "libraries/demos/yii-demo",
            "libraries/demos/alexa-demo",
          ],
        },

        // Libraries > Identity Orchestration >
        {
          type: "category",
          label: "Identity Orchestration",
          items: [
            "libraries/identity-orchestration/overview",
          ],
        },

        // Libraries > Command Line Interface (CLI) >
        {
          type: "category",
          label: "Command Line Interface",
          items: [
            "libraries/command-line-interface/cli",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        // Security >
        "security/overview",

        // Security > Infrastructure >
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

        // Security > Platform Security >
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

        // Security > Data Management >
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

        // Security > Customer Security >
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
      label: "Single Sign-on",
      items: [
        // Single Sign-on >
        "single-sign-on/overview",

        // Single Sign-on > Tutorial >
        {
          type: "category",
          label: "Tutorial",
          items: [
            "single-sign-on/tutorial/web-sso/overview",
            "single-sign-on/tutorial/mobile-sso/overview",

            // Single Sign-on > Tutorial > Federated SSO >
            {
              type: "category",
              label: "Federated SSO",
              items: [
                // "single-sign-on/tutorial/federated-sso/overview", MISSING
                "single-sign-on/tutorial/federated-sso/pre-built-connections",
                "single-sign-on/tutorial/federated-sso/oauth-2-0/oauth-2-0-overview",
                "single-sign-on/tutorial/federated-sso/openid-connect/openid-connect-overview",

                // Single Sign-on > Tutorial > Federated SSO > JWT Login >
                {
                  type: "category",
                  label: "JWT Login",
                  items: [
                    "single-sign-on/tutorial/federated-sso/jwt-login/jwt-login-overview",
                    "single-sign-on/tutorial/federated-sso/jwt-login/jwt-implementation-guide",
                    "single-sign-on/tutorial/federated-sso/jwt-login/jwt-generate-algos",
                  ],
                },

                // Single Sign-on > Tutorial > Federated SSO > SAML >
                {
                  type: "category",
                  label: "SAML",
                  items: [
                    "single-sign-on/tutorial/federated-sso/saml/overview",
                    "single-sign-on/tutorial/federated-sso/saml/idp-initiated",
                    "single-sign-on/tutorial/federated-sso/saml/sp-initiated",
                  ],
                },
              ],
            },

            // Single Sign-on > Tutorial > Cross Device SSO >
            {
              type: "category",
              label: "Cross Device SSO",
              items: [
                "single-sign-on/tutorial/cross-device-sso/overview",
              ],
            },

            // Single Sign-on > Tutorial > Custom IDPs >
            {
              type: "category",
              label: "Custom IDPs",
              items: [
                "single-sign-on/tutorial/custom-identity-providers/overview",
                "single-sign-on/tutorial/custom-identity-providers/pre-built-connections",
                "single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider",
                "single-sign-on/tutorial/custom-identity-providers/custom-jwt-provider",
                "single-sign-on/tutorial/custom-identity-providers/custom-saml-provider",
                "single-sign-on/tutorial/custom-identity-providers/custom-adfs-provider",
              ],
            },
          ],
        },

        // Single Sign-on > Concept >
        {
          type: "category",
          label: "Concept",
          items: [
            // Single Sign-on > Concept > Custom IDP Providers >
            {
              type: "category",
              label: "Custom IDP Providers",
              items: [
                "single-sign-on/concept/custom-idp-provider/azure-ad",
                "single-sign-on/concept/custom-idp-provider/doximity",
                "single-sign-on/concept/custom-idp-provider/alipay",
                "single-sign-on/concept/custom-idp-provider/aws-cognito",
                "single-sign-on/concept/custom-idp-provider/autho",
                "single-sign-on/concept/custom-idp-provider/lr-as-custom-idp-into-another-lr-app",
                "single-sign-on/concept/custom-idp-provider/wechat",
              ],
            },

            // Single Sign-on > Concept > SAML Providers >
            {
              type: "category",
              label: "SAML Providers",
              items: [
                "single-sign-on/concept/saml-providers/domo",
                "single-sign-on/concept/saml-providers/jira",
                "single-sign-on/concept/saml-providers/salesforce",
                "single-sign-on/concept/saml-providers/office365",
                "single-sign-on/concept/saml-providers/sharepoint",
              ],
            },

            // Single Sign-on > Concept > OIDC Providers >
            {
              type: "category",
              label: "OIDC Providers",
              items: [
                "single-sign-on/concept/oidc-providers/azure-ad-b2c",
              ],
            },

            // Single Sign-on > Concept > SAML Miscellaneous >
            {
              type: "category",
              label: "SAML Miscellaneous",
              items: [
                "single-sign-on/concept/saml-miscellaneous/samlfaq",
                "single-sign-on/concept/saml-miscellaneous/usage",
                "single-sign-on/concept/saml-miscellaneous/certificate",
              ],
            },

            // Single Sign-on > Concept > FAQ > (Acutally FAQ is in same directory as Concept)
            {
              type: "category",
              label: "FAQ",
              items: [
                "single-sign-on/faq/chrome-blocking-third-party-cookies",
                "single-sign-on/faq/proof-of-key-for-code-exchange",
              ],
            },
          ],
        },
      ],
    }, 
  ],

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
      "type": "category",
      "label": "Auth APIs",
      "link": {
        "type": "generated-index",
        "title": "Auth APIs",
        "description": "API Reference contains all the essential documents on technical specifications, process flows, resources and available tools to configure and implement the LoginRadius platform to meet your business requirements. This comprehensive guide will assist you in incorporating the various platform feature offered by the LoginRadius solution.",
        "slug": "/category/apis",
      },
      "items": [
        {
          "type": "autogenerated",
          "dirName": "api", // '.' means the current docs folder
        },
      ], //apisidebar,
    },

    {
      "type": "category",
      "label": "Account",
      "link": {
       "type": "generated-index",
        "title": "Account API",
        "description": "The Account APIs enable administrators to fetch and update customer details within the Admin Console. These APIs should be used exclusively by system administrators or via a secure backend setup. Understanding the impact of any changes made through these APIs is crucial, as they have administrative capabilities that can override default LoginRadius workflows."
      },
      "items": [
        {
         "type": "autogenerated",
          "dirName": "account" // Points to the subfolder containing the Identity API docs
        },
      ]
    },

    {
      "type": "category",
      "label": "SSO",
      "link": {
       "type": "generated-index",
        "title": "SSO API",
        "description": "LoginRadius' comprehensive suite of Single Sign-On (SSO) APIs empowers businesses to streamline user authentication and authorization across multiple applications. By supporting industry-standard protocols like SAML, JWT, and OpenID Connect, LoginRadius enables seamless and secure access management for diverse use cases."
      },
      "items": [
        {
         "type": "autogenerated",
          "dirName": "sso" // Points to the subfolder containing the Identity API docs
        },
      ]
    },

    {
      "type": "category",
      "label": "Cloud directory APIs",
      "link": {
        "type": "generated-index",
        "title": "Cloud Directory APIs",
        "description": "In the Cloud Directory section, you will find material to help get you familiarized with the LoginRadius Cloud Directory system and APIs. These will assist with things like retrieving your entire user database records and generating an aggregate view of your user base.",
        "slug": "/category/cloud-directory-api"
      },
      "items": [
        {
          "type": "category",
          "label": "Identity",
          "link": {
            "type": "generated-index",
            "title": "Identity API",
            "description": "Here you can find detailed documentation for the Identity-related API endpoints under the Cloud Directory APIs."
          },
          "items": [
            {
              "type": "autogenerated",
              "dirName": "cloud-directory-api/identity" // Points to the subfolder containing the Identity API docs
            },
          ]
        },
       

        {
          "type": "category",
          "label": "Custom Object",
          "link": {
            "type": "generated-index",
            "title": "Custom Object API",
            "description": "If you are looking to analyze or get details on how Custom Objects data is stored in your LoginRadius Cloud Directory, you will need to call the Custom Object API."
          },
          "items": [
            {
              "type": "autogenerated",
              "dirName": "cloud-directory-api/custom-object" // Points to the subfolder containing the User Management API docs
            },
          ]
        },
        {
          "type": "category",
          "label": "Insights",
          "link": {
            "type": "generated-index",
            "title": "Insights API",
            "description": "While you can leverage the Cloud Directory's Identity API to get data on your individual customers, it does not allow you to pull aggregate data. By using the Insights API you're able to query your customer data and obtain aggregated data in return."
          },
          "items": [
            {
              "type": "autogenerated",
              "dirName": "cloud-directory-api/insights" // Points to the subfolder containing the User Management API docs
            },
          ]
        }
      ]
    },
   
    
  ],

  ApiDocsSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        // Getting Started >
        "apidocs/getting-started/introduction",
        "apidocs/getting-started/implementation-workflows",
        "apidocs/getting-started/auth-type-overview",
        "apidocs/getting-started/security-best-practice",
        "apidocs/getting-started/supported-certificate-authorities",
        "apidocs/getting-started/acceptable-use-policy",
        "apidocs/getting-started/export-to-postman",
        "apidocs/getting-started/data-migration",
        "apidocs/getting-started/loginradius-site-license-overview",
        "apidocs/getting-started/glossary",

        // Getting Started > Data Points >
        {
          type: "category",
          label: "Data Points",
          items: [
            "apidocs/getting-started/data-points/data-points",
            "apidocs/getting-started/data-points/detailed-data-points",
            "apidocs/getting-started/data-points/editable-data-fields",
            "apidocs/getting-started/data-points/social-provider-data-fields",
          ],
        },

        // Getting Started > Response Codes >
        {
          type: "category",
          label: "Response Codes",
          items: [
            "apidocs/getting-started/response-codes/customer-identity-api-codes",
            "apidocs/getting-started/response-codes/sso-api-codes",
            "apidocs/getting-started/response-codes/cloud-directory-api-codes",
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Admin Console",
      items: [
        // Admin Console >
        "apidocs/admin-console/overview",

        // Admin Console > Platform Configuration >
        {
          type: "category",
          label: "Platform Configuration",
          items: [
            "apidocs/admin-console/platform-configuration/overview",
            "apidocs/admin-console/platform-configuration/custom-field-configuration",
            "apidocs/admin-console/platform-configuration/passwordless-login-configuration",
            "apidocs/admin-console/platform-configuration/phone-login-configuration",

            // Admin Console > Platform Configuration > Communication Configuration
            {
              type: "category",
              label: "Communication Configuration",
              items: [
                // Admin Console > Platform Configuration > Communication Configuration > Email
                {
                  type: "category",
                  label: "Email",
                  items: [
                    // Admin Console > Platform Configuration > Communication Configuration > Email > Providers
                    {
                      type: "category",
                      label: "Providers",
                      items: [
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/aws",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/gmail",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/mailazy",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/mailgun",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/mandrill",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/salesforce-marketing-cloud",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/sendgrid",
                        "apidocs/admin-console/platform-configuration/communication-configuration/email/providers/yahoo",
                      ],
                    },
                    "apidocs/admin-console/platform-configuration/communication-configuration/email/overview",
                    "apidocs/admin-console/platform-configuration/communication-configuration/email/email-configuration",
                    "apidocs/admin-console/platform-configuration/communication-configuration/email/global-email-settings",
                  ],
                },

                // Admin Console > Platform Configuration > Communication Configuration > SMS
                {
                  type: "category",
                  label: "SMS",
                  items: [
                    // Admin Console > Platform Configuration > Communication Configuration > SMS > Providers
                    {
                      type: "category",
                      label: "Providers",
                      items: [
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/custom-sms-provider",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/instaalerts-configuration",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/messagebird-configuration",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/textlocal-configuration",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/twilio-configuration",
                      ],
                    },
                    "apidocs/admin-console/platform-configuration/communication-configuration/sms/overview",
                    "apidocs/admin-console/platform-configuration/communication-configuration/sms/sms-configuration",
                    "apidocs/admin-console/platform-configuration/communication-configuration/sms/global-sms-settings",
                  ],
                },
              ],
            },
            // Admin Console > Platform Configuration > Standard Login
            {
              type: "category",
              label: "Standard Login",
              items: [
                "apidocs/admin-console/platform-configuration/standard-login/overview",
                "apidocs/admin-console/platform-configuration/standard-login/email-templates",
                "apidocs/admin-console/platform-configuration/standard-login/multiple-smtp-domain",
              ],
            },
          ],
        },

        // Admin Console > Deployment >
        {
          type: "category",
          label: "Deployment",
          items: [
            "apidocs/admin-console/deployment/production-environments",
            "apidocs/admin-console/deployment/custom-domain-and-ssl-configuration",
            "apidocs/admin-console/deployment/get-site-app-name",
            "apidocs/admin-console/deployment/progressive-profiling",
            "apidocs/admin-console/deployment/site-configurations-sync",
            "apidocs/admin-console/deployment/js-widgets",
          ]
        },
        // Admin Console > Platform Security >
        {
          type: "category",
          label: "Platform Security",
          items: [
            "apidocs/admin-console/platform-security/platform-security-overview",
            "apidocs/admin-console/platform-security/api-key-and-secret",
            "apidocs/admin-console/platform-security/api-security",
            "apidocs/admin-console/platform-security/auth-security-configuration",
            "apidocs/admin-console/platform-security/password-policy",
            "apidocs/admin-console/platform-security/security-question",
            "apidocs/admin-console/platform-security/multi-factor-auth",
            "apidocs/admin-console/platform-security/risk-based-auth",
            "apidocs/admin-console/platform-security/session-management",
            "apidocs/admin-console/platform-security/regulations",

            // Admin Console > Platform Security > Captcha Providers
            {
              type: "category",
              label: "Captcha Providers",
              items: [
                "apidocs/admin-console/platform-security/captcha-providers/google-recaptcha-configuration",
                "apidocs/admin-console/platform-security/captcha-providers/hcaptcha-configuration",
                "apidocs/admin-console/platform-security/captcha-providers/tencent-captcha-configuration",
              ]
            },
          ],
        },
        // Admin Console > My Account >
        {
          type: "category",
          label: "My Account",
          items: [
            "apidocs/admin-console/my-account/profile",
            "apidocs/admin-console/my-account/login-session",
            "apidocs/admin-console/my-account/security",
          ]
        },
      ]
    }
  ],
};

export default sidebars;