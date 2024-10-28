# Privacy Policy Versioning

Leverage the LoginRadius Privacy Policy Versioning feature to seamlessly implement control on the privacy policies displayed to your customers to obtain customer consent. With this tool you will be able to: 

1. Manage your privacy policy versions.
2. Know which customer has accepted which policy.
3. Take further action depending on your workflow e.g. prompt the customer with a newer policy.


## Overview

LoginRadius offers two different workflows for privacy policy versioning.

- **Moderated**: If this flow is enabled, the customer is prompted to accept the latest privacy policy, and the customer is logged in regardless if they accept or decline the policy. The latest accepted policy for the customer is stored in the [PrivacyPolicy](https://www.loginradius.com/docs/api/v2/getting-started/data-points-and-response-codes/detailed-data-points) profile field for future reference, additional logic around the privacy policy can be added as part of your implementation. 


- **Strict**: If this flow is enabled, the customer must accept the latest version of the privacy policy. If a user does not have the latest version of the privacy policy, they will not be able to login, and will be prompted to accept the new policy. The latest accepted policy for the customer is stored in the [PrivacyPolicy](https://www.loginradius.com/docs/api/v2/getting-started/data-points-and-response-codes/detailed-data-points) profile field.


## Configuration

1. In your LoginRadius Admin Console, head over to:

	Data Governance > Trust Center > Privacy Center > (Left Sidebar) Privacy Versioning 

2. Check the **Is Enabled** field to enable the feature. 

3. Choose your desired privacy versioning mode: **Strict** or **Moderated**.

4. On the left hand-side click **Add New Version**.

3. You will be prompted to add a Privacy Policy version and a start date with the time; the LoginRadius API uses this to identify the version of the Privacy Policy accepted by the customer. Once you're done, hit "Save".

![Privacy Policy Versioning](https://apidocs.lrcontent.com/images/ppv1_23705e91ce0a279668.20076225.gif "Privacy Policy Versioning")

### Privacy Policy Logs


You can check for the privacy logs for individual customer under the Manage section in Customer Management section lies under Profile Management as mentioned below:

![Privacy Policy](https://apidocs.lrcontent.com/images/Customer-Managem_3127361d4f58992f6c1.25551330.png "Privacy Policy")

### Usage via JS 

1. If you're using the LoginRadiusV2.js interfaces on your website and you have the **Strict** flow enabled, the customers will automatically be prompted if they need to have the checkmark in the privacy policy acceptance box to proceed further with login or registration, this means that the Privacy Acceptance Message will be prompted automatically on the following interfaces: login, sociallogin, registration. 

2. By default the privacy policy acceptance message that is prompted to the customer is "I agree to the terms of service". To configure the privacy policy acceptance message you will need to use a [Label Customization Hook](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/javascript-hooks#labelcustomizationhook1) on any page that uses an interface that might prompt the customer to accept the privacy policy, e.g. login, sociallogin, registration.

  **Example:**
  ```
  LRObject.$hooks.call('customizeFormLabel'{
  "acceptprivacypolicy" : "I agree to the terms of service listed below.",
  });
  ```

3. If you Privacy Policy flow is set as "Moderated" in the Admin Console, the customer will not be automatically prompted the privacy policy acceptance message as it's optional for them to accept it, in this case to manually load the message you can use the following JS Interface code:

  **Example:**
  ```
  var privacy_options = {};
  privacy_options.onSuccess = function(response) {
      console.log(response);
     };
  privacy_options.onError = function(errors) {
      console.log(errors);
  };
  privacy_options.container = "privacy-container";

  LRObject.util.ready(function() {
      LRObject.init("privacyPolicyUpdate", privacy_options);
  });
  ```

  `<div id="privacy-container"></div>`

  > Note: This Action is for the “Moderated” flow only, for the “Strict” flow you only need to have your LoginRadiusV2.js interfaces on the page.

	

### Usage via API


##### Usage for new registrations

1. Prompt your customers to view the privacy policy and allow them to accept it.

2. Based on whether the customer accepts the policy or not, update your payload for the [Auth User Registration by Email API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-email) via the `AcceptPrivacyPolicy` field which takes a boolean.

3. If your playload contains `"AcceptPrivacyPolicy": true` the customer will be created, If the payload contains `"AcceptPrivacyPolicy": false` and you have the **Strict** workflow enabled the customer will not be created, if you have the **Moderated** workflow enabled, the customer will be registered. Upon account creation, the privacy policy version will be stored in the `PrivacyPolicy` profile field:


```
	"PrivacyPolicy": {
	"Version": "version1",
	"AcceptSource": "http://example.com/register",
	"AcceptDateTime": "2018-01-01T00:00:00" // UTC datetime
	}
	```


Usage for existing customers

1. The customer provides their credentials, and an API call is made to allow login e.g. [Auth Login by Email
](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email), [Auth Login by Username API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username), [Smart Login API](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/overview), etc.

2. Depending on which workflow you have enabled the API will respond differently:

	- **Moderated**: The API will return both the customer profile and the `access_token`, you can refer to the privacy policy version in the `PrivacyPolicy` profile field to determine if you would like to update it.

	- **Strict**: If the customer does not have the latest privacy policy, the API returns an error message along with the `access_token` (however, no profile is returned):
	
	```
    {
    "Description": "You have not accepted the current privacy policy.",
    "ErrorCode": 1194,
    "Message": "Privacy policy does not match",
    "IsProviderError": false,
    "ProviderErrorResponse": null,
    "Data": {
      "access_token": "5672adaa-2519-4ecd-8017-09f7054f239e",
      "expires_in": "2018-02-28T07:55:59.6519482Z"
    }
   }
	```
You can use the provided `access_token` with the [Auth Privacy Policy Accept](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-privacy-policy-accept) This will update/add the latest privacy policy version in the `PrivacyPolicy` profile field.

3. The customer is allowed to login, if you have the **Strict** workflow, the customer will be able to continue to login until you update the policy version in the LoginRadius Admin Console.



Use Case/User Story


Many regulations and laws have been pushed requiring the use of a privacy policy in order to be compliant. Here are a few of them:

  - California Online Privacy Protection Act
  - Privacy Shield
  - EU General Data Protection Regulation
  - Children's Online Privacy Protection Rule

A common requirement for privacy policies is that they inform your customers about the type of data you're collecting and how it will be managed. As regulations are introduced or updated you may find the need to update your privacy policy accordingly. Our versioning system allows you to introduce different versions as your policy evolves, which means you have more flexibility to make the required changes and communicate those changes to your customers. 

For example, let’s say there is a new regulation you must incorporate into your current privacy policy. Simply upload the new version and enable the appropriate workflow (ie. strict or moderated) to inform customers. Customer are presented with the new privacy policy version and given the opportunity to review and accept. For your reference, the customer’s current privacy policy opt-in is kept on record.

