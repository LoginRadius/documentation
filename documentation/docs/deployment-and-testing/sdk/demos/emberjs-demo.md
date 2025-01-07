# LoginRadius EmberJS Demo

Ember is a JavaScript front-end framework designed to help you build websites with rich and complex user interactions. It does so by providing developers both with many features that are essential in managing complexity in modern web applications, as well as an integrated development toolkit that enables rapid iteration.

## Overview

A key idea behind EmberJS is **convention over configuration**. This [demo](https://github.com/LoginRadius/demo/tree/v2-emberjs-demo) employs conventional practices in building EmberJS web pages, with the purpose of showcasing various parts of the LoginRadius JavaScript library. Note that although EmberJS favors convention, there are still many acceptable ways to integrate the LoginRadius JS library. This demo explores one of those ways.

Features include register, login, social login, email verification, forgot password, and reset the password. Styling is kept to a minimum, allowing for easy customization and extension.

>**Prerequisites**:
> You will need the following things properly installed on your computer.
>* [Node.js](https://nodejs.org/) (with npm)
>* [Ember CLI](https://ember-cli.com/)

## Installation

1. Clone the GitHub repo from [here](https://github.com/LoginRadius/demo/tree/v2-emberjs-demo) 
2. Configure the file `/vendor/loginradius/option.js` to match your credentials.  

> **Note: make sure you fill out all of the fields to prevent unexpected behavior.**
3. On terminal or any command prompt run:
    * `cd to the directory`
    * `npm install`

## How to Run

* `ember serve`
  * Visit your app at [http://localhost:4200](http://localhost:4200).

## Noted Differences between Plain-HTML/CSS/JS & EmberJS:

* Importing LoginRadiusV2 library:

  * **Problem**: Invoking a LoginRadiusV2 singleton
  * **Solution**: Place option.js under `vendor` folder, and as usual, call `var LRObject = new LoginRadiusV2(commonOptions)`. Import using the asset manifest file `ember-cli-build.js`, with the line `app.import('vendor/loginradius/option.js')`.

* Deploying the LR interfaces on the DOM:
   
   **a.**
  * **Problem**: Where to bind DOM elements and initialize LRObject interfaces?
  * **Solution**: Use components, and the lifecycle hook `didInsertElement()`. After the component is successfully rendered, `didInsertElement()` will be triggered.

   **b.**
  * **Problem**: Writing the methods correctly, the LR interfaces do not appear on the DOM.
  * **Solution**: Get rid of the `LRObject.util.ready` wrapper.

    ```
    // BEFORE //
    LRObject.util.ready(function() {
        LRObject.init('registration',registration_options);
    }
    
    // AFTER //
    LRObject.init('registration',registration_options);
    ```

    * This will not cause unexpected errors as long as LRObject is properly initialized in option.js, and option.js file is imported in `ember-cli-build.js`.

* Deploying the Social Login interface on the DOM (using components):

  * **Problem**: Ember templates do not allow script tags, and so the custom interface provided in the [docs](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#sociallogin8) cannot be used.
  * **Solution**: [Programmatically create links](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#_programmatic-link-creation_).