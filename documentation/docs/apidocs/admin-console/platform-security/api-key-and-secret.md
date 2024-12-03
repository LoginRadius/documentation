# API Key and Secret

## Account API Keys

### Getting your API Key and Secret

The API Key and API Secret are used to interact with LoginRadius' APIs. To get your API Key and API Secret, refer to the steps below:

- Navigate to the [Platform Security > API Credentials > Account API Keys](https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/account-api-keys) section of the Admin Console.

    ![Account API Keys](https://apidocs.lrcontent.com/images/Step-1_156201064064723c580dd607.07412282.png "Account API Keys")

- You can find your API Key and API Secret here. Click on the **SHOW** button to reveal the API Secret.

    ![API Key and API Secret](https://apidocs.lrcontent.com/images/Step-2_81992649364723d0f07a845.25600026.png "API Key and API Secret")

> **Note:** It is highly recommended not to share API secrets since API secret has management capabilities and exposing it is deemed a high-security risk for your account.

### Resetting your API Secret

To reset your API secret, click on **RESET SECRET** button to revoke the current secret and generate a new one.

![Reset Secret](https://apidocs.lrcontent.com/images/Step-3_109174271964723d71e61e77.41090900.png "Reset Secret")

> **Note:** After resetting the **API Secret** it will take **approx 15-20 minutes** to reflect the changes.

## Additional API Secret(s)

Additional API Secrets are the secrets that can be generated to take the place of the **Primary Secret** for specific actions based on their permissions. 

Therefore, in the case where multiple people need access to the site, you can provide each team member with their own respective secrets. You will then be able to revoke this if required.

### Adding Additional API Secret

To add an additional API secret, refer to the steps below:

- Click on **ADD A NEW API SECRET** button under [Platform Security > API Credentials > Additional API Secret(s)](https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/additional-api-secrets) in your Admin Console.

    ![Additional API Secrets](https://apidocs.lrcontent.com/images/Step-4_123203556364723deaa4e215.41404210.png "Additional API Secrets")

- Fill in the **Optional** fields, **Comment** and **Secret Name** followed by selecting the **API(s)** from the dropdown to grant access to certain aspects of your site like Analytics, Cloud Directory, Customer Identity, SSO Federation, etc. as shown with an example below.

    ![Adding API Secret](https://apidocs.lrcontent.com/images/Step-5_119722572864723e4a0f3db1.80035092.png "Adding API Secret")

    > **Note:**
    > - If you do not provide any **Secret name**, the backend will generate a random value.
    > - Up to **10 additional API Secrets** can be added for your LoginRadius site by selecting the desired APIs from the list. Use these API Secret(s) to securely grant limited access to certain areas of your site.

### Revoking Additional API Secret

To revoke any of the created additional API Secrets, refer to the steps below:

- Navigate to [Platform Security > API Credentials > Additional API Secret(s)](https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/additional-api-secrets) in your Admin Console and click on the **delete** button for the respective API Secret under the **ACTION** column as shown below.

    ![Delete API Secret](https://apidocs.lrcontent.com/images/Step-6_110991320164723ed69ccb53.60077648.png "Delete API Secret")

- Click on the **PROCEED** button to confirm the deletion.

    ![Confirm Deletion](https://apidocs.lrcontent.com/images/Step-7_122001129164723f244a6168.81110233.png "Confirm Deletion")



