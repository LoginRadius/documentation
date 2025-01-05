# LoginRadius Angular 6 Demo

## Overview

Angular 6 is a TypeScript-based web application framework which is a complete rewrite of AngularJS. This [demo](https://github.com/LoginRadius/demo/tree/v2-angular4-demo) uses the component-based structure of a basic Angular 6 application to demonstrate the basic features of the LoginRadius library. Almost each of the actions run by the LoginRadius singleton is placed within a corresponding component on the web page.

This document will cover two subsections which are as follows:

- [Getting Started](#getting-started)
- [Important points to remember while working on an Angular 6 demo](#important-points-to-remember-while-working-on-an-angular-6-demo)

## Getting Started
This guide covers all the necessary steps that you need to follow for installing and running the Angular 6 Demo.

> **Prerequisites**:
To run the demo [Node.js](https://nodejs.org/) (with npm) tools must be installed:

**Step 1**: Clone the Github repository from [here](https://github.com/LoginRadius/demo/tree/v2-angular4-demo). 

**Step 2**: Configure the file `/src/app/commonOptions.ts` to match your credentials.

> **Note**: Make sure you fill out all of the fields to prevent unexpected behavior.

**Step 3**: On terminal or on command prompt navigate to the demo directory and run `npm install`

**Step 4**: In the demo's root directory, run `ng serve`  or  `npm start`

**Step 5**: Access localhost at the port displayed after completing **Step 4**.

## Important points to remember while working on an Angular 6 demo

Below are some of the main difference between using the **LoginRadiusV2.js** directly and using it along with **Angular 6**.

1. **Problem**: Angular 6 supports a modular approach while designing a single page application.

    **Solution**: A component is created for each action the demo references. Components are created for registration, logging in, social login and the forgot password prompt. Email verification and password reset actions are stored in the components for registration and forgot password, respectively.

2. **Problem**: The LoginRadiusV2.js script is unusable with Angular when imported through the **HTML/DOM**.

    **Solution**: Download the **LoginRadiusV2.js** from the source at https://auth.lrcontent.com/v2/js/LoginRadiusV2.js and save it in the project’s assets directory. In `angular.json` file at the root of the project, including the saved file in the build > scripts section. 

> **Note**:  You can take reference of the angular.json file in our angular [demo](https://github.com/LoginRadius/demo/tree/v2-angular4-demo).

When initializing the LoginRadiusV2 object in TypeScript, `declare function LoginRadiusV2(commonOptions): void;` should be called before the object is initialized.


> **Note**:  You can take reference of `src/app/commonOptions.ts`  file in our angular demo.

3. **Problem**: The init functions can only be called when Angular allows functions to be executed.

    **Solution**: All the options for the LoginRadiusV2 Singleton are prepared before runtime as a property of its respective component class. For example, in `src/app/social/social.component.ts`, the options are prepared outside of any class functions. The initialization functions of the Singleton take place during runtime, so the init function is called within the ngOnInit function, which runs after all data properties have been checked, and the application has started running.

4. **Problem**: Setting the custom interface template for the social login.

    **Solution**: When creating the HTML template for the social login interface, the template should not be placed in the social components HTML but instead in the `index.html` at the root of the project. Reference `index.html` and `src/app/social/social.component.html` for the difference. In addition, the custom interface template has been slightly modified to account for variable scoping. The openWindow function of the LoginRadiusV2 singleton is not called and a new tab is opened for the social login instead.











