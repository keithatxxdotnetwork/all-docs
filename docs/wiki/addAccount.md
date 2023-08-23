## Adding a Basic Account

To add your account to the xx wallet, follow the instructions below.

1.  In the navigation menu, go to *Accounts* and in the drop-down menu,
    click on *Accounts*. Or navigate to
    <https://wallet.xx.network/#/accounts>.
    ![](@site/static/img/Explorer_-_Top_Menu_Accounts_-_Accounts.png "Explorer_-_Top_Menu_Accounts_-_Accounts.png")
2.  On the right side of the *My accounts* page, click the *Add account*
    button ![](@site/static/img/Explorer_Add_account_button.svg).
    ![](@site/static/img/Xx_network_Explorer-_Account_Page.png)
3.  The first page of the *add an account via seed* window will show up.
    1.  Enter the *standard phrase* (also known as the *non-quantum
        mnemonic phrase*) generated with the [wallet
        generator](https://xx.network/mainnet-wallet-gen).
    2.  If you have not yet done so, **save your wallet mnemonic phrase
        in a safe and secure location**. Then check the *I have saved my
        mnemonic seed safely* checkbox.
    3.  Click the *Next* button ![](@site/static/img/Next_Button.svg).

    ![](@site/static/img/Add_an_Account_Via_Seed.png "Add_an_Account_Via_Seed.png")
4.  Next, you will enter the account details.
    1.  Create the name for your account.
    2.  Create a strong and secure password.
    3.  Click the *Next* button ![](@site/static/img/Next_Button.svg).

    ![](@site/static/img/Add_an_Account_Via_Seed_-_Account_details.png "Add_an_Account_Via_Seed_-_Account_details.png")
5.  On the next page, you will be provided a file with your account
    information. Click the *Save* button
    ![](@site/static/img/Explorer_Save_button.svg) to download this file.
    ![](@site/static/img/Add_an_Account_Via_Seed_-_Save.png "Add_an_Account_Via_Seed_-_Save.png")

## Derivation Paths

Within the xx network wallet, it is possible to create a child account
using a *derivation path*. A derivation path can be any text used to
mutate the account's seed (generally a mnemonic) to create a separate
wallet. Note that both the parent account and its seed must be known to
recover the child account.

### Hard and Soft Derivation

When creating a derivation path, the path generally starts with either a
or a , the former signifying a *soft derivation* and the latter a *hard
derivation*.

With a Hard Derivation, it is not possible from the account information
to link the child account to the parent account (excluding metadata
analysis). At the same time, it is possible to connect the two with a
soft derivation.

For example, a hard derivation could look like while a soft derivation
would look like .

### Multi-Derived accounts

It is possible to derive accounts from derived accounts by chaining
derivation paths. For example, in , the hard derived wallet banana has a
soft derived wallet broccoli.

### Deriving a wallet

1.  In the navigation menu, go to *Accounts* and in the drop-down menu,
    click on *Accounts*. Or navigate to
    <https://wallet.xx.network/#/accounts>.
    ![](@site/static/img/Explorer_-_Top_Menu_Accounts_-_Accounts.png "Explorer_-_Top_Menu_Accounts_-_Accounts.png")
2.  Find the account you would like to derive from and click on the
    three dot menu to the right and select *Derive account via
    derivation path*.
    ![](@site/static/img/Explorer_-_My_accounts_three_dot_menu_derive_account_via_derivation_path.png "Explorer_-_My_accounts_three_dot_menu_derive_account_via_derivation_path.png")
3.  A window will appear asking to unlock your account. Enter your
    password and press the *Unlock* button.
    ![](@site/static/img/Explorer_-_Unlock_account_to_derive_account_from_pair.png "Explorer_-_Unlock_account_to_derive_account_from_pair.png")
4.  On the next page, you can enter your derivation path and create the
    derived account.
    1.  Enter your derivation path. You must supply a path. Precede hard
        keys with and soft keys with . You can optional include a
        password for this account using .
          
    2.  Select a name to appear in the wallet.
    3.  Select a password to access this account in the wallet.
    4.  Press the *Next* button to continue.

    ![](@site/static/img/Explorer_-_Derive_Account_from_Pair.png "Explorer_-_Derive_Account_from_Pair.png")
5.  On the next page, click the *Save* button.
    ![](@site/static/img/Explorer_-_Save_derived_account.png "Explorer_-_Save_derived_account.png")

<!-- -->
