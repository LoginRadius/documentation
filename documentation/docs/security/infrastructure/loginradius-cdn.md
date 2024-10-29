# LoginRadius Global CDN 


LoginRadius is committed to delivering the best quality and performance to our customers by utilizing the world's best-in-class CDN services and cloud providers. By employing multiple failover layers, we can ensure a 100% uptime to provide our customers with the fastest and most reliable Customer Identity and Access Management (cIAM) platform.

LoginRadius Global CDN offers the following features:


## Cookieless Domain

LoginRadius has created two cookieless domains - lrcontent.com and lrcontent2.com - as the preferred method to deliver performance and quality via CDN. 


> **Note:** The CDN domain, cdn.loginradius.com, has been deprecated and is no longer recommended for content delivery. It is a part of the loginradius.com domain, and its script-based components can create cookies.

## Redundant Failover and Optimized Performance

LoginRadius is committed to providing 100% uptime for our CDN services by maintaining real-time failover.

While doing so, we have created two CDN origins for each content file with lrcontent.com and lrcontent2.com.

```
https://auth.lrcontent.com/v2/LoginRadiusV2.js
https://auth.lrcontent2.com/v2/LoginRadiusV2.js
```

## CDN Failover Infrastructure


### 1. Server-side Traffic Manager Failover

Our Traffic Manager automatically detects the  CDN availability and retrieves the content from the nearest available CDN if the primary source is unavailable.

### 2.  Client-side JS Failover

This failover is applied directly to the client browser, and it's necessary to incorporate the script mentioned [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#initializationofloginradiusobject3) on your website to implement this failover. If the content fails to reach its destination or load, the script will retrieve the content from the failover location.



## Fastest CDN Networks

The LoginRadius CDN infrastructure utilizes the best-in-industry CDN providers. By combining multiple CDN providers, we deliver a 100% uptime for our CDN content delivery. By taking advantage of the CDN providers’ global networks, we can assure the fastest delivery time with the lowest latency period across the globe.


Attributes used by the LoginRadius multi-CDN services are:

- Proper caching headers
- Gzip compression is applied to the CDN

Below is the screenshot which displays the headers of files that carry LoginRadius CDN services.


![](https://apidocs.lrcontent.com/images/LoginRadius-cdn_63945a968049519288.07452213.png "")
