# LoginRadius Vue.js Demo

## Overview 

Vue is an open-source model–view–ViewModel JavaScript framework for building user interfaces and single-page applications. Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.

## Getting Started

This section will explain the steps included in the setup of the Vue.JS demo and how to run the demo.


>**Prerequisites:** NPM needs to be installed. (Click [here](https://nodejs.org/en/download/) to download)


1. Clone the Vue demo from  GitHub Repo [here](https://github.com/LoginRadius/demo/tree/v2-vue-demo)

2. Install the dependencies by typing `npm install` on your command-line interface.

3. Configure your [LoginRadius Credentials](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/) in "/src/assets/options.js"

4. Run the demo on localhost port 8080 by typing `npm run dev` into your command-line interface.
5. This will open your demo on your default browser.



## The noted difference while working on Vue.JS demo

Below are some important guidelines which you should be aware of while working on Vue.JS demo as the preset interfaces and function handling is a bit different in Vue.JS as compared to other demos.


- Deploying the preset interfaces on the Virtual DOM:

    - **Problem:** Writing the methods correctly. The LR interfaces do not deploy on the DOM properly (It does not deploy at all)
    - **Solution:**  Get rid of the LRObject.util.ready wrapper.
    - **Example:**

```
  // BEFORE //
LRObject.util.ready(function() {
LRObject.init('registration',registration_options);
}
 ```

```
// AFTER //
LRObject.init('registration',registration_options);
```
- This will not cause unexpected errors as long as you have the methods to initialize the LR options in your Vue **updated** or **mounted** lifecycle function, depending on how you've structured your Vue project.


- Customizing the Social Login Buttons (Demo):

    - **Problem:** I can't customize the Social Login Buttons in the demo.
    - **Solution:** For the purposes of the demo, we have left the social login template code for the Social Login Buttons in the main index.html file.

```
<script type="text/html" id="loginradiuscustom_tmpl">
<a class="lr-provider-label" href="javascript:void(0)" onclick="return <#=ObjectName#>.util.openWindow('<#= Endpoint #>');" title="<#= Name #>" alt="Sign in with <#=Name#>">
<#=Name#>
</a>
</script>
```

Whereas the rest of the logic is located in: /src/components/sociallogin.vue.

    
To learn more about how to customize the Social Login Buttons via our template code, you can refer to our [Getting Started documentation](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#sociallogin7)

## Features Implemented in the Demo

Below is the list of features that are included in this demo.


1. Login
2. Register
3. Resend Email Verification
4. Social Login


