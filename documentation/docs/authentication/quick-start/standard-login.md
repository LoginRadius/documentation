# Standard Login 

The Standard Login workflow is a fundamental component of LoginRadius, providing customers with a seamless authentication experience using a unique ID (email or username) and password. This workflow encompasses Registration, Login, Customer Profile, and Password Management features.

Through straightforward configurations and customizations in the LoginRadius Admin Console, you can easily set up the desired interfaces and workflows. By defining your system requirements, LoginRadius offers the flexibility to integrate LoginRadius forms into your ecosystem quickly while still allowing you to tailor the experience to meet your specific customer flows and design preferences.

## Standard Login Guide

This guide will walk you through the setup and implementation of a basic Standard Login flow. It covers everything you need to configure in your LoginRadius account and deploy onto your web application, enabling the standard set of email and password-based login, registration, and password management forms.

 > **Pre-requisites:** Basic knowledge of HTML/JavaScript. 

## Part 1 - Configuration 

This section covers the required configurations that you need to perform in the LoginRadius Admin Console to implement the Standard Login functionality.

**Step 1:** Login to your [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to [**Platform Configuration > Authentication Configuration > Standard Login**](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema).

The following screen will appear:

![StandardLogin](https://apidocs.lrcontent.com/images/sl1_101615e7869bf11a836.86549102.png "StandardLogin")

**Step 2:** Configure the default Registration form schema by either selecting fields from the [**Normalized LoginRadius User Profile**](https://www.loginradius.com/docs/api/v2/getting-started/data-points/detailed-data-points/) (Standard Fields) or adding fields in the **Custom fields**. Expand the field type you would like to add and click the **+**sign to add the field to your registration form.

![Data Schema on Admin console](https://apidocs.lrcontent.com/images/2_304985e7718177d3a27.77215070.png "Data Schema")

The **Standard Fields (Advanced)** panel allows you to add in data fields that interact with more complex data structures in LoginRadius (Objects, Arrays) and include multiple related fields for a given entity.

![Advance field](https://apidocs.lrcontent.com/images/3_91265e731e394a34c5.80038678.png "Standard Fields")

The **Custom Fields** panel allows you to create new flat(string) data fields in your LoginRadius data set. Once created these can be enabled on your registration form like any other field.

![Panel for custom field](https://apidocs.lrcontent.com/images/4_9615e74378f1f1d82.79726524.png  "custom fileld panel")

>**Note:** You can set the sequence of enabled fields by dragging and dropping the fields in the desired order. 
>

**Step 3:** You can apply the **Field Settings** for the selected fields as explained below:

Click the **Edit** button next to any field to begin customizing the field.


![navigate to field customization](https://apidocs.lrcontent.com/images/5_308395e743650d44b05.68631363.png " Add custom field")

**General Field Settings**

- Field ID: Displays the ID of the field 
- Field Name: Allows you to edit the default field label that will be displayed for the selected field.

![Active field settings](https://apidocs.lrcontent.com/images/6_43555e7435b6e80265.09572180.png "Active field editing")

**Advanced Field Settings** 

- **Optional/Mandatory:**  On your registration form, choose whether a field should be mandatory or optional. 

![Advance field settings](https://apidocs.lrcontent.com/images/7_51115e74352c396fe4.29575281.png "set the flow")

- **Change Field Type:** Choose from a list of common HTML input types to determine how your registration form will display the given field. 


![Advance field settings](https://apidocs.lrcontent.com/images/8_36565e735b08a8a147.05529340.png "change field type")

- **Validation String**: You can add predefined validation rules from our [validation rule](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks/#customvalidationhook15) list or a custom regex to control.

![Advance field settings](https://apidocs.lrcontent.com/images/9_222315e735ab3322f98.76587208.png "validation string")



>**Note:** These validations will be applicable for client-side on JS implementation and IDX. To enable the server-side validation on the API level, contact [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).



**Step 4:** Save the configuration by clicking the Save button. 


## Part 2 - Deployment 

The LoginRadius Identity Platform supports various implementation methodologies that allow you to customize customer flows. This guide focuses on the basic Identity Experience Framework implementation but it can be accomplished with any of the other implementation methodologies supported by LoginRadius. 

Full details on these methodologies can be found [here](https://www.loginradius.com/docs/api/v2/getting-started/implementation-workflows/).

**Step 1**: Locate the **Auth Page URL** as explained below: 

Navigate to [**Deployment > Identity Experience Framework (Hosted)**](https://adminconsole.loginradius.com/deployment/idx) and the following screen appears:

![IDX](https://apidocs.lrcontent.com/images/1_302836204086435b412.59992184.png "IDX")

The Auth Page URL displays your unique hosted page domain in the following format:

```
https://<sitename>.hub.loginradius.com/auth.aspx
```

In the above URL, [sitename](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/) is the name of your LoginRadius Site.

You can directly navigate to this domain to review your configured interfaces from [Part 1](#part-1---configuration).

**Step 2:** Embed Authentication Pages in your Website as explained below:

Add a link on your webpage for redirecting customers to the Identity Experience Framework(Hosted) Page.

 ```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=<Desired Action>&return_url=<Return URL>">Register</a>>

```
In the above URL replace the following:


**a.** LoginRadius Site Name : Your unique LoginRadius [sitename](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/) as found in step 1.

**b.** Desired Action : Following are the action list you can use

- Login
- Register
- Forgot password 
- Logout

**Examples:**

**Login Page** 
```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>">Login</a>
```

**Registration Page**

 ```
<a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>">Register</a>

```
**c.** Return URL : The URL you would like to redirect customers after completing the selected action.

Try this link out on your page. You should be redirected to the LoginRadius Hosted Page where you can register, login, and reset your password.

>**Note:** Use the following URL link to display the profile page of logged in customers. 
>

```
 <a href="https://<LoginRadius site name>.hub.loginradius.com/profile.aspx">View Profile</a>

```
Use the below JavaScript snippet to capture the access token on your page:


```
function getParameterByName(name) { 
name = name.replace(/[[]/, '\[').replace(/[]]/, '\]'); 
var regex = new RegExp('[\?&]' + name + '=([^&#]*)'); 
var results = regex.exec(location.search); return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' ')); 
} 
var access_token = getParameterByName(“token”); 
```




> **Note:** We have additional language specific examples [here](https://www.loginradius.com/docs/api/v2/deployment/identity-experience-framework/hosted/usage/#tokenhandling1) if you want to capture this token in other programming languages.
> 

**Step 3:** Store the captured **Access Token** as explained below: 
Once a customer has completed the login action the IDX page will redirect the customer back to the specified return URL and include an access token as a query parameter in the URL.



```
 <Redirect URL>?token=<Access Token>


```

If you have already added the **getParameterByName** function, call this function to get the access token in the access_token variable.

You can store the obtained access token in your cookie, local storage and more as per the use case. The following are the example codes for storing the access token in a cookie and local storage:

**Storing in cookie:**

```
function setCookie(cname, cvalue, exdays) {
var d = new Date(); 
d.setTime(d.getTime() + (exdays* 24 * 60 * 60 * 1000)); 
var expires = "expires="+d.toUTCString(); 
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; 
}
```

Here **cname** is cookie name, **cvalue** is access_token and **exdays** is the expiry date of cookie where you need to pass the number of days.

```
setCookie(“lr-session-token”, access_token, “No days”)
```

**Storing in local storage:**

```
localStorage.setItem("lr-session-token", access_token); // First parameter will be the local storage name and 2nd parameter will be access_token
```

**Step 4:** You can use the **Access Token** as explained below:

Call the [LoginRadius API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/) to retrieve the customer profile using the Access Token. Alternatively, you can leverage any of our SDKs to accomplish this.

The following is the script example to retrieve the customer profile:

```
<script>
var xhr = new XMLHttpRequest();
url = "https://api.loginradius.com/identity/v2/auth/account?apiKey=*********-****-****-****-*************&access_token="+access_token
xhr.open("GET", url);
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.response);
    }
  }
</script>
```

On executing the above deployment steps, you will see obtained customer profile data in Console Log of your browser. You can then link the obtained data to your applications.

## Part 3 - Next Steps

 The following is the list of features you might want to add to the above implementation:

[Setup Password Policy ](https://www.loginradius.com/docs/authentication/concepts/password-policy/)

[Setup Email workflows ](https://www.loginradius.com/docs/authentication/concepts/email-communications/)

[Setup Social Login ](https://www.loginradius.com/docs/authentication/quick-start/social-login/)

[Implement SSO](https://www.loginradius.com/docs/authentication/quick-start/sso-implementation/)

[UI and UX customizations of IDX pages](https://www.loginradius.com/docs/authentication/concepts/ui-ux-customizations-idx/)

[Calling LoginRadius APIs](https://www.loginradius.com/docs/api/v2/getting-started/introduction/)