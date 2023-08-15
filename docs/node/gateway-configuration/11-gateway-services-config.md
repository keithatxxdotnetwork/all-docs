---
sidebar_position: 11
---
# 11. xx Network System Services
In this step you will configure, enable and start the chain and gateway systemd services.
## Configure xxnetwork-chain service

<details>
<summary>Default xxnetwork-chain.service file</summary>

```
[Unit]
Description=Job that starts the xx network chain binary
After=local-fs.target network-online.target network.target
Wants=local-fs.target network-online.target network.target

[Service]
User=ubuntu
Type=simple

ExecStart=/bin/bash -c "/opt/xxnetwork/bin/xxnetwork-chain --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' --base-path /opt/xxnetwork/db --port 15974 --ws-port 63007  >> /opt/xxnetwork/log/chain.log 2>&1"

LimitNOFILE=infinity
Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```
</details>

### Set the correct user
Confirm your username.
```
whoami
```
```
nano /opt/xxnetwork/xxnetwork-chain.service
```
The default user is `ubuntu`. Change this to your username.
```
User=ubuntu
```
### Save the xxnetwork-chain.service file and exit nano.
Press Ctrl+s then Ctrl+x
## Configure xxnetwork-gateway service

<details>
<summary>Default xxnetwork-gateway.service file</summary>

```
[Unit]
Description=Job that starts the gateway Wrapper service
StartLimitIntervalSec=5
StartLimitBurst=10
After=local-fs.target network-online.target network.target
Wants=local-fs.target network-online.target network.target

[Service]
User=ubuntu
Type=simple

ExecStart=/opt/xxnetwork/gateway-wrapper.py \
--wrapper-log /opt/xxnetwork/log/gateway-wrapper.log \
--cmd-dir /opt/xxnetwork/log/gateway-cmd \
--gateway \
--binary-path /opt/xxnetwork/bin/xxnetwork-gateway \
--config-path /opt/xxnetwork/config/gateway.yaml \
--id-path /opt/xxnetwork/cred/gateway-IDF.json \
--log-path /opt/xxnetwork/log/gateway.log \
--management-cert /opt/xxnetwork/cred/network-management.crt \
--s3-access-key KEY \
--s3-secret SECRET \
--s3-region us-west-1 \
--s3-management-bucket elixxir-management-mainnet \
--s3-bin-bucket elixxir-bins \
--cloudwatch-log-group xxnetwork-logs-mainnet \
--tmp-dir /tmp/xxnetwork/gateway/

LimitNOFILE=infinity
Restart=always

[Install]
WantedBy=multi-user.target
```
</details>

### Set the correct user
Confirm your username.
```
whoami
```
```
nano /opt/xxnetwork/xxnetwork-gateway.service
```
The default user is `ubuntu`. Change this to your username.
```
User=ubuntu
```
### Save the xxnetwork-gateway.service file and exit nano.
Press Ctrl+s then Ctrl+x
## Link System Services
```
sudo ln -s /opt/xxnetwork/xxnetwork-gateway.service /etc/systemd/system
```
```
sudo ln -s /opt/xxnetwork/xxnetwork-chain.service /etc/systemd/system
```
```
sudo systemctl daemon-reexec
```
## Enable System Services
```
sudo systemctl enable xxnetwork-chain.service
```
```
sudo systemctl enable xxnetwork-gateway.service
```
## Start System Services
```
sudo systemctl start xxnetwork-chain.service
```
```
sudo systemctl start xxnetwork-gateway.service
```
## Check services status
Both services should be `Active: active (running) since [some day date and time]; [duration] ago`.
```
systemctl status xxnetwork-chain
```
```
systemctl status xxnetwork-gateway
```
## 🎞️ [Demonstration Video](https://www.youtube.com/watch?v=V5_zLI2UTIc&t=482s)