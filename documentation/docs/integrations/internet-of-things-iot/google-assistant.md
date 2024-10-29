# LoginRadius Google Assistant Integration

## Overview

Actions on Google is the official collection of tools, documentation and APIs for development on the Google assistant service. This document goes over the process of using LoginRadius along with Actions on Google to enable account linking.

Before you follow the steps in this doc, you should also make sure that the Google account you are using for this has Web & App Activity enabled in the [Activity Controls](https://myaccount.google.com/activitycontrols/search).

### Configuration

1. Go to the [Actions on Google Console](https://console.actions.google.com)
2. In your [Actions on Google Project](https://console.actions.google.com/u/0/) go to Advanced Options > Account linking in the left nav through [here](https://console.actions.google.com/u/0/) and follow up the step-by-step instructions.

- **Account creation:** Select "No, I only want to allow account creation on my website".
- **Linking type:** From the available dropdowns choose "OAuth" and "Authorization Code".
  - **Client ID:** Your LoginRadius API Key
  - **Client Secret:** Your LoginRadius API Secret
  - **Authorization URL:** https://cloud-api.loginradius.com/sso/oauth/redirect
  - **Token URI:** https://cloud-api.loginradius.com/sso/oauth/access_token
  - **Scope:** You can leave this blank or, you can provide desired scopes as per our LoginRadius [OAuth 2 Single Sign On](https://www.loginradius.com/docs/api/v2/single-sign-on/oauth2-single-sign-on). e.g. `r_basicprofile`
  - **Testing Instructions:** Provide a working test email and password stored in LoginRadius.
    ![Steps to Set Up Account Linking](https://apidocs.lrcontent.com/images/Untitled_187085b101b533b19b3.66511265.gif "steps to set up account linking")
- **Enable Fulfillment:** From your ['Action on Google' console](https://console.actions.google.com/u/0/) you will need to get to the action's Dialogflow Admin Console, you can do this by going under Build -> Action, Once you're in the Dialogflow Admin Console go to the Intent you wish to use this integration with and select 'Enable webhook call for this intent'.
- Click 'save' once you're finished.

3. Make sure you [whitelist](https://www.loginradius.com/docs/api/v2/admin-console/deployment/sandbox-environments/) in your LoginRadius Admin Console:  
   a. your server's secure URL.  
   b. `https://oauth-redirect.googleusercontent.com`
4. In the Dialogflow console, go to 'Fulfillment' on the left side menu, and enable the Webhook option, enter the URL to your server and hit save.
5. Click on 'Integrations' in the left navigation menu, then click 'Google Assistant'
6. In the Explicit invocation field, input your invocation/training phrase, eg, 'talk to `invocation name`', check 'sign in required' checkbox.

### Customizing your code

Google will automatically handle the OAuth Authentication for you and allow you to access the access_token returned by LoginRadius after a succesful authentication.

The LoginRadius access_token can easily be accessed using the [actions-on-google](https://www.npmjs.com/package/actions-on-google) Node.js library at the following location:

`conv.user.access.token;`

If you would like to have an example, you can you can take a look at our sample demo [here](https://www.loginradius.com/docs/api/v2/use-cases-demo/google-assistant-demo).

### Testing

Now that everything is in place, you can either test using the [Actions Simulator](https://developers.google.com/actions/tools/simulator) by clicking "TEST" or via a Google Home device. If you use the Google Simulator and would like to test Account Linking, the simulator will not be able to return the login url to your phone's Google Home app, instead you will need to go through the Simulator's DEBUG section on the right, and you should be able to find the link under 'debugInfo'.
