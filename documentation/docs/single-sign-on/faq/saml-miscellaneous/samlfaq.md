# SAML FAQ

1. **How to fix a Invalid SAML Certificate or SAML requesting a signing certificate that doesn't match errors?**

   **Ans.** Mostly the Invalid certificate will be due to missing certificate/private key header and footer.

   E.g.

   **For Private Key**
   ```
   -----BEGIN RSA PRIVATE KEY-----

    < private key value >

   -----END RSA PRIVATE KEY-----
   ```

    **For Certificate**

   ```
   -----BEGIN CERTIFICATE-----

   < certificate value >

   -----END CERTIFICATE-----

   ```
2. **What happens if the SAML Certificate has expired?**

   **Ans.** If the certificate is expired then your users won't be able to use SSO to sign in to any SAML applications that use that certificate until you replace it with a new certificate.
   
   To generate a new certificate you can follow this [document](https://www.loginradius.com/docs/single-sign-on/concept/saml-miscellaneous/certificate/). 
3. **Can I login with email  and password after the first SSO login?**

   **Ans.** Yes, the team members, who do not have access to your SSO application but are added as team members in the Admin Console, can log in with the email and password.

4. **While uploading the SAML metadata for configuring the SAML app it is showing some undefined error?**

   **Ans.** In this case File downloaded from the Providers may be wrong or the file provided by the Service provider may not be formatted properly. Please refer below for the sample metadata file.

   ~~~
   <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" ID="_ad04ef31-52cc-4863-8517-19c2402c2ef9" entityID="<...entityID...>">
    <head/>
    <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ds:SignedInfo>
    <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
    <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
    <ds:Reference URI="#_ad04ef31-52cc-4863-8517-19c2402c2ef9">
    <ds:Transforms>
    <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
    <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
    <ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="#default samlp saml ds xs xsi md"/>
    </ds:Transform>
    </ds:Transforms>
    <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
    <ds:DigestValue>/WLhs3pZG0s4evncY7Udn+dDui0=</ds:DigestValue>
    </ds:Reference>
    </ds:SignedInfo>
    <ds:SignatureValue><...SignatureValue...></ds:SignatureValue>
    <ds:KeyInfo>
    <ds:X509Data>
    <ds:X509Certificate><...Certificate...></ds:X509Certificate>
    </ds:X509Data>
    </ds:KeyInfo>
    </ds:Signature>
    <md:SPSSODescriptor AuthnRequestsSigned="true" WantAssertionsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
    <md:KeyDescriptor use="signing">
    <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
    <ds:X509Data>
    <ds:X509Certificate><...Certificate...></ds:X509Certificate>
    </ds:X509Data>
    </ds:KeyInfo>
    </md:KeyDescriptor>
    <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat>
    <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://opkkk.test.com/sso/saml/consume" index="0" isDefault="true"/>
    </md:SPSSODescriptor>
    </md:EntityDescriptor>
   ~~~
5. **Why am  I not able to get the Email in the SAML Response?**

   **Ans.** In this case check the key values of fields format,Values sent from the Provider and receiver side.Both of the fields configured in the console should be the same if not it will not return the Email.

6. **After Whitelisting the ACS URL I am still getting the 400 error.**

   **Ans.** After whitelisting it might take some time (Approximatly 15 min) to reflect the changes so we will suggest waiting for some time.

7. **What is the purpose of the Certificate and private  key?**

   **Ans.** SAML signing credentials are used to establish a trust relationship between the service provider and identity provider to ensure that messages are coming from the expected identity and service providers. 

    In the **IDP Initiated** workflow the IdP signs the SAML assertion with the private key and the response is validated on the Service provider with the stored certificate value provided by IdP . Hence, only the IdP creates a SAML private key and certificate and shares the certificate value with the SP. 

    In **SP Initiated** workflow the Service Provider use its own SAML private key to sign  the SAML request and  a certificate containing SP public key should be given to the IdP to validate the signature and then  the IdP signs the SAML response with their own private key and the response is validated on Service provider with the stored certificate  value provided from the IDP.	

8. **Why is the SAML call showing unauthorized error?**

   **Ans.** This is due to mandatory fields not being configured properly ,You can recheck the Data mapping on Both LoginRadius  [Federated SSO> SAML](https://adminconsole.loginradius.com/platform-configuration/access-configuration/federated-sso/saml) and service provider.

9. **Why am I getting an invalid id provider error during Federated SSO SAML login workflow?** 

   **Ans.** This error usually occurs when you are not using the correct saml APP name or you have created the SAML APP on a different LoginRadius Environment

10. **What is SLO Link for SAML?**

    **Ans.** Single Logout (SLO) is a feature in federated authentication where end users can sign out of both their LoginRadius session and a configured application with a single action.
