# Xamarin Library

---

> Disclaimer

> This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

## Download SDK

You can download the SDK from [here](https://github.com/LoginRadius/xamarin-sdk)

## Configure your LoginRadius Account

To get your app supported by LoginRadius Xamarin SDK, you need to slightly configure your LoginRadius user account.

1. Add parameter to your User Registration Email template
   By default your email template should look like this: ![enter image description here](https://apidocs.lrcontent.com/images/Standard-Login---LoginRadius-User-Dashboard-1_182075e91f53c054924.30640909.png "Email template")

Change the following URL

```
#Url#?vtype=emailverification&vtoken=#GUID#
```

To

```
#Url#?vtype=emailverification&vtoken=#GUID#&apikey=<Your-LoginRadius-API-Key>
```

And the same change should be also applied to your **Reset Password Email Template Configuration** and **Add Email Template Configuration**. 2. Generate SOTT:-

You need to pass the SOTT value at the time of registration in Xamarin SDK V2 and you can generate this by Admin Console.
Open [Admin Console](https://adminconsole.loginradius.com/deployment/apps/web-apps), Click on SOTT available in the left panel. now set the time according to the requirement and generate SOTT.

![enter image description here](https://apidocs.lrcontent.com/images/Apps---LoginRadius-User-Dashboard_311005e91f625756406.03332066.png "Mobile Apps(SOTT)")

## Initialize SDK

Initialize the SDK with your API key and Sitename

- Details on obtaining Site name [here](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/) and API key [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/#api-key-and-secret)

- Details on verificationUrl for email verification we give default url(Default URL: https://auth.lrcontent.com/mobile/verification/index.html)

- Details on resetPasswordUrl for Reset Password we give default url(Default URL: https://auth.lrcontent.com/mobile/verification/index.html)

- Details on verificationUrl for AddEmail API we give default url(Default URL: https://auth.lrcontent.com/mobile/verification/index.html)

- Details on deleteurl for Delete Account with Email Confirmation API we give default url(Default URL: https://auth.lrcontent.com/mobile/verification/index.html)

## Integrate Social Login

**Web Social Login**: Web Social Login is done by using webview. You can set social login by two ways:

1. Xamarin Native Application

**Note:** For Xamarin Native Application First you need to enable No callback feature from LoginRadius Backend.So for this process you just need to create a support ticket.

a) Android :-

```
public class MainActivity:
global::Xamarin.Forms.Platform.Android.FormsApplicationActivity // superclass new in 1.3
{
Guid obj = Guid.NewGuid();
GUIDStorage guid = new GUIDStorage();
protected override void OnCreate(Bundle bundle) {
base.OnCreate(bundle);

global::Xamarin.Forms.Forms.Init(this, bundle);
guid.GUIDTOKEN = Convert.ToString(obj);
Dictionary < string, string > webview = new Dictionary < string, string > ();
webview.Add("appname", appname);
webview.Add("callbackguid", guid.GUIDTOKEN);
webview.Add("apikey", apikey);
webview.Add("provider", "facebook");
GetEmailPromptSmartLoginPing(apikey, guid.GUIDTOKEN);
LoadApplication(new HybridWeb(webview));
}
}
```

b) ios:-

```
public partial class ViewController : UIViewController
{

partial void Facebook_TouchUpInside(UIButton sender)
{
GUIDStorage guid = new GUIDStorage();
Guid obj = Guid.NewGuid();
guid.GUIDTOKEN = Convert.ToString(obj);

var appDelegate = (AppDelegate)UIApplication.SharedApplication.Delegate;
// appDelegate.FinishedLaunching();
Dictionary` <string, string>` webview = new Dictionary` <string, string>`();
webview.Add("appname", this.appName);
webview.Add("callbackguid", guid.GUIDTOKEN);
webview.Add("apikey", this.apiKey);
webview.Add("provider", "facebook");
WebViewUrl web = new WebViewUrl();
var sfvc = new SFSafariViewController(new NSUrl(web.getWebUrlWithNoCallBack(webview)), true);
PresentViewController(sfvc, true, null);
GetEmailPromptSmartLoginPing(this.apiKey, guid.GUIDTOKEN);
}
}
```

After adding above code in your platform you must call the ping function for getting loginradius token.
Note: Please don't do anything in case of Failure(error) event, this function calls itself in case of error.

```
public async void GetEmailPromptSmartLoginPing(string apikey, string clientguid) {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", apikey);
data.Add("clientguid", clientguid);
await EmailPromptAutoLoginPingAPI.GetEmailPromptAutoLoginPing(data, response => {
 string token=response.access_token; // Success event
}, (error) => {
GetEmailPromptSmartLoginPing(apikey, guid.GUIDTOKEN); // Failure event
});
```

2. Xamarin Forms Cross-Platform

a) Create a Webview

```
public partial class LRWebview : ContentPage
{
public LRWebview(string url)
{
    InitializeComponent();
    var browser = new WebView();
    browser.Source = url;
    Content = browser;
    browser.Navigated += (sender, e) => {

        var changedUrl = ((WebView)sender).Source;
        var finalUrl = changedUrl.GetType().GetProperty("Url").GetValue(changedUrl, null);
        if (finalUrl.ToString().Contains("?token"))
        {
            string dict =  GetParams(finalUrl.ToString());
            Preferences.Set("token", dict); // save loginradius token
            Navigation.InsertPageBefore(new MainPage(), this);
            Navigation.PopAsync();
        }

        //hello
    };


}

private static string GetParams(string uri)
{
    var matches = Regex.Matches(uri, @"[\?&](([^&=]+)=([^&=#]*))", RegexOptions.Compiled);
    string value ="";
    foreach (Match m in matches)
        if (Uri.UnescapeDataString(m.Groups[2].Value) == "token")
        {
            value =  Uri.UnescapeDataString(m.Groups[3].Value).ToString();
        }

    return value;
}

}
```

b) Webview Navigation

```
WebViewUrl web = new WebViewUrl();
Dictionary` <string, string>` webview = new Dictionary` <string, string>`();
webview.Add("appname", siteName);
webview.Add("apikey", apikey);
webview.Add("provider", "facebook");
await ((NavigationPage)Application.Current.MainPage).PushAsync(new LRWebview(web.getWebUrl(webview)));
```

## Integrate Registration Service

Registration service supports traditional registration and login methods. Registration Service is done through Authentication API. Registration requires a parameter called SOTT.

- You can generate SOTT by login into the [LoginRadius Admin Console](https://adminconsole.loginradius.com)
- Move to DEPLOYMENT -> MOBILE APP
- Click on SOTT tab in the left panel.

You need to pass the required parameters to the below function to enable registration service.

**NOTE:** You can use Registration by two ways:

- Using Email-

```
public async void GetUserRegistrationbyEmail(string apikey, string sott, string verificationurl, string emailtemplate) {
UserIdentityCreateModel user = new UserIdentityCreateModel();
user.FirstName = "xxxx";
user.LastName = "xxxx";
user.Password = "xxxx";
Email email = new Email();
email.Type = "Primary";
email.Value = "xxxx@example.com";
user.Email = new List < Email > ();
user.Email.Add(email);

await UserRegistrationbyEmailAPI.GetUserRegistrationbyEmail(apikey, sott, verificationurl, emailtemplate, user, response => {
string res= Convert.ToString(response.IsPosted);   // Success event
}, (error) => {
string err= error.description;                     // Failure event
});
}
```

- Using Phone-

```
public async void GetPhoneUserRegistration() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("sott", "xxxxx");
//data.Add("verificationurl", "xxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
UserIdentityCreateModel user = new UserIdentityCreateModel();
user.FirstName = "xxxx";
user.LastName = "xxxx";
user.Password = "xxxx";
user.PhoneId = "xxxxxxx";

await PhoneUserRegistrationAPI.GetPhoneUserRegistration(data, user, response => {
  string res= Convert.ToString(response.IsPosted);   // Success event
}, (error) => {
  string err= error.description;                     // Failure event
});
}
```

## Integrate Traditional Login

You need to call the below function to integrate Traditional Login.
**NOTE:** You can use Traditional Login by two ways:

- Using Email-

```
public async void GetLoginbyEmail(){
Dictionary` <string, string>` data = new Dictionary` <string, string>`();
data.Add("apikey", "xxxxx");
data.Add("email", "xx@xxxx.com");
data.Add("password", "xxxxxx");
//data.Add("securityanswer", "xxxxxx"); (optinal)
//data.Add("verificationurl", "xxxxxx"); (optinal)
//data.Add("loginurl", "xxxxxx"); (optinal)
//data.Add("emailtemplate", "xxxxxx"); (optinal)
//data.Add("g-recaptcha-response", "xxxxxx"); (optinal)
await LoginbyEmailAPI.GetLoginbyEmail(data, response => {
string res = Convert.ToString(response.access_token);   // Success event
}, (error) => {
string err = error.description;                     // Failure event
});
}
```

- Using Phone-

```
public async void GetPhoneLogin(){
Dictionary` <string, string>` data = new Dictionary` <string, string>`();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxxx");
data.Add("password", "xxxxxx");
//data.Add("securityanswer", "xxxxxx"); (optinal)
//data.Add("loginurl", "xxxxx");(optinal)
//data.Add("smstemplate", "xxxxxxx");(optinal)
//data.Add("g-recaptcha-response", "xxxxxx");(optional)
await PhoneLoginAPI.GetPhoneLogin(data, response => {
string res = Convert.ToString(response.access_token);   // Success event
}, (error) => {
string err = error.description;                     // Failure event
});
}
```

## Integrate Forgot Password

Call this function to send reset password link to the specified account.
**NOTE:** You can use forgot password by two ways:

- Using Email-

```
public async void GetForgotPassword() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxx");
data.Add("email", "xxxx");
data.Add("resetpasswordurl", "xxxx");
//data.Add("emailtemplate", "xxxxxx"); (optinal)

await ForgotPasswordAPI.GetForgotPassword(data, response => {
  string res= Convert.ToString(response.IsPosted);   // Success event
}, (error) => {
  string err= error.description;                     // Failure event
});
}
```

- Using Phone-

```
public async void GetPhoneForgotPasswordbyOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)

await PhoneForgotPasswordbyOtpAPI.GetPhoneForgotPasswordbyOtp(data, response => {
  string res= Convert.ToString(response.IsPosted);   // Success event
}, (error) => {
  string err= error.description;                     // Failure event
});
}
```

## APIs

### Social APIs

**List of APIs in this Section:**

- [UserProfile API](#userprofile-api)
- [Video API](#video-api)
- [Status Posting API](#status-posting-api)
- [Status Fetching API](#status-fetching-api)
- [Post API](#post-api)
- [Photo API](#photo-api)
- [Page API](#page-api)
- [Post Message API](#post-message-api)
- [Mention API](#mention-api)
- [Like API](#like-api)
- [Group API](#group-api)
- [Following API](#following-api)
- [Event API](#event-api)
- [Contact API](#contact-api)
- [Company API](#company-api)
- [CheckIn API](#checkin-api)
- [Audio API](#audio-api)
- [Album API](#album-api)

##### UserProfile API

The getUserData function uses the UserProfileAPI to pull available user data. In this example, we just pull all fields that are Strings and not null. The LoginRadiusUltimateUserProfile object contains a large number of fields, and they can be manually retrieved from any Java object.

```
public async void GetProfile(string token) {
await UserProfileAPI.GetUserProfile(token, profile => {
Toast.MakeText(this, profile.FirstName.ToString(), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Video API

The Video API is used to get the users videos.

```
public async void GetVideo(string token, string nextcursor) {
await VideoAPI.GetVideoData(token, nextcursor, response => {
Toast.MakeText(this, response.Data[0].OwnerId, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Status Posting API

The Status API is used to update the status on the userâ€™s wall.

```
public async void GetStatusPosting(string token) {
PostStatus poststatus = new XamarinSDK.Models.PostStatus();
poststatus.Caption = "wefef";
poststatus.Description = "wefef";
poststatus.Imageurl = "https://www.XXXX.com";
poststatus.Status = "ergreg";
poststatus.Title = "ergreg";
poststatus.Url = "https://www.XXXXXX.com";
await StatusPostingAPI.GetStatusPosting(token, poststatus, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Status Fetching API

The Status API is used to get the status messages from the userâ€™s social account.

```
public async void GetStatus(string token) {
await StatusFetchingAPI.GetStatus(token, response => {
Toast.MakeText(this, response[0].Text, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Post API

The Post API is used to get post message data from the userâ€™s social account.

```
public async void GetPost(string token) {
await PostAPI.GetPost(token, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Photo API

The Photo API is used to get photo data from the userâ€™s social account.

```
public async void GetPhoto(string token, string albumid) {
await PhotoAPI.GetPhoto(token, albumid, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Page API

The Page API is used to get the page data from the userâ€™s social account.

```
public async void GetPage(string token, string pagename) {
await PageAPI.GetPage(token, pagename, response => {
Toast.MakeText(this, response.ReleaseDate, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Post Message API

The Message API is used to post messages to the userâ€™s contacts.

```
public async void Message(string token, string to, string subject, string message) {
await MessageAPI.GetMessage(token, to, subject, message, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Mention API

The Mention API is used to get mentions data from the userâ€™s social account.

```
public async void GetMention(string token) {
await MentionAPI.GetMention(token, response => {
Toast.MakeText(this, response[0].Id, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Like API

The Like API is used to get likes data from the userâ€™s social account.

```
public async void GetLike(string token) {
await LikeAPI.GetLike(token, response => {
Toast.MakeText(this, response[0].Name, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Group API

The Group API is used to get group data from the userâ€™s social account.

```
public async void GetGroup(string token) {
await GroupAPI.GetGroup(token, response => {
Toast.MakeText(this, response[0].Name, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Following API

Get the following user list from the userâ€™s social account.

```
public async void GetFollowing(string token) {
await FollowingAPI.GetFollowing(token, response => {
Toast.MakeText(this, response[0].Name, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Event API

The Event API is used to get the event data from the userâ€™s social account.

```
public async void GetEvent(string token) {
await EventAPI.GetEvent(token, response => {
Toast.MakeText(this, response[0].Name, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Contact API

The Contact API is used to get contacts/friends/connections data from the userâ€™s social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will be normalized into LoginRadiusâ€™ standard data format. This API requires setting permissions in your LoginRadius Admin Console.

```
public async void GetContact(string token, int nextcursor) {
await ContactAPI.GetContact(token, nextcursor, response => {
Toast.MakeText(this, response.Data[0].Name, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Company API

The Company API is used to get the followed companies data from the userâ€™s social account.

```
public async void GetCompany(string token) {
await CompanyAPI.GetCompany(token, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### CheckIn API

The Check In API is used to get check Ins data from the userâ€™s social account.

```
public async void GetCheckIn(string token) {
await CheckinAPI.GetCheckIn(token, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Audio API

The Audio API is used to get audio files data from the userâ€™s social account.

```
public async void GetAudio(string token) {
await AudioAPI.GetAudio(token, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Album API

This API returns the photo albums associated with the passed in access tokens Social Profile.

```
public async void GetAlbum(string token) {
await AlbumAPI.GetAlbum(token, response => {
Toast.MakeText(this, response[0].ID, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

###Native Social APIs

**List of APIs in this Section:**

- [Access Token via Facebook Token API](#access-token-via-facebook-token-api)
- [Access Token via Google Token API](#access-token-via-google-token-api)

##### Access Token via Facebook Token API

The API is used to get LoginRadius access token by sending Facebookâ€™s access token. It will be valid for the specific duration of time specified in the response.

```
public async void FacebookNativeLogin(string apikey,string fb_access_token)
{
    await XamarinSDK.Api.SocialLogin.AccessTokenViaFacebookToken.GetAccessTokenViaFacebookToken(apikey,fb_access_token, response => {
        System.Diagnostics.Debug.Write("lr_token="+response.access_token);
    }, (error) => {
        System.Diagnostics.Debug.Write("error=" + error.description);
    });
}
```

##### Access Token via Google Token API

The API is used to get LoginRadius access token by sending Googleâ€™s access token. It will be valid for the specific duration of time specified in the response.

```
public async void GoogleNativeLogin(string apikey,string google_access_token)
{
    await XamarinSDK.Api.SocialLogin.AccessTokenViaGoogleToken.GetAccessTokenViaGoogleToken(apikey,google_access_token, response => {
        System.Diagnostics.Debug.Write("lr_token="+response.access_token);
    }, (error) => {
        System.Diagnostics.Debug.Write("error=" + error.description);
    });
}
```

###Authentication APIs

**List of APIs in this Section:**

- [Validate Access token API](#validate-access-token-api)
- [Access Token Invalidate API](#access-token-invalidate-api)
- [Check Email Availability API](#check-email-availability-api)
- [Status Fetching API](#status-fetching-api)
- [Check UserName Availability API](#check-username-availability-api)
- [Login by UserName API](#login-by-username-api)
- [Read all Profiles by Token API](#read-all-profiles-by-token-api)
- [Verify Email API](#verify-email-api)
- [Add Email API](#add-email-api)
- [Change Password API](#change-password-api)
- [Link Social Identities API](#link-social-identities-api)
- [Resend Email Verification API](#resend-email-verification-api)
- [Reset Password by Reset Token API](#reset-password-by-reset-token-api)
- [Reset Password by Security Question API](#reset-password-by-security-question-api)
- [Set or Change UserName API](#set-or-change-username-api)
- [Social Identity API](#social-identity-api)
- [Update Profile by Token API](#update-profile-by-token-api)
- [Update Security Question by Access token API](#update-security-question-by-access-token-api)
- [Delete Account with Email Confirmation API](#delete-account-with-email-confirmation-api)
- [Remove Email API](#remove-email-api)
- [Unlink Social Identities API](#unlink-social-identities-api)

##### Validate Access token API

This api validates access token if valid then returns a response with its expiry otherwise error.

```
public async void GetAccessTokenValidate(string apikey, string token) {
await ValidateAccesstokenAPI.GetAccessTokenValidate(apikey, token, response => {
Toast.MakeText(this, response.access_token, ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Access Token Invalidate API

This API call invalidates the active access token or expires an access token's validity.

```
public async void GetAccessTokenInvalidate(string apikey, string token) {
await AccessTokenInvalidateAPI.GetAccessTokenInvalidate(apikey, token, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Check Email Availability API

This API is used to check the email exists or not on your site.

```
public async void GetCheckEmailAvailability(string apikey, string email) {
await CheckEmailAvailabilityAPI.GetCheckEmailAvailability(apikey, email, response => {
Toast.MakeText(this, Convert.ToString(response.IsExist), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Check UserName Availability API

This API is used to check the UserName exists or not on your site.

```
public async void GetCheckUserNameAvailability(string apikey, string username) {
await CheckUserNameAvailabilityAPI.GetCheckUserNameAvailability(apikey, username, response => {
Toast.MakeText(this, Convert.ToString(response.IsExist), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Login by UserName API

This API retrieves a copy of the user data based on the UserName.

```
public async void GetLoginbyUserName(){
Dictionary` <string, string>` data = new Dictionary` <string, string>`();
data.Add("apikey", "xxxxx");
data.Add("username", "xxxx");
data.Add("password", "xxxxxx");
//data.Add("securityanswer", "xxxxxx"); (optinal)
//data.Add("verificationurl", "xxxxxx"); (optinal)
//data.Add("loginurl", "xxxxxx"); (optinal)
//data.Add("emailtemplate", "xxxxxx"); (optinal)
//data.Add("g-recaptcha-response", "xxxxxx"); (optinal)
await LoginbyUserNameAPI.GetLoginbyUserName(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Read all Profiles by Token API

This API retrieves a copy of the user data based on the access_token.

```
public async void GetReadAllProfiles(string apikey, string access_token) {
await ReadAllProfilesAPI.GetReadAllProfiles(apikey, access_token, response => {
Toast.MakeText(this, Convert.ToString(response.FirstName), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Verify Email API

This API is used to verify the email of user.

```
public async void GetVerifyEmail() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("verificationtoken", "xxxx");
//data.Add("url", "xxxxxx"); (optinal)
await VerifyEmailAPI.GetVerifyEmail(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Add Email API

This API is used to add additional emails to a user's account.

```
public async void GetAddEmail() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxx");
data.Add("access_token", "xxxx");
data.Add("email", "xxxx");
data.Add("type", "Secondary");
// data.Add("verificationurl", "xxxx"); (optinal)
//data.Add("emailtemplate", "xxxxxx"); (optinal)
await AddEmailAPI.GetAddEmail(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Change Password API

This API is used to change the account's password based on the previous password.

```
public async void GetChangePassword() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxx");
data.Add("oldpassword", "xxxxxxxx");
data.Add("newpassword", "xxxxxxxx");
await ChangePasswordAPI.GetChangePassword(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Link Social Identities API

This API is used to link up a social provider account with the specified account based on the access token and the social provider's user access token.

```
public async void GetLinkSocialIdentities() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
data.Add("candidatetoken", "xxxxxxxxxxxx");
await LinkSocialIdentitiesAPI.GetLinkSocialIdentities(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Resend Email Verification API

This API resends the verification email to the user.

```
public async void GetResendEmailVerification() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("email", "xxxxxxxxxxxxxxxx");
/* data.Add("verificationurl", "xxxxxxxxxxxxxxxx");
data.Add("emailtemplate", "xxxxxxxxxxxx"); (optional)*/
await ResendEmailVerificationAPI.GetResendEmailVerification(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Reset Password by Reset Token API

This API is used to set a new password for the specified account.

```
public async void GetResetPasswordbyResetToken() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("resettoken", "xxxxxxxxxxxxxxxx");
data.Add("password", "xxxxxxxxxxxxxxxx");
await ResetPasswordbyResetTokenAPI.GetResetPasswordbyResetToken(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Reset Password by Security Question API

This API is used to reset password for the specified account by security question.

```
public async void GetResetPasswordbySecurityQuestion(string apikey) {
ResetPasswordBySecurityAnswerModel obj = new ResetPasswordBySecurityAnswerModel();
Dictionary < string, string > myDictionary = new Dictionary < string, string > ();
myDictionary["Some security questions"] = "Answer of the question.";
obj.SecurityAnswer = myDictionary;
obj.UserId = "";
obj.Password = "";
await ResetPasswordbySecurityQuestionAPI.GetResetPasswordbySecurityQuestion(apikey, obj, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Set or Change UserName API

This API is used to set or change UserName by access token.

```
public async void GetChangeUserName() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
data.Add("username", "xxxxxxxxxxxxxxxx");
await ChangeUserNameAPI.GetChangeUserName(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Social Identity API

This API is called just after account linking API and it prevents the raas profile of the second account from getting created.

```
public async void GetSocialIdentity(string apikey, string access_token) {
await SocialIdentityAPI.GetSocialIdentity(apikey, access_token, response => {
Toast.MakeText(this, Convert.ToString(response.FirstName), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Update Profile by Token API

This API is used to update the user profile by the access token.

```
public async void GetUpdateProfilebyToken() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
//data.Add("verificationurl", "xxxxxxxxxxxxxxxx");
//data.Add("emailtemplate", "xxxxxxxxxxxxxxxx");
//data.Add("smstemplate", "xxxxxxxxxxxxxxxx"); (optional)
UserIdentityCreateModel user = new UserIdentityCreateModel();
user.FirstName = "xxxx";
user.LastName = "xxxx";
user.Password = "xxxx";
await UpdateProfilebyTokenAPI.GetUpdateProfilebyToken(data, user, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Update Security Question by Access token API

This API is used to update security questions by the access token.

```
public async void GetUpdateSecurityQuestionbyAccess_token(string apikey, string access_token) {
ResetPasswordBySecurityAnswerModel obj = new ResetPasswordBySecurityAnswerModel();
Dictionary < string, string > myDictionary = new Dictionary < string, string > ();
myDictionary["Some security questions"] = "Answer of the question.";
obj.SecurityAnswer = myDictionary;
await UpdateSecurityQuestionbyAccess_tokenAPI.GetUpdateSecurityQuestionbyAccess_token(apikey, access_token, obj, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Delete Account with Email Confirmation API

API deletes the user account by the access token.

```
public async void GetDeleteAccount()
{
Dictionary` <string, string>` data = new Dictionary` <string, string>`();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
//data.Add("deleteurl", "xxxxxxxxxxxxxxxx");
//data.Add("emailtemplate", "xxxxxxxxxxxxxxxx");(optional)
await DeleteAccountAPI.GetDeleteAccount(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsDeleteRequestAccepted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Remove Email API

This API is used to remove additional emails from a user's account.

```
public async void GetRemoveEmail() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
data.Add("email", "xxxxxxxxxxxxxxxx");
await RemoveEmailAPI.GetRemoveEmail(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsDeleted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Unlink Social Identities API

This API is used to unlink up a social provider account with the specified account based on the access token and the social provider's user access token. The unlinked account will automatically get removed from your database.

```
public async void GetUnlinkSocialIdentities() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxxxxxxxxxxxxxxxxx");
data.Add("access_token", "xxxxxxxxxxxxxxxx");
data.Add("provider", "xxxxxxxxxxxxxxxx");
data.Add("providerid", "xxxxxxxxxxxxxxxx");
await UnlinkSocialIdentitiesAPI.GetUnlinkSocialIdentities(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsDeleted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

### Phone Authentication APIs

**List of APIs in this Section:**

- [Phone Login API](#phone-login-api)
- [Login by OTP API](#login-by-otp-api)
- [Phone Number Availability API](#phone-number-availability-api)
- [Phone Send One time Passcode API](#phone-send-one-time-passcode-api)
- [Phone Number Update API](#phone-number-update-api)
- [Phone Reset Password by OTP API](#phone-reset-password-by-otp-api)
- [Phone Verification by OTP API](#phone-verification-by-otp-api)
- [Phone Verification OTP by Token API](#phone-verification-otp-by-token-api)
- [Phone Forgot Password by OTP API](#phone-forgot-password-by-otp-api)
- [Phone Resend Verification OTP API](#phone-resend-verification-otp-api)
- [Phone Resend Verification OTP by Token API](#phone-resend-verification-otp-by-token-api)

##### Phone Login API

This API retrieves a copy of the user data based on the registered Phone Number.

```
public async void GetPhoneLogin() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxxx.com");
data.Add("password", "xxxxxx");
//data.Add("loginurl", "xxxxx");
//data.Add("smstemplate", "xxxxxx.com");
//data.Add("g-recaptcha-response", "xxxxxx");(optional)
await PhoneLoginAPI.GetPhoneLogin(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Login by OTP API

This API verifies an account by OTP and allows the user to login.

```
public async void GetPhoneLoginUsingOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxxx.com");
data.Add("otp", "xxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneLoginUsingOtpAPI.GetPhoneLoginUsingOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Number Availability API

This API is used to check the Phone Number exists or not on your site.

```
public async void GetPhoneNumberAvailability(string apikey, string phone){
await PhoneNumberAvailabilityAPI.GetPhoneNumberAvailability(apikey, phone, response => {
Toast.MakeText(this, Convert.ToString(response.IsExist), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Send One time Passcode API

API can be used to send a One-time Passcode (OTP).

```
public async void GetPhoneSendOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneSendOtpAPI.GetPhoneSendOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.Data.AccountSid), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Number Update API

This API is used to update the login Phone Number of users

```
public async void GetPhoneNumberUpdate() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("access_token", "xxxxxxxx");
data.Add("phone", "xxxxxxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneNumberUpdateAPI.GetPhoneNumberUpdate(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Reset Password by OTP API

This API is used to reset the password.

```
public async void GetPhoneResetPasswordbyOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxx");
data.Add("otp", "xxxxxxxx");
data.Add("password", "xxxxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneResetPasswordbyOtpAPI.GetPhoneResetPasswordbyOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Verification by OTP API

This API is used to send a verification code to verify a user's phone number.

```
public async void GetPhoneVerificationbyOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxx");
data.Add("otp", "xxxxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneVerificationbyOtpAPI.GetPhoneVerificationbyOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Verification OTP by Token API

This API is used to send a verification code to verify a user's phone number in cases in which an access token already exists.

```
public async void GetPhoneVerificationOtpbyToken() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("access_token", "xxxxx");
data.Add("otp", "xxxxxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneVerificationOtpbyTokenAPI.GetPhoneVerificationOtpbyToken(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Forgot Password by OTP API

This API is used to send the OTP to reset the account password.

```
public async void GetPhoneForgotPasswordbyOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneForgotPasswordbyOtpAPI.GetPhoneForgotPasswordbyOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Resend Verification OTP API

This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input.

```
public async void GetPhoneResendVerificationOtp() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("phone", "xxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneResendVerificationOtpAPI.GetPhoneResendVerificationOtp(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Phone Resend Verification OTP by Token API

This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists.

```
public async void GetPhoneResendVerificationOtpbyToken() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("access_token", "xxxxx");
data.Add("phone", "xxxxx");
//data.Add("smstemplate", "xxxxxx");(optional)
await PhoneResendVerificationOtpbyTokenAPI.GetPhoneResendVerificationOtpbyToken(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

###One-Click Authentication APIs

**List of APIs in this Section:**

- [One Click Sign in By Email API](#one-click-sign-in-by-email-api)
- [One Click Sign in By UserName API](#one-click-sign-in-by-username-api)
- [One Click Sign in Verification API](#one-click-sign-in-verification-api)

##### One Click Sign in By Email API

This API is used to send oneclicksignin verification link by Email ID.

```
public async void GetOneClickSigninByEmail() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("email", "xxxxx");
data.Add("oneclicksignintemplate", "xxxxx");
//data.Add("verificationurl", "xxxxxx");(optional)
await OneClickSigninByEmailAPI.GetOneClickSigninByEmail(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### One Click Sign in By UserName API

This API is used to send oneclicksignin verification link by UserName.

```
public async void GetOneClickSigninByUserName() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("username", "xxxxx");
data.Add("oneclicksignintemplate", "xxxxx");
//data.Add("verificationurl", "xxxxxx");(optional)
await OneClickSigninByUserNameAPI.GetOneClickSigninByUserName(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### One Click Sign in Verification API

This API is used to verify oneclicksignin verification link.

```
public async void GetOneClickSigninVerification() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("verificationtoken", "xxxxx");
//data.Add("welcomeemailtemplate", "xxxxxx");(optional)
await OneClickSigninByVerificationAPI.GetOneClickSigninVerification(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

### Smart Login APIs

**List of APIs in this Section:**

- [Email Prompt Smart Login By Email API](#email-prompt-smart-login-by-email-api)
- [Email Prompt Smart Login By Username API](#email-prompt-smart-login-by-username-api)
- [Email Prompt Smart Login Ping API](#email-prompt-smart-login-ping-api)

##### Email Prompt Smart Login By Email API

This API sends a Smart Login link to the user's Email Id.

```
public async void GetEmailPromptSmartLoginByEmail() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("email", "xxxxx");
data.Add("clientguid", "xxxxx");
//data.Add("smartloginemailtemplate", "xxxxx");
//data.Add("welcomeemailtemplate", "xxxxx");
//data.Add("redirecturl", "xxxxxx");(optional)
await EmailPromptAutoLoginByEmailAPI.GetEmailPromptAutoLoginByEmail(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Email Prompt Smart Login By Username API

This API sends smart login link to the user's Email Id.

```
public async void GetEmailPromptSmartLoginByUsername() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("username", "xxxxx");
data.Add("clientguid", "xxxxx");
//data.Add("smartloginemailtemplate", "xxxxx");
//data.Add("welcomeemailtemplate", "xxxxx");
//data.Add("redirecturl", "xxxxxx");(optional)
await EmailPromptAutoLoginByUsernameAPI.GetEmailPromptAutoLoginByUsername(data, response => {
Toast.MakeText(this, Convert.ToString(response.IsPosted), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

##### Email Prompt Smart Login Ping API

This API is used to check that smartlogin link has been clicked or not on server.

```
public async void GetEmailPromptSmartLoginPing() {
Dictionary < string, string > data = new Dictionary < string, string > ();
data.Add("apikey", "xxxxx");
data.Add("clientguid", "xxxxx");
await EmailPromptAutoLoginPingAPI.GetEmailPromptAutoLoginPing(data, response => {
Toast.MakeText(this, Convert.ToString(response.access_token), ToastLength.Long).Show();
}, (error) => {
Toast.MakeText(this, error.description, ToastLength.Long).Show();
});
}
```

## Demo

Check the demo app in the downloaded SDK for social login and user registration in action by setting your API key and sitename as mentioned above in the initialization section.

Link to [Github repo](https://github.com/LoginRadius/xamarin-sdk/)
