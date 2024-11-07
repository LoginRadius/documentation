# Cryptographic Hashing Algorithms
=========
----

A cryptographic hashing function is a class of hash function that has properties which make it suitable for use in cryptography. The hash function is a mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a hash) and is designed to be a one-way function, that is, a function which is infeasible to invert.

LoginRadius Platform uses these cryptographic hash algorithms to store sensitive data such as password, security questions, etc. into the cloud database. It provides highest level of security on the critical data points.

![How hashing is applied](https://apidocs.lrcontent.com/images/image1_125785a870904cf3f88.61109453.png "How hashing is applied")


List of most common Cryptographic Hash Algorithms:

| Algorithm Name | Release Year | Reference | 
|----------------|--------------|-----------| 
| MD5            | 1992         | [RFC1321](https://tools.ietf.org/html/rfc1321)   | 
| PBKDF2         | 2000         | [RFC2898](https://tools.ietf.org/html/rfc2898)   | 
| SHA-1          | 1995         | [RFC3174](https://tools.ietf.org/html/rfc3174)   | 
| SHA-256        | 2002         | [RFC4634](https://tools.ietf.org/html/rfc4634)   | 
| SHA-512        | 2002         | [RFC4634](https://tools.ietf.org/html/rfc4634)   | 
| SHA-384        | 2002         | [RFC4634](https://tools.ietf.org/html/rfc4634)   | 
| SHA-224        | 2004         | [RFC3874](https://tools.ietf.org/html/rfc3874)   | 

LoginRadius supports the following one-way hashing algorithms:

1. Argon2i
1. Argon2id
1. Crypt_MD5
1. HMAC_SHA1
1. MD5
1. MD5 [Drupal-6]
1. MD5 [Magento]
1. PBKDF2
1. PHPass
1. PHPass [Wordpress]
1. SHA-1
1. SHA1PasswordPBKDF2
1. SHA-256
1. SHA-512
1. SHA-512 [Drupal-7]
1. HMAC_SHA-256
1. HMAC_SHA256_BitEncrypted
1. NT Hash

Detailed Technical information for each Hashing Algorithm:

| Hash Algorithm           | Salt Type         | Attached Salt Type | Applied Algorithm and Generated Hash           | Number of Iterations     | 
|--------------------------|-------------------|--------------------|------------------------------------------------|--------------------------|
| Argon2i                  | N/A               | N/A                | N/A                                            | 2                        |
| Argon2id                 | N/A               | N/A                | N/A                                            | 2                        |   
| Crypt_MD5                | Universal         | None               | $hash=Crypt_MD5[P]                             | N/A                      | 
| Crypt_MD5                | Universal         | Append             | $hash=Crypt_MD5[P+S]                           | N/A                      | 
| Crypt_MD5                | Universal         | Prepend            | $hash=Crypt_MD5[S+P]                           | N/A                      | 
| Crypt_MD5                | User per password | None               | $hash=[Crypt_MD5[P]]:RS                        | N/A                      | 
| Crypt_MD5                | User per password | Append             | $hash=[Crypt_MD5[P+RS]]:RS                     | N/A                      | 
| Crypt_MD5                | User per password | Prepend            | $hash=[Crypt_MD5[RS+P]]:RS                     | N/A                      | 
| HMAC_SHA1                | Universal         | None               | $hash = HMAC_SHA1[P,S]                         | N/A                      | 
| HMAC_SHA1                | Universal         | Append             | $hash = HMAC_SHA1[P+S,S]                       | N/A                      | 
| HMAC_SHA1                | Universal         | Prepend            | $hash = HMAC_SHA1[S+P,S]                       | N/A                      | 
| HMAC_SHA1                | User per password | None               | $hash = [HMAC_SHA1[P,RS]]:RS                   | N/A                      | 
| HMAC_SHA1                | User per password | Append             | $hash = [HMAC_SHA1[P+RS,RS]]:RS                | N/A                      | 
| HMAC_SHA1                | User per password | Prepend            | $hash = [HMAC_SHA1[RS+P,RS]]:RS                | N/A                      | 
| MD5                      | Universal         | None               | $hash = MD5[P]                                 | N/A                      | 
| MD5                      | Universal         | Append             | $hash = MD5[P+S]                               | N/A                      | 
| MD5                      | Universal         | Prepend            | $hash = MD5[S+P]                               | N/A                      | 
| MD5                      | User per password | None               | $hash = MD5[P]:RS                              | N/A                      | 
| MD5                      | User per password | Append             | $hash = [MD5[P+RS]]:RS                         | N/A                      | 
| MD5                      | User per password | Prepend            | $hash = [MD5[RS+P]]:RS                         | N/A                      | 
| PBKDF2                   | Universal         | None               | $hash = PBKDF2[P]                              | Number (Can be adjusted) | 
| PBKDF2                   | Universal         | Append             | $hash = PBKDF2[P+S]                            | Number (Can be adjusted) | 
| PBKDF2                   | Universal         | Prepend            | $hash = PBKDF2[S+P]                            | Number (Can be adjusted) | 
| PBKDF2                   | User per password | None               | $hash = [PBKDF2[P]]:RS                         | Number (Can be adjusted) | 
| PBKDF2                   | User per password | Append             | $hash = [PBKDF2[P+RS]]:RS                      | Number (Can be adjusted) | 
| PBKDF2                   | User per password | Prepend            | $hash = [PBKDF2[RS+P]]:RS                      | Number (Can be adjusted) | 
| PHPass                   | Universal         | None               | $hash = PHPass[P]                              | N/A                      | 
| PHPass                   | Universal         | Append             | $hash = PHPass[P+S]                            | N/A                      | 
| PHPass                   | Universal         | Prepend            | $hash = PHPass[S+P]                            | N/A                      | 
| PHPass                   | User per password | None               | $hash = PHPass[P]:RS                           | N/A                      | 
| PHPass                   | User per password | Append             | $hash = [PHPass[P+RS]]:RS                      | N/A                      | 
| PHPass                   | User per password | Prepend            | $hash = [PHPass[RS+P]]:RS                      | N/A                      | 
| SHA1                     | Universal         | None               | $hash=SHA1[P]                                  | N/A                      | 
| SHA1                     | Universal         | Append             | $hash=SHA1[P+S]                                | N/A                      | 
| SHA1                     | Universal         | Prepend            | $hash=SHA1[S+P]                                | N/A                      | 
| SHA1                     | User per password | None               | $hash=[SHA1[P]]:RS                             | N/A                      | 
| SHA1                     | User per password | Append             | $hash=[SHA1[P+RS]]:RS                          | N/A                      | 
| SHA1                     | User per password | Prepend            | $hash=[SHA1[RS+P]]:RS                          | N/A                      | 
| SHA256                   | Universal         | None               | $hash = SHA256[P]                              | N/A                      | 
| SHA256                   | Universal         | Append             | $hash = SHA256[P+S]                            | N/A                      | 
| SHA256                   | Universal         | Prepend            | $hash = SHA256[S+P]                            | N/A                      | 
| SHA256                   | User per password | None               | $hash = [SHA256[P]]:RS                         | N/A                      | 
| SHA256                   | User per password | Append             | $hash = [SHA256[P+RS]]:RS                      | N/A                      | 
| SHA256                   | User per password | Prepend            | $hash = [SHA256[RS+P]]:RS                      | N/A                      | 
| SHA512                   | Universal         | None               | $hash = SHA512[P]                              | N/A                      | 
| SHA512                   | Universal         | Append             | $hash = SHA512[P+S]                            | N/A                      | 
| SHA512                   | Universal         | Prepend            | $hash = SHA512[S+P]                            | N/A                      | 
| SHA512                   | User per password | None               | $hash = [SHA512[P]]:RS                         | N/A                      | 
| SHA512                   | User per password | Append             | $hash = [SHA512[P+RS]]:RS                      | N/A                      | 
| SHA512                   | User per password | Prepend            | $hash = [SHA512[RS+P]]:RS                      | N/A                      | 
| SHA-512 [Drupal-7]       | Universal         | None               | $hash=Drupal7[P]                               | N/A                      | 
| SHA-512 [Drupal-7]       | Universal         | Append             | $hash=Drupal7[P+S]                             | N/A                      | 
| SHA-512 [Drupal-7]       | Universal         | Prepend            | $hash=Drupal7[S+P]                             | N/A                      | 
| SHA-512 [Drupal-7]       | User per password | None               | $hash=[Drupal7[P]]:RS                          | N/A                      | 
| SHA-512 [Drupal-7]       | User per password | Append             | $hash=[Drupal7[P+RS]]:RS                       | N/A                      | 
| SHA-512 [Drupal-7]       | User per password | Prepend            | $hash=[Drupal7[RS+P]]:RS                       | N/A                      | 
| HMAC_SHA256              | Universal         | None               | $hash = HMAC_SHA256[P,S]                       | N/A                      | 
| HMAC_SHA256              | Universal         | Append             | $hash = HMAC_SHA256[P+S,S]                     | N/A                      | 
| HMAC_SHA256              | Universal         | Prepend            | $hash = HMAC_SHA256[S+P,S]                     | N/A                      | 
| HMAC_SHA256              | User per password | None               | $hash = [HMAC_SHA256[P,RS]]:RS                 | N/A                      | 
| HMAC_SHA256              | User per password | Append             | $hash = [HMAC_SHA256[P+RS,RS]]:RS              | N/A                      | 
| HMAC_SHA256              | User per password | Prepend            | $hash = [HMAC_SHA256[RS+P,RS]]:RS              | N/A                      | 
| HMAC_SHA256_BitEncrypted | Universal         | None               | $hash = HMAC_SHA256_BitEncrypted[P,S]          | N/A                      | 
| HMAC_SHA256_BitEncrypted | Universal         | Append             | $hash = HMAC_SHA256_BitEncrypted[P+S,S]        | N/A                      | 
| HMAC_SHA256_BitEncrypted | Universal         | Prepend            | $hash = HMAC_SHA256_BitEncrypted[S+P,S]        | N/A                      | 
| HMAC_SHA256_BitEncrypted | User per password | None               | $hash = [HMAC_SHA256_BitEncrypted[P,RS]]:RS    | N/A                      | 
| HMAC_SHA256_BitEncrypted | User per password | Append             | $hash = [HMAC_SHA256_BitEncrypted[P+RS,RS]]:RS | N/A                      | 
| HMAC_SHA256_BitEncrypted | User per password | Prepend            | $hash = [HMAC_SHA256_BitEncrypted[RS+P,RS]]:RS | N/A                      | 
| SHA1PasswordPBKDF2       | Universal         | None               | $hash=SHA1PasswordPBKDF2[P]                    | Number (Can be adjusted) | 
| SHA1PasswordPBKDF2       | Universal         | Append             | $hash=SHA1PasswordPBKDF2[P+S]                  | Number (Can be adjusted) | 
| SHA1PasswordPBKDF2       | Universal         | Prepend            | $hash=SHA1PasswordPBKDF2[S+P]                  | Number (Can be adjusted) | 
| SHA1PasswordPBKDF2       | User per password | None               | $hash=[SHA1PasswordPBKDF2[P]]:RS               | Number (Can be adjusted) | 
| SHA1PasswordPBKDF2       | User per password | Append             | $hash=[SHA1PasswordPBKDF2[P+RS]]:RS            | Number (Can be adjusted) | 
| SHA1PasswordPBKDF2       | User per password | Prepend            | $hash=[SHA1PasswordPBKDF2[RS+P]]:RS            | Number (Can be adjusted) | 
| NT Hash                  | None              | None               | $hash = NT[P]                                  | N/A                      | 

Password -> P, Salt -> S, Per user Salt -> RS
[Contact LoginRadius support](https://www.loginradius.com/docs/authentication/faq/support-faq/) to configure the desired algorithm for your account. 

