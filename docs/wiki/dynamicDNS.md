Dynamic DNS (DDNS) is a system that automatically updates DNS records
when an IP address changes. It allows you to connect to a server using a
domain name without worrying that its dynamic IP address may change.

Entities on the cMix network communicate using IP addresses or domain
names. If a Node or Gateway uses a dynamic IP, then changes in the IP
address can result in downtime until the Node operator manually updates
it. To avoid this downtime, DDNS can be used so that entities contact
your Node or Gateway using a domain name rather than an IP address that
can change. If an IP address changes, it will quickly be updated in the
DNS records, and entities on the network should continue to communicate
with your Node or Gateway.

Once you have set up DDNS and have a domain name linked to your Node or
Gateway, follow the instructions below for configuring the cMix software
to utilize it.

If your Node or Gateway has a static IP address, then there is no need
to use dynamic DNS. However, you are still welcome to use a domain name
by following the instructions below.

## Setting the Domain Name on cMix Node

To use DDNS on the Node, you must enable on the Node and update the on
the Gateway with the Node's domain name.

### Update the Node

Follow the instructions below on the Node machine.

1.  Open up the cMix configuration file.
2.  Use the down key to navigate to the line with (it will be under \> )
    and uncomment it by deleting the prepending the line. Replace the
    placeholder IP address with the domain name for your cMix Node.
<ol>
<li>

Once the change is made, save the file by pressing , and when prompted
to save the buffer, press . Finally, when prompted with the file name,
press .

</li>
<li>

To activate the change, restart the cMix service.

</li>
</ol>

### Update the Gateway

Follow the instructions below on the Gateway machine.

1.  Open up the Gateway configuration file.
2.  Use the down key to navigate to the line with and replace the IP
    address with the domain name and port for your cMix Node.
3.  Once the change is made, save the file by pressing , and when
    prompted to save the buffer, press . Finally, when prompted with the
    file name, press .
4.  To activate the change, restart the cMix service.

## Setting the Domain Name on cMix Gateway

To use DDNS on the Gateway, you must enable overridePublicIP and
configure it with the Gateway's domain name.

1.  Open up the Gateway configuration file.
2.  Use the down key to navigate to the line with (it should be at the
    bottom) and uncomment it by deleting the prepending the line. Then
    replace the placeholder IP address with the domain name for your
    cMix Gateway.
3.  Once the change is made, save the file by pressing , and when
    prompted to save the buffer, press . Finally, when prompted with the
    file name, press .
4.  To activate the change, restart the cMix service.
