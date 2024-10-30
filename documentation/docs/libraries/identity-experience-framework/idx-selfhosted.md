# Identity Experience Framework

The Identity Experience Framework (Self-Hosted) allows you to deploy LoginRadius directly onto your page quickly. It will enable you to customize some standard layout options to bring it in line with the branding of your sites while preserving the ability to leverage all of the functionality of the full LoginRadius JS deployment.

## Key Benefits

- Cut down on UI/UX design time - Utilize the classic login screen layout without the fuss.

- Customizability - Design an interface tailored to the look and feel of your app.

- Self-contained and straightforward front-end implementation - With the Login Screen configuration section of the Admin Console, you can create a complete login screen from start to finish.

## Important

The Identity Experience Framework (Self-Hosted) 1.3.0 is a continuation of the old LoginScreen library, however, it is a complete revamp.
Please see below for some of the changes that have been made between the two versions that you may require paying attention to if you're updating.

1. All function calls using `LRObject.loginScreen` have been change to `LRObject.idx`

2. In the Options object, we've dropped support for tabs; the IDX will allow more customization instead of forcing the use of tabs.

3. In the Options object, we've replaced `pagesshown` with `workflows` as we will be supporting complete workflows via the workflows options.

## IDX Files

The structure here details the files required to use the IDX framework. 

- LoginRadiusV2.js - This is the LoginRadius Core JavaScript library and is required to be on the page where IDX is running. You can serve it via our CDN.

- idx-selfhosted.1.0.0.js -  The IDX JavaScript Framework file.

- idx-style.css - CSS file for the IDX that you can use to customize the IDX and build your own themes.

### Configuration

If you wish to deploy the Identity Experience Framework directly into your environment, follow the steps below to configure and deploy the interface on your page.

**Step 1**.  Import the idx-style.css for styling and LoginRadiusV2.js and idx-selfhosted.1.0.0.js for the JavaScript interfaces.

  ```
        <link rel="stylesheet" type="text/css" href="idx-style.css">
        <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
        <script type="text/javascript" src="idx-selfhosted.1.0.0.js"></script></body>
  ```

**Step 2**.  Initialize the LoginRadius commonOptions Object with your desired settings as detailed in the [LoginRadius JS Getting Started guide](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#initializationofloginradiusobject3), to use Identity Experience Framework make sure you need to set the following settings (at a minimum):

A) **apiKey** - Your API key, click here for details.

B) **appName** - This property is your LoginRadius site/app name as shown in your LoginRadius Admin Console.

C) **hashTemplate.**

D) **sott:** This property is for generating a one-time Token, click here to know more.

E) **formValidationMessage** - This determines if the validation messages are generated in the page.

F) **verificationUrl **- This URL is the page where your email got verified. It usually the page where Login Screen is displayed.

G) **resetPasswordUrl **- This URL is the page where your password got reset after forgot your password. It usually the page where Login Screen is displayed. Sample:


>**Note:** Not all of the features of the LoginRadiusV2.js are included in the IDX Framework, if you're in doubt, you can reach out to LoginRadius Support. 

```
var commonOptions = {};
commonOptions.apiKey = "<your api Key>";
commonOptions.appName = "<your app Name>";
commonOptions.hashTemplate= true;
commonOptions.sott = "<your sott>";
commonOptions.formValidationMessage=true;
commonOptions.verificationUrl = "<your homepage URL>";
commonOptions.resetPasswordUrl = "<your homepage URL>";
var LRObject= new LoginRadiusV2(commonOptions);
```
**Step 3** Add a div element on your desired page and assign it a distinct id which the framework will leverage as a location to render the interfaces.

`<div id="idx-container"></div>`

**Step 4** Call the IDX javascript function when the LRObject ready.

```
LRObject.util.ready(function() {
    LRObject.loginScreen("idx-container", options, cb);
});
```

### IDX Configuration

While you're able to leverage some of the LoginRadiusV2.js options as per the details above in our [LoginRadiusV2.js Configuration](https://www.loginradius.com/docs/libraries/js-libraries/getting-started/#initializationofloginradiusobject3) section. The advantage of the Identity Experience Framework only becomes apparent when you look at the options in it that allow you to control
both UI and UX. This section covers these options.

>**Note:** All of the options will be added to the options object:
`var options = {}`

1) Language: this field provides you a way to set up the page in your preferred language. To have a language be available, you will need to 
create a file with the translations inside as per our [Languages Customizations](https://www.loginradius.com/docs/libraries/js-libraries/javascript-hooks/#languagecustomizations22)
steps.

e.g.

```
var options = {
    language: "French"
    }
```

>**Note**: You do not need to set 'Language' to English; the page is in English by default.
![enter image description here](https://apidocs.lrcontent.com/images/4_217685ee21b265a4174.89710205.png  "enter image title here")

2)  The **redirecturl** option is an object that contains the properties below.

- **afterlogin:** URL to the page the customers go to when they log in successfully.

- **afterreset**: URL to the page the customers go to after successfully changing their password.

e.g.

```
var options = {
    redirecturl: {
        afterlogin: "https://www.example.com/profile",
        afterreset: "https://www.example.com/passwordchangesuccess"
    }
}
```

3) **socialsquarestyle**: this boolean controls how the social login options are shown on the page - blocks or square icons.

![enter image description here](https://apidocs.lrcontent.com/images/1_118965ee2178ae3e019.40438418.png "enter image title here")

![enter image description here](https://apidocs.lrcontent.com/images/2_165255ee217c7cc8505.29554070.png "enter image title here")

e.g.


```
var options = {
    socialsquarestyle: true
}
```

4) **logo:**

- url: The URL to your company's logo to have it displayed on the IDX interface.
- color: Use this to set the color of the background where the logo is being displayed.

e.g.

```
var options = {
    logo: {
        url: "https://apidocs.lrcontent.com/images/loginradius-logo--horizontal-full-colour-on-white_196175e99f5cec6b654.20520541.png",
        color: "#FFFFFF"
    }
}
```

5) **body:**

- backgroundColor: this is the background color of the whole container except the logo section; by default, it is white.
- textColor: the color of all the text in the container.
- fontFamily: the font of all the text in the container.

 > **Note**: Some browsers may not support the customized font; in this case, the font would still be the default setting.

e.g.

```
var options = {
    body: {
        backgroundImage: "https://apidocs.lrcontent.com/images/Background-graphic_310375e99f91381e746.12169998.png",
        backgroundColor: "#FFFFFF",
        textColor: "#09263c",
        fontFamily: "Barlow"
    }
}
```

6) **content**: The content parameter contains properties that control specific toggles on the interface, see the example below.

```
var options = {
    content: {
        forgotPWgreet: "We will email you password reset instructions",
        socialandloginDivider: "OR",
        socialblockLabel: "Log in with",
        signupandForgotPwrequest: "Please go to your email address and  the link",
        signupandForgotPwrequestPhone: "Please check your phone for the OTP",
        emailVerifiedMessage: "You have signed up successfully.",
        signupLink: "Don't have an account? Sign-up!"
    }
}  
```


7)  The **input** option is an object that contains the properties below.

- **background:** this controls the input box background color.

e.g.

```
var options = {
          input:{
            background: "#f2e8e8"
          }
}
```

8) The **submitButton** property contains properties relating to the submit button

- **color:** this is the color of submit buttons, such as login and sign-up.

![](https://apidocs.lrcontent.com/images/ls-docs-s9_264345ae788308c0c07.00465080.png)

```
var options = {
          submitButton: {
            color: "#45e863"
          }
}
```

9) The **singlepanel** property is a boolean that decides if the UI should be contained within a single panel or if it should be two panels. 


e.g. 

```
var options = {
    singlepanel: false
}
```

10) The **workflows** property is an array to describe what workflows should be available on the IDX interface.

Currently the supported workflows are "login", "signup", "forgotpassword", "resetpassword".

e.g.

```
var options = {
    workflows: ["login", "signup", "forgotpassword", "resetpassword"]
    }
```

## Initializing the Identity Experience Framework

Once all of the settings have been applied, you need to initialize the IDX on your page to get it running.

Example:
```
var options = {}
LRObject.util.ready(function() {
        LRObject.idx("idx-container",options);
      }
```

### Callback

You may want to use custom functions based on different events. As a solution, we provide you the ability to pass a callback to the IDX, which can execute your code based on the events.


List Of Events:

| Event          | Description                    |
| -------------- | ------------------------------ |
| login | Login with email               |
| socialLogin    | Login through social platforms |
| forgotpassword | Forgot Password                |
| resetpassword  | Reset Password                 |
| registration   | Sign Up                        |
| verifyEmail    | Verify the email address       |

Sample Callback Function:

```
    var cb = function(status, Event){
    		console.log(Event); // this is default action for every Event
      						//in the following, you can add custom actions for every event.
    		switch (Event){
  			case “login”:   // your customer actions
  			break;
  		}
    }
```

>**Note**: If you're using a Callback, you need to pass it in the IDX function when you initialize the framework.

For Example:
```
LRObject.util.ready(function() {
        LRObject.idx("idx-container", options, cb);
      }
```

### Demo

A link to a demo project can be found [here](https://github.com/LoginRadius/).

In the "Demo" folder, a complete demo is included the structure here details the structure for our IDX demo.

To get started, make sure you add your API Key and sitename in the **idx-options.js** file and that all of the files are served on a development server.

- index.html - The HTML, the customers, will visit to interact with the IDX.

- idx-options.js - all of the JavaScript configuration and customizations are contained in this file.

- idx-style.css - Main CSS file for the IDX that you can use to customize the IDX and build your themes.

- idx-selfhosted.1.3.0.js -  Main IDX JavaScript Framework File