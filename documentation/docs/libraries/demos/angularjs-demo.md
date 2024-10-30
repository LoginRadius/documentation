# LoginRadius AngularJS Demo

## Overview

AngularJS is a JavaScript-based open-source front-end web framework maintained to address many of the challenges encountered in developing single-page applications

This document contains all of the details for our LoginRadius AngularJS [demo](https://github.com/LoginRadius/demo/tree/v2-angularjs-demo). This demo is a simple single page website that allow different views to be shown in different conditions using AngularJS features. This demo demonstrates ease of implementation, getting a centralized look and feel, and customizability. 


## How to Run
This guide will take you through all the necessary steps that you need to follow for installing and running the Angular JS Demo.

>**Prerequisites:** 
>- NPM installed (Link [here](https://nodejs.org/en/download/) to download)

1. First of all you need to download our [demo](https://github.com/LoginRadius/demo/tree/v2-angularjs-demo) from our GitHub repository.

2. Configure the file `/app/app.js` to match your credentials.  

> **Note:** Make sure you fill out all of the fields to prevent unexpected behaviour.

Running this application, on terminal or any command prompt run:
   1.  ` cd to directory `
   2.  `npm start ` **Note: this will trigger `npm install` and `Bower install`**
   3. Now browse to the app at `localhost:8000`

## Noted Differences between Plain-HTML/CSS/JS & AngularJS:

* The main difference between using the LoginRadiusV2.js alone and using it with AngularJS is that you need to invoke the LoginRadiusV2 Singleton which means there will be only one instance of this class at a time.

  * **Problem**: Invoking the LoginRadiusV2 Singleton with AngularJS:
  * **Solution**: To invoke the LoginRadiusV2 you'll need to use:
  ```$scope.LoginObject = window.LoginRadiusV2($scope.commonOptions)``` 
  as shown in *app/app.js* 

* Redirect to Profile Page when login successfully.

  * **Problem**: Since this demo is single page, after log in, it won't show the profile by redirecting to other page.
  * **Solution**: Using flags to hide input options and show the profile by AngularJS apply function:
  ```$scope.$apply();```
  (you may need to replace $scope.$apply() with the helper function'safeApply' defined in app.js)