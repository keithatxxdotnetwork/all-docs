These instructions detail how to stake your Node on the xx network
(MainNet).

Follow these instructions on your xx chain validator. In most cases,
this is your Node machine.

## Before Starting

Before installing the software, make sure that:

1.  You have followed the [Node Set Up](Node_Set_Up "wikilink")
    instructions
2.  Your Node machine is on, connected to the internet, and accessible.

## Checking if the Node is Ready

Before you can stake your Node, you need to make sure the xx chain
software is syncing and that the cMix software is waiting for consensus.

1.  First, check that the xx chain software is syncing by checking the
    log file . Use to find the correct line.
    If xx chain is syncing, you will see an output that looks similar to
    the following example.

    If nothing is printed, then it is possible that syncing happened
    very quickly. You can check the xx chain log file to see if your
    Node is synced.

    Your Node is synced if you see lines that say and as shown below

    Press to exit .

    If neither of these commands print the expected output, then xx
    chain is not yet syncing. Wait for it to begin syncing and try the
    commands above again.
2.  Next, check that the cMix Wrapper Script is waiting for consensus by
    checking the log file .
    If cMix is waiting for consensus, then you will see an output
    similar to the following example.

    If nothing is printed, then the Wrapper Script is not ready yet.
    Wait for the Wrapper Script to run for a few seconds and try the
    command above again.

## Set Session Keys

When staking your Node in later steps, you need to tell the chain your
session keys by signing and submitting an extrinsic. This process is
what associates your validator node with your controller account.

Once you have connected to your Node, the easiest way to set session
keys for your Node is by calling the RPC request to create new keys in
your validator's keystore.

1.  First, use to call the RPC request and save the output of the call
    to .
2.  The output will be a JSON file with a field with the concatenation
    of the hex encoding of four public keys, similar to the example
    below.
      

## Generate Wallets

Before staking your Node, you need to generate a wallet to use as both
your **stash** and **controller** accounts. Wallet generation should not
be done on your Node. It can be done on your personal computer or a more
secure system. Please note that you will only need an internet
connection to download the binaries; however, we recommend disabling
your computer's internet connection before generating any wallets. For
extra security, you may wish to use an air-gapped computer.

When generating the wallet, you will generate a *quantum-secure mnemonic
phrase*, a *standard mnemonic phrase*, and a wallet address.

1.  Follow the instructions for [Using the Wallet
    Generator](Using_the_Wallet_Generator "wikilink") on this wiki or
    check out the [MainNet Wallet
    Generator](https://xx.network/mainnet-wallet-gen) webpage for the
    newest updates.
2.  You should now have a *quantum-secure mnemonic phrase*, *standard
    mnemonic phrase*, and *wallet address*.

## Bond and Validate

The instructions below describe how to stake your Node and become a
validator using the [xx wallet](https://wallet.xx.network/). These
instructions require a web browser, so you will most likely do this on a
separate machine from your Node. Note, you will need to copy the session
keys retrieved in [Set Session Keys](#Set_Session_Keys "wikilink") and
the Node's cMix ID, so it is recommended that you SSH into your Node or
copy the session key file and the Node's ID file to a flash drive.

### Add Account

Below, you will be adding the account that you have previously created
using the wallet generator tool. First, make sure the account has at
least enough funds to pay the fees for making transactions.

1.  Follow the instructions to [Add an Account to the xx
    Explorer](Add_an_Account_to_the_xx_Explorer "wikilink").
2.  Once the account is created, you should see it on the *my accounts*
    page.
    ![](@site/static/img/Explorer_-_My_accounts_page.png "Explorer_-_My_accounts_page.png")

### Get Session Keys and cMix ID

To set up a validator, you need two pieces of information from your Node
machine: the session key generated above and the cMix ID generated when
setting up cMix. There are several methods to copy these values to your
personal computer; however, the easiest way is to SSH into the Node.

1.  Open the terminal on your personal computer.
2.  From the terminal on your personal machine, connect to the Node
    machine.
3.  Print the session keys JSON file.
    The value associated with the field is the session key.
4.  Next, print the cMix ID to the console.
    The cMix ID needed is the .
5.  Either copy both values to a location on your computer or leave the
    console open so you can copy these values when setting up a
    validator.

### Set Up Validator

1.  In the navigation menu, go to *Network* and in the drop-down menu,
    click on *Staking*. Or navigate to
    <https://wallet.xx.network/#/staking>.
    ![](@site/static/img/Explorer_-_Staking_Nav.png "Explorer_-_Staking_Nav.png")
2.  The Staking Overview page will open.
    1.  Click on *Account actions* in the submenu.
    2.  Then click the *Validator* button ![](@site/static/img/Explorer_Validator_button.svg "|link=|alt=Validator button on the Account actions page.").

    ![](@site/static/img/Explorer_-_Account_Actions,_Add_Validator.png "Explorer_-_Account_Actions,_Add_Validator.png")
3.  The *setup validator* window will open.
    1.  For the *stash account*, select your account from the drop-down
        menu.
    2.  For the *controller account*, select the same account from the
        drop-down menu.
    3.  Enter a bond amount. It must be at least 1,000 xx.
    4.  Copy and paste the hex formatted cMix ID found in [Get Session
        Keys and cMix ID](#Get_Session_Keys_and_cMix_ID "wikilink").
    5.  Then, click the *Next* button
        ![\|link=](@site/static/img/Next_Button.svg "|link=").

    ![](@site/static/img/Explorer_-_Setup_Validator_1-2.png "Explorer_-_Setup_Validator_1-2.png")
4.  On the next page, you will enter the session key found above. You
    will also select the reward commission percentage.
    1.  Copy and paste the session key found in [Get Session Keys and
        cMix ID](#Get_Session_Keys_and_cMix_ID "wikilink")
    2.  Choose a percentage reward commission percentage (value between
        0 and 100). We recommend a value under 10 percent if you want
        users of the network to nominate your validator.
    3.  Select whether to allow new nominations or not. We highly
        recommend you always allow users of the network to nominate your
        validator.
    4.  Then, click on the *Bond & Validate* button
        ![\|link=](@site/static/img/Explorer_Bond_&_Validate_button.svg "|link=").

    ![](@site/static/img/Explorer_-_Setup_Validator_2-2.png "Explorer_-_Setup_Validator_2-2.png")
5.  The next page is for authorizing the transaction.
    1.  These are the fees that will be applied to the submission.
    2.  Double-check the wallet address to make sure it is correct.
    3.  Unlock the account with your password so the transaction can be
        signed.
    4.  By default, *Do not include tip for the block author* is
        selected. You can add a tip to raise the transaction priority.
    5.  This transaction's call hash.
    6.  Make sure the *Sign and Submit* toggle
        ![\|link=](@site/static/img/Explorer_Sign_and_Submit_toggle.svg "|link=") is
        selected.
    7.  Click on the *Sign and Submit* button
        ![\|link=](@site/static/img/Explorer_Sign_and_Submit_button.svg "|link=").

    ![](@site/static/img/Explorer_-_Authorize_Transaction.png "Explorer_-_Authorize_Transaction.png")
6.  You should see these notifications in the top right corner
    indicating the action was successful.
    ![](@site/static/img/Transaction_Action_Notification.png "Transaction_Action_Notification.png")

## Wait to Be Elected

1.  In the navigation submenu, click on the *Waiting* button or navigate
    to <https://wallet.xx.network/#/staking/waiting>.
    ![](@site/static/img/Explorer_-_Waiting_Submenu_Nav.png "Explorer_-_Waiting_Submenu_Nav.png")
2.  You should see your account in the waiting validators list.
    ![](@site/static/img/Waiting_Validators.png "Waiting_Validators.png")
3.  In the navigation submenu, click on the *Overview* button or
    navigate to <https://wallet.xx.network/#/staking>.
    ![](@site/static/img/Explorer_-_Overview_Submenu_Nav.png "Explorer_-_Overview_Submenu_Nav.png")
4.  In the top right corner is a timer showing the length of an era and
    the age of the current era.
    ![](@site/static/img/Era_Timer.png "Era_Timer.png")
5.  Once the era ends, your validator should be chosen and show up in
    the validator list.
    ![](@site/static/img/Explorer_-_List_of_Validators.png "Explorer_-_List_of_Validators.png")
6.  You can check the xx chain log file to see if your Node is synced.
    Your Node is synced if you see lines that say and as shown below

    Press to exit .
