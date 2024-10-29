Microsoft Dynamics
=====

## Overview

Microsoft Dynamics CRM is a customer management solution that is hosted by Microsoft to manage enterprise customer bases. LoginRadius has created some plugins that can be used to interface with your Dynamics application and will allow you to view and manage your LoginRadius users through the interface of Dynamics CRM.

Note: On-premises solutions may involve a different installation method.

## Designing Your Own Plugins

1. Make a new solution in Visual Studio as Class Library (.NET Framework). Name as desired plugin name.

2. Copy the packages folder from an existing plugin into the solution root directory

3. Copy the contents of the bin\debug folder to the corresponding one within the solution

4. Copy the References XML fields from another project's csproj and place it in the csproj of the new solution

5. Change the TargetFrameworkVersion in the new csproj to "v4.5.2"

6. Rename the C# file in the project from Class1 to the desired name.

7. Right click the project name in Solution Explorer and click Properties > Signing. Tick Sign the assembly and Select `<New...>` from the Choose a strong name key file dropdown.

8. Enter a Key file name (Name is PluginKey for the other plugins) and uncheck Protect my key file with a password, then click OK.

9. Complete the implementation of your plugin with the C# code and build to make sure a dll is successfully created.

10. On the Dynamics 365 portal for the organization, access Settings > Solutions and open the LoginRadius Authentication solution settings

11. Under processes, create the processes for the plugin's workflow.

12. Use the Plugin Registration tool to setup your new plugin.

## Initial Dynamics 365 Setup

1. Access the Dynamics 365 Portal and access Settings > Solutions on the Left dropdown.

2. Click Import and select the latest zip file for LoginRadius Authentication.

3. After completing the import process, open up the Solution settings by clicking LoginRadius Authentication under Display Name.

4. In the new window, on the left side bar, expand the Entities section and click LoginRadius License.

5. Under "Areas that display this entity", check mark any locations that the entity should be displayed under, then save.

6. Repeat steps 4 and 5 for LoginRadius Setting, LoginRadius Profile and also LoginRadius Custom Object, if needed. Click Publish.

7. Reload the main portal page for Dynamics 365 and verify that the LoginRadius Setting, LoginRadius Profile and LoginRadius License are displayed under Extensions. If not, return back to the page for step 6 and Publish the changes.

8. Click LoginRadius Settings, then click +New on the Ribbon of buttons near the top. Follow the steps to create a new entity for your LoginRadius credentials.

9. Repeat step 8 to create a LoginRadius License.

## Setup the Plugin with CRM

Below are the instructions of getting the plugin setup and hosted on Dynamics CRM.

1. Open the solution for the plugin that is desired to be setup with Visual Studio.

2. Build the project and note where the generated DLL is located.

3. Using the Plugin Registration Tool, click Register > Register New Assembly.

4. Click "..." and locate the DLL for the plugin and click OK.

5. Make sure Select all has been check marked and all plugins and workflows are ready to be registered. Click Register Selected Plugin.

6. In the newly created assembly with the plugin's name, right click and click register new step.

7. Under Message, locate the Action that should be associated with the plugin. At the moment, all of these start with lr_, which will display a dropdown with your choices. If your choices do not include the plugin, make sure the action is activated on the LoginRadius Authentication Solution setting and reload the organization on the Registration Tool.

8. Under Primary Entity and Secondary Entity, type in "none".

9. Change Event Pipeline Stage of Execution to PostOperation and check that Execution Mode is Synchronous and Deployment is Server. The other options can be left default.

10. Click Register New Step.

## Plugin List

Currently supported plugins for LoginRadius are as follows:

### Account Creation

When this plugin is setup, a LoginRadius account is created whenever a linked Contact is created for your CRM website. A default LoginRadius Profile is created for your CRM account which contains the default data from the LoginRadius traditional profile.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Create Profile with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Create Profile Workflow Category. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. Click Save and Close, then activate the Workflow.

8. If the DLL for LoginRadiusAccountCreate has not been registered yet, follow the Plugin Registration setup.

9. On the main portal, access Contacts and make a new Contact with a valid Email in the Email section.

10. If the Email field is not visible, click Forms on the Ribbon, scroll down the right Field Explorer and drag and drop the Email to a location on the Contact form.

11. Verify that a user account has been created on the LoginRadius database if not already created, and that the LoginRadius Profile Link is populated on the Contact. Verify that a newly created LoginRadius Profile record is created and that the UID matches.

### Account Linking

This links a currently existing Contact on your CRM solution with a LoginRadius profile. The linking by filling in the UID field in the Contact with the UID of the LoginRadius profile being linked.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Link Account with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Link Account Dialog. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. If the DLL for LoginRadiusLinkAccount has not been registered yet, follow the Plugin Registration setup.

8. On the main portal, access a CRM Contact that is not linked to a LoginRadius Account, or create a new Contact with no Email.

9. On the Ribbon click Start Dialog (Might be under the "..." section), find LoginRadius Link Account, check mark it and click Add.

10. Follow the dialog instructions to link the LoginRadius account. Verify that the account is linked by refreshing the Contact page and seeing a populated field for LoginRadius Profile Link. Verify that a newly created LoginRadius Profile record is created and that the UID matches.

### Password Change

You can change the LoginRadius user password of a linked account through the use of this plugin.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Change Password with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Repeat step 3 for the LoginRadius Change Password with Dialog Category.

5. If the DLL for LoginRadiusChangePassword has not been registered yet, follow the Plugin Registration setup.

6. On the main portal, access a Contact with a valid linked LoginRadius account.

7. On the Ribbon click Start Dialog (Might be under the "..." section), find LoginRadius Change Password, check mark it and click Add.

8. Follow the dialog instructions to set the password of the user account. Verify that the password has successfully changed.

### Account Update

By editing the LoginRadius Profile on your CRM solution, APIs are called that updates your LoginRadius accounts as well as your Contact’s profile on CRM.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Update Profile with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Update Profile Workflow Category. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. Click Save and Close, then activate the Workflow.

8. If the DLL for LoginRadiusAccountUpdate has not been registered yet, follow the Plugin Registration setup.

9. On the main portal, access Contacts and access or create a Contact with a LoginRadius linked account.

10. Access the linked LoginRadius Profile and verify that it has a valid UID.

11. Change the value of any of the fields located on the LoginRadius Profile and save the profile.

12. Verify that the user profile has been updated in the LoginRadius database.

Account Deletion

When a linked Contact is deleted from your CRM solution, the linked LoginRadius account is also deleted.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Delete Account with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Delete Account Workflow Category. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. Click Save and Close, then activate the Workflow.

8. If the DLL for LoginRadiusAccountDelete has not been registered yet, follow the Plugin Registration setup.

9. On the main portal, access Contacts and access or make a new Contact, then enter the Contact's page.

10. On the Ribbon click Delete and confirm the deletion of the Contact.

11. Verify that the account associated with the provided UID from LoginRadius databases as well as the LoginRadius Profile record have been deleted.

### Email Invalidation

If a user’s email needs to be invalidated and requires the user to resend and validate another email, this interface can be used to enable that workflow.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Invalidate Email with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Invalidate Email Dialog Category. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. Click Save and Close, then activate the Dialog.

8. If the DLL for LoginRadiusInvalidateEmail has not been registered yet, follow the Plugin Registration setup.

9. On the main portal, access Contacts and access or make a new Contact linked with a LoginRadius profile.

10. Go through the procedure to verify the email of the LoginRadius account.

11. On the Contact's page, on the Ribbon click Start Dialog (Might be under the "..." section), find LoginRadius Invalidate Email, check mark it and click Add.

12. Follow the dialog instructions to set the password of the user account. Verify that the user's email has been un-verified.

### Profile Read

If you have other applications that may cause your LoginRadius application to get updated, you can start a profile read flow to update your CRM profiles with the updated LoginRadius profile.

1. Access the Dynamics 365 Portal and access Settings > Solutions and open the LoginRadius Authentication settings.

2. Click Processes on the left side bar and click the LoginRadius Read Profile with Action Category.

3. If the fields are editable, click Activate on the top and close the Action settings window.

4. Open the LoginRadius Read Profile Dialog Category. If it is not already deactivated, click Deactivate at the top.

5. Next to Actions on the steps at the bottom, click Set Properties.

6. On the new window, all of the fields should be filled with text with a yellow highlight except for the LRCredentials field. Click the magnifying glass icon and select the credentials created above in "Initial Dynamics 365 Setup".

7. Click Save and Close, then activate the Dialog.

8. If the DLL for LoginRadiusReadProfile has not been registered yet, follow the Plugin Registration setup.

9. On the main portal, access Contacts and access or make a new Contact with a linked LoginRadius Profile.

10. Edit something on the LoginRadius Profile through the API or another alternate method.

11. On the Ribbon click Start Dialog (Might be under the "..." section), find LoginRadius Read Profile, check mark it and click Add.

12. Follow the dialog instructions to update the account displayed on Dynamics 365. Verify that the linked LoginRadius Profile has its fields updated with the new data.

### Custom Objects

There are plugins setup that allow you to manage Custom Objects for your users. This includes plugins for creation, deletion, updating and reading updated Custom Objects from LoginRadius. To interact with your custom objects, use the Custom Objects linked with your Contact.

1. Follow the steps to activate all the Custom Objects processes, while also making sure that any workflows or dialogs have been updated with your set of LRCredentials.

2. Create a Custom Object by accessing the Dialog on the Contact page. Verify that the object also exists on LoginRadius Profiles.

3. Update the Custom Object on LoginRadius profiles through the API or alternate methods. Use the Get Custom Object Dialog on the Contact page to update the Custom Object data with data from LoginRadius Servers.

4. Edit the Custom Object field as needed, then execute the Dialog on the LoginRadius Custom Object page to update the Custom Objects on the LoginRadius Servers. The replacement option is set to "replace" so all data will be cleaned before assigning new data.

5. Call Delete on the Custom Object field to delete itself and the corresponding data on LoginRadius servers.
