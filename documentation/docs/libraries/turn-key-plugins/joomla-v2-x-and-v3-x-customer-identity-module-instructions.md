Joomla Customer Identity and Access Management Extension instructions for v2.x and v3.x
===
----
 
**Joomla** is a free and open-source content management system (CMS) for publishing web content. Joomla is written in PHP, uses object-oriented programming techniques (since version 1.5) and software design patterns. It stores data in a MySQL, MS SQL or PostgreSQL database.

LoginRadius provides Joomla Customer Identity and Access Management Extension for v2.x and v3.x.


## Joomla Installation Guide:-

> **Note:** 
- Before installing the new version of the LoginRadius User registration module, make sure you have [uninstalled](#uninstall-the-plugin) the previous version.
- Enabling both the versions together i.e. V1 and V2 of Joomla Extension may cause conflicts. For smoother operations, disable one of them.


## Joomla Configurations

1. Login to your Joomla admin panel.

2. On the top menu of your admin panel, navigate to the **Extensions** tab, and click on the **Manage** button as shown in the below screen.
  ![enter image description here](https://apidocs.lrcontent.com/images/unnamed-18_194035f0d7050000758.71011804.png "")

3. Now, click on the **Install** tab under **Manage** and under **Upload Pacakage** File tab upload the LoginRadius Joomla plugin which you have downloaded from [here](https://github.com/LoginRadius/joomla-identity-extension/blob/master/package/ciam_loginradius.zip). 
  ![enter image description here](https://apidocs.lrcontent.com/images/Extensions_Install_joomla_site_Administration-2_100235f0d71016c3b02.42340926.png "")

4. After uploading the zip file, you'll get a status message in the same window as shown in the below screen.

![enter image description here](https://apidocs.lrcontent.com/images/Joomla_v2_Google_Docs-1_26325f0d71e17e3e47.37504451.png "")


## Module Configurations

1.  On the top menu click on the **Extensions**  tab and select **Modules** tab from the drop-down as shown in the below screen.
  ![enter image description here](https://apidocs.lrcontent.com/images/Modules_Site_joomla_site_Administration-3_108075f0d73879a5b93.90966879.png "")

2. Search for the **CIAM** in the search tab as shown in the below screen.
  ![enter image description here](https://apidocs.lrcontent.com/images/unnamed-19_132265f0d7413f02a87.09893257.png "")

3. After getting the result of the search, click on **CIAM Module** to change the status from **Unpublished** to **Published** (if the green check is there then the status is Published). As shown in the below screen. Update the other settings like Position, Type, Pages, Access, Language etc.
  ![enter image description here](https://apidocs.lrcontent.com/images/Modules_Site_joomla_site_Administration-2-1_194525f0d75362706c0.74786266.png "")

4. Click on the **Components** on the top menu, and click on **CIAM LoginRadius** tab as shown in the below screen:
  ![enter image description here](https://apidocs.lrcontent.com/images/CIAM_LoginRadius_joomla_site_Administration-2_214285f0d75edde24a9.05451001.png "")

5. Under the **Activation** tab, insert Login radius [Site Name](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/), [API Key & Secret Key](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/), and **Save** the settings to activate the plugin as shown in the below screen.

**Note:** Refer **PREFIX_loginradius_users** table to look user details in the database:

## Uninstall the plugin

1. Click on **Extensions** on the top menu and select **Manage** and choose **Manage** from the drop-down as shown in the below screen.
  ![enter image description here](https://apidocs.lrcontent.com/images/Extensions_Manage_joomla_site_Administration-2_159915f0d77fe8a5bc0.71350844.png "")

2. Search for **CIAM** in the search bar.

3. Now, Check the CIAM LoginRadius Component, CIAM Module and CIAM Plugin and click on Uninstall button to uninstall them as shown in the below screen. 
  ![enter image description here](https://apidocs.lrcontent.com/images/Extensions_Manage_joomla_site_Administration-1-1_237085f0d78df9ff716.43047343.png "")

## Manually Uninstall the Plugin

 - Navigate to **administrator/components** in your Joomla root folder and remove folder **com_ciamloginradius**.

 - Navigate to **administrator\language\YOUR_LANGUAGE_CODE** and remove following files:-
               YOUR_LANGUAGE_CODE.en-GB.com_ciamloginradius.ini

 - Navigate to** language/YOUR_LANGUAGE_CODE **in your Joomla root folder and remove following files:-
              YOUR_LANGUAGE_CODE.en-GB.com_ciamloginradius.ini
              YOUR_LANGUAGE_CODE.en-GB.mod_ciam.ini
              YOUR_LANGUAGE_CODE.en-GB.mod_ciam.sys.ini

 - Navigate to **modules** in your Joomla root folder and remove folder **mod_ciam**.

- Navigate to **plugins/system** in your Joomla root folder and remove folder **ciam,singlesignon**.

- Navigate to **media** in your joomla root folder and remove folder **com_ciamloginradius**.

- Navigate to **components** in root directory and find the folder with **com_ciamloginradius** name, remove it.

- Remove **Images/sociallogin** folder in your Joomla root directory.

- Now, login to your **SQL database** and run the following query (Replace PREFIX with your Joomla database prefix)
 

             DROP TABLE IF EXISTS `PREFIX_LoginRadius_settings`;
             DROP TABLE IF EXISTS `PREFIX_LoginRadius_users`;
             DELETE FROM `PREFIX_assets` WHERE `name` = "com_ciamloginradius";
             DELETE FROM `PREFIX_extensions` WHERE `element` = 'com_ciamloginradius;
             DELETE FROM `PREFIX_extensions` WHERE `element` = 'mod_ciam';
             DELETE FROM `PREFIX_extensions` WHERE `element` = 'ciam'; 
             DELETE FROM `PREFIX_extensions` WHERE `element` = 'singlesignon';         
             DELETE FROM `PREFIX_menu` WHERE `title` = "COM_CIAM_LOGINRADIUS";
             DELETE FROM `PREFIX_modules` WHERE `module` = 'mod_ciam';
