# React-Native Library

---

> Disclaimer

> This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs

## Download SDK

Get a copy of the React Native SDK and demo projects [here](https://github.com/LoginRadius/react-native-sdk).

## Configure your Account

To get your app supported LoginRadius React Native SDK, you need to slightly configure your LoginRadius user account.

1. Add another parameter to your User Registration Email template
   By default your email template should look like this:
   ![enter image description here](https://apidocs.lrcontent.com/images/Standard-Login---LoginRadius-User-Dashboard-1_182075e91f53c054924.30640909.png "Email template")
   Change the following URL

```
#Url#?vtype=emailverification&vtoken=#GUID#
```

to

```
#Url#?vtype=emailverification&vtoken=#GUID#&apikey=<Your-LoginRadius-API-Key>
```

And the same change should be also applied to your **Reset Password Email Template Configuration**.

2. Generate SOTT:-
   You need to pass the SOTT value at the time of registration in ionic SDK V2 and you can generate this by Admin Console.
   Open [Admin Console](https://adminconsole.loginradius.com/deployment/apps/web-apps), Click on SOTT available in the left panel. now set the time according to the requirement and generate SOTT.
   Note: While generating SOTT from Loginradius Admin Console, enable Encode SOTT.
   ![enter image description here](https://apidocs.lrcontent.com/images/Apps---LoginRadius-User-Dashboard_311005e91f625756406.03332066.png "Mobile Apps(SOTT)")

##Installation
Get a copy of the LoginRadius User Registration SDK from git and include this in your project.

```
LoginRadiusSDK.js
```

In the app.json file, initialize the LoginRadius User registration Object.

```
"apiKey":"<put-your-apiKey>",
"appName":"<put-your-appName>",
"sott":"<put-sott>",
"verificationUrl":"https://auth.lrcontent.com/mobile/verification/index.html",
"resetPasswordUrl":"https://auth.lrcontent.com/mobile/verification/index.html"

```

The above initialization requires options object with the following parameter:

| Name             | Required                                                                                             | Description                                                                                                                                                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiKey           | `<i class="fa fa-check-circle" aria-hidden="true"  style={{ color: #00A856; font-size: ' 1.5em' }}>` | Set to your LoginRadius API Key which you can get [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret).                               |
| appName          | `<i class="fa fa-check-circle" aria-hidden="true"  style={{ color: #00A856; font-size: ' 1.5em' }}>` | Set to your LoginRadius site name, this is required for User Registration to work with Single Sign On API.                                                                                              |
| sott             | `<i class="fa fa-check-circle" aria-hidden="true"  style={{ color: #00A856; font-size: ' 1.5em' }}>` | Secure One-time Token. Get token from [Admin Console](https://adminconsole.loginradius.com/deployment/apps/mobile-apps) Note: While generating SOTT from Loginradius Admin Console, enable Encode SOTT. |
| verificationUrl  | `<i class="fa fa-check-circle" aria-hidden="true"  style={{ color: #00A856; font-size: ' 1.5em' }}>` | Set dynamic URL for email verification (Default URL: https://auth.lrcontent.com/mobile/verification/index.html)                                                                                         |
| resetPasswordUrl | `<i class="fa fa-check-circle" aria-hidden="true"  style={{ color: #00A856; font-size: ' 1.5em' }}>` | Set dynamic URL for reset password.                                                                                                                                                                     |

your must be add in your .js file some dependency injection wheare you want use lgoinradius SDK.

```
import LoginRadiusSDK from './LoginRadiusSDK.js';
```

## Native Social Login

### ##Supported Devices

Currently, only Facebook And Google is supported for native login with our SDK for Android and iOS.

### Facebook Native Login

Before you can implement native login, you should have a look at the necessary instructions. The following link will help you regarding the same:

[React-Native Facebook Login](https://developers.facebook.com/docs/react-native/getting-started).

**Installation/Build Errors:**

**Failed to resolve: com.android.support:appcompat-v7:27.0.2 :**

If you're getting the above error in Android, then add the following dependencies in Project's build.gradle:

```
repositories {
	mavenLocal()
	jcenter()
	configurations.all {
		resolutionStrategy {
			force 'com.facebook.android:facebook-android-sdk:4.28.0'
		}
	}
	maven {
		url "https://maven.google.com"
	}
	maven {
		// All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
		url "$rootDir/../node_modules/react-native/android"
	}
}
```

If the following dependency exists in app's build.gradle,

```
compile('com.facebook.android:facebook-android-sdk:+')
```

then replace it with the following:

```
dependencies {
compile('com.facebook.android:facebook-android-sdk:4.28.0')  // From node_modules
}
```

**The SDK has not been initialized :**

If you're getting the above error in Android,then add the following code in MainApplication.java

```
public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
}
```

**Sample Code:**

The simplest way to add Facebook login functionality to your application is to use the LoginButton object from the SDK. When using the LoginButton, all of the complexity of creating a login user interface is handled for you. You specify the permissions that your application needs and the object notifies you about user actions through attribute-bound functions.

```
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;
type Props = {};
export default class App extends Component<Props> {
 render() {
    return (
      <View style={styles.container}>
      <LoginButton
          logInWithReadPermissions = {["public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
			  //Get LoginRadius access token in exchange of Facebook access token
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                      LoginRadiusSDK.facebookNativeLogin(data.accessToken.toString(), function (handle) {
                      alert(JSON.stringify(handle));
                    });

                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
 }

```

The above code snippet helps you to get token from Facebook. Then, this token can be used to get the LoginRadius access_token which can be used to authenticate user.

- Facebook Configuration for Facebook Native Login

Create a new Facebook App on the Facebook Developer site. You will need to create an Android application and get a Facebook Application ID: https://developers.facebook.com/

**Android**

- Create a Development Key Hash
  Facebook uses the key hash to authenticate interactions between your app and the Facebook app. If you run apps that use Facebook Login, you need to add your Android development key hash to your Facebook developer profile.
  You need to add this code under activity onCreate method.Put your activity package name in this code. After that run the below code and you'll get KeyHash in logs.

```
try {
       PackageInfo info = getPackageManager().getPackageInfo(
               "put-your-Activity-package-name",
               PackageManager.GET_SIGNATURES);
       for (Signature signature : info.signatures) {
           MessageDigest md = MessageDigest.getInstance("SHA");
           md.update(signature.toByteArray());
           Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
           }
   } catch (NameNotFoundException e) {
   } catch (NoSuchAlgorithmException e) {
   }
```

- Now select My Apps and create a new app using "Add a New App".

- After the creation of App, Click on setting into left panel, Select Add Plateform and choose Android

- After generating KeyHash successfully, you need to setup below setting and fill the required fields e.g. Package Name & Class Name.
  ![enter image description here](https://apidocs.lrcontent.com/images/facebook_2670358e72c19acad92.91822294.png)

**iOS**

- After the creation of App, Click on setting into left panel, Select Add Plateform and choose iOS.
- Pass your project bundle ID, iPhone store ID and iPad store ID.

![enter image description here](https://apidocs.lrcontent.com/images/Capture-1_3102158e788489b8bf2.24336866.png)

### Google Native Login

Before you can implement native login, you must install the [react-native-google-signin](https://github.com/devfd/react-native-google-signin) into your current project for google native login.

**Installation/Build Errors:**

**Failed to install react-native-google-signin**
If you're getting the above error,then you need to specify version of the react-native-google-signin:

```
npm install react-native-google-signin@0.12 --save
react-native link react-native-google-signin
```

\*Google Configuration for Google Native Login

**Android:-**

- To configure Android, generate a configuration file [here](https://developers.google.com/mobile/add?platform=android&cntapi=signin). Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console. There is no need to add the generated google-services.json file into your react-native project.
- After generating the configuration file, move to [Google Credentials Manager](https://console.developers.google.com/apis/credentials) and select your project name (Which you have created) in the header section. Now Select Credentials from the left panel and copy the Client ID available under project's **web application**.
  ![enter image description here](https://apidocs.lrcontent.com/images/Capture_758058e5ed837de044.65917717.png)
- Now pass the webClientId as

```
 async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      alert(err.message)
      console.log("Play services error", err.code, err.message);
    }
  }
```

**iOS:-**

- To get your iOS REVERSED_CLIENT_ID, generate a configuration file [here](https://developers.google.com/mobile/add?platform=ios&cntapi=signin). This GoogleService-Info.plist and just drag & drop in your project's "Resources" folder.
- The file contains the REVERSED_CLIENT_ID you'll need during installation and also copy CLIENT_ID from "GoogleService-Info.plist" and pass this on lroptions

Once you've followed the instructions in the above link and implemented Google Login successfully, then we'll fetch the ID token from Google to exchange with LoginRadius access_token.

```
_signIn() {
    GoogleSignin.signIn()
    .then((user) => {
	//Get Google ID token to exchange with LoginRadius access_token.
      LoginRadiusSDK.GoogleJWT(user.idToken, function (handle) {
        alert(JSON.stringify(handle));
    });
     // alert(JSON.stringify(user))
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      alert(err);
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
```

- Common Error messages:
  **12501 :**
  This is more commonly caused by an incorrect SHA1 being used to set up your project with Google. Make sure that the SHA1 of the build you are testing matches what you used in the Developer's Console.
  **10 :**
  Make sure that the client id you're passing in to the plugin (for webClientId) is of type Web Application, not of type Android, iOS, or other.

Make sure that you're Android SDK is completely up to date (see the list posted in my initial response above).

Finally, make sure that the SHA1 you used to set up in the developer's console is the same one that ionic is using when it builds your app. If it's not, log in will not work.

##LoginRadius API Showcase
This section helps you to explore various API methods of LoginRadius react-native SDK. They can be used to fulfill your identity based needs related to traditional login, registration and many more.

### Authentication API

This API is used to perform operations on a user account after the user has authenticated himself for the changes to be made. Generally, it is used for front end API calls. Following is the list of methods covered under this API:

- [Registration By Email](#registration-by-email)
- [Registration By Phone](#registration-by-phone)
- [Login By Email](#login-by-email)
- [Login By Phone](#login-by-phone)
- [Login By Username](#login-by-username)
- [Read Complete User Profile](#read-complete-user-profile)
- [Auth Social Identity](#auth-social-identity)
- [Link Social Account](#link-social-account)
- [Unlink Social Account](#unlink-social-account)
- [Update User Profile](#update-user-profile)
- [Check Email Availability](#check-email-availability)
- [Add Email](#add-email)
- [Verify Email](#verify-email)
- [Remove Email](#remove-email)
- [Resend Verification Email](#resend-verification-email)
- [Change Password](#change-password)
- [Forgot Password By Email](#forgot-password-by-email)
- [Forgot Password By Phone](#forgot-password-by-phone)
- [Phone Reset Password by OTP](#phone-reset-password-by-otp)
- [Validate Access Token](#validate-access-token)
- [Invalidate Access Token](#invalidate-access-token)
- [Check Phone Availability](#check-phone-availability)
- [Send OTP](#send-otp)
- [Resend OTP](#resend-otp)
- [Resend OTP By Access Token](#resend-otp-by-access-token)
- [Verify OTP](#verify-otp)
- [Verify OTP By Token](#verify-otp-by-token)
- [Get Security Questions By Email](#get-security-questions-by-email)
- [Get Security Questions By Phone](#get-security-questions-by-phone)
- [Get Security Questions By Username](#get-security-questions-by-username)
- [Get Security Questions By Access Token](#get-security-questions-by-access-token)
- [Update Security Questions By Access Token](#update-security-questions-by-access-token)
- [Update Phone](#update-phone)
- [Check Username Availability](#check-username-availability)
- [Set or Change Username](#set-or-change-username)
- [Reset Password By Reset Token](#reset-password-by-reset-token)
- [Reset Password By Security Questions using Email](#reset-password-by-security-questions-using-email)
- [Reset Password By Security Questions using Phone](#reset-password-by-security-questions-using-phone)
- [Reset Password By Security Questions using Username](#reset-password-by-security-questions-using-username)
- [Delete Account](#delete-account)
- [Delete Account with Email confirmation](#delete-account-with-email-confirmation)

### ##Registration By Email

This API creates a user in the database as well as sends a verification email to the user.

In the following example, we've provided limited user attributes as payload. To view the complete list of user attributes, please have a look at the body parameters of the user registration API [here](https://www.loginradius.com/docs/api/v2/user-registration/auth-user-registration-by-email).

```
  let payload = {
  "Prefix": "",
  "FirstName": "Test",
  "MiddleName": null,
  "LastName": "Account",
  "Suffix": null,
  "FullName": "Test Account",
  "NickName": null,
  "ProfileName": null,
  "BirthDate": "10-12-1985",
  "Gender": "M",
  "Website": null,
  "Email": [
    {
      "Type": "Primary",
      "Value": "example@example.com"
    }
  ],
  "Password": "******"
}

let emailtemplate = "<email-template>"; //optional

LoginRadiusSDK.userRegistrationByEmail(emailtemplate, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Registration By Phone

This API registers the new users into your Cloud Directory and triggers the phone verification process.

```
 let payload = {
  "Prefix": "",
  "FirstName": "Test",
  "MiddleName": null,
  "LastName": "Account",
  "Suffix": null,
  "FullName": "Test Account",
  "NickName": null,
  "ProfileName": null,
  "BirthDate": "10-12-1985",
  "Gender": "M",
  "Website": null,
  "PhoneId": "xxxxxxxxxxxxxxx",
  "Password": "******"
}

let smstemplate = "<smstemplate-template>"; //optional

LoginRadiusSDK.userRegistrationByPhone(smstemplate, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Login By Email

This API retrieves a copy of the user data based on the Email.

```
let payload = {
  "email": "",
  "password": ""
}

let emailtemplate = "<email-template>"; //optional
let grecaptcha_response = "<grecaptcha_response>"; //optional

LoginRadiusSDK.loginByEmail(emailtemplate, grecaptcha_response, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Login By Phone

This API retrieves a copy of the user data based on the Phone.

```
let payload = {
  "phone": "",
  "password": ""
}

let smstemplate = "<sms-template>"; //optional
let grecaptcha_response = "<grecaptcha_response>"; //optional

LoginRadiusSDK.loginByPhone(smstemplate, grecaptcha_response, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Login By Username

This API retrieves a copy of the user data based on the Username.

```
let payload = {
  "username": "",
  "password": ""
}

let emailtemplate = "<email-template>"; //optional
let grecaptcha_response = "<grecaptcha_response>"; //optional

LoginRadiusSDK.loginByEmail(emailtemplate, grecaptcha_response, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Read Complete User Profile

This API retrieves a copy of the user data based on the access token.

```
let access_token = "<your-access-token>"; //Required

LoginRadiusSDK.readAllProfilesByToken(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Auth Social Identity

This API is called just after account linking API and it prevents the raas profile of the second account from getting created.

```
let access_token = "<your-access-token>"; //Required

LoginRadiusSDK.socialIdentity(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Link Social Account

This API is used to link up a social provider account with the specified account based on the access token and the social providers user access token.

```
let access_token = "<your-access-token>"; //Required
let candidatetoken ="<provider-login-access-token>";//Required

LoginRadiusSDK.linkSocialIdentities(access_token,candidatetoken, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Unlink Social Account

This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database.

```
let access_token = "<your-access-token>"; //Required
let provider ="<provider-name>";//Required
let providerid ="<provider-providerid>";//Required

LoginRadiusSDK.unlinkSocialIdentities(access_token,provider,providerid, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Update User Profile

This API is used to update the user profile by the access token.

In the following example, we've provided limited user attributes as payload. To view the complete list of user attributes, please have a look at the body parameters of the Update Profile by Token API [here](https://www.loginradius.com/docs/api/v2/user-registration/auth-update-profile-by-token).

```
  let payload = {
  "Prefix": "",
  "FirstName": "Test",
  "MiddleName": null,
  "LastName": "Account",
  "Suffix": null,
  "FullName": "Test Account",
  "NickName": null,
  "ProfileName": null,
  "BirthDate": "10-12-1985",
  "Gender": "M",
  "Website": null
}

let access_token = "<your-access-token>"; //Required
let emailtemplate = "<emailtemplate-template>"; //optional
let smstemplate = "<smstemplate-template>"; //optional

LoginRadiusSDK.updateProfileByToken(access_token, emailtemplate, smstemplate, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Check Email Availability

This API is used to check the email exists or not on your site.

```
let email = "<email-address>"; //Required
LoginRadiusSDK.checkEmailAvailability(email, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Add Email

This API is used to add additional emails to a user's account.

```
let payload = {
  "email": "<email-address>",
  "type": "Secondary"
}

let access_token = "<your-access-token>"; //Required
let emailtemplate = "<emailtemplate-template>"; //optional
LoginRadiusSDK.addEmail(access_token, emailtemplate, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Verify Email

This API is used to verify the email of user.

```
let verificationtoken = "<your-verification-token>"; //Required
let welcomeemailtemplate = "<welcome-email-template>"; //optional
LoginRadiusSDK.verifyEmail(verificationtoken, url, welcomeemailtemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Remove Email

This API is used to remove additional emails from a user's account.

```
let access_token = "<your-access_token>"; //Required
let email = "<email-address>"; //Required
LoginRadiusSDK.removeEmail(email, access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Resend Verification Email

This API resends the verification email to the user.

```
let email = "<email-address>"; //Required
let emailtemplate = "<emailtemplate-template>"; //optional
LoginRadiusSDK.resendEmailVerification(email,emailtemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Change Password

This API is used to change the accounts password based on the previous password.

```
let payload = {
  "oldpassword": "<old-password>",
  "newpassword": "<new-password>"
}
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.changePassword(access_token,payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Forgot Password By Email

This API is used to send the reset password url to a specified account.

```
let email = "<email-address>"; //Required
let emailtemplate = "<emailtemplate-template>"; //optional
LoginRadiusSDK.forgotPasswordByEmail(email,emailtemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Forgot Password By Phone

This API is used to send the OTP to reset the account password.

```
let phone = "<phone-number>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.forgotPasswordByPhone(phone,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Phone Reset Password by OTP

This API is used to reset the password.

```
let payload = {
  "phone": "xxxxxxxxxxxxxx",
  "otp": "xxxxxxxxxxxxxx",
  "password": "xxxxxxxxxxxxxx",
  "smstemplate": "",
  "resetpasswordemailtemplate": ""
}
LoginRadiusSDK.restPasswordByOtp(payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Validate Access Token

This api validates access token, if valid then returns a response with its expiry otherwise error.

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.validateAccessToken(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Invalidate Access Token

This api call invalidates the active access token or expires an access token's validity.

```
let access_token = "<your-access_token>"; //Required`
LoginRadiusSDK.accessTokenInvalidate(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Check Phone Availability

This API is used to check the Phone Number exists or not on your site.

```
let phone = "<phone-number>"; //Required
LoginRadiusSDK.checkPhoneNumberAvailability(phone, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Send OTP

API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID.

```
let phone = "<phone-number>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.phoneSendOtp(phone,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Resend OTP

This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input.

```
let phone = "<phone-number>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.phoneResndOtp(phone,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Resend OTP By Access Token

This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists.

```
let access_token = "<your-access_token>"; //Required
let phone = "<phone-number>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.phoneResndOtpByToken(access_token,phone,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Verify OTP

This API is used to validate the verification code sent to verify a user's phone number.

```
let phone = "<phone-number>"; //Required
let otp = "<otp>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.phoneVerificationByOtp(phone,otp,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Verify OTP By Token

This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.

```
let access_token = "<your-access_token>"; //Required
let otp = "<otp>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.phoneVerificationOtpByToken(access_token,otp,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Security Questions By Email

This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.

```
let email = "<your-email>"; //Required
LoginRadiusSDK.getSecurityQuestionsByEmail(email, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Security Questions By Phone

This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.

```
let phone = "<phone-number>"; //Required
LoginRadiusSDK.getSecurityQuestionsByPhone(phone, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Security Questions By Username

This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.

```
let username = "<your-username>"; //Required
LoginRadiusSDK.getSecurityQuestionsByUserName(username, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Security Questions By Access Token

This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getSecurityQuestionsByAccessToken(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Update Security Questions By Access Token

This API is used to update security questions by the access token.

```
let payload = {
  "securityquestionanswer": {
    "db7****8a73e4******bd9****8c20": "Answer"
  }
}

let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.updateSecurityQuestionByToken(access_token,payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Update Phone

This API is used to update the login Phone Number of users

```
let access_token = "<your-access_token>"; //Required
let phone = "<phone-number>"; //Required
let smstemplate = "<smstemplate-template>"; //optional
LoginRadiusSDK.updatePhoneNumber(access_token,phone,smstemplate, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Check Username Availability

This API is used to check the UserName exists or not on your site.

```
let username = "<username>"; //Required
LoginRadiusSDK.checkUserNameAvailability(username, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Set or Change Username

This API is used to set or change UserName by access token.

```
let access_token = "<your-access_token>"; //Required
let username = "<username>"; //Required
LoginRadiusSDK.setUserName(access_token,username, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Reset Password By Reset Token

This API is used to set a new password for the specified account.

```
let payload = {
  "resettoken": "xxxxxxxxxxxxxxxxxxxx",
  "password": "xxxxxxxxxxxxx",
  "welcomeemailtemplate": "",
  "resetpasswordemailtemplate": ""
}

LoginRadiusSDK.resetPasswordByResetToken(payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Reset Password By Security Questions using Email

This API is used to reset password for the specified account by security question.

```
let payload = {
  "securityanswer": {
    "cb7*******3e40ef8a****01fb****20": "Answer"
  },
  "email": "",
  "password": "xxxxxxxxxx",
  "resetpasswordemailtemplate": ""
}

LoginRadiusSDK.resetPasswordBySecurityQuestion(payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Reset Password By Security Questions using Phone

This API is used to reset password for the specified account by security question.

```
let payload = {
  "securityanswer": {
    "cb7*******3e40ef8a****01fb****20": "Answer"
  },
  "phone": "",
  "password": "xxxxxxxxxx",
  "resetpasswordemailtemplate": ""
}

LoginRadiusSDK.resetPasswordBySecurityQuestion(payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Reset Password By Security Questions using Username

This API is used to reset password for the specified account by security question.

```
let payload = {
  "securityanswer": {
    "cb7*******3e40ef8a****01fb****20": "Answer"
  },
  "username": "",
  "password": "xxxxxxxxxx",
  "resetpasswordemailtemplate": ""
}

LoginRadiusSDK.resetPasswordBySecurityQuestion(payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Delete Account

This API is used to delete account using delete token.

```
let deletetoken = "<your-deletetoken>"; //Required
LoginRadiusSDK.deleteAccount(deletetoken, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Delete Account with Email confirmation

API deletes the user account by the access token.

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.deleteAccountWithEmailConfirmation(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### Social API

This API is used to fetch information about the social accounts of the user. It helps to get several type of information such as social profile, status, likes, messages, posts and more. Following are the methods covered under this API:

- [Social User Profile](#social-user-profile)
- [Get Status](#get-status)
- [Get Contacts](#get-contacts)
- [Get Album](#get-album)
- [Get Audio](#get-audio)
- [Get CheckIn](#get-checkin)
- [Get Company](#get-company)
- [Get Events](#get-events)
- [Get Following](#get-following)
- [Get Groups](#get-groups)
- [Get Likes](#get-likes)
- [Get Mention](#get-mention)
- [Get Photo](#get-photo)
- [Get Page](#get-page)
- [Get Video](#get-video)
- [Post Message](#post-message)
- [Get Posts](#get-posts)
- [Status Update](#status-update)

### ##Social User Profile

The User Profile API is used to get social profile data from the user’s social account after authentication.

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getSocialProfile(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Status

The Status API is used to get the status messages from the user’s social account.  
<b>Supported Providers:</b> Facebook, LinkedIn, Twitter, Vkontakte

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getStatus(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Contacts

The Contact API is used to get contacts/friends/connections data from the user’s social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will normalized into LoginRadius’ standard data format. This API requires setting permissions in your LoginRadius Admin Console.  
<b>Note:</b> Facebook restricts access to the list of friends that is returned. When using the Contacts API with Facebook you will only receive friends that have accepted some permissions with your app.  
<b>Supported Providers:</b> Facebook, Foursquare, Google, LinkedIn, Live, Twitter, Vkontakte, Yahoo

```
let access_token = "<your-access_token>"; //Required
let nextcursor = "<your-nextcursor-value>"; //optional
LoginRadiusSDK.getContacts(access_token,nextcursor, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Album

This API returns the photo albums associated with the passed in access tokens Social Profile.  
<b>Supported Providers:</b> Facebook, Google, Live, Vkontakte.

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getAlbums(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Audio

The Audio API is used to get audio files data from the user’s social account.  
<b>Supported Providers:</b> Live, Vkontakte

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getAudios(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get CheckIn

The Check In API is used to get check Ins data from the user’s social account.  
<b>Supported Providers:</b> Facebook, Foursquare, Vkontakte

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getCheckins(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Company

The Company API is used to get the followed companies data from the user’s social account.  
<b>Supported Providers:</b> Facebook, LinkedIn

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getCompanies(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Events

The Event API is used to get the event data from the user’s social account.  
<b>Supported Providers:</b> Facebook, Live

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getEvents(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Following

Get the following user list from the user’s social account.  
<b>Supported Providers:</b> Twitter

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getFollowings(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Groups

The Group API is used to get group data from the user’s social account.  
<b>Supported Providers:</b> Facebook, Vkontakte

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getGroups(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Likes

The Like API is used to get likes data from the user’s social account.  
<b>Supported Providers:</b> Facebook

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getLikes(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Mention

The Mention API is used to get mentions data from the user’s social account.  
<b>Supported Providers:</b> Twitter

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getMentions(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Photo

The Photo API is used to get photo data from the user’s social account.  
<b>Supported Providers:</b> Facebook, Foursquare, Google, Live, Vkontakte

```
let access_token = "<your-access_token>"; //Required
let albumid = "<your-albumid>"; //Required
LoginRadiusSDK.getPhotos(access_token,albumid, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Page

The Page API is used to get the page data from the user’s social account.  
<b>Supported Providers:</b> Facebook, LinkedIn

```
let access_token = "<your-access_token>"; //Required
let pagename = "<your-pagename>"; //Required
LoginRadiusSDK.getPage(access_token,pagename, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Get Video

The Video API is used to get video files data from the user’s social account.  
<b>Supported Providers:</b> Facebook, Google, Live, Vkontakte

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getVideos(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Post Message

Post Message API is used to post messages to the user’s contacts.  
<b>Supported Providers:</b> Twitter, LinkedIn  
The Message API is used to post messages to the user’s contacts. This is one of the APIs that makes up the LoginRadius Friend Invite System. After using the Contact API, you can send messages to the retrieved contacts. This API requires setting permissions in your LoginRadius Admin Console.

```
let to = "<to>"; //Required
let subject = "<subject>"; //Required
let message = "<message>"; //Required
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.postMessage(to, subject, message,access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});

```

### ##Get Posts

The Post API is used to get post message data from the user’s social account.  
<b>Supported Providers:</b> Facebook

```
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.getPosts(access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Status Update

The Status API is used to update the status on the user’s wall.  
<b>Supported Providers:</b> Facebook, Twitter, LinkedIn

```
let title = "<title>"; //Required
let url = "<url>"; //Required
let status = "<status>"; //Required
let imageurl = "<imageurl>"; //Required
let caption = "<caption>"; //Required
let description = "<description>"; //Required
let access_token = "<your-access_token>"; //Required
LoginRadiusSDK.postStatus(title, url, status, imageurl, caption, description,access_token, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### Custom Object API

This API is used to create additional custom fields for user registration. It provides methods for creating, updating and deleting custom objects. Following is the list of methods covered under this API:

- [Create Custom Object](#create-custom-object)
- [Read Custom Object By Token](#read-custom-object-by-token)
- [Read Custom Object by Record ID](#read-custom-object-by-record-id)
- [Update Custom Object](#update-custom-object)
- [Delete Custom Object](#delete-custom-object)

### ##Create Custom Object

This API is used to write information in JSON format to the custom object for the specified account.

```
let payload = {
  "customdata1": "Store my customdata1 value",
  "customdata2": "Store my customdata2 value"
}

let access_token = "<your-access_token>"; //Required
let objectname = "<objectname>"; //Required
let emailtemplate = "<emailtemplate>"; //optional
LoginRadiusSDK.createCustomObjectByToken(access_token, objectname, emailtemplate, payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Read Custom Object By Token

This API is used to retrieve the specified Custom Object data for the specified account.

```
let access_token = "<your-access_token>"; //Required
let objectname = "<objectname>"; //Required
LoginRadiusSDK.getCustomObjectByToken(access_token, objectname, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Read Custom Object by Record ID

This API is used to retrieve the Custom Object data for the specified account.

```
let access_token = "<your-access_token>"; //Required
let objectname = "<objectname>"; //Required
let objectrecordid = "<objectrecordid>"; //Required
LoginRadiusSDK.getCustomObjectByRecordIdAndToken(access_token, objectname, objectrecordid, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Update Custom Object

This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation.

updatetype : Possible values: replace, partialreplace. Find more details [here](https://www.loginradius.com/docs/api/v2/user-registration/custom-object-update-by-objectrecordid-and-token)

```
let payload = {
  "customdata1": "Store my customdata1 value",
  "customdata2": "Store my customdata2 value"
}

let access_token = "<your-access_token>"; //Required
let objectname = "<objectname>"; //Required
let objectrecordid = "objectrecordid"; //Required
let updatetype = "<updatetype>"; //Required
LoginRadiusSDK.updateCustomObjectByObjectRecordIdAndToken(access_token,objectname,objectrecordid,updatetype,payload, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```

### ##Delete Custom Object

This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account.

```
let access_token = "<your-access_token>"; //Required
let objectname = "<objectname>"; //Required
let objectrecordid = "<objectrecordid>"; //Required
LoginRadiusSDK.deleteCustomObjectByRecordIdAndToken(access_token, objectname,objectrecordid, function (handle) {
  // process returned object
  alert(JSON.stringify(handle));
});
```
