# Custom Domain and SSL Configuration

## Custom Domain

When there is a need to host the LoginRadius Identity Experience Framework on your own domain or a custom domain, it can be configured from the [Custom Domain](https://adminconsole.loginradius.com/deployment/apps/custom-domain) section of your Admin Console.

> **Pre-requisites:** Custom Domain feature should be enabled on your account. Please contact the [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) to enable this feature.

### Steps for setting up a custom domain

1. Navigate to [Deployment > Apps > Custom Domain](https://adminconsole.loginradius.com/deployment/apps/custom-domain) in the Admin Console.

   ![Step 1](https://apidocs.lrcontent.com/images/Step-1_2361362824cefb489c8.36271060.jpg "Step 1")

2. Enter your custom domain under the **Domain Name** field and click **Save**. The following screen will appear with the **CNAME record**, which will be used to configure the DNS settings for your custom domain.

   ![Step 2](https://apidocs.lrcontent.com/images/Step-2_2941462824d221871e4.98839711.jpg "Step 2")

3. To complete the verification process, change the **CNAME record** for your domain by going to your domain **DNS Manager > CNAME Record** and changing the CNAME record to `<LoginRadius Site name>.hub.loginradius.com` (as provided in **Step 2**).

4. Once your request for a custom domain is processed successfully, you will be able to see your custom domain listed in the [Custom Domain](https://adminconsole.loginradius.com/deployment/apps/custom-domain) section of your Admin Console.

   ![Step 4](https://apidocs.lrcontent.com/images/Step-3_2205662824e143a1e64.72403734.jpg "Step 4")

> **Note:**
>
> - Once you have updated the records on your DNS provider, it might take up to **12 hours** to complete the domain verification.
> - If you have enabled or added a Custom Domain for your existing application, in that case, you will need to update the configurations in all your social login provider apps (i.e., Facebook, Twitter, etc.) with the new domain. I.e. You need to replace `https://<LoginRadius site name>.hub.loginradius.com/` with `https://<Your Custom Domain>/` in all the Return/Redirect URLs in your configurations.
> - If you want to add more than one custom domain for your existing application, then you can raise a request with our [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

### SSL Configuration

If there are any issues related to SSL configuration on the custom domain, you can send a request to our [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket). It should contain details about the **Certificate Provider**, **Certificate Signing Request**, and **Public Key**. After providing the relevant details, our team will be able to help you out further.
