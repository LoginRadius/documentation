#Custom Field Configuration

Custom fields allow for a simple key value storage option that extends the LoginRadius Normalized user profile. These key values should be flat field (objects or Arrays are not supported) and should be limited to 1000 characters.

Add custom field in your Registration interface during field creation on your LoginRadius Admin Console by following the below steps:

1. Log in to your LoginRadius [**Admin Console**](https://adminconsole.loginradius.com/).
2. Click on "Platform Configuration".
3. Click on [Standard Login](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema).
4. On the right-hand side click on "Custom Fields".
5. Click on the "Add Custom field" and input the Field Name and hit "Add"
  
  
  ![](https://apidocs.lrcontent.com/images/cfl1_184175e91c867b66ff0.10724851.png "Custom Fields")
   
   ![](https://apidocs.lrcontent.com/images/cfl2_183445e91c881bfdb57.72620562.png  "Custom Fields")

     
   6. Once the field is added you can include it on your Registration form by simply clicking on the field name.

   
   ![enter image description here](https://apidocs.lrcontent.com/images/cfl3_194865e91c89abf4843.60539801.png "Custom Fields")
   
   
   ![enter image description here](https://apidocs.lrcontent.com/images/cfl4_51485e91c8b4377497.50566458.png "Custom Fields")
   
   
   In order to write data to these fields using the [Update API](https://www.loginradius.com/docs/api/v2/user-registration/auth-update-profile-by-token) or [Registration API](https://www.loginradius.com/docs/api/v2/user-registration/auth-user-registration-by-email), they must be created as described above.
