Password Security Concepts
====
-----

Password Security is a critical component of a Customer Identity and Access Management System. LoginRadius will always keep up with the industry standard in password security and it’s storage system. This document serves to explain the common security terminology on how it works, and why it is relevant to password security.

## Encryption
Encryption is defined as the conversion of electronic data into the unreadable/unintelligible format by using encryption algorithms. This process of encoding the original data is called encryption. Data dump after encoding is called ciphertext. The process of restoring the unreadable to its original form is called Decryption.

Encryption is a commonly misused term when talking about Password Security. Since most people use the term "Encryption" to explain the act of converting the plain text password into something unreadable, but encryption also denotes that it is possible to decrypt the data. In Password Security it should never be the case that the password’s ciphertext is decrypted at all. That is why the term "one-way encryption" exists and it’s commonly known as hashing.

## Hashing
In Password Security, Hashing is defined as having 2 crucial properties:
1. Irreversible, meaning given a hashed password, it is impossible to revert it to the original plaintext password despite even knowing the hashing algorithm.
2. No collision or Uniqueness, this means there should be no case when given 2 different plaintext password, their hashed password is the same.

Now there is a common attack to crack password systems called Dictionary Attack in order to ‘reverse’ these hashed passwords. Most password systems have ways to mitigate this with the usage of ‘salts’


## Salt
Salt is a random data used as an additional input in most Hashing function. There are 2 ways how Password System use salt, a system-wide salt, and per-password salt.

**A system-wide salt** is used to differentiate the hashed passwords in a 2 separate password system that uses the same hashing function. For example, a user has a password "mySecretPassword" at Facebook and it's hashed using "MD5" with no salt and it is stored as "f857606c76b9d72353257dbd273c9b9e". If Google also has the same user and stores "mySecretPassword" and use "MD5" it will store the same hashed password as "f857606c76b9d72353257dbd273c9b9e". If Google uses a salt for its MD5, his user will be hashed differently.

**A per-password salt** is a more secure usage of salt than A system-wide salt. It is also a recommended way to use salt in password security standard. A per-password salt means that when the user generates a new password (more commonly because they forgot their old one), the password system also generates a new salt for its new password. This way old and new password looks different in their hashed form despite being the same input.


This concludes our Security lexicon usage. See our [Supported Hashing Algorithm](https://www.loginradius.com/docs/development/configuration/supported-password-hashing-algorithms) for more information on our password security.
For a system-wide password security overview, see [Password Management](https://www.loginradius.com/docs/platform-features-overview/user-security/password-management). To see the list of our supported hashing function go

## Upgrading Hashing Algorithms

LoginRadius provides support for upgrading your app’s hashing algorithm. Contact [ LoginRadius Support Team](https://adminconsole.loginradius.com/support/tickets/open-a-new-ticket) for more information.

Once your hashing algorithm is upgraded with the help of the LoginRadius Team, hashing in your app will behave as follows until all of your existing users' passwords have been hashed using the new algorithm:

- All new registered users' passwords will be hashed with the new hashing algorithm
- All passwords of existing users will be authenticated using the previous hashing algorithm until a login or password reset is triggered
