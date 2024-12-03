# Progressive Profiling

## Overview

Progressive profiling automates the gradual gathering of data from consumers. This is done by requesting permissions at various stages of your consumer’s life cycle, rather than all at once. Below you can customize your desired progressive profiling steps and fields, add or remove fields, set validation strings, and configure field types. For example, you can create a step called "Third Login" where an additional set of permissions are requested on a consumer's third login. Here's some other useful examples as to when you could prompt a consumer for additional information/permissions:

-   Upon First Login
    
-   At a custom defined Number of Logins
    
-   Upon Navigating to a specific property
    
-   Clicking a specific link or CTA button
    

## Customer Registration Progressive Profiling

Customer Registration Progressive Profiling allows you to split a potentially complicated registration process into multiple steps. This allows you to capture business critical information upfront and then slowly build out a holistic view of your consumers through subsequent steps/actions. The subsequent steps often take the place of secondary registration forms or event-driven calls to actions for your consumers to supply additional profile metadata.

By default, these progressive fields are available only at the first invocation, and if the consumer wants to edit some of his details later on, then they cannot edit/modify the same. With the progressive fields feature, the LoginRadius platform allows the consumer to modify the progressive fields on the profile editor page. You can refer to the [**Progressive Profiling customization**](https://www.loginradius.com/docs/api/v2/deployment/js-libraries/advanced-js-customizations/#progressiveprofiling27) for more details.

  

For more detail information regarding the configuration of Progressive Profiling and how it works you can refer to this [**document**](https://www.loginradius.com/docs/authentication/concepts/progressive-profiling/).
