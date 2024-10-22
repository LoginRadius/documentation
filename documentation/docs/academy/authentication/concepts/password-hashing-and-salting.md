# Password Hashing and Salting

This guide will take you through the **Password Hashing** and **Salting** features provided by LoginRadius Identity Platform.


## Password Hashing

The one-way transformation of a password to a password hash using the Hashing Algorithm is defined as Password Hashing. This feature ensures the maximum security and compliance i.e. anyone who has data access cannot view the password. With one-way hashing, the stored information can only be matched and cannot be decrypted.

LoginRadius supports the following one-way hashing algorithms:

- Argon2i
- Argon2id
- Crypt_MD5
- HMAC_SHA1
- MD5
- MD5 [Drupal-6]
- MD5 [Magento]
- PBKDF2
- PHPass
- PHPass [Wordpress]
- SHA-1
- SHA1PasswordPBKDF2
- SHA-256
- SHA-512
- SHA-512 [Drupal-7]
- HMAC_SHA-256
- HMAC_SHA256_BitEncrypted
- NT Hash

> To enable the desired hashing algorithm, please contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket). Or to view the enabled hashing algorithm and linked details of your account navigate to **Data Governance > Data Security > Hashing Algorithm**.

LoginRadius provides a mechanism to update the applied password hashing algorithm without requiring a password reset. Once your hashing algorithm is upgraded with the help of the LoginRadius, hashing in your app will behave as follows until all of your existing users' passwords have been hashed using the new algorithm:

- All new registered users' passwords will be hashed with the new hashing algorithm
- All passwords of existing users will be authenticated using the previous hashing algorithm until a login or password reset is triggered


We also support the multiple hashing algorithms per account, which allows keeping the existing hashing when data is being migrated from multiple data sources supporting different hashing algorithm.


## Password Salting
The salt value addition to the password before applying the Password Hashing algorithm is defined as Password Salting. This adds a layer of security to the hashing process, specifically against brute force attacks.

LoginRadius supports the following two ways of Password Salting:

- **Peppered**: A system-wide salt is used across all passwords.
- **Bring Your Own Key (BYOK)**: A unique salt is used per password, which makes it more secure when compared to peppered.

> To enable the desired salting, contact [LoginRadius Support](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket).

 
 
 
 
 
 



