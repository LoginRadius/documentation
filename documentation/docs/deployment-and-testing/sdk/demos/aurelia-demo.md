# LoginRadius Aurelia Demo

## Overview
Aurelia is a collection of Modern JavaScript modules, which when used together function as a powerful platform for building browsers, desktop, mobile applications, all open-source, and built on open web standards.

This [demo](https://github.com/LoginRadius/demo/tree/v2-aurelia-demo) shows how to use the LoginRadius JavaScript library - available through CDNs - in the context of the Aurelia framework.

This document will cover three subsections which are as follows:

- [Getting Started](#getting-started)
- [Features Implemented](#features-implemented)
- [Important points to remember while working on Aurelia Demo](#important-points-to-remember-while-working-on-aurelia-demo)

## Getting Started
This section will explain the steps included in the setup of the Aurelia Demo and how to run the demo.


> **Prerequisites**: 
>- Basic knowledge of JavaScript.
>- Node.js needs to be installed.  You can download Node.js using this: https://nodejs.org/en/

**Step 1**: Clone the GitHub repository and the branch corresponding to this demo from [here](https://github.com/LoginRadius/demo/tree/v2-aurelia-demo).

**Step 2**: Modify the file under `src/util/config.ts` by filling in your credentials. Specifically, you need to provide three credentials associated with your account: LoginRadius API key, application name, and SOTT. You can find these credentials on your LoginRadius Admin-console.

**Step 3**: Follow the below steps on a terminal or on command prompt :
- Navigate to the base directory of the repository.
- Type: `npm install`.
- Type: `npm install -g aurelia-cli`. (You might have to do `sudo npm install -g aurelia-cli` for permission reasons)
- Type: `au run`.

## Features Implemented

The following functionalities are implemented in this demo:
- Login
- Social Login
- Registration
- Email verification
- Password reset ('forgot password')
- Password change

> **Note**: After successfully logging in, this demo displays the email ID, first name, and last name associated with the account. Your application does not have to be limited to displaying only these fields after retrieving user data. Only these values have been displayed in this demo just to keep it simple.

## Important points to remember while working on Aurelia Demo

Following are some key points you need to keep in mind when implementing the LoginRadius services using the Aurelia Demo:

**TypeScript**:
Aurelia supports both ESNext and TypeScript. TypeScript is used in this demo. In TypeScript, you can only access (and add) properties and functions of an object if they are part of the object's type.

- **Problem**: The following will not work for accessing the LoginRadiusV2 constructor loaded through the script tag in the index.ejs file: `... = new window.LoginRadiusV2(<options>)`. You will get an error like the following when compiling the project: `Property 'LoginRadiusV2' does not exist on type 'Window'`.

    **Solution**: Typecast the window object to type any \ and store the new object in a variable. Use that variable to access the LoginRadiusV2 constructor as well as storing the singleton LoginRadius object. You can see the code in the `src/util/utilities.ts` file.

**Scope**:

The **util.ready() wrapper** of the LoginRadiusV2 object is used to call the init method when the LoginRadiusV2 object is ready to satisfy the request. The code using the LoginRadiusV2 object is inside a class here (Aurelia view-model src/components/main-page.ts). The LoginRadiusV2 object has been defined as a property of the class, so you can access it using `this` keyword as follows: `this.LoginRadius`. 

- **Problem**: However, the following syntax will not work when using the **util.ready() wrapper**:

```
        this.LoginRadius.util.ready( function(){
        this.LoginRadius.init(<action>, <action_options>)});
```

The callback function does not have the same scope as the code outside of it and thus `this.LoginRadius` does not refer to the class variable. 

**Solution**: Use arrow function syntax:

```
    this.LoginRadius.util.ready( () =>
    this.LoginRadius.init(<action>, <action_options>));
```















