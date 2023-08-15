---
sidebar_position: 9
---
# 9. Transfer TLS Credentials

Three files that were genereated during the setup of the Node computer must be copied to the gateway computer, the Gateway credentials `gateway-cert.crt` and `gateway-key.key`, and the cMix public certificate, `cmix-cert.crt`.

The instructions below assume that you have SSH enabled and configured on your Gateway computer.

First, get the address for the Gateway computer.

Get the public IP address by running the following command on the Gateway computer.
```
curl -w "\n" ipinfo.io/ip 
```
Next, you will need the username for the Gateway computer.
Using SCP, you will copy the three required files, `gateway-cert.crt`, `gateway-key.key`, and `cmix-cert.crt` from the node computer to the gateway computer.
```
scp /opt/xxnetwork/cred/gateway-cert.crt /opt/xxnetwork/cred/gateway-key.key /opt/xxnetwork/cred/cmix-cert.crt [Gateway username]@[Gateway public IP]:/opt/xxnetwork/cred/
```
Sample output
```
gateway-cert.crt                   100% 2053    60.3KB/s   00:00
gateway-key.key                    100% 3276    93.0KB/s   00:00
cmix-cert.crt                      100% 2053    69.3KB/s   00:00
```
Check that all the correct files are in the cred/ directory using ls to list the files.
```
ls -1 /opt/xxnetwork/cred/
```
```
cmix-cert.crt
gateway-cert.crt
gateway-key.key
network-management.crt
scheduling-cert.crt
```
You should now delete the Gateway's private key, `gateway-key.key`, from the Node computer.

:::danger 
Ensure that the Gateway key was copied correctly to the Gateway and securely backed up before deleting it off the Node computer.
:::
The following should be run on the Node computer.
```
rm /opt/xxnetwork/cred/gateway-key.key
```
