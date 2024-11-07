# AMP Configuration 

AMP (Accelerated Mobile Pages) is a website publishing technology being developed by Google. By successfully implementing the AMP framework, you are able to have your AMP pages cached on AMP servers and have the pages served quickly to your mobile customers. This document provides you with quick steps on obtaining a LoginRadius access token within your AMP page.


## Whitelist AMP Cache CDNs

AMP Pages that you make available publicly, can be automatically cached by AMP caches. This means that your customers are likely to access your website via a third-party's AMP cache rather than your site directly. If you want to provide the cache with the ability to receive your customer's access token from LoginRadius, you will need to whitelist them in your Admin Console under [**Deployment > Apps > Web Apps section**](https://adminconsole.loginradius.com/deployment/apps/web-apps).

Below is a sample list of popular AMP Caches, keep in mind that this list is not a comprehensive list and is subject to change. We highly recommend that you review the documentation from the AMP cache provider directly before whitelisting them.


| AMP Cache       | Provider        | 
| ------------- |:---| 
| cdn.ampproject.org | Google | 
| amp.cloudflare.com | Cloudflare  |
| bing-amp.com | Bing |


## Implementation

As AMP does not allow author-written JavaScript on pages, you can set a link to your Login interface into your AMP pages. Once the Customer completes the action you can redirect them back to the AMP page they had been previously visited along with an access token embedded in the URL query parameters. Follow the steps below for details on how you can leverage the Identity Experience Framework for a Login.


##### Step 1

AMP has built-in support for `<a>` tags, as such, it will allow us to leverage the [Actions](https://www.loginradius.com/docs/api/v2/deployment/hosted-registration/usage) feature in the Identity Experience Framework to select the interface you want the customer to be presented with. 

```
<a href="https://<<Your-LoginRadius-Environment-Name>>.hub.loginradius.com/auth.aspx?action=login">Login</a>
```

##### Step 2

You will now want to decide where you want to redirect the customer after successfully completing the login action, luckily AMP provides you with variables that you can leverage. The one we will be using is **SOURCE_URL** which gives us the page that the customer is currently on.


You can add this via the Identity Experience Framework  `return_url` functionality. 

```
<a href="https://<<Your-LoginRadius-Environment-Name>>.hub.loginradius.com/auth.aspx?action=login&return_url=SOURCE_URL">Login</a>
```

##### Step 3

Now customers can click the provided link on the AMP page, to be prompted the Login interface, once they authenticate successfully they will be redirected back to the AMP Page with the access token provided in the `token` Query Parameter.  


```
https://<<yourampcachedpageaddress>>/?token=<<access-token>>
```
