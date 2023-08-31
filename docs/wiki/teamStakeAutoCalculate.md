# Team Stake Auto Calculate 

Team Stake Auto Calculate is a Team Multiplier option which calculates a roughly optimal amount of team stake to apply to a [MainNet Transition Program](https://xx.network/blog/mainnet-transition/) (MTP) validator each era. The calculation attempts to find the minimum amount of team stake required to elect a validator into the network while optimizing the returns for all nominators because team stake reduces network-wide returns.

This is done using the following formula:
```team stake = 1/3rd percentile median stake − self-stake```

Where the `1/3rd percentile median stake` is the stake of the validator with the 1/3<sup>rd</sup> least stake. If the team stake is less than zero, then no team stake is given. This assumes that the validator is also nominating their own validator with a nominator account and self-nomination is required for the validator to be elected into the active set.

## Edge Cases

This system has two faults. The team believes both of these edge cases should seldom impact a member of the MainNet Transition Program.

* It uses the current data to calculate the amount of TM you will receive instead of the incoming era. As a result, if the number of nominations greatly increases in a single era, it is possible to fall out of the active set. This would then be fixed in the following era and would be very unlikely to happen given the total stake all BetaNet nodes have.

* It is assumed Phragmen will place all stake on your validator if your validator needs it to stay in the active set. This assumption is generally valid but can be wrong in some edge cases where the validator's nominator nominates many other validators.

The team believes these are worthwhile trade-offs for most validators relative to constantly checking and modifying their team stake to ensure they stay in the active set.
