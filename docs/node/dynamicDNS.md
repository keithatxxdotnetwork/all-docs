# Dynamic DNS (DDNS)

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

## Setting the Domain Name on Node Computer

To use DDNS on the Node, you must enable `overridePublicIP` on the Node and update the `cmixAddress` on
the Gateway with the Node's domain name.

### Update the `cmix.yaml` file

Follow the instructions below on the Node machine.

1.  Open up the cMix configuration file.
```
$ nano /opt/xxnetwork/config/cmix.yaml
```
2.  Find the line that cotains `#overridePublicIP`. Remove the leading `#` and replace the 
placeholder IP address with the domain name for your cMix Node.

```
  # The public IPv4 address of the Node, as reported to the network. When not
  # set, external IP address lookup services are used to set this value. If a
  # port is not included, then the port from the port flag is used instead.
  # WARNING: Do not modify this option unless explicitly required.
  overridePublicIP: "yourdomain.com"
```

3. Save the file and exit *nano* by pressing `Ctrl + s`, then `Ctrl +x`

4. To activate the change, restart the cMix service.
```
$ sudo systemctl restart xxnetwork-cmix
```

### Update the `gateway.yaml` file

Follow the instructions below on the Gateway machine.

1.  Open up the Gateway configuration file.
```
$ nano /opt/xxnetwork/config/gateway.yaml
```
2.  Use the down key to navigate to the line with `cmixAddress:` and replace the IP
    address with the domain name and port for your cMix Node.
```
# The IP address of the machine running cMix that the Gateway communicates with.
# Expects an IPv4 address with a port. (Required)
cmixAddress: "yourdomain.com:11420"
```
3. Save the file and exit *nano* by pressing `Ctrl + s`, then `Ctrl +x`

4. To activate the change, restart the Gateway service.
```
$ sudo systemctl restart xxnetwork-gateway
```

## Setting the Domain Name on Gateway Computer

### Update the `gateway.yaml` file

To use DDNS on the Gateway, you must enable `overridePublicIP` and
configure it with the Gateway's domain name.

1.  Open up the Gateway configuration file.
```
$ nano /opt/xxnetwork/config/gateway.yaml
```
2.  Find the line that cotains `#overridePublicIP`. Remove the leading `#` and replace the 
placeholder IP address with the domain name for your cMix Node.

```
  # The public IPv4 address of the Node, as reported to the network. When not
  # set, external IP address lookup services are used to set this value. If a
  # port is not included, then the port from the port flag is used instead.
  # WARNING: Do not modify this option unless explicitly required.
  overridePublicIP: "yourdomain.com"
```

3. Save the file and exit *nano* by pressing `Ctrl + s`, then `Ctrl +x`

4. To activate the change, restart the Gateway service.
```
$ sudo systemctl restart xxnetwork-gateway
```