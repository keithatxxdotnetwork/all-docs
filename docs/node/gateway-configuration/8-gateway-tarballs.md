---
sidebar_position: 8
---
# 8. xx Network Gateway Tarball
In this step you will download and extract the software for the gateway computer.

<details>
<summary>Gateway Tarball Directory Structure and Files</summary>

```
xxnetwork/
├── bin                          > binaries directory
│   └── xxnetwork-chain          > xx Network chain binary
├── config                       > configuration files directory
│   └── gateway.yaml             > Gateway binary configuration file
├── cred                         > TLS files directory
│   ├── network-management.crt   > Wrapper script TLS certificate
│   └── scheduling-cert.crt      > Scheduling server TLS certificate
├── db                           > xx chain data directory
├── gateway-wrapper.py           > Gateway binary management script
├── log                          > log files directory
│   └── gateway-cmd              > remote command log files directory
├── xxnetwork-chain.service      > xx chain service file
└── xxnetwork-gateway.service    > Gateway Wrapper script service file

6 directories, 7 files
```
</details>

## Download the latest tarball
```jsx title="Copy and run ..."
cd /opt && sudo curl -L -O https://docs.xx.network/mainnet/gateway.tar.gz
```
```jsx title="Sample Output"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 30.9M  100 30.9M    0     0  11.8M      0  0:00:02  0:00:02 --:--:-- 11.8M
```
## Verify the integrity of the tarball
:::warning Verify the tarball
Visit the [xx Network Tarball Page](https://xx.network/mainnet-tarballs)

Find the **SHA256 checksum** of the **Gateway** tarball and compare it with the output of the following command.
```
sha256sum gateway.tar.gz
```
You will see output similar to below.
```
091165700fc3b1baea7f04d1f05e57b7470fa50f5a4e960ef74c59b342b3c3eb  gateway.tar.gz
```
:warning: Please [**get help**](../install-overview#getting-help), if the output does not match the checksum found on the [xx Network Tarball Page](https://xx.network/mainnet-tarballs)
:::
## Extract the tarball
```jsx title="Copy and run ..."
sudo tar -xvf gateway.tar.gz
```
<details>
<summary>Long Sample Output</summary>

```
xxnetwork/
xxnetwork/gateway-wrapper.py
xxnetwork/log/
xxnetwork/log/gateway-cmd/
xxnetwork/config/
xxnetwork/config/gateway.yaml
xxnetwork/xxnetwork-chain.service
xxnetwork/xxnetwork-gateway.service
xxnetwork/cred/
xxnetwork/cred/network-management.crt
xxnetwork/cred/scheduling-cert.crt
xxnetwork/db/
xxnetwork/bin/
xxnetwork/bin/xxnetwork-chain
```
</details>

## Claim ownership of `/opt/xxnetwork` and all files 
```jsx title="Copy and run ..."
sudo chown $USER:$USER -Rv /opt/xxnetwork/
```
<details>
<summary>Long Sample Output</summary>

```
changed ownership of '/opt/xxnetwork/gateway-wrapper.py' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/log/gateway-cmd' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/log' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/config/gateway.yaml' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/config' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/xxnetwork-chain.service' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/xxnetwork-gateway.service' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/cred/network-management.crt' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/cred/scheduling-cert.crt' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/cred' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/db' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/bin/xxnetwork-chain' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/bin' from root:root to ubuntu:ubuntu
changed ownership of '/opt/xxnetwork/' from root:root to ubuntu:ubuntu
```
</details>

## 🎞️ [Demonstration Video](https://www.youtube.com/watch?v=V5_zLI2UTIc&t=274s)