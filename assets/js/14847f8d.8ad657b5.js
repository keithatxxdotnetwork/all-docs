"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[3088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"wiki/regionalMultipliers",id:"wiki/regionalMultipliers",title:"regionalMultipliers",description:"Bins World Map",source:"@site/docs/wiki/regionalMultipliers.md",sourceDirName:"wiki",slug:"/wiki/regionalMultipliers",permalink:"/all-docs/docs/wiki/regionalMultipliers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"receiveCoins",permalink:"/all-docs/docs/wiki/receiveCoins"},next:{title:"runtimeUpdate",permalink:"/all-docs/docs/wiki/runtimeUpdate"}},s={},u=[{value:"Current Multipliers",id:"current-multipliers",level:2},{value:"Editing Multipliers",id:"editing-multipliers",level:3},{value:"Multipliers Math",id:"multipliers-math",level:2},{value:"Error",id:"error",level:3},{value:"Running the Multiplier Calculator",id:"running-the-multiplier-calculator",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bins World Map",src:n(306).Z,width:"1030",height:"612"})),(0,r.kt)("p",null,'The goal of regional Multipliers is to offset the natural geographic\ncentralizing force of cMix. In general, the system compensates nodes\nbased on how many rounds they run. However, a significant impediment to\nthis speed is latency caused by how far away nodes are. This causes\nnodes farther from the "center of mass" of the network to run slower and\nbe at a disadvantage. This is a problem because an underlying security\nrequirement for cMix is the geographic and jurisdictional distribution\nof nodes. The geo multiplier is designed to offset these latency factors\nto make operating in these regions competitive.'),(0,r.kt)("p",null,"This page will describe a mechanism to evaluate Geo Multipliers using\nhistorical data from the network. This is an imperfect system\u2014regions\nwithout sufficient nodes can produce results that are properly not\nreally descriptive of their general performance, and regions with no\nnodes at all will have to have their values guessed at."),(0,r.kt)("p",null,"But, an even bigger challenge is that the correct multiplier is a\nfunction of how many nodes a region has. When designing the network, we\nmade it so that every node in a region experienced the highest\nmultiplier of any node in the team. This is to ensure there never is a\ncase where node operators are incentivized not to participate in a\nround. As a result, the correct multiplier for a given region is a\nfunction of the number of nodes in that region."),(0,r.kt)("p",null,"This means that multipliers will need to be updated on a regular basis\nas the network grows and shrinks. As seen below, the math for\nmultipliers is relatively regular, so it may be possible to integrate it\non-chain at some point and automatically calculate it every era."),(0,r.kt)("p",null,"This solution also requires adjusting how multipliers are handled.\nInitially, all nodes in a team inherited the same multipliers. This\nresulted in some very odd multipliers, so we are adjusting the algorithm\nto give all nodes the average of their own multiplier and the highest in\nthe team."),(0,r.kt)("p",null,"This page contains scripts and data access to allow anyone to evaluate\nmultipliers at their leisure."),(0,r.kt)("h2",{id:"current-multipliers"},"Current Multipliers"),(0,r.kt)("p",null,"The current multipliers are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Bin ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Bin"),(0,r.kt)("th",{parentName:"tr",align:null},"Multiplier"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"NorthAmerica"),(0,r.kt)("td",{parentName:"tr",align:null},"0.989")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"SouthAndCentralAmerica"),(0,r.kt)("td",{parentName:"tr",align:null},"1.223")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"WesternEurope"),(0,r.kt)("td",{parentName:"tr",align:null},"0.927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"CentralEurope"),(0,r.kt)("td",{parentName:"tr",align:null},"0.885")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"EasternEurope"),(0,r.kt)("td",{parentName:"tr",align:null},"0.934")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"MiddleEast"),(0,r.kt)("td",{parentName:"tr",align:null},"1.058")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"NorthernAfrica"),(0,r.kt)("td",{parentName:"tr",align:null},"1.058")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"SouthernAfrica"),(0,r.kt)("td",{parentName:"tr",align:null},"1.264")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Russia"),(0,r.kt)("td",{parentName:"tr",align:null},"1.033")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"EasternAsia"),(0,r.kt)("td",{parentName:"tr",align:null},"1.281")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"WesternAsia"),(0,r.kt)("td",{parentName:"tr",align:null},"1.169")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Oceania"),(0,r.kt)("td",{parentName:"tr",align:null},"1.368")))),(0,r.kt)("p",null,"They were last set on 6 April 2023."),(0,r.kt)("h3",{id:"editing-multipliers"},"Editing Multipliers"),(0,r.kt)("p",null,"Geo Multipliers can be modified by governance via a general referendum\nor via 2/3rds of the council setting on-chain cMix values. You can read\nmore about this on the ",(0,r.kt)("a",{parentName:"p",href:"Governance",title:"wikilink"},"Governance")," page."),(0,r.kt)("h2",{id:"multipliers-math"},"Multipliers Math"),(0,r.kt)("p",null,"When calculating the multipliers, we started with the raw numbers, how\nmany points each node got in every era, excluding the multiplier. We\nwant everything to be fair, and we want each node runner to be\nincentivized to team with every other node. So, our goal is to ensure\nfull participation gets you full \u201cpoints\u201d in the network."),(0,r.kt)("p",null,"Before we continue, some definitions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u2013 The multiplier for all nodes in Bin\xa0.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u2013 The adjusted point value for Bin\xa0",(0,r.kt)("em",{parentName:"p"},"i"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u2013 The probability that at least one node from bin\xa0\xa0is included in a\nteam, and a node from any bin \xa0is not included."))),(0,r.kt)("p",null,"The calculation is seeded by real network data. Over the last week, we\ngot the average points earned for cMix operations in an era per node.\nThis was then \u201cnormalized\u201d to produce the adjusted point value for the\nbin, known as ."),(0,r.kt)("p",null,"The goal of this system is to create Multipliers such that future s will\nall be ."),(0,r.kt)("p",null,"Bins are ordered minimum to maximum by . When calculating points, every\nnode\u2019s multiplier is the average of their multiplier and the highest in\nthe team (also the lowest ).\xa0"),(0,r.kt)("p",null,"Because the region with the lowest average, Bin , overwrites all others,\nBin \u2019s multiplier can be calculated as:"),(0,r.kt)("p",null,"1 =\n(M0 + M0) A0\n/\n2\n= M0 A0"),(0,r.kt)("p",null,"Our goal is to ensure that the multipliers and adjustments for all nodes\nin all teams are also the maximum of on average. Since is the multiplier\nfor the ",(0,r.kt)("sup",null,"th")," ordered bin and is the normalized average for the"),(0,r.kt)("sup",null,"th")," ordered bin. This can be easily solved:",(0,r.kt)("p",null,"M0 =\n1\n/\nA0"),(0,r.kt)("p",null,"The next multiplier for Bin can be calculated as the probability a node\nfrom Bin is selected with a node from Bin (which uses the bin\nmultiplier) and the probability that a node from Bin is not teamed with\na node from Bin (which uses the team multiplier):"),(0,r.kt)("p",null,"1 =\n(M0 + M1)\n/\n2\nA1 P0 +\n(M1 + M1)\n/\n2\nA1(1 \u2212 P0)"),(0,r.kt)("p",null,"We can do the same calculation for Bin 2:"),(0,r.kt)("p",null,"1 =\n(M0 + M2)\n/\n2\nA2 P0 +\n(M1 + M2)\n/\n2\nA2 P1 +\n(M2 + M2)\n/\n2\nA2 (1 \u2212 P0 \u2212 P1)"),(0,r.kt)("p",null,"2 = M0 A2 P0 + M2 A2 P0 + M1 A2 P1 + M2 A2 P1 + 2M2 A2 (1 \u2212 P0 \u2212 P1)"),(0,r.kt)("p",null,"2\n/\nA2\n= M0 P0 + M1 P1 + M2 (P0 + P1 + 2(1 \u2212 P0 \u2212 P1))"),(0,r.kt)("p",null,"2\n/\nA2\n\u2212 M0 P0 \u2212 M1 P1 = M2 (P0 + P1 + 2 \u2212 2P0 \u2212 2P1)"),(0,r.kt)("p",null,"2\n/\nA2\n\u2212 (M0 P0 \u2212 M1 P1)\n/\n2 \u2212 (P0 + P1)\n= M2 P0"),(0,r.kt)("p",null,"We can generalize this using summations for any team multiplier Bin n:"),(0,r.kt)("p",null,"2\n/\nAn\n\u2212\n\u2211"),(0,r.kt)("h1",{id:""},"\ufffd"),(0,r.kt)("p",null,"0\n\ufffd\n\u2212\n1\n{\\displaystyle \\sum _{i=0}^{n-1}} Mi Pi\n/\n2 \u2212\n\u2211"),(0,r.kt)("h1",{id:"-1"},"\ufffd"),(0,r.kt)("p",null,"0\n\ufffd\n\u2212\n1\n{\\displaystyle \\sum _{i=0}^{n-1}} Pi\n= Mn"),(0,r.kt)("p",null,"In addition to the recursive definition, the probabilities are tricky to\nget right. Each selection of a team of 5 nodes consists of a random\ndraw, without replacement, from the total of nodes in the network. This\nsort of selection is described by a hypergeometric distribution. Most\nfrequently, this distribution is applied to a simple case of counting\nobjects (nodes in our case) with a binary feature (for example, in the\nBFT consensus realm: byzantine/honest nodes). However, in cMix, we have\nsplit the nodes into 12 bins, which turns the problem into a\nmultidimensional one, meaning that we need to calculate a multivariate\nhypergeometric distribution. Luckily, due to the nature of how\nmultipliers work, when we select a node from say, Bin , we don\u2019t care if\nany other node in the team is of a bin with a higher multiplier. This\nmeans that all the probabilities that we need to compute are similar: we\nwant to have a team with at least one node from bin , without any nodes\nfrom all bins . We include a spreadsheet in our resources below which\nshow how to do this in detail."),(0,r.kt)("h3",{id:"error"},"Error"),(0,r.kt)("p",null,"This solution has some errors due to the fact that discrepancies in\nvalues are largely caused by variations in how long rounds take, which\nimpacts selection probabilities. This solution, as described by our\nsimulation, is correct to within 3%. Future work can deconstruct the\ncauses of point variations to model them better and reduce this error."),(0,r.kt)("h2",{id:"running-the-multiplier-calculator"},"Running the Multiplier Calculator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First download the\n",(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/multiplier-calculator/-/raw/master/multiplier_calculator.py"},"multiplier_calculator.py"),"\nPython script from the ",(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/multiplier-calculator"},"multiplier-calculator\nrepository"),"."),(0,r.kt)("li",{parentName:"ol"},"Next, download the wallet country list\n",(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/multiplier-calculator/-/blob/master/wcm_2col.csv"},"wcm_2col.csv"),"\nfrom the same repository.")),(0,r.kt)("li",null,(0,r.kt)("p",null,"Run the script using the command below. Make sure that point to the\ncorrect files.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1d2HcuCVorKDkUppBam-dk-_PJ8ukPp8ja18DyE_VYJQ/edit#gid=660673801"},"MainNet Geographic\nBins"),"\nspreadsheet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/xx_network/primitives/-/blob/dev/region/ordering.go"},"Scheduling\nAlgorithm"),"\ngo source code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1d2HcuCVorKDkUppBam-dk-_PJ8ukPp8ja18DyE_VYJQ/edit?usp=sharing"},"Multipliers"),"\ncalculation spreadsheet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/-/snippets/3"},"Bin Simulation Calculations"),"\nPython script"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://xx.network/blog/regionalmultipliers/"},"Testing Regional Multipliers for\nMainNet")," blog post"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://xxnetwork.wiki/Large_Democracy_Proposal"},"Large Democracy\nProposal"),"\nprogrammatically generate a preimage for Regional Multiplier\nproposals")))}c.isMDXComponent=!0},306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Bins_WorldMap-1030x612-9f5ead290cfc22376ffc3ba0cbc9ec53.png"}}]);