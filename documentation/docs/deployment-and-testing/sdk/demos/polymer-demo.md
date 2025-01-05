# LoginRadius Polymer Demo

This document contains all details regarding our LoginRadius Polymer 3.0 [demo](https://github.com/LoginRadius/demo/tree/v2-polymerjs-demo). This demo has been implemented as a single page application using the polymer-3-application starter template.

## Installation

[Polymer](https://www.polymer-project.org/3.0/start/install-3-0) and [Node.js](https://nodejs.org/en/download/) needs to be installed.
Note: If installing Polymer gives a permissions error, setting --unsafe-perm in your install command should resolve it.

1. Clone the GitHub [repo](https://github.com/LoginRadius/demo/tree/v2-polymerjs-demo).
2. Navigate to directory and install the necessary dependencies using 'npm install'.
3. Configure the option.js file in the project's root directory with your credentials.

## How to run

1. Start the application with 'polymer serve'.
2. Access the application at http://localhost:8081 (default).

## Features implemented

1. Login
2. Social login
3. Registration
4. Forgot/reset password
5. Verify email

## Implementation notes

These are some issues with interface deployment to take note of when using the LoginRadius JS Library with Polymer.

- The JS library is currently unable to select UI elements under shadow DOM. As such, it is necessary to override the attachDom method as follows to disable this when working with the JS library.
  ```
  _attachDom(dom) {
    this.appendChild(dom);
  }
  ```
- The LRObject.util.ready() wrapper present in reference code will never resolve, therefore the LRObject.init() call will never be triggered. This can be fixed by removing the wrapper completely.

  ```
  // Before
  LRObject.util.ready(function() {
    LRObject.init("registration", registration_options);
  }

  // After
  LRObject.init("registration", registration_options
  ```

  This will not be a problem as long as the LRObject is properly initialized prior to .init being called.
