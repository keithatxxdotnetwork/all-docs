---
sidebar_position: 6
---
# 6. TCP Network Settings
In this step you will set TCP settings which greatly improve the performance of the node computer.

The TCP congestion window size limits the maximum amount of data sent out to a network after a time of little operation. The default size needs to be increased to reduce latency in the xx Network. This change is necessary for the xx Network because the cMix protocol transmits in short bursts. As a result, the congestion windows contract between transmissions, causing them to reopen on every transmission, significantly slowing down the network in high latency environments.
## Open `sysctl.conf` for editing
```jsx title="Copy and run ..."
sudo nano /etc/sysctl.conf 
```
## Add the flags
Add the following `token=value` pairs to the end of the `sysctl.conf` file
```jsx title="Copy and paste ..."
net.ipv4.tcp_slow_start_after_idle=0
net.ipv4.tcp_congestion_control=bbr
net.core.default_qdisc=fq
```
## Save the sysctl.conf file and exit nano.
Press Ctrl+s then Ctrl+x
## Load the changes.
```jsx title="Copy and run ..."
sudo sysctl -p
```
```jsx title="Sample Output"
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_congestion_control = bbr
net.core.default_qdisc = fq
```
## 🎞️ [Demonstration Video](https://www.youtube.com/watch?v=V5_zLI2UTIc&t=188s)