# Login Security

---

As part of Customer Identity and Access Management, LoginRadius provides you with the ability to have control over your user logins, from locking accounts based on excessive failed attempts to enforcing logouts on password changes.

There are three available options in the Session Management tab which can help you with Login Security:

- [Token Lifetime](#token-lifetime)
- [Force Lockout](#force-logout)
- [Remember Me](#remember-me)

You can find these in the LoginRadius Admin Console under:

Platform Security ➔ Account Protection ➔ Session Management

## Token Lifetime

This section displays the access token lifetime currently set for your LoginRadius site. Please contact LoginRadius support
if you wish to change this.

## Force Logout

The Force Logout option allows you to expire all of the active sessions of a user when a reset password or change password event occurs for that user.

## Remember Me

Enabling the Remember Me option will cause a "Remember Me" checkbox to show up on your Login prompts using the LoginRadius JavaScript Interfaces. If selected the user will receive a "Remember Me" token that will allow them to stay
logged in, even after closing the browser. You are also able to specify how long you would like this token to last in the "Token Expiry Time" field.

**Note**: The Remember Me token can only be set to expire at a time thatis less than that of the access token.

Review our [Session Management](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/session-management/) documentation for more details.
