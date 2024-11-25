import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api2/loginradius-identity-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api2/get-user-identity",
          label: "Get User Identity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api2/cors-preflight",
          label: "CORS preflight",
          className: "api-method options",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
