# Geographic Bins

![](@site/static/img/Bins_WorldMap.png)

Sourced from Blog Posts on 14 Oct 2021[^1] and 1 Nov 2021[^2]

The xx network has divided nodes into 11 “geographic bins”:

-   Oceania
-   Eastern Asia
-   Southern Africa
-   South and Central America
-   Western Asia
-   North America
-   Central Europe
-   Russia
-   Eastern Europe
-   Middle East
-   Western Europe

As a protocol, cMix gets faster the lower the latency between the nodes
in a team. In other words, as nodes get closer, they complete cMix
rounds faster. And as rounds are completed faster, the nodes in them
earn points faster, resulting in more xx earned for operation (You can
read more about the point system in the Era Rewards - Era Points section
of the [xx tokenomics paper](xx_tokenomics_paper "wikilink")).

This creates an economic incentive to centralize. To combat this, each
bin will be assigned a "regional multiplier" which will multiply the
point value of the round for all nodes in it. They are expected to be
small, on the order of 1.1 to 1.4, but will ensure that those higher
latency nodes who are so valuable for decentralization, are incentivized
to remain in the network and that nominators are incentivized to stake
them.

## Current Regional Multipliers

| Bin ID | Bin                    | Multiplier |
|--------|------------------------|------------|
| 0      | NorthAmerica           | 0.992      |
| 1      | SouthAndCentralAmerica | 1.273      |
| 2      | WesternEurope          | 0.845      |
| 3      | CentralEurope          | 0.875      |
| 4      | EasternEurope          | 0.980      |
| 5      | MiddleEast             | 1.100      |
| 6      | NorthernAfrica         | 1.100      |
| 7      | SouthernAfrica         | 1.292      |
| 8      | Russia                 | 0.979      |
| 9      | EasternAsia            | 1.284      |
| 10     | WesternAsia            | 1.146      |
| 11     | Oceania                | 1.337      |

They were last set on 07/14/2022.

## How Geographic Multipliers are Calculated

TODO, pull in from [^2]

[^1]: B. Wenger ["Geographic Bins in MainNet"](https://xx.network/blog/MainNetGeoBins)

[^2]: B. Wenger, B. Cardoso, R. Carback ["Testing Regional Multipliers for MainNet"](https://xx.network/blog/regionalMultipliers)
