#Data Points

---

LoginRadius normalizes all data points gathered through traditional forms or by different social providers. Even so, it is always recommended to review which data points are made available to you with each social provider you have configured for your site or app's social login, as there are unique restrictions imposed by each.

An updated chart of all retrievable data points broken down by each provider can be found [here](https://www.loginradius.com/docs/api/v2/getting-started/data-points/social-provider-data-fields/).

##Data Structure
The LoginRadius User Registration system utilizes two identifiers in order to uniquely identify your users:

1. Account ID (UID): The UID is the unique identifier for each user **account**. It may have multiple Profile IDs (ID) attached to it via the **Identities** profile field(see below).

2. Profile ID (ID): The ID is the unique identifier for each **profile** attached to a LoginRadius UID. There will be a unique ID for each profile (i.e. "Facebook", "Twitter", "Email", etc.) associated with a given UID.

When a user first registers with a given property for the first time, a UID (or **account**) will be created for that user, along with an ID (or **profile**) that contains all data gathered through whichever method they used to register (i.e. email and password, Facebook, Twitter, etc.). If this user returns and logs in via a new social provider, or if they initially registered with a social provider and now choose to utilize the email and password option, a second ID will be added to the existing UID (as long as the email associated with both profiles is the same).

New social accounts can also be added to this UID using the [Account Linking API](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities) and including the Profile ID (ID) for the social provider that you are trying to link.

During the initial registration an Email profile is always created(even when registering via Social Provider) This profile contains the **Identities** parameter which includes the attached Social Profiles. The Email profile is also the profile that is updated when using the various user management API calls(ie. Update, Change password, etc)

**Custom objects** are dynamic JSON objects that can store advanced custom user data and are identified with an Object ID that is provided by LoginRadius. All data pertaining to a given Account within that object can be identified by the UID.

![enter image description here](https://apidocs.lrcontent.com/images/loginradius-raas-APIV2-data-structure---Page-1_29726594c260a25b860.05743941.png)
