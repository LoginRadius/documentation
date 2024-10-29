## Generate LoginRadius' Certificate and Key
LoginRadius' certificate and key can be generated as using one of the following ways:

- **Using online tools**, for example, with Bits and Digest Algorithm 2056, SHA256, respectively.

   OR

- **OpenSSL command**: You can generate certificate using the following OpenSSL commands (currently, LoginRadius is only supporting the PKCS1 private key format):


   <span>1.</span>  Generate the ID Provider Certificate key from the following command:

   `openssl genrsa -out private.key 2048`


   <span>2.</span> Generate the ID Provider Certificate form the following command:

   `openssl req -new -x509 -key private.key -out certificate.cert -days 365 -subj /CN=<loginradius-app-name>.hub.loginradius.com`

### Accessing Certificate:
- **In Linux/Mac**, run the command  `vi private.key` and `vi certificate.cert` to view them.

- **In Windows**, go to the folder where you are running the command, and the key will be generated in `private.key` and `certificate.cert` file.