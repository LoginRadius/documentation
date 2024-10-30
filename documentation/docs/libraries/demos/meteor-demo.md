# LoginRadius Meteor Demo

Meteor is a full-stack JavaScript platform for developing modern web and mobile applications. Meteor includes an essential set of technologies for building connected-client reactive applications, a build tool, and a curated set of packages from the Node.js and general JavaScript community.
This is an open-source demo, which means you are free to download and customize the functions based on your specific application needs. 

This documentation presumes familiarity with the client-side implementation of the LoginRadius interfaces as this document will show you how to use the LoginRadiusV2.js JavaScript interfaces in MeteorJS. Additional details on this can be found in the [getting started guide](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/getting-started). Get a full demo [here](https://github.com/LoginRadius/demo/tree/v2-meteor-demo).

> **Prerequisite**: 
You will need the following installed on your computer:
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (with npm)
- [MeteorJS](https://v2-docs.meteor.com/install.html)

##Quickstart Guide

To begin, obtain your [API credentials](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/) from the LoginRadius Admin Console.

- Clone repository from [here](https://github.com/LoginRadius/demo/tree/v2-meteor-demo).
- cd into directory and run the following commands in sequence:
  - `meteor npm install`
  - `cp settings.json.sample settings.json`
  - Open the newly created `settings.json` and replace the values with your own
  - Run `meteor --settings settings.json` and visit `localhost:3000` to see the demo in action

## Features implemented

This demo implements the following functionality available through the LoginRadiusV2.js library:

- Registration
- Login
- Social login
- Password reset ('forgot password')
- Password change

##Demo

Download the MeteorJS demo project [here](https://github.com/LoginRadius/demo/tree/v2-meteor-demo).

## Keypoints

Following are some key points you want to keep in mind when implementing the LoginRadius services using MeteorJS:

- Remove all mentions of `LRObject.util.ready(function()` when implementing the LoginRadius JavaScript interfaces. Otherwise, the wrapper will wait for the DOM to be fully loaded before running and rendering the requested forms.
- The LoginRadius object in this demo was initiated in `App.jsx` and stored in the state and passed down to child components when necessary; this does not have to be the only way of approaching this. If you do choose this method, note that the object must be made available as a global variable to the browser for the social login menu to render correctly.

For more information, visit /api/v2/deployment/js-libraries/getting-started

## Implementation notes

Should you decide to implement LoginRadius on a fresh install of MeteorJS, you will need to make the following changes:

- Add `<script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>` to your `main.html` inside the `<head>` tag.
- Add the following to your `main.html` inside the `<body>` tag to load the social login buttons:

```
<script type="text/html" id="loginradiuscustom_tmpl">
    <a class="lr-provider-label" href="javascript:void(0)" onclick="return LRObject.util.openWindow('<#= Endpoint #>');" title="<#= Name #>" alt="Sign in with <#=Name#>">
      <#=Name#>
    </a>
  </script>
```

- Create a Meteor method in `/client/imports/api` to retrieve sensitive variables from `settings.json`
- You will need to generate the [SOTT](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage) or configure reCAPTCHA for the registration form interface, and you can see how this demo implements generating the SOTT via API in `/imports/api/options.js`
- Call the Meteor method in your React component, which will return the options object you can then use to initiate the LoginRadius interface.