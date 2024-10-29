Social Data Compliance
====
-----
The LoginRadius platform provides built-in support for Social Network APIs. We have integrated 35+ social networks into the LoginRadius Platform. Social networks have various APIs such as Authentication, User Profile Data, Likes, Groups, as well as Media APIs - Audio, Albums, Picture, Video, etc. LoginRadius is able to integrate all of these APIs into one single format and normalize the data into one LoginRadius data format. Customer needs to only work with LoginRadius API to work with all Social Networks.

As an authentication provider, LoginRadius doesn't store the users' social network passwords. Rather, we facilitate the authentication process with a unique access token received from the social network (ID Provider). LoginRadius' customers create their own social network apps for ID providers (Facebook, Google, Twitter, etc.) and host the app credentials with the LoginRadius API, which manages the authentication process.

LoginRadius promotes and encourages our customer to comply with the social networks' privacy policy when these social network logins are implemented on their website or mobile apps. The LoginRadius Privacy Team can also help determine these policies, so please feel free to reach out to your account manager should you have any questions about this. If your application does not meet the social network's privacy compliance, LoginRadius may terminate your services.

We provide various guides to assist with your app setup, as well as some best practices and informational documents: 

1. [Configuring Social Provider Apps:](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/configure-social-apps/)

2. [Common Questions:](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/social-provider-faqs/)

3. [Social Provider Limitations:](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/social-network-limitations/)

4. [Social Provider Specific Datapoint Retrieval:](https://www.loginradius.com/docs/authentication/quick-start/social-login/)advanced-social-points-data-points

5. [Social Provider Image Sizes:](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/configure-social-apps/)

## Major Social Network Privacy Policies
Below we go over some of the most popular social providers globally and the specific considerations and documentation around them

### Facebook Data Privacy Policy

Facebook is one of the more regulated social providers and requires you to go through a detailed submission process in order to access the data that they store. Here are a few highlights of Facebook's privacy policy:

- Restricts access to specific data points in the Facebook User Profile
- Restricts access to advanced graph APIs
- Provides limited access to a user's friends data.

LoginRadius provides all of the guidelines and hosts the Facebook application for you. We also have a step-by-step process on how to obtain app approval from Facebook, which is detailed in the following link: [Facebook App Approval](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/app-reviews/facebook-app-review/)

For further details, please refer to the following:

- Facebook Platform Usage Policy: https://developers.facebook.com/terms/
- Facebook Privacy Policy: https://www.facebook.com/privacy/policy/

### Twitter Data Privacy Policy
Twitter has the most flexible platform and once you sign up for a developer account you would be able to access most of the profile information with a few of exceptions. You can request access via forms to the restricted information. Here are some of the restrictions:

- Restricts access to email
- Restricts access to push notifications and direct messaging.

In order to retrieve the email of your Twitter users, you will need first to request the access to this from Twitter. Please refer to this link for details: [Twitter Email Access Request](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/app-reviews/twitter-app-review#howtorequestemailaddressesfromtwitter0)

If you need more details, please refer to the following:
- Twitter Platform Terms of use: https://dev.twitter.com/overview/terms
- Twitter Privacy Policy: https://twitter.com/en/privacy

### Google Plus Policy

Google has a very open platform and by signing up for a Google developer account, you are able to quickly enable access to any of Google's supported APIs via the Google Console. They do not require any additional verification or permissions to access their systems.

If you need more details, please refer the following:
Google Developer Privacy and Data Policy: https://play.google.com/about/privacy-security/

### LinkedIn Data Privacy Policy
In the past year, LinkedIn has improved the security around accessing their APIs and the data you can retrieve. LinkedIn provides details on the supported workflows and has a partner program that can get you access to more advanced features. Here are some of LinkedIn’s restrictions:
- Restricts access to advanced profile data. In order to get access, you will need to detail your use case and request for this to be enabled
- Restricts access to share and push notification APIs
- Restricts access to work history, education, and other professional information and you need to comply with Supported Use cases in order to access the Partner program for this data.

In order to extend your access and LinkedIn permission, you will need to either request additional access or join their partner program. You can follow the guide below to walk you through the application process: [LinkedIn App Review](https://www.loginradius.com/docs/api/v2/admin-console/social-provider/app-reviews/linkedin-app-review#howtorequestemailaddressesfromtwitter0)

For more details on LinkedIn’s policies and privacy agreements please see the below links:
- LinkedIn API Terms and Conditions: https://developer.linkedin.com/legal/api-terms-of-use
- LinkedIn Partner Program: https://developer.linkedin.com/partner-programs
- LinkedIn Privacy Policy: https://www.linkedin.com/legal/privacy-policy

### LINE Data Privacy Policy
The line allows access to their supported APIs and user profile data once you have registered for a developer account. You are not required to go through additional steps or verification.

If you need more details, please refer to following:
- Line Developer Agreement: http://terms2.line.me/LINE_Developers_Agreement
- Line Data Policy: https://terms2.line.me/LINE_Developers_user_data_policy

### Kaixin(开心网) Data Privacy Policy
Kaixin requires providing detailed information around your business or personal data. This includes a valid address and contact information in China. Once you have a developer account you will be able to access all of the supported OAuth APIs and user data.

If you need more details, please refer to following:
- Kaixin Terms of Use: http://www.kaixin001.com/platform/agreement.php?app=rapp
- Kaixin Audit Criteria: http://wiki.open.kaixin001.com/index.php?id=%E5%AE%A1%E6%A0%B8%E6%A0%87%E5%87%86

### QQ Data Privacy Policy
QQ, similar to many Chinese providers, requires you to register a developer account either via a valid business license or with your personal information. Once registered, your app will need to go through a verification process in order to make sure it complies with QQ’s application usage terms.

If you need more details, please refer to following:
- Developer Agreement: http://wiki.connect.qq.com/%E5%BC%80%E5%8F%91%E8%80%85%E5%8D%8F%E8%AE%AE
- App Review Requirements: http://wiki.connect.qq.com/%E7%BD%91%E7%AB%99%E5%AE%A1%E6%A0%B8%E8%A7%84%E8%8C%83

### VKontakte (VK) Data Privacy Policy
Once you have registered for a developer account, you will be able to directly create an app and access all of the VK APIs and data points.

If you need more details, please refer to following:
- VK Platform Policy: https://vk.com/dev/rules
- VK Terms of Service: https://vk.com/terms
