import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "account/loginradius-account-api",
    },
    {
      type: "category",
      label: "Multipurpose Token and SMS OTP Generation API",
      items: [
        {
          type: "doc",
          id: "account/email-token-api",
          label: "Email Token API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "account/sms-otp-api",
          label: "SMS OTP API",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "default",
      items: [
        {
          type: "doc",
          id: "account/account-create",
          label: "Account Create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "account/account-profile-by-phone-id",
          label: "Account Profile by Phone ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/account-delete-by-email",
          label: "Account Delete by Email",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "account/email-verification-token",
          label: "Email Verification token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "account/forgot-password-token",
          label: "Forgot Password token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "account/account-identities-by-email",
          label: "Account Identities by Email",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/access-token-based-on-uid-or-user-impersonation-api",
          label: "Access Token based on UID or User impersonation API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/account-password",
          label: "Account Password",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/account-set-password",
          label: "Account Set Password",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "account/account-profiles-by-uid",
          label: "Account Profiles by UID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/account-update-security-question-configuration",
          label: "Account Update Security Question Configuration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "account/account-delete",
          label: "Account Delete",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "account/privacy-policy-history-by-uid",
          label: "Privacy Policy History by UID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "account/upsert-email",
          label: "Upsert Email",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "account/account-email-delete",
          label: "Account Email Delete",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "account/update-phone-id-by-uid",
          label: "Update PhoneID by UID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "account/account-invalidate-verification-email",
          label: "Account Invalidate Verification Email",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
