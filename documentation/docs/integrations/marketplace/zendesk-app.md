Zendesk App Integration
===================================
-------------------------


The LoginRadius Zendesk App Integration allows you to get quick access to recent information on your Customers when reading your Zendesk tickets. It operates by pulling all of the profiles stored in LoginRadius associated to a customer by using the email listed in the given Zendesk ticket.


##Installation

1. Make sure that you are logged in as a Zendesk Administrator.

2. On the left menu click on the gear icon which will take you to the ADMIN HOME area.

	![ADMIN HOME](https://apidocs.lrcontent.com/images/ZendeskAdmin_180315b3ea335bc7390.67221616.png "ADMIN HOME")

3. You should now see on the left-hand side an "APPS" section. Click on "Marketplace" to be taken to the Zendesk Marketplace.

	![Goto Zendesk Marketplace](https://apidocs.lrcontent.com/images/Screenshot-2018-07-03-16-46-51_40445b3fa8fa7de4c1.62004653.png "Goto Zendesk Marketplace")

4. Once arriving to the Zendesk Marketplace, search for "LoginRadius", and you should be able to select "LoginRadius Customer Identity and Access Management". 
	![Search For LoginRadius in the Zendesk Marketplace](https://apidocs.lrcontent.com/images/Zendesk_Search_223825b3fa840ec0c69.02774050.png "Search For LoginRadius in the Zendesk Marketplace")

5. Once you're on the "LoginRadius Customer Identity and Access Management" App page, click on "Install". You will be prompted to select which Zendesk account you would like to use for the installation; click the big "Install" button to confirm.

	![enter image description here](https://apidocs.lrcontent.com/images/Zendesk_hit_install_86145b3fab80d79ce9.00427763.png "enter image title here")



6. You will be prompted with a configuration form –you can leave most of the fields at their default values unless you plan on changing them. However, you **must** provide your [LoginRadius API Key and Secret](https://www.loginradius.com/docs/api/v2/admin-console/get-api-key-and-secret) along with your [LoginRadius Sitename](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/). Hit "Install" once you're ready.

	![enter image description here](https://apidocs.lrcontent.com/images/ZendeskAppConfig_119015b3fe52b9c68e1.48709828.png "enter image title here")
	
7. The integration is now active. When a customer sends in a ticket, you will be able to see the customer's profiles directly on the right-hand side of the ticket. The integration automatically pulls the customer's information from LoginRadius based on the email of the customer stored in Zendesk.

 ![enter image description here](https://apidocs.lrcontent.com/images/Zendesk_ticket_example_1_316715b3fe50c6e99e1.43505882.png "enter image title here")
