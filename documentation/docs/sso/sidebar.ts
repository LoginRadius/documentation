import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "sso/single-sign-on",
    },
    {
      type: "category",
      label: "Federated SSO > oauth2.0",
      items: [
        {
          type: "doc",
          id: "sso/access-token-by-o-auth-2-token",
          label: "Access token by OAuth 2 token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/refresh-access-token",
          label: "Refresh Access Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/revoke-refresh-token",
          label: "Revoke Refresh Token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Federated SSO > JWT Login",
      items: [
        {
          type: "doc",
          id: "sso/jwt-token-by-access-token",
          label: "JWT token by Access Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/jwt-token-by-phone-and-password",
          label: "JWT token by Phone and Password",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Federated SSO > OpeinId Connect",
      items: [
        {
          type: "doc",
          id: "sso/refresh-access-token",
          label: "Refresh Access Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/revoke-refresh-token",
          label: "Revoke Refresh Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/user-info-by-access-token",
          label: "UserInfo by Access Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/json-web-key-set",
          label: "JSON Web Key Set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/oidc-discovery-endpoint",
          label: "OIDC Discovery Endpoint",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/request-device-code",
          label: "Request Device Code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/device-code-exchange-token-ping",
          label: "Device Code Exchange Token Ping",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Federated SSO > SAML",
      items: [
        {
          type: "doc",
          id: "sso/get-saml-metadata",
          label: "Get SAML Metadata",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Machine To Machine",
      items: [
        {
          type: "doc",
          id: "sso/to-validate-the-jwt",
          label: "To Validate the JWT",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/check-the-validity-and-content-of-the-access-token",
          label: "Check the validity and content of the Access Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/generate-access-token-using-client-credential-flow",
          label: "Generate Access Token Using Client Credential Flow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sso/revoke-access-token",
          label: "Revoke Access Token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SSO Connector",
      items: [
        {
          type: "doc",
          id: "sso/bigcommerce-login-url-by-access-token",
          label: "Bigcommerce Login URL by Access Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/shopify-login-url-by-access-token",
          label: "Shopify Login URL by Access Token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/perfect-mind",
          label: "PerfectMind",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/perfectmind-contact",
          label: "Perfectmind Contact",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Cross Device SSO",
      items: [
        {
          type: "doc",
          id: "sso/generate-qr-code-string",
          label: "Generate QR Code String",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/get-access-token-by-qr-code",
          label: "Get Access Token by QR Code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sso/add-qr-token",
          label: "Add QR Token",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
