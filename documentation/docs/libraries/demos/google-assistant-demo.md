# LoginRadius Google Assistant Demo

**Google Assistant** is an artificial intelligence-powered virtual assistant developed by Google that is primarily available on mobile and smart home devices. Unlike the company's previous virtual assistant, Google now, the Google Assistant can engage in two-way conversations.

Actions on Google is the official collection of tools, documentation, and APIs for development on the Google assistant service. This document takes you through the process of configuring our Google Assistant Demo that goes over the account linking process.


> **Prerequisites:**
- [Node.js](https://nodejs.org/) needs to be installed on your system. 
- [Npm](https://www.npmjs.com/) needs to be installed in your system.
- Also, make sure that the Google account which you are using to configure this demo has **Web & App** Activity enabled in the [Activity Controls](https://myaccount.google.com/activitycontrols/search).

## Configurations

1. Go to the [Actions on Google Console](https://console.actions.google.com).
2. Create a new **Project** by clicking **Add/import project** and provide a name e.g. **Login Demo**, hit **Create Demo** once you're ready.
3. Go to **SETUP > Invocation** in the left nav, input your invocation name and Directory title, (we recommend using the same name for both)
4. In your [Actions on Google Project](https://console.actions.google.com/u/0/) navigate to **Advanced Options > Account linking** in the left menu and follow the step-by-step instructions from here (https://console.actions.google.com/u/0/).
5. In the **Account creation** field, select **No, I only want to allow account creation on my website**.
6. In the **Linking type** field, choose **OAuth** and **Authorization Code** from the available dropdown.
7. In the **Client ID** field, enter `**<< Your LoginRadius API Key >>**`.
8. In the **Client Secret** field, enter `**<< Your LoginRadius API Secret >>**`.
9. In the **Authorization URL** field, enter the URL: https://cloud-api.loginradius.com/sso/oauth/redirect
10. In the **Token URI** field, enter the URL: https://cloud-api.loginradius.com/sso/oauth/access_token
11. You can leave **Scope** field blank or you can provide desired scopes as per our LoginRadius OAuth 2 Single Sign On. For example, **r_basicprofile**.
12. In the **Testing Instructions** field, add a working test email and password stored in LoginRadius. 

Refer the following gif explaining how to configure the above fields:

![Steps to Set Up Account Linking](https://apidocs.lrcontent.com/images/Untitled_187085b101b533b19b3.66511265.gif "steps to set up account linking")

13. From your **Action on Google** console you will need to get to the action's Dialogflow console, you can do this by going under **Build > Action**.
14. In the Dialogflow console, click on **Create** on the top.
15. Go to **Intents** in the left menu, click on **Create Intent** to create a new intent.
16. Enter your training phrases. Start with **talk to**, **speak to**, **ask** etc. Refer to [here](https://developers.google.com/actions/localization/languages-locales) for more.
17. Enter the default text response. This will be the default response for your action until you link your account with LoginRadius and build your customized response. 
> **Note:** It will return an error if you leave this blank.
18. Under **Fulfillment** and click on **ENABLE FULFILLMENT**.
19. Enable the **Enable webhook call for this intent** option.
20. Click on the **Save** button once you're finished.
21. Click on **Integrations** in the left menu, then click on **Google Assistant**.
22. In the **Explicit Invocation** field, add your invocation/training phrase. For exaample, **talk to**, check **sign in required** checkbox.
23. For the next steps, you will need to deploy the demo explained in the next section.

## Deploying and Executing the Demo

1. Clone the github repo for the demo.
2. Configure the file **index.js** to match your API Key.
3. In your terminal:
   - Run the command `cd` to directory
   - Run the command `npm install`
4. Install node.js and run node index.js` through command line to start your server.
5. In your LoginRadius Admin Console, [whitelist](https://www.loginradius.com/docs/api/v2/admin-console/dev-stagin-sandbox-environment) your server's secure URL: `https://oauth-redirect.googleusercontent.com`
6. Under **Build > Action** go to Dialogflow Admin Console and click **Fulfillment** on the left side menu, and enable the **Webhook** option, enter the secure URL to your server and click on **Save** button.

## Testing

Now that everything is in place, you can either test using the [Actions Simulator](https://developers.google.com/actions/tools/simulator) by clicking "TEST" or via a Google Home device. If you use the Google Simulator and would like to test Account Linking, the simulator will not be able to return the login URL to your phone's Google Home app, instead, you will need to go the Simulator's DEBUG section on the right, and you should be able to find the link under 'debugInfo'.

