import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cloud-directory-api/insights/loginradius-cloud-directory-insights-api",
    },
    {
      type: "category",
      label: "LoginRadius Insights APIs",
      items: [
        {
          type: "doc",
          id: "cloud-directory-api/insights/get-user-insights",
          label: "Get User Insights",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
