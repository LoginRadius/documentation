import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "cloud-directory-api/identity/identity",
    },
    {
      type: "category",
      label: "Misc",
      items: [
        {
          type: "doc",
          id: "cloud-directory-api/identity/get-user-identitywith-custom-objectsby-pagination-id",
          label: "GetUserIdentitywithCustomObjectsbyPaginationID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cloud-directory-api/identity/user-identitywith-custom-object",
          label: "UserIdentitywithCustomObject",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cloud-directory-api/identity/get-user-identityby-pagination-id",
          label: "GetUserIdentitybyPaginationID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "cloud-directory-api/identity/get-user-identity",
          label: "GetUserIdentity",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
