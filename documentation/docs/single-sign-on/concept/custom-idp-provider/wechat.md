## WeChat Integration

WeChat is a popular Chinese social media service that provides instant messaging along with commerce and payment services. This document goes over the full process from start to finish of getting up and running with WeChat as a Social Login Provider with LoginRadius.

#### WeChat App Creation

1. You will need to make sure you have a WeChat account created via the WeChat mobile app.

2. On your computer you will need to sign up for a WeChat Developer account at: 

	[https://open.weixin.qq.com](https://open.weixin.qq.com)

	Choose 注册 (Register):

	![Register for WeChat](https://apidocs.lrcontent.com/images/Edit1-1_278995a061e64500214.09755099.png "Register for WeChat")

3. You will be prompted with a form to create a WeChat Developer account and to link your existing WeChat account to the Developer account.

	![enter image description here](https://apidocs.lrcontent.com/images/developerform_238515a0620ea00ab08.56742802.png "")

4. Once you've logged in on your Developer Account go to

	管理中心 (Control Center) -> 网站应用 (Website Application)

	And hit 创建网站应用 还可创建 (Create a Website Application)

	![enter image description here](https://apidocs.lrcontent.com/images/edit2-1_300995a061eb3cf4c21.90241457.png "")

	Now, you will either be prompted with the ability to create the application or to fill out a Developer verification form (If the Developer verification form has not been filled out yet, you will need to fill it out as WeChat only allows verified Developers to create apps).

	**Note:** During the application process WeChat will ask for a Callback URL, provide them with the following URL:

	`https://<< YOUR LOGINRADIUS SITENAME >>.hub.loginradius.com`

5. Once you've successfully created your app you will receive an AppID and AppSecret. Write it down as it will be required later.


#### Setting up WeChat as a Custom oAuth Social Provider in the LoginRadius Admin Console

1. Go to your [LoginRadius Admin Console](https://adminconsole.loginradius.com) Under:

	Platform Configuration -> Authentication Configuration -> Custom IDPs
	
	Click **Add a New Provider**

	![Wechat](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-1-1_180345eda17f5f3ade6.79330247.png "OAuth Provider")

2. Fill out each field as per the instructions provided below:

	![We chat](https://apidocs.lrcontent.com/images/Custom_Idps_LoginRadius_User_Dashboard-3_279245eda197cac8479.13892890.png "Provider Form")


- **Provider Name**: WeChat

- **User Login Endpoint**: https://open.weixin.qq.com/connect/qrconnect
	
	
- **Access Token Endpoint:** 

	- If you have an International Official Account use:

		https://api.wechat.com/sns/oauth2/access_token
	
	- If you have a China Official Account use:

		https://api.weixin.qq.com/sns/oauth2/access_token

- **Application Key:**  `<< Your WeChat AppID >>`

- **Application Secret:**  `<< Your WeChat AppSecret >>`

- **Scope:**  snsapi_login

- **Response Type:** code

- **User Profile Endpoint:**

	- If you have an International Official Account use:

		https://api.wechat.com/sns/userinfo
	
	- If you have a China Official Account use:

		https://api.weixin.qq.com/sns/userinfo

- **Request Token HTTP Method:** GET

- **Access Token parameter name for API access:** access_token

- **Data Mapping:**

	WeChat returns datapoints that can be mapped to fields in LoginRadius, for this social login to work the only field that is mandatory is the LoginRadius ID field to the WeChat unionid field:

|LoginRadius Field|WeChat Field|
	|---|---|
	|ID|unionid|

You can also optionally map other WeChat fields to other 	LoginRadius fields as desired.



####Setting up the Custom WeChat Social Login Icon

**Note:** For this next step we highly recommend you familiarize yourself with customizing your social provider icons [here](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started#socialinterfacecustomization10). Once you're ready to have the WeChat Social Login icon displayed on your website you will need to inject it via code.

See our general all-purpose document on setting up a Custom OAuth Provider Icon for this step [here](https://www.loginradius.com/docs/api/v2/custom-identity-provider/custom-oauth-provider#settingupthecustomicon1). Once this is complete you should now have WeChat available as a social icon:

![WeChat Social Login](https://apidocs.lrcontent.com/images/Social-Login_33285a062123839806.18218724.png "WeChat Social Login")
