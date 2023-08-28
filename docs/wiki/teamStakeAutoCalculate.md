Team Stake Auto Calculate is a mode where the team will calculate a roughly optimal amount of team stake to nominate your validator for every era. The calculation will attempt to find the minimum amount of team stake required to elect a validator into the network, allowing us to optimize the returns for all nominators because Team Stake reduces network-wide returns.

The way we do this is using the following formulas:

{{center|
{{math|1=team stake = (one third percentile median stake) − (your stake)}}


Where the “one third percentile median stake” is the stake of the validator with the 1/3rd least stake.}}

If the team stake is less than zero, then no team stake is given.

This assumes that you are nominating your own validator, and self-nomination is required for you to get into the active set.

Program members will still have the option to select an explicit amount of team stake, up to the maximum.

'''Edge Cases'''

This system has two faults:

#It uses the current data to calculate the amount of TM you will receive instead of the incoming era. As a result, if the number of nominations greatly increases in a single era, it is possible to fall out of the active set. This would then be fixed in the following era and would be very unlikely to happen given the total stake all BetaNet nodes have.
#This assumes Phragmen will place all stake on your validator if your validator needs it to stay in the active set. This assumption is generally valid but can be wrong in some edge cases where you nominate many validator, and not all can make it into the active set.

The team believes they are worthwhile trade-offs for most validators relative to constantly checking and modifying your team stake to ensure you stay in the active set. The team believes both of these edge cases should seldom impact a member of the MainNet Transition Program.
