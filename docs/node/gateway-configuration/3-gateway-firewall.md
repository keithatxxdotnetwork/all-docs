---
sidebar_position: 3
---
# 3. Firewall Configuration
In this step you will configure the firewall of the gateway computer.

Two ports are required to be accessible for other cMix gateway computers to connect to yours.
* By default `xxnetwork-chain` is set to use port 15974 in the `xxnetwork-chain.service` file.
* By default `xxnetwork-gateway` is set to use port 22840 in the `gateway.yaml` file.

## Add firewall rules via `ufw`

```jsx title="Copy and run ..."
sudo ufw disable
```
```jsx title="Sample Output"
Firewall stopped and disabled on system startup
```
```jsx title="Copy and run ..."
sudo ufw allow 15974/tcp comment "xx network chain"
```
```jsx title="Copy and run ..."
sudo ufw allow 22840/tcp comment "xx network Gateway"
```
```jsx title="Sample Output"
Rules updated
Rules updated (v6)
```
:::danger Are you connected remotely?
Before enabling the firewall, be sure you have added rules for any ports required for remote administration. For example, if you are administering the computer remotely with SSH via port 22, you will need to issue the following command ...

```sudo ufw allow 22/tcp comment "ssh"```
:::

## Enable the firewall
```jsx title="Copy and run ..."
sudo ufw enable
```
Pressing `Enter` alone will not enable the firewall. You must input `y`.
```jsx title="Sample Output"
Command may disrupt existing ssh connections. Proceed with operation (y|n)?
Firewall is active and enabled on system startup
```
##  Check the current rules
```jsx title="Copy and run ..."
sudo ufw status
```
```jsx title="Sample Output"
Status: active

To                         Action      From
--                         ------      ----
15974/tcp                  ALLOW       Anywhere                   # xx network chain
22840/tcp                  ALLOW       Anywhere                   # xx network Gateway
15974/tcp (v6)             ALLOW       Anywhere (v6)              # xx network chain
22840/tcp (v6)             ALLOW       Anywhere (v6)              # xx network Gateway
```
## 🎞️ [Demonstration Video](https://www.youtube.com/watch?v=V5_zLI2UTIc&t=82s)