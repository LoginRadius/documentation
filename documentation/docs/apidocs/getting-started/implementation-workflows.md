# Implementation Workflows

---

The LoginRadius platform offers a range of implementation methodologies, enabling you to tailor user flows to your needs. Below, we will go over the various workflows, their benefits, and some useful resources for implementing the different workflows. You can choose any of these methodologies or combine features from each. If you need assistance in determining the best system for your needs, contact the LoginRadius support team for help with planning your implementation.

![layers of abstraction](https://apidocs.lrcontent.com/images/Picsart_24-10-23_23-35-52-429_93251827967193bdac5a737.08445487.png "layers of abstraction")

## Identity Experience Framework(IDx)

The IDx allows you to set up a centralized authentication page. There are a few predefined layouts that can be further customized via your LoginRadius Admin Console, enabling you to modify various CSS, HTML, and JavaScript elements of the page. This page is hosted on a dedicated instance in LoginRadius and will relay authenticated details to a specified redirect location. It allows you to handle the customization of your interfaces in a single location, serving a wide variety of web properties without needing to update each property individually. You can review the documentation below that outlines the configuration and customization of the IDx framework.

For more information for the process of customizing the IDx use [Identity Experience Framework Customizations](https://www.loginradius.com/docs/libraries/identity-experience-framework/customization/) document as a reference, You can obtain a copy of the default files from the link given in the above document and customize the interfaces by using similar flows as detailed in the JavaScript Interface workflow.

### Basic Properties

1. Centralized - You will be able to handle multiple sites, Login, and Registration flows in a single location and service multiple properties with a single set of styles and configurations.
2. Customizable - You can customize the look and feel of your IDx framework, or you can choose to keep the default layouts on the page.

#### Key Benefits

1. Cut down on UI/UX design time - Utilize the classic login screen layout without the fuss.

2. Customizability - Design an interface tailored to the look and feel of your app.

3. Self-contained and straightforward front-end implementation - With the Login Screen configuration section of the Admin Console, you can create a complete login screen from start to finish.

## JavaScript Interfaces

The JavaScript interface is a methodology that utilizes a set of LoginRadius maintained JavaScript files. These scripts interact with the LoginRadius servers in order to retrieve the account configurations and generate embedded interfaces directly on your web property. Implementations using the JavaScript Interface methodology allow you to quickly set up your interfaces with pre-built handling of common workflows. The following reference documents can be used to setup and configure your interfaces:

1. [Getting Started](https://www.loginradius.com/docs/api/v2/user-registration/user-registration-getting-started)

- This guide describes the basic interface initialization and configuration, as well as covers the various JavaScript options that you can use to control the logical behavior of the interfaces.

2. [Advanced Customizations](https://www.loginradius.com/docs/api/v2/user-registration/advanced-customization)

- This includes details on how to further customize the generated interfaces and allows you to fully customize the look and feel of the generated interfaces. You are able to achieve tasks such as updating labels, assigning custom error and validation messages, attaching listeners and trigger events, and enabling enhanced security features.

3. [Demo project](https://github.com/LoginRadius/demo) - This includes a basic implementation of the LoginRadius JavaScript interfaces.

The generated interfaces come in a static format that allows you to further customize and accomplish the desired look and feel by using CSS, JavaScript, and our built-in JavaScript template engine.

#### Key Benefits

1. Ease Of Implementation - Quick deployment of LoginRadius.
2. Customizability - Tie into our predefined HTML layouts and JavaScript hooks to fully customize the interfaces.
3. Limited Development - The majority of the complex functionality is handled by the scripts, which allows you to focus on branding and utilization.

## API Integration

The API Integration flow allows you to create your own interfaces and tie them to the LoginRadius APIs to handle Login, Registration, Forgot Password Recovery, and other common client-side flows. You can use either the LoginRadius Authentication API to keep everything on the client side or the LoginRadius Account API to make the calls from your server. The API-based flow allows for more customization in the logical flows but is more resource-intensive during the initial implementation as you no longer have the pre-built logic that is included in the other LoginRadius Implementation Workflows. You can use the following documents to implement an API-based integration flow:

1. [Create User](https://www.loginradius.com/docs/api/v2/user-registration/auth-user-registration-by-email)

- You can use this API to create the user account in LoginRadius. This relies on a Secure Token that can be generated with the [SOTT document](https://www.loginradius.com/docs/api/v2/user-registration/sott)
  .

1. [Login User](https://www.loginradius.com/docs/api/v2/user-registration/auth-login-by-email)

- This API can be used to authenticate your users and retrieve back an access token.

1. [Forgot Password](https://www.loginradius.com/docs/api/v2/user-registration/auth-forgot-password)

- This API will trigger the Forgot Password email.

1. [Reset Password](https://www.loginradius.com/docs/api/v2/user-registration/auth-reset-password-by-reset-token)

- This API consumes the token generated by the Forgot Password flows.

1. [Verify Email](https://www.loginradius.com/docs/api/v2/user-registration/auth-verify-email)

- This API consumes the verification token generated during the initial registration.

1. [Social Login](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/social-sharing/advanced-customization)

- This details the steps to generate the Social Login interface.

In this instance, you completely control the look and feel of the interfaces, and you also have full control over the logic and events that trigger specific actions and API calls. This is the most customizable version of the implementation but also requires the most effort to set up.

#### Key Benefits

1. Full Customizability - Create your own forms and submit data directly to the API, with no restrictions on how you choose to display the form or process the data before submitting them to the LoginRadius API.
2. Control your flows—You can add any logical flows you like and customize when and how the data is collected and submitted to the API.

## Identity Orchestration (IO) Overview

Identity Orchestration (IO) in LoginRadius allows you to design and implement customized identity workflows tailored to their unique needs. With IO, you can create, test, and deploy identity workflows using pre-made templates or building from scratch in the Workflow Builder. This feature also enables you to manage brand configurations efficiently. Customization of this IO can be easily achieved using the LoginRadius [Admin Console](https://adminconsole.loginradius.com/deployment/identity-orchestration/workflows). For more information, refer to the IO overview [documentation](https://www.loginradius.com/docs/libraries/identity-orchestration/overview/).

#### Key Benefits of IO

1. **Customizable Workflows:** IO provides flexibility in creating workflows by offering templates or allowing you to design your own, ensuring a tailored customer experience.
2. **Ease of Management:** The platform simplifies workflow management with features like search, edit, and delete, along with options to download workflows in JSON format.
3. **Brand Integration:** IO enables seamless brand management, automatically fetching brand-specific details like logos and color themes, which can be further customized to meet specific branding requirements..

#### Basic Properties of IO

- Workflows can be created, tested, and edited using an intuitive editor.
- The editor supports node-based workflow construction with easy navigation and zoom options.
- Workflow URLs can be previewed, and detailed node properties are editable directly within the interface.
