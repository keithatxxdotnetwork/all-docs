---
sidebar_position: 9
---
# 9. Generate cMix TLS Credentials
In this step you will generate the TLS credentials required for your node and gateway computers to connect to others on the xx Network.
:::danger Read Carefully
The following instructions will guide you in generating the cMix TLS credentials, two certificate and private key pairs, and the IDF of the cMix node. Loss of these files will make it impossible to reconnect your cMix node and gateway to the network. When completed you will find 5 new files, listed below, in `/opt/xxnetwork/cred` along with two TLS certificates that are included in the tarball. 

The following files are irreplaceable!
* cmix-IDF.json
* cmix-cert.crt
* cmix-key.key
* gateway-cert.crt
* gateway-key.key

Never share your `*.crt` or `*.key` files with others.
:::
## Generate Credentials
```jsx title="Copy and run ..."
cd /opt/xxnetwork/ && python3 generate-certs.py
```
You will be asked for information used to create the credentials. If you do not to provide answers, default values will be used.

```jsx title="Sample Output:"
This script will ask you to input information to be used in key generation.
If you do not wish to enter any given field, a default will be provided, attributed to the xx network.
Country (default: 'KY (Cayman Islands)'): 
State/province (default: ' '): 
Locality (default: 'George Town'): 
Organization (default: 'xxnetwork'): 
Organizational unit (default: 'nodes'): 
Email (default: 'admin@xx.network'): 
Domain (default: 'xx.network'): 
Generating a RSA private key
...............................................................................................++++
......................................................................................................................................................................................................++++
writing new private key to 'cred/cmix-key.key'
-----
~~~~~
Generating a RSA private key
................................................................................................................................................++++
...........++++
writing new private key to 'cred/gateway-key.key'
-----
Idf: {"id":"jNvS/LfTn37Mme0HE/o8+qKq7cOHYYWBTDk8ocCmVAgC","type":"node","salt":[17,139,130,100,192,224,222,90,105,206,68,123,177,105,23,133,82,7,184,80,82,71,42,121,48,149,67,177,68,4,23,102],"idBytes":[140,219,210,252,183,211,159,126,204,153,237,7,19,250,60,250,162,170,237,195,135,97,133,129,76,57,60,161,192,166,84,8,2],"hexNodeID":"0x8cdbd2fcb7d39f7ecc99ed0713fa3cfaa2aaedc3876185814c393ca1c0a65408"}
```
## Check Credentials
Verify the files were created by listing the files in `/opt/xxnetwork/cred`
```jsx title="Copy and run ..."
ls -la /opt/xxnetwork/cred/
```
```jsx title="Sample Output:"
total 36
drwx------ 2 ubuntu ubuntu 4096 Jan 19 14:37 .
drwx------ 8 ubuntu ubuntu 4096 Jan 19 14:37 ..
-rw-rw-r-- 1 ubuntu ubuntu 2049 Jan 19 14:37 cmix-cert.crt
-rw-r--r-- 1 ubuntu ubuntu  399 Jan 19 14:37 cmix-IDF.json
-rw------- 1 ubuntu ubuntu 3272 Jan 19 14:37 cmix-key.key
-rw-rw-r-- 1 ubuntu ubuntu 2049 Jan 19 14:37 gateway-cert.crt
-rw------- 1 ubuntu ubuntu 3272 Jan 19 14:37 gateway-key.key
-rw-rw-r-- 1 ubuntu ubuntu 2025 Nov 16  2021 network-management.crt
-rw-rw-r-- 1 ubuntu ubuntu 2025 Nov 16  2021 scheduling-cert.crt
```
## Find your cMix `id` and `hexNodeID`
You will need to know the `id` of the cMix node, commonly referred to the as your cMixID or NodeID. You will also need to know how to find the `hexNodeID` for use in a later step, *Staking your Node*. Both are stored in the `cmix-IDF.json` file located in `/opt/xxnetwork/cred`
```jsx title="Copy and run ..."
python3 -m json.tool /opt/xxnetwork/cred/cmix-IDF.json | grep -w "id\|hexNodeID"
```
```jsx title="Sample Output:"
"id": "jNvS/LfTn37Mme0HE/o8+qKq7cOHYYWBTDk8ocCmVAgC",
"hexNodeID": "0x8cdbd2fcb7d39f7ecc99ed0713fa3cfaa2aaedc3876185814c393ca1c0a65408"
```
## Backup Credentials
:::danger Have you backed up your TLS credentials?
It is best practice to make duplicate copies of your TLS credentials.

The following files are irreplaceable!
* cmix-IDF.json
* cmix-cert.crt
* cmix-key.key
* gateway-cert.crt
* gateway-key.key

Never share your `*.crt` or `*.key` files with others.
:::
