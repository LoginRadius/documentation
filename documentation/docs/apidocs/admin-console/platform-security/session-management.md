# Session Management

There are multiple ways that LoginRadius supports for maintaining and controlling the user login session. Below is the list:

### Token Lifetime

- An **Access Token Lifetime** is the amount of time a customer is logged in to your application until it expires and prompts the customer to log back in. 

- A **Refresh Token Lifetime** is the duration for which the refresh token is allowed to refresh the active access token for continuing the ongoing session. This allows you to extend the lifetime access tokens without having to login multiple  every time one expires.

### Force Logout

If enabled, upon Password Reset or Password Change, it will expire all active sessions of a customer except the session in which the password has been reset/changed.

### Remember Me

You can enable the Remember Me option to have the customers remain logged in even after the browser closes until the access token expires.

For more information about the configuration of the above way, please refer [here](https://www.loginradius.com/docs/authentication/concepts/session-management/).