# Mobile SSO Introduction

The LoginRadius **Mobile SSO** flow is similar to the [LoginRadius Web SSO](https://www.loginradius.com/docs/api/v2/single-sign-on/getting-started/) flow, the key difference is that it allows you to have a single login across multiple apps once logged into an app.

Mobile SSO works by storing the LoginRadius access token in a shared session, either shared preferences in Android or keychain in iOS. It allows you to identify a currently active session and access the current sessions’ user data to initialize your user account in each linked app.

The following displays the logical flow of the Mobile SSO process and it’s Login/Logout processes:

![Mobile SSO flow](https://apidocs.lrcontent.com/images/M1_7635ed6b7d3f1b6f3.86067237.png "Mobile SSO flow")

## Mobile SSO Guide

This guide will take you through the process of implementing SSO in Mobile (Android and iOS) apps. It covers everything you need to know on how to implement Mobile SSO through the LoginRadius Identity Platform and deploy it onto your mobile application.

## Part 1 - Android Apps

If you have multiple Android apps and want to implement single sign-on across all of them, the following are the steps to implement SSO with the [LoginRadius Android SDK](https://www.loginradius.com/docs/libraries/mobile-sdk-libraries/android-library/#singlesignon11). 

SSO allows a single identity for each customer to be created and recognized across all of your Android app properties and makes it possible for your customers to navigate between the app with one social ID easily. 

**Step 1**: Add the **sharedUserId**  key and its value to your Android Manifest after the package tag:​

```
android:sharedUserId="com.example"
```

**Step 2**: SSO code given below requires to be included in all the **Activity** where you have handled Login functionality. Use the below code for enabling the SSO Login for Android Applications.

```
public Boolean setSSOLogin(String token) {
 if (token != "" && token != null) {
  SharedPreferences.Editor editor = getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE).edit();
  editor.putString("ssoaccesstoken", token);
  editor.apply();
  return true;
 } else {
  return false;
 }
}
```

**Step 3**: After Enabling the SSO Login In your app you can just call the below method for getting the LoginRadius access_token. In the LoginRadius SSO method, you have to pass another app’s **applicationId(Package Name)** that you are using to get the LoginRadius token. Store the **applicationId** of your app’s **build.gradle** file.

```
public String checkSSOLogin(String ssoSecondAppPackageName) {
 Context con = null;
 String output = "";
 try {
  con = createPackageContext(ssoSecondAppPackageName, 0);
  SharedPreferences pref = con.getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE);
  if (pref.contains("ssoaccesstoken")) {
   String token = pref.getString("ssoaccesstoken", "");
   if (token != "") {
    SharedPreferences.Editor editor = getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE).edit();
    editor.putString("ssoaccesstoken", token);
    editor.apply();
    output = token;
   } else {
    output = "No SSO Token Found! and the token value is null or empty";
   }
  } else {
   SharedPreferences shared = getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE);
   if (shared.contains("ssoaccesstoken")) {
    String ssoToken = shared.getString("ssoaccesstoken", "");
    if (ssoToken != "") {
     output = ssoToken;
    } else {
     output = "No SSO Token Found! and the token value is null or empty";
    }
   } else {
    output = "No SSO Token Found!";
   }
  }
 } catch (PackageManager.NameNotFoundException e) {
  e.printStackTrace();
  output = "No SSO Token Found!";
 }
 return output;
}
```

**Step 4**: After verifying successful login, you should use the below method for the logout functionality.

```
public Boolean ssoLogout(String ssoSecondAppPackageName) {
 Context con = null;
 try {
  con = createPackageContext(ssoSecondAppPackageName, 0);
  SharedPreferences pref = con.getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE);
  if (pref.contains("ssoaccesstoken")) {
   pref.edit().remove("ssoaccesstoken").apply();
  }
  SharedPreferences shared = getSharedPreferences(Endpoint.SHAREDPREFERENCEFILEKEY, MODE_PRIVATE);
  if (shared.contains("ssoaccesstoken")) {
   shared.edit().remove("ssoaccesstoken").apply();
  }
  return true;
 } catch (PackageManager.NameNotFoundException e) {
  e.printStackTrace();
  return false;
 }
}
```

Upon completing the above steps, the mobile SSO is set up between your Android apps.

## Part 2 - iOS Apps

If you have multiple iOS apps and want to have a single sign-on across them, the following are the steps to implement SSO with the [LoginRadius iOS SDK](https://www.loginradius.com/docs/libraries/mobile-sdk-libraries/ios-library/). Under the hood, we use the iOS keychain to do this.

Add this to your LoginRadius.plist for your apps:

| Key         | Type | Value |
|:------------|:-----|:------|
| useKeychain | BOOL | YES   |


**Step 1**: Go to your **Project Folder > Capabilities** and under Keychain Sharing and add your sitename.

Following screen displays the related information:

![iOS Capabilities](https://apidocs.lrcontent.com/images/M2_87675ed6b989d4d409.34673191.png "iOS Capabilities")

**Step 2**: For SSO to work, add a few more things to trigger the **login**.  When the app is moving from background to foreground, add **NSNotification observer** on the view controllers that could log the user in. The following are the **Objective C** and **Swift** code references:

**Objective C code**:

```
- (void)viewWillAppear: (BOOL)animated {
[super viewWillAppear: animated];
...
[
[NSNotificationCenter defaultCenter] addObserver: self
selector: @selector(showProfileController)
name: UIApplicationWillEnterForegroundNotification
object: nil
];
...
}
- (void)viewWillDisappear: (BOOL)animated {
[super viewWillDisappear: animated];
...
[[NSNotificationCenter defaultCenter] removeObserver: self name: UIApplicationWillEnterForegroundNotification object: nil];
...
}
```

**Swift code**:

```
override func viewWillAppear(_ animated: Bool) {
super.viewWillAppear(animated)
...
NotificationCenter.default.addObserver(self, selector: #selector(self.setupForm), name: NSNotification.Name.UIApplicationWillEnterForeground, object: nil)
...
}
override func viewWillDisappear(_ animated: Bool) {
super.viewWillDisappear(animated)
...
NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillEnterForeground, object: nil)
...
}
deinit
{
NotificationCenter.default.removeObserver(self)
}
```

**Step 3**: When the app triggers **"UIApplicationWillEnterForegroundNotification"**, check your **accessToken** and **userProfile** to fetch it from the **keychain**. The following are the **Objective C** and **Swift** code references:

**Objective C code**:

```
- (void) showProfileController {
if ([[[LoginRadiusSDK sharedInstance] session] isLoggedIn])
{
//go to vc after user logged in
}else
{
//failed to logged in
}
}
```

**Swift code**:

```
func showProfileController () {
if LoginRadiusSDK.sharedInstance().session.isLoggedIn
{
//go to vc after user logged in
}else
{
//failed to logged in
}
}
```

**Step 4**: To perform SSO log out, you need to have the same **observers** to the same **events** on the **viewcontrollers** that assumes that the user is logged in. The following are the **Objective C** and **Swift** code references:

**Objective C code**:

```
- (void)viewWillAppear: (BOOL)animated {
[super viewWillAppear: animated];
...
[
[NSNotificationCenter defaultCenter] addObserver: self
selector: @selector(checkForLogin)
name: UIApplicationWillEnterForegroundNotification
object: nil
];
...
}
- (void)viewWillDisappear: (BOOL)animated {
[super viewWillDisappear: animated];
...
[[NSNotificationCenter defaultCenter] removeObserver: self name: UIApplicationWillEnterForegroundNotification object: nil];
...
}
- (void)setupForm{
BOOL loggedIn =  [[[LoginRadiusSDK sharedInstance] session] isLoggedIn];
if (!loggedIn)
{
[self showAlert: @"ERROR" message: @"User is not logged in"];
[self logoutPressed];
return;
}
//do normal logged in view controller behavior
}
```

**Swift code**:

```
override func viewWillAppear(_ animated: Bool) {
super.viewWillAppear(animated)
...
NotificationCenter.default.addObserver(self, selector: #selector(self.setupForm), name: NSNotification.Name.UIApplicationWillEnterForeground, object: nil)
...
}
override func viewWillDisappear(_ animated: Bool) {
super.viewWillDisappear(animated)
...
NotificationCenter.default.removeObserver(self, name: NSNotification.Name.UIApplicationWillEnterForeground, object: nil)
...
}
func setupForm(){
let loggedIn = LoginRadiusSDK.sharedInstance().session.isLoggedIn
if(!loggedIn)
{
self.showAlert(title: "ERROR", message: "User is not logged in")
self.logoutPressed()
return
}
}
```

## Part 3 - Next Steps

The following are the list of documents you might want to look into:

- [Web SSO](https://www.loginradius.com/docs/single-sign-on/web-and-mobile-sso/loginradius-web-sso/#overview0)
- [Federated SSO](https://www.loginradius.com/docs/single-sign-on/tutorial/federated-sso/overview/)
- [Custom IDP](https://www.loginradius.com/docs/single-sign-on/custom-identity-providers/overview/)
