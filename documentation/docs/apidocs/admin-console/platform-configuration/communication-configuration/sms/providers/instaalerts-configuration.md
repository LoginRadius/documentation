# Configuring InstaAlerts Account with LoginRadius

## Overview
InstaAlerts is a platform which enables clients to send and receive SMS messages. It includes APIs to allow enterprise software to access the system to send and receive SMS messages. Services are billed as per usage and is done through a credits system. This section describes the InstaAlerts user interface, which can be accessed by logging in at [this link](https://www.instaalerts.zone/).

This document assumes that you have an InstaAlerts account already set up and that you are able to login to the account.

The following are steps needed to configure your InstaAlerts account with the LoginRadius phone authentication:

1.&nbsp;Log in to your InstaAlerts account.

![](https://apidocs.lrcontent.com/images/Login_70615b5769d6ceef85-60090525_84735e449a65d392f5.12455137.png)

2.&nbsp;On the user Admin-console, access the Edit My Info page located in the My Account Dropdown on the top right.

![](https://apidocs.lrcontent.com/images/IA1_32235ea18606853980.45102464.png)

3.&nbsp;Click Request next to Sender IDs to request a new Sender ID. If you want to use an existing Sender ID, skip this and the next step.

![](https://apidocs.lrcontent.com/images/IA2_187405ea18618c49974.51438831.png)

4.&nbsp;Type the name of the desired Sender ID and click Send Request.

![](https://apidocs.lrcontent.com/images/SendRequest_142085b576c9e0f7e99-69646662_126915e449a9ab268f8.88329953.png)

5.&nbsp;Click View next to Sender IDs and check for the desired Sender ID. If the Sender ID has not appeared, wait for the request to be completed.

![](https://apidocs.lrcontent.com/images/IA3_280945ea1862bcd17e8.23233259.png)

![](https://apidocs.lrcontent.com/images/SenderIDs_148045b576d48ecb1b8-43482662_46575e449a87d01e84.21365763.png)

6.&nbsp;Reach out to Loginradius support with the obtained credentials to get them configured for your Loginradius account.

7.&nbsp;InstaAlerts uses whitelisting. If SMS templates are set from the LoginRadius Admin Console, InstaAlerts will need to whitelist the services provided in order for the SMS to be sent.
