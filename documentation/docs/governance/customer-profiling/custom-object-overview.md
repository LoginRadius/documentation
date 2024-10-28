Overview
===
A Custom Object is a schema-less object that can be attached to a specific account as shown in the below example. It can have a dynamic storage container that is updated with additional fields or data formats on the fly.

A Custom Object should be used if you are looking to store large amounts of user data and the data can’t be formatted in a structured format because the data format could be different for each user. The Custom Object is serviced by the Custom Object Rest APIs. This allows you to store or update complex data objects that would not be easily accessible in a single layer field (Custom Field) such as nested data or object arrays.

 ## Main features of Custom Object:

 - Schema-less data storage object
 - Can store any kind of data/information
 - Can store large amount of data
 - Fully serviced by REST APIs
 - Support data query using REST APIs
 - Auto indexed and normalized in data store
 - Fully managed by LoginRadius
 - An example of Custom Object:

```
 [
  {
    "Id": "5xxxxxxxxxxxxxxxxxf",
    "IsActive": true,
    "DateCreated": "2015-03-03T21:10:04.83Z",
    "DateModified": "2015-03-03T21:10:04.83Z",
    "IsDeleted": false,
    "Uid": "5xxxxxxxxxxxxxxxxxa",
    "CustomObject": {
      "Test":[
        {
          "field1": "Data3",
          "field2": "Data4",
          "field3": "Data5"
        },
        {
          "field11": "Data31",
          "field21": "Data41",
          "field31": "Data51"
        }
      ]
    }
  }
]
```
 ## How can a Custom Object be used?
Custom Objects are used to store large amount of data for a user. You can use the various Custom Object Rest APIs to create and delete Custom Objects as well update the stored data.

 ## How many Custom Objects can I have for each user?
We allow one Custom Object for each user. As it is schema-less, you can store any type of data in any format, so you only need to utilize one Custom Object per user. But if you have a certain scenario that you think requires more than one per user, please send the details to our support team.

 ## How can I enable Custom Objects in my account?
Custom Objects are only available in the LoginRadius Enterprise Plan with additional cost. You will need to contact the LoginRadius support team to enable Custom Objects for your account.

 ## What are the most common use cases for Custom Objects?
 - Store user’s search history

What the user searched for on your website. It could be a product, travel booking, etc.

 - Store user’s activity history

User-related activity, such as product(s) they have seen/visited, any article or travel destination visited, etc.

 - Store purchased product list

If the user has purchased multiple products, you can keep a list of all the purchased products with details such as product ID, description, purchase date, etc.

 - Shopping list

If the user has added products to their shopping cart, you can store the whole cart as a Custom Object and retrieve this information during checkout or when the user comes back to the site.

 - CRM events/activity list

If the user has bought products/services, you can store the whole event/activity as a Custom Object and retrieve this information when the user comes back to the website/mobile app or sync this during integration.

 - Wishlist
 
If the user has added products to their wish list, you can store the whole list as a Custom Object and retrieve this information during checkout or when the user comes back to the site.
