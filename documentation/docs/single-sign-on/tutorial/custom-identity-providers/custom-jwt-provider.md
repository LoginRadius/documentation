# JWT as IDP Introduction

JWT is an SSO method and is widely used by B2C apps. It is used to pass the authenticated user’s identity between an Identity Provider (IDP) and a Service Provider (SP). Where:

- LoginRadius Identity Platform acts as a Service Provider.
- You are required to configure the desired JWT supported application as an Identity Provider in the LoginRadius Admin Console.

Thus, you can configure the desired JWT supported third-party/own application for the social login in your application. This method is useful when:

- Your desired social login application is not available in the default supported social login networks for LoginRadius.
- You own an application that supports JWT and wants its customers to access your LoginRadius enabled application.

In the JWT login workflow, the customer is redirected from your LoginRadius enabled application to a JWT supported application for authentication. Where the customer enters login credentials for authenticates.

On successful authentication, that application redirects the customer back to your LoginRadius enabled application with the JWT token. LoginRadius verifies the JWT token and allows the customer to access the resource in your LoginRadius enabled application.

> **Note:** JSON Web Tokens (JWTs) can be signed using a secret (with the HMAC or other algorithms) or a public/private key pair using RSA.

The UI/UX for the JWT login workflow will be similar to social login. There will be an icon or link for this JWT IDP flow in the Social Login form rendered by LoginRadius V2.js on your website if the **Include In Social Schema** is selected while configuring the JWT app. The look, feel, and behavior for the JWT login workflow can be customized by leveraging the LoginRadius [Social Interface Customization](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#socialinterfacecustomization11) feature.

The following explains the JWT login workflow in steps:

**Step 1.**. Your customer clicks the JWT IDP login icon from the LoginRadius enabled application.

**Step 2.** Your customer will be redirected to that JWT IDPs login page. For example: https://www.jwtlogin.com/login

**Step 3.** If the customer is already logged in on the JWT IDP, the workflow skips **Step 4**

**Step 4.** If the customer is not logged in, they are required to enter the login credentials for authentication in the JWT IDP application.

**Step 5.** Upon successful authentication, the customer will be redirected to LoginRadius JWT handling URL with JSON Web Token (JWT). The following is an example of the redirect URL:

`https://{appname}.hub.loginradius.com/access/jwt?jwttoken=<JWT TOKEN>`

> **Note:** By default, JWT token will come in the query string, but LoginRadius also supports the Post method.

**Step 6.** If the JSON Web Token is valid, LoginRadius will check if it is an existing customer or not.

- If not, LoginRadius will redirect the customer to JWT Error Page with the error message. The following is an example of the redirect URL:

  `https://{appname}.hub.loginradius.com/access/jwt/error`

- If yes, the customer will be redirected to your application with the LoginRadius access token.

The following image displays the functional flowchart for the JWT login:
![JWT flow](https://apidocs.lrcontent.com/images/JWT-4_279925ed60451966115.80852197.png "JWT loginflow")

## JWT Provider Guide

This guide describes step by step procedure for setting up an application as an Identity provider leveraging JWT login flow.

## Part 1 - Configuration

You are required to perform the following configurations in the LoginRadius Admin Console to set up the application as an IDP leveraging JWT login flow:

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account, navigate to [**Platform Configuration > Authentication Configuration > Custom IDPs**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/custom-idps/jwt-provider) and select the **JWT Provider option** from the left navigation panel.

The following screen will appear:
![Add Provider](https://apidocs.lrcontent.com/images/Add-Provider_249966275a19e84c568.88902152.png "Add Provider")

**Step 2:** Click **Add Provider** button highlighted in the above screen and the following JWT configuration form fields will appear:

![Configure JWT](https://apidocs.lrcontent.com/images/pasted-image-0-4_983709376653a4db96120a1.43526969.png "Configure JWT")

**Step 3:** Enter a unique name under the **Provider Name**. This name will be displayed under the social login forms in the LoginRadius IDX page and on the social login form rendered by LoginRadius V2.js library on your application, if the **Include In Social Schema** is selected while configuring the JWT app.

> **Note:** Below are the validation rules that should be taken care of while creating the **Provider Name**.If any of the below validation rule is not followed the error message: `Provider Name is not valid` will be shown.

1. Only **\_** (underscore) and **-** (hyphen) are allowed as a special charater.
2. Provider Name should start with a **character**.
3. Alpha numeric values are allowed.
4. No space is allowed in between.
5. Minimum length of Provider Name should be **[1]** and maximum length upto **[60]** is allowed.
6. Now all the Provider Names are allowed in lowercase only. If the uppercase is entered it will be automatically coverted into lowercase.

**Step 4:** Select the JWT signing **Algorithm** used by your application (the selected algorithm is used in encrypting your customers information in the JWT).

- HS256
- HS384
- HS512
- RS256
- RS384
- RS512
- ES256
- ES384
- ES512

**Step 5:** Enter the Key or JWKS Endpoint URL (based on the selected algorithm) in the text field.

> **Note:** When opting for either the **RS Algorithms** or the **ES Algorithms**, you must input at least one option from the **JWKS Endpoint** and **Key**. On the other hand, if you opt for the **HS Algorithms**, the only available option is to add a **Key**.
  - For the **JWKS Endpoint**, enter the **Endpoint URL** in the designated field.
  - For the **Key**, enter the **key value** in the designated field.
  - If you choose to add both the **JWKS Endpoint** and **Key**, the **JWKS Endpoint** will be prioritized.

**Step 6: Clock Skew (Optional)**, enter the Time drift to add or subtract time to the server clock, which validates token lifetime. Expected values -NumberInt / NumberInt.

**Step 7: Expiration Time Difference (Optional),** The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. The processing of the "exp" claim requires that the current date/time MUST be before the expiration date/time listed in the "exp" claim. Increases/Decreases timespan for expiration. Expected values -NumberInt / NumberInt.

**Step 8: Token Query Parameter Name (Optional)**, enter the name of the query parameter(string) containing the JWT token.

**Step 9: Login Url (Optional)**, via this URL user will be redirected to IDP login page .e.g. https://www.jwtlogin.com/login

**Step 10: Enable required parameters (Optional)**

- **Use Authorization Header:** Enabling this will allow you to get the JSON Web Token as a bearer token in the authorization header instead of the query string.
- **Not Before Field Is Mandatory:** Enabling this will not accept JWT before the nbf claim value in the JSON Web Token.
- **Expiration:** Enabling this will not accept JWT after the expiry claim value in the JSON Web Token.
- **Subject:** When enabled, the JWT should contain the **sub** claim.

**Step 11:** **Auto Lookup Functionality.**

**Enabling AutoLookup:** When you enable AutoLookup, you will notice a domain box where you need to enter/specify the domain name.

![AutoLookup](https://apidocs.lrcontent.com/images/Custom-Idps-LoginRadius-User-Dashboard-2_1238909362653a4214a834b1.82630786.png "AutoLookup")

Once the configuration is saved with the domain name, upon entering an email ID with the specified domain name during authentication, the user will be automatically directed to the designated Identity Provider (IdP). Without AutoLookup, the user follows the standard login process.

> **Note:** After enabling this feature, the specific IdP will not be displayed in the Social Schema on your IDX.

**Step 12: Issuer**

**Expected Value (Optional):** It requires a predefined value.
Checks the JWT token for this field and matches it if **IsMandatory** is enabled.

- **Match Value:** When enabled, LoginRadius checks the JWT token for this field and matches with the expected value.
- **Is Mandatory:** When enabled, LoginRadius checks if the JWT token contains the **iss** (issuer) claim.

**Step 13: Audience:** The issuer of IDP works here as an audience.

**Expected Value(Optional):** It requires predefined (expected) value of Issue, e.g: www.example.com

- **Match Value:** If this is enabled, LoginRadius checks the JWT for this field and matches it with the expected value.
- **Is Mandatory:** If this is enabled, LoginRadius checks the JWT contains the **Aud (Audience)** claim.

**Step 14: Data Mapping,** Enter field mappings between JWT fields and LoginRadius [user profile properties](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/).

- **Select Field (Dropdown):** Select the LoginRadius field name, which you want to map with the respective JWT field.
- **Profile Key:** Enter the JWT field name corresponding to the LoginRadius field name.
- **Update Email Profile:** When the checkbox is enabled, the email profile gets updated with the value received in the social profile, according to the field mapping configured in the JWT app.


> **Note:** The LoginRadius ‘ID’ field is the unique identifier for each profile attached to a LoginRadius customer account. Refer to the LoginRadius Data structure document for more details. The mapping of the LoginRadius 'ID' field (LoginRadius field) is mandatory.

Here's what a mapping with minimal settings should look like:

| LoginRadius | JWT |
| ----------- | --- |
| ID          | id  |

**Step 15: Include In Social Schema**, When enabled, the JWT login flow will be included in the social login form via the LoginRadius IDX or the social login form generated by LoginRadius V2.js.

## Part 2 - Next Steps

The following is the list of documents you might want to look into:

[Custom OAuth Provider](https://www.loginradius.com/docs/single-sign-on/tutorial/custom-identity-providers/custom-oauth-provider/)
