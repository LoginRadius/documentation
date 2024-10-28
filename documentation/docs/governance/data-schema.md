# Standard Login Form Fields

## Overview

This document highlights the fields provided by LoginRadius for user registration forms. We have categorized the fields in 3 categories i.e, Standard Fields (Basics), Standard Fields (Advanced) and Custom Fields. You can configure and manage the fields for registration forms under the LoginRadius Admin Console > Platform Configuration > Authentication Configuration > Standard Login > Data Schema.

> **Note:** There is no inherent limit for the fields in the profile. However, you can establish a limit by applying a regular expression (regex) to the required field. You can navigate to the [Platform Configuration > Standard Login > Data Schema](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) section of the Admin Console to define the validation string according to your requirements. 

### Standard Fields (Basic)

Standard Fields are the most commonly used fields for registration forms, we have provided around 30 predefined Basic Standard fields they are:

- About
- City
- Country
- Date of Birth
- Email Subscription
- First name
- Gender
- Home Town
- Image URL
- Industry
- Last name
- Local City
- Local Country
- Main Address
- Middle Name
- Nick Name
- Phone ID
- Political
- Prefix
- Profile Country
- Relationship Status
- Religion
- State
- Suffix
- Thumbnail Image Url
- Time zone
- User Name

![](https://apidocs.lrcontent.com/images/sl1_127395e91c61430b022.50070049.png "Standard Fields (Basics)")

### Standard Fields (Advanced)

We have provided around 7 advanced predefined fields in Standard Fields, these are the complex fields provided for registration forms and can be enabled by simply clicking on them. Below is the list of Standard Fields (Advanced)

- Address
- Education
- IM Accounts
- Interest
- Phone Numbers
- Positions
- Sports

![](https://apidocs.lrcontent.com/images/slfm2_133965e91c6362750b7.05544601.png "Standard Fields (Advanced)")

### Custom Fields

Custom Fields are fields that you can create for your own specific needs and use on registration forms. They allow you to create new fields (up to 15) that are not listed under Standard Field (Basic and Advanced). If a field is not listed in the Standard Field list, you can create a new one, add it and configure it.

> **Note:** you should not create a field under custom field if it is already listed under standard fields list.

![](https://apidocs.lrcontent.com/images/slfm3_26905e91c65d98e490.35888612.png "Custom Fields")

You can configure standard fields and also can edit/delete/manage them, there are 2 available settings **General** and **Advanced**. Following are the modifications you can make from the settings.:

- **General**
   1. The label of standard fields

- **Advanced**
   1. Optional / Mandatory
   2. Field type
   3. Validation string

## Configuring a field/Advanced Settings

1. Click on any field from Custom/Standard Fields (Basic and Advanced) under Disabled Fields
2. Now, you will find that field under Enabled Fields
3. Click on the Edit icon to edit the respective field
4. Switch between General and Advanced settings and make required changes, hit on Save to save the settings.
     ![](https://apidocs.lrcontent.com/images/slfm4_8375e91c676764c91.81043345.png "General Settings")
     ![](https://apidocs.lrcontent.com/images/slfm5_103055e91c6919596a2.24884597.png "Advanced Settings")
5. To arrange the order of the fields simple drag the field and drop where you want to place it.
6. Now, hit Save Configuration
