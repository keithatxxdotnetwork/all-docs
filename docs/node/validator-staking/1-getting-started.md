---
sidebar_position: 1
---
# 1. Getting Started
Before you begin, take a moment and consider a few things.
## Required Information
When staking a validator associated with a cMix node you will need to know the following:
* **Validator Stash Account**: This account is akin to a cold wallet which will hold the xx coins that will be bonded, staked and earn rewards.
* **Validator Controller Account**: This account is akin to a hot wallet which will require a small amount of xx coins for the purpose of paying transsaction fees related to the stash account for signing extrinsics such as initiating payouts and changes to the validator comission.
:::tip See [Sleeve Wallet Generation Tool](../../tools/sleeve/sleeve.md) if you have not generated the Stash and Controller wallets.
:::
* **Session Keys**: [Session keys](../references/cryptoAndNetPrimitives.md#session-keys) are required to sign and submit an extrinsic. These keys are associated with the cMix node and your controller account and will be generated in a future step.
* **cMix Hexadecimal Node ID**: The hexidecimal node ID can be [gotten from the `cmix-IDF.json'](../../node/references/basic-linux-help.md#get-cmixid-and-hexnodeid-from-cmix-idfjson) file and instructions will also be provided at a later step as well.
