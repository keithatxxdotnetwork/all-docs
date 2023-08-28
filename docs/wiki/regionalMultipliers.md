![Bins World Map](@site/static/img/Bins_WorldMap-1030x612.png)

The goal of regional Multipliers is to offset the natural geographic
centralizing force of cMix. In general, the system compensates nodes
based on how many rounds they run. However, a significant impediment to
this speed is latency caused by how far away nodes are. This causes
nodes farther from the "center of mass" of the network to run slower and
be at a disadvantage. This is a problem because an underlying security
requirement for cMix is the geographic and jurisdictional distribution
of nodes. The geo multiplier is designed to offset these latency factors
to make operating in these regions competitive.

This page will describe a mechanism to evaluate Geo Multipliers using
historical data from the network. This is an imperfect system—regions
without sufficient nodes can produce results that are properly not
really descriptive of their general performance, and regions with no
nodes at all will have to have their values guessed at.

But, an even bigger challenge is that the correct multiplier is a
function of how many nodes a region has. When designing the network, we
made it so that every node in a region experienced the highest
multiplier of any node in the team. This is to ensure there never is a
case where node operators are incentivized not to participate in a
round. As a result, the correct multiplier for a given region is a
function of the number of nodes in that region.

This means that multipliers will need to be updated on a regular basis
as the network grows and shrinks. As seen below, the math for
multipliers is relatively regular, so it may be possible to integrate it
on-chain at some point and automatically calculate it every era.

This solution also requires adjusting how multipliers are handled.
Initially, all nodes in a team inherited the same multipliers. This
resulted in some very odd multipliers, so we are adjusting the algorithm
to give all nodes the average of their own multiplier and the highest in
the team.

This page contains scripts and data access to allow anyone to evaluate
multipliers at their leisure.

## Current Multipliers

The current multipliers are as follows:

| Bin ID | Bin                    | Multiplier |
|--------|------------------------|------------|
| 0      | NorthAmerica           | 0.989      |
| 1      | SouthAndCentralAmerica | 1.223      |
| 2      | WesternEurope          | 0.927      |
| 3      | CentralEurope          | 0.885      |
| 4      | EasternEurope          | 0.934      |
| 5      | MiddleEast             | 1.058      |
| 6      | NorthernAfrica         | 1.058      |
| 7      | SouthernAfrica         | 1.264      |
| 8      | Russia                 | 1.033      |
| 9      | EasternAsia            | 1.281      |
| 10     | WesternAsia            | 1.169      |
| 11     | Oceania                | 1.368      |

They were last set on 6 April 2023.

### Editing Multipliers

Geo Multipliers can be modified by governance via a general referendum
or via 2/3rds of the council setting on-chain cMix values. You can read
more about this on the [Governance](Governance "wikilink") page.

## Multipliers Math

When calculating the multipliers, we started with the raw numbers, how
many points each node got in every era, excluding the multiplier. We
want everything to be fair, and we want each node runner to be
incentivized to team with every other node. So, our goal is to ensure
full participation gets you full “points” in the network.

Before we continue, some definitions:

1.  – The multiplier for all nodes in Bin .

2.  – The adjusted point value for Bin *i*.

3.  – The probability that at least one node from bin  is included in a
    team, and a node from any bin  is not included.

The calculation is seeded by real network data. Over the last week, we
got the average points earned for cMix operations in an era per node.
This was then “normalized” to produce the adjusted point value for the
bin, known as .

The goal of this system is to create Multipliers such that future s will
all be .

Bins are ordered minimum to maximum by . When calculating points, every
node’s multiplier is the average of their multiplier and the highest in
the team (also the lowest ). 

Because the region with the lowest average, Bin , overwrites all others,
Bin ’s multiplier can be calculated as:

1 = 
(M0 + M0) A0
/
2
 = M0 A0

Our goal is to ensure that the multipliers and adjustments for all nodes
in all teams are also the maximum of on average. Since is the multiplier
for the <sup>th</sup> ordered bin and is the normalized average for the
<sup>th</sup> ordered bin. This can be easily solved:

M0 = 
1
/
A0

The next multiplier for Bin can be calculated as the probability a node
from Bin is selected with a node from Bin (which uses the bin
multiplier) and the probability that a node from Bin is not teamed with
a node from Bin (which uses the team multiplier):

1 = 
(M0 + M1)
/
2
 A1 P0 + 
(M1 + M1)
/
2
 A1(1 − P0)

We can do the same calculation for Bin 2:

1 = 
(M0 + M2)
/
2
 A2 P0 + 
(M1 + M2)
/
2
 A2 P1 + 
(M2 + M2)
/
2
 A2 (1 − P0 − P1)

2 = M0 A2 P0 + M2 A2 P0 + M1 A2 P1 + M2 A2 P1 + 2M2 A2 (1 − P0 − P1)

2
/
A2
 = M0 P0 + M1 P1 + M2 (P0 + P1 + 2(1 − P0 − P1))

2
/
A2
 − M0 P0 − M1 P1 = M2 (P0 + P1 + 2 − 2P0 − 2P1)

2
/
A2
 − (M0 P0 − M1 P1)
/
2 − (P0 + P1)
 = M2 P0

We can generalize this using summations for any team multiplier Bin n:

2
/
An
 − 
∑
�
=
0
�
−
1
{\displaystyle \sum _{i=0}^{n-1}} Mi Pi
/
2 − 
∑
�
=
0
�
−
1
{\displaystyle \sum _{i=0}^{n-1}} Pi
 = Mn

In addition to the recursive definition, the probabilities are tricky to
get right. Each selection of a team of 5 nodes consists of a random
draw, without replacement, from the total of nodes in the network. This
sort of selection is described by a hypergeometric distribution. Most
frequently, this distribution is applied to a simple case of counting
objects (nodes in our case) with a binary feature (for example, in the
BFT consensus realm: byzantine/honest nodes). However, in cMix, we have
split the nodes into 12 bins, which turns the problem into a
multidimensional one, meaning that we need to calculate a multivariate
hypergeometric distribution. Luckily, due to the nature of how
multipliers work, when we select a node from say, Bin , we don’t care if
any other node in the team is of a bin with a higher multiplier. This
means that all the probabilities that we need to compute are similar: we
want to have a team with at least one node from bin , without any nodes
from all bins . We include a spreadsheet in our resources below which
show how to do this in detail.

### Error

This solution has some errors due to the fact that discrepancies in
values are largely caused by variations in how long rounds take, which
impacts selection probabilities. This solution, as described by our
simulation, is correct to within 3%. Future work can deconstruct the
causes of point variations to model them better and reduce this error.

## Running the Multiplier Calculator

1.  First download the
    [multiplier_calculator.py](https://git.xx.network/elixxir/multiplier-calculator/-/raw/master/multiplier_calculator.py)
    Python script from the [multiplier-calculator
    repository](https://git.xx.network/elixxir/multiplier-calculator).
2.  Next, download the wallet country list
    [wcm_2col.csv](https://git.xx.network/elixxir/multiplier-calculator/-/blob/master/wcm_2col.csv)
    from the same repository.

<li>

Run the script using the command below. Make sure that point to the
correct files.

</li>

## Resources

-   [MainNet Geographic
    Bins](https://docs.google.com/spreadsheets/d/1d2HcuCVorKDkUppBam-dk-_PJ8ukPp8ja18DyE_VYJQ/edit#gid=660673801)
    spreadsheet
-   [Scheduling
    Algorithm](https://git.xx.network/xx_network/primitives/-/blob/dev/region/ordering.go)
    go source code
-   [Multipliers](https://docs.google.com/spreadsheets/d/1d2HcuCVorKDkUppBam-dk-_PJ8ukPp8ja18DyE_VYJQ/edit?usp=sharing)
    calculation spreadsheet
-   [Bin Simulation Calculations](https://git.xx.network/-/snippets/3)
    Python script
-   [Testing Regional Multipliers for
    MainNet](https://xx.network/blog/regionalmultipliers/) blog post
-   [Large Democracy
    Proposal](https://xxnetwork.wiki/Large_Democracy_Proposal)
    programmatically generate a preimage for Regional Multiplier
    proposals
