# Customer Data Export

The **Data Export** feature allows you to retrieve customers’ data in CSV or JSON formats. You can export data in the following two ways:

- [On-Demand Export](#partondemandexport0)
- [Scheduled Export](#partscheduledexport1)

> **Notes:**
>
> - LoginRadius Identity Platform uses the UTC time standard for all data export requests.
> - You can export a maximum of 1 million records in a single export request.
> - CSV export is limited to a specific number of fields but if you are looking to export the complete profile with all fields, please go with the JSON export.

In addition, you can view the logs of export data requests, as explained in the [Export Logs](#partexportlogs2) section.

## Part 1 - On-Demand Export

The **On-Demand Export** option allows you to request a one-time export of your user data. The following explains how you can create a request for on-demand data export:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Integration>Data Export](https://adminconsole.loginradius.com/integration/data-export/on-demand-export).

The following screen will appear:
![On-Demand Export](https://apidocs.lrcontent.com/images/DE_206235e83d8a1cdc1e2.60263275.png "On-Demand Export")

**Step 2:** Click the **Add A New Request** button, and the following pop-up will appear:

![On-Demand Export](https://apidocs.lrcontent.com/images/de2_278435e83d8d566b595.39992476.png "On-Demand Export")'

**Step 3:** Select the export data value from the drop-down list as per your requirement, i.e. Profile, Custom Object, and Profile and Custom Object.

> **Note:** **Custom Object** export and **Profile and Custom Object** export will have the custom object field only when the custom object schema has been configured by LoginRadius in the analytical database.

**Step 4:** Select an export type, i.e. JSON or CSV.

**Step 5:** By default, all the fields are applicable for the selected export data. However, you can choose fields as per your requirements.

**Step 6:** Select a start and end date from the respective calendar options, i.e. duration for which you would like to export the customer data.

**Step 7:** Add the email address of the recipient(s) who should receive the exported data link. You can add multiple email recipients.

**Step 8:** You can either enter the password or generate a random password. The password is required to view the export data. Thus, you must remember the entered/generated password.

**Step 9:** Click the **Request Export** button to create the request. The following displays the created on-demand export request:

![On-Demand Export](https://apidocs.lrcontent.com/images/cde1_272565e84eed0d7a739.86436602.png "On-Demand Export")

> **Note:** The **Progress** column displays the status of the on-demand export request. You can keep tracking the export request status here. However, upon export completion, the added recipients will automatically receive an email with the respective password-protected data file attached.

## Part 2 - Scheduled Export

The **Scheduled Export** option allows you to set a request for the recurring data export of your customers’ data. The following explains how you can create a request scheduled data export:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account, navigate to [Integration Data Export](https://adminconsole.loginradius.com/integration/data-export/on-demand-export) and select the **Scheduled Export** option from the left navigation panel.
The following screen will appear:

![Scheduled Export](https://apidocs.lrcontent.com/images/de4_206675e83d9f661df31.38060690.png "Scheduled Export")

**Step 2:** Click the **Add A New Request** button, the following pop-up will appear:
![Scheduled Export](https://apidocs.lrcontent.com/images/de5_20215e83dc685219e1.73462090.png "Scheduled Export")

**Step 3:** Select the export data value from the drop-down list as per your requirement, i.e. Profile, Custom Object, and Profile and Custom Object.

> **Note:** **Custom Object** export and **Profile and Custom Object** export will have the custom object field only when the custom object schema has been configured by LoginRadius in the analytical database.

**Step 4:** Select an export type, i.e. JSON or CSV.

**Step 5:** By default, all the fields are applicable for the selected export data. However, you can choose fields as per your requirements.

**Step 6:** Select the recurrence of the data export. For example, Daily, Weekly or Monthly and then the respective values like which day of the week or every X month.

**Step 7:** Add the email address of the recipient(s) who should receive the exported data link. You can add multiple email recipients.

**Step 8:** You can either enter the password or generate a random password. The password is required to view the export data. Thus, you must remember the entered/generated password.

**Step 9:** Click the **Request Export** button to create the request. The following displays the created scheduled export request:
![Scheduled Export](https://apidocs.lrcontent.com/images/de6_296575e83dc7b181a73.39015772.png "Scheduled Export")

> **Note:** The **Progress **column displays the status of the on-demand export request. You can keep tracking the export request status here. However, upon export completion, the added recipients will automatically receive an email with the respective password-protected data file attached.

## Part 3 - Export Logs

The **Export Logs** option allows you to view the list of export logs. In addition, you can download the exported data file, if the link has not expired yet.

The following explains how you can access the export logs and download the data file:

**Step 1:** Log in to your [Admin Console](https://adminconsole.loginradius.com/) account, navigate to [Integration>Data Export](https://adminconsole.loginradius.com/integration/data-export/on-demand-export) and select the Export Logs option from the left navigation panel.

The following screen will appear:
![Export Logs](https://apidocs.lrcontent.com/images/cde2_286505e84ef0d3dcea9.02554726.png "Export Logs")

**Step 2:** Click the **Download** option to download the export data file. Upon downloading, you can open the zip file by entering the password set while creating the respective export request.

> ** Note:** The **download** link expires in 3 days.
