# Disqus

[Disqus](http://disqus.com/) is a commenting platform that enables website discussions and communities. This sample integration is an example of a Disqus implementation with the LoginRadius social login. Find our integrations repository [here](https://github.com/LoginRadius/integrations)

> **Important:** Please ensure your LoginRadius account has been set up with at least one Social Login provider (e.g Facebook, Twitter, Google). If you need help with this please refer to [this](https://www.loginradius.com/docs/authentication/quick-start/social-login/#configuresocialprovider2)
 document.

To obtain the Disqus Secret and Public Key you will need to enable the Disqus SSO, which is done by requesting Disqus to enable it for your account. You may contact Disqus [here](https://disqus.com/support/?article=contact_SSO) to request this.**

## Setup and Configuration

1. Clone the integrations repository.

    ```
        $ git clone https://github.com/LoginRadius/integrations.git
    ```

2. Configure the required parameters.

3. Open the config.php file in the root of the Disqus->PHP folder
4. Find the defined constants as shown below
5. Replace the placeholders `{{ }}` with the correct values

```
// Find these Disqus Keys here https://disqus.com/api/applications/
define('DISQUS_SECRET_KEY', '{{ SECRET HERE }}');
define('DISQUS_PUBLIC_KEY', '{{ PUBLIC KEY HERE }}');

// Find your site shortname by navigating to https://(YOUR SITE).disqus.com/admin/settings/
// Scroll down to the "Site Identity" section
// You should see "Your website's shortname is ......."
define('DISQUS_SHORTNAME', '{{ SHORTNAME HERE}}');

// LoginRadius API KEY found on your LoginRadius Admin Console https://adminconsole.loginradius.com/platform-security/data-access-protection/api-credentials/account-api-keys
define('LR_API_KEY', '{{ LOGINRADIUS API KEY HERE }}');
```

- Navigate to the server root where you've set up the project in your browser e.g localhost/Disqus/PHP/index.php. The Disqus interface should now be shown.
- Click on the text area and click the LoginRadius button to open the social login popup window.
- Log in using a listed social provider - you should then be redirected back to your Disqus commenting interface as a logged in user.
- Post a comment.

## Additional Customization

Additional Disqus customization information can be found [here](https://help.disqus.com/customer/portal/articles/236206-integrating-single-sign-on)

- In the index.php file custom parameters can be defined in the section shown below. Please refer to the above link for more information.

```
var disqus_shortname = '<?php echo DISQUS_SHORTNAME; ?>';
var disqus_identifier = window.location.href;
var disqus_url = window.location.href;
var disqus_title = document.title;
var disqus_category_id = '123456';
```
