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
    
    // Authentication > (Finalized)
    {
      type: "category",
      label: "Authentication",
      items: [
        "authentication/overview",
        "authentication/sso-implementation", 
        "authentication/phone-login",
        "authentication/one-touch-login",
        "authentication/passkey-authentication",
        "authentication/passwordless-login",
        "authentication/smart-login",
        "authentication/username-login",

        // Authentication > Standard Login > (Finalized)
        {
          type: "category",
          label: "Standard Login",
          items: [
            "authentication/standard-login/standard-login",
            "authentication/standard-login/email-verification-workflow",
            "authentication/standard-login/account-verification-overview",
            "authentication/standard-login/data-schema",
            "authentication/standard-login/custom-field-configuration"
          ],
        },

        // Authentication > Social Login > (Finalized)
        {
          type: "category",
          label: "Standard Login",
          items: [
            "authentication/social-login/social-login",
            "authentication/social-login/social-data-compliance"
          ],
        },

        /* Authentication > Quick Start >
        {
          type: "category",
          label: "Quick Start",
          items: [
            //"authentication/quick-start/standard-login", (Moved)
            //"authentication/quick-start/social-login", (Moved)
            //"authentication/quick-start/sso-implementation", (Moved)
          ],
        },
        // Authentication > Tutorial >
        {
          type: "category",
          label: "Tutorial",
          items: [
            //"authentication/tutorial/phone-login", (Moved)
            //"authentication/tutorial/one-touch-login", (Moved)
            //"authentication/tutorial/passkey-authentication", (Moved)
            //"authentication/tutorial/passwordless-login", (Moved)
            //"authentication/tutorial/smart-login", (Moved)
            //"authentication/tutorial/username-login", (Moved)
          ],
        },
        */
        // Authentication > Concepts >
        {
          type: "category",
          label: "Concepts",
          items: [
            //"authentication/concepts/password-policy", (Moved)
            //"authentication/concepts/email-communications", (Moved)
            //"authentication/concepts/roles-and-membership", (Moved)
            //"authentication/concepts/email-verification-workflow", (Moved)
            "authentication/concepts/advanced-workflow",
            "authentication/concepts/session-management",
            //"authentication/concepts/sms-communication", (Moved)
            //"authentication/concepts/customer-security", (Moved)
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

        /* Authentication > FAQ >
        {
          type: "category",
          label: "FAQ",
          items: [
            //"authentication/faq/troubleshooting", (Moved)
            //"authentication/faq/account-linking", (Moved)
            //"authentication/faq/age-verification", (Moved)
            //"authentication/faq/billing-faq", (Moved)
            //"authentication/faq/identity-provider-apps", (Moved)
            //"authentication/faq/support-faq", (Moved)
            //"authentication/faq/supported-browsers", (Moved)
          ],
        },
        */
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        // Security > (Finalized)
        "security/overview",

        // Security > Customer Security > (Finalized)
        {
          type: "category",
          label: "Customer Security",
          items: [
            "security/customer-security/customer-security",
            "security/customer-security/fraud-prevention",
            "security/customer-security/registration-security",
            "security/customer-security/login-security",
            "security/customer-security/multi-factor-auth",
            "security/customer-security/risk-based-auth",
            "security/customer-security/session-management",
            "security/customer-security/password-management",
            "security/customer-security/password-policy",
          ],
        },

        // Security > Infrastructure >
        {
          type: "category",
          label: "Infrastructure",
          items: [
            "security/infrastructure/loginradius-cdn",
            //"security/infrastructure/multiple-environment", (Moved)
            //"security/infrastructure/smtp-overview", (Moved)
            //"security/infrastructure/ip-addresses-list", (Moved)
            //"security/infrastructure/loginradius-data-regions", (Moved)
          ],
        },

        /* Security > Platform Security >
        {
          type: "category",
          label: "Platform Security",
          items: [
            //"security/platform-security/account-verification-overview", (Moved)
            //"security/platform-security/threat-prevention", (Moved)
            //"security/platform-security/identity-data-compliance", (Moved)
            //"security/platform-security/social-data-compliance", (Moved)
            //"security/platform-security/password-security", (Moved)
            //"security/platform-security/cryptographic-hashing-algorithms", (Moved)
            //"security/platform-security/data-migration-security", (Moved)
          ],
        },
        // Security > Data Management >
        {
          type: "category",
          label: "Data Management",
          items: [
            //"security/data-management/user-data-overview", (Moved)
            //"security/data-management/confidentiality-integrity-and-availability", (Moved)
            //"security/data-management/loginradius-tokens", (Moved)
            //"security/data-management/data-auditing-andlogging", (Moved)
            //"security/data-management/consumer-audit-logs", (Moved)
            //"security/data-management/browser-information-storage-cookies", (Moved)
          ],
        },
        */
        /* Security > Customer Security >
        {
          type: "category",
          label: "Customer Security",
          items: [
            //"security/user-security/fraud-prevention", (Moved)
            "security/user-security/registration-security", (Moved)
            "security/user-security/login-security", (Moved)
            "security/user-security/password-management", (Moved)
          ],
        },
        */
      ],
    },
    {
      type: "category",
      label: "Teanant Management/Configuration",
      items: [
        // Teanant Management > (Finalized)
        "tenant-management/smtp-overview",
        "tenant-management/loginradius-data-regions",

        // Teanant Management > Platform Security > (Finalized)
        {
          type: "category",
          label: "Platform Security",
          items: [
            "tenant-management/platform-security/multiple-environment",
            "tenant-management/platform-security/threat-prevention",
            "tenant-management/platform-security/identity-data-compliance",
            "tenant-management/platform-security/ip-addresses-list",
            "tenant-management/platform-security/password-security",
            "tenant-management/platform-security/cryptographic-hashing-algorithms",
            "tenant-management/platform-security/data-migration-security",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Single Sign-on",
      items: [
        // Single Sign-on > (Finalized)
        //"single-sign-on/federated-sso/",

        {
          type: "category",
          label: "Single Sign-on",
          items: [
            // Single Sign-on > Federated SSO > (Finalized)

            //"single-sign-on/federated-sso/overview", MISSING #123Destination
            "single-sign-on/federated-sso/pre-built-connections",
            "single-sign-on/federated-sso/oauth-2-0-overview",
            
            {
              type: "category",
              label: "OpenID Connect",
              items: [
                // Single Sign-on > Federated SSO > OpenID Connect > (Finalized)
                "single-sign-on/federated-sso/openid-connect/openid-connect-overview",
                "single-sign-on/federated-sso/openid-connect/azure-ad-b2c",
              ],
            },

            {
              type: "category",
              label: "SAML",
              items: [
                // Single Sign-on > Federated SSO > SAML > (Finalized)
                "single-sign-on/federated-sso/saml/overview",
                "single-sign-on/federated-sso/saml/idp-initiated",
                "single-sign-on/federated-sso/saml/sp-initiated",
                {
                  type: "category",
                  label: "SAML",
                  items: [
                    // Single Sign-on > Federated SSO > SAML > SAML Providers  (Finalized)
                    "single-sign-on/federated-sso/saml/saml-providers/domo",
                    "single-sign-on/federated-sso/saml/saml-providers/jira",
                    "single-sign-on/federated-sso/saml/saml-providers/salesforce",
                    "single-sign-on/federated-sso/saml/saml-providers/office365",
                    "single-sign-on/federated-sso/saml/saml-providers/sharepoint",
                  ],
                },

              ],
            },

            {
              type: "category",
              label: "JWT Login",
              items: [
                // Single Sign-on > Federated SSO > JWT Login > (Finalized)
                "single-sign-on/federated-sso/jwt-login/jwt-login-overview",
                "single-sign-on/federated-sso/jwt-login/jwt-implementation-guide",
                "single-sign-on/federated-sso/jwt-login/jwt-generate-algos",
              ],
            },

          ],
        },

        {
          type: "category",
          label: "Custom IDPs",
          items: [
            // Single Sign-on > Custom IDPs > (Finalized)

            "single-sign-on/custom-idps/overview",
            "single-sign-on/custom-idps/pre-built-connections",

            {
              type: "category",
              label: "Custom Integrations",
              items: [
                // Single Sign-on > Custom IDPs > Custom Integrations > (Finalized)
                "single-sign-on/custom-idps/custom-integrations/custom-oauth-provider",
                "single-sign-on/custom-idps/custom-integrations/custom-jwt-provider",
                "single-sign-on/custom-idps/custom-integrations/custom-saml-provider",
                "single-sign-on/custom-idps/custom-integrations/custom-adfs-provider",
              ],
            },

            {
              type: "category",
              label: "Custom Identity Providers",
              items: [
                // Single Sign-on > Custom IDPs > Custom Identity Providers > (Finalized)
                "single-sign-on/custom-idps/custom-identity-providers/azure-ad",
                "single-sign-on/custom-idps/custom-identity-providers/doximity",
                "single-sign-on/custom-idps/custom-identity-providers/alipay",
                "single-sign-on/custom-idps/custom-identity-providers/aws-cognito",
                "single-sign-on/custom-idps/custom-identity-providers/autho",
                "single-sign-on/custom-idps/custom-identity-providers/lr-as-custom-idp-into-another-lr-app",
                "single-sign-on/custom-idps/custom-identity-providers/wechat",
              ],
            },
          ],
        },

        {
          type: "category",
          label: "FAQ",
          items: [
            // Single Sign-on > FAQ > (Finalized)

            "single-sign-on/faq/chrome-blocking-third-party-cookies",
            "single-sign-on/faq/proof-of-key-for-code-exchange",
            {
              type: "category",
              label: "FAQ",
              items: [
                // Single Sign-on > FAQ > SAML Miscellaneous > (Finalized)
    
                "single-sign-on/faq/saml-miscellaneous/samlfaq",
                "single-sign-on/faq/saml-miscellaneous/usage",
                "single-sign-on/faq/saml-miscellaneous/certificate",
              ],
            },
          ],
        },

        /* Single Sign-on > Tutorial >
        {
          type: "category",
          label: "Tutorial",
          items: [
            //"single-sign-on/tutorial/web-sso/overview", (Moved)
            //"single-sign-on/tutorial/mobile-sso/overview", (Moved)

            // Single Sign-on > Tutorial > Federated SSO >
            {
              type: "category",
              label: "Federated SSO",
              items: [
                //"single-sign-on/tutorial/federated-sso/overview", MISSING #123Source
                //"single-sign-on/tutorial/federated-sso/pre-built-connections", (Moved)
                //"single-sign-on/tutorial/federated-sso/oauth-2-0/oauth-2-0-overview", (Moved)
                //"single-sign-on/tutorial/federated-sso/openid-connect/openid-connect-overview", (Moved)

                // Single Sign-on > Tutorial > Federated SSO > JWT Login >
                {
                  type: "category",
                  label: "JWT Login",
                  items: [
                    //"single-sign-on/tutorial/federated-sso/jwt-login/jwt-login-overview", (Moved)
                    //"single-sign-on/tutorial/federated-sso/jwt-login/jwt-implementation-guide", (Moved)
                    //"single-sign-on/tutorial/federated-sso/jwt-login/jwt-generate-algos", (Moved)
                  ],
                },

                // Single Sign-on > Tutorial > Federated SSO > SAML >
                {
                  type: "category",
                  label: "SAML",
                  items: [
                    //"single-sign-on/tutorial/federated-sso/saml/overview", (Moved)
                    //"single-sign-on/tutorial/federated-sso/saml/idp-initiated", (Moved)
                    //"single-sign-on/tutorial/federated-sso/saml/sp-initiated", (Moved)
                  ],
                },
              ],
            },

            // Single Sign-on > Tutorial > Cross Device SSO >
            {
              type: "category",
              label: "Cross Device SSO",
              items: [
                //"single-sign-on/tutorial/cross-device-sso/overview", (Moved)
              ],
            },

            // Single Sign-on > Tutorial > Custom IDPs >
            {
              type: "category",
              label: "Custom IDPs",
              items: [
                //"single-sign-on/tutorial/custom-identity-providers/overview", (Moved)
                //"single-sign-on/tutorial/custom-identity-providers/pre-built-connections", (Moved)
                //"single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider", (Moved)
                //"single-sign-on/tutorial/custom-identity-providers/custom-jwt-provider", (Moved)
                //"single-sign-on/tutorial/custom-identity-providers/custom-saml-provider", (Moved)
                //"single-sign-on/tutorial/custom-identity-providers/custom-adfs-provider", (Moved)
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
                //"single-sign-on/concept/custom-idp-provider/azure-ad", (Moved)
                //"single-sign-on/concept/custom-idp-provider/doximity", (Moved)
                //"single-sign-on/concept/custom-idp-provider/alipay", (Moved)
                //"single-sign-on/concept/custom-idp-provider/aws-cognito", (Moved)
                //"single-sign-on/concept/custom-idp-provider/autho", (Moved)
                //"single-sign-on/concept/custom-idp-provider/lr-as-custom-idp-into-another-lr-app", (Moved)
                //"single-sign-on/concept/custom-idp-provider/wechat", (Moved)
              ],
            },

            // Single Sign-on > Concept > SAML Providers >
            {
              type: "category",
              label: "SAML Providers",
              items: [
                //"single-sign-on/concept/saml-providers/domo", (Moved)
                //"single-sign-on/concept/saml-providers/jira", (Moved)
                //"single-sign-on/concept/saml-providers/salesforce", (Moved)
                //"single-sign-on/concept/saml-providers/office365", (Moved)
                //"single-sign-on/concept/saml-providers/sharepoint", (Moved)
              ],
            },

            // Single Sign-on > Concept > OIDC Providers >
            {
              type: "category",
              label: "OIDC Providers",
              items: [
                //"single-sign-on/concept/oidc-providers/azure-ad-b2c", (Moved)
              ],
            },

            // Single Sign-on > Concept > SAML Miscellaneous >
            {
              type: "category",
              label: "SAML Miscellaneous",
              items: [
                //"single-sign-on/concept/saml-miscellaneous/samlfaq", (Moved)
                //"single-sign-on/concept/saml-miscellaneous/usage", (Moved)
                //"single-sign-on/concept/saml-miscellaneous/certificate", (Moved)
              ],
            },

            // Single Sign-on > Concept > FAQ > (Acutally FAQ is in same directory as Concept)
            {
              type: "category",
              label: "FAQ",
              items: [
                //"single-sign-on/faq/chrome-blocking-third-party-cookies", (Moved)
                //"single-sign-on/faq/proof-of-key-for-code-exchange", (Moved)
              ],
            },
          ],
        },
        */
      ],
    },
    
    // Branding & Customization (Finalized)
    {
      type: "category",
      label: "Branding & Customization",
      items: [
        "branding-and-customization/overview", // #Duplicate123
        // Branding & Customization > Email Communication & Configuration > (Finalized)
        {
          type: "category",
          label: "Email Communication & Configuration",
          items: [
            "branding-and-customization/email-communication-and-configuration/email-communications",
            "branding-and-customization/email-communication-and-configuration/email-templates",

            // Branding & Customization > Email Communication & Configuration > Email Providers (Finalized)
            {
              type: "category",
              label: "Email Providers",
              items: [
                "branding-and-customization/email-communication-and-configuration/email-providers/aws",
                "branding-and-customization/email-communication-and-configuration/email-providers/gmail",
                "branding-and-customization/email-communication-and-configuration/email-providers/mailazy",
                "branding-and-customization/email-communication-and-configuration/email-providers/mailgun",
                "branding-and-customization/email-communication-and-configuration/email-providers/mandrill",
                "branding-and-customization/email-communication-and-configuration/email-providers/salesforce-marketing-cloud",
                "branding-and-customization/email-communication-and-configuration/email-providers/sendgrid",
                "branding-and-customization/email-communication-and-configuration/email-providers/yahoo",
              ],
            },
          ],
        },
        // Branding & Customization > SMS Communication & Configuration > (Finalized)
        {
          type: "category",
          label: "SMS Communication & Configuration",
          items: [
            "branding-and-customization/sms-communication-and-configuration/sms-communication",
            
            // Branding & Customization > SMS Communication & Configuration > SMS Providers (Finalized)
            {
              type: "category",
              label: "SMS Providers",
              items: [
                "branding-and-customization/sms-communication-and-configuration/sms-providers/twilio-configuration",
                "branding-and-customization/sms-communication-and-configuration/sms-providers/custom-sms-provider",
              ],
            },
          ],
        },
        // Branding & Customization > Hosted pages > (Finalized)
        {
          type: "category",
          label: "Hosted pages",
          items: [
            //"branding-and-customization/hosted-pages/", #Duplicate123
            "branding-and-customization/hosted-pages/usage",
            "branding-and-customization/hosted-pages/customization",
          ],
        },
      ],
    },
    // User Management > (Finalized)
    {
      type: "category",
      label: "User Management",
      items: [
        // User Management > User Management > (Finalized)
        {
          type: "category",
          label: "User Management",
          items: [
            "user-management/user-management/overview",
            "user-management/user-management/add-a-new-customer",
            "user-management/user-management/profile-view",
            "user-management/user-management/blocked-customer",
          ],
        },
        // User Management > Privacy and Consent > (Finalized)
        {
          type: "category",
          label: "Privacy and Consent",
          items: [
            "user-management/privacy-and-consent/consent-management",
            "user-management/privacy-and-consent/privacy-policy",
          ],
        },
        // User Management > Roles and Permissions > (Finalized)
        {
          type: "category",
          label: "Roles and Permissions",
          items: [
            "user-management/roles-and-permissions/roles-and-membership",
          ],
        },
        // User Management > Data Management > (Finalized)
        {
          type: "category",
          label: "Data Management",
          items: [
            "user-management/data-management/user-data-overview",
            "user-management/data-management/confidentiality-integrity-and-availability",
            "user-management/data-management/loginradius-tokens",
            "user-management/data-management/data-auditing-andlogging",
            "user-management/data-management/consumer-audit-logs",
            "user-management/data-management/browser-information-storage-cookies",
            "user-management/data-management/custom-object-overview",
            "user-management/data-management/custom-fields-and-custom-objects",
            "user-management/data-management/user-profile-scopes",
            "user-management/data-management/data-security",
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
        //"customer-management/overview", (Moved)
        //"customer-management/add-a-new-customer", (Moved)
        //"customer-management/profile-view", (Moved)
        //"customer-management/blocked-customer", (Moved)

        /* Customer Management > Customer Segmentation >
        {
          type: "category",
          label: "Customer Segmentation",
          items: [
            //"customer-management/customer-segmentation/customer-segmentation", (Moved)
            //"customer-management/customer-segmentation/basic-segmentation", (Moved)
            //"customer-management/customer-segmentation/advanced-segmentation", (Moved)
            //"customer-management/customer-segmentation/save-segmentation", (Moved)
          ],
        },

        // Customer Management > Data Query >
        {
          type: "category",
          label: "Data Query",
          items: [
            //"customer-management/data-query/data-query-overview", (Moved)
            //"customer-management/data-query/customer-query", (Moved)
            //"customer-management/data-query/custom-object-query", (Moved)
          ],
        },
        */
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
        //"governance/data-schema", (Moved)
        //"governance/custom-field-configuration", (Moved)
        "governance/configure-social-data-settings",
        "governance/advanced-social-data-points",

        /* Governance > Customer Profiling
        {
          type: "category",
          label: "Customer Profiling",
          items: [
            //"governance/customer-profiling/custom-fields-and-custom-objects", (Moved)
            //"governance/customer-profiling/custom-object-overview", (Moved)
            //"governance/customer-profiling/user-profile-scopes", (Moved)
            //"governance/customer-profiling/consent-management", (Moved)
            //"governance/customer-profiling/privacy-policy", (Moved)
            //"governance/customer-profiling/data-security", (Moved)
          ],
        },
        */
      ],
    },
    // Integrations > (Finalized)
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/overview",
        "integrations/available-integrations",
        "integrations/webhook",
        "integrations/audit-log-overview",
        "integrations/cloud-connector-overview",

        /* Integrations > Audit Log Integration >
        {
          type: "category",
          label: "Audit Log Integration",
          items: [
            //"integrations/audit-log/overview", (Renamed to "audit-log-overview" and Moved)
          ],
        },

        // Integrations > Cloud Connectors >
        {
          type: "category",
          label: "Cloud Connectors",
          items: [
            //"integrations/server-side-cloud-connectors/overview", (Renamed to "cloud-connector-overview" and Moved)
          ],
        },
        */
        // Integrations > Client Side Connectors > (Finalized)
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

        // Integrations > Third Party Integration Platforms > (Finalized)
        {
          type: "category",
          label: "Third Party Integration Platforms",
          items: [
            "integrations/third-party-integration-platforms/overview",
            "integrations/third-party-integration-platforms/segment",
            "integrations/third-party-integration-platforms/zapier",
          ],
        },

        // Integrations > Internet of Things (IoT) > (Finalized)
        {
          type: "category",
          label: "Internet of Things (IoT)",
          items: [
            "integrations/internet-of-things-iot/alexa-skills-kit",
            "integrations/internet-of-things-iot/google-assistant",
          ],
        },

        // Integrations > Marketplace > (Finalized)
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
    // Data Insights > (Finalized)
    {
      type: "category",
      label: "Data Insights",
      items: [
        // Data Insights > Customer Segmentation > (Finalized)
        {
          type: "category",
          label: "Customer Segmentation",
          items: [
            "data-insights/customer-segmentation/customer-segmentation",
            "data-insights/customer-segmentation/basic-segmentation",
            "data-insights/customer-segmentation/advanced-segmentation",
            "data-insights/customer-segmentation/save-segmentation",
          ],
        },
        // Data Insights > Data Query > (Finalized)
        {
          type: "category",
          label: "Data Query",
          items: [
            "data-insights/data-query/data-query-overview",
            "data-insights/data-query/customer-query",
            "data-insights/data-query/custom-object-query",
          ],
        },
      ],
    },
    // Deployment and Testings > (Finalized)
    {
      type: "category",
      label: "Deployment and Testing",
      items: [
        // Deployment and Testings > Hosted Pages > (Finalized)
        {
          type: "category",
          label: "Hosted Pages",
          items: [
            "deployment-and-testing/hosted-pages/features-use-cases",
            "deployment-and-testing/hosted-pages/multi-branding-configuration",
            "deployment-and-testing/hosted-pages/idx-selfhosted",
          ],
        }, 
        // Deployment and Testings > Identity Orchestration > (Finalized)
        {
          type: "category",
          label: "Identity Orchestration",
          items: [
            "deployment-and-testing/identity-orchestration/overview"
          ],
        },
        // Deployment and Testings > CLI > (Finalized)
        {
          type: "category",
          label: "Command Line Interface",
          items: [
            "deployment-and-testing/command-line-interface/cli"
          ],
        },
        // Deployment and Testings > SDK > (Finalized)
        {
          type: "category",
          label: "SDK",
          items: [
            // Deployment and Testings > SDK > Mobile SDK Libraries > (Finalized)
            {
              type: "category",
              label: "Mobile SDK Libraries",
              items: [
                "deployment-and-testing/sdk/mobile-sdk-libraries/overview",
                "deployment-and-testing/sdk/mobile-sdk-libraries/ios-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/android-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/ionic-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/ionic-2-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/phonegap-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/xamarin-library",
                "deployment-and-testing/sdk/mobile-sdk-libraries/react-native-library",
              ],
            },
            // Deployment and Testings > SDK > Turn-Key Plugins > (Finalized)
            {
              type: "category",
              label: "Turn-Key Plugins",
              items: [
                "deployment-and-testing/sdk/turn-key-plugins/overview",
                "deployment-and-testing/sdk/turn-key-plugins/general-cms-integrations",
                "deployment-and-testing/sdk/turn-key-plugins/perfectmind",
                "deployment-and-testing/sdk/turn-key-plugins/drupal-v7-x-customer-identity-module-instructions",
                "deployment-and-testing/sdk/turn-key-plugins/drupal-v8-x-customer-identity-module-instructions",
                "deployment-and-testing/sdk/turn-key-plugins/joomla-v2-x-and-v3-x-customer-identity-module-instructions",
                "deployment-and-testing/sdk/turn-key-plugins/magento-1-x-extension",
                "deployment-and-testing/sdk/turn-key-plugins/magento-2-x-extension",
                "deployment-and-testing/sdk/turn-key-plugins/sitecore-integration",
                "deployment-and-testing/sdk/turn-key-plugins/wordpress-2-x-plugin",
                "deployment-and-testing/sdk/turn-key-plugins/bigcommerce-blueprint-plugin",
                "deployment-and-testing/sdk/turn-key-plugins/bigcommerce-stencil-plugin",
                "deployment-and-testing/sdk/turn-key-plugins/shopify-multipass-integration",
                "deployment-and-testing/sdk/turn-key-plugins/salesforce-commerce-cloud-cartridge",
                "deployment-and-testing/sdk/turn-key-plugins/aem-Integration",
                "deployment-and-testing/sdk/turn-key-plugins/hybris-Integration",
              ],
            },
            // Deployment and Testings > SDK > Use Cases/Demos > (Finalized)
            {
              type: "category",
              label: "Use Cases/Demos",
              items: [
                "deployment-and-testing/sdk/demos/overview",
                "deployment-and-testing/sdk/demos/html-and-js-demo",
                "deployment-and-testing/sdk/demos/html-themed-demo",
                "deployment-and-testing/sdk/demos/iframe-implementation-demo",
                "deployment-and-testing/sdk/demos/amp-demo",
                "deployment-and-testing/sdk/demos/angularjs-demo",
                "deployment-and-testing/sdk/demos/angular-6-demo",
                "deployment-and-testing/sdk/demos/emberjs-demo",
                "deployment-and-testing/sdk/demos/google-assistant-demo",
                "deployment-and-testing/sdk/demos/polymer-demo",
                "deployment-and-testing/sdk/demos/react-demo",
                "deployment-and-testing/sdk/demos/vue-demo",
                "deployment-and-testing/sdk/demos/preact-demo",
                "deployment-and-testing/sdk/demos/aurelia-demo",
                "deployment-and-testing/sdk/demos/meteor-demo",
                "deployment-and-testing/sdk/demos/backbonejs-demo",
                "deployment-and-testing/sdk/demos/cakephp-demo",
                "deployment-and-testing/sdk/demos/codeigniter-demo",
                "deployment-and-testing/sdk/demos/laravel-demo",
                "deployment-and-testing/sdk/demos/symfony-demo",
                "deployment-and-testing/sdk/demos/yii-demo",
                "deployment-and-testing/sdk/demos/alexa-demo",
              ],
            },
          ],
        },
        // Deployment and Testings > JS Libraries > (Finalized)
        {
          type: "category",
          label: "JS Libraries",
          items: [
            "deployment-and-testing/js-libraries/getting-started",
            "deployment-and-testing/js-libraries/javascript-hooks",
            "deployment-and-testing/js-libraries/advanced-js-customizations",
            "deployment-and-testing/js-libraries/js-form-library",
            "deployment-and-testing/js-libraries/localization",
            "deployment-and-testing/js-libraries/customization-by-context",
          ],
        },
        // Deployment and Testings > Errors and Troubleshooting > (Finalized)
        {
          type: "category",
          label: "Errors and Troubleshooting",
          items: [
            "deployment-and-testing/errors-and-troubleshooting/troubleshooting",
            "deployment-and-testing/errors-and-troubleshooting/account-linking",
            "deployment-and-testing/errors-and-troubleshooting/age-verification",
            "deployment-and-testing/errors-and-troubleshooting/billing-faq",
            "deployment-and-testing/errors-and-troubleshooting/identity-provider-apps",
            "deployment-and-testing/errors-and-troubleshooting/support-faq",
            "deployment-and-testing/errors-and-troubleshooting/supported-browsers",
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

        /* Libraries > JS Libraries >
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
        */
        /* Libraries > Identity Experience Framework >
        {
          type: "category",
          label: "Identity Experience Framework",
          items: [
            //"libraries/identity-experience-framework/overview", (Moved)
            //"libraries/identity-experience-framework/usage", (Moved)
            //"libraries/identity-experience-framework/customization", (Moved)
            //"libraries/identity-experience-framework/features-use-cases", (Moved)
            //"libraries/identity-experience-framework/multi-branding-configuration", (Moved)
            //"libraries/identity-experience-framework/idx-selfhosted", (Moved)
          ],
        },
        */
        // Libraries > SDK Libraries >
        {
          type: "category",
          label: "SDK Libraries",
          items: [
            "libraries/sdk-libraries/overview",
          ],
        },

        /* Libraries > Mobile SDK Libraries >
        {
          type: "category",
          label: "Mobile SDK Libraries",
          items: [
            //"libraries/mobile-sdk-libraries/overview", (Moved)
            //"libraries/mobile-sdk-libraries/ios-library", (Moved)
            //"libraries/mobile-sdk-libraries/android-library", (Moved)
            //"libraries/mobile-sdk-libraries/ionic-library", (Moved)
            //"libraries/mobile-sdk-libraries/ionic-2-library", (Moved)
            //"libraries/mobile-sdk-libraries/phonegap-library", (Moved)
            //"libraries/mobile-sdk-libraries/xamarin-library", (Moved)
            //"libraries/mobile-sdk-libraries/react-native-library", (Moved)
          ],
        },

        // Libraries > Turn-Key Plugins >
        {
          type: "category",
          label: "Turn-Key Plugins",
          items: [
            //"libraries/turn-key-plugins/overview", (Moved)
            //"libraries/turn-key-plugins/general-cms-integrations", (Moved)
            //"libraries/turn-key-plugins/perfectmind", (Moved)
            //"libraries/turn-key-plugins/drupal-v7-x-customer-identity-module-instructions", (Moved)
            //"libraries/turn-key-plugins/drupal-v8-x-customer-identity-module-instructions", (Moved)
            //"libraries/turn-key-plugins/joomla-v2-x-and-v3-x-customer-identity-module-instructions", (Moved)
            //"libraries/turn-key-plugins/magento-1-x-extension", (Moved)
            //"libraries/turn-key-plugins/magento-2-x-extension", (Moved)
            //"libraries/turn-key-plugins/sitecore-integration", (Moved)
            //"libraries/turn-key-plugins/wordpress-2-x-plugin", (Moved)
            //"libraries/turn-key-plugins/bigcommerce-blueprint-plugin", (Moved)
            //"libraries/turn-key-plugins/bigcommerce-stencil-plugin", (Moved)
            //"libraries/turn-key-plugins/shopify-multipass-integration", (Moved)
            //"libraries/turn-key-plugins/salesforce-commerce-cloud-cartridge", (Moved)
            //"libraries/turn-key-plugins/aem-Integration", (Moved)
            //"libraries/turn-key-plugins/hybris-Integration", (Moved)
          ],
        },

        // Libraries > Use Cases/Demos >
        {
          type: "category",
          label: "Use Cases/Demos",
          items: [
            //"libraries/demos/overview", (Moved)
            //"libraries/demos/html-and-js-demo", (Moved)
            //"libraries/demos/html-themed-demo", (Moved)
            //"libraries/demos/iframe-implementation-demo", (Moved)
            //"libraries/demos/amp-demo", (Moved)
            //"libraries/demos/angularjs-demo", (Moved)
            //"libraries/demos/angular-6-demo", (Moved)
            //"libraries/demos/emberjs-demo", (Moved)
            //"libraries/demos/google-assistant-demo", (Moved)
            //"libraries/demos/polymer-demo", (Moved)
            //"libraries/demos/react-demo", (Moved)
            //"libraries/demos/vue-demo", (Moved)
            //"libraries/demos/preact-demo", (Moved)
            //"libraries/demos/aurelia-demo", (Moved)
            //"libraries/demos/meteor-demo", (Moved)
            //"libraries/demos/backbonejs-demo", (Moved)
            //"libraries/demos/cakephp-demo", (Moved)
            //"libraries/demos/codeigniter-demo", (Moved)
            //"libraries/demos/laravel-demo", (Moved)
            //"libraries/demos/symfony-demo", (Moved)
            //"libraries/demos/yii-demo", (Moved)
            //"libraries/demos/alexa-demo", (Moved)
          ],
        },

        // Libraries > Identity Orchestration >
        {
          type: "category",
          label: "Identity Orchestration",
          items: [
            //"libraries/identity-orchestration/overview", (Moved)
          ],
        },

        // Libraries > Command Line Interface (CLI) >
        {
          type: "category",
          label: "Command Line Interface",
          items: [
            //"libraries/command-line-interface/cli", (Moved)
          ],
        },
        */
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
                    /* Admin Console > Platform Configuration > Communication Configuration > Email > Providers > (Moved)
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
                    */
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
                        //"apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/custom-sms-provider", (Moved)
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/instaalerts-configuration",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/messagebird-configuration",
                        "apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/textlocal-configuration",
                        //"apidocs/admin-console/platform-configuration/communication-configuration/sms/providers/twilio-configuration", (Moved)
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
                //"apidocs/admin-console/platform-configuration/standard-login/email-templates", (Moved)
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
            //"apidocs/admin-console/platform-security/multi-factor-auth", (Moved)
            //"apidocs/admin-console/platform-security/risk-based-auth", (Moved)
            //"apidocs/admin-console/platform-security/session-management", (Moved)
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