---
sidebar_position: 2
---
# 2. Software Dependencies
In this step you will update Ubuntu and the base packages, and install all of the dependent software. You can find a list of what will be installed below.

<details>
  <summary>Dependency List</summary>

  - **curl** is a tool for transferring data from or to a server.
  - **python3-pip** and **pip** are installer programs for python modules.
  - **postgresql-client**, **postgresql**, and **postgresql-contrib** provide database functionality for cMix node data.
  - **boto3**, **pyOpenSSL**, and **requests** handle commands, upgrades and send logs via AWS.
  - **substrate-interface** and **packaging** are for interacting with a Substrate node.

</details>

## Update Ubuntu and the base packages (Recommended)
```jsx title="Copy and run ..."
sudo apt -y update && sudo apt -y upgrade
```
## Restart the Computer (Recommended)
If updated were installed it is recommended you restart the computer but if none were installed you can skip reboot the computer.
```jsx title="Copy and run ..."
sudo shutdown -r now
```
## Install cMix dependent Ubuntu packages
```jsx title="Copy and run ..."
sudo apt install -y curl python3-pip postgresql-client postgresql postgresql-contrib
```
## Restart the Computer (Optional)
After installing all of the dependencies you should restart the computer.
```jsx title="Copy and run ..."
sudo shutdown -r now
```
## Install dependent Python modules
### Install pip
```jsx title="Copy and run ..."
sudo pip3 install -U pip
```
### Install cMix dependent Python modules
```jsx title="Copy and run ..."
pip3 install --user -U boto3 pyOpenSSL substrate-interface packaging requests
```