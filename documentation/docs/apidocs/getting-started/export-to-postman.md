## #Postman Support

## Introduction

[Postman](http://getpostman.com/) is a tool that assists with API calls and will speed up the process of API development by saving setup time on API calls after importing the calls to Postman

When you go through the API docs, there will be a button that looks like this:

![postmanpicture](https://run.pstmn.io/button.svg)

Upon clicking it, it'll redirect you to a page where you can export the API calls to Postman. The API calls are divided into their respective sections.

## How to Import

1. Simply go to an API call link such as [here](https://www.loginradius.com/docs/api/v2/cloud-directory-api/identity/get-user-identity/)

Click the button near the middle-right of the page, and import it to Postman.

## Configuration

With our Postman calls, we have configured an environment for you to import.

1. Click <a id="downloadPostManTemplate" onClick = "downloadPostManTemplate()">here</a> to download the environment
2. After downloading, click the gear icon near the top right corner and then click manage environments
   ![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-31-at-11-41-18-AM_censored_12377597f7abeadfc07.30759410.jpg)
3. Then click import and direct it to the environment you just downloaded.
   ![enter image description here](https://apidocs.lrcontent.com/images/Screen-Shot-2017-07-31-at-11-41-25-AM_censored_22171597f7ae15d4699.56868520.jpg)
4. Setup your API Key, API Secret, and Access Token by following these directions from these images
   ![enter image description here](https://apidocs.lrcontent.com/images/image_censored_18975597f790131a642.31842167.jpg)
   ![enter image description here](https://apidocs.lrcontent.com/images/image2_censored_11005597f79233d5423.87175336.jpg)
5. Once your API Key and Secret are setup, you are set to run API calls.

> **Note:** There are some API calls where the params, body, or pre-request scripts of the call will need to be changed to accommodate your API call. Remember to change the body of the call on some of them.

If it is the pre-request scripts, you should see something like
` postman.setEnvironmentVariable("role", "CHANGE_THIS");`
Only change the 'CHANGE_THIS' variable to the respective string
