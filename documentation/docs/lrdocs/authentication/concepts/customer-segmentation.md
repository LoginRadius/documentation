Customer Segmentation
=====

The **Customer Segmentation** feature allows you to query your customer data and then download the resultant data in CSV or JSON formats. The purpose of the customer segmentation feature is to allow you to filter customers to perform the required analysis.

You can create customer segmentations in the following two ways:

- [Basic Segmentation](#partbasicsegmentation0)
- [Advanced Segmentation](#partadvancedsegmentation1)

In addition, you can view and access the list of saved segments, as explained in the [Saved Segmentation](#partsavedsegmentation2) section.

## Part 1 - Basic Segmentation

The **Basic Segmentation** option allows you to create unique combinations of conditions to filter customers accordingly. 

For example, if a clothing company with an eCommerce site wants to filter its customers ranging from age 14 to 30 in Canada. They could filter customers for the required age range. 

The following explains how you can create basic segmentation:
 
**Step 1: **Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/) account and navigate to  [**Admin Console**](https://adminconsole.loginradius.com/) .
 
The following screen will appear:
![Basic Segmentation](https://apidocs.lrcontent.com/images/cs1_77135e83bc31ef9d34.71210962.png "Basic Segmentation")
 
**Step 2:** Select the desired condition from the drop-down (And/OR) and click the + icon, the  Rule and Operator selectors appears on the screen as displayed below:
 ![Basic Segmentation](https://apidocs.lrcontent.com/images/cs2_203755e83bd7d747291.81867924.png "Basic Segmentation")

 
The selected And or OR logical operator is applied to the conditions created in step-3.
 
**Step 3:** Select the Rule, and the further conditions populate accordingly in the same section. Select the options as per your requirements.
 
Similarly, you can add multiple conditions by clicking the + icon. 
 
**Step 4:** Once you are done with adding the condition(s), click the **filter **button to view the results. The following screen displays an applied filter:
![Basic Segmentation](https://apidocs.lrcontent.com/images/cs3_6145e83bded728ca5.96673781.png "Basic Segmentation") 

 
To get the data of resultant customers, click the **Export **button from the above screen. The following pop-up will appear with the filter query as already applied in the basic segment section:
 ![Basic Segmentation](https://apidocs.lrcontent.com/images/cs4_323405e83be14c57287.05187228.png "Basic Segmentation")
 
Configure the data export as explained in [this document](/authentication/concepts/customer-data-export/) and get the resultant customer data in CSV or JSON format.
 
**Save Segmentation:** To save the created segment for future, click the **Save Segment** button as highlighted in the below screen:
![Basic Segmentation](https://apidocs.lrcontent.com/images/cs5_203935e83be9f963c13.42803577.png "Basic Segmentation")


The following pop-up will appear:

![Basic Segmentation](https://apidocs.lrcontent.com/images/cs6_178515e83becb3b4792.73483270.png "Basic Segmentation")


Enter the Segment Name in the textbox and click the **Save **button. You can view the saved segment, as explained in the [Saved Segment](/authentication/concepts/customer-segmentation/#savedsegmentation2) section.


## Part 2 - Advanced Segmentation

In addition to the basic segmentation, the **Advanced Segmentation** option allows you to filter with multiple nested queries and JSON code segmentation.

You can use this option to create more refined criteria as compared to Basic Segmentation. For example, in addition to adding multiple nested queries, you can apply multiple logical operators and can create groups (either from the screen or using the JSON code).

For example, if a tea company with an eCommerce site wants to understand their older, working professional customers in Canada and France. They could filter customers from:

- Canada above the age of 35 but younger than 65
- America above the age of 35 but younger than 62 

Considering that the retirement age in Canada and America is 65 and 62 respectively.

The following explains how you can create the Advanced Segmentation:

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/) account, navigate to [**Admin Console**](https://adminconsole.loginradius.com/)  and select **Advanced Segmentation** from the left navigation panel.

The following screen will appear:
![Advanced Segmentation](https://apidocs.lrcontent.com/images/cs7_145945e83bfccddadb6.98693500.png "Advanced Segmentation")

**Step 2:** Select the **Designer** tab to design a query using the logical operators and conditions options available on the screen, or select the **Code** tab to write the login in the JSON code.

The following screen displays the query built for the example explained at the beginning of this section in the **Designer** tab:
![Advanced Segmentation](https://apidocs.lrcontent.com/images/cs8_255125e83c0125908e8.78841762.png "Advanced Segmentation")

Similarly, in the Code tab, you can write the logic or view the JSON code for the above-designed query.

**Step 3:** To add a new condition, click the **+** icon, and add a new group, click the **Add Group ** button. You can add multiple conditions and groups using these options.

**Step 4:** Once you are done with adding the conditions and groups, click the **filter** button to view the results. The following screen displays the created conditions and groups, and their result:
 ![Advanced Segmentation](https://apidocs.lrcontent.com/images/cs9_19115e83c06f1506d1.67306506.png "Advanced Segmentation")

 
To get the data of resultant customers, click the **Export** button from the above screen. The following pop-up will appear with the filter query as already applied in the advanced segment section:

![Advanced Segmentatione](https://apidocs.lrcontent.com/images/cs10_238655e83c0833d74e2.82111239.png "Advanced Segmentation")

Configure the data export as explained in [this document](/authentication/concepts/customer-data-export/) and get the resultant customer data in CSV or JSON format.
 
**Save Segmentation:**  To save the created segment for future, click the **Save** Segment button as highlighted in the below screen:
![Save Segmentation](https://apidocs.lrcontent.com/images/cs11_212695e83c1d0a52ee8.96979382.png "Save Segmentation")

The following pop-up will appear:

![Save Segmentation](https://apidocs.lrcontent.com/images/cs12_71775e83c23492daa3.37595614.png "Save Segmentation")

Enter the Segment Name in the textbox and click the **Save** button. You can view the saved segment, as explained in the [Saved Segment](/authentication/concepts/customer-segmentation/#savedsegmentation2) section.

## Part 3 - Saved Segmentation

The Saved Segmentation option allows you to view the list of saved segmentation from the Basic and Advanced segmentation.

The following explains how you can access and apply the saved segmentations:

**Step 1:** Log in to your  [**Admin Console**](https://adminconsole.loginradius.com/) account, navigate to  [**Admin Console**](https://adminconsole.loginradius.com/)  and select **Saved Segmentation** from the left navigation panel.

The following screen will appear:
![Saved Segmentation](https://apidocs.lrcontent.com/images/cs13_209385e83c2ad1bf189.39513211.png "Saved Segmentation")


**Step 2:** The above screen displays the list of already saved segmentation(s). To apply a segment, click the respective **Apply The Segment** button. 

The application redirects you to the respective basic or advanced segment screen with the applied filter. There you can view the results and export data if required. For more details, refer to the [**Basic Segemention**](#partbasicsegmentation0) or [**Advanced Segmentation**](#partsavedsegmentation2) section.


