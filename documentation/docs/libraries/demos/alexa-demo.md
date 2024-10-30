# LoginRadius Alexa Demo

## Overview

Alexa Skills Kit (ASK) is the official collection of tools, documentation, and APIs for development on Amazon's Alexa voice service. This document goes over with the process of configuring our Alexa Demo with the account linking process.

>## Prerequisites
>- [Node.js](https://nodejs.org/) (with npm)
>- [Npm](https://www.npmjs.com/)
>- Aws Server

## Configure

This section will take you through all the necessary steps that you need to follow for configuring the Alexa Demo.

1. Navigate to [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) and click on **Create skill** option. It will open the next page where you should enter the name of Skill. Select   **Custom** model from "Choose a model to add to your skill". Once done, click on **Create skill**.  
   ![Create Skill](https://apidocs.lrcontent.com/images/image8_186635f0f71bae2b642.96623224.png  "Create Skill")

2. Navigate to the next page and the following screen will appear and  choose the template as **Start From Scratch**.

   ![Start](https://apidocs.lrcontent.com/images/image6_81095f0f71f7245030.46296556.png "Start")

3. Navigate to the next page and the following screen will appear. From the left hand side menu, click on Invocation. Now add **Skill Invocation Name**. This invocation name will be used to begin an interaction with a particular custom skill.

   ![Invocation](https://apidocs.lrcontent.com/images/image11_21065f0f73db9c2874.23445844.png  "Invocation")

4. Now, to configure **endpoint**, you have to provide **ARN of Aws Lambda function** if you have selected service endpoint type as "**AWS Lambda ARN**". You can get ARN when the lambda function is completely configured.

   ![endpoint](https://apidocs.lrcontent.com/images/image4_4505f0f74405f14f3.83529475.png "endpoint")

5. To Build your skills model, you need at least one **Utterances**. In other words you can say that utterance is a phrase a customer can speak to invoke the intent. To add that, click on **Intents** from the left-hand side menu and add one **intent** with any name of your choice and add the required utterances as shown in the following screenshot. Once done click on "**Save Model**".

   ![Utterances](https://apidocs.lrcontent.com/images/image12_299875f0f745862da86.90540166.png "Utterances")

6. Now, to configure account linking with LoginRadius, go to account linking section at the bottom left as shown in the following screenshot:

   ![Account Linking](https://apidocs.lrcontent.com/images/image10_313655f0f74c39ac992.46898702.png "Account Linking")

7. On the "Account Linking" page you can enable the service by clicking the toggle. Enable the toggle option to allow customers to create an account or link to an existing account, as shown in the following screen:


   ![LinkSetting](https://apidocs.lrcontent.com/images/image5_304385f0f7538658772.91493901.png "LinkSetting")

   You need to fill each field as per the instructions provided below:
   - In **settings** uncheck "Allow users to enable skill without account linking"
   - **Select an authorization grant type**: Choose "Auth Code Grant".
   - **Authorization URI**: https://cloud-api.loginradius.com/sso/oauth/redirect
   - **Access Token URI**: https://cloud-api.loginradius.com/sso/oauth/access_token
   - **Client Id**: `<< Your LoginRadius API Key >>`
   - **Client Secret**: `<< Your LoginRadius API Key >>`
   - **Client Authentication Scheme**: From the dropdown, select "Credentials in request body".
   - **Scope**: You must provide the desired scopes as per our [LoginRadius OAuth 2 Single Sign On](https://www.loginradius.com/docs/api/v2/single-sign-on/oauth2-single-sign-on) Documentation. e.g. **r_basicprofile**
   - **Domain List**:
   - Provide the LoginRadius Cloud API Address: cloud-api.loginradius.com
   - Your LoginRadius sitename address: your-loginradius-sitename.hub.loginradius.com
   - **Default Access Token Expiration Time**: To ensure that the token is not stored and usable indefinitely, Amazon allows you to set an expiration time.
   - **Redirect URLs**: Amazon will provide you with a list of addresses to be used for redirecting the Customer as part of the authorization process, make sure you add them in your LoginRadius Admin Console under: Deployment ➔ Configuration ➔ App

8. Once you have filled out all of the configurations, Account Linking will happen when the customer enables the skills on **Alexa App** or if you're building a Custom Skill, you can send a [Link Account](https://developer.amazon.com/docs/account-linking/account-linking-for-custom-skills.html) card via your Alexa Skill. This can be done via the linkAccountCard function if you're using the [alexa-skills-kit-sdk-for-nodejs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs).

9. Account Unlinking happens automatically via the Alexa App when a customer disables your skill.

10. For the next steps, you will be required to deploy the demo and complete steps to steps have been explained in the next section.


## Deploy and Run the demo

### Steps to configure Alexa Demo on Aws Using Lambda  Function

### Create a deployment package for Aws Lambda



1. Clone the [GitHub repo](https://github.com/LoginRadius/demo/tree/v2-alexa-demo) for the demo. 
2. Configure the file index.js to match your API Key.
3. Add Alexa Skill Id in index.js File, you will get skill id while configuring Alexa Skill.
In your terminal:
     - cd to directory
     - npm install

4. Go to the root directory of  "**demo-alexa-customer-identity**" and select all files and folder and create a zip archive.

  ![AlexaArchive](https://apidocs.lrcontent.com/images/AlexaArchive_228425d8bd7d875d1c8.55788494.png "AlexaArchive")

5. This zip Archive should be uploaded to [Aws](https://s3.console.aws.amazon.com/) Lambda function

## Aws Lambda Setup 


### Step to Create Lambda Function

1. First of all select  "Author from Scratch" and provide function name as per choice and click on create a function to create a new lambda function.

   ![Lambda](https://apidocs.lrcontent.com/images/image1_182285f0f764be16712.96381612.png "Lambda")

2. After creating a lambda function, add trigger "Alexa Skill Set" Which you get in Trigger Configuration and add Skill Id for Alexa Skills Kit.

   ![Trigger](https://apidocs.lrcontent.com/images/image2_58345f0f76e7319de4.67812455.png "Trigger")

3. Now select your Lambda function and select code entry type "Upload a Zip file" and Upload your deployment package.

   ![Upload](https://apidocs.lrcontent.com/images/Upload_196345d8bd8b62b72f8.26077898.png "Upload")

4. Copy ARN and use this ARN URL as a default endpoint in Alexa skills configuration.

   ![ARN](https://apidocs.lrcontent.com/images/ARN_121825d8bd90434a455.09457776.png "ARN")


## Testing

Now that everything is in place, you can test it on Alexa Test Simulator. 
- Go to Alexa Test simulator and invoke your invocation name followed by "alexa ask" like if your invocation name is" loginradius api" then you simply say "alexa ask loginradius api".

![test](https://apidocs.lrcontent.com/images/Test_177625d8bd942218c07.97689998.png "test")

- You will get account linking response if your login radius account is not linked with Alexa.
- To test linking feature of LoginRadius Account with Alexa go to Skills and Games Section of Alexa Application  and here you will find development  skills in "Your Skills" tab, once you find you skill you need to enable it and it will redirect you to loginradius hosted page and after successful login your account is linked with Alexa App .


