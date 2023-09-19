---
sidebar_position: 6
---

# Basic Linux Help
## General Linux Help
### Add a sudo-enabled user account
The following will create a new user named `ubuntu`. You will be asked to set the password and optionally provide additional information about the user.
```
adduser ubuntu
```
The following will add the user `ubuntu` to the sudo group.
```
usermod -aG sudo ubuntu
```
You must log out of the `root` account and log in as the new user.

### Add a rule to UFW
The following will open port `12345`
```
sudo ufw allow 12345
```
### Get Username
```
whoami
```
### Get Public and Private IP Addresses
```jsx title="Copy and run ..."
PUB=$(curl -s ipinfo.io/ip) && PRI=$(hostname -I | awk '{print $1}') \
&& echo 'Public IP:' $PUB && echo 'Private IP:' $PRI
```
```jsx title="Sample Output"
Public IP: 202.100.xxx.xxx
Private IP: 192.168.xxx.xxx
```
### Get cmixID and hexnodeID from cmix-IDF.json
```jsx title="Copy and run ..."
python3 -m json.tool /opt/xxnetwork/cred/cmix-IDF.json | grep -w "id\|hexNodeID"
```
```jsx title="Sample Output"
    "id": "AOLeWnPg7xy5bxA/FWbMXJ1aXRIb2BQLqmf4eJCnyJUC",
    "hexNodeID": "0x00e2de5a73e0ef1cb96f103f1566cc5c9d5a5d121bd8140baa67f87890a7c895"
```
### Get Service Status
```
systemctl status xxn*
```
### Get Process Status
```
ps -A | grep xxn
```
## Configuration Files
Configuration files are located in `/opt/xxnetwork/config/`
### Gateway
```
nano /opt/xxnetwork/config/gateway.yaml
```
### Node
```
nano /opt/xxnetwork/config/cmix.yaml
```
## Log Files
Log files are located in `/opt/xxnetwork/log/`
### Gateway
```
tail -n 100 /opt/xxnetwork/log/gateway-wrapper.log
tail -n 100 /opt/xxnetwork/log/gateway.log
tail -n 100 /opt/xxnetwork/log/chain.log
```
### Node
```
tail -n 100 /opt/xxnetwork/log/cmix-wrapper.log
tail -n 100 /opt/xxnetwork/log/cmix.log
tail -n 100 /opt/xxnetwork/log/chain.log
```
## Service Files
Service files are located in `/opt/xxnetwork/`
### Gateway
```
nano /opt/xxnetwork/config/xxnetwork-gateway.service
nano /opt/xxnetwork/config/xxnetwork-chain.service
```
### Node
```
nano /opt/xxnetwork/config/xxnetwork-cmix.service
nano /opt/xxnetwork/config/xxnetwork-chain.service
```