JWT Login Flow
=================

JWT (JSON web Token) is a popular method of SSO, which is widely used by B2C apps, through this system you can allow your user to log into an app which supports JWT. JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between LoginRadius and your site as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC or other algorithm) or a public/private key pair using RSA. In this flow LoginRadius acts as the Identity Provider and your system acts as the service provider. 

The following Encryption Algorithms are currently supported by LoginRadius for the JWT flows: 

- HS256
- HS384
- HS512
- RS256
- RS384
- RS512
- ES256
- ES384
- ES512

The payload can be fully customized to include data mapping for any LoginRadius normalized User profile fields and this can be configured directly from the LoginRadius Admin Console to control the data mapping as well as the Encryption Algorithm. 

There are three methods of implementing the JWT Login Flows as shown below: 

### Javascript Forms 
This method allows you to leverage all of the standard LoginRadius JS interfaces and upon successful completion of a Login or Social Login action you would receive a JWT token instead of an Access token. 

Follow these steps to retrieve a JWT token via the Javascript interfaces: 

1. Setup the Standard Login or Social Login Forms based on [this document](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started/) or [this demo project](https://github.com/LoginRadius/demo).
2. Add the following parameters to your initialiation Object: 
```
commonOptions.tokenType = "jwt";
commonOptions.integrationName = "<your jwt configuration integration app name>";
``` 
3. You will recieve the standard response that includes the access token and User profile along with the JWT token
```
{
	profile:{<Normalized User Profile>},
	access_token:"<ACCESS Token>",
	expires_in:"<Time Stamp>",
	jwttoken:"<JWT TOKEN Response>"
}
```

### API Generated JWT Tokens

This flow is recommended if you are directly implementing your Login forms or using the Single Sign On flows on your web properties and already have an access token or want to generate a JWT token based on email/username/Phone number or a password via the API. 

The below APIs are used to generate JWT tokens based on different parameters: 

- JWT from Access Token: [link](https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login/get-jwt-token/)
- JWT from Email and Password: [link](https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login/get-jwt-token-by-email/)
- JWT from UserName and Password: [link]https://www.loginradius.com/docs(https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login/get-jwt-token-by-username) 
- JWT from Phone and Password: [link](https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login/get-jwt-token-by-phone)


### Single Sign On Redirect Flow

Also supported is a delegated redirect Single Sign On flow where you can redirect a user to a [LoginRadius Identity Experience Framework](https://www.loginradius.com/docs/api/v2/user-registration/hosted-registration) where the user can do account actions such as: Login, Register, Forgot password etc. Upon successful completion of a login or social login the user will be redirected based on a defined redirect parameter along with the JWT token for this Authentication session. 

More details on this flow can be found here: [Link](https://www.loginradius.com/docs/api/v2/single-sign-on/jwt-login)
