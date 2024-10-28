#Customer Data Storage

The LoginRadius system supports three types of data storage: Normalized User Profile, Custom Fields, and Custom Objects, for storing your user data in the LoginRadius Cloud Directory. We will go over each of these options and their usages below. Review [data point](https://www.loginradius.com/docs/api/v2/data-points-and-response-code/data-points) document to get a better understanding of the data storage structure.

![User Profile Data Schema](https://apidocs.lrcontent.com/images/Final-User-Profile_data_134465a78cf99a74953.92286576.png "User Profile Data")

**Normalized User Profile**

LoginRadius provides a set of commonly used profile fields that are composed into a normalized user profile object. This is the standard user profile that is used when calling user [registration APIs](https://www.loginradius.com/docs/api/v2/user-registration/auth-user-registration-by-email) or when a user is initialized via supported [Social Login]https://www.loginradius.com/docs/platform-features-overview/registration-services/social-login-feature) or [federated SSO](https://www.loginradius.com/docs/api/v2/single-sign-on/overview#federatedsso3) providers.

Complete detailed list of the normalized User Profile fields is listed [here](https://www.loginradius.com/docs/api/v2/getting-started/data-points/data-points/).

**Custom Fields**

Custom Fields are simple key-value pair fields that are included in your LoginRadius Normalized User Profile object and will be returned with [get user profile calls](https://www.loginradius.com/docs/api/v2/user-registration/auth-readall-profiles-by-token). It is possible to include these fields directly in your Registration interface during field creation on your LoginRadius Admin Console, follow our [Custom Field Configuration](https://www.loginradius.com/docs/governance/custom-field-configuration/) documentation for more details.

**Custom Objects**

Custom Objects are schema-less objects that can be attached to a specific account as shown in this [data chart][5]. It can be used to have a dynamic storage container that can be updated with additional fields or data formats on the fly. The Custom Object is serviced by the [Custom Object Rest APIs](https://www.loginradius.com/docs/api/v2/cloud-directory-api/custom-object/overview/). This allows you to store or update complex data objects that would not be easily accessible in a single layer field (Custom Field) such as nested data or object arrays.

In order to get access to a Custom Object, you will need to contact the [LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) or your Customer Success Representative.
