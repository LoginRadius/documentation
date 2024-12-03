# Security Question

There are multiple ways in which LoginRadius can improve the security of your end-users to utilize this feature.

>**Note:**- Please follow this [documentation](https://www.loginradius.com/docs/api/v2/customer-identity-api/security-question-api-usage/) if you are looking for detailed API usage for Security Questions.

 When you login to your LoginRadius Admin Console, navigate to the top header and select **Platform Security** . Under **Multi-Layered Security** select **Security Question**; on the left-hand panel you will be provided with **Settings** to manage your security question(s).

## Security Question

 **Configuring security questions through your Admin Console**

- In the **Settings** tab, hit **Add New Security Question** button to add a    new security question.

  ![](https://apidocs.lrcontent.com/images/ac31_276125e93442a482d98.89872356.png "")

- Fill out the question under **Enter Security Question**. 

  ![](https://apidocs.lrcontent.com/images/ac32_56395e93443df03992.51500294.png "")

 - Hit the **Save** button to save the settings.

The **Number of Security Questions To Render** setting dictates how many questions will be rendered on your registration form by the LoginRadius javascript form library. For example, choosing 2 will render both of the configured questions.

The **Security Question attempt LIMIT on reset password** allows you to set a limit on the number of attempts to answer the security question(s) while resetting passwords. This will restrict the number of attempts that customers can make to answer the security question(s). For example, choosing 4 will only allow 4 attempts to answer a security question.

## Relevant JavaScript customizations

Please follow this [documentation](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/advanced-js-customizations#securityquestion17) for instructions on how to implement the update security question answer feature, as well as the reset password by security question feature.
