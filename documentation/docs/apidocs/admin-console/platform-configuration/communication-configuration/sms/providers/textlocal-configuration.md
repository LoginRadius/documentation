# Configuring a Textlocal account with LoginRadius


##Overview

UK-based Textlocal provides Services and APIs for sending SMS. Messaging is generally billed by usage. For more information on Textlocal's products and pricing, please visit https://www.textlocal.com/.

This document will help you configure a Textlocal account with LoginRadius. Signup or login to your Textlocal account [here](https://www.textlocal.com/).

Textlocal supports 3 different methods of authentication. Please choose one of the methods below:

- Authenticate via API Key: Authenticate by providing an API Key.
- Authenticate via Username and Password: Authenticate by using your Textlocal account username and password.
- Authenticate via Username and Hash: Authenticate by using your Textlocal account username and the Textlocal generated Hash.


### Authenticate via API Key

1. In your Textlocal Admin Console under "Settings", go to "API Keys".

	![](https://apidocs.lrcontent.com/images/APIkeys_step1_43025b7c5a4a00d4d4-27746794_121855e4498908911f7.19334107.png)

2. To create an API Key, click the "Create New Key" button.

	![](https://apidocs.lrcontent.com/images/APIKeys_Step2_39515b7c5ad786d5e4-42944935_91015e4498c58e1650.97968545.png)

3. You will need to whitelist all of the IP addresses used by LoginRadius. You can find the complete list of IPs [here:](https://www.loginradius.com/docs/infrastructure-and-security/ip-addresses-list)

	![](https://apidocs.lrcontent.com/images/APIkeysStep3_88155b7c5b24260123-99953550_87635e4498ea0d6384.09364419.png)

	Click "Save New Key" after whitelisting the IP addresses.

4. You will be redirected back to the API Key List page with a success message.

	![](https://apidocs.lrcontent.com/images/APIKeys_Step4_189375b7c5b3a684281-76263246_72545e4498d89adfd7.37109405.png)

5. In the LoginRadius Admin Console under Platform Configuration > Phone Login > Communication API, enter your Textlocal API Key.


### Authenticate via Username and Password

To Authenticate via Username and Password, go to the LoginRadius Admin Console under Platform Configuration > Phone Login > Communication API and enter your Textlocal username and password.

>**Note:** Textlocal deems this method to be the least secure method of authentication and recommends using an alternative method if possible.

###Authenticate via Username and Hash

1. In your Textlocal Admin Console under "Help", go to "All Documentation".

	![](https://apidocs.lrcontent.com/images/Hashkey_step1_189865b7c5dffe2d632-03223395_281035e449914e75450.37345563.png)

2. Scroll down the page and note the API Hash.

	![](https://apidocs.lrcontent.com/images/Hashcode-STep2_235175b7c5e3571c4c2-19142918_136315e4498ff9ff011.74128767.png)

3. Reach out to Loginradius support with the obtained credentials to get them configured for your Loginradius account.
