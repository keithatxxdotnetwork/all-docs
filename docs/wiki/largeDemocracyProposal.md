This wiki page describes how to submit a Democracy Proposal for a pallet
call that expects a large amount of data, which is very cumbersome to do
via the Wallet directly.

As an example, this page describes a proposal that changes the cMix
geographic multipliers to be all 1.

## Generate the preimage

The preimage of the proposal can be generated programatically using for
example python or js.

An example script for setting all geographic multipliers to 1 is
available here
<https://github.com/xx-labs/scripts-py/blob/main/set_cmix_variables.py>

Running this script when connected to a MainNet node will result in the
following output The large hex string is the encoded
democracy.notePreimage call with a nested xxCmix.setNextCmixVariables
call containing the new cmix variables as argument.

## Submit the preimage

Now that the preimage call is created, it can be submitted to the
network in the Wallet.

Steps:

1.  Go to the [wallet](https://wallet.xx.network/#/explorer)
2.  Go to the Developer/Extrinsics tab (only shows up if an account is
    added)![](@site/static/img/Screen_Shot_2022-05-17_at_9.44.48_AM.png)
3.  Select the Decode
    tab![](@site/static/img/Screen_Shot_2022-05-17_at_9.44.56_AM.png)
4.  Paste the hex string from the previous step in the hex-encoded call
    field![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.09_AM.png
5.  Submit the transaction

## Create the Democracy Proposal

Now that the preimage is on-chain, the Democracy proposal can be created
using the Wallet.

Steps:

1.  After submitting the transaction in the previous step, go back to
    the Network/Explorer tab
2.  Find the democracy.PreimageNoted event and click the arrow icon to
    expand
    it![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.23_AM.png)
3.  Click the clipboard icon to copy the preimage hash (the actual value
    might be different than shown in the
    image![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.28_AM.png)
4.  Go to the Democracy tab and click the Submit proposal
    button![](@site/static/img/Screen_Shot_2022-05-17_at_1.08.30_PM.png)
5.  Paste the preimage hash and submit the transaction

<figure>
![](@site/static/img/Screen_Shot_2022-05-17_at_9.45.42_AM.png)
</figure>

## Verify a Democracy Proposal

In the Democracy page in the Wallet, the arrow icon can be used to
expand an existing proposal in order to see the arguments to the
specified call.
![](@site/static/img/Screen_Shot_2022-05-17_at_1.10.51_PM.png)
However, in the case of this example, the call argument is large, which
makes it very hard to verify visually.
![](@site/static/img/Screen_Shot_2022-05-17_at_1.10.59_PM.png)

This way, it's better to programatically verify the proposal, and what
it actually changes.

An example script for verifying the cmix variables proposal is available
here
<https://github.com/xx-labs/scripts-py/blob/main/check_cmix_variables_proposal.py>

Running this script when connected to a MainNet node and configured with
the preimage hash that is available on-chain will result in the
following output
