let changelog = [
    {
        "name": "Core API Release 36.11.1",
        "description": "We have rolled out another version of the Core APIs, which brings you a new features. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New APIs <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/step-up-authentication/send-email-otp-for-step-up-auth-without-mfa/'>Send Email OTP for Step-Up Authentication</a> API and <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/step-up-authentication/verify-email-otp-for-step-up-auth-without-mfa/'>Verify Email OTP for Step-Up Authentication</a> API have been introduced, which extends the existing Step-Up Authentication workflow by enabling email-based authentication without requiring MFA configuration."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2024-10-23",
        "status": "public",
        "file_name": "core-api-release-36111.json"
    },
    {
        "name": "Core API Release 36.11.0",
        "description": "We have rolled out another version of the Core APIs, which brings you a new features. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Introducing a new feature <a href='/docs/authentication/concepts/session-management/#partrestrictloginsharing7'>Restrict Login Sharing</a> that gives the capability to limit the number of active sessions per user account. All LoginRadius APIs that return user profiles will now include the <strong>SessionsLimit</strong> attribute when the feature is enabled."
                },
                {
                    "text": "Introducing new error codes 1327,1328 and APIs that support the Passkey feature have been added under the <a href='/docs/api/v2/customer-identity-api/multi-factor-authentication/passkey/overview/'> Multifactor Authentication Section</a>."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2024-10-04",
        "status": "public",
        "file_name": "core-api-release-36110.json"
    },
    {
        "name": "Admin Console Release 25.14.1",
        "description": "The latest release of the LoginRadius Admin Console includes key improvements for enhanced performance and user experience.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "MFA features and APIs are now universally supported across all verification flows."
                },
                {
                    "text": "When the ACTIVITY_LOGS feature is enabled, user activity is tracked to support precise MAU billing."
                }
            ]
        },
        "auther": "Nikhil Sahu",
        "created_date": "2024-09-12",
        "status": "public",
        "file_name": "admin-console-release-25141.json"
    },
    {
        "name": "Core API Release 36.10.3",
        "description": "We have rolled out another version of the Core APIs, which brings you some new features. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Two APIs, namely <a href='/docs/api/v2/single-sign-on/federated-sso/oauth-2-0/oauth-token-by-loginradius-guid-jwt-encrypted-token/'>OAuth Token By LoginRadius GUID/JWT Encrypted Token API</a> and <a href='/docs/api/v2/single-sign-on/federated-sso/openid-connect/oidc-token-by-loginradius-guid-jwt-encrypted-token/'>OIDC Token By LoginRadius GUID/JWT Encrypted Token API</a> have been introduced in the OIDC/OAuth flow, which consumes the LoginRadius access token and, in return, provide the exchanged OIDC access token and refresh token."
                },
                {
                    "text": "New error codes 1323,1324  have been introduced with Passkey authentication APIs."
                },
                {
                    "text": "Five new APIs, namely <a href='/docs/api/v2/customer-identity-api/passkey/manage-list-users-passkeys/'>Manage List users passkeys</a>, <a href='/docs/api/v2/customer-identity-api/passkey/manage-remove-passkey-by-uid/'>Manage Remove passkey by Uid</a>, <a href='/docs/api/v2/customer-identity-api/passkey/forgot-passkey/'>Forgot Passkey</a>, <a href='/docs/api/v2/customer-identity-api/passkey/login-reset-passkey-begin/'>Login Reset passkey begin</a>, and <a href='/docs/api/v2/customer-identity-api/passkey/login-reset-passkey-finish/'>Login Reset Passkey Finish Passkey</a>, have been added to enhance the functionality of the Passkey authentication user workflow."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2024-09-04",
        "status": "public",
        "file_name": "core-api-release-36103.json"
    },
    {
        "name": "JS Release 3.27.1",
        "description": "This JavaScript release brings an enhancement to our LoginRadius V2JS library. Please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "We have added the option to implement the newly released Passkey feature in <a href='/docs/libraries/js-libraries/advanced-js-customizations/'>LoginRadius v2 JS</a>."
                }
            ]
        },
        "auther": "Nikhil Sahu",
        "created_date": "2024-09-04",
        "status": "public",
        "file_name": "js-release-3271.json"
    },
    {
        "name": "Core API Release 36.10.0",
        "description": "We have rolled out another version of the Core APIs, which brings you some new features. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "We have introduced  APIs for a new feature: Duo Authenticator as a MFA integraion, which is currently enabled only via the backend."
                },
                {
                    "text": "New error codes 1330-1336 have been introduced with Duo Authenticator to enhance security and improve error handling."
                },
                {
                    "text": "New error code 1337 have been introduced as part of Apple Native Login APIs."
                },
                {
                    "text": "Two new APIs <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-jwt-id-token/'>Access Token via Apple JWT ID Token</a> and <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-refresh-token/'> Access Token via Apple Refresh Token</a> have been added to support Apple Native Login."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2024-08-05",
        "status": "public",
        "file_name": "core-api-release-36100.json"
    },
    {
        "name": "JS Release 3.26.0",
        "description": "This JavaScript release brings a new feature to our LoginRadius V2JS library. Please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "We have also extended the functionalities of the newly released Passkey feature in LoginRadius v2 JS."
                }
            ]
        },
        "auther": "Nikhil Sahu",
        "created_date": "2024-06-29",
        "status": "public",
        "file_name": "js-release-3260.json"
    },
    {
        "name": "Core API Release 36.8.0",
        "description": "We have released a new version of the Core APIs, featuring several new additions. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Several new APIs have been incorporated into our new feature, <strong>Passkey</strong>, an authentication method."
                },
                {
                    "text": "New error codes <strong>1315</strong>, <strong>1316</strong>, and <strong>1317</strong> have been introduced as part of our <strong>Breached Password Protection</strong> feature, designed to safeguard user accounts from potential compromises."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-06-24",
        "status": "public",
        "file_name": "core-api-release-3680.json"
    },
    {
        "name": "Admin Console Release 25.13.1",
        "description": "This release of the Admin Console includes some new features. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Introduced an additional method to configure MFA using <strong>Push Notifications</strong> via the <strong>LoginRadius Authenticator app</strong> or custom native mobile apps."
                },
                {
                    "text": "We have introduced the <a href='https://adminconsole.loginradius.com/profile-management/customer-management/consumer-audit-logs' target='_blank'><strong>Consumer Audit Logs</strong></a> feature in the Customer Management section. This feature allows you to see all recent user activities based on the API calls."
                },
                {
                    "text": "Expanded the <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/integrations' target='_blank'><strong>Custom IDPs > Integration</strong></a> section with four new pre-built configurations for PingIdentity, Okta, Google Workspace, and AzureAD."
                },
                {
                    "text": "<a href='https://www.loginradius.com/docs/authentication/tutorial/passkey-authentication/' target='_blank'><strong>Passkey</strong></a>, an authentication method integrated into Advanced Login Methods within the Admin Console, enhances user security and convenience."
                },
                {
                    "text": "Introduced a <strong>Breach Password detection feature</strong> to the Admin Console, which detects if passwords being set or used by users are exposed to a known data breach."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-06-20",
        "status": "public",
        "file_name": "admin-console-release-25131.json"
    },
    {
        "name": "Core API Release 36.7.0",
        "description": "We have released a new version of the Core APIs, featuring several new additions. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": " A new API, <a href='/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebookjwt-token/' target='_blank'>Access Token By Facebook JWT Access Token</a>, have been added to support Facebook limited login."
                },
                {
                    "text": "APIs to support the Push Notification feature have been added under the <a href='/api/v2/customer-identity-api/multi-factor-authentication/push-notification/overview/' target='_blank'>Multifactor Authentication Section</a>."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2024-06-12",
        "status": "public",
        "file_name": "core-api-release-3670.json"
    },
    {
        "name": "Core API Release 36.6.0",
        "description": "We have released a new version of the Core APIs, featuring several new additions. Please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Two new APIs, <a href='/api/v2/customer-identity-api/phone-authentication/account-delete-by-otp-and-token/' target='_blank'>Account Delete by OTP and Token</a> and <a href='/api/v2/customer-identity-api/phone-authentication/send-account-delete-otp/' target='_blank'>Send Account Delete OTP</a>, have been added to the Phone Authentication section."
                },
                {
                    "text": "A new error code, <code>1292</code>, has been added to check if the phone number is linked to a LoginRadius account."
                },
                {
                    "text": "As part of the <a href='https://adminconsole.loginradius.com/platform-security/account-protection/auth-security/brute-force-lockout'>Brute Force Protection</a> feature, the LoginRadius account now displays a message indicating the number of remaining login attempts after each incorrect attempt."
                },
                {
                    "text": "A new placeholder tag, <code>#CurrentYear#</code>, has been introduced in the email templates to display the current year."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2024-06-04",
        "status": "public",
        "file_name": "core-api-release-3660.json"
    },
    {
        "name": "Admin Console Release 25.13.0",
        "description": "The following release of the LoginRadius Admin Console brings you a new feature and a fix. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The Admin Console now includes an option to customize and configure the SMS template for the user deletion action."
                },
                {
                    "text": "Introduced an additional method to configure MFA using Push Notifications via the LoginRadius Authenticator app or custom native mobile apps."
                }
            ],
            "FIXED": [
                {
                    "text": "Resolved birthdate format conflicts in the Admin Console that were blocking profile updates."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2024-05-30",
        "status": "public",
        "file_name": "admin-console-release-25130.json"
    },
    {
        "name": "Admin Console Release 25.12.0",
        "description": "The following release of the LoginRadius Admin Console brings you some improvements. See below for details on the notable changes that have been applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Extended fields have been added for the <a href='https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/openid-connect' target='_blank'>Federated SSO > OpenID Connect</a> and <a href='https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/oauth2' target='_blank'>OAuth2</a> flow under the Admin Console."
                },
                {
                    "text": "To enhance the support experience, any ticket categorized under <strong>'Billing'</strong> or <strong>'Account'</strong> will now directly involve the billing team alongside the creation of a support ticket."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2024-04-10",
        "status": "public",
        "file_name": "admin-console-release-25120.json"
    },
    {
        "name": "JS Release 3.24.0",
        "description": "This JavaScript release brings new features and an improvement to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "The functionality to show and hide the text in the password field is available on the LoginRadius hosted page."
                }
            ],
            "IMPROVED": [
                {
                    "text": "We've introduced the <strong>qrCodeAuthentication</strong> commonOptions into our <a href='/docs/libraries/js-libraries/getting-started/#initializationofloginradiusobject3'>JS Libraries</a> to facilitate compatibility with generic Authenticators."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-04-10",
        "status": "public",
        "file_name": "js-release-3240.json"
    },
    {
        "name": "Core API Release 36.5.0",
        "description": "We have rolled out another version of the Core APIs, which brings you some new features, an improvement, and a bug fix.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Three new APIs, <a href='/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-validate-authenticator-code/'> MFA Validate Authenticator Code</a>, <a href='/docs/api/v2/customer-identity-api/multi-factor-authentication/authenticator/mfa-verify-authenticator-code/'>MFA Verify Authenticator Code</a>, and <a href='/docs/api/v2/customer-identity-api/step-up-authentication/mfa/mfa-step-up-authentication-by-authenticator-code/'>MFA Step-Up Authentication by Authenticator Code</a>, have been added."
                },
                {
                    "text": "In the mandatory verification workflow, the prevention of verification emails is now possible."
                },
                {
                    "text": "Introduced new error messages for the error codes 1098, 1099, 1102, 1250, and 1279 for Multi-Factor Authentication in the <strong>Authenticator flow</strong>. You can refer to the following <a href='/api/v2/getting-started/response-codes/customer-identity-api-codes/#httperrorresponsestructure0'>documentation</a> for the description of these error messages"
                }
            ],
            "IMPROVED": [
                {
                    "text": "The <a href='/docs/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/'>Auth Verify Email by OTP</a> API now includes a new <strong>UID parameter</strong>. This addition allows for the sending of a verification email to the user, facilitating the verification of the Raas user profile based on either the email address or UID field associated with the social profile."
                }
            ],
            "FIXED": [
                {
                    "text": "Blocked accounts will no longer be able to request One Time Password (OTP)."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-04-04",
        "status": "public",
        "file_name": "core-api-release-3650.json"
    },
    {
        "name": "Core API Release 36.4.1",
        "description": "We have rolled out another version of the Core APIs, which brings you with a new feature.",
        "changelog": {
            "ADDED": [
                {
                    "text": "We've implemented a new QR code generation API, which replaces Google Chart APIs and now generates QR codes for the Authenticator app in the Multi-Factor Authentication (MFA) process."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-01-30",
        "status": "public",
        "file_name": "core-api-release-3641.json"
    },
    {
        "name": "Admin Console Release 25.11.6",
        "description": "The following release of the LoginRadius Admin Console brings you an improvement. See below for details on the notable change that has been applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "You now have the ability to configure the <strong>First Login</strong> event and the <strong>Login</strong> event separately in the <a href='https://adminconsole.loginradius.com/data-governance/trust-center/consent-center/consent-management' target='_blank'>Consent Management</a> forms."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2024-01-25",
        "status": "public",
        "file_name": "admin-console-release-25116.json"
    },
    {
        "name": "Admin Console Release 25.11.5",
        "description": "The following release of the LoginRadius Admin Console brings you a new update. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Updated the list of LoginRadius integration available in the <a href='https://adminconsole.loginradius.com/integration/third-party-software/available-integrations' target='_blank'><strong>Available Integration</strong></a> section of the Admin Console."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2024-01-05",
        "status": "public",
        "file_name": "admin-console-release-25115.json"
    },
    {
        "name": "Core API Release 36.4.0",
        "description": "We have rolled out another version of the Core APIs, which brings you with new features and an improvement.",
        "changelog": {
            "ADDED": [
                {
                    "text": "In the optional verification workflow, the prevention of SMS verification is now possible."
                },
                {
                    "text": "You can adjust the <strong>SessionNotOnAfter</strong> attribute in the SAML assertion for federated SSO by contacting <a href='https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket' target='_blank'>LoginRadius Support</a>."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Enhanced Authentication and Management APIs to capture <strong>email</strong> and <strong>UID</strong> information in <strong>Consumer Audit Logs</strong>."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2023-12-27",
        "status": "public",
        "file_name": "core-api-release-3640.json"
    },
    {
        "name": "Admin Console Release 25.11.4",
        "description": "The following release of the LoginRadius Admin Console brings you a new feature and a few improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The Custom IDP and Federated SSO feature in the Admin Console now supports Pre-Built templates (Salesforce, Fresh Desk, Zendesk) to help deploy the integrations quickly."
                },
                {
                    "text": "The Admin Console's Federated SSO (JWT) now includes support for data mapping of <strong>Roles</strong> and <strong>Roles & Permissions</strong> Profile Keys."
                },
                {
                    "text": "The Admin Console's Multiple Social Provider App features now include support for Microsoft/Live social providers."
                },
                {
                    "text": "For second-factor authentication, LoginRadius now supports all authenticator tools that return the TOTP with 6 digits. For example, Google Authenticator, Microsoft Authenticator, and Authy."
                },
                {
                    "text": "Now, LoginRadius Admin Console supports Custom SMS/Text message providers, using which you can configure SMS providers as per your choice."
                },
                {
                    "text": "A new feature, <strong>AuditLogIntegration</strong>, allows you  to integrate your logging tool into the LoginRadius Admin Console"
                }
            ],
            "IMPROVED": [
                {
                    "text": "The certificate auto-renewal feature in the LoginRadius Admin Console will now generate keys with a size of 2048 by default."
                },
                {
                    "text": "The Admin Console now supports selecting the email address (if multiple) while triggering the verification or password reset email via the manage profile section of the user."
                },
                {
                    "text": "The Bot Protection feature in the Admin Console now encompasses Passwordless Login APIs."
                },
                {
                    "text": "SAML configurations in the Federated SSO section under the Admin Console allow you to configure the <strong>NotOnOrAfter</strong> value, which sets the expiry time of the SAML assertion."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2023-12-22",
        "status": "public",
        "file_name": "admin-console-release-25114.json"
    },
    {
        "name": "JS Release 3.23.0",
        "description": "This JavaScript release brings a new feature to our LoginRadius V2JS library. Please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Extended the support of the One Touch Login APIs in the LoginRadius V2JS library."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2023-12-04",
        "status": "public",
        "file_name": "js-release-3230.json"
    },
    {
        "name": "Admin Console Release 25.11.3",
        "description": "The following release of the LoginRadius Admin Console brings you a new feature. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "<strong>AutoLookup</strong> feature under the Custom IDPs automatically redirects a user to the specific Identity Provider (IdP) after entering an email ID with the respective domain name."
                }
            ]
        },
        "auther": "Michelle Rathod",
        "created_date": "2023-10-17",
        "status": "public",
        "file_name": "admin-console-release-25113.json"
    },
    {
        "name": "Admin Console Release 25.11.2",
        "description": "The following release of the LoginRadius Admin Console brings you an improvement. See below for details on the notable change that has been applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "The <a href='https://adminconsole.loginradius.com/platform-security/multi-layered-security/risk-based-authentication/rba-settings' target='_blank'>Risk Based Authentication</a> feature now supports an additional risk factor - <strong>Device</strong>."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2023-10-05",
        "status": "public",
        "file_name": "admin-console-release-25112.json"
    },
    {
        "name": "Core API Release 36.2.0",
        "description": "We have rolled out another version of the Core APIs, which brings you a new feature and an improvement.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Password Hashing Algorithms now support <strong>Argon2i</strong> and <strong>Argon2id</strong> algorithms."
                },
                {
                    "text": "The new <strong>disable_login_with_password</strong> feature deactivates password login on your website and can be enabled by contacting <a href = https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket target=_blank> LoginRadius Support Team</a>."
                }
            ],
            "IMPROVED": [
                {
                    "text": "APIs are updated to align with the newly released <strong>Token Types (Magic Link or OTP)</strong> that can be independently configured via the Admin Console's Email Templates section."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2023-09-13",
        "status": "public",
        "file_name": "core-api-release-3620.json"
    },
    {
        "name": "Admin Console Release 25.11.1",
        "description": "The following release of the LoginRadius Admin Console brings you a new feature and an improvement. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The desired <strong>Token Type</strong> (Magic Link or OTP) for various emails can be independently configured via the Admin Console's <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/verification-email' target='_blank'>Email Templates</a> section."
                }
            ],
            "IMPROVED": [
                {
                    "text": "<a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/jwt-provider' target='_blank'>Custom IDP (JWT)</a> now supports configuring the <strong>JWKS Endpoint URL</strong> for ES & RS Algorithms. Additionally, <strong>Data Mapping</strong> now has the option to update the RaaS/Email profile with the values received in the social profile."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2023-08-29",
        "status": "public",
        "file_name": "admin-console-release-25111.json"
    },
    {
        "name": "JS Release 3.21.0",
        "description": "This JavaScript release brings new features and an improvement to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Extended the support of voice OTP as an OTP delivery method in the LoginRadius V2JS library, enabling users to authenticate using spoken verification codes."
                },
                {
                    "text": "The <strong>TOKEN_AS_JWT</strong> is a new feature to LoginRadius V2JS. Once activated, this feature seamlessly replaces the existing access token mechanism with a more secure JWT token system."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Captcha response is now required when leveraging the One Touch Login APIs."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2023-08-11",
        "status": "public",
        "file_name": "js-release-3210.json"
    },
    {
        "name": "Core API Release 36.1.0",
        "description": "We have rolled out another version of the Core APIs which brings you with a new feature, an improvement and a few bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "<a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-by-custom-jwt-token/'>Access Token via Custom JWT Token API</a> (Native Social Login) has been introduced to retrieve a LoginRadius access token via a custom JWT token."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Improved the description for LoginRadius <strong>Error Code 1083</strong> to provide clearer and more concise context."
                }
            ],
            "FIXED": [
                {
                    "text": "The issue with generating the <strong>access_token</strong> from the subsequently generated <strong>refresh_token</strong> in the case of the MS Live social provider has been resolved."
                },
                {
                    "text": "The conflict between the user's privacy policy acceptance status and the <a href='/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/update-mfa-by-access-token/'>Update MFA by Access Token</a> API (Google Authenticator) has been resolved."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2023-08-10",
        "status": "public",
        "file_name": "core-api-release-3610.json"
    },
    {
        "name": "Admin Console Release 25.11.0",
        "description": "The following release of the LoginRadius Admin Console brings you some improvements and new features as well. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added a new feature to support voice OTP as an OTP delivery method, enabling users to authenticate using spoken verification codes."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Provisioned a Renew Certificate button under the Federated SSO (SAML), Custom IDP (SAML, ADFS), and Team Management (Single Sign-On) configurations to automatically renew the provider certificate extending the expiry date by 5 years"
                },
                {
                    "text": "Identity Experience Framework’s hosted files are now on a cookieless CDN domain “lrcontent.com” to enhance performance and ensure the delivery of high-quality services."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2023-07-28",
        "status": "public",
        "file_name": "admin-console-release-25110.json"
    },
    {
        "name": "Core API Release 36.0.0",
        "description": "We have rolled out another version of the Core APIs. This core API release brings you with a few new features and a bug fix.        ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Introduced a new feature called <strong>Voice over OTP</strong>, which will send voice OTPs."
                },
                {
                    "text": "Implemented a new feature called <strong>TOKEN_AS_JWT</strong>. Enabling this feature will replace the existing access token with a JWT token."
                },
                {
                    "text": "Introducing the new <strong>Multipurpose Email/OTP Token Generation API</strong> that enables diverse token and OTP generation for email verification, password recovery, one-touch login, and more."
                }
            ],
            "IMPROVED": [
                {
                    "text": "The security update of using an invalid refresh token multiple times, resulting in the invalidation of other active refresh tokens, has been rolled back."
                }
            ],
            "FIXED": [
                {
                    "text": "The issue of the Account APIs not utilizing the Admin Console setting has been resolved."
                }
            ]
        },
        "auther": "Nikhil Sahu",
        "created_date": "2023-07-26",
        "status": "public",
        "file_name": "core-api-release-3600.json"
    },
    {
        "name": "Admin Console Release 25.10.9",
        "description": "This release of the Admin Console brings you some new features, improvements and bug fixes. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Now you can set up <strong>Google reCAPTCHA V3 and hCaptcha</strong> for authentication on your LoginRadius application or website from your Admin Console."
                },
                {
                    "text": "Option to configure the <strong>Refresh token Lifetime</strong> as per requirement."
                },
                {
                    "text": "Now <strong>PIN Login</strong> feature can be <strong>enabled/disabled</strong> from your LoginRadius Admin Console."
                },
                {
                    "text": "Feature to use <strong>additional secret</strong> to encrypt webhook signatures has been added."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Option to <strong>disable</strong> the <strong>SMS passcode</strong> authentication method in the Multi-Factor Authentication section under the Admin Console has been added."
                },
                {
                    "text": "While attempting to access the deprecated LoginRadius API endpoints, the response will return <strong>'404/405'</strong> status code."
                },
                {
                    "text": "Configuration steps for the <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers'>Social Providers</a> will automatically update to accommodate the custom domain settings (if configured any)."
                }
            ],
            "FIXED": [
                {
                    "text": "Issue with the email address appearing in <strong>both verified and unverified</strong> sections at the same time has been <strong>fixed</strong>."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2023-06-06",
        "status": "public",
        "file_name": "admin-console-release-25109.json"
    },
    {
        "name": "Core API Release 35.9.0",
        "description": "We have rolled out another version of the Core APIs. This core API release brings you with a few new features.",
        "changelog": {
            "ADDED": [
                {
                    "text": "A new error response for deprecated or legacy APIs."
                },
                {
                    "text": "A new management API has been introduced which allows revoking all refresh tokens associated with a particular user."
                },
                {
                    "text": "A new feature called 'EnableAccessTokenUserAgentValidation' which can verify the user agent from which a refresh token request is being made."
                },
                {
                    "text": "Now you can set up Google reCAPTCHA V3 and hCaptcha for authentication on your LoginRadius application or website."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Expire all existing Refresh Tokens on the re-use of any refresh token (This has been rolled back in <a href='/docs/api/changelog/core-api-release-3600'>Core API Release 36.0.0</a>)."
                }
            ]
        },
        "auther": "Nikhil Sahu",
        "created_date": "2023-06-05",
        "status": "public",
        "file_name": "core-api-release-3590.json"
    },
    {
        "name": "JS Release 3.20.0",
        "description": "This JavaScript release brings new features to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "The multi-factor authentication feature can be disabled using the loginRadius V2 JS library."
                },
                {
                    "text": "We have added support for LoginRadius V2 JS to configure Google reCAPTCHA V3 and hCaptcha for authentication in your application."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2023-06-05",
        "status": "public",
        "file_name": "js-release-3200.json"
    },
    {
        "name": "CLI Release V2.0.2",
        "description": "The beta version of <strong>LoginRadius CLI</strong>, a brand-new tool that enables you to use the command line interface to accomplish simple LoginRadius Admin Console tasks, is now available. This can be downloaded from <a href='https://github.com/LoginRadius/lr-cli#readme'><strong>here</strong></a>. The notable features are as follows:",
        "changelog": {
            "ADDED": [
                {
                    "text": "<strong>Domain whitelisting/blacklist feature</strong> to manage your white/black listed domain for your application."
                },
                {
                    "text": "Social Login provider configuration feature."
                },
                {
                    "text": "Theme management feature to update the LoginRadius IDX Page theme for predefined themes available through LoginRadius CLI."
                },
                {
                    "text": "The CLI can be used to control features like <strong>App Credentials, Login/Logout choices, SMTP Configuration, and Access Restrictions</strong>."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2023-04-22",
        "status": "public",
        "file_name": "cli-release-v2.0.2.json"
    },
    {
        "name": "Admin Console Release 25.10.8",
        "description": "This release of the Admin Console brings you new features, bug fixes, and a few improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Now, you can whitelist or blacklist the range (x.x.x.x. - y.y.y.y) of IPs from the Admin Console."
                },
                {
                    "text": "Bot Protection feature has been added in the API Security>Platform Security>Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Extended fields have been added for the Federated SSO > OIDC and OAuth2.0 flow under the Admin Console."
                },
                {
                    "text": "While configuring Federated SSO (SAML) & Custom IDP (SAML, ADFS), the Service Provider Certificate and its key are now generate automatically."
                }
            ],
            "FIXED": [
                {
                    "text": "Webhook signature verification failure for Gmail social logins has been resolved."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2023-04-05",
        "status": "public",
        "file_name": "admin-console-release-25108.json"
    },
    {
        "name": "Admin Console Release 25.10.7",
        "description": "The following release of the LoginRadius Admin Console brings you some new features. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Custom Objects can be included in the Webhook through the Webhook form available in the Admin Console."
                },
                {
                    "text": "The Auth-Common JS file can be edited using the 'Common Script' option in the deployment->IDX section of the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Now Audit Logs will have the entries of team member’s addition and deletion activities."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2023-03-02",
        "status": "public",
        "file_name": "admin-console-release-25107.json"
    },
    {
        "name": "Admin Console Release 25.10.6",
        "description": "The following release of the LoginRadius Admin Console brings you some improvements and new features as well. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "CustomIDP now supports the CustomFields and mapping of multiple attributes values."
                }
            ],
            "FIXED": [
                {
                    "text": "The Logout issue with Custom IDP-> SAML has been resolved."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Deprecated the Bot protection feature section from the Admin Console."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2023-01-12",
        "status": "public",
        "file_name": "admin-console-release-25106.json"
    },
    {
        "name": "Admin Console Release 25.10.5",
        "description": "This release of the Admin Console brings you some new features, improvements and bug fixes. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Broken images in <a href='https://adminconsole.loginradius.com/integration/third-party-software/available-integrations' target= blank> Available Integrations </a> sections of Admin Console have been fixed."
                }
            ],
            "IMPROVED": [
                {
                    "text": "The UI improvement has been made for <a href='https://adminconsole.loginradius.com/platform-configuration/identity-workflow/verification-workflow/email-workflow' target= blank> Platform Configuration->Identity Workflow->Verification Workflow->Email Workflow </a> section of Admin Console."
                },
                {
                    "text": "Data ETL service feature has been deprecated."
                }
            ]
        },
        "auther": "Himanshu Rai",
        "created_date": "2022-12-28",
        "status": "public",
        "file_name": "admin-console-release-25105.json"
    },
    {
        "name": "Admin Console Release 25.10.4",
        "description": "This release of the Admin Console brings you new feature and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Under the Team Management SSO section, a metadata file can be used to configure SSO for Admin Console."
                },
                {
                    "text": "When the 15 custom field limit for your Admin Console is modified via the backend, additional Custom Fields can be defined and displayed."
                }
            ],
            "IMPROVED": [
                {
                    "text": "In social info section of a user's profile in the Admin console, unverified emails can now be seen."
                },
                {
                    "text": "Self-serve Data Migration feature has been deprecated."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-12-08",
        "status": "public",
        "file_name": "admin-console-release-25104.json"
    },
    {
        "name": "Admin Console Release 25.10.2",
        "description": "This release of the Admin Console brings you some improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Removed the V2 reCAPTCHA, and only invisible reCAPTCHA is available under the JS Widgets section of the Admin Console."
                },
                {
                    "text": "Updated the Reset Password error message in Customer Management section of the Admin Console."
                },
                {
                    "text": "The unverified emails from the consumer's profile can be deleted using the corresponding delete button in the Admin Console."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-11-10",
        "status": "public",
        "file_name": "admin-console-release-25102.json"
    },
    {
        "name": "Core API Release 35.4.0",
        "description": "In this release we have made the below changes in the LoginRadius Core API, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Issue with the Server Side Validation in custom regex has been fixed."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-11-10",
        "status": "public",
        "file_name": "core-api-release-3540.json"
    },
    {
        "name": "Admin Console Release 25.10.0",
        "description": "This release of the Admin Console brings you some improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "In the profile management section under the Admin Console, the Reset Password URL and Resend Email URL fields will automatically pick the recently used URL value."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Formatting of support ticket description has been updated."
                },
                {
                    "text": "Deprecated Social Providers are removed from Admin Console UI."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-10-06",
        "status": "public",
        "file_name": "admin-console-release-25100.json"
    },
    {
        "name": "Admin Console Release 25.9.1",
        "description": "This release of the Admin Console brings you some improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Added all the fields (including the Active and Disabled Fields) back in the Profile Info tab of the Customer Profile under the Customer Management section."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2022-08-30",
        "status": "public",
        "file_name": "admin-console-release-2591.json"
    },
    {
        "name": "Admin Console Release 25.9.0",
        "description": "This release of the Admin Console brings you new features and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added the ability to configure multiple SMTP in Admin Console."
                },
                {
                    "text": "Added ability to view and edit Advanced profile fields under the Customer Management in the Admin Console."
                },
                {
                    "text": "Option to check the SAML configuration error Logs under the Platform Configuration >Access Configuration > Federated SSO > Logs section of Admin Console."
                },
                {
                    "text": "Webhook Configuration change will be captured under the Audit Logs section in the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "We have removed the  Dev/Staging/Sandbox Website URL option available under the Deployment > Apps > Web Apps of Admin Console."
                },
                {
                    "text": "Added the AllowSSOLoginOnly option under Team management > Single-Sign-On in the Admin Console to allow login to the Admin console using SSO only."
                },
                {
                    "text": "We have added the option in the Admin Console’s IDX section for managing the jQuery version via UI ."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-08-23",
        "status": "public",
        "file_name": "admin-console-release-2590.json"
    },
    {
        "name": "Admin Console Release 25.8.0",
        "description": "This release of the Admin Console brings you new features and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Now supporting the AdvanceField functionality in the Add new customer section under the Customer Management in the Admin Console."
                },
                {
                    "text": "The Account Owner can see all the tickets raised by team members in the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "The UI improvement has been made for the Reset Password option in the Profile Management section of Admin Console."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-06-30",
        "status": "public",
        "file_name": "admin-console-release-2580.json"
    },
    {
        "name": "Admin Console Release 25.7.0",
        "description": "This release of the Admin Console brings you new features and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Now, users can configure Custom Domain for IDX in the Admin Console."
                },
                {
                    "text": "You can enable or disable Case Sensitive Username, Social login via ping API, OTP Email Verification, IP Access Restriction, Step-up Authentication, etc. feature in the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "UI has been updated with a slider element for showing enabled/disbabled features, Advance workflow, Social Login, Custom Domain, Email Workflow, IP Access Restriction, Multi-Factor Authentication, and JS Widgets Setting in the Admin Console, etc."
                },
                {
                    "text": "Related Documents links have been added for all the respective sections of the Admin Console."
                },
                {
                    "text": "Reset button is added under Search and Blocked customer in the Customer Management in Admin Console."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-05-24",
        "status": "public",
        "file_name": "admin-console-release-2570.json"
    },
    {
        "name": "Admin Console Release 25.6.0",
        "description": "This release of the Admin Console brings you new features. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": " Now we are supporting Mailazy in SMTP providers under the Admin Console."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2022-04-19",
        "status": "public",
        "file_name": "admin-console-release-2560.json"
    },
    {
        "name": "Admin Console Release 25.5.0",
        "description": "This release of the Admin Console brings you a few new features and some improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Reset Password URL field in the Customer Profile section of Admin Console now has a default value"
                },
                {
                    "text": "Reset password validation rules in the Customer Profile section are same as the rules defined in Data Schema."
                },
                {
                    "text": "Account Subscription Details are available in the Billing section of Admin Console."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2022-03-05",
        "status": "public",
        "file_name": "admin-console-release-2550.json"
    },
    {
        "name": "Admin Console Release 25.4.0",
        "description": "This release of the Admin Console brings you new features and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "JSON Sample is visible in UI at the time of data mapping under JWT configuration in Admin Console."
                },
                {
                    "text": "Added search box to quickly find any feature/section in the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Option to search Profile Key field has been added in Data Mapping for JWT configuration UI."
                },
                {
                    "text": "The consumer’s login activity is shown as per user’s configured Time Zone in the Admin Console."
                }
            ]
        },
        "auther": "Pratik Kumar Jha",
        "created_date": "2022-02-11",
        "status": "public",
        "file_name": "admin-console-release-2540.json"
    },
    {
        "name": "Admin Console Release 25.3.0",
        "description": "This release of the Admin Console brings you a few new features and some improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Validation for App Name in Federated SSO configuration in the Admin Console."
                },
                {
                    "text": "Ability to share the customer’s profile URL with the team members within the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Updated JWT configuration UI with default values, e.g., email mapping, Default expiration time, etc. in the JWT configuration in the Admin Console."
                }
            ]
        },
        "auther": "Pratik Kumar Jha",
        "created_date": "2022-01-21",
        "status": "public",
        "file_name": "admin-console-release-2530.json"
    },
    {
        "name": "Admin Console Release 25.2.0",
        "description": "This release of the Admin Console brings you improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Added Audiences, Response Mode and Metadata input are added in JWT Configuration UI under the Federated SSO in the Admin Console."
                },
                {
                    "text": "Now LoginRadius supports up to 10 additional API secrets."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2022-01-05",
        "status": "public",
        "file_name": "admin-console-release-2520.json"
    },
    {
        "name": "Admin Console Release 25.1.0",
        "description": "This release of the Admin Console brings you a new feature and improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The token expiration time field in the JWT/OIDC app configuration."
                },
                {
                    "text": "Added search feature in the Team Management section of the Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "For better performance, removed the long date duration options ( All Time and 365 days) from the time dropdown in the insight charts."
                },
                {
                    "text": "Added Historical view of Privacy Policy under customer profile in the Admin Console."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2022-01-04",
        "status": "public",
        "file_name": "admin-console-release-2510.json"
    },
    {
        "name": "JS Release 3.19.0",
        "description": "We have rolled out another version of the V2JS, this release brings you a new feature.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Support configuring Custom Domain for LoginRadius Core APIs domain (api.loginradius.com) and Cloud APIs (cloud-api.loginradius.com) in the V2JS."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2021-12-14",
        "status": "public",
        "file_name": "js-release-3190.json"
    },
    {
        "name": "Cloud API Release 5.5.0",
        "description": "This Cloud API release brings you an added feature in Shopify SSO connectors. Please see below for more details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Syncing of consumer’s address and phone numbers from LoginRadius to Shopify Store in Shopify SSO workflow."
                }
            ]
        },
        "auther": "Bhavya Tugnawat",
        "created_date": "2021-10-06",
        "status": "public",
        "file_name": "cloud-api-release-5.5.0.json"
    },
    {
        "name": "JS Release | IDX 1.4.0",
        "description": "We have rolled out a version of the IDX basic theme that brings you some additions to the IDX basic theme page and some minor bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Support sending redirect after login URL in the query parameter."
                },
                {
                    "text": "Support for updating the color and label of Resend Button for MFA UI."
                },
                {
                    "text": "You can now  change the button’s color in the UI for Phone login feature."
                }
            ],
            "IMPROVED": [
                {
                    "text": "The styling for the Social Login icon is updated."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2021-09-26",
        "status": "public",
        "file_name": "js-release-idx-140.json"
    },
    {
        "name": "Admin Console Release 25.0.0",
        "description": "This release of the Admin Console brings you a new feature and improvements. See below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The option to disable password history  feature from the Admin Console is added."
                },
                {
                    "text": "M2M authentication feature has been added to add configuration for authenticating backend third-party applications from the LoginRadius platform."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Added self-serve option to update the Access Token time up to 3 months from Admin Console."
                },
                {
                    "text": "A Pop-Up has been added in the Site Sync tool in the Admin Console to alert the customers for syncing the Integration configuration from the source site to destination site."
                }
            ]
        },
        "auther": "Gurjyot Singh",
        "created_date": "2021-09-09",
        "status": "public",
        "file_name": "admin-console-release-2500.json"
    },
    {
        "name": "Core API Release 32.0.0",
        "description": "This release brings you new feature to our LoginRadius Core API, please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "M2M authentication APIs are added to allow authenticating the backend third-party applications from your loginRadius application."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-09-09",
        "status": "public",
        "file_name": "core-api-release-3200.json"
    },
    {
        "name": "Admin Console Release 24.9.1",
        "description": "This release brings you bug fixes to our LoginRadius Admin Console, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "The issue with the Saml Login into the Admin Console, when the SSO Login only feature is enabled for the Admin Console, has been fixed."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-08-20",
        "status": "public",
        "file_name": "admin-console-release-2491.json"
    },
    {
        "name": "Core API Release 31.4.0",
        "description": "This release brings you bug fixes to our LoginRadius Core API, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "The issue with the Forgot password API related to the upper case email id has been fixed."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-08-11",
        "status": "public",
        "file_name": "core-api-release-3140.json"
    },
    {
        "name": "Admin Console Release 24.9.0",
        "description": "This release of the Admin Console brings you improvement, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "SAML implementation UI is now available in the Custom-idp section."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Removed the Add button for Risk Identified Email templates to Admin in the Admin Console."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-07-29",
        "status": "public",
        "file_name": "admin-console-release-24.9.0.json"
    },
    {
        "name": "Core API Release 31.3.0",
        "description": "We have released another version of the core! This core release brings an enhancement in Multi Factor Authentication.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added capability of sending RBA email alerts for unusual consumer behaviour to the Multi-Factor Authentication flows."
                },
                {
                    "text": "MFA token will expire if the consumer changes or reset the password when the Force Logout feature is enabled."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Error message for error code 975 is improved"
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-07-20",
        "status": "public",
        "file_name": "core-api-release-3130.json"
    },
    {
        "name": "JS Release 3.18.0",
        "description": "This JavaScript release brings new features to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "LoginRadius V2 JS now supports the LoginOnPasswordReset feature."
                },
                {
                    "text": "Added the feature of sending RBA email alerts on unusual customer behavior in MFA flows in LoginRadius V2JS."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Added error handling for loading IDX in an iframe in Google Chrome’s private mode."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-07-20",
        "status": "public",
        "file_name": "js-release-3180.json"
    },
    {
        "name": "Cloud Configuration API Release 4.5.0",
        "description": "This release of the Cloud API brings improvement in the config API.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "The status of LoginOnPasswordReset feature is added in the config API‘s response."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-07-18",
        "status": "public",
        "file_name": "cloud-configuration-api-release-450.json"
    },
    {
        "name": "Core API Release 31.1.0",
        "description": "This release brings you an enhancement and some bug fixes to our LoginRadius Core API, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Fixed the issue with Password History configuration changes, now it can be enabled/disabled via Admin Console."
                }
            ],
            "ADDED": [
                {
                    "text": "Added MFA and re-authentication by Security Questions."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-06-10",
        "status": "public",
        "file_name": "core-api-release-3110.json"
    },
    {
        "name": "Admin Console Release 24.8.0",
        "description": "This release of the Admin Console brings you enhancements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "The UI for MFA via security questions is added in Admin Console."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Improved Audit logs to identify team members making changes on the consumer’s profile in the Admin Console"
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-06-03",
        "status": "public",
        "file_name": "admin-console-release-2480.json"
    },
    {
        "name": "JS Release 3.17.0",
        "description": "This JavaScript Release brings an improvement and a new feature to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Fixed issue related to Passwordless Login workflow on the IDX when the passwordless token is configured as numerical type."
                }
            ],
            "ADDED": [
                {
                    "text": "Added MultiFactor Authentication with Security Questions in the LoginRadiusV2.js"
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-06-03",
        "status": "public",
        "file_name": "js-release-3170.json"
    },
    {
        "name": "Cloud Configuration API Release 4.4.0",
        "description": "This release of the Cloud API brings you addition of a new feature, see below for details on the  notable changes applied to the Cloud API.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added MFA with security question configuration in Appinfo response."
                }
            ]
        },
        "auther": "Ashish Kumar Yadav",
        "created_date": "2021-06-2",
        "status": "public",
        "file_name": "cloud-configuration-api-release-440.json"
    },
    {
        "name": "Admin Console Release 24.7.0",
        "description": "This release of the Admin Console brings you enhancements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": " The passcode configuration UI for MFA via email is added in Admin Console."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-05-18",
        "status": "public",
        "file_name": "admin-console-release-2470.json"
    },
    {
        "name": "Cloud API Release 7.3.1",
        "description": "This release of the Cloud SSO Federation API brings you a couple of enhancements. See below for details on the more notable changes applied to the Cloud SSO Federation APIs.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added support for sending access_token in a post request in the federated Oauth Device flow."
                },
                {
                    "text": "Added support for passing scopes in the OIDC and JWT federated SSO workflows."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-05-18",
        "status": "public",
        "file_name": "cloud-api-release-731.json"
    },
    {
        "name": "JS Release 3.16.0",
        "description": "This JavaScript Release brings an improvement and a new feature to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Increased the size of Facebook Pop-Up Window."
                }
            ],
            "ADDED": [
                {
                    "text": "Added MultiFactor Authentication with Email OTP feature in the LoginRadiusV2.js."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-05-11",
        "status": "public",
        "file_name": "js-release-3160.json"
    },
    {
        "name": "Core API Release 31.0.0",
        "description": "This release brings you an enhancement and some bug fixes to our LoginRadius Core API, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "In case of optional and disable email flow,  restricting the manual linking of profiles having unverified email."
                },
                {
                    "text": "Special characters are allowed in the password field for the change password API."
                }
            ],
            "Added": [
                {
                    "text": "Introduce Email OTP as a new authenticator in MFA and ReAuthentication Flow."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-05-07",
        "status": "public",
        "file_name": "core-api-release-3100.json"
    },
    {
        "name": "Cloud API Release 7.3.0",
        "description": "This release of the Cloud SSO Federation API brings you some improvement and enhancement, see below for details on the more notable changes applied to the Cloud SSO Federation API.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added support for sending access_token in a post request in the federated OIDC/OAuth/JWT workflows."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Fixed JWT Redirection flow for forgot password and register."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-04-21",
        "status": "public",
        "file_name": "cloud-api-release-730.json"
    },
    {
        "name": "Core API Release 30.9.2",
        "description": "This release brings you with an enhancement to our LoginRadius Core API , please see below for details",
        "changelog": {
            "FIXED": [
                {
                    "text": "Fixed the Facebook login issue, caused by some changes at Facebook end."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-04-15",
        "status": "public",
        "file_name": "core-api-release-3092.json"
    },
    {
        "name": "Admin Console Release 24.6.0",
        "description": "This release of the Admin Console brings you an enhancement, see below for details on the notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "AllowSSOLoginOnly feature will allow login into Admin Console leveraging SSO using your identity provider like Azure AD"
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-02-18",
        "status": "public",
        "file_name": "admin-console-release-2460.json"
    },
    {
        "name": "JS Release 3.15.0",
        "description": "We have rolled out another version of the V2JS. This release brings you some improvements:",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "V2JS sends the Access Token in the API header instead of query in case of SSO login API."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-02-18",
        "status": "public",
        "file_name": "js-release-3150.json"
    },
    {
        "name": "Core API Release 30.9.1",
        "description": "This release brings a bug fix to our LoginRadius Core API, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Incorrect account auto linking on reset password when v1 API is not disabled."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-02-12",
        "status": "public",
        "file_name": "core-api-release-3091.json"
    },
    {
        "name": "Cloud API Release 5.4.0",
        "description": "We have rolled out another version of the Cloud APIs. This Cloud API release brings you some bug fixes.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Issue related to account creation with the email with (+)  in the LoginRadius BigCommerce Plugin."
                },
                {
                    "text": "BigCommerce password validation API throwing error for password containing double dollar sign($$)."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-01-30",
        "status": "public",
        "file_name": "cloud-api-release-540.json"
    },
    {
        "name": "Admin Console Release 24.5.0",
        "description": "This release of the Admin Console brings you a few bug fixes, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Site owners can now be optionally added in CC while creating a support ticket."
                },
                {
                    "text": "Admin console is now showing the correct status of additional email ids."
                },
                {
                    "text": "Removed <strong>Optional</strong> word in certificate configurations which was misleading at the time of Azure configuration."
                }
            ],
            "IMPROVED": [
                {
                    "text": "ID provider certificate is now required for <a href='https://adminconsole.loginradius.com/account/team/single-sign-on'>Team Management -> SSO -> SAML</a>"
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2021-01-19",
        "status": "public",
        "file_name": "admin-console-release-2450.json"
    },
    {
        "name": "Core HPA Release 1.0.5",
        "description": "This release brings you with a new API and a bug fix to our LoginRadius HPS API , please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Show error message for already verified account in the HPS verify email API call."
                }
            ],
            "ADDED": [
                {
                    "text": "New <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/high-concurrency-api-stack/hcas-validate-access-token/'> HPS API </a> that validates the access token."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2021-01-08",
        "status": "public",
        "file_name": "core-hpa-release-105.json"
    },
    {
        "name": "Core API Release 30.9.0",
        "description": "This release brings you with an enhancement to our LoginRadius Core API , please see below for details",
        "changelog": {
            "FIXED": [
                {
                    "text": "Domain whitelisting for iOS URLs."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2021-01-05",
        "status": "public",
        "file_name": "core-api-release-3090.json"
    },
    {
        "name": "Core API Release 30.7.0",
        "description": "This release brings you with some bug fixes and an enhancement to our LoginRadius Core API , please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "User profile was not sent by the Social Registration Cloud Connector event."
                },
                {
                    "text": "Return the error message instead of 500 server errors during Google Login."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Implemented Force logout feature in Add Email, Delete Account, Passwordless, One Touch Login and Smart Login APIs."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-12-29",
        "status": "public",
        "file_name": "core-api-release-3070.json"
    },
    {
        "name": "Cloud API Release 7.2.3",
        "description": "We have rolled out another version of the Cloud APIs. This Cloud API release brings you with a bug fix.",
        "changelog": {
            "FIXED": [
                {
                    "text": "OpenID connect Authorization flow for forgot password and registration is fixed."
                }
            ]
        },
        "auther": "Rajeev Sharma",
        "created_date": "2020-12-28",
        "status": "public",
        "file_name": "cloud-api-release-723.json"
    },
    {
        "name": "Core Release 30.8.0",
        "description": "This release brings a bug fix to our LoginRadius Core API , please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": "Disable Manual Account Linking if there is an existing account with the same email id."
                },
                {
                    "text": "Implemented Force Logout feature in get active session API, Get User Profile API and MFA APIs."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-12-24",
        "status": "public",
        "file_name": "core-release-308.json"
    },
    {
        "name": "Cloud API Release 7.2.1",
        "description": "This release brings new APIs that enable OAuth clients on smart devices to obtain user authorization to access protected resources without using an on-device user-agent.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added <a href='https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/oauth-2-0/request-device-code/'> Request Device Code </a> API."
                },
                {
                    "text": "Added <a href='https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/oauth-2-0/request-tokens//'> Request Tokens </a> API. "
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-12-08",
        "status": "public",
        "file_name": "cloud-api-release-721.json"
    },
    {
        "name": "Core Release 30.3.0",
        "description": "We have rolled out another version of the Core APIs. This core API release brings you with a few new features and improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added Passwordless email and username APIs with OTP support."
                },
                {
                    "text": "Added <strong>SocialLogin with Ping API</strong> with no callback feature."
                },
                {
                    "text": "Previous verification tokens can now be expired once a new token is requested automatically."
                },
                {
                    "text": "<strong>Resetpasswordurl</strong> whitelisting is required to use Forgot password feature."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Added <strong>OTP Code</strong> option for <strong>Passwordless Login by Email/Username</strong> APIs."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-11-06",
        "status": "public",
        "file_name": "core-release-303.json"
    },
    {
        "name": "Core Release 1.0.4",
        "description": "We have rolled out another version of the High Concurrency APIs.This release brings you two new APIs.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added HCSA Add Email API "
                },
                {
                    "text": "Added HCSA Registration By Re-captcha "
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-11-3",
        "status": "public",
        "file_name": "core-release-104.json"
    },
    {
        "name": "Admin Console Release 24.4.0",
        "description": "This release of the Admin Console brings you a few bug fix, see below for details on some of the more notable change applied to the Admin Console.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Account workflow section now shows the correct status of the email registration feature."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-10-27",
        "status": "public",
        "file_name": "admin-console-release-2440.json"
    },
    {
        "name": "Cloud API Release 1.7.0",
        "description": "This SSO Login API release brings you an improvement.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Added support for passing the token as Bearer Authentication Header "
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-10-26",
        "status": "public",
        "file_name": "cloud-api-release-170.json"
    },
    {
        "name": "Core Release 30.6.0",
        "description": "This release brings a bug fix to our LoginRadius Core API , please see below for details:.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Apple sign-in through ICloud connected macOS and iOS devices now correctly returns UserName and EmailId."
                },
                {
                    "text": "Native social login APIs will return the consent token."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-10-26",
        "status": "public",
        "file_name": "core-release-3060.json"
    },
    {
        "name": "JS Release 3.14.1",
        "description": "This JavaScript Release brings a bug fix to our LoginRadius V2JS library, please see below for details:",
        "changelog": {
            "FIXED": [
                {
                    "text": " Optional fields on first social login with consent will be correctly requested now."
                }
            ]
        },
        "auther": "Vaibhav Jain",
        "created_date": "2020-10-26",
        "status": "public",
        "file_name": "js-release-3141.json"
    },
    {
        "name": "Cloud API Release 7.1.0",
        "description": "This release of the Cloud SSO Federation API brings you some improvements, see below for details on the more notable changes applied to the Cloud SSO Federation API.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Added OAuth Authorization with <a href='https://loginradius.com/docs/single-sign-on/tutorial/federated-sso/pkce-flow/#oauthpkceflow3'>PKCE flow</a>. "
                },
                {
                    "text": "Added OpenID Connect Authorization with <a href='https://loginradius.com/docs/single-sign-on/tutorial/federated-sso/pkce-flow/#oidcvpkceflow4'>PKCE flow</a>. "
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-10-16",
        "status": "public",
        "file_name": "cloud-api-release-710.json"
    },
    {
        "name": "Core Release 30.5.0",
        "description": "This release of the Core APIs brings you some bug fixes and some improvements, see below for details on some of the more notable changes applied to the Core APIs.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Updated how cookies were set during refresh of an expired cookie."
                },
                {
                    "text": "Added additional  webhook triggers for some login and registration workflows."
                },
                {
                    "text": "Updated mapping to support changes to Google ProfileImageURL."
                },
                {
                    "text": "<strong>Samesite</strong> attribute is set no defaulted to <strong>lax</strong> to resolve some browser compatibility issues."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Optimized Webhook processing to improve deliverability."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-10-15",
        "status": "public",
        "file_name": "core-release-3050.json"
    },
    {
        "name": "Admin Console Release 24.3.5",
        "description": "This release of the Admin Console brings you a new feature, see below for details over the notable change applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": " Identity Broker- Multiple app support for social providers."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-10-05",
        "status": "public",
        "file_name": "admin-console-release-2435.json"
    },
    {
        "name": "Cloud Connector Release 3.5.0",
        "description": "In this release of the Cloud Connectors we have added  some new integration plugins, see below for details on the plugins added in this Cloud Connectors release.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added a new integration plugin - <strong>Sendinblue</strong>."
                },
                {
                    "text": "Added a new integration plugin - <strong>Freshsales</strong>."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-17",
        "status": "public",
        "file_name": "cloud-connector-release-350.json"
    },
    {
        "name": "Cloud SSO SAML API Release 7.1.1",
        "description": "This release of the Cloud SSO SAML API brings you a bug fix, see below for details on the more notable changes applied to the Cloud SSO SAML API.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Fixed a bug where <strong>NameIdentifier</strong> was not properly being assigned."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-17",
        "status": "public",
        "file_name": "cloud-sso-saml-api-release-711.json"
    },
    {
        "name": "JS Release 3.14.0",
        "description": "This JavaScript Release brings a bug fix to our LoginRadius V2JS library, please see below for details.",
        "changelog": {
            "FIXED": [
                {
                    "text": "We’ve fixed the issue related to Consent Management form rendering during Social login."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-17",
        "status": "public",
        "file_name": "js-release-3140.json"
    },
    {
        "name": "Admin Console Release 24.3.4",
        "description": "This release of the Admin Console brings you some improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "We’ve updated our list of common passwords given under <a href='https://adminconsole.loginradius.com/platform-security/account-protection/password-policy/password-complexity'> Admin Console </a>."
                },
                {
                    "text": "Updated the webhook exceptions with proper error messages."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-16",
        "status": "public",
        "file_name": "admin-console-release-2434.json"
    },
    {
        "name": "Cloud Configuration API Release 4.1.0",
        "description": "This release of the Cloud Configuration API brings you a bug fix, see below for details on the more notable changes applied to the Cloud Configuration API.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Fixed a bug where in some cases even after disabling the Apple Sign In from the Social provider settings, this would still be shown on the Identity Experience Framework’s Auth page. "
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-16",
        "status": "public",
        "file_name": "cloud-configuration-api-release-410.json"
    },
    {
        "name": "SSO Login API Release 1.5.0",
        "description": "In this release of the SSO Login API, we have improved the functionality of handling allowed request header size.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Increased the Allowed Request Header Size from 4KB to 16KB."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-09-16",
        "status": "public",
        "file_name": "sso-login-api-release-150.json"
    },
    {
        "name": "Admin Console Release 24.3.3",
        "description": "This release of the Admin Console brings you a few enhancements and a few bug fixes, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Removed <strong>Kaixin</strong> and <strong>RenRen</strong> Social providers from the <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers'> Admin Console </a>."
                },
                {
                    "text": "Empty string value is supported in <strong>Segmentation</strong> under <a href='https://adminconsole.loginradius.com/profile-management/customer-segmentation/basic-segmentation'> Admin Console </a>."
                },
                {
                    "text": "Password Complexity has been added in the <a href='https://adminconsole.loginradius.com/platform-security/account-protection/password-policy/password-complexity'> Admin Console </a>."
                }
            ],
            "FIXED": [
                {
                    "text": "Webhook URLs subscriptions in <a href='https://adminconsole.loginradius.com/integration/data-sync/web-hooks'> Admin Console </a> now allow up to 5 URLs."
                },
                {
                    "text": "Updated the default scopes for <strong>Disqus</strong> social ID providers."
                },
                {
                    "text": "You can now update the <strong>Profile fields</strong> for the profiles where <strong>Email does not exist</strong> via the <a href='https://adminconsole.loginradius.com/profile-management/customer-management/search-customers'> Admin Console </a>."
                }
            ]
        },
        "auther": "Abhishek Singh",
        "created_date": "2020-08-05",
        "status": "public",
        "file_name": "admin-console-release-2433.json"
    },
    {
        "name": "Core Release 30.2.1",
        "description": "We have released another version of the core release! This core release brings Facebook Version 7.0 update.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Deprecated Facebook API version 3.0 and the began using the next available version of the Facebook API, <strong> v7.0 </strong>. Refer to our <a href='/docs/api/v2/announcements/facebook-version-7.0-update-reminder/'> Announcement document </a> for more details on this."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-08-05",
        "status": "public",
        "file_name": "core-release-3021.json"
    },
    {
        "name": "JS Release 3.13.0",
        "description": "This JavaScript Release brings a bug fix of Consent Form please see below for details.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Consent Form is now correctly displayed during Social Login on the IDX auth page."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-08-05",
        "status": "public",
        "file_name": "js-release-3130.json"
    },
    {
        "name": "Core Release 30.2.0",
        "description": "We have released another version of the core release! This core release brings a new API for <strong> Link Social Identities </strong>.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added New <a href='/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities-clientguid/'> <strong> Auth Link Social Identities by ClientGuid </strong> </a> API is added. This API is used to link a social provider identity with an existing LoginRadius account."
                }
            ]
        },
        "auther": "Keshav",
        "created_date": "2020-07-23",
        "status": "public",
        "file_name": "core-release-302.json"
    },
    {
        "name": "CDA Release 6.0.0",
        "description": "In this release, we bring a couple of new <strong> Cloud Directory APIs </strong> and an enhancement.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Now, you can pass <strong> API Key and API Secret </strong> in the header of the following APIs:<br> - <a href='/docs/api/v2/cloud-directory-api/insights/overview/'> Insights</a> <br>- <a href='/docs/api/v2/cloud-directory-api/custom-object/overview/'> Custom Object</a> <br> - <a href='/docs/api/v2/cloud-directory-api/identity/getting-started/'> Identity </a> <br> - <a href='/docs/api/v2/cloud-directory-api/custom-object-with-identity/overview/'> Custom Object with Identity</a>"
                },
                {
                    "text": "The following two new APIs are added under Cloud Directory APIs. Using these APIs you can retrieve consumer’s profile data along with their custom Object data in a single API. <br> - <a href='/docs/api/v2/cloud-directory-api/custom-object-with-identity/user-identity-with-custom-object/'> User Identity with Custom Object </a> <br> - <a href='/docs/api/v2/cloud-directory-api/custom-object-with-identity/get-user-identity-with-custom-object-by-page/'> Get User Identity with Custom Object by Page </a> "
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-07-18",
        "status": "public",
        "file_name": "cda-release-600.json"
    },
    {
        "name": "JS Release 3.12.0",
        "description": "This JavaScript Release brings a few new options to our LoginRadius V2 JavaScript library and a couple of bug fixes, please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added the following options to the available <a href='/docs/libraries/js-libraries/getting-started/#initializationofloginradiusobject3'> commonOptions </a> : <br> vNextUX <br> disableResendOTPButton <br> disableResendOTPButtonDelay"
                }
            ],
            "FIXED": [
                {
                    "text": "<strong>Passwordless Login With OTP </strong> now correctly sends Custom Email Templates."
                },
                {
                    "text": "Social Login via JS now correctly sends Custom Welcome Email Templates."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-07-03",
        "status": "public",
        "file_name": "js-release-3120.json"
    },
    {
        "name": "Core Release 30.1.0",
        "description": "We have released another version of the core release! This core release brings improvements to our few APIs.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Now, you can pass the <strong>SocialAppName</strong> parameter in our following Native Access Token APIs. Allowing you to configure multiple apps for the same social provider. <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token/'> Access Token via Google Token </a> <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code/'> Access Token via Google AuthCode </a> <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/'> Access Token via LinkedIn Token</a> <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token/'> Access Token via Facebook Token </a> <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token/'> Access Token via Twitter Token </a> <br> <a href='/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-id-code/'> Access Token via Apple ID Code </a> "
                },
                {
                    "text": "Added <strong>isWeb</strong> parameter in <a href='/docs/api/v2/customer-identity-api/refresh-token/refresh-token/'> Refresh Token API</a>, allowing you to  specify if its Web or Native Access Token."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-06-24",
        "status": "public",
        "file_name": "core-release-301.json"
    },
    {
        "name": "Admin Console Release 24.3",
        "description": "This release of the Admin Console brings you few new features and some improvements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "You can remove yourself from the shared sites under the <a href='https://adminconsole.loginradius.com/site-list'> Admin Console </a>"
                },
                {
                    "text": "Added new 'Communication Analytics' section under Insights in <a href='https://adminconsole.loginradius.com/insights/communication-analytics/sms-analytics'> Admin Console </a>. Allowing you to get the SMS Analytics by providing Information about automated SMS being sent through Twilio API."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Enhanced the functionality and designing of our 'Identity Experience Framework' section in the <a href='https://adminconsole.loginradius.com/deployment/idx'> Admin Console </a>. Please refer to our <a href='/docs/libraries/identity-experience-framework/overview/'> document </a> for more details around it."
                },
                {
                    "text": "Updated 'Security Compliance' section in the <a href='https://adminconsole.loginradius.com/data-governance/trust-center/security-center/security-compliances'> Admin Console </a>. Refer to our <a href='/docs/api/v2/admin-console/platform-security/regulations/#securitycompliances1'> Regulations </a> document for more details."
                },
                {
                    "text": "Moving forward only API V2 will be supported hence removed the API version section from our Admin Console."
                },
                {
                    "text": "Enhanced the 'SMS Configuration' section in <a href='https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/sms-configuration'> Admin Console </a>, supporting a few other SMS providers apart from Twilio. Refer to our <a href='/docs/authentication/concepts/sms-configuration/#smsproviderconfiguration0'> SMS Provider Configuration </a> document for more details."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-06-19",
        "status": "public",
        "file_name": "admin-console-release-243.json"
    },
    {
        "name": "Hosted Plugin Release 5.2.0",
        "description": "We have released Hosted Plugin Version 5.2.0. This release brings improvement as per security concerns.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Now, you can pass API key and access_token as a header in the following APIs: <a href='/docs/api/v2/single-sign-on/sso-connector/bigcommerce-login-url-by-access-token/'> Bigcommerce Login URL by Access Token </a>, <a href='/docs/api/v2/single-sign-on/sso-connector/shopify-login-url-by-access-token/'> Shopify Login URL by Access Token </a> and <a href='/docs/api/v2/single-sign-on/sso-connector/perfectmind/'> PerfectMind </a> . "
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-06-12",
        "status": "public",
        "file_name": "hosted-plugin-release-520.json"
    },
    {
        "name": "Core Release 29.9",
        "description": "We have released another version of the core release! This core release brings a few new features and improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "<a href='/docs/api/v2/admin-console/social-provider/providers/apple/'> Sign in with Apple </a>: Added ability to retrieve First name and Last Name data points from Apple provider for new users."
                },
                {
                    "text": "New <a href='/docs/api/v2/customer-identity-api/authentication/auth-link-social-indentities/'> Link Social Identities API </a>  is added. This API will work for both manual and social account linking."
                }
            ],
            "FIXED": [
                {
                    "text": "<a href='/docs/api/v2/admin-console/social-provider/providers/apple/'> Sign in with Apple </a> feature is now compatible with iOS 12 and 13 versions."
                }
            ],
            "Improved": [
                {
                    "text": "Removed the ‘No-JS Hosted Page’ feature."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-06-05",
        "status": "public",
        "file_name": "core-release-299.json"
    },
    {
        "name": "Admin Console Release 24.2",
        "description": "This release of the Admin Console brings you a few enhancements and a few bug fixes, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Removed ‘Instagram’ configuration from the Admin Console under the  <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers'>  Social Provider </a> section."
                },
                {
                    "text": "Removed the 'Service Provider Certificate' field from SAML in IDP Initiated Login flow under the <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/social-login/social-providers'>  Admin Console. </a>"
                }
            ],
            "FIXED": [
                {
                    "text": "If you have enabled 'PIN Authentication' feature then 'PIN' field is removable from Admin Console under the <a href='https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema'> Data Schema </a> section."
                },
                {
                    "text": "All Additional API secrets are visible in the Admin Console under the <a href='https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/additional-api-secrets'> Additional API Secret(s) </a> section."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-06-03",
        "status": "public",
        "file_name": "admin-console-release-242.json"
    },
    {
        "name": "Core Release 29.8.0",
        "description": "Here it comes another Core API Release, this core release brings some changes regarding the latest social provider updates.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Updated minimum API version of Facebook Graph API to 3.0. Refer to the <a href='/docs/api/v2/announcements/facebook-update-reminder/'> document </a> for more details."
                },
                {
                    "text": "Updated data field support for Yahoo! Refer to the <a href='/docs/api/v2/announcements/yahoo-provider-update/'> document </a> for more details."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-05-20",
        "status": "public",
        "file_name": "core-release-298.json"
    },
    {
        "name": "Admin Console Release 24.1",
        "description": "This release of the Admin Console brings you a new feature and a few bug fixes, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New Data Migration feature under the <a href='https://adminconsole.loginradius.com/deployment/migration/data-migration'> Deployment </a> section, allowing you to perform limited self-service data migrations. Refer to the <a href='/docs/customer-management/data-migration/'> Data Migration document </a> for more details."
                }
            ],
            "FIXED": [
                {
                    "text": "All the Custom fields (Active/Inactive) are visible in the <a href='https://adminconsole.loginradius.com/profile-management/customer-management/search-customers'> Admin Console </a> under the Customer Management section."
                },
                {
                    "text": "Uploading a file with the same name will reflect the changes on the  <a href='https://adminconsole.loginradius.com/deployment/identity-experience-framework-hosted'> IDX </a> page now."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-05-18",
        "status": "public",
        "file_name": "admin-console-release-241.json"
    },
    {
        "name": "Core Release 29.5.0",
        "description": "We are excited to announce our new core release! This new core release brings some new features as per the security perspective and some improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "If the <a href='https://adminconsole.loginradius.com/platform-security/account-protection/session-management/force-logout'>Force Logout </a> feature is enabled, upon a password change, all active PIN Session tokens will be invalidated along with the session from where the password has been changed."
                },
                {
                    "text": "If the <a href='https://adminconsole.loginradius.com/platform-security/account-protection/session-management/force-logout'>Force Logout </a> feature is enabled, upon doing a PIN change, all active Access tokens will be invalidated apart from the session from where the PIN has been changed."
                },
                {
                    "text": "For security purposes, we have Masked sensitive data in API responses."
                }
            ],
            "IMPROVED": [
                {
                    "text": "If the <a href='/docs/api/v2/customer-identity-api/multi-factor-authentication/overview/'>Multi-Factor Authentication </a> feature is enabled, the Passwordless Login API will automatically be disabled."
                },
                {
                    "text": "In the <a href='/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email/'>Passwordless Login by Email API </a>, any URL used as the 'verificationurl' needs to be whitelisted in the Admin Console."
                },
                {
                    "text": "In the <a href='/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-email/'>Forgot PIn by Email API </a>, any URL used as the 'resetpinurl' needs to be whitelisted in the Admin Console."
                },
                {
                    "text": "Fixed compatibility issues with the 'Sign-in with Apple' feature when using the Safari web browser."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-04-28",
        "status": "public",
        "file_name": "core-release-2950.json"
    },
    {
        "name": "Admin Console release 23.3.0",
        "description": "This release of the Admin Console brings you a few enhancements, see below for details on some of the more notable changes applied to the Admin Console.",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Enhanced Data ETL Service feature, allowing you to perform the Update and Delete action."
                },
                {
                    "text": "Improved rendering time of <a href='/docs/customer-intelligence/api-analytics/'> API Analytics </a> metrics."
                },
                {
                    "text": "Removed Risk Based Authentication feature."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-04-20",
        "status": "public",
        "file_name": "admin-console-release-2330.json"
    },
    {
        "name": "JS Release 3.11.0",
        "description": "This JavaScript Release adds the “Access Token via Header” and “Pre-registered user Identification via Username” features to our LoginRadius V2 JavaScript library, please see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Option “passAccessTokenInHeader” has been added to the LoginRadius existing commonOptions list to pass the Access Token with the header in a more secure way."
                },
                {
                    "text": "Option “existUsername” has been added to the LoginRadius existing commonOptions list for Username identification at the time of registration."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-04-14",
        "status": "public",
        "file_name": "js-release-3110.json"
    },
    {
        "name": "Admin Console release 6.0",
        "description": "Great news for you! LoginRadius launched a beautiful new Admin Console, Version 6.0. Our team has been working hard behind the scenes on this, and we’re happy to announce that it is out today. Please see below for a complete list of changes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added Apple Sign in as an easy to configure provider in the social providers section."
                },
                {
                    "text": "New JWT Provider tab under the Custom IDPs section, allowing you to set custom JWT Providers directly from the Admin Console."
                },
                {
                    "text": "New PIN Authentication section to configure your PIN Authentication workflows."
                },
                {
                    "text": "New Consent Center to configure consent management flows."
                },
                {
                    "text": "New Data ETL section added allowing you to manage your own data migrations and mass updates/changes."
                },
                {
                    "text": "New API Analytics feature under the insights section, allowing you to get more granular details on API activity."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Removed custom scopes section for social providers / external permissions."
                },
                {
                    "text": "Removed Anonymous Login feature."
                },
                {
                    "text": "The Production Release feature has been renamed Configuration Deployment."
                },
                {
                    "text": "Removed the Social Sharing area."
                },
                {
                    "text": "Removed the REST Hook feature you can use WebHooks as an alternative."
                },
                {
                    "text": "Removed the Registered Customer tab from the Customer Management section."
                },
                {
                    "text": "Removed \"custom roles\" from the Team Management section."
                },
                {
                    "text": "Modernized UI."
                },
                {
                    "text": "Improved Load times."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2020-04-3",
        "status": "public",
        "file_name": "admin-console-release-600.json"
    },
    {
        "name": "New LoginRadius SAML APIs",
        "description": "LoginRadius has recently completed it's transition to a new set of SAML APIs that provide additional capabilities from our original SAML APIs. While it is not mandatory to upgrade to the newer SAML Endpoints, we highly recommend it to take advantage of our new features and future updates, as of now you can expect the following features in the newer APIs. For a more detailed version of this release please refer to our <a href=\"/api/v2/announcements/new-saml-apis\">announcement</a>.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New Session Index feature: When the SAML response is sent from the IDP(LoginRadius) to SP(Service Provider), in the SAML assertion we have added one extra property SeesionIndex, which contains the access token of the logged-in user."
                },
                {
                    "text": "Better Error Logging: In some cases when running into a configuration error, the APIs will now give you more information regarding the configuration for troubleshooting."
                },
                {
                    "text": "SAML Compatibility: More compatiblity with 3rd Party SAML systems."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2020-03-25",
        "status": "public",
        "file_name": "new-saml-release-200.json"
    },
    {
        "name": "LoginRadius Android SDK release V4.6.0",
        "description": "In our new LoginRadius <a href='https://github.com/LoginRadius/android-sdk/'> Android SDK V4.6.0 </a>, we are launching the highly anticipated capabilities for Apple Sign In web Login and WeChat Native Login also including some other bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New <a href='/docs/api/v2/deployment/mobile-sdk-libraries/android-library/#integratesociallogin5'> Apple SignIn web Login </a>."
                },
                {
                    "text": "New <a href='/docs/api/v2/deployment/mobile-sdk-libraries/android-library/#advancedoptions9'> Wechat Native Login </a>."
                }
            ],
            "FIXED": [
                {
                    "text": "Issue related to libraries’ reference with the SDK Gradle installation."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-02-25",
        "status": "public",
        "file_name": "android-sdk-release-460.json"
    },
    {
        "name": "LoginRadius iOS SDK release V5.4.0",
        "description": "In our new LoginRadius <a href='https://github.com/LoginRadius/ios-sdk'>  iOS SDK V5.4.0 </a>, we are launching the highly anticipated capabilities for Native Apple Sign In and Native WeChat sign In.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New <a href='/docs/api/v2/deployment/mobile-sdk-libraries/ios-library/#nativesociallogin9'> Apple SignIn Native Login </a>."
                },
                {
                    "text": "New <a href='/docs/api/v2/deployment/mobile-sdk-libraries/ios-library/#nativesociallogin9'> Wechat Native Login </a>."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2020-02-25",
        "status": "public",
        "file_name": "ios-sdk-release-540.json"
    },
    {
        "name": "Cloud Directory Release 5.10.2",
        "description": "Here's comes another Cloud Directory Release, this time we're introducing new changes that will improve the experience of using the Identity APIs.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Detailed Error Messages: We have added more details in some of the error messages being returned, for the complete list of error messages please visit our <a href=\"https://www.loginradius.com/docs/api/v2/getting-started/response-codes/cloud-directory-api-codes/\">Cloud Directory API Codes</a> Doc."
                },
                {
                    "text": "User Agent Change: In the Identity API, the user_agent field returned in the profiles has been revamped, and will be following a new format with different field names."
                },
                {
                    "text": "Case Sensitivity Change: All of the query parameters are now case-insensitive."
                }
            ]
        },
        "auther": "Pascal Noel",
        "created_date": "2019-11-06",
        "status": "public",
        "file_name": "cloud-directory-release-512.json"
    },
    {
        "name": "LoginRadius Core Release V27.0.0",
        "description": "We are excited to announce our new core release! This new core release brings new PIN Authentication features that offer completely new workflows.",
        "changelog": {
            "ADDED": [
                {
                    "text": "PIN Authentication: We're introducing a whole new workflow for PIN Authentication, with PIN Authentication your customers can authenticate by providing a PIN Code."
                },
                {
                    "text": "PIN Re-Authentication: We are also introducing PIN Re-Authentication, where customers can be challenged to re-authenticate again via a PIN in order to access a resource."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Re-Authentication API: We've added some additional endpoints and made some naming changes in our documentation."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2019-08-12",
        "status": "public",
        "file_name": "core-release-270.json"
    },
    {
        "name": "New LoginRadius V2 OpenID APIs",
        "description": "We've completely revamped our OpenID Connect 1.0 APIs with new endpoints that will give you more capabilities as per the OpenID Spec. Please see below for a short list of some of the new capabilities you'll find in our OpenID APIs, for a more comprehensive list please refer to our <a href=\"https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/openid-connect/openid-connect-overview\">OpenID Overview</a> document.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Multiple OpenID Apps: You can now have more than one OpenID App configured for your LoginRadius Environment."
                },
                {
                    "text": "Implicit Flow: The OpenID APIs now provide the capability for the OpenID spec's Implicit flow."
                },
                {
                    "text": "Hybrid Flow: The OpenID APIs now provide the capability for the OpenID spec's Hybrid flow."
                },
                {
                    "text": "Request Claims via query parameters: You can now request claims via the 'claims' query parameter."
                }
            ]
        },
        "auther": "Pascal Noel",
        "created_date": "2019-07-31",
        "status": "public",
        "file_name": "openid-api-update.json"
    },
    {
        "name": "JS Release 3.6.0",
        "description": "This JavaScript Release added Anonymous Login feature to LoginRadius V2 JavaScript and made some other minor improvements ",
        "changelog": {
            "ADDED": [
                {
                    "text": "New Anonymous login features have been added to the LoginRadius V2 JavaScript. "
                }
            ],
            "IMPROVED": [
                {
                    "text": "Two new validation rules 'alphanumeric_combo' and 'alpha_numeric_dash_combo' have been added to the LoginRadius default validation rules for validating strings that consist of alphabets and numbers, and alphabets, dash and numbers respectively."
                }
            ],
            "FIXED": [
                {
                    "text": "Changed how the optional fields are loaded within the LoginRadius JS Forms during progressive profiling steps."
                },
                {
                    "text": "The OTP field in the OTP Email Verification flow has been modified to minimize potential issues"
                },
                {
                    "text": "Improved how the interfaces are displayed when askRequiredFieldForTraditionalLogin and askOptionalFieldsOnRegistration options are both enabled within the Identity Experience Framework (hosted page)."
                }
            ]
        },
        "auther": "Jitender",
        "created_date": "2019-07-11",
        "status": "public",
        "file_name": "js-release-360.json"
    },
    {
        "name": "Cloud Directory Release 5.9.0",
        "description": "With this Cloud Directory Release we are introducing a whole new set of APIs for our Anonymous Login feature. To learn more, check out our Anonymous Login <a href=\"https://www.loginradius.com/docs/api/v2/cloud-directory-api/anonymous-auth/anonymous-login-api/\">Overview</a>.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Get Anonymous User Identity: Query the profile for the Anonymous User in your LoginRadius Cloud Directory."
                },
                {
                    "text": "Get Anonymous User Identity by Pagination ID: Allows you paginate through your anonymous users."
                }
            ]
        },
        "auther": "Pascal Noel",
        "created_date": "2019-06-06",
        "status": "public",
        "file_name": "cloud-directory-release-590.json"
    },
    {
        "name": "Admin Console release 22.4",
        "description": "It’s time for an Admin Console update! In our new version 22.4, the Admin Console is restructured to make it more intuitive and easy-to-use! You will find most of these changes in the Platform Configuration, Platform Security and Deployment tab. Please see our updated Support and API docs through this transition. Here are the details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "A new tab 'Platform Security' with all the relevant sections has been added in the top navigation bar. The 'Platform Security' tab contains Account Protection, Multi-layered security and Data Access Protection pages."
                },
                {
                    "text": "Anonymous Login and Advance Login Methods pages have been added under the new section Platform Security. The Advance Login Methods contains sections for Smart Login Settings, One Touch Login Settings and Email/SMS Template. These sections show if the feature is enabled or not for your application."
                },
                {
                    "text": "Passwordless login and Social login matrics have been added to Account Workflow(Platform configuration->Identity Workflow->Auth Workflow->Account Workflow)."
                },
                {
                    "text": "Secure Cookie matrix has been added to Advanced Workflow(Platform configuration->Identity Workflow->Auth Workflow->Advnaced Workflow)."
                },
                {
                    "text": "Global SMS and Email settings have been added to Communication Configuration(Platform configuration->Identity Workflow->Communication Configuration)."
                },
                {
                    "text": "The SSO Connector page for Shopify, BigCommerce and PerfectMind was added to Access Configuration(Platform Configuration->Access Configuration)."
                },
                {
                    "text": "A new 'Send Test Email' button has been added to each email template in the LoginRadius Admin Console, making it easier to test email templates."
                },
                {
                    "text": "'Email Template' dropdown is added to 'Add a New User' section under Customer Management(Profile Management -> Customer Management) is to select a specific email template when the 'Send Email Verification' option is selected."
                }
            ],
            "IMPROVED": [
                {
                    "text": "The Standard Login page was moved to the new subsection 'Authentication Configuration' under Platform Configuration. The Standard Login page was updated to include more sections-Data Schema, Registration Data, Email Templates with subsections-Verification Email, Forgot Password Email, Welcome Email, Delete Account Email, Add Email."
                },
                {
                    "text": "The API Secrets data type was updated to be hidden in the Admin Console."
                },
                {
                    "text": "Validation was added under Customer Segmentation (Profile Management -> Customer Segmentation) and Data Query (Integration ->Data Query) to restrict the export of customers to a maximum of 500,000 or 25% of the total profiles. If a request returns more than 500,000 or 25% of total profiles, an error message is displayed."
                },
                {
                    "text": "Bot Protection and IP Access Control were moved to the subsection Data Access Protection under Platform Configuration"
                },
                {
                    "text": "Hosted Registration and LoginScreen have been renamed to 'Identity Experience Framework (Hosted)' and 'Identity Experience Framework (Self-Hosted)' respectively"
                },
                {
                    "text": "The Configuration, Web & Mobile, and Profile Swap sections are now grouped under the Deployment tab. The Deployment tab contains Email Workflow, API Credentials, Apps, Progressive Profiling,Identity Experience Framework (Hosted), Identity Experience Framework (Self-Hosted), JS Widgets, Libraries & Plugins, Production Release"
                },
                {
                    "text": "Metrics for customer accounts with multiple profiles have been removed from the Customer Stats section (Customer Insignts->Customer Stats)."
                }
            ],
            "FIXED": [
                {
                    "text": "Under 'My Account -> LOGIN SESSION' a blank message was showing when clicking 'Sign Out All Web Sessions'."
                },
                {
                    "text": "The Icon image for profiles under Customer management (Profile management -> Customer management) was not loading properly."
                },
                {
                    "text": "Privacy: The Privacy button in the Admin Console's footer now points to an updated address."
                },
                {
                    "text": "Issue related to adding a field to a data source under 'Registration Data' (Platform Configuration > Authentication Configuration->Standard Login->Registration Data) is resolved."
                },
                {
                    "text": "'Basic Segmentation' (Profile management -> Customer Segmentation->Basic Segmentation) the filter button had issues when using dates as part of the criteria"
                },
                {
                    "text": "When doing a segmented export, start and end dates input parameters are removed from the filtered Query. "
                }
            ]
        },
        "auther": "Jitender",
        "created_date": "2019-05-27",
        "status": "public",
        "file_name": "admin-console-release-224.json"
    },
    {
        "name": "JS Release 3.2.0",
        "description": "This new JavaScript Release handles Idempotent API requests. ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added support for Idempotent requests: We have added a new JavaScript option <a href=https://www.loginradius.com/docs/api/v2/deployment/js-libraries/getting-started>'disableButtonOnsubmit'</a> that can be added to your JavaScript to handle Idempotent requests."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Changed JSONP call for Passwordless login to AJAX call for better performance"
                }
            ],
            "FIXED": [
                {
                    "text": "Resolved the console error that was displayed when using the privacy policy or social login feature"
                },
                {
                    "text": "Form validation was not working on the change password form. This issue is now resolved"
                }
            ]
        },
        "author": "Jitender",
        "created_date": "2019-05-15",
        "status": "public",
        "file_name": "js-release-320.json"
    },
    {
        "name": "JS Release 3.1.4",
        "description": "This new JavaScript Release introduces the 'preventVerification' option along with an important improvement to the 'Add New Email' process.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Prevent Email Verification: We have added a new JavaScript option <a href=https://www.loginradius.com/docs/api/v2/deployment/js-libraries/getting-started>'preventVerification'</a> that can be added to your JavaScript options, to disable the verification email from being sent. Note: This only works if you have email verification as 'optional' in your identity workflow."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Add New Email Verification: When adding a new email to an existing account, during the email verification if the customer had an active session in the browser they would get automatically logged out, this is no longer the default behaviour."
                },
                {
                    "text": "Added Sid Field: When requesting an OTP (One-Time Passcode) via an API the Sid value will be returned."
                }
            ],
            "FIXED": [
                {
                    "text": "Hosted Page Phone OTP issues: The LoginRadius Hosted Page contains JavaScript configurations that leverage the LoginRadiusV2.js, one of those default configurations caused some issues regarding workflows that use One Time Passcodes that are sent via SMS on the Hosted Page."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2019-04-18",
        "status": "public",
        "file_name": "js-release-314.json"
    },
    {
        "name": "Admin Console Release 22.1",
        "description": "This release of the Admin Console focused on the UX (user experience), please see below for details on some of the more notable changes applied to the different Admin Console sections. ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Customer Segmentation: Ability to segment customers using the ExternalIds field in the Customer Segmentation has been added."
                },
                {
                    "text": "Customer Segmentation: Sorting Segmentation fields in alphabetical order is now possible directly via the Admin Console. "
                }
            ],
            "IMPROVED": [
                {
                    "text": "Profile Management: the ExternalIds applied to a customer are now displayed under the Account Info tab when viewing the profile with 'Full View'."
                },
                {
                    "text": "Data Governance: The Privacy Versioning section has been updated to have fewer steps during configuration."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2019-03-28",
        "status": "public",
        "file_name": "admin-console-release-221.json"
    },
    {
        "name": "LoginRadius API Core Release V22.5.0",
        "description": "We have just launched the LoginRadius API V2 Core Release 22.5.0. Several existing features are improved, and new functionalities are added to broaden the range of support for your needs. ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Unlock API: We have added this new API to allow customers with a valid session to unlock their accounts with an access_token. Click <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token\">here</a> for more information."
                },
                {
                    "text": "Forgot Password API: A new endpoint has been added to the Account API; calls can now be made to trigger the sending of a Forgot Password email with your LoginRadius api key and secret.click <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-forgot-password-token\">here</a> for more information."
                },
                {
                    "text": "IPv6: Support for IPv6 has now been added to the Core API platform"
                },
                {
                    "text": "Temporary Configuration: We have added Temporary Configurations to application configuration settings to buffer breaking changes in existing implementation."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Better error messages for One-touch log-in and Smart log-in."
                },
                {
                    "text": "Smart log-in and One-touch log-in APIs: Now with better error messages and support for “OTP Email Verification” feature."
                },
                {
                    "text": "Duplicate email ID and unique username workflow support: All APIs now support the OTP Email Verification feature with the “Allow duplicate email ID and unique username” workflow enabled.Click <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/overview#usernamelogin3\">here</a> for more information."
                },
                {
                    "text": "Expanded lockout support: <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/overview#googleauthenticatorworkflow4\">Google Authenticator</a>, Change Password, <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-backup-code#protactedContent\">Login By Back-up Code</a>, and Re-Auth API endpoints will now increment failed attempts and result in lockout after threshold is reached."
                },
                {
                    "text": "Password Policy: Added password policy to <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update\">Auth Update Account API</a>."
                },
                {
                    "text": "Duplicate Account Prevention: Customers who have registered with their emails will not be able to perform social login with Social Provider accounts registered under the same email. "
                }
            ],
            "FIXED": [
                {
                    "text": "Select error responses now returning X-LoginRadius-Server header as expected."
                },
                {
                    "text": "The Account Management Update Profile API will retain correct login lockout flag.click <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update\">here</a> for more information"
                },
                {
                    "text": "Customers who have already verified their phone numbers will no longer be asked to validate their phone numbers by the Login API.click <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login\">here</a> for more information"
                },
                {
                    "text": "Issues with phone number format validation are now resolved."
                },
                {
                    "text": "<a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-add-email#protactedContent\">Add Email API </a>is now using the configured email settings."
                },
                {
                    "text": "First Login field gets a value upon login if you have the email verification workflow enabled."
                }
            ]
        },
        "auther": "Ti",
        "created_date": "2019-2-21",
        "status": "public",
        "file_name": "core-release-225.json"
    },
    {
        "name": "Admin-console Release 21.3",
        "description": "Level up your identity game with this new Admin Console release, this new release introduces new ways to access your customer identites via the Admin Console, see below for details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added field counts for Segmentation & Data Query: All of the aggregated keyword fields such as Provider, Country etc. now show the matching profile count in the query builder itself. "
                },
                {
                    "text": "Added reset button for Segmentation & Data Query: A Reset button has been added to the Customer Segmentation & Data Query sections along-side a Filter button which resets both queries and displays filtered data."
                },
                {
                    "text": "Added new Search option in Segmentation & Data query: A search box is now prepended to fields listed in the query builder under Customer Segmentation & Data Query sections to facilitate searching your data."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Your Timezone in Customer Insights: All the sections in customer insights now display data/charts/heat maps in accordance with your configured timezone."
                },
                {
                    "text": "Bot Protection: Added new area under the Auth Security section.  By enabling this option you can enforce your customers to pass reCAPTCHA in the listed Auth APIs."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2019-02-08",
        "status": "public",
        "file_name": "dashboard-release-213.json"
    },
    {
        "name": "LoginRadius API Core Release V22.4.0",
        "description": "We have just launched the LoginRadius API V2 Core Release 22.4.0 which brings a range of use-case specific features, allowing greater customizability in your workflows.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Access Token via Google AuthCode API: We have added this new API to allow you to obtain an access_token via the Google Authorization Code for your Android customers. <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code\">click here</a> for details."
                },
                {
                    "text": "Prevent the Refreshing of Invalidated Access Tokens: We have added a new optional <b>preventRefresh </b>parameter to the <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-invalidate-access-token\">Access Token Invalidate API</a> allowing you to revoke the capability of refreshing a session when the access_token is invalidated."
                },
                {
                    "text": "PreviousUids field: The PreviousUids field is now included in the social profiles when receiving an API response, this field allows you to see if the social profile was previously under a different Account UID."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Extension header for the Google Album APIs: As Google will be deprecating the Picasa Album APIs, we have added an extension header in the Picasa APIs as suggested by Google to continue support for these APIs until the deadline of March 2019."
                },
                {
                    "text": "Access Token via Google Token API: We have added two new optional parameters to support token refresh via a mobile device, more details <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token\">here</a>."
                }
            ],
            "FIXED": [
                {
                    "text": "Duplicate Welcome Email Issue: As certain implementation flows would result in sending duplicate Welcome emails by default, we've removed sending the Welcome email as a default on the Auth Verify Email API, please refer to the <a href=\"https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-send-welcome-email\">Auth Send Welcome Email</a> to send the Welcome email."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2019-1-09",
        "status": "public",
        "file_name": "core-release-224.json"
    },
    {
        "name": "Admin-console Release 21.2",
        "description": "This new Admin Console release introduces a lot of new capabilities that were previously only available via the LoginRadius APIs, see below for the list of features.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Roles And Membership: From this new section, you can manage the multiple roles and permissions of your customers."
                },
                {
                    "text": "Progressive Profiling Feature: Configure Progressive Profiling directly from within the Admin Console."
                },
                {
                    "text": "Enable Customer After a Lockout:  Added this feature in the Full Profile View.  You can  now easily unlock your locked customers without going through the API."
                },
                {
                    "text": "Add/Remove Email Feature: Added this feature in the Full Profile View. Using this you can manage your customer's emails."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Privacy Versioning Enhanced:  We have added a new section named 'Privacy Center' allowing you to have greater visibility in your different policy versions."
                },
                {
                    "text": "Verified Email Checkmark icon: The Verified Email checkmark icon is now also showing directly on the customer profiles under the profile management."
                },
                {
                    "text": "Added Environment Tag: On the left hand-side we have added a tag to indicate your environment (Production/Staging/Development)."
                },
                {
                    "text": "Added JSON Data Export Option: The Data Export feature now Supports both CSV and JSON. With CSV, you are given a dropdown field selection tool, whereas with JSON by default all fields are exported."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-10-30",
        "status": "public",
        "file_name": "dashboard-release-212.json"
    },
    {
        "name": "Admin-console Release 21.0",
        "description": "This new release of the LoginRadius Admin Console brings additional options that allow you to configure security measures on who has access to login.",
        "changelog": {
            "ADDED": [
                {
                    "text": "IP Access Control: We have added a new IP Access Control section under auth security which can be used to add allowed/denied IPs for API access."
                },
                {
                    "text": "QQ Tencent Captcha Menu: New section added under Auth Security to easily configure your Tencent QQ Captcha. "
                },
                {
                    "text": "Suspend Account Lockout type: Added a new 'Suspend Account'  lockout type under 'Auth Security' in the Brute Force Lockout section, which allows you to set accounts as suspended. "
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-08-30",
        "status": "public",
        "file_name": "dashboard-release-210.json"
    },
    {
        "name": "LoginRadius API Core Release V22.1.0",
        "description": "We have just launched the LoginRadius API V2 Core Release 22.1. We have introduced great new features that allow you to customize further your Login flows.",
        "changelog": {
            "ADDED": [
                {
                    "text": "One Touch Login Captcha Support: We have added two new endpoints allowing you to use a Captcha service with the One Touch Login APIs for phone and email."
                },
                {
                    "text": "Custom Registration Data API: You can now delete records by datasource via the new Delete All Records by Datasource endpoint."
                },
                {
                    "text": "New 'IsRequiredFieldsFilledOnce' Profile Field:  We have added a new field to the LoginRadius Customer Profile called 'IsRequiredFieldsFilledOnce'. This field is used to indicate if a customer has filled the required fields at least once."
                },
                {
                    "text": "Revoke Refresh Token: Our new Revoke Refresh Token API allows you to revoke a provided 'refresh_token'."
                },
                {
                    "text": "Refresh Access Token by Refresh Token: We have added a Refresh Access Token by Refresh Token endpoint to facilitate refreshing a given LoginRadius 'access_token'."
                },
                {
                    "text": "Added Auth Access Token Info: Our new Auth Access Token Info API endpoint gives you information on the 'access_token', namely the provider that was used to obtain it and whether Remember Me was selected by the customer."
                },
                {
                    "text": "Account Update: The Account Update API now supports setting custom fields as `null`."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-8-27",
        "status": "public",
        "file_name": "core-release-221.json"
    },
    {
        "name": "Admin-console Release 20.0",
        "description": "You may have noticed that the Admin Console's appearance has changed, we have just launched a new version of the LoginRadius Admin Console! Please see below for the list of changes",
        "changelog": {
            "IMPROVED": [
                {
                    "text": "Faster Load Times: We have made code changes to improve the load times in the Admin Console."
                },
                {
                    "text": "Updated supported Ciphers list: New Ciphers have been added to our supported Ciphers list."
                },
                {
                    "text": "New Icons: We have updated the icons in the Admin Console to improve readability on different displays."
                },
                {
                    "text": "Revamped Sidebar: The sidebar has been completely revamped to improve Admin Console navigation."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-08-07",
        "status": "public",
        "file_name": "dashboard-release-200.json"
    },
    {
        "name": "LoginRadius Core Release V22.0.0",
        "description": "We are excited to announce our new core release! This new core release brings new security management features and other improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added NT Hash Algorithm:  The NT Hash Algorithm can now be enabled for storing customer passwords."
                },
                {
                    "text": "Login on Password Reset: Our APIs can now be enabled to login the user by returning the access_token along with the customer profile upon a successful password reset."
                },
                {
                    "text": "Refresh Access token API: The Refresh Token API now has a new 'expiresIn' parameter allowing you to set an expiration time on a refresh token."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Forgot Password Token Generation Limit: You can now completely disable the limit for token generation when a user requests an email for a forgotten password."
                },
                {
                    "text": "Phone Login: Phone Login can now be configured to be allowed with either the Optional or Disabled Email Verification workflows."
                }
            ],
            "FIXED": [
                {
                    "text": "Email Templates with Gmail: When receiving an email actioned from LoginRadius, within Gmail sometimes only the plain text version of the email template configured in the LoginRadius Admin Console would be displayed. This issue has been resolved and the HTML template should show accordingly."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-08-02",
        "status": "public",
        "file_name": "core-release-220.json"
    },
    {
        "name": "Admin-console Release 19.0",
        "description": "The latest LoginRadius Admin Console Release 19 delivers a more intuitive design along with new functionality. Please see details below.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Unverify Customers: You can now Unverify customers that have been set as Verified in the Admin Console. Go to Profile Management and choose 'Full View' on the desired profile."
                },
                {
                    "text": "Admin-console Section Revamp: The main 'Admin-console' section now has new charts, such as the Login Activity chart, allowing you to see your logins per day."
                },
                {
                    "text": "Data Query: We have added a new Data Query section to allow you to do quick in-Admin-console lookups for your data, it also supports Custom Object search."
                },
                {
                    "text": "Customer Segmentation: New fields are have been added in this section and support for searching complex arrays has also been added."
                },
                {
                    "text": "Filter Customers: You can now filter customers using the query feature under Profile Management."
                },
                {
                    "text": "Password Expiration: In the Password Policy section, the Password Expiration feature has been improved for usability."
                },
                {
                    "text": "Phone Numbers: We have added the ability to add phone numbers to customer accounts via the Admin-console."
                },
                {
                    "text": "Registration Forms: We have added a new Registration Forms section under the 'Standard Login' area to help you easily generate registration form schemas."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Structural Improvements: Several sections have been renamed to make navigation easier."
                },
                {
                    "text": "Design Improvements: Changes to design enhance admin-console experience and usability."
                },
                {
                    "text": "Profile Management Search: The search functionality allows searching of blocked customers."
                },
                {
                    "text": "Ticket Prioritization: You can now set the priority on the tickets you submit via the Support section."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-05-10",
        "status": "public",
        "file_name": "dashboard-release-190.json"
    },
    {
        "name": "LoginRadius API Core Release V20.4.0",
        "description": "Our Core API Release 20.4.0 brings new features to optimize the security of our existing functionalities. Please see the details below",
        "changelog": {
            "ADDED": [
                {
                    "text": "API Request Signing: This is an enhanced method of securing your API request with a signature composed of the account credentials and the API post body."
                },
                {
                    "text": "OTP Lockout: OTP login now supports the lockout function for added security against malicious use."
                },
                {
                    "text": "Request Access Token Header and Payload Option: Additional options have been made available in how you communicate the access token with your API request."
                },
                {
                    "text": "Request Variables: User agent string, IP address, and language data can now be passed as a part of the API request as a custom header."
                },
                {
                    "text": "Option to Prevent Sending Email Verification: An option to prevent sending email verification in case of optional email verification flow."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Deprecated APIs: We have made some changes to some of the alternative workflows and have deprecated the following APIs: No Registration, Auto Login, and One Click Signing. These have been replaced with: One Touch Login, Smart Login, and Passwordless Login, respectively. "
                },
                {
                    "text": "Facebook Deprecated Permissions: As Facebook has deprecated some of their scopes, we have since updated how the scopes are provisioned."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-05-04",
        "status": "public",
        "file_name": "core-release-204.json"
    },
    {
        "name": "LoginRadius API Core Release V20.3.0",
        "description": "The new LoginRadius Core Release V20.0.3 brings new capabilities and improvements to the LoginRadius Platform that make it easier to customize your workflows.",
        "changelog": {
            "ADDED": [
                {
                    "text": "QQ Tencent Captcha Integration: LoginRadius now supports QQ Tencent Captcha. This captcha service can be utilized and configured along with Google reCaptcha. "
                },
                {
                    "text": "Time-based Account Lockout: This security feature can be set to lock an account for a specific time period when the user reaches the maximum allowance for failed login attempts."
                },
                {
                    "text": "External IDs: The LoginRadius User Profile can now hold External IDs via the newly added ExternalIds field."
                },
                {
                    "text": "WebHook Control Header: WebHook calls/triggers can now be controlled via a custom HTTP header."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Login Lockout: Our Login Lockout feature is now added into our Multi-Factor Authentication flows."
                },
                {
                    "text": "Facebook API Version Update: The LoginRadius APIs have been updated to integrate with Facebook API version 2.12."
                },
                {
                    "text": "Profile Modified Date: The LoginRadius User Profile now has a new 'ProfileModifiedDate' field to indicate the date when the profile has been modified or updated."
                },
                {
                    "text": "LoginRadius Subdomains Whitelisted: You will no longer need to manually whitelist LoginRadius domains, they will be whitelisted by default."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-04-11",
        "status": "public",
        "file_name": "core-release-203.json"
    },
    {
        "name": "LoginRadius API Core Release V20.0.0",
        "description": "Introducing the LoginRadius Core API release 20.0.0 that includes brand new functionality and enhancements. see below for a summary of the changes and improvements ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Privacy Policy Versioning: To keep track of the privacy policy version that a user has agreed to on your site, you now have the ability to save and update this information directly in the user profile."
                },
                {
                    "text": "Access Token on Registration Event:This new workflow will help streamline the implementation process and reduce the number of API calls necessary by providing the capability to get an access_token on registration, given that your LoginRadius site has either Optional or Disabled Email verification flows enabled."
                },
                {
                    "text": "Registration Workflow Options: Additional options that restricts the registration workflow on a granular level have been added. This will allow you to block certain types of registrations, such as social registration, custom provider registration, and traditional registration, etc."
                },
                {
                    "text": "Event-Based Re-Authentication: We have added this new security feature to trigger re-authentication on selected events, such as delete profile, update profile, and more."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Change Password Validation: The Change Password API can now apply back-end validation."
                },
                {
                    "text": "Forgot Password API:  The forgot password API is now case-insensitive."
                },
                {
                    "text": "Forgot Password API: Added support for requesting password resets via UserName."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-3-13",
        "status": "public",
        "file_name": "core-release-200.json"
    },
    {
        "name": "Admin-console release 18.0",
        "description": "The new LoginRadius Admin Console Release 18 delivers a multitude of design improvements along with useful new features. Please see details below.",
        "changelog": {
            "ADDED": [
                {
                    "text": "OpenID Connect: OpenID Connect has been added to the 'Federated SSO' section."
                },
                {
                    "text": "Workflow Settings: We are introducing a new Workflow Settings section to provide details of the configured workflows in your LoginRadius account. This new section can be found under Platform Configuration."
                },
                {
                    "text": "Integration: The 3rd Party Software area under Integration has been redesigned and you can now see the active integrations that are enabled in your account."
                },
                {
                    "text": "Security: As an enhanced security precaution, when trying to view or change certain settings in the Admin Console (e.g. when trying to view the API Secret), you will be re-prompted to enter your Admin Console password."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Manage Users: The Registered Users section (User Management → Manage Users → Registered Users) has been updated to show the 100 most recent registered users by default."
                },
                {
                    "text": "Full View: The Full View mode for viewing User Profiles has been redesigned to provide a more streamlined access and navigation of the full profile."
                },
                {
                    "text": "Hosted Registration: The Hosted Registration editor has a fresh new look for simplified navigation."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-03-04",
        "status": "public",
        "file_name": "dashboard-release-180.json"
    },
    {
        "name": "LoginRadius API Core Release V19.0.0",
        "description": "This new release of the LoginRadius V2 API brings improved workflows and new security features.",
        "changelog": {
            "ADDED": [
                {
                    "text": "SHA512 Algorithm for Passwords: LoginRadius has added support for storing passwords in SHA512."
                },
                {
                    "text": "OTP Email Verification: We have added the infrastructure to allow for Email One Time Passcode (OTP)."
                },
                {
                    "text": "Remove Phone ID by Access Token: If an account has a phone id you can remove the phone id via API with the access_token. "
                },
                {
                    "text": " IsLoginLocked: You can now easily change the value of a user's IsLoginLocked field via our Management APIs."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Account Linking with Social Providers: If a user manages to register with an unverified social account and a social login with the same email and verified is performed, we will delete the existing social profile and for security reasons and we will reset the password on the traditional account."
                },
                {
                    "text": "Account Unlinking: Social profiles can now be unlinked in cases where the same email id or the same phone id are present."
                },
                {
                    "text": "Phone Number And Addresses: For the Phone Number and Addresses fields, if you pass in an object without specifying the 'Type' then the 'Type' added will be 'Default'."
                },
                {
                    "text": "Improved Google Authenticator QR Code generation: We have improved the existing logic used to generate QR codes when using 2 Factor Authentication with Google Authenticator."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-2-7",
        "status": "public",
        "file_name": "core-release-190.json"
    },
    {
        "name": "JS Release 2.10",
        "description": "The LoginRadiusV2.js interface just got better with new actions and new hooks this new release brings a lot of useful features for customizing your identity workflows.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Prompt for Password on first Social Login: Easily prompt your first time social users for a password to configure a traditional email and password login."
                },
                {
                    "text": "Unique UserName flow: With this flow, a user can register with the same email provided that they have a unique username for each account."
                },
                {
                    "text": "After validation hook: We have added a new After Validation hook as part our Advanced Customization options allowing you to easily trigger your custom code when a user is attempting to submit invalid data. "
                },
                {
                    "text": "Prompt for Password on first Social Login: Easily prompt your first time social users for a password to configure a traditional email and password login."
                },
                {
                    "text": "Event On Element hook: We have added an Event On Element hook as part our Advanced Customization options allowing you to easily trigger your custom code when a user triggers a specified event on a specified LoginRadius form element."
                },
                {
                    "text": "Before action Init Hook: We have added this new hook to allow you to trigger code before any of the form actions."
                },
                {
                    "text": "SSO via JWT Token: You can now have SSO via a JWT token."
                }
            ],
            "IMPROVED": [
                {
                    "text": "JWT token via Social Login: You can now receive JWT tokens from a social login."
                },
                {
                    "text": "Show pre-filled data on social login: If you have a customer that is registering via Social and you are prompting them for additional fields during the initial social login, You can also display the other fields that the social login auto-filled for them."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-1-31",
        "status": "public",
        "file_name": "js-release-210.json"
    },
    {
        "name": "Admin-console release 16.5",
        "description": "This new LoginRadius Admin Console Release brings useful functionality that will simplify the process of editing your LoginRadius registration form, along with a new help widget.",
        "changelog": {
            "ADDED": [
                {
                    "text": "'Advanced Options' tab in Standard Login area: The Advanced Options section provides you with various workflow configurations so you can choose how you wish the login/registration form to behave with a simple tick in the desired checkbox."
                },
                {
                    "text": "New Help Widget: We’ve added all of our support tools into a single, easy to use widget on the bottom left corner of your Admin Console (where the chat icon used to be). Click it for easy navigation to relevant documentation, create support tickets, or reach support via chat."
                },
                {
                    "text": "Integration Platform Revamp: We’ve improved the interface design for the integrations section."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2018-01-04",
        "status": "public",
        "file_name": "dashboard-release-165.json"
    },
    {
        "name": "Admin-console release 16.0",
        "description": "This admin-console release includes a major redesign and UI improvements within User Management and User Insights, which includes the following changes",
        "changelog": {
            "ADDED": [
                {
                    "text": "Manage Users: The Registered Users tab in the Manage Users section (under User Management) now shows the top 10 registered user profiles."
                },
                {
                    "text": "Data Export: This feature has been updated with the ability to only export the fields that you have selected in case you’re only looking to retrieve specific data fields rather than the entire data set."
                },
                {
                    "text": "Segment Users: We’ve added a 'Basic Segmentation' tab that allows you to apply quick and simple filters for segmenting your users. The “Advanced Segmentation” has even more criteria you can set for more complex segmentation."
                },
                {
                    "text": "User Insights: We have redesigned and expanded the User Insights admin-console to include new sections such as “Login Analytics” and “Comparative Analytics”, along with even more user stats, charts, and graphs."
                },
                {
                    "text": "Quick and Full User Profile: You will now be able to choose between our new 'Quick View' or 'Full View' to see a user's profile. The quick view will contain key information while the Full View will display a complete profile, including custom fields and custom object."
                },
                {
                    "text": "Identity API: We have added a new section dedicated to our Identity API under 'Data Sync'. "
                }
            ],
            "IMPROVED": [
                {
                    "text": "User Insights: We have redesigned and expanded the User Insights admin-console to include new sections such as “Login Analytics” and “Comparative Analytics”, along with even more user stats, charts, and graphs. "
                },
                {
                    "text": "Configuration Sync: Configuration Sync now supports moving all of the standard configurations from one environment to the other."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-12-13",
        "status": "public",
        "file_name": "dashboard-release-160.json"
    },
    {
        "name": "JS Release 2.9",
        "description": "We have just launched a new version of the LoginRadiusV2.js interface, it comes with 2 changes that will improve your experience when using the JavaScript Interfaces.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Projection of Fields: You can now select which primary/root fields you would like the API to return when using the JavaScript Interfaces. With this feature, you can choose to receive either the access_token or just the profile depending on the interface you're using. see the <a href='/api/v2/user-registration/advanced-customization#projectionoffields20'>Advanced Customization</a> documentation for more details."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Browser Cache Time Set to 1 Hour: Configurations in your LoginRadius Admin Console that impacts the LoginRadiusV2.js interfaces will now be cached for one hour. If you would like to avoid waiting after making a change in the Admin Console, you can simply perform a hard refresh for immediate propagation."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-12-7",
        "status": "public",
        "file_name": "js-release-29.json"
    },
    {
        "name": "LoginRadius API Core Release V18.5.0",
        "description": "Announcing the LoginRadius API V18.5.0 which brings many new features and improvements, many making how you interact with the API much easier.",
        "changelog": {
            "ADDED": [
                {
                    "text": "API Key and Secret via POST header: Now you can pass your API Key and Secret via your POST header when using our Management API."
                },
                {
                    "text": "Account Identities by Email: This new API call allows you to get all of the identities that exist under a particular email."
                },
                {
                    "text": "Password Strength Indicator Field:  You can change your password validation rules and enforce existing users to adhere to your rules. There is a new option you can enable that will flag the user profile with IsSecurePassword based on your set rules."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Store Registration Schema Fields Only: In order to improve data privacy on social profiles, we have introduced a new option where we can filter the social user profile data during login/registration from a social provider based on what you would like to retrieve and save from the user’s social profile. When this option is enabled, we will only store the selected data fields from the user’s social profile."
                },
                {
                    "text": "Allow Duplicate Email Registration With Unique User Name: Our Authentication and Management APIs will now support the registration of the same email multiple times provided that the user has a unique username for each registration (please contact LoginRadius support for details)."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-11-20",
        "status": "public",
        "file_name": "core-release-185.json"
    },
    {
        "name": "JS Release 2.8",
        "description": "We are pleased to announce the release of JS version 2.8. The following list details the enhancements, updates, and bug fixes that are included in this release:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Risk Based Authentication: If a user attempts to login from a new location, this feature will detect this as a possible unauthorized login attempt and will either request the user for additional information or prompt the user to answer the security question(s). This is handled via JavaScript with the newly created option 'riskBasedAuthentication'. <a href='/getting-started/general-questions/support-faq#how-do-i-contact-loginradius-support-'>LoginRadius Support</a> to enable this feature."
                },
                {
                    "text": "Registration field pre-populated data: This will support the 'dropdown custom fields' with large data sets. With this feature, our system now has the ability to set up large data sets with custom use cases."
                },
                {
                    "text": "Passwordless Login or Registration/Simplified Instant Registration: This feature allows the user to log in without the hassle of completing a registration form or generating a password. The only requirement to log in is an email or phone number and verification. To handle this, we have created the JavaScript action 'noRegistrationPasswordLessLogin'."
                }
            ],
            "IMPROVED": [
                {
                    "text": "SOTT via header: Now, by default, the SOTT will pass via request headers. To pass it in as a query_string you will need to set the JavaScript 'enableHeaderSott' option to 'false'."
                },
                {
                    "text": "Simultaneous Email and Phone Login: We have implemented a special validation which allows for email and phone login at the same time. The phone login option will need to be enabled in order for this to work."
                }
            ],
            "FIXED": [
                {
                    "text": "Instant Link Login Button: This button will no longer be displayed on the hosted page by default."
                },
                {
                    "text": "Custom Provider Image Not Showing: This has been fixed."
                }
            ]
        },
        "auther": "Swati",
        "created_date": "2017-10-16",
        "status": "public",
        "file_name": "js-release-28.json"
    },
    {
        "name": "LoginRadius API Core Release V18.4.0",
        "description": "In this release, we bring new API capabilities that make it easier to work with the existing APIs, along with a few exciting new features",
        "changelog": {
            "ADDED": [
                {
                    "text": "Account Email Add/Update: You can use this new API call to easily add or update emails from a user profile."
                },
                {
                    "text": "Disable Custom Object Client-side Access: In order to improve custom object security and usability, we’ve added the ability to restrict custom object access to only API calls that are not a part of our front-end authentication APIs. You can set this option with the body parameter 'IsClientSideDisable' when creating a custom object."
                },
                {
                    "text": "Custom Scopes and External Permissions Enhancement: The social login/registration parameter 'is_custom_scope' can be used to pass only specified custom scopes and ignore the default ones."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-10-13",
        "status": "public",
        "file_name": "core-release-184.json"
    },
    {
        "name": "Admin-console release 14.0",
        "description": "You can expect lots of user experience improvements for the Admin Console Release 14! Included in these changes are redesigned interfaces, enhanced functionalities, and more. Check out the updates detailed below:",
        "changelog": {
            "ADDED": [
                {
                    "text": "JS Widget Preview: You can now preview what the interfaces using our JavaScript Widgets will look like."
                },
                {
                    "text": "Expandable Advanced Standard Fields: In the Standard Login area, if you select an Advanced Standard Field, the field’s editing options can now be expanded to include sub fields. For example, for Addresses, you can now add sub fields such as addressline1 and addressline2."
                },
                {
                    "text": "Feedback: We’ve added the ability to provide feedback via the Admin Console."
                },
                {
                    "text": "Custom Provider with Social Interface: Added a checkbox that can enable a given IDP to be included in the social schema."
                },
                {
                    "text": "Login Lockout type 'security question' : Added 'security question' as a new login lockout option, which allows you to prompt a user to answer their security question(s) once they’ve reached the threshold of failed login attempts."
                },
                {
                    "text": "Hosted Page Theme Preview: You can now preview your hosted pages."
                },
                {
                    "text": "Security question maximum attempt on password reset: You can now set the number of failed security question attempts allowed for password reset."
                },
                {
                    "text": "Custom Object Schema: You can now setup a permanent schema for your Custom Objects to make sure all of your custom data is standardized. This is a one-time setting that cannot be reversed or changed once it has been set."
                },
                {
                    "text": "Host Filter for Insights: Added the ability to filter all graphs based on specific domains."
                },
                {
                    "text": "Hosted Page Theme Preview: You can now preview your hosted pages."
                },
                {
                    "text": "User Management Search by ID and Custom Fields: The Search function in the Manage Users section can now be performed with the ID and Custom Fields."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Standard Login UI Revamp: The Standard Login interface has been completely redesigned with improved clarity to provide a better user experience."
                },
                {
                    "text": "Configuration Sync: Configuration Sync now supports moving all of the standard configurations from one environment to the other."
                },
                {
                    "text": "User Segmentation with JSON: You can now use JSON to perform User Segmentation in the Admin Console."
                },
                {
                    "text": "Static SOTT for mobile Apps: Added the SOTT static settings and storage of the token for each mobile app."
                },
                {
                    "text": "Host Filter for User Management: Added ability to show only the user profiles for the selected domain."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-08-22",
        "status": "public",
        "file_name": "dashboard-release-140.json"
    },
    {
        "name": "LoginRadius API Core Release V18.0",
        "description": "Announcing the LoginRadius API V18.0 which brings many new features and improvements, many making how you interact with the API much easier.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Risk Based Authentication - the system can verify the user’s login request with a request for additional information, or even prompt the user to answer security questions when it detects possible risks associated with the login. For instance, if a user is logging in from a different location than usual, they may be prompted to answer additional security questions to verify that they are the user."
                },
                {
                    "text": "Age Verification check on the server side for COPPA compliance - You can now easily enable and set the default age required for registration."
                },
                {
                    "text": "Simultaneous Phone and Email Authentication - This flow allows users to log in using their PhoneId and email simultaneously."
                },
                {
                    "text": "Management API Call to Generate SOTT - You can now generate a new Secure One Time Token (SOTT) via our Management API."
                },
                {
                    "text": "Select Fields to Return - You can now select which fields you would like to be returned in your API V2 calls"
                }
            ],
            "IMPROVED": [
                {
                    "text": "Auto login API enhancement - We created a new set of APIs to verify your auto login tokens, which will allow you to fully customize your login workflows."
                },
                {
                    "text": "Email/SMS Notification on Password Reset:  When this option is enabled, our system will send an Email/SMS notification to the end user upon a successful password reset."
                },
                {
                    "text": "Context Role expiration - Added an option for Role context expiration, which will expire the user role context after the expiration date."
                },
                {
                    "text": "Date format: We are now supporting yyyy/mm/dd as an additional date format in our APIs."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-08-2",
        "status": "public",
        "file_name": "core-release-180.json"
    },
    {
        "name": "LoginRadius API Core Release V17.0",
        "description": "There is no shortage of new features for this new API release! With a focus on account security, here are the latest API additions: ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Passwordless Login or Registration / Simplified Instant Registration: Allow an end user to login without registration by prompting the user to input their email/phone number, and all it takes to log them in is for them to verify their email/phone number."
                },
                {
                    "text": "Security Question Lockout: You can now configure the security question lockout setting so that if a user fails to reset their password when prompted the security question after select number of times, they will be locked out of their account."
                },
                {
                    "text": "No Callback Social Login: Allowing or configuring the no callback feature will prevent the return of any token from the social authentication. Optionally, a GUID that has been returned can be used to fetch the profile from the Autologin Ping API."
                },
                {
                    "text": "Invalidate Phone Verification API: This provides the ability to reset the phone number verification status in a user’s account."
                },
                {
                    "text": "Get Configured Security Questions: The list of questions that are configured on the respective LoginRadius site can now be retrieved via API – By Email, By UserName, By Access Token, By Phone."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Default SMS Provider: LoginRadius now has a default SMS provider to send out authentication or verification OTP with a monthly bound of 200 SMS."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-06-27",
        "status": "public",
        "file_name": "core-release-170.json"
    },
    {
        "name": "Admin-console release 13.0",
        "description": "It’s time for a Admin Console update! Version 13 of our Admin Console has a bit of everything, from managing your users, to security enhancements, to email workflows. Here are the details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Export Option for Segmented Users:  The ability to export your user segmentations has been added via the new 'Export' button at the bottom of the User Segmentation page."
                },
                {
                    "text": "Added new fields for User Segmentation: New fields have been added in the segment users area to improve the ability to segment your users based on specific criteria and filters."
                },
                {
                    "text": "Conditional User Segmentation with AND/OR: The ability to group segmentation filters by AND/OR conditions and you will be able to select the AND/OR conditions and apply more filters with each additional group created"
                },
                {
                    "text": "Two-Factor-Authentication:You can now enable/disable Two-Factor-Authentication for your LoginRadius account from the Account Settings section."
                },
                {
                    "text": "WebHook events: 3 New WebHook events are now accessible from the Admin Console: UpdateCustomobject, DeleteCustomObject, CreateCustomObject"
                },
                {
                    "text": "Autologin and Add Email templates: New email templates have been added to the Email Workflow section to include the Auto login template for the Auto Login functionality and the Add Email template for the Add Email functionality."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Send Test Email Button: A new Send Test Email button has been added to each template editing area in the LoginRadius Admin-console, making it easier to test email templates."
                },
                {
                    "text": "Hidden API Secrets: Your API secrets will now be hidden by default in the Admin Console."
                },
                {
                    "text": "User Management: When manually adding a new user via the 'Add a New User' function, there is now a drop down menu to select a specific email template when the 'Send Email Verification' option is selected."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-06-27",
        "status": "public",
        "file_name": "dashboard-release-130.json"
    },
    {
        "name": "Admin-console release 12.0",
        "description": "It’s time for a great change as we introduce version 12 of our Admin Console! With this new Admin Console comes accessibility to numerous new features, as well as a more intuitive navigation throughout your account.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Menu Navigation: We’ve reorganized the layout of the menus to provide a more intuitive experience while navigating through the various sections of the Admin Console."
                },
                {
                    "text": "LoginRadius Admin Console login: The LoginRadius Admin Console can now be accessed via Single Sign On (SSO). It can also still be accessed via social login with the following social providers: Facebook, Google, and Linkedin."
                },
                {
                    "text": "LoginRadius Admin Console SAML Login: If you’re a LoginRadius customer and have SAML in your company’s infrastructure, you can now take advantage of SAML to log into your Admin Console."
                },
                {
                    "text": "Default Role: You can now define via the Admin Console if a specific role should be applied to a user by default."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Menu Navigation: We’ve reorganized the layout of the menus to provide a more intuitive experience while navigating through the various sections of the Admin Console."
                },
                {
                    "text": "Generate API Secret: We have added the ability to easily generate a new API secret directly from the Admin Console."
                },
                {
                    "text": "Configuration Sync: The Configuration Sync feature is now able to sync the email templates and SMTP configurations from one site to the other. "
                },
                {
                    "text": "Billing: In your LoginRadius account, only team members whose roles are either admin, owner, or finance will be allowed to access the Billing area."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-5-29",
        "status": "public",
        "file_name": "dashboard-release-120.json"
    },
    {
        "name": "LoginRadius API Core Release V16.6",
        "description": "This new release of the LoginRadius APIs, brings enhancements with new features. Please see below for more details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Access Token Invalidation: All of the access tokens will be automatically invalidated as soon as the user is archived."
                },
                {
                    "text": "Default Role: The new 'default role' feature allows you to have a preconfigured role that is automatically set when creating a new user. Please contact LoginRadius Support to enable this feature."
                },
                {
                    "text": "Roles for Secondary API Secret: When generating a secondary API Secret, you can now decide its level of access. Please contact LoginRadius Support to enable this feature."
                }
            ],
            "IMPROVED": [
                {
                    "text": "New Webhook Events: UpdateCustomobject, DeleteCustomObject, CreateCustomObject."
                },
                {
                    "text": "AutoLogin API: We have added one more parameter in the AutoLogin API. Now you can pass 'redirectUrl' to redirect on a particular URL after clicking on the link."
                },
                {
                    "text": "nullsupport as QueryParameter: Now you can now pass 'nullsupport' as a query parameter to update the user profile fields to null."
                }
            ]
        },
        "auther": "Naren",
        "created_date": "2017-05-17",
        "status": "public",
        "file_name": "core-release-166.json"
    },
    {
        "name": "LoginRadius API Core Release V16.5",
        "description": "This new release of the LoginRadius API, brings new additions, with many focusing on user roles. Please see below for more details:",
        "changelog": {
            "ADDED": [
                {
                    "text": "Context-based Roles and Permissions Management: You can now provide context (a grouping) to your existing roles and depending on the context you can also add additional permissions to each role. A new set of API calls have been added for this purpose."
                },
                {
                    "text": "Verified and Unverified Email Fields: If an emailid is unverified then it will be saved in the 'UnverifiedEmail' list. When it becomes verified, this emailid will be removed from the 'UnverifiedEmail' list and be moved to the 'Verified' list."
                },
                {
                    "text": "Email Prompt Auto Login: This allows you to have a special workflow where the user provides a username/emailid and gets sent a link via email using the provided username/emailid, where the user can click the link on any device, the user then gets logged at the same place where they entered their username/emailid for login."
                },
                {
                    "text": "Disable JS Interface Debugging: For the following LoginRadius JS Interfaces LoginRadiusSSO.js and LoginRadius.1.0.js you can now use the DebugMode parameter to turn on or off debugging in your Web Console."
                },
                {
                    "text": "Get Basic Server Information: We have introduced a new API Call to retrieve the current server information."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-05-08",
        "status": "public",
        "file_name": "core-release-165.json"
    },
    {
        "name": "Admin-console release 11.0",
        "description": "Introducing Version 11 of the LoginRadius User Admin Console. Please see below for a list of our new features: ",
        "changelog": {
            "ADDED": [
                {
                    "text": "Two Factor Authentication (2FA): Backup Codes are now part of the Admin Console"
                },
                {
                    "text": "Login Lockout: you can set if a user fails too many logins if they should be locked out until they complete a captcha or blocked. You can also configure the account lockout treshold"
                },
                {
                    "text": "Failed Login Captcha Type: If someone fails too many logins you can now choose which captcha type they should be prompted."
                },
                {
                    "text": "Invalidate Social Profiles: You can now Invalidate Accounts which contains linked social profiles. "
                },
                {
                    "text": "Username Case-Sensitivity: Usernames can now have upper case as well as lower case characters."
                },
                {
                    "text": "Team access list: You can now choose which section of the LoginRadius Admin Console your members have access to via roles."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-4-30",
        "status": "public",
        "file_name": "dashboard-release-110.json"
    },
    {
        "name": "LoginRadius API Core Release V16.0",
        "description": "Introducing Version 16.0 of the LoginRadius API. This release brings many API experience improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Remove Field Value from Profile: You can now use null values to delete a 'field' or an 'object' from array type fields’ from userprofile in v2 apis."
                },
                {
                    "text": "Delete specific object from array: Now you can delete any specific object from array type fields."
                },
                {
                    "text": "Field-Specific Custom Validation Message Hook: You can separate validation messages specific to a field on a single rule."
                },
                {
                    "text": "Added Backup Code APIs V2: If 2 Factor Authentication is enabled the user can download a backup code for login."
                },
                {
                    "text": "Added get/reset backup code API."
                },
                {
                    "text": "Added Social Login APIs to V2 JS."
                },
                {
                    "text": "Added Custom Object APIs to V2 JS."
                },
                {
                    "text": "Added Security Questions APIs to V2 JS."
                },
                {
                    "text": "Added Reset (2FA) 2 Factor Authentication API to V2 JS."
                },
                {
                    "text": "Added v2Recaptcha and InvisibleRecaptcha to V2 JS."
                },
                {
                    "text": "Added versioning to JS Interface. To get Current JS version use &lt;ObjectName&gt;.version."
                },
                {
                    "text": "User Registration Source: The user registration source is stored during a new registration when the registration comes in via our JS Interface, it will save the domain under registration source in V2. The default value is 'API'."
                },
                {
                    "text": "Added Login Lockout Feature to V2 JS. After maximum failed login attempts login is locked. Value of MaximumFailedLoginAttempts and LoginLockedType can be set from Admin-console."
                },
                {
                    "text": "Login Provider/Registration Provider: Now you can get the Provider name in the Traditional Profile from which user has registered in v2."
                },
                {
                    "text": "IsCustomUid: new field to track that the UID is a site UID(provided on your end) or a UID generated by LoginRadius. This flag can only be set using our server side API in V2."
                },
                {
                    "text": "Expire Tokens on Password Change: On reset password or change password, all sessions will expire."
                },
                {
                    "text": "Only required rule is applicable for password field in login page while on all other pages where password can be set/update all rules can apply."
                },
                {
                    "text": "Photo API: There will be an additional property to the response of the API and it will include photos from an album with different dimensions."
                },
                {
                    "text": "Optional Fields Prompt in V1 JS: A new option has been added to our V1 - JS Interface to prompt optional fields for first time login."
                },
                {
                    "text": "Last Login Location: User profiles will have a new field for last login location, which determines the user's last geographical location."
                },
                {
                    "text": "recaptchaV2OnloadCallback: You can now do some action after reCaptcha loads by setting your JS function in this callback and it will execute after loading reCaptcha."
                }
            ],
            "FIXED": [
                {
                    "text": "Update userProfile API V2 response: We have changed the response body for updates in our V2 Auth userProfile set of apis."
                },
                {
                    "text": "Role Related Change: Roles will be UnAssigned from user if the role is deleted."
                },
                {
                    "text": "Solved Nickname issue in V2 JS."
                },
                {
                    "text": "Solved IsEmailSubscribed issue in V2 JS."
                },
                {
                    "text": "Change option name 'objectName' to 'customObjectName' in V2 JS."
                },
                {
                    "text": "Fixed Sott encoding issue in V2 JS."
                }
            ],
            "IMPROVED": [
                {
                    "text": "RFC Based Email Validation: Email Validation has been updated to allow RFC based specification email addresses, the email validation process has been updated throughout the core apis."
                },
                {
                    "text": "Case Sensitive Username Option: Setting 'AllowCaseSensitiveUserName' equal to true in your JS Interface allows to have case sensitive usernames in your LoginRadius app for both v1 and v2."
                },
                {
                    "text": "Subscribe/Unsubscribe Webhook API: You can now use the following parameter names when using the Subscribe and Unsubscribe API calls: api_key, api_secret, target_url as parameters for subscribing on unsubscribing Webhooks."
                },
                {
                    "text": "Logout function in JS: New function introduced in our LoginRadiusRaaS.js that handles a complete logout, it removes the SSO session, LocalStorage, and SessionStorage and clears any valid access token"
                }
            ]
        },
        "auther": "Narendra",
        "created_date": "2017-04-25",
        "status": "public",
        "file_name": "core-release-160.json"
    },
    {
        "name": "Admin-console release 10.0",
        "description": "Introducing Version 10 of the LoginRadius User Admin Console. This release focuses on new improvements to the team area for your staff and experience improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Team Section Site Owner: The Team section now shows the site owner so that all Admin Console users know who the main account holder is."
                },
                {
                    "text": "Added Support Role: Created a new 'Support Role' that has access to the following: User Management, User Profiling, Customer Insights, Billing Section"
                },
                {
                    "text": "New plain-text email template field: A new textarea for plain-text emails has been added."
                },
                {
                    "text": "Custom OAuth: We added the ability to have custom fields when using the Cutom OAuth feature."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-4-19",
        "status": "public",
        "file_name": "dashboard-release-100.json"
    },
    {
        "name": "LoginRadius API Core Release V15.0",
        "description": "Introducing Version 15.0 of the LoginRadius API. This release brings many API experience improvements.",
        "changelog": {
            "ADDED": [
                {
                    "text": "SHA256 Algorithm: We have added the new SHA256 algorithm to our supported password algorithms."
                },
                {
                    "text": "Change/Update Password Encryption Algorithm: You can now change your existing password algorithm without affecting your user’s current passwords."
                },
                {
                    "text": "Custom OAuth Provider: Our custom OAuth provider feature now allows custom field mapping and a custom header."
                },
                {
                    "text": "HTML Email and Text Email: Added new field named ‘TextTemplate’ in Raas Email Config EmailTemplates. We will send both HTML and text Templates emails if the text template is configured"
                },
                {
                    "text": "Login Lockout: With the new whitelist and blacklist settings, you can control user access or registration to the LoginRadius site. You are able to either accept or reject the end users attempts to register based on their email addresses. "
                },
                {
                    "text": "Disabled JavaScript fallback on hosted: If JavaScript is disabled on the user’s browser, then they will be redirected to a hosted page (https://{your app name}.hub.loginradius.com/hosted/login). Note: For this to work API V2 must be enabled on the account and meta refresh must be enabled by the browser"
                },
                {
                    "text": "Refresh Token API V2: Our API V2 now has the capability of refreshing the traditional or email access token as well"
                },
                {
                    "text": "Email Verification Token API V2: Our API V2 now has the capability of Returning Email Verification tokens"
                },
                {
                    "text": "Forgot Password Token API V2: Our API V2 now has the capability of returning Forgot Password Tokens "
                },
                {
                    "text": "Access Token Token API V2: Our API V2 now has the capability to translate the Request Token returned during authentication into an Access Token that can be used with other API calls."
                },
                {
                    "text": "Check Token Validity API V2: Our API V2 now has the capability to validate access tokens, if valid then returns a response with its expiry otherwise it will return an error. "
                },
                {
                    "text": "Invalidate Access Token API V2: Our API V2 now has the capability to Invalidate access tokens."
                },
                {
                    "text": "Access Token using google JWT token for Native Mobile Login: This new API call for our V2 API returns a LoginRadius Access Token using Google's JWT token for Native Mobile Login."
                },
                {
                    "text": "Remove Google Authenticator: 2 new API calls have been added to our API V2 for Two-Factor Authentication allowing you to remove/reset Google Authenticator and SMS Authenticator by UID or by access token."
                },
                {
                    "text": "Registration with ReCaptcha: You can now register using ReCaptcha via API V2"
                },
                {
                    "text": "PlaintextPasswordEncoding otpion: Added in password encryption algo for supporting plantext password encoding before appending salt (for weather network customer)"
                }
            ],
            "FIXED": [
                {
                    "text": "BirthDate Field Format : The BirthDate Field in our APIs V1 and V2 have now been standardized and need to be formatted one of the following ways: valid date format is 'mm-dd-yyyy', 'mm/dd/yyyy', 'm-d-yyyy', 'm/d/yyyy'"
                },
                {
                    "text": "Custom validation RegEx : the Pipe '|' character in your custom validation RegEx is now accessible by using 'or'"
                },
                {
                    "text": "Webhooks remove email : Now in case of email remove api in v1 and v2, Format of posted data in webhook will be { UserProfile = userProfile, RemovedEmail = emailName }"
                },
                {
                    "text": "Phone numbers array of objects update : Fixed and added new errorCode - PhoneType_CanNot_Same = 1124 "
                }
            ],
            "IMPROVED": [
                {
                    "text": "HttpStatusCodes : status codes in our API V2 beta have been revamped for ease of usage."
                },
                {
                    "text": "Login Lockout : If a user fails to login with their password multiple times, their account will be temporarily locked. You have the ability to customize the number of failed login attempts allowed before the account is locked."
                },
                {
                    "text": "Email/SMS Request Limit : There will be an error message from the API if the email sending limit is exceeded."
                },
                {
                    "text": "Email/SMS Request Limit : The Invalidate Email (Reset Email Verification API) is an admin feature, and will work regardless of the email limit."
                },
                {
                    "text": "Age Field Auto Update : The Age field will automatically update based on BirthDate"
                },
                {
                    "text": "IsEmailSubscribed : IsEmailSubscribed is now an editable field via API"
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-3-23",
        "status": "public",
        "file_name": "core-release-150.json"
    },
    {
        "name": "Admin-console release 9.0",
        "description": "Introducing Version 9 of the LoginRadius User Admin Console. This release focuses on integrations and ease of use in the Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "User Search by wildcard: You can now search for emails using wildcards, improving your searching, for example you can now search on a per provider basis e.g. @gmail.com, @hotmail.com, hushmail.com, etc."
                },
                {
                    "text": "Filter clauses in User Segmentation: You can now filter using clauses in the User Segmentation area, ex: (=, !=, &lt;, ,&gt;=, LIKE, BETWEEN)"
                },
                {
                    "text": "New SSO area: a new area has been created for SSO, under 'Deployment -> Federated SSO' this area allows configuration of different single sign-on technologies such as JWT."
                },
                {
                    "text": "Delegation API: This feature can be found under the new SSO area, The Delegation API allows you to streamline authentication for a given application with LoginRadius SSO."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-3-20",
        "status": "public",
        "file_name": "dashboard-release-90.json"
    },
    {
        "name": "Admin-console release 8.0",
        "description": "Introducing Version 8 of the LoginRadius User Admin Console. This release introduces many new features that will improve your user identity management.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Custom Domain: We have added the ability to add/edit/delete Custom Domain bindings."
                },
                {
                    "text": "Additional API Secrets: This section lets you add additional API Secrets for your LoginRadius site."
                },
                {
                    "text": "Security Question Area: You can manage and configure your security questions in this area."
                },
                {
                    "text": "Access Restrictions: With the new whitelist and blacklist settings, you can control user access or registration to the LoginRadius site. You are able to either accept or reject the end users attempts to register based on their email addresses. "
                },
                {
                    "text": "Configuration Sync: You are now able to sync your site settings or configuration from one site to another. For example: dev to prod or staging to prod site configuration."
                },
                {
                    "text": "SAML Configuration: You can add/edit/delete any SAML Apps connected via SSO."
                },
                {
                    "text": "Configuration Sync: You are now able to sync your site settings or configuration from one site to another. For example: dev to prod or staging to prod site configuration."
                },
                {
                    "text": "SAML Configuration: You can add/edit/delete any SAML Apps connected via SSO."
                },
                {
                    "text": "Manage Role and Permissions: You can now manage the roles and permissions for your user base."
                },
                {
                    "text": "Two Factor Authentication: Enable/Disable Two Factor Authentication directly from the Admin Console."
                },
                {
                    "text": "Phone Authentication: Customize the settings for each event based SMS triggered through LoginRadius."
                },
                {
                    "text": "Deployment: New Hashing Algorithm area. This area displays all password encryption values that are stored by the LoginRadius Cloud Directory"
                },
                {
                    "text": "Access Token: The new Access Token Area allows you to directly request to change the Access Token Expiration Time"
                },
                {
                    "text": "REST Hook Settings: You can customize your rest hook settings here."
                },
                {
                    "text": "Web hook: You can customize you web hook settings here."
                }
            ],
            "FIXED": [
                {
                    "Improved Segmentation UI": "The top 10 users are shown in the list and ordered by Created Date."
                },
                {
                    "Engagement Insights": "User Return Rate and Monthly Active Users graphs are moved to User Engagement; Provider Engagement that was in User Engagement is moved to the new Provider Engagement tab."
                }
            ],
            "IMPROVED": [
                {
                    "Search Users": "You can search for users by their Name, Email and UID."
                },
                {
                    "Create Traditional Profiles": "For users who only have a social account, you can now manually create a traditional email + password account for them from the Admin Console."
                },
                {
                    "Heat map": "A heat map has been added to show login activity. High Level Statistics for all criteria."
                },
                {
                    "Blocked Users": "Get a list of all of the blocked users."
                },
                {
                    "Team users": "You can manage additional users here. For example, delete team member, edit role, and send reset password emails. You can also transfer accounts."
                },
                {
                    "High-Level Statistics": "High-Level statistics for User Profiles and User Logs."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-3-14",
        "status": "public",
        "file_name": "dashboard-release-80.json"
    },
    {
        "name": "Admin-console release 7.0",
        "description": "Introducing version 7 of the LoginRadius User Admin Console. this release includes a very major improvement surrounding User Management, LoginRadius now gives the ability to manage the user accounts much more granularly via Admin Console.",
        "changelog": {
            "ADDED": [
                {
                    "text": "User Management: You can now add new users via the Admin Console"
                },
                {
                    "text": "User Management: If the account is a social only account you can now create a traditional profile for that user in the Admin Console"
                },
                {
                    "text": "User Management: If a user needs the verification email to be reissued this can now be accomplished via Admin Console"
                },
                {
                    "text": "User Management: You can now manually resend the verification email"
                },
                {
                    "text": "User Management: Manually updating some of the key fields is now possible"
                },
                {
                    "text": "User Management: You can now flag accounts as verified or unverified via Admin Console"
                },
                {
                    "text": "Data Export: export data seemlessly from your LoginRadius Cloud Directory"
                }
            ],
            "IMPROVED": [
                {
                    "text": "Welcome Email: enable or disable sending the welcome email in the email settings section."
                },
                {
                    "text": "Revamped Date Range for Analytics: The date range picker has been revamped to allow you to make more granular selections"
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-2-1",
        "status": "public",
        "file_name": "dashboard-release-70.json"
    },
    {
        "name": "Admin-console release 6.0",
        "description": "The LoginRadius engineering team is proud to release version 6 of the User Admin Console. this release includes various improvements based on the feedback we received from our customers. Notably a more refined ability to perform User Segmentation.",
        "changelog": {
            "ADDED": [
                {
                    "text": "User Segmentation: New field filters will allow you to be more granular with your data selection i.e. you can now filter by Country, Age, Gender, City, State, etc."
                },
                {
                    "text": "Team Management: You now have the ability to send a password reset link from the Admin Console to members of your team."
                },
                {
                    "text": "Added OneClick Sign in Email Template: We have added the ability to edit the email template for the email that get sent out when implementing a OneClick Sign in flow."
                },
                {
                    "text": "Hosted Page Management: Managing your hosted pages via the admin-console is now possible allowing you to make quick updates."
                }
            ],
            "FIXED": [
                {
                    "text": "Faster Search: Search for users faster using either their Email or UID in the User Management area."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Stats in User Admin Console: The initial Admin Console page is now showing day by day growth allowing you to keep track of your user registration trends."
                },
                {
                    "text": "Billing: Find your active subscriptions and invoices in the Billing area."
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2017-1-1",
        "status": "public",
        "file_name": "dashboard-release-60.json"
    },
    {
        "name": "Core Release 14.0",
        "description": "We are pleased to announce our core API release 14.0! In this release we've included notable features such as:<br>A) One Click Sign In has been added to our API V2 for a simpler login experience.<br>B) New ways to your track user data with the Account Deleted User Profile APIs.<br>C) Increased SAML capabilities.<br>D) Invalidate an account and prompt the user to re-validate via email verification.",
        "changelog": {
            "ADDED": [
                {
                    "text": "ADFS SP implementation with SAML: Using ADFS (Active Directory Federation Services) you can now add any SAML provider as Identity provider"
                },
                {
                    "text": "Invalidate Email API: Invalidate a verified account and send an email to prompt the user to re-validate the account"
                },
                {
                    "text": "Account Archived or Account Deleted User Profile APIs: get quick & easy access to historical data on your users"
                }
            ],
            "IMPROVED": [
                {
                    "text": "SAML as a Service Provider: We can act as a service provider for SAML."
                },
                {
                    "text": "SAML IDP: New Identifier dynamic mapping option"
                },
                {
                    "text": "SAML IDP: Allow for mapping of LoginRadius Custom fields to your SAML assertion"
                },
                {
                    "text": "SAML IDP: Set an Attribute Name as URL to support standard attribute conventions"
                },
                {
                    "text": "One Click Sign In API V2: Newly introduced to our V2 APIs. Create a Seamless login experience by providing your users with a One Click Sign In solution"
                },
                {
                    "text": "One Click Sign In Verification API V2: In relation to the above context, we have also added the ability to verify emails for Single Sign In"
                }
            ],
            "FIXED": [
                {
                    "text": "Amazon OAuth support updated to the latest version"
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2016-12-1",
        "status": "public",
        "file_name": "core-release-140.json"
    },
    {
        "name": "Admin-console release 5.0",
        "description": "This release introduces improvements and updates in the Admin Console's content to facilitate usability.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Account Details: You now have the ability to pull recent details on your users from the Admin Console"
                },
                {
                    "text": "Ionic and Xamarin: Ionic and Xamarin SDK added to our Mobile SDK area to help developers"
                }
            ],
            "IMPROVED": [
                {
                    "text": "Amazon SES: Amazon SES has now been added as selecteable SMTP Provider in our SMTP providers list"
                },
                {
                    "text": "Social Provider Installation Steps Update: Our Built-in step by step guide for setting up social providers has been updated to contain the latest steps from the providers"
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2016-12-1",
        "status": "public",
        "file_name": "dashboard-release-50.json"
    },
    {
        "name": "Core Release 13.0",
        "description": "We are pleased to announce the release of a new version of our platform API, This release includes several important features such as:<br>A) Webhook support, allowing to subscribe and receive data from anyone of the following hooks:<br>Login, Register, UpdateProfile, ResetPassword, ChangePassword, EmailVerification, AddEmail,<br>RemoveEmail, BlockAccount, DeleteAccount, SetUsername, CreateTraditionalAccount, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber<br>B) One-time passcode (OTP) allowing the use of texting a user's phone for Authentication.<br>C) Two-Factor Authentication that requires not only a password and username but also a physical token (i.e. One-time code)",
        "changelog": {
            "ADDED": [
                {
                    "text": "Webhooks: Allows you to subscribe to a predefined webhook and get a notification with data on the specified hook"
                },
                {
                    "text": "Two-Factor Authentication Feature (2FA/TFA): multi-factor authentication that requires not only a password and username but also a physical token (i.e. One-time code)"
                },
                {
                    "text": "Security Question Feature: Configurable security questions for the account recovery and security"
                },
                {
                    "text": "One-time passcode Feature (OTP): send a One-time passcode via SMS and once the user logs in then they would ask to reset the password. A user can log in without entering password"
                },
                {
                    "text": "Landing form submission API: easily capture customer data from a landing page"
                },
                {
                    "text": "Open API: Ability to delegate the user login functionality to a 3rd party provider and allows your users to login to LoginRadius"
                },
                {
                    "text": "Language customization: more flexibility with the user registration form for localizations"
                }
            ],
            "IMPROVED": [
                {
                    "text": "Support for PBKDF2 hashing algorithm"
                },
                {
                    "text": "SignupDate and LastLoginDate profile data fields added to user profile"
                },
                {
                    "text": "Vkontakte OAuth APIs has been updated with most recent version"
                },
                {
                    "text": "Custom Fields supportability extended to 15"
                }
            ],
            "FIXED": [
                {
                    "text": "Facebook OAuth 2.8 version support"
                },
                {
                    "text": "Updating the first or last name of a user profile will also update the full name"
                }
            ]
        },
        "auther": "Pascal",
        "created_date": "2016-11-1",
        "status": "public",
        "file_name": "core-release-130.json"
    },
    {
        "name": "Admin-console release 4.0",
        "description": "This release deploys an updated Cloud Directory interaction, improving many of the analytics and user management features as well as improving response times on queries and large data sets. This release also covers some improvements to the admin usability, simplifying some of the admin process and improving the UX.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Hosted Page: Added the hosted page configuration section to Deployment which allows you to configure a centralized hosted page to handle the authentication/registration processes."
                },
                {
                    "text": "One Click Login Email: Added the One Click Login Email templates section to the Email template options allowing you to customize and localize your one click login templates."
                }
            ],
            "IMPROVED": [
                {
                    "text": "Billing: Revamped billing section to display subscription and invoices pulled directly from the billing service"
                },
                {
                    "text": "Analytics: Improved the analytics charts displayed throughout the Admin-console. These charts now render near real-time updates of your user analytics."
                },
                {
                    "text": "User Management Search: Improved search functionality that drastically increases the response times of the User Management search."
                },
                {
                    "text": "User Segmentation: Revamped UI and added additional filtration options to support commonly used segments as well as custom fields."
                },
                {
                    "text": "Team: Reduced complexity of the add team member options and allow for admins to trigger email verification messages to added team members."
                }
            ],
            "FIXED": [
                {
                    "text": "Large Volume Customer Data: Fixed a bug with analytics that would display inaccurate numbers for total user counts and analytics for sites with a large number of users."
                },
                {
                    "text": "Analytics Charts: Reworked existing charts and removed some UX discrepancies."
                }
            ]
        },
        "auther": "Karl Wittig",
        "created_date": "2016-11-1",
        "status": "public",
        "file_name": "dashboard-release-40.json"
    },
    {
        "name": "Admin-console release 3.0",
        "description": "We’ve now released version 3 of the user Admin-console. This release contains several enhancements, improvements and bug fixes geared towards making the admin-console more intuitive, informative and easy to use. The following are the details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Ownership of the LoginRadius account can be transferred to other team members from the Team page."
                },
                {
                    "text": "Pinterest social ID provider can now be directly added from the social login page."
                },
                {
                    "text": "Additional scopes now can be added from the social login page, under the External Permissions tab."
                },
                {
                    "text": "Existing tickets can now be seen on support ticket page."
                },
                {
                    "text": "New field types such as checkbox,password and hidden have been added."
                },
                {
                    "text": "Users currently logged in can be seen on the team page with respective roles."
                }
            ],
            "IMPROVED": [
                {
                    "text": "User selected site will remain selected after login."
                },
                {
                    "text": "Team management page has been revamped for the ease of use and understanding."
                },
                {
                    "text": "Field ID can now be seen against disabled fields of the page."
                },
                {
                    "text": "Loading messages are now updated with their respective actions."
                },
                {
                    "text": "More support ticket categories have been added to the support ticket page."
                },
                {
                    "text": "\"Remove Rule\" option has been added to the User Segmentation page."
                },
                {
                    "text": "SSO page title text updated for increased relevancy."
                }
            ],
            "FIXED": [
                {
                    "text": "User Segmentation: renamed RAAS to \"Email\" and ID provider to \"Provider\"."
                },
                {
                    "text": "Basic social data setting is no longer removable."
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2016-8-1",
        "status": "public",
        "file_name": "dashboard-release-30.json"
    },
    {
        "name": "Core Release 12.0",
        "description": "We are pleased to announce the release of new version of platform API. This release includes several important features and bug fixes. Some examples are :<br>a) New features such as being able to configure custom 0Auth 2.0 provider will help our customers to easily integrate with any new provider that conforms to oAuth2.0 standards.<br>b) Providing server side apis for password reset and user update will allow our customers to integrate this feature with their server side flow. Going forward, we will provide lot more server side apis to allow customers the flexibility to implement their own flow.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Custom OAuth-2.0 provider - Support for any new OAuth 2.0 provider following the standard OAuth 2.0 flow"
                },
                {
                    "text": "Register with business-only e-mail"
                },
                {
                    "text": "Reordering social providers based on connected status"
                },
                {
                    "text": "Associating Total registered user count with the identity api"
                },
                {
                    "text": "Disabling new registration from social login"
                },
                {
                    "text": "Option to disable account linking"
                },
                {
                    "text": "Adding Pinterest as a new social provider"
                },
                {
                    "text": "One click login feature"
                },
                {
                    "text": "Password strength feature"
                },
                {
                    "text": "server side api to get active session details"
                },
                {
                    "text": "server-side api to reset password"
                },
                {
                    "text": "Customer Registration V2 API Beta version released"
                },
                {
                    "text": "Hub & API Projects merged"
                }
            ],
            "FIXED": [
                {
                    "text": "List of Merged UIDs in user profile"
                },
                {
                    "text": "Missed data points of social ID provider"
                },
                {
                    "text": "Account Linking Social ID provider order"
                },
                {
                    "text": "Custom Object by UID API Error message"
                },
                {
                    "text": "Keyup event binding fails in firefox"
                },
                {
                    "text": "Refresh token API error message fix for Instagram"
                },
                {
                    "text": "New password can be set as old password"
                },
                {
                    "text": "SessionStorage or LocalStorage in Safari Private Mode"
                },
                {
                    "text": "Birthdate field is not being retrieved from Google Social Login."
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2016-7-1",
        "status": "public",
        "file_name": "core-release-120.json"
    },
    {
        "name": "Admin-console release 2.0",
        "description": "We have released the improved account interface for our customers. Please see below for a list of the major features added and see the following blog for more details.",
        "changelog": {
            "ADDED": [
                {
                    "text": "User Management - > User search and modificaton"
                },
                {
                    "text": "Help Docs added in each section in the user Admin-console"
                },
                {
                    "text": "Improved deployment options"
                },
                {
                    "text": "Adding custom email templates"
                },
                {
                    "text": "Transfer ownership of Site to different email/user"
                },
                {
                    "text": "Audit logs for any configuration changes/update"
                },
                {
                    "text": "Manage Zendesk tickets from Admin Console page"
                },
                {
                    "text": "Access token valid time option in user account"
                }
            ],
            "FIXED": [
                {
                    "text": "https and http issue with pre-defined and custom interface"
                },
                {
                    "text": "VK steps change"
                },
                {
                    "text": "Search By Email Id and UID on user management"
                },
                {
                    "text": "Social Icons sprite messing up on social login page"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2016-7-1",
        "status": "public",
        "file_name": "dashboard-release-20.json"
    },
    {
        "name": "Admin-console release 1.0",
        "description": "We have released a new user account Admin Console!<br>LoginRadius User account will work as the center for :<br>a)LoginRadius site settings to be managed by Customer<br>b)Accessing Analytics, User Management and User Profile for Customer<br>c)managing all billing and account details for the customer<br><a href=\"https://www.loginradius.com/updates/new-and-improved-loginradius-Admin-console\">https://www.loginradius.com/updates/new-and-improved-loginradius-Admin-console</a>",
        "changelog": {
            "ADDED": [
                {
                    "text": "Intuitive UI and UX"
                },
                {
                    "text": "LoginRadius Site Configuration and whitelisting"
                },
                {
                    "text": "LoginRadius site key metric charts"
                },
                {
                    "text": "LoginRadius site Top stats"
                },
                {
                    "text": "Managed deployment settings, social login settings, user registration,SMTP settings and deployment settings"
                },
                {
                    "text": "Manage support tickets"
                },
                {
                    "text": "Ability to configure SSO settings in the Admin-console"
                },
                {
                    "text": "Hosted Registration Options in Admin Console"
                },
                {
                    "text": "Allow selecting custom fields in the Admin-console"
                },
                {
                    "text": "Ability to configure Social Login widgets, Hybrid sharing widget and Friend invite widget"
                },
                {
                    "text": "Ability to configure teams, account settings and billing settings"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2016-6-1",
        "status": "public",
        "file_name": "dashboard-release-10.json"
    },
    {
        "name": "Core Release 11.9",
        "description": "This section is for complete release notes for the LoginRadius API and SDK Libraries.<br><h2>Release 11.1 notes (2016-04-14)</h2>We are pleased to announce the release of new version of platform API version. The improvements include:<ul><li>Several bug fixes to allow more flexibility in client side implementations</li><li>New API added to get list of <a href='/'>subscribed URLs</a></li></ul>The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New email template added for 'Welcome Email'"
                },
                {
                    "text": "Getting the number of logins for a user by introducing a new field in profile JSON"
                },
                {
                    "text": "Fetching email from Amazon login"
                },
                {
                    "text": "Fetching email from Twitter login"
                },
                {
                    "text": "More options for encoding passwords"
                }
            ],
            "FIXED": [
                {
                    "text": "Issue with login using Twitter"
                },
                {
                    "text": "There were dd-mm-yyyy validation for DOB"
                },
                {
                    "text": "welcome email template for Social register (two emails were being receiving)"
                },
                {
                    "text": "Password encoding was not working"
                },
                {
                    "text": "Uid was getting change when facebook primary email id update by user"
                },
                {
                    "text": "Rest hook UnSubscribe api, when was not passing the target_url then no error were showing"
                },
                {
                    "text": "Check target_url validation, for some urls api was giving incorrect response."
                },
                {
                    "text": "when pass the event in Camel casing then api was showing error"
                },
                {
                    "text": "Get all subscribed URLs: when pass invalid event then showing blank array"
                },
                {
                    "text": "Rest hook subscribe api, when were not passing the parameter values then showing error"
                },
                {
                    "text": "password encoding: was not working when pass hexadecimal"
                },
                {
                    "text": "Check target_url validation: when pass invalid url,api was giving incorrect response"
                }
            ]
        },
        "auther": "Deepak Gupta",
        "created_date": "2016-5-1",
        "status": "public",
        "file_name": "core-release-119.json"
    },
    {
        "name": "Core Release 11.5",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New SSO and Raas JS methods : LoginradiusRaaS.sessionData.getUid(); LoginradiusRaaS.sessionData.getToken();"
                },
                {
                    "text": "DB name customization for localized db"
                },
                {
                    "text": "Remember me option on login"
                },
                {
                    "text": "foursquare api version upgrade"
                },
                {
                    "text": "New Hook added for set attributes on form fields"
                },
                {
                    "text": "New Hook added for set validation riles"
                },
                {
                    "text": "Delete User using Account Id API"
                }
            ],
            "FIXED": [
                {
                    "text": "Required fields updated and users not being prompted"
                }
            ]
        },
        "auther": "Deepak Gupta",
        "created_date": "2016-1-1",
        "status": "public",
        "file_name": "core-release-115.json"
    },
    {
        "name": "Core Release 11.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Resend email verification"
                },
                {
                    "text": "Change primary email address"
                },
                {
                    "text": "Forgot username option"
                },
                {
                    "text": "Vaildate access token API"
                },
                {
                    "text": "Expire access token API"
                },
                {
                    "text": "Option to add and customize placeholders for all forms"
                },
                {
                    "text": "developed API frameowrk for custom forms"
                },
                {
                    "text": "Expire token on SSO logout"
                },
                {
                    "text": "SSO login return token only if token nor expired"
                },
                {
                    "text": "Unlinked profile reregister option"
                },
                {
                    "text": "Ask email for unverified social account option"
                },
                {
                    "text": "Introduce new email flows - a) Email verification required b) Email verifcation disable c)Email verifcation optional"
                },
                {
                    "text": "Created landing pages for social sharing callback to close popup"
                }
            ],
            "FIXED": [
                {
                    "text": "Facebook image count API"
                },
                {
                    "text": "Change username API bug"
                },
                {
                    "text": "Template parameter in user delete API"
                },
                {
                    "text": "Custom validation hook with date option bug"
                },
                {
                    "text": "Change password validation bug"
                },
                {
                    "text": "get profile by UID for unverified account"
                },
                {
                    "text": "SSO JS bug fixes"
                },
                {
                    "text": "Wrong error message for provider configuration issue"
                },
                {
                    "text": "Solved Console errors in few rare cases"
                },
                {
                    "text": "Fixed issue of UC browser on windoiws phone"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-11-1",
        "status": "public",
        "file_name": "core-release-110.json"
    },
    {
        "name": "Core Release 10.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New Analytics API added"
                },
                {
                    "text": "Facebook API version upgraded to 2.5"
                },
                {
                    "text": "Added new option to register and login with username and email"
                },
                {
                    "text": "New APIs added : check whether username exists or not (Client)"
                },
                {
                    "text": "New APIs added : check whether username exists or not (Server)"
                },
                {
                    "text": "New APIs added : Change UserName by AcoountID"
                },
                {
                    "text": "New APIs added : Set UserName by AcoountID"
                },
                {
                    "text": "Added feature to populate Country code from Country name or vice versa"
                },
                {
                    "text": "Instagram support for LoginRadius Photo, Video and Follower API added"
                },
                {
                    "text": "Multiple email template option added"
                },
                {
                    "text": "New API added that Generate reset password GUID"
                },
                {
                    "text": "Console logs added to SSO JS"
                }
            ],
            "FIXED": [
                {
                    "text": "Forgot password link expire"
                },
                {
                    "text": "Error messages issue fixed of User Reg.API"
                },
                {
                    "text": "Uid was getting changed after email verification"
                },
                {
                    "text": "No email for verification in case of optional email verification option"
                },
                {
                    "text": "Set password and change password are now work without account linking method, dependency removed"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-10-1",
        "status": "public",
        "file_name": "core-release-100.json"
    },
    {
        "name": "Core Release 9.6",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Major performance enahancements"
                },
                {
                    "text": "FirstLogin field inroduced in userprofile"
                },
                {
                    "text": "Restrict number of email sending daily by setting up frequency option."
                },
                {
                    "text": "Custom expiration of email verifcation link"
                },
                {
                    "text": "Custom validation rules option using Regex"
                },
                {
                    "text": "New Cloud Directory API"
                },
                {
                    "text": "Removed support of old insights API"
                }
            ],
            "FIXED": [
                {
                    "text": "Email case sensitivity issues"
                },
                {
                    "text": "In rare case VK profile was coming with all null values"
                },
                {
                    "text": "Email verifcation link issues with Hash url"
                },
                {
                    "text": "Social login safari private mode issue"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-6-1",
        "status": "public",
        "file_name": "core-release-96.json"
    },
    {
        "name": "Core Release 9.5",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Global data ceneters setup and allow customer to select any data center globally"
                },
                {
                    "text": "Custom object records check by Uid API"
                },
                {
                    "text": "Customer registartion schema caching on s3 and serve through CDN aggregator release"
                },
                {
                    "text": "Extra placeholders in RaaS Email template such as Email, FirstName, LastName, Address1, Address2, City, Country, PostalCode, Region, State"
                },
                {
                    "text": "Performance Enhancement in Cloud Directory API"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-5-1",
        "status": "public",
        "file_name": "core-release-95.json"
    },
    {
        "name": "Core Release 9.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Feature to auto Login user just after the email verification is added"
                },
                {
                    "text": "Login through multiple profile email ID feature added"
                },
                {
                    "text": "Client and server side APIs added to check whether is avilable to register or not"
                },
                {
                    "text": "Additional emails can be added or removed"
                },
                {
                    "text": "New API added to Get User Profiles form the Email ID"
                },
                {
                    "text": "Profile update API has been enhanced to update more user profile fields, such as ImageUrl, ThumbnailImageUrl, TimeZone, About, WebProfiles, AddressType."
                },
                {
                    "text": "Delete or remove value through Edit profile API, One can remove the data of user profile fields."
                },
                {
                    "text": "Password periodically reset option added"
                },
                {
                    "text": "New API added : Set user's password by the accountid"
                },
                {
                    "text": "New API added :Change user's password by the accountid"
                },
                {
                    "text": "New API added : Get password hash by the accountid"
                },
                {
                    "text": "New API added : Delete account by the accountid"
                },
                {
                    "text": "Capability to customize the user registeration form fields label added"
                },
                {
                    "text": "User profile gender update options stretched, following fields can be updated as gender: male|female|other|unknown|m|f|o|u"
                }
            ],
            "FIXED": [
                {
                    "text": "use case ‘remove confirm password’ and ‘password length’ together form was not rendering"
                },
                {
                    "text": "callback type added to handle multiple tabs of iOS chrome browser"
                },
                {
                    "text": "Added new particular field of postal code for user profile, this had been overwriting by the social login."
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-4-1",
        "status": "public",
        "file_name": "core-release-90.json"
    },
    {
        "name": "Core Release 8.3",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Remain existing token in case of account linking"
                },
                {
                    "text": "LoginRadius Token callback type can be changed vuiaz the RAAS option $ui.callbacktype, accepts POST, QueryString, Url Hash"
                },
                {
                    "text": "WordPress Social ID provider Oauth API Changes : a) changes in scope, additional scopes added b) new user profile data points added"
                },
                {
                    "text": "LinkedIn Platform updates added"
                },
                {
                    "text": "Yahoo Oauth 2.0 added"
                },
                {
                    "text": "Password secure for SMTP - Encrypt in RAAS"
                },
                {
                    "text": "RAAS email masking for default SMTP credentials"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2015-2-1",
        "status": "public",
        "file_name": "core-release-83.json"
    },
    {
        "name": "Core Release 8.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "MSN email id in contacts"
                },
                {
                    "text": "Developed  API"
                },
                {
                    "text": "Forgot social ID provider option"
                },
                {
                    "text": "Developed get password hash API"
                },
                {
                    "text": "Password length option in JavaScript"
                },
                {
                    "text": "Multiple registration/login/forgot password forms on single page"
                },
                {
                    "text": "After deleting profile reregister option"
                },
                {
                    "text": "Hook option in JavaScript to give raw data to parent page"
                },
                {
                    "text": "Hook option to customize error messages"
                },
                {
                    "text": "Short Url API released"
                },
                {
                    "text": "Option of share short URL through wall post API"
                },
                {
                    "text": "Client side version of trackable status update API."
                },
                {
                    "text": "API to get all linked profile by token"
                },
                {
                    "text": "Released Recaptcha v2"
                },
                {
                    "text": "Custom headers in all emails"
                },
                {
                    "text": "Hook option to customize validation messages"
                }
            ],
            "FIXED": [
                {
                    "text": "Custom fields through registration form bug"
                },
                {
                    "text": "Optional fields were showing every time when login through social"
                },
                {
                    "text": "System was not asking required field in case of SSO"
                },
                {
                    "text": "SSO logout on changing account on another site"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-12-1",
        "status": "public",
        "file_name": "core-release-80.json"
    },
    {
        "name": "Core Release 7.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "RaaS Password Hashing added"
                },
                {
                    "text": "Refresh Access token and get refreshed data"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-10-1",
        "status": "public",
        "file_name": "core-release-70.json"
    },
    {
        "name": "Core Release 6.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "RaaS custom fields in Js registration form added"
                },
                {
                    "text": "Zapier implemented"
                },
                {
                    "text": "Get fields of Userprofile API : added API signature to userprofile API section"
                },
                {
                    "text": "Xing and Mail.ru social ID provider addded"
                },
                {
                    "text": "New social login interface option added"
                },
                {
                    "text": "New user profile fields addeds: GravatarImageUrl, ProfileImageUrls, WebProfiles"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-9-1",
        "status": "public",
        "file_name": "core-release-60.json"
    },
    {
        "name": "Core Release 5.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "New Popup for OpenId Login added"
                },
                {
                    "text": "Loading image on request handler page added"
                },
                {
                    "text": "New Loading image on success page added"
                },
                {
                    "text": "Two responsive interface :- a .Social Login Theme b. Embed Bricks added"
                },
                {
                    "text": "'Loading..' Text on social login interface added"
                },
                {
                    "text": "Highlight of login Provider added"
                },
                {
                    "text": "All css & Js can be accessed through CDN"
                },
                {
                    "text": "Add ‘no follow’ links with detection - SEO"
                },
                {
                    "text": "Github : Removed gravatar_id attribute"
                },
                {
                    "text": "FourSquare: New API version added to platform"
                },
                {
                    "text": "VK: new API version and with extra data fields"
                },
                {
                    "text": "Linkedin: new data fields in certificates object with user profile"
                },
                {
                    "text": "SSO API for RaaS added"
                },
                {
                    "text": "RAAS option to specify email URLs added, these are emailVerifcationUrl, forgotPasswordUrl"
                }
            ],
            "FIXED": [
                {
                    "text": "Foursquare user profile Image issue fixed"
                },
                {
                    "text": "Facebook API implementation Bugs"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-8-1",
        "status": "public",
        "file_name": "core-release-50.json"
    },
    {
        "name": "Core Release 4.5",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added Html5 login on *.hub.loginradius.com with new design"
                },
                {
                    "text": "Success Page Loading image changed"
                },
                {
                    "text": "Handled platform exceptions"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-6-1",
        "status": "public",
        "file_name": "core-release-45.json"
    },
    {
        "name": "Core Release 4.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Removed session dependencies"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2014-1-1",
        "status": "public",
        "file_name": "core-release-40.json"
    },
    {
        "name": "Core Release 3.5",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Various redirection related performance improvements"
                },
                {
                    "text": "XRDS doc request for open id"
                },
                {
                    "text": "Facebook sandbox mode"
                },
                {
                    "text": "Developer email"
                },
                {
                    "text": "SQL code removal from core code."
                },
                {
                    "text": "Secured by LoginRadius in JS interface"
                }
            ],
            "FIXED": [
                {
                    "text": "Firefox console error"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-12-1",
        "status": "public",
        "file_name": "core-release-35.json"
    },
    {
        "name": "Core Release 3.2",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Major performance improvements in product"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-11-1",
        "status": "public",
        "file_name": "core-release-32.json"
    },
    {
        "name": "Core Release 3.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Social account linking"
                },
                {
                    "text": "SSO"
                },
                {
                    "text": "Multiple interfaces on single page"
                },
                {
                    "text": "New APIs for Album, Checkin ,Likes, Photo, Audio, Video, Page"
                },
                {
                    "text": "Added new field to following APIs : Contacts, Events, Mentions, Company, Groups, Post (Get/Post), StatusMessage (Get/Post)"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-10-1",
        "status": "public",
        "file_name": "core-release-30.json"
    },
    {
        "name": "Core Release 2.5",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Custom permission scopes lr_basic, lr_extended, lr_read_contact, lr_read_status, lr_write_status, lr_read_event, lr_read_groups, lr_read_posts, lr_read_followcompanies, lr_write_message"
                },
                {
                    "text": "Implemented Klout score in the platform"
                },
                {
                    "text": "Error page message formatting"
                }
            ],
            "FIXED": [
                {
                    "text": "JS interface console error in IE8"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-8-1",
        "status": "public",
        "file_name": "core-release-25.json"
    },
    {
        "name": "Core Release 2.1",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "FIXED": [
                {
                    "text": "Twitter login failure issue"
                },
                {
                    "text": "Linkedin profile image issue, allowed original and thumbnail image both."
                },
                {
                    "text": "Bot crawling prevention"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-6-1",
        "status": "public",
        "file_name": "core-release-21.json"
    },
    {
        "name": "Core Release 2.0",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "Added following social providers : Amazon, Odonoclasiki, Salesforce, Paypal"
                }
            ],
            "FIXED": [
                {
                    "text": "Console error in interface JavaScript"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-5-1",
        "status": "public",
        "file_name": "core-release-20.json"
    },
    {
        "name": "Core Release 1.9",
        "description": "We are pleased to announce the release of new version of platform API version. The following list contains the enhancements and Bug fixes.",
        "changelog": {
            "ADDED": [
                {
                    "text": "For social login interfaces JavaScript framework"
                }
            ],
            "FIXED": [
                {
                    "text": "Console error in interface JavaScript"
                }
            ]
        },
        "auther": "Ashrujit Bhattacharya",
        "created_date": "2013-2-1",
        "status": "public",
        "file_name": "core-release-19.json"
    }
];
  
  export default changelog;
  