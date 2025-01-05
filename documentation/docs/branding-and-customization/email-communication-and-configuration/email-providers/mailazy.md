
# Mailazy SMTP Configuration

-   Navigate to [Admin Console ➔ Platform Configuration ➔ Identity Workflow ➔ Communication Configuration ➔ Email Configuration](https://adminconsole.loginradius.com/platform-configuration/identity-workflow/communication-configuration/email-configuration) and select **Mailazy** from the list of SMTP providers.

    ![select mailazy](https://apidocs.lrcontent.com/images/1_1487362622ed802ed58.72268258.png "provider list ")

  
-   After selecting the **Mailazy** following screen will appear: 


  ![Mailazy New](https://apidocs.lrcontent.com/images/mailazy-new_2387762695a279fe307.98978227.png "Mailazy New")

  

If you already have a configured mailazy account enter the below credentials and click the **SAVE** button to save the SMTP settings.
  
-   Key
    
-   Secret
    
-   From Name: "Sender's from name"
    
-   From Email Address: "Sender's email ID"
    

>**NOTE:** You can get the **key** and **secret** from your mailazy account.

  

## Mailazy Configuration

If you don’t have a mailazy account,You need to create one by following the below steps:

- Click on the **Create Mailazy Account** button.

    ![Account Mailazy](https://apidocs.lrcontent.com/images/updated-Mailzy_18209626959d37a17f1.98639918.png "Account Mailazy")

- It will redirect you to sign-up page on the mailazy site.

    ![Mailazy login](https://apidocs.lrcontent.com/images/Login-Signup-Mailazy_87746269233ea18b84.01970084.png "Mailazy login")


- Create the account on the mailazy site and login.

- After login it will redirect you to verify email page where you have to enter the otp received on the email id.

    ![Mailazy](https://apidocs.lrcontent.com/images/Onboarding-Mailazy_693862692389b6f410.07204267.png "Mailazy")


- Once the email id is verified it will redirect you to next step **Domain Authentication** where you need to provide your domain name and click on the **next** button.

    ![Mailazy Domain](https://apidocs.lrcontent.com/images/Onboarding-Mailazy-2_13879626923e3c35116.71643235.png "Mailazy Domain")

- In the next step it will ask you to configure DNS records on your DNS provider site.

    ![Mailazy DNS](https://apidocs.lrcontent.com/images/Onboarding-Mailazy-3_13466269247f54b4c2.70365711.png "Mailazy DNS")

- Once you configure the DNS records on the DNS provider site, click on the **Verify and Next** button. 

    ![Mailazy Domain Verify](https://apidocs.lrcontent.com/images/Onboarding-Mailazy-4_25456626924be591121.43770173.png "Mailazy Domain Verify")


> **Note:** Here if you skip, the verification status will appear as **Pending Verification**.


- Once the **Domain name** is verified using the **verify** button, the following screen will appear.

    ![Mailazy Domain Verified](https://apidocs.lrcontent.com/images/Onboarding-Mailazy-5_86166269252ae9e750.66182424.png "Mailazy Domain Verified")

- Then click on the Dashboard and generate the Access key and Secret by clicking on the **Access Keys** button.

    ![Mailazy Key and Secret](https://apidocs.lrcontent.com/images/Dashboard-Mailazy_278156269257c1f13a0.34460368.png "Mailazy Key and Secret")

- Copy key and secret values from there and enter them in the **Admin Console**.

    ![Mailazy complete](https://apidocs.lrcontent.com/images/final-mailazy_2791626925bd5cc821.19484798.png "Mailazy complete")

- Click the **Save** button to save the SMTP settings.