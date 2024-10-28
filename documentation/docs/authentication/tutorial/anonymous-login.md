
# Overview

Anonymous Login allows to identify anonymous users and records their activities. When they login to the site, LoginRadius maps the anonymous users with their real identities. This helps to track your customers' behavior before login.

  

The process of Anonymous Login fully depends on browsers. So let's say if the same user visits the site from a different browser, then the user will be considered as two different users. However, if the user logs in on both of the browsers, then LoginRadius will map both sessions with one single real identity.

## Anonymous Login Workflow

This section goes over how Anonymous Login feature is used to identify an Anonymous user and tracks the user's activities before the user registers or logs in on your site.

![](https://lh5.googleusercontent.com/Lw7BiDR1gF132J_oxuFhCTGdQFk5L2RgrbuBDiv_oxtTVKVeIQtYSgMztMV_P2j8SwCTjoM58SgFKSuGXLIu7l4OkeRJhFr76FQ3JUyfiPE_sugOhFTH1n3rCHxiqZdKYYRAGUxX)

  

1. A customer visits your site without login/registration.

2. LoginRadius identifies the anonymous user and assigns a unique ID.

3. The anonymous user performs an activity e.g. click, hover etc. on the site.

4. If track event in anonymous login is enabled for the activity, LoginRadius records the customer's activity on your site and assigns this information to the anonymous unique ID.

5. As soon as the anonymous user signs up as registered customer on your site or logs in with existing login credentials on your site from the same browser, the corresponding anonymous data that was collected is then linked to the respective profiles.

## Implementation

Anonymous login is available for both mobile and web.

### Web Anonymous Login

Follow these steps to implement Anonymous Login on your web page:
 
1. Add the following script to your page

 ```
<script src="//gauge.lrcontent.com/v1/anonymousAuth.min.js"></script>

 ```
 The above script automatically tracks pageView events without adding any further code.

 If you want to get analytics, we recommend that you set the LoginRadius app name using the following code

 ```
 var options = { appName : '<YOUR LOGINRADIUS SITE NAME>', uid : '<UID OF USER>'};
 aas.init(options);

 ```
2. **Custom event** : Use the following code to capture a custom event.

 ```
 aas.track(<event>,<userId>, <provider>,<customFields>);

 ```
 Parameter definitions are as follows:

 - **event** : [optional, default is pageView] possible values -> pageView, click, hover, login, signup, logout, share and any other custom event you want.

 - **userId** : [optional, default is null] user's Uid.

 - **provider** : [optional, default is null] user's login provider.

 - **CustomFields** : [optional, default is null] this will object, like `{ "cf_orderid" : "534552", "cf_productId" :"412412412" }` 

3. **Set Uid globally**: you can set the Uid globally, so that you don't need to set it every time when you call 'track' method.

 ```
 aas.setUid(<Uid>); 

 ```
 You can set Uid without using setUid Method in localStorage or sessionStorage directly.  

 **In session storage**

 ```
 sessionStorage.setItem('_aasuid', <Uid>);

 ```

 **In local storage**

 ```
 localStorage.setItem('_aasuid', <Uid>);

 ```
4. **Set Uid from server side**: If you want to set Uid directly from the server then you need to set it in the cookie.

 **Using PHP**

 ```
 setcookie('_aasuid', <Uid>, time() + (86400 * 365), "/");

 ```

 **Using C#**

 ```
 Response.Cookies["_aasuid"].Value = "<Uid>";

 Response.Cookies["_aasuid"].Expires = DateTime.Now.AddYears(1);

 ```

  

### Web Anonymous Login (for CIAM API v2)

Add following option to enable the Anonymous Login in

```

commonOptions.anonymousLogin = true;

```

Example :

```

var commonOptions = {};

commonOptions.apiKey = "<your loginradius api key>";

commonOptions.appName = "<LoginRadius site name>";

commonOptions.hashTemplate= true;

commonOptions.sott ="<Get_Sott>";

commonOptions.verificationUrl = window.location;//Change as per requirement

commonOptions.anonymousLogin = true;

  

var LRObject= new LoginRadiusV2(commonOptions);

```

You can use custom events by using following code

```

LRObject.trackEvent(<event>,<userId>, <provider>,<customFields>);

```

Following are the parameters:


- **event**: [optional, default is pageView] possible values -> pageView, click, hover, login, signup, logout, share and any other custom event you want.

  
- **userId**: [optional, default is null] user's Uid.

- **provider**: [optional, default is null] user's login provider.

- **CustomFields**: [optional, default is null] this will object, like `{ "cf_orderid" : "534552", "cf_productId" :"412412412" }`

- **Set Uid globally**: you can set the Uid globally, so that you don't need to set it every time when you call 'track' method.

### Mobile Anonymous Login

#### Anonymous Login In Android

  

To implement Anonymous Login on Android, you'll need to use the LoginRadius Android SDK.

  

1. Download and setup the Android SDK [here](https://github.com/LoginRadius/android-sdk)  

2. Import the following package
	```
    com.loginradius.androidsdk.api.AnonymousAuth;
	```
3. Initialize Anonymous Login on Android activity
   ```
   AnonymousAuthOptions options = new AnonymousAuthOptions();

   options.setAppName("<LOGINRADIUS SITE NAME>");

   options.setUid("<UID OF USER>");

   AnonymousAuth.init(options);
   ```
4. **Track event** : Use the following code for tracking events

 ```

 Map<String, String> customfields = new HashMap<String, String>();

 customfields.put("product_id",121212);

 customfields.put("product_price","$13.5");

 //assuming userProfile is loginradius user profile object, you can pass provider as null in case of before login

 String provider = userProfile.Provider;

 // you can pass Uid as null in case of before login

 String uid = userProfile.getUid();

 //pageView, click, hover, login, signup, logout, share and any other custom event you want

 String event = eventname;

 AnonymousAuth.track(event,uid, provider, customfields);

 ```

  

## Anonymous Login API

The Anonymous Login API enables you to get details on anonymous customers and their activities. The data is stored in your LoginRadius Cloud Directory, you will need to call the [Anonymous Login API](https://www.loginradius.com/docs/api/v2/cloud-directory-api/anonymous-auth/get-anonymous-users).

  
  

##### Base URL

The following is the Base URL for all API requests for Anonymous customers:

  

```

https://cloud-api.loginradius.com/identity

```

  

### Formatting your Identity Queries

  

The LoginRadius query notation supports multiple terms with AND/OR clauses or multiple clauses that can be grouped together. It is to be noted that, a group operator is not required for single rule usage.

  

Each key has an associated type and the rule object relies on this type for constructing the database query.
 

#### Rules & Groups

  
- Query object should have at least one group or it can be `{}`, which gives all the data based on From, To values.

- Each group can have one or more rules and subgroups.

- Each group will have an operator `AND` or `OR` and an array of rules or sub-groups. But, this operator is not required for a single rule.

- Each rule should have the Field name, operator & value based on field type
 

Example query:
  

```

"group": {

"operator": "AND",

"rules": [<rule>, <rule>, <group>]

}

```

  

Example rule:

  

```

{

"name": <Field Name>,

"operator": <Supported operator by field type>,

"value": <valid value based on field type>

}

```

  

#### Supported Keys and their types

| Fields |Type  |
|--|--|
| Id | String |
| Auid | String |
| Uid | String |
| UserAgent | String |
| IpAddress | String |
| Url| String |
| ScreenHeight|Array of Int|
| ScreenWidth|Int|
| HostName| String |
| PageTitle| String |
| Language| String |
| Encoding| String |
| Time| String |
| Event| Text |
| IdProvider| String |
| ScreenDimension|array|
| CustomField| Text & String |

  

#### Querying Basic fields

  

```

{

"name":"ScreenDimension",

"operator" : "BETWEEN",

"value" : [15,25]

}

```

```

  

{

"name":"ScreenHeight",

"operator" : "IN",

"value" : ["1080","1920","864"]

}

```

```

{

"name":"HostName",

"operator" : "CONTAINS",

"value" : "hub"

}

```

```

{

"name":"Uid",

"operator" : "!=",

"value" : "5ba9ff5cfbf24654b622063534677e93"

}

```

```

  

{

"name":"CustomField.costomerid",

"operator" : "=",

"value" : "3344334"

}

```

  
  

> Note for Array of Strings/Integers

> - Querying an array of strings field will return the doc if the array contains the specified value:

> - Ex: If the doc has Roles: ['Admin', 'Developer', 'QA'],

> - `Roles = Admin` will return the doc.

> - `Roles = Developer` will also return the doc.

> - `Roles = Business` will not return the doc

  
  

> Note for Range Fields

> - For BETWEEN operator, the value should be an array. The first value will be used as FROM and the second value will be used as TO. The values are inclusive.

> Example `"value": [20, 50]` translates to `20 <= {data} <=50 `. Range is inclusive.

  
  

For more information on the formatting query, visit our [Formatting your Identity Queries](https://www.loginradius.com/docs/api/v2/cloud-directory-api/identity/getting-started#formattingyouridentityqueries1) section on the Identity page.