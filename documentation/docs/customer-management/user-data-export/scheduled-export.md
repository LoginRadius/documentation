# Scheduled Export

The **Scheduled Export** option allows you to set a request for the recurring data export of your customers’ data. The following explains how you can create a request scheduled data export:

**Step 1:** Log in to your [**Admin Console**](https://adminconsole.loginradius.com/) account, navigate to [**Integration Data Export**](https://adminconsole.loginradius.com/integration/data-export/on-demand-export) and select the **Scheduled Export** option from the left navigation panel.
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

> **Note:** The **Progress** column displays the status of the on-demand export request. You can keep tracking the export request status here. However, upon export completion, the added recipients will automatically receive an email with the respective password-protected data file attached.
