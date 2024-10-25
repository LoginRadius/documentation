# Customer Intelligence Overview

The Overview section will give you an idea of key statistics of your LoginRadius site. In this section, we have covered the overview of multiple statistics available in the [insight](https://adminconsole.loginradius.com/insights/overview) tab  which represents the customer information with regard to various aspects of analytics. This contains useful charts and analytic tools to view and measure the overall performance of your site in terms of customer registration and login. The information is aggregated and categorized into identity analytics, provider analytics, login analytics and comparative analysis. This analytics will be helpful to improve the overall application performance and understand the customer experience.

## Key-terminology
This section defines the basic terminology used in customer insights. Key terms include Active Customer, Logins, Provider vs. Social Provider, Unique Profile Login, Customer Profiles, and Customer Accounts. Detailed explanations of these terms can be found  [here](https://www.loginradius.com/docs/customer-intelligence/key-terminology).

## Analytics Overview
LoginRadius offers various charts and analytics tools to help you better understand your user-base, analyze log in and registration statistics, monitor customer engagement, and much more. In this [section](https://adminconsole.loginradius.com/insights/overview), you will see the calendar layouts for a site login and new user activities. Also, this will let you see what days out of the year your site experienced the highest and lowest login and new user registration volumes, a quick look at the number of logins and new users on any given day throughout the past 12 months.

## Identity-analytics
In this section, we cover the [customer statistics](https://adminconsole.loginradius.com/insights/identity-analytics/customer-stats) to give an overview of the total customer numbers for reporting or analytics purposes. Different chart analytics based on customer growth, provider, customers location, customer age group, gender, browser and type of device used to register on your site.

> ## Data Collection Method
> LoginRadius uses information like user agent, IP address, and host to display browser or device details for signup logs. For other sections like provider and customer growth, it uses user profiles to filter and show data.

## Provider-analytics
This [section](https://adminconsole.loginradius.com/insights/provider-analytics/daily-distribution) offers comprehensive information on the number of profiles or accounts created over a selected time period, categorized by country or location, age, gender, and login provider.

> ## Data Collection Method:
> The Admin Console uses user profiles to filter and show data related to age group, gender, and region.

## Login-analytics
The [Login Stats](https://adminconsole.loginradius.com/insights/login-analytics/login-stats) section contains metrics related to customer profile logins. These statistics are based on login distribution, specified time periods, daily active customers, monthly active customers, customer return dates, provider engagement, browser engagement, and device engagement.

> ## Data Collection Method:
> LoginRadius uses details like user agent, provider, IP, language, host, date, and time to display device, browser, and provider engagement. For other sections, the Admin Console uses user profiles to show data based on login activity (e.g., last login dates).

## Comparative-analysis
In this [section](https://adminconsole.loginradius.com/insights/comparative-analytics/month-comparision), the customer will see the historical analysis section provides comparative charts of the number of registrations in the selected months. you can select different months, domains, and customer accounts or customer profiles and also Compare the number of customer registrations between selected months.

> ## Data Collection Method:
> LoginRadius uses user profiles to compare records month-to-month.

## Utilize-insights-data
The LoginRadius platform has the power to gather, store, and organize your customer and user data. One of the best parts of the solution is that it can cater to your business needs. With this, the possibilities of what you can do with the data you collect are essentially endless. More detail about Utilize-insights-date can be found [here](https://www.loginradius.com/docs/customer-intelligence/utilize-insights-data/).

## API Call Implementation
For customers using a wrapper or server-side implementation for API calls, they can add the following header to their API requests:

![API Call Implementation](https://apidocs.lrcontent.com/images/pasted-image-0-12_157379079266526493a24f38.41387561.png "API Call Implementation")

> Example:
> If customers are using a wrapper or server-side implementation, they can obtain the value from the browser or device. They can then pass this value to their own API. In the middleware, they can retrieve the value and include it in the request header when calling the LoginRadius API.
>
> By following these steps, customers can ensure that their API calls are accurately capturing and utilizing the necessary data for enhanced analytics and performance tracking.


