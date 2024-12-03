#Implementation on Production Environment

LoginRadius provides an option for integrating the LoginRadius features to your additional domains on your Production environment so that you can fully test out all of the functions and implementation to your multiple Live/Production environments.

In order to set up your Production implementation, domain white-listing is must, all domains must be white-listed under the LoginRadius Admin Console. 

To whitelist the URL follow the steps below:


1. Login into your LoginRadius [**Admin Console**](https://adminconsole.loginradius.com/).

2. Navigate to [**Deployment > Apps > Web Apps**](https://adminconsole.loginradius.com/deployment/apps/web-apps).

   ![Web Apps](https://apidocs.lrcontent.com/images/1--Web-Apps_1341363024b42894536.32304833.png "Web Apps")

3. Click on **Add New Site** button.

   ![Add New Site](https://apidocs.lrcontent.com/images/2--Web-Apps_2645563024c39ba9ef4.67382612.png "Add New Site")

4. Input the additional domain/website URL and hit the **Add** button.

![Enter Website URL](https://apidocs.lrcontent.com/images/3--Web-Apps_123263024cdf086033.70815976.png "Enter Website URL")
   
Now that you have white-listed your additional domain URL, you may need to handle the Callback location. For CMS plugins, this will be handled in the plugin admin panel. For other web technologies, you will need to override the Callback URL in the JavaScript interface.
