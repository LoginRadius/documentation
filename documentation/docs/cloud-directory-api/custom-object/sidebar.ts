import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cloud-directory-api/custom-object/custom-object",
    },
    {
      type: "category",
      label: "Custom Object Cloud Directory",
      items: [
        {
          type: "doc",
          id: "cloud-directory-api/custom-object/get-custom-objects",
          label: "GetCustomObjects",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-directory-api/custom-object/get-custom-objectsby-pagination-id",
          label: "GetCustomObjectsbyPaginationID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
