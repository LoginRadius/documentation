# Multi-Branding Configuration

This document goes over how you can configure the page programmatically to display different branding. When using the Identity Experience Framework you may want the page to display different branding based on how the customer gets to the page, or where you want them to be redirected upon successful login. 

In this document, you will be getting details around the different ways of Branding:

- [Query Parameter or URL based detection](#query-parameter-or-url-based-detection)
- [Using different JavaScript files](#using-different-javascript-files)
- [Using different CSS](#using-different-css)

## Query Parameter or URL based detection

By default the Identity Experience Framework page is accessed by visiting `https://<<Your LoginRadius Sitename>>.hub.loginradius.com/auth.aspx`

However, if you want to present different branding on the page based on how the customer accesses it, you will first need to detect which brand you need to display.

This can be handled by two different ways as mentioned below:
- [Query Parameter Based Detection](#query-parameter-based-detection)
- [URL based detection](#url-based-detection)

### Query Parameter based detection
If you choose to use Query Parameters, you can configure a query parameter to detect which brand to display. For example, `https://<<Your LoginRadius Sitename>>.hub.loginradius.com/auth.aspx?brand=Brand_A`

At the start of your custom JavaScript, you can simply add the following logic to detect the brand via the query parameter.
 For example,

    const urlParams = new URLSearchParams(window.location.search);
    const brandname = urlParams.get('brand');
    console.log(brandname);

### URL based detection
LoginRadius also supports setting custom domains, if you have different domains configured to display the Identity Experience Framework page, you can choose to detect what domain name is being used to access the page using `window.location.origin`.

For example,

    const brandname = window.location.origin;
    console.log(brandname);

## Using different JavaScript files
The Identity Experience Framework page lets you upload different JavaScript files. To ensure that only a specific JavaScript file is executed when viewing a specific brand, at the top of your JavaScript file use one of the detection methods above, and use an **if** statement to wrap your code.

In the below example we execute the Brand_A.js code only when Brand_A is set in the query parameters.

```
    const urlParams = new URLSearchParams(window.location.search);
    const brandname = urlParams.get('brand');
    if(brandname === 'Brand_A') {
    //All of your code for Brand_A.js goes here.
        console.log(brandname);
    }
```

### Using different CSS

To load CSS code that is custom/unique to a brand you can simply append it via your JavaScript for that particular brand, check the below example.

**jQuery** is used in the below example.

```
    const urlParams = new URLSearchParams(window.location.search);
    const brandname = urlParams.get('brand');
    if(brandname === 'Brand_A') {
    //All of your JS code for Brand_A.js goes here.
    console.log(brandname);
    // All of your CSS can get appended here
    $("body").append('<style> .lr-hostr-container .lr-hostr-frame .lr-frames.lr-sample-background-enabled { background: url("https://example.com/image.jpg") center center #444 !important; background-size: cover !important; text-shadow: 0 2px 2px rgba(0,0,0,0.1) !important; color: #ffff !important} </style>');
    }
```





