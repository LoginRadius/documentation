# LoginRadius Preact Demo

## Overview

Preact is a venture to recreate the core value proposition of React using a small amount of code as possible, with support for ES2015. Currently, the size of the library is around 3kb (minified & gzipped).

This demo shows how to use the LoginRadius JavaScript library - available through CDNs - in the context of the Preact framework.

## How to Run

This guide will take you through all the necessary steps that you need to follow for installing and running the Preact Demo.

> **Prerequisites**  
> - You need to have previously installed Node.js in order to run this demo. You can download Node.js here: `<https://nodejs.org/en/>`

**Steps**:

1. Clone the GitHub repository and the branch corresponding to this demo from [here](https://github.com/LoginRadius/demo/tree/v2-preact-demo).
2. Modify the file under ./src/util/config.json by filling in your credentials. Specifically, you need to provide three credentials associated with your account: LoginRadius API key, application name, and SOTT. You can find these credentials on your LoginRadius Admin-console.
3. On a terminal or command prompt:
   - Navigate to the base directory of the repository.
   - Type: `npm install`.
   - After package installation, type: `npm run build`.
   - After build, type: `npm start`.

## Features implemented

For simplicity purposes, this demo implements only some of all of the functionality available through the LoginRadius JavaScript library, including:

- Registration
- Login
- Social login
- Password reset ('forgot password')
- Request email verification resend
- Password change
- Email management

## Key Points

Following are some key points you want to keep in mind when implementing the LoginRadius services using the Preact framework:

- Most of the time, you want to instantiate the LoginRadiusV2 class only once, following the singleton design pattern. This is the case in this demo. Function getLoginObject() in ./src/util/getLoginObject.js ensures this by always returning the same LoginRadiusV2 object.
- Given the similarities between React and Preact, it _might_ be useful to read the "Noted Differences in React" section in the [React demo](https://www.loginradius.com/docs/api/v2/deployment/demos/react-demo).
