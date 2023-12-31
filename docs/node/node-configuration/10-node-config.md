---
sidebar_position: 10
---
# 10. cMix Options
In this step you will edit the cmix.yaml configuration file. 

In most cases, you will only need to set the correct database password at this point.

<details>
<summary>Default cmix.yaml</summary>

```
##
# cMix Configuration File
##

# Toggles use of the GPU. (Default true)
useGPU: true

# Level of debugging to print (0 = info, 1 = debug, >1 = trace). (Default info)
logLevel: 0

cmix:
  paths:
    # Path where an error file will be placed in the event of a fatal error.
    # This path is used by the Wrapper Script. (Required)
    errOutput: "/opt/xxnetwork/log/cmix-err.log"
    # Path to where the identity file (IDF) is saved. The IDF stores the Node's
    # network identity. This is used by the wrapper management script. (Required)
    idf: "/opt/xxnetwork/cred/cmix-IDF.json"
    # Path to the self-signed TLS certificate for cMix. Expects PEM format.
    # (Required)
    cert: "/opt/xxnetwork/cred/cmix-cert.crt"
    # Path to the private key associated with the self-signed TLS certificate.
    # (Required)
    key: "/opt/xxnetwork/cred/cmix-key.key"
    # Path where log file will be saved. (Default "log/cmix.log")
    log: "/opt/xxnetwork/log/cmix.log"
  # Port that cMix will communicate on. (Required)
  port: 11420
  # Local IP address of the Node, used for internal listening. Expects an IPv4
  # address without a port. (default "0.0.0.0")
  # WARNING: Do not modify this option unless explicitly required.
  #listeningAddress: "0.0.0.0"
  # The public IPv4 address of the Node, as reported to the network. When not
  # set, external IP address lookup services are used to set this value. If a
  # port is not included, then the port from the port flag is used instead.
  # WARNING: Do not modify this option unless explicitly required.
  #overridePublicIP: "1.2.3.4"
  # If set, then it is used to override the internal IP address used to contact
  # yourself. Expects an IPv4 address with or without a port. If no port is
  # included, then the port from the port flag is used.
  # WARNING: Do not modify this option unless explicitly required.
  #overrideInternalIP: "127.0.0.1"

# Information to connect to the Postgres database storing keys. (Required)
database:
  name: "cmix_node"
  address: "0.0.0.0:5432"
  username: "cmix"
  password: "[password for database]"

# Information to communicate with this Node's Gateway.
gateway:
  paths:
    # Path to the self-signed TLS certificate for Gateway. Expects PEM format.
    # (Required)
    cert: "/opt/xxnetwork/cred/gateway-cert.crt"

scheduling:
  paths:
    # Path to the self-signed TLS certificate for the Scheduling server.
    # Expects PEM format. (Required)
    cert: "/opt/xxnetwork/cred/scheduling-cert.crt"
  # Partial IP Address of the network, provided by xx network. (Required)
  address: "mainnet.cmix.rip:11420"

metrics:
  # Path to store metrics logs.
  log: "/opt/xxnetwork/log/metrics.log"
```
</details>

## Edit the yaml file

```jsx title="Copy and run ..."
nano /opt/xxnetwork/config/cmix.yaml
```
### Set the database password
In the previous step, [cMix Node Database Configuration](node-database#set-the-password-for-the-user-named-cmix), you set the password for the PostgreSQL user, `cmix`.
Replace `[password for database]` with the password you set earlier. Ex. If you had set the password to `1234abcd` the file should read `"1234abcd"`.
```
# Information to connect to the Postgres database storing keys. (Required)
database:
  name: "cmix_node"
  address: "0.0.0.0:5432"
  username: "cmix"
  password: "[password for database]"
  ```
  