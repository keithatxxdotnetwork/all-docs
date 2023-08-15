---
sidebar_position: 1
---
# 1. Getting Started
Before you begin, take a moment and consider a few things.
## Required Information
As a node runner you will need to know the following for use with this guide and for future administrative tasks.
* **sudo-enabled Account Username**: This username was created when Ubuntu was installed.
* **sudo-enabled Account Password**: This password was set when Ubuntu was installed.
* **Node PostgreSQL Database Username**: This username is `cmix` by default and is set in the `cmix.yaml` file.
* **Node PostgreSQL Database Password**: This password will be set in a later step, [Create the PostgreSQL user named `cmix`](node-database#create-the-postgresql-user-named-cmix), and should be different than the sudo-enabled Account password.
* **Private and Public IP Addresses**: If you do not know these you can, [Get Public and Private IP addresses](../basic-linux-help#get-public-and-private-ip-addresses) of the computer.
## The Operating System
:::danger Have you installed Ubuntu Server 20.04 LTS on the node computer?
:::
:warning: The xx Network team may not be able to assist you if problems arise on OSs other than Ubuntu Server 20.04 LTS. Other versions of Ubuntu (Ex. 18.04, 22.10, etc), flavors of Ubuntu (Ex. Ubuntu Desktop, Kubuntu, etc), and Linux distributions (Ex. Arch, Fedora, etc) have not been tested for compatibility with the xx Network software. That is not to say that the xx Network software can only be run on Ubutnu Server 20.04 LTS, but it may not be fully compatible due to the various versions of software that are installed by default by the OS maintainer. Refer to the [Install Ubuntu Server](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview) documentation to install [Ubuntu Server 20.04 LTS](https://releases.ubuntu.com/20.04/) which Ubuntu has committed to provide hardware and maintenance updates until [April 2030](https://ubuntu.com/about/release-cycle).
## The `root` user
:::danger Are you currently logged in as `root`?
:::
:warning: The xx Network team strongly suggests you do not run the xx Network software as the user `root`. If you are currently logged in as `root`, please log out now and log in as a sudo-enabled user. If you do not have a sudo-enabled user account, you should [Add a sudo-enabled user account](../basic-linux-help#add-a-sudo-enabled-user-account) and log in as the new user before you proceed.