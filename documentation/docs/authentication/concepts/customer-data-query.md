# Customer Data Query

The **Data Query** feature allows you to quickly filter your customer list, while the list of your customers is displayed in the LoginRadius Admin Console. This feature is similar to the Customer Segmentation, while the [Customer Segmentation](/authentication/concepts/customer-segmentation/) exports the data from the backend based on queries, Data Query allows you to run the query and view customers list on the application screen.
 
Thus, the Data Query gives you convenient and instant access to customers’ profiles that you can manage directly from the LoginRadius Admin Console. You can create data queries in the following two ways:

- [Customer Query](#partcustomerquery0)
- [Custom Object Query](#partcustomobjectquery1)

> **Note:** Data Query sections display a maximum of 100 pages with 10 per customer profile listing on each page. To get up to 1 million customer data, you can use [Customer Segmentation](/authentication/concepts/customer-segmentation/) or [Data Export](/authentication/concepts/customer-data-export/) features.

## Part 1 - Customer Query

The **Customer Query** feature allows you to filter customers based on the profile fields and applying queries using the AND/OR logical operators. 

For example, you can filter for a list of customers who are between the ages of 20 and 45, based in Vancouver, and using Facebook to log in. You can do this by creating queries using the Age, City, and Provider fields.

The following explains how you can create a customer data query:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Profile Management > Data Query](https://adminconsole.loginradius.com/profile-management/data-query/customer-query).
 
The following screen will appear:

![customer query](https://apidocs.lrcontent.com/images/sss1_102275e8399290a0749.14393481.png "customer query")

**Step 2:** Select the desired condition from the drop-down (And/OR) and click the **+** icon, the  Rule and Operator selectors appears on the screen as displayed below:

![Rule](https://apidocs.lrcontent.com/images/sss2_98155e8399893252a6.19975738.png "rule")


The selected And or OR logical operator is applied to the conditions created in step-3.


**Step 3:** Select the Rule, and the further conditions populate accordingly on the screen. Select the options as per your requirements.

Similarly, you can add multiple conditions by clicking the **+** icon.


**Step 4:** Once you are done with adding the condition(s), click the **filter** button to view the results. The following screen displays an applied filter and results:


![Result](https://apidocs.lrcontent.com/images/sss3_96895e839a19696912.55411800.png "Result")

## Part 2 - Custom Object Query

The **Custom Object Query** feature allows you to filter data of the customers based on the custom object fields. An example of a custom object query would be filtering through customers’ purchase history for a particular item and filtering for a related item on their wishlist.

The following explains how you can create a customer object query:


**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/)  account and navigate to [Profile Management > Data Query](https://adminconsole.loginradius.com/profile-management/data-query/custom-object-query) and select **Custom Object Query** from the left navigation panel.

The following screen will appear:

![Custom object](https://apidocs.lrcontent.com/images/sss4_204715e839b051a19b1.72405385.png "Custom object")

**Step 2:** Select the **Custom object** from the drop-down list for which you want to filter the customer data.

![drop down](https://apidocs.lrcontent.com/images/sss5_198695e839b450c3a00.32505922.png "drop down")

**Step 3:** Select the desired condition from the drop-down (And/OR) and click the **+** icon, the  Rule and Operator selectors appears on the screen as displayed below:

![Rule](https://apidocs.lrcontent.com/images/sss6_160865e839b910b06a8.64745081.png "Rule")

The selected And or OR logical operator is applied to the conditions created in step-4.

**Step 4:** Select the Rule, and the further conditions populate accordingly on the screen. Select the options as per your requirements.

Similarly, you can add multiple conditions by clicking the **+** icon. 

**Step 5:** Once you are done with adding the condition(s), click the **filter** button to view the results. The following screen displays an applied filter and results:

![Result](https://apidocs.lrcontent.com/images/sss7_210255e84d303c99f70.42805244.png "Result")
