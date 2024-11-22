# Cloud Directory API Codes

---

This section details the LoginRadius Cloud Directory API codes and some suggestions on how to resolve them.

## HTTP Error Response Structure:

```
{
  "Description": {{String}},
  "ErrorCode": {{Integer}},
  "Message": {{String}},
  "IsProviderError": {{Boolean}},
  "ProviderErrorResponse": {{String or NULL}}
}
```

## HTTP Response Descriptions:

| HTTP Code | Message         | Description                                                                                                                                                                               |
| :--------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200        | OK                    | The API was accessed successfully.                                                                                                                                                        |
| 400        | Bad Request           | Verify that the API endpoint you are accessing is correctly formatted and has all the required parameters.                                                                                |
| 401        | Unauthorized          | Verify your LoginRadius API key and secret, also verify that your access token has not expired.                                                                                           |
| 403        | Forbidden             | Verify all parameters are correctly formatted and the API endpoint is correct.                                                                                                            |
| 404        | Not Found             | The API endpoint is not correct or your account does not have sufficient permissions to access this endpoint.                                                                             |
| 405        | Method not allowed    | Verify that you are accessing the API endpoint with the correct format (ie. Get or Post)
|429          | Too Many Request      | Response status code indicates the user has sent too many requests in a given amount of time (i.e. rate limiting)                                                                                                  |
| 500        | Internal Server Error | Something has gone wrong with the processing of the request, check your server error logs and [contact us](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) if the error persists. |

## LoginRadius Error Response Descriptions:

| Error Code | Error Message                                    | Description                                                                        | HTTP Code
| :--------- | :----------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------|
|901| The API key is unauthorized | The provided LoginRadius API key is invalid or is not authorized, please use a valid or authorized LoginRadius API key or check the API key for your LoginRadius account. | 403 |
|902| The API Secret is unauthorized | The provided LoginRadius API secret is invalid or is not authorized, please use a valid LoginRadius API secret or check the API secret for your LoginRadius account. | 403 |
|908| A parameter is not formatted correctly | Verify that the datatypes for all of the parameters and parameters are correct when making the API call. (Note: description dynamically varies on missing parmas also) | 400 |
|913| The date range is not specified | The end date is missing in the request, please check the end date parameter. | Not in Use |
|914| The date range is not specified | The start date is missing in the request, please check the end date parameter. | Not in Use |
|918| The query is invalid | The query is not correct, please review the query and send the correct parameters. |  400 |
|919| The query format is not valid | The format of the query is not valid, query should be an object. |  400 |
|920| API key is invalid | The provided LoginRadius API key is invalid, please use a valid API key of your LoginRadius account. |  400 |
|921| API secret is invalid | The provided LoginRadius API secret is invalid, please use a valid API secret of your LoginRadius account. | 400 |
|922| API key is missing | The request is missing the API key, please use the valid API key parameter in order to process this request. | Not in Use |
|923| API secret is missing | The request is missing the API secret, please use the valid API secret parameter in order to process this request. |  Not in Use |
|925| The date range has an invalid format | The From date has an invalid format, please use a valid ISO_8601 date format. | 400 |
|926| The date range has an invalid format | The To date has an invalid format, please use a valid ISO_8601 date format. | 400 |
|927| The date range is invalid | The From data is greater than or equal to the To date, please pass correct From & To dates. | 400 |
|928| The date range is missing | From & To dates are required parameters. please pass correct From & To dates. | 400 |
|999| Site is not configured for custom object | The custom object is not configured for this site, Please contact LoginRadius support for more information. | Not in Use |
|1000| Oops, something is going wrong. please try again | Oops, something is going wrong. please try again. | 403 |
|1003| Schema is not set for the passed Custom Object | The Custom Object schema is not set in Admin Console. Schema should be set to query Custom Object. Please contact LoginRadius Support. | 400 |
|1036| The Custom Object name is required | The Custom Object name is required, please pass a Custom Object name. | 400 |
|1042| Pass a valid next param | The next param passed expired. Please start with a POST request again. | 403 |
|1043| Pass a valid next param | The next param is missing. Please start with a POST request to get next value. | 403 |
|1064| Custom object name is invalid | The custom object name used in this request is incorrect or does not exist. | 400 |
|1067| Invalid OTP Code | The OTP code is invalid, please request for a new OTP. | 403 |
|1102| The two-factor authenticator code is incorrect | Please enter the correct authenticator code. |403 |
|1128| Two factor authentication backup code is not configured | The two factor authentication backup code is not enabled, please enable or configure two factor authentication for login. |403 |
|1129| Two factor authentication backup bode is not valid or has already been used | The two factor authentication backup code is not valid or has already been used, please use a valid two factor authentication backup code for login. |403 |
