Alexa Skills Kit Integration

Alexa Skills Kit (ASK) is the official collection of tools, documentation and APIs for development on Amazon's Alexa voice service. This document goes over the process of using LoginRadius along with the Alexa Skills Kit to enable account linking within your Alexa Skills.

## Configuration

1. This Integration makes use of the [LoginRadius OAuth 2 Single Sign On](https://www.loginradius.com/docs/api/v2/single-sign-on/oauth2-single-sign-on) feature.  We recommend reading the documentation on this feature before proceeding. 

2. Go to your desired [Alexa Skill](https://developer.amazon.com/alexa) and on the left sidepanel click "Account Linking".
![Go to Account Linking](https://apidocs.lrcontent.com/images/GotoAccountLinking_236345b51158047c182.96028951.png "Go to Account Linking")

4. On the "Account Linking" page you can enable the service by clicking the toggle.
![enter image description here](https://apidocs.lrcontent.com/images/Screenshot-2018-07-19-16-18-39_130025b511c8865d4f9.22707110.png "enter image title here")

	Fill out each field as per the instructions provided below:
	
	- **Select an authorization grant type:** Choose "Auth Code Grant".

	- **Authorization URI:**  https://cloud-api.loginradius.com/sso/oauth/redirect

	- **Access Token URI:** https://cloud-api.loginradius.com/sso/oauth/access_token

	- **Client Id:** Your LoginRadius API Key
	
	- **Client Secret:** Your LoginRadius API Secret

	- **Client Authentication Scheme:** From the dropdown choose "Credentials in request body".

	- **Scope:** You must provide the desired scopes as per our [LoginRadius OAuth 2 Single Sign On](https://www.loginradius.com/docs/api/v2/single-sign-on/oauth2-single-sign-on) Documentation. e.g. **r_basicprofile**

	- **Domain List:**

		- Provide the LoginRadius Cloud API Address: 
		
			cloud-api.loginradius.com

		- Your LoginRadius sitename address: 
		
			your-loginradius-sitename.hub.loginradius.com
			
	- **Default Access Token Expiration Time:** To ensure that the token is not stored and usable indefinitely, Amazon allows you to set an expiration time.

	- **Redirect URLs:** Amazon will provide you with a list of addresses to be used for redirecting the user as part of authorization process, make sure you add them in your LoginRadius Admin Console under: 

		Deployment ➔ Configuration ➔ App

	**Note:** If you're building a Smart Home Skill, On the left sidepanel click "PERMISSIONS" and make sure that you do not have "Send Alexa Events" enabled as this will enable an alternative workflow requiring to go through Login With Amazon (LWA) for authentication.

4. Once you have filled out all of the configurations, Account Linking will happen when the user enables the Alexa App or if you're building a Custom Skill you can send a [Link Account](https://developer.amazon.com/docs/account-linking/account-linking-for-custom-skills.html) card via your Alexa Skill. This can be done via the `linkAccountCard` function if you're using the [alexa-skills-kit-sdk-for-nodejs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs). 

5. Account Unlinking happens automatically via the Alexa App when a user disables your skill.

