# Acceptable Use Policy

The purpose of this policy is to outline the acceptable use of the LoginRadius Identity Platform. These rules are in place to protect the customer and the LoginRadius Identity Platform, inappropriate use exposes risks on customer account including performance, security, and availability of the platform.

If you go over the rate limits for a set of API calls you will receive the error message **Too many requests** with the **429 HTTP status** on any subsequent API calls to this endpoint. For more information about HTTP codes refer to [customer identity API codes](https://www.loginradius.com/docs/api/v2/getting-started/response-codes/customer-identity-api-codes/#httpresponsedescriptions1)
documents.

If your app triggers the API rate limits you should not make any further requests to the endpoint until the rate limit threshold resets.

## Customer Identity API Rate Limits :

The following are the default API Rate limits are applied to the [Customer Identity APIs](https://www.loginradius.com/docs/api/v2/customer-identity-api/overview/)
for the customer with Enterprise CIAM platform only.

### Production Environment:

**Acceptable Usage**

| Type     | Description                    | Upto 10M | >10M |
| -------- | ------------------------------ | -------- | ---- |
| Platform | # of production apps           | 10       | 50   |
| Platform | # of test apps                 | 20       | 50   |
| Platform | # of API Secrets per account   | 5        | 15   |
| Identity | # Core API Requests per second | 50       | 100  |
| Identity | # of searches per second       | 10       | 50   |

> **Note**: LoginRadius support additional API requests per second (RPS) scaling requirements. If you require additional API RPS scaling, please reach out to your account manager or create a [support ticket](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

### Development/Staging Environment:

| Type     | Description               | Upto 10K |
| -------- | ------------------------- | -------- |
| Platform | # of test apps            | 30       |
| Platform | # of app keys per account | 30       |
| Identity | # Core API Requests       | 5        |
| Identity | # of searches per second  | 5        |
| Profile  | # of profile records      | 10,000   |

## Load, Stress and Performance Testing

Any testing of the LoginRadius platform must be coordinated through the dedicated Account manager or the LoginRadius support team.

Failure to coordinate testing with the appropriate LoginRadius team will trigger built-in security mechanisms that will limit your access to LoginRadius.

## Security Testing and Network Penetration

LoginRadius regularly performs system security tests as part of our commitment to protect your customer data. LoginRadius does not authorize anyone to perform security tests or network penetration without prior explicit consent. If you would like to review our system reports or you would like more details on the LoginRadius security testing or network penetration process, contact your dedicated Customer Success Manager which can facilitate your request.

## Infrastructure Standards

### Web Application Firewall(WAF)

LoginRadius APIs are behind the strong web application firewall to protect data and applications. We follow OWASP top 10 rules in our systems WAF.

Refer the link for more details: https://owasp.org/www-project-top-ten/

### HTTP Standards

We strictly follow HTTP standards to keep things maintainable and consistent, for example, if you are passing the HTTP method name in lowercase then the system will reject this request.

Refer to the following link for more details: https://tools.ietf.org/html/rfc2616

### Always HTTPS

Our system does not support HTTP without SSL and it is required to make all LoginRadius API calls over SSL.

### No support of TLS 1.0 and 1.1

Our system does not support legacy versions of TLS and ensure that all requests are made via TLS 1.2 or greater.

###Server Name Indication (SNI) SSL

Our system only supports SNI SSL and all of our servers are configured using SNI only.
