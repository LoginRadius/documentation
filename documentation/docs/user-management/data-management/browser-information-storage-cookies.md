# Browser - Data Storage & Cookies

---

This section goes over the storage methods and Cookies used in the LoginRadius System.

## Internet Explorer
For IE browsers we do the following three things to make sure all of the LoginRadius services function correctly:

- HTML5 >IE8 : >IE8 doesn’t support HTML5, so we do not support HTML5 technology on >IE8 browsers for social login.

- postMessage across domain windows: IE browsers do not provide postMessage for child popup windows. To support this, this we use ‘#’ communication workaround, we do redirection in child window to parent window’s site with the token as part of a URL hash. We then read the token, pass it to the parent, and then close the child window.

- SSO Cookie: IE doesn’t allow setting Cookies on a site that is not actually visited by a user, but IE provides a way to do this by setting up P3P header. We do not set this header and IE allows us to set Cookies for SSO.

## Safari

- Single Sign-On- Safari doesn’t allow setting Cookies on a site that is not actually visited by a user, so it is very difficult for a Single Sign-On service to set the Cookie using JSONP requests. LoginRadius SSO API handles the process in the Safari browser by redirecting users to a unique LoginRadius site subdomain (`< LoginRadius-site-Name >.hub.loginradius.com`) and sets the browser Cookie to enable Single Sign-On.

- Private Mode- In Safari private mode, storage for your browser is disabled, which means you cannot use your session storage or local storage to keep the LoginRadius token. The solution for this scenario is first detecting if the storage is disabled. If so, we use URL hash to pass the access tokens instead of doing it within the storage.

## iOS

- For iOS Safari and Chrome, both of them are having issues with child window popups and redirects, in addition to some webkit bugs. It affects our normal social login flow on iOS devices. The fix for these issues is to first detect if the loading device is an iOS device, then set the Social Login parameter to make it use the same window and do the social login instead of popping up.

##Browser Data Storage
The Local Storage is used to store the access token after authentication and will have an expiration time. Please see the information below:

| Name        | Domain       | Type                       | Age(days)       | Product Feature                                | Description                                 |
| ----------- | ------------ | -------------------------- | --------------- | ---------------------------------------------- | ------------------------------------------- |
| lr-user-uid | Your Website | LocalStorage (persistence) | Clear on Logout | UserRegistration                               | The account ID (UID) of the logged in user. |
| LRTokenKey  | Your Website | LocalStorage (persistence) | Clear on Logout | User Registration and HTML5 based Social Login | Logged in users Access Token                |

## Browser Cookies
The Browser cookies are used during Social Login, User Registration, Single Sign-on and Social Sharing Analytics. Please see the information below:

### On `<Your LoginRadius Site Name>.hub.loginradius.com` domain:

| Cookie Name            | Domain         | Type        | Age(days) | Product Feature   | Description                                                                                                                                                                          |
| ---------------------- | -------------- | ----------- | --------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isaccesstoken          | Custom Domain^ | Persistence | 30¹²      | Social Login      | If request is coming for access token, LoginRadius has the option to get either the access token or the request token. The access token can be used for direct client-side requests. |
| IsMobileTechnology     | Custom Domain^ | Persistence | 30¹²      | Social Login      | If Social Login is requested from a mobile device, this value is set.                                                                                                                |
| provider               | Custom Domain^ | Persistence | 30¹       | Social Login      | Provider Name for initiated Social Login                                                                                                                                             |
| isSameWindowCallback   | Custom Domain^ | Persistence | 30¹²      | Social Login      | This controls whether or not the request will callback to the child window.                                                                                                          |
| Callback URL           | Custom Domain^ | Persistence | 30¹       | Social Login      | After successful Social Login Loginradius will return to this URL.                                                                                                                   |
| _account_linking_      | Custom Domain^ | Persistence | 30¹²      | Social Login      | If Social Login requests linking of another social account.                                                                                                                          |
| Is_error_redirect      | Custom Domain^ | Persistence | 30¹²      | Social Login      | If an error occurs return to call back with the error message.                                                                                                                       |
| custome_token_response | Custom Domain^ | Persistence | 30¹       | Social Login      | If the callback type has been changed from default                                                                                                                                   |
| _tok_                  | Custom Domain^ | Persistence | 30        | Social Login      | The stored access token after successful login, with AES encryption.                                                                                                                 |
| _htok_                 | Custom Domain^ | Persistence | 30        | Social Login      | Stored HMAC-SHA1 hash of 'tok' cookie to prevent tampering or malicious use.                                                                                                         |
| lr-session-token       | Custom Domain^ | Persistence | Long-time | User Registration | Store access token for hosted page.                                                                                                                                                  |
| lr-user--token         | Custom Domain^ | Persistence | Long-time | User Registration | Store token to compare with the new token in SSO. This helps control the login process.                                                                                              |

¹: After Social Login request is finished, this Cookie will be expired. So the actual age of this Cookie would be the request time.

²: These Cookies are boolean type and they are created only when value is set to true.

^: LoginRadius Custom Domain for your site : `<Site-Name>.hub.loginradius.com` OR if you have `CNAME` masking feature for your LoginRadius account then the Cookie will be created on your website domain.
The LoginRadius system also utilizes Session Storage to store some account details.

### On your site’s domain:
| Cookie Name            | Domain        | Type       | Age       | Product Feature               | Description                                                                                           |
|------------------------|---------------|------------|-----------|-------------------------------|-------------------------------------------------------------------------------------------------------|
| LRTokenKey             | Your Website  | Persistence | Long-time | Customer Registration          | To maintain the token on your website, ensuring session synchronization across different SSO sites. |
| **lsuid**              | Your Website  | Persistence | Long-time | Social Sharing Analytics       | Visitor's Unique ID based on the session.                                                             |
| **lsurl**              | Your Website  | Persistence | Long-time | Social Sharing Analytics       | MD5 of the current page URL to prevent recapturing of data.                                          |
| LRTraditionalLogin     | Your Website  | Persistence | Long-time | Customer Registration          | To maintain that the login was traditional (email, phone, or username).                              |
| lr-rememberme          | Your Website  | Persistence | Long-time | Customer Registration          | To maintain that the user has checked the "remember me" option.                                      |
| lr-user-uid            | Your Website  | Persistence | Long-time | Customer Registration          | To keep all functionality based on the user ID after login.                                          |
| lr2fatok               | Your Website  | Persistence | Long-time | Customer Registration          | To handle Multi-Factor Authentication.                                                                 |
| lrotpauthver           | Your Website  | Persistence | Long-time | Customer Registration          | To maintain whether OTP verification is done.                                                         |
| lrgaauthver            | Your Website  | Persistence | Long-time | Customer Registration          | To maintain whether verification by the Google Authenticator app is done.                             |

