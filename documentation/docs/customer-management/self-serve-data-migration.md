# Self-Serve Data Migration

This self-serve data migration allows you to mass import customer profile data from another application/service/database into the LoginRadius database through the means of CSV files. Once a report is requested, LoginRadius will send you an email notification with a secure link to access the log file.

## Self-Serve Data Migration Guide

This guide will take you through the process to start the data migration. It covers everything you need to know on how to request a data operation.

### Limitations of the Self-Serve Data Migration:

- Using this feature you can only import the data of the customers. You can not update/delete the existing data leveraging this feature.

- Using this feature passwords cannot be migrated. Data Migration is limited to required fields for mapping which are mentioned below:

 Addresses

 BirthDate
  
 City

 Email

 FirstName
  
 Gender
  
 Languages

 LastName

 MiddleName  
  
 PhoneNumbers

 State

 UserName

- Due to the self-serve nature of this feature, there is a limit to the amount of customer data that can be migrated through the Admin Console. Currently, only one migration request can be processed at any time for one site.

- While using this feature you will be in charge of the data integrity of the CSV file, as well as addressing any failures from profile insertion. In addition to this, you can perform migration operations at any time you want without having to go through our implementation team.

- There is a limit for CSV file, it should be smaller than 50MBs, and must contain fewer than 10000 lines.

**Note:** To perform full Data Migration please refer to this [LoginRadius Documentation](ttps://www.loginradius.com/docs/api/v2/getting-started/data-migration/#data-migration). This service will allow you to migrate your existing customer data to LoginRadius.

> **Pre-requisites:**
> CSV file of customer profiles.

## Part 1 - Data migration

This section covers the required steps that you need to take to perform a new data import. Follow the below steps:

**Step 1**: Login to your [Admin Console](https://adminconsole.loginradius.com/) account and navigate to [Deployment > Data Migration > Data Migration.](https://adminconsole.loginradius.com/deployment/migration/data-migration)

The following screen will appear:

![enter image description here](https://apidocs.lrcontent.com/images/1_274725ec62a453596f7.23314074.png "Data Migration")

**Step 2**: Select the same **CSV delimiter** you have set in your CSV file. The following screen displays the available **CSV delimiter** options:

![enter image description here](https://apidocs.lrcontent.com/images/2_198615ec62cb145d1f2.97589822.png "CSV delimiter")

The LoginRadius supports the following three **CSV delimiter**:

- Comma(,)
- Semicolon(;)
- Pipe(|)

**Step 3**: As per your requirement you can use the option **Skip first row** of the uploaded CSV file. This is useful when your CSV file may have its first row containing the column headers instead of Customer data.

![enter image description here](https://apidocs.lrcontent.com/images/3_31635ec62d1f0d2d26.66149717.png "Skip first row")

**Step 4**: Set the password for the log file under the **Set log file password** field.

![enter image description here](https://apidocs.lrcontent.com/images/4_31965ec62db1da0d92.07640375.png "Log File Password")

**Step 5**: Upload a CSV file containing the customer profile information by clicking on the **Choose file** option as mentioned in the following screen.

![enter image description here](https://apidocs.lrcontent.com/images/5_242515ec632b0011366.59377207.png "Choose file")

> **Note:** The CSV file used to upload must be of \*.csv file extension. Also, there is a limit for CSV file, it should be smaller than 50MBs, and must contain fewer than 10000 lines.

**Step 6**: Select the **Lookup Type** you wish to trigger. The following screen displays the available lookup type options:

The LoginRadius supports the following four lookup types:

- Email
- UserName

Lookup Type is how the Data Migration service locates the customer profile that needs to be inserted. Therefore, a valid CSV file has to include mapping for at least 1 of the 4 fields mentioned above.

It is used to search for a customer profile. **For example**, if Lookup Type is **Uid**, for every row in the CSV file, our service will use the Uid value in the CSV and search the customer profile database to determine if there is a profile with the same Uid. The service will use the information in CSV row to update that profile. If the profile doesn't exist yet, our service will create a new customer profile and insert the corresponding data in the CSV row.

![enter image description here](https://apidocs.lrcontent.com/images/6_67675ec633401bd0f7.21573270.png "Lookup Type")

**Step 7**: Select the Fields that you want to map the CSV columns to. Mappings for Email along with Mandatory fields in Data Schema is required, as well as a mapping that corresponds with the Lookup Type.

Selecting an LR field in the dropdown menu will show a new dropdown menu to the right to select the CSV column. Once you select a CSV file as well as the corresponding delimiter, this right-side dropdown menu will be populated with number options beginning from 0, 1, 2… up to the number of columns in the CSV file. Selecting a **CSV Column** number will let the CSV data in that column to be mapped to the corresponding **LR Field**:

![enter image description here](https://apidocs.lrcontent.com/images/7_24275ec633cc68af32.40216881.png "Field Mapping")

**For example**, the content of my CSV file is:

Address 1|Address 2|PostalCode

357 First Ave|Suite 102|95034

456 Second Ave|Room 902|95035

To map the address information to the “Addresses” LR Field, I would select:

- “Addresses” on the left side dropdown menu.

Then on the right side:

- “0” for the “Addresses.Address1” dropdown.
- “1” for the “Addresses.Address2” dropdown.
- “2” for the “Addresses.PostalCode” dropdown.

Notice that since the column index begins with 0, the very first column in the CSV file is considered column “0” instead of column “1”. This follows for all subsequent column indices.

> **Prerequisites for Mapping field:**
> 1. Email is always a required mapping. Also, a mapping corresponding to the Lookup Type is required. **For example**, if Lookup Type = Username, then there must be a mapping for Username. 
> 2. For Email and Phone Number which contain two subfields that are Type and Value, both subfields need to be mapped. 
> 3. For Address, the Address Type, and at least one other subfield (one of Address 1, Address 2,...), needs to be mapped.
> 4. In [Platform Configuration > Standard Login > Data Schema](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema), if a data field is enabled and set as "Mandatory", there needs to be mapping for that field. This is required so that the new profile can be created in the database.

**Step 8**: Click on **Import** to request this operation and migrate customer profiles into the LoginRadius database.

## Part 2 - Data Migration Logs

Data Migration Logs show the request history of Data Migration and the download links for logs if available.

Data migration Logs contain the following information:

- **Start TIme**: Time at which the data operation started.
- **Action**: This will determine which data operation you have executed. Once the import request is raised action will be visible as **Upsert**.
- **Download link**: File can be downloaded from this button.
- **Expiry time**: Time at which the download link expires.
- **Status**: If the request data operation is done or In Progress.

You can download the file by clicking on the **Download** button available under the download link tab. Check the below screenshot.

![enter image description here](https://apidocs.lrcontent.com/images/8_188275ec635db2d84f5.79462674.png "Data Migration Logs")

> **Note**: Also, sometimes it may take up to an hour to receive the report/download link and this depends on the pipeline requests.
