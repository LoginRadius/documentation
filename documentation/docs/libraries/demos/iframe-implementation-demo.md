# Identity Experience Framework iframe Implementation

The iframe implementation is an extension of the [LoginRadius Identity Experience Framework](https://www.loginradius.com/docs/api/v2/user-registration/hosted-registration), This allows you to display the Hosted Registration page directly on your website in an iframe. The hosted registration page will emit any events(success and error) directly to the callback handlers on the parent window. You can also emit custom events directly from the Identity Experience Framework iframe to the parent window to further customize any actions. The iframe implementation allows you to leverage the aspects of the Identity Experience Framework directly into your web properties: Ease of implementation, centralized look and feel, customizability.

## Components

The Identity Experience Framework  Implementation is comprised of four JavaScript files, two of them to be added onto your parent website, and two for the Identity Experience Framework that assists in performing the operations.
Get a copy of the Iframe Identity Experience Framework files from here: [iframe hosted library](https://github.com/LoginRadius/hosted-page/tree/iframe-hosted-page). 

>**Note:** If you are cloning the repo make sure to switch to the 'iframe-hosted-page' branch.

 The following is the description of each:


**1.LoginRadiusV2.iframeSDK.min.js:** This file will be loaded on your parent website where the iframe will be integrated, this file is responsible for communication between the iframe and the parent website. It is used to manage **iframe Screens**, this file is essentially used to render the iframes in the given divs.

>**Note:**This file is maintained by LoginRadius and should not be customized, you can easily load this file from our CDN via the following address:
    `https://auth.lrcontent.com/integration/iframe/LoginRadiusV2.iframeSDK.1.0.1.min.js`

**2.iframeSDK-options.js:** This file will be hosted your parent website, and is responsible for holding your JavaScript configurations i.e. appname, iframe settings etc.

**3.iframeSDK-Auth-Communication.js:** This file will be served on the LoginRadius Identity Experience Framework. This file will assist communication between the Parent website and the Identity Experience Framework authentication features. Once you have a URL for this file, it needs to be added as the **Before Script** in the Identity Experience Framework section of the LoginRadius Admin Console under the  **Authentication Pages:**

[Deployment >Identity Experience Framework  > Authentication Pages > Before Script](https://adminconsole.loginradius.com/deployment/idx).


**4.iframeSDK-Profile-Communication.js**: This file will be served on the LoginRadius Identity Experience Framework. This file is similar to iframeSDK-Auth-Communication.js; it assists in the communication of the Identity Experience Framework  Profile area features (what the customer sees after being authenticated). Using this file may be optional on your implementation of the Identity Experience Framework. If, it needs to be added as the Before Script in the Identity Experience Framework section of the LoginRadius Admin Console under the **Profile Page** area:


[Deployment >Identity Experience Framework  > Profile Pages > Before Script](https://adminconsole.loginradius.com/deployment/idx).


## Configuration

This section will take you through the configuration of JS files that will use in IDX implementation with iframe.


The **iframeSDK-Options.js** file contains most of the configurations for the implementation and it saves those configurations in different JavaScript Objects, Below are the following details on setting up the configurations.


1. **Specify your LoginRadius Site/App Name:**

	Create an object with the name `LRConfigObj` to contain the SDK's configurations and provide it with your app/site name using the following Object property:

	**appName:** This property is your LoginRadius site/app name as shown in your LoginRadius Admin Console.

	The code should be look like this: 
  ```
  var LRConfigObj = {
 'appName': 'YOUR LOGINRADIUS APP NAME'
  }
  ```
	
2. Next, we will be adding an object named **iframeSettings** inside our **LRConfigObj** to contain all iframe properties:
 - height: You can manage the height of the Iframe from this parameter
 - width: You can manage the width of the frame from this parameter
 - class: You can pass custom class names here to add custom CSS to the Iframe.

The code should be look like this : 

```
var LRConfigObj = {
'appName': 'YOUR LOGINRADIUS APP NAME', 
iframeSettings : {
 height : '85%',
 width : '100%',
 class : 'iframe'
}
}
```
3. (Optional) using a custom domain: You can pass a custom domain value in the LRConfigObj via the customdomain property.
This property is passed a domain in the instance that you are using a custom domain.
The code should be look like this :
```


var LRConfigObj = {
 'appName': 'YOUR LOGINRADIUS SITENAME',
 iframeSettings : {
   height : '85%',
   width : '100%',
   class : 'iframe'
 },
 'customdomain': 'YOUR CUSTOM DOMAIN'
}

```


## Adding a Custom Domain

This section covers the steps to add custom domain in your iframe for yourLoginRadius account.

1. Navigate to [Deployment > Apps > Custom Domain](https://adminconsole.loginradius.com/deployment/apps/custom-domain). Under the **Admin Console** and press the **save** button.

2. Now in your **iframeSDK-Options.js** file. Find the below code and replace your custom domain with the one you want to add.

	`'customdomain': 'your custom domain'`

> **Note:** This needs to be enabled by [LoginRadius,  LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) for details.

### LoginRadiusV2.iframeSDK.min.js

Using the **LoginRadiusV2.iframeSDK.min.js** will allow you to render the iframes on your Parent website's page.

The following is the code format to render an iframe:


```
ciamwidget_obj.render('action','containerID', 'pagetype', function(response){
},function(error){});
```

**Parameters:**

The following are the description of parameters passed inside the above code: 


  - Action: This is the name of the action. See the table of the [list of actions](#list-of-actions) in the next section.

  - containerID: This is the id of the html element in which the iframe will get rendered.

  - pagetype: This is used by LoginRadius to identify the Identity Experience Framework type. **Note:** by default this should always be set to `'auth.aspx'` 

  - `function(response){}`: In this callback function you can handle the success response.

  - `function(error){}`:  In this callback function you can handle the error response.



> **Note:** by default, this should always be set to 'auth.aspx'


### List Of Actions
The following are the list of default actions supported by **LoginRadiusV2.iframeSDK.min.js**:

|Action|Description|
|------|-----------|
|login|Render Login Form|
|register|Render Register Form|
|forgotpassword|Render Forgot Password Form|
|resetpassword|Render Reset Password Form|
|editprofile|Render Edit Profile Form|
|accountsetting|Render Account Setting Form|
|changepassword|Render Change Password Form|
|profile|Render View Profile Form|

Custom events can also be emitted from the LoginRadius Identity Experience Framework.

## Implementation

The following are the steps to generate an interface:

1. Include **LoginRadiusV2.iframeSDK.min.js, iframeSDK-Options.js** files on your page.

 ```
 <script type="text/javascript" src="LoginRadiusV2.iframeSDK.min.js"></script>
 <script type="text/javascript" src="iframeSDK-Options.js"></script>
```

2.  Add a container with ID in which iframe needs to be generated. i.e.  `<div id="containerID"></div>`

3. Add the following script code to your page to show the interface:

```
<script type="text/javascript">

  var ciamwidget_obj = new LoginRadiusCiamWidget(LRConfigObj, LRCommonOptions);
  ciamwidget_obj.render('action','containerID', 'pagetype', function(response){
        console.log(JSON.stringify(response));
       /* -- you will get response object ,write your code here to handle success -- */
  },
  function(error){
      /* -- write your code here to handle error --*/
    });
</script>
```

Response objects will be returned in the following format:

```
{
	response:<response Data>,
	event: <action>
}

```


### Sample code for rendering a login interface within an iframe

For a quick reference you can use the sample code below:

```
<html>
<body>
<head>
<!-- including the required scripts -->
<script type="text/javascript" src="../parent-page-files/LoginRadiusV2.iframeSDK.min.js"></script>
<script type="text/javascript" src="../parent-page-files/iframeSDK-Options.js"></script>
</head>

<div id="login-iframe"></div>
<div id="result" class="result"> </div>

<script type="text/javascript">

  var ciamwidget_obj = new LoginRadiusCiamWidget(LRConfigObj, LRCommonOptions);
  ciamwidget_obj.render('login','login-iframe', 'auth.aspx', function(response){
       /* -- you will get response object ,write your code here to handle success -- */
        console.log(JSON.stringify(response));
    console.log("success");
  },
  function(error){
      /* -- write your code here to handle error --*/

      document.getElementById("result").innerHTML = "Error : " + JSON.stringify(error);

    });
</script>


</body>
</html>
```
