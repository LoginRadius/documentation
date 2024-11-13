import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/loginradius-authentication-api",
    },
    {
      type: "category",
      label: "LoginRadius Authentication APIs",
      items: [
        {
          type: "doc",
          id: "api/auth-add-email",
          label: "AuthAddEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-check-email-availability",
          label: "AuthCheckEmailAvailability",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-verify-emailby-otp",
          label: "AuthVerifyEmailbyOTP",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-remove-email",
          label: "AuthRemoveEmail",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/auth-forgot-password",
          label: "AuthForgotPassword",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-change-password",
          label: "AuthChangePassword",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-user-registrationby-email",
          label: "AuthUserRegistrationbyEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-resend-email-verification",
          label: "AuthResendEmailVerification",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-user-registrationby-re-captcha",
          label: "AuthUserRegistrationbyReCaptcha",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-loginby-email",
          label: "AuthLoginbyEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-link-social-identities",
          label: "AuthLinkSocialIdentities",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-link-social-identitiesby-client-guid",
          label: "AuthLinkSocialIdentitiesbyClientGuid",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/auth-check-user-name-availability",
          label: "AuthCheckUserNameAvailability",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-setor-change-user-name",
          label: "AuthSetorChangeUserName",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-readall-profilesby-token",
          label: "AuthReadallProfilesbyToken",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-update-profileby-token",
          label: "AuthUpdateProfilebyToken",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-delete-accountwith-email-confirmation",
          label: "AuthDeleteAccountwithEmailConfirmation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/auth-privacy-policy-accept",
          label: "AuthPrivacyPolicyAccept",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-send-welcome-email",
          label: "AuthSendWelcomeEmail",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-validate-accesstoken",
          label: "AuthValidateAccesstoken",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-access-token-info",
          label: "AuthAccessTokenInfo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-delete-account",
          label: "AuthDeleteAccount",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/access-token-invalidate",
          label: "AccessTokenInvalidate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-security-questions-by-access-token",
          label: "GetSecurityQuestionsByAccessToken",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-security-questions-by-email",
          label: "GetSecurityQuestionsByEmail",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-security-questions-by-user-name",
          label: "GetSecurityQuestionsByUserName",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-security-questions-by-phone",
          label: "GetSecurityQuestionsByPhone",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/privacy-policy-historyby-access-token",
          label: "PrivacyPolicyHistorybyAccessToken",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/auth-reset-passwordby-security-question",
          label: "AuthResetPasswordbySecurityQuestion",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-unlock-accountby-access-token",
          label: "AuthUnlockAccountbyAccessToken",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-reset-passwordby-ot-pand-user-name",
          label: "AuthResetPasswordbyOTPandUserName",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/auth-unlink-social-identities",
          label: "AuthUnlinkSocialIdentities",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
