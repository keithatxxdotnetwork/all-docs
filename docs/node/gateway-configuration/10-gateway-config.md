---
sidebar_position: 10
---
# 10. Gateway Options
In this step you will edit the gateway.yaml configuration file.

<details>
<summary>Default gateway.yaml</summary>

```
##
# Gateway Configuration File
##

# Level of debugging to print (0 = info, 1 = debug, >1 = trace). (Default info)
logLevel: 0

# Path where log file will be saved. (Default "log/gateway.log")
log: "/opt/xxnetwork/log/gateway.log"

# Port for Gateway to listen on. Gateway must be the only listener on this port.
# (Required)
port: 22840

# The IP address of the machine running cMix that the Gateway communicates with.
# Expects an IPv4 address with a port. (Required)
cmixAddress: "0.0.0.0:11420"

# Path to where the identity file (IDF) is saved. The IDF stores the Gateway's
# network identity. This is used by the wrapper management script. (Required)
idfPath: "/opt/xxnetwork/cred/gateway-IDF.json"

# Path to the private key associated with the self-signed TLS certificate.
# (Required)
keyPath: "/opt/xxnetwork/cred/gateway-key.key"

# Path to the self-signed TLS certificate for Gateway. Expects PEM format.
# (Required)
certPath: "/opt/xxnetwork/cred/gateway-cert.crt"

# Path to the self-signed TLS certificate for cMix. Expects PEM format.
# (Required)
cmixCertPath: "/opt/xxnetwork/cred/cmix-cert.crt"

# Path to the self-signed TLS certificate for the Scheduling server. Expects
# PEM format. (Required)
schedulingCertPath: "/opt/xxnetwork/cred/scheduling-cert.crt"

# Database connection information. (Required)
dbName: "cmix_gateway"
dbAddress: "0.0.0.0:5432"
dbUsername: "cmix"
dbPassword: "[password for database]"

##
# WARNING: Do not modify the options below unless explicitly required.
##

# Local IP address of the Gateway, used for internal listening. Expects an IPv4
# address without a port. (Default "0.0.0.0")
#listeningAddress: "0.0.0.0"

# The public IPv4 address of the Gateway, as reported to the network. When not
# set, external IP address lookup services are used to set this value. If a
# port is not included, then the port from the port flag is used instead.
#overridePublicIP: "1.2.3.4"
```
</details>

## Edit the yaml file

```jsx title="Copy and run ..."
nano /opt/xxnetwork/config/gateway.yaml
```
### cmixAddress
This is the IP address and port number of the node computer.

```
# The IP address of the machine running cMix that the Gateway communicates with.
# Expects an IPv4 address with a port. (Required)
cmixAddress: "0.0.0.0:11420"
```
### Set the database password
In the previous step, [cMix Gateway Database Configuration](gateway-database#set-the-password-for-the-user-named-cmix), you set the password for the PostgreSQL user, `cmix`.
Replace `[password for database]` with the password you set earlier. Ex. If you had set the password to `1234abcd` the file should read `"1234abcd"`.
```
# Database connection information. (Required)
dbName: "cmix_gateway"
dbAddress: "0.0.0.0:5432"
dbUsername: "cmix"
dbPassword: "[password for database]"
```
