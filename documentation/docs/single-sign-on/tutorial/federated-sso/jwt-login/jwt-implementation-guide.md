# Implementation of JWT

To implement the JWT in Loginradius use the following two ways:

- [Implementation of JWT in IDX](#implementation-of-jwt-in-idx)

- [Direct Implementation of API](#direct-implementation-of-jwt-using-loginradius-apis)

## Implementation of JWT in IDX:

**Step 1:** First of all, configure a JWT app in your LoginRadius Admin Console. Refer to the [JWT Admin Console Configuration](#admin-console-configuration) section for how to configure JWT in the LoginRadius Admin Console.

**Step 2:** Whitelist the service provider URL in the LoginRadius Admin Console. Follow this [document](https://www.loginradius.com/docs/api/v2/admin-console/deployment/production-environments/) for information on how to whitelist URLs in the LoginRadius Admin console.

**Step 3:** Redirect the customer to the following LoginRadius JWT SSO URL for retrieving the JWT Token

`https://{siteurl}/service/jwt/{jwtappname}/authorize?client_id=<LRapikey>&redirect_uri=<encode(service provider url)>`

**Available Query Parameters**

- client_id: Loginradius API key
- redirect_uri: Callback URL of your site where you want to redirect back your users
- nonce: This serves as a token validation parameter, used to associate a client authentication with an ID Token for mitigating replay attacks. If this value is used, it will be included as a Claim in the ID Token. Clients should verify that this nonce Claim value is equal to the value set in the Authorization Request. (Optional)

**Available Template Parameters**

- siteurl: This field contains the LoginRadius IDX/Custom Domain url. E.g., if your LoginRadius app name is company name then the siteurl will be companyname.hub.loginradius.com. If you are using a custom domain for your IDX page, then use custom domain value in place of site URL
- jwtappname: JWT App Name

> **Note:** This is the latest JWT API endpoint. If you are still working with the old JWT API endpoint which would be depricated soon, then refer to [JWT Implementation Guide](https://www.loginradius.com/docs/single-sign-on/tutorial/Federated-SSO/JWT-login/v1.4.0/JWT-implementation-guide/) documentation.

**Step 4:** The JWT SSO URL will redirect to your LoginRadius Identity Experience Framework hosted page (`https://<LRsitename>.hub.loginradius.com`)

**Step 5:** If the customer is not logged into the hosted page, the customer will be asked to log in. After authentication, the customer will be redirected back to the return URL with the JWT as a query parameter.

### Admin Console Configuration

This section covers the required configurations that you need to perform in the LoginRadius Admin Console for JWT Login.

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account, and navigate to [**Platform Configuration > Access Configuration > Federated SSO > JWT**](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/jwt).

The following screen will appear:

![JWT](https://apidocs.lrcontent.com/images/sso-3_3541639188f2c9eb46.76474073.png "JWT")

**Step 2:** Click **+ Add App** option for adding a new JWT app. The following configuration options will appear:

![SSO](https://apidocs.lrcontent.com/images/sso-4_18757639189f5430594.17463479.png "SSO")

**Step 3:** You need to provide or select the following values to add the APP.

- **AppName:** A name that will be used by LoginRadius to identify the provider originating the request. If you have multiple JWT apps, the name should be unique for each. You can use any name, e.g., `comapany_Jwt_app`. This name will be used in LoginRadius to identify your app during API call.

- **Secret Key:** A secret key that would be used to sign the JWT and will later be used to verify the received JWT.

### Recommended Steps for generating the Secret Key

> **Note:** Before generating the secret key the [openssl](https://www.openssl.org/) needs to be installed on your system.

- Generate the public and private keys for the respective algorithm.

| Algorithm           | Public Key Generation Command                                            | Private Key Generation Command                                              |
| ------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| ES512               | openssl ec -in ecdsa-p521-private.pem -pubout -out ecdsa-p521-public.pem | openssl ecparam -genkey -name secp521r1 -noout -out ecdsa-p521-private.pem  |
| ES384               | openssl ec -in ecdsa-p384-private.pem -pubout -out ecdsa-p384-public.pem | openssl ecparam -genkey -name secp384r1 -noout -out ecdsa-p384-private.pem  |
| ES256               | openssl ec -in ecdsa-p256-private.pem -pubout -out ecdsa-p256-public.pem | openssl ecparam -genkey -name prime256v1 -noout -out ecdsa-p256-private.pem |
| RS256, RS384, RS512 | openssl rsa -in rsa-private.pem -pubout -out rsa-public.pem              | openssl genrsa -out rsa-private.pem 2048 29                              |

2. The private key generated in the above steps will be used as a secret key and added to the secret field of the [JWT configuration](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/jwt).

3. The public key will be used to validate the generated JWT Token (on the Client-Side).

**For Symmetric Algo Like HS256, HS384, HS512**

The secret will be a plain string and the same string used to verify the generated JWT token.

> **Note:** Make sure while pasting in the Secret field there should not be one extra line at the end of the certificate.

- **Response Parameter:** The response parameter name in which LoginRadius sends JWT token during JWT SSO flow. After authentication, the redirect URL will contain a JWT under this parameter name. The redirect URL will look like this: `<redirecturi>?<parameter name from admin console>=JWTtoken`

- **Response Mode:** In the JWT redirection flow, JWT token will be returned in the Specified Method.It could be three possible values(Query / Post / Fragment).

- **Algo:** Algorithm to sign JWT. LoginRadius supports the following algorithms:

  - HS256
  - HS384
  - HS512
  - RS256
  - RS384
  - RS512
  - ES256
  - ES384
  - ES512

- **Expiry time in Seconds:** Specify the JWT expiry time, after the specified time token will expire.

  > **Note:** By default expiration time is set to 600 seconds.You can set any natural number as per your requirement but field can't be left as blank.

- **Audiences:** This field is used to add audience in the JWT token.

- **Mapping:** Specify the Key-value pair of LoginRadius profile data points that you want to receive in the JWT payload.

  - Enter any value for the key column (left column), these values will be used as keys for claims in the payload.

  - Select the desired LoginRadius profile field name either through the list or by searching in the profile key (right column). The values for these fields from the customer's profile in LoginRadius will be returned to the JWT payload. Refer to the [LoginRadius data points](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/) document for available profile fields.

  > **Note:** We need to make sure that for some of the profile fields, you will need to use dot notation to access them. For the [Advanced](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) field values in the customer profile, use the dot notation. For example, if the advanced field name is **Position**, enter **Position.Positionsummary** as the attribute value. If you don't find the field in the drop-down list, select **Others** and add the fields's value using dot notation.

Similarly, by clicking the **Add Row** button, you can map multiple attributes.

Some Examples of Field Mappings are:

| Key                      | Profile Key             | Descritpion                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UID                      | Uid                     | This will provide the UID of a profile in normal JSON format.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Phone ID                 | Phone Id                | This will provide the Phone ID of a profile in normal JSON format.                                                                                                                                                                                                                                                                                                                                                                                             |
| Emails                   | Email                   | This will provide the Emails of a profile in an array format.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Fullname                 | Full Name               | Gives Full Name in Json format.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Email                    | Other -> Email[0].Value | If you only want the primary email then theProfile key should be Other and add “Email[0]” in the right input box.                                                                                                                                                                                                                                                                                                                                              |
| Address (Advanced field) | Addresses               | This gives you a detailed address of the customer with city,pin code,state etc.. In a form of array.                                                                                                                                                                                                                                                                                                                                                           |
| Custom field Example     | custom field name       | In a dropdown you can select the custom field name configured as in the Data schema.Then the Custom data will be added in the Payload. **Note:** Custom field will be listed in the drop down when it is only turned on for the Registration form under [Platform Configuration>Authentication Configuration>Standard Login>Data Schema](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema). |
| User Roles               | Other -> Roles          | If you want to map the Role of a user in JWT then select Profile key as **Other** and add “Roles” in the right input box.                                                                                                                                                                                                                                                                                                                                      |

![Admin Console Configuration](https://apidocs.lrcontent.com/images/Admin-Console-Congif-line-160_321156160370d86b036.02884820.png "Admin Console Configuration")

- Click on the Save button to save the configuration.

- **Metadata:** This field is used to add the static non profile value in the JWT Token Payload.

## Post Callback Feature

By default LoginRadius sends the token (Access token), id_token and code as a query parameter in the implicit and hybrid workflows.

However, it is more secure to send the access token as a post parameter. To leverage such functionality, we are supporting Post Callback in the Cloud Redirection APIs.

In the Post Callback, after the login from the Hosted Page, the access token is passed to `return_url` (Callback Url) as the **Post Form Request**. The token is passed in the Post body instead of the Query String. If you want to send the Access token as post parameters instead of QueryString, you can implement this functionality. You can achieve it by changing the Javascript code in the hub file. Here are the steps:

**Step 1:** How to enable Post Callback feature

To Enable Post Callback Feature you need to change the JS code. Because, when you perform the login from the Hosted page, redirection to `return_url` or `profile.aspx` is handled by the JS.

These are the Optional changes, this will not impact any of your implementation, it will work as it is as now.

**Step 2:** The JS File: **default-auth-before-script.js**

The above file is editable by you from the IDX, you can edit Before Script to enable this feature. To enable this feature, you need to change the below function in the Before Script.

**Function Name:** `redirectToReturnUrl`

```
function redirectToReturnUrl(token) {
if (queryString.return_url) {
if (LRObject.util.isCloudApiPostCallbackSupported(queryString.return_url)) {
LRObject.util.postAndRedirect(queryString.return_url, {
"token": token
});
} else {
window.location = queryString.return_url.indexOf('?') > -1 ? queryString.return_url + '&token=' + token : queryString.return_url + '?token=' + token;
}
} else {
window.location = 'profile.aspx';
}
}
```

**Note:**

1. This is the Sample function. You may have some different implementations for this function, So you can make changes to this function according to your Implementation.

2. This feature is not enabled for any customer by default, to enable this you need to change the Before Script function according to the above code snippet.

3. By default, the token will be sent to the query string for the Cloud Redirection callback URLs, (As currently working), So it will not impact any customer implementation.

## Direct Implementation of JWT using LoginRadius APIs

Step 1: First of all, configure a JWT app in your LoginRadius Admin Console. Refer to the [JWT Admin Console Configuration](#admin-console-configuration) section for how to configure JWT in the LoginRadius Admin Console.

Step 2: If you are directly implementing your Login forms or already have an access token or want to generate a JWT based on email/username/Phone number or a password, you can leverage the following APIs:

- [JWT Token](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token/): This GET API is used to exchange access token with your JWT.
- [JWT Token by Email](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token-by-email/): This API is used to get a JWT by Email and Password.
- [JWT Token by Username](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token-by-username/): This API is used to get JWT by Username and password.
- [JWT Token by Phone](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token-by-phone/): This API is used to get JWT by Phone and password.

The response from the above APIs will look like this:

```
{
signature: <JWTresponse>
}
```


## Session Management

- **Expire or Logout the JWT token:** You cannot manually expire a JWT token after it has been created. Thus, you cannot log out with JWT on the server-side as you do with sessions, But there are some methods that will be helpful

  - Set a reasonable expiration time on tokens
  - Delete the stored token from client-side upon log out

- **Logout the Jwt app session on IDX:** If you are leveraging LoginRadius IDX: redirect the users to `https://<site name>.hub.loginradius.com?action=logout&return_url=< your return url>` to invalidate the client side tokens. These will log out the users from the IDX.

- **Refreshing the JWT:** There is no direct way to refresh the JWT token but you can use the [JWT token by access token](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token/) API to generate a new JWT token.

## JWT best practices

Before starting with best practices, it is important to note that many attacks on JWT are related to its way of implementation, instead of its design. This does not mean that they are less critical.

> **Note:** JWTs sign both the header and the payload, while JWTs which are encrypted, they only encrypt the payload and the header is always in a readable format.

We've had a look at basic structure and encryption of JWT now we can have a look at the following list of best practices:

- **Signing key:** The signing key should always be kept secret as anyone having access to this key might validate the signature and can decrypt the payload.

- **Sensitive data in Payload:** The signed tokens protected payload against tampering but JWT payload is readable by anyone. You should not send sensitive data in the payload of a JWT unless it is encrypted.

- **Number of Claims to Payload:** Add the bare minimum number of claims to the payload for the best performance and security.

- **Use HTTPS:** You need SSL/HTTPS to encrypt the communication. Without SSL/HTTPS attackers can sniff the network traffic and obtain the JWT, hence your application is vulnerable to man in the middle attacks.

- **Validate All Claims:**

  - **iss** - The "iss" (issuer) claim identifies the principal that issued the JWT. The "iss" value is a case-sensitive string containing a StringOrURI value. The "iss" value should match to `https://<LoginRadius App Name>.hub.loginradius.com/` to verify the JWT is issued by LoginRadius.

  - **iat** - The "iat" (issued at) claim identifies the time at which the JWT was issued. This claim can be used to determine the age of the JWT. This can be used to reject tokens which you seem too old.

  - **exp** - The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. The processing of the "exp" claim requires that the current date/time MUST be before the expiration date/time listed in the "exp" claim. JWTs have embedded by-value tokens and thus we cannot revoke them very easily, once it is issued and delivered to the recipient. Because of that, you should provide them short expiration (minutes or hours) time.

  - **aud** - valid audience

    The **aud** (audience) claim identifies the recipients that the JWT is intended for. Each principal intended to process the JWT must identify itself with a value in the audience claim. If the principal processing the claim does not identify itself with a value in the aud claim when this claim is present, then the JWT must be rejected. The interpretation of audience values is generally application specific. The Use of this claim is **OPTIONAL**.

  - **nbf** - The expiration time is not the only time-based claim that can be utilized for JWTs verification. The nbf claim has a "not-before" time which means the token should be rejected if the current time value is before the time mentioned in the nbf claim.

    > **Note**: While working with time-based claims keep in mind that server times can differ slightly between different machines. So to overcome this you should consider allowing a clock skew when checking the time-based values. This clock skew values can be of a few seconds, as this would rather indicate problems with the server.

- **Use appropriate Algorithm and perform algorithm verification**

  The JSON Web Algorithms already have a series of recommended and required algorithms, selecting the right one for the desired scenario totally depends upon the customers. Additionally, whenever a JWT needs to be validated, the algorithm must be explicitly selected in such a way that it does not provide attackers control.

  It is recommended to use the Asymmetric algorithm when signing the JWT token. Asymmetric key signatures in JWT are produced by the sender with the private key and the receiver verify it via the public key. The receiver is provided only with the public key which happens **out_of_band** (i.e. through another means of communication than the one you use to exchange the secured data).

- **Storing JWT token in local or session storage**

  From the security perspective, It is not recommended to store JWT in session or local storage as if any of the third-party scripts you include on your page is compromised, it can access the JWT token.

  So it is good practice to store the JWT inside an [httpOnly cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies), this is a special type of cookie that prevents a Cross-Site Scripting exploit from gaining access to the session cookie and hijacking the browser session.

## FAQ’s

- **What is the expiration time of JWT and what is the measurement of time in JWT?**

  By default expiry time of JWT is 600 seconds (10 Minutes). It is shown in the form of seconds in the JWT configuration. The expiry time can be set from 1 second to 2592000 seconds (30 days) as per your use case.

- **Can we use the Access token generated from the Login API to get the JWT token?**

  Yes, the access token generated from the login API can be used to generate the JWT token.

  For e.g: Access token generated by [Auth Login by Email](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email/) API can be used in [JWT token by Access Token](https://www.loginradius.com/docs/api/v2/single-sign-on/federated-sso/jwt-login/jwt-token/) API for getting JWT token.

- **How can we give the permission to our Team members to access the Federated SSO section in the admin console?**

  If your team members can not access the Federated SSO section in the Admin console, following could be the reasons for this:

  - They don’t have the right permissions to access this section in the Admin Console:

    The “API EditThirdPartyCredentials” permission will allow your team member to access this. Please refer to the Manage Team member doc on the list of supported permissions and how to edit the team member permissions: https://www.loginradius.com/docs/api/v2/admin-console/team-management/manage-team-members/

  - Check if your Owner/Admin/Manager/Developer has permission to this section. If they are also not able to access this section, it is likely this feature is not part of your plan. Please reach out to the LoginRadius support teams for further insights.

## Next Steps

The following is the list of documents you might want to look into:

[SSO deployment via JS Libraries](https://www.loginradius.com/docs/single-sign-on/tutorial/web-sso/overview/#partdeployment2)

[Implementation Example of SSO](https://www.loginradius.com/docs/single-sign-on/tutorial/web-sso/overview/#partimplementationexamples7)

[Multipass](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/multipass/)

[OAuth 2.0](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/oauth-2-0/oauth-2-0-overview/)

[Open ID Connect](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/openid-connect/openid-connect-overview/)

[SAML](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/saml/overview/)
