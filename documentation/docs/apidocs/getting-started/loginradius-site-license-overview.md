# LoginRadius Site License Overview

This document provides an overview of the LoginRadius site license structure to provide some clarity with common points of confusion.

##The Confusion:

So, you have one set of LoginRadius credentials, which allow you to log in into the LoginRadius Admin Console. Once you arrive here, you see that you have three sites under the "My Sites" dropdown in the upper right-hand corner. Just looking at one of these sites, you can see that you have six domains and two mobile apps connected and multiple team members listed under the "My Team" section. Having trouble understanding how all of these components interact? You've come to the right place.

##Understanding the LoginRadius Site License

A LoginRadius Site License encompasses the following:

- A unique LoginRadius [site name](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name)

- A dedicated LoginRadius [Cloud Directory](https://www.loginradius.com/docs/api/v2/cloud-directory-api/overview)
  database instance
- A single set of LoginRadius configurations and [social provider apps](https://www.loginradius.com/docs/authentication/quick-start/social-login/)
- A single user base that will be shared across all registered digital properties

Let's say that the LoginRadius Operations Team has provisioned you one LoginRadius Site, and this site has been called "CompanyName".

- When you log in into your LoginRadius [Admin Console](https://adminconsole.loginradius.com/dashboard), you will be logging in to see the site configurations, existing user data, data storage information, collaborating team members, and much more, relating to the "CompanyName" site.
- Any API configurations, social log in provider apps, and any other settings applied to this site will be applicable to all added domains and apps.
- All websites, mobile apps, and other digital properties that you choose to connect to your LoginRadius site will share a single LoginRadius Cloud Directory database instance, and hence, a single userbase. Because of this, all users registered with one connected property will be registered with the others as well.

  > If you need to restrict access on a per-property basis, you can do so by setting up custom [roles and permissions](https://www.loginradius.com/docs/api/v2/user-registration/roles-management-overview)
  > .

##When You Will Need More Than One LoginRadius Site License

###1. When You Are Managing Entirely Separate Brands

- If users don't know that two brands are managed by a single entity, it can be confusing for them to have one set of credentials providing access to two seemingly unrelated brands' digital properties.
- Since only one social app from a given provider can be tied to a LoginRadius Site, you will need more than one Site License in order to create multiple apps for different brands.

  > Please note that social apps will accommodate different languages, so you will not necessarily need to have social multiple apps in cases where they will be branded the same but require different content translations.

###2. If you are a LoginRadius Partner Managing Different Clients' Properties

- LoginRadius works with multiple partners who implement the LoginRadius platform for their customers' web and mobile properties. Just as two LoginRadius customers sharing a single Site License would entail these two customers having joint user bases, sharing social apps, etc., LoginRadius partners will need to purchase separate LoginRadius Site Licenses for each of their customers.

##Managing Multiple LoginRadius Site Licenses

Let's say that you're using your "CompanyName" for your LoginRadius site name to enable users to connect via SSO and to manage your sites and mobile apps sharing the same brand. However, your company also has a subsidiary brand that is not publicly advertised as being owned by your company. In this case, you might want to separate the user base and set up a new LoginRadius site.

In this case, the LoginRadius team will provide you a new LoginRadius site. Let's call this site "SubsidiaryBrandName". When you log in into your LoginRadius Admin Console and click the "My Sites" dropdown in the upper right-hand corner, you will see both "CompanyName" and "SubsidiaryBrandName".

- These are both showing because your credentials allow you to access both sites. This is for your convenience, allowing you to toggle between the two to view the separate user base analytics and site configurations - not because they are connected in any way.
- Having access to both is quite literally the only thing connecting the two sites. If you wish to add team members to both sites, you will have to grant them access on each site.
- One thing to note is that you will be able to sync your site configurations from one site to another, as long as you have access to both. This will entail a one-time sync, and the purpose of this feature is that it prevents you from having to reconfigure new sites that you plan to configure similarly to your existing one(s).
- This information applies to customers who have requested separate development and/or QA environments.
