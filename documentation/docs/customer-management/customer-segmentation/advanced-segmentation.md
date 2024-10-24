# Advanced Segmentation

In addition to the [Basic segmentation](/customer-management/customer-segmentation/basic-segmentation/), the **Advanced Segmentation** option allows you to filter with multiple nested queries and JSON code segmentation.

You can use this option to create more refined criteria as compared to Basic Segmentation. For example, in addition to adding multiple nested queries, you can apply multiple logical operators and can create groups (either from the screen or using the JSON code).

For example, if a tea company with an eCommerce site wants to understand their older, working professional customers in Canada and France. They could filter customers from:

- Canada above the age of 35 but younger than 65
- America above the age of 35 but younger than 62 

Considering that the retirement age in Canada and America is 65 and 62 respectively.

The following explains how you can create the Advanced Segmentation:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com) account, navigate to  [Profile Management > Customer Segmentation](https://adminconsole.loginradius.com/profile-management/customer-segmentation/basic-segmentation) and select **Advanced Segmentation** from the left navigation panel.

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

Configure the data export as explained in [**this document**](/customer-management/user-data-export/data-export-overview/) and get the resultant customer data in CSV or JSON format.
 
**Save Segmentation:**  To save the created segment for future, click the **Save** Segment button as highlighted in the below screen:

![Save Segmentation](https://apidocs.lrcontent.com/images/cs11_212695e83c1d0a52ee8.96979382.png "Save Segmentation")

The following pop-up will appear:

![Save Segmentation](https://apidocs.lrcontent.com/images/cs12_71775e83c23492daa3.37595614.png "Save Segmentation")

Enter the Segment Name in the textbox and click the **Save** button. You can view the saved segment, as explained in the [Save Segment](/customer-management/customer-segmentation/save-segmentation/) section.

## Example :

**Use-Case 1:**  If you want to get the email profiles that do not contain the registration source, then you can use the below query: 

![filter](https://apidocs.lrcontent.com/images/image-20210810-161505_31565611554b8854979.03604335.png "Filter")


**Use-case 2:**  If you want get the latest updated profiles, then you can use the segmentation query as  below:

![filter](https://apidocs.lrcontent.com/images/image-20210810-161731_9664611554ee563a14.30120542.png "Filter")


