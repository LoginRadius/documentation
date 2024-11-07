# Zapier Integration
======================
--------------

Zapier is a popular tool for integrating Web Applications, the LoginRadius Zapier Integration allows you to feed LoginRadius User Profile data to your other applications when one of the configured events/triggers occurs.

**Allowed events:**  Login, Register, UpdateProfile, ResetPassword,  ChangePassword, emailVerification, AddEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber

This document goes over setting up a Zap with LoginRadius that feeds subscriber info into a Mailchimp list when a user registers. We chose Mailchimp as it's the most common integration, however, you can use any of the other apps available on Zapier to follow this document.

**Note:** This feature is an add-on, please contact [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) for details.

1. Login to your Zapier account and hit the "Make a Zap" button.

	![Make A Zap!](https://apidocs.lrcontent.com/images/Screenshot-2018-02-26-09-30-23_82905abd6a743ec010.69878681.png "Make A Zap")

2. In the Search box, search and select "LoginRadius".

	![Search for LoginRadius](https://apidocs.lrcontent.com/images/Screenshot-2018-04-02-11-51-25_238035ac27c66a8b4e7.74818073.png "Search for LoginRadius")

3. You will be presented with a list of triggers that LoginRadius can provide, for this example we will choose "New Registration" which triggers whenever a customer registers by completing a registration form. Once you're done choosing your trigger, hit "Save + Continue"

4. Hit the "Connect an Account" button, you will need to provide your LoginRadus API Key and API Secret. Hit "Yes, Continue" to proceed. You will be brought back to the main screen hit "Continue" and "Connect & Continue"

5. You should be prompted with a success message showing an example profile. Once you have a profile showing succesfully hit "Continue"

	Example of a profile showing successfully:
	![Login Success](https://apidocs.lrcontent.com/images/loginsuccess_68865ac27e69ed9c95.96146933.png "Login Success")

6. For this next step we will need to choose an "Action", this is where we decide what we want to happen when the trigger is triggered (somebody registers, in our case). For this example let's have choose "Mailchimp" to have Mailchimp add anyone who Registers added to a Mailchimp list.

7. choose the "Add/Update Subscriber" option.

	![Add/Update Subscriber](https://apidocs.lrcontent.com/images/add-update-sub_79315ac29662d53a65.74765869.png "Add/Update Subscriber")

8. click "Connect an Account" and enter your Mailchimp UserName and Password to link up Mailchimp account to Zapier.

9. Once you're back at the main screen hit "Save + Continue"

10. In this next area you will be prompted to fill out how you want the information to be pushed to Mailchimp.
 - **List:** This field is the name of the Mailchimp list you want to push information to.

 	![enter image description here](https://apidocs.lrcontent.com/images/picklist_12825ac2a00958ea39.99594172.png "enter image title here")

 - **Subscriber Email:** This is the email to push to Mailchimp you will be provided all of the fields from that customer's LoginRadius profile, for this example we will use the "Email" field.

  ![enter image description here](https://apidocs.lrcontent.com/images/emailvalue_85875ac2a1f62348f7.24747856.png "enter image title here")

 - **Double Opt-in:** Specify if the user should go through Mailchimp's confirmation email process to appear on the list.

 - **Update Existing:** In this field you can specify if you would like to overwrite that subscriber's data if they are already on the list.

 - **Replace Groups:** In this field you can specify if you would like to overwrite any existing groups the subscriber has.

 - **Groups:** Any groups you would like to provide for this subscriber.

 	Once you have filled all of the fields as desired hit "Continue" at the bottom

11. The next screen will show you a sample of what Zapier will be sending Mailchimp, if you are satisfied with this, hit "Send Test To Mailchimp"

	![Send Test](https://apidocs.lrcontent.com/images/Screenshot-2018-02-26-11-25-18_257795abd7214574e71.28375749.png "Send Test")

12. If the test is successfull you will receive "A Test subscriber was sent to MailChimp about 10 seconds ago." along with the response from Mailchimp, hit "Finish".

	![enter image description here](https://apidocs.lrcontent.com/images/test-successful_132035ac2a07d6843d1.21367462.png "enter image title here")

13. On the next screen to complete the setup, you will have to turn on the "switch".

	![Zap is turned off](https://apidocs.lrcontent.com/images/ZapOff_148695ac2a0e94be1e0.28890699.png "[Zap is turned off")

14. If the setup is succesfull you will be presented with a success message:

	![Zap Success](https://apidocs.lrcontent.com/images/zap-is-working_105145ac2a112b87ee9.51794997.png "Zap Success")

15. You are good to go, we recommend testing your new workflow one last time by recreating the event (in this case, try to do another registration) to make sure everything is in place.
