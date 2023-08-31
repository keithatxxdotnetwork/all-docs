"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[4817],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(o),u=n,p=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return o?a.createElement(p,i(i({ref:t},d),{},{components:o})):a.createElement(p,i({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<r;h++)i[h]=o[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2340:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=o(7462),n=(o(7294),o(3905));const r={},i=void 0,s={unversionedId:"wiki/nominateRight",id:"wiki/nominateRight",title:"nominateRight",description:"To choose the right validators in the xx network, you will first need to",source:"@site/docs/wiki/nominateRight.md",sourceDirName:"wiki",slug:"/wiki/nominateRight",permalink:"/all-docs/docs/wiki/nominateRight",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nominating Validators",permalink:"/all-docs/docs/wiki/nominate"},next:{title:"Proxxy",permalink:"/all-docs/docs/wiki/proxxy"}},l={},h=[{value:"Select some validators",id:"select-some-validators",level:2},{value:"Low stake nominators strategy",id:"low-stake-nominators-strategy",level:2},{value:"Richer nominators strategy",id:"richer-nominators-strategy",level:2},{value:"Validators strategy",id:"validators-strategy",level:2},{value:"Nominate and forget strategy",id:"nominate-and-forget-strategy",level:2},{value:"NEVER nominate bad validators",id:"never-nominate-bad-validators",level:2}],d={toc:h},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To choose the right validators in the xx network, you will first need to\nfollow ",(0,n.kt)("a",{parentName:"p",href:"https://xxnetwork.wiki/How_to_Nominate"},"How To Nominate")," wiki\narticle."),(0,n.kt)("p",null,"Once you know all the steps to nominate, you can follow this article."),(0,n.kt)("p",null,'This article can help you to save a lot of XX coins. Some people\nnominate "boot node" who not even run cmix and give almost no reward\nwith more than 1M xx coins staked. Boot nodes share less than 40xx\ninstead of about 250xx per era. Cumulative lost for these nominators\nsince November 2021 is more than 10k XX whatever their stake due to huge\nteam stake. And it\'s the same for bad validators who run always below\naverage every era you lost rewards and these validators hurt the\nnetwork.'),(0,n.kt)("h2",{id:"select-some-validators"},"Select some validators"),(0,n.kt)("p",null,'For select the right validators, you should first check the commission\npercentage which is an important parameter. This percentage is the price\nyou pay to the validator for each era based on the number of XX\nreceived. So sort from lowest to highest 2% (which is the minimum\npercentage allowed) to 18% maximum percentage allowed by the team to use\nthe team multiplier (red bar). The 20% and above are hidden by default\nwith "no 20%+ comm". You shouldn\'t take validators above 18% because\nthere are already many good validators to choose from this range.'),(0,n.kt)("p",null,"![]{@site/static/img/BadPercentageP.png)\nThis is an example of validators with 20%+ that you shouldn't nominate."),(0,n.kt)("p",null,"To help you choose after this first sort, try to check the nominators\ncolumn without the red icons on the left (oversubscribed means there are\ntoo many nominators due to the limit of 256 per validator / blocks\nnominations icon means that this validator refuses to be nominated / the\nslashed icon is for people who have more than one node or a\nconfiguration error or not enough time before switching to another\ngateway or cmix on another computer so check these validators carefully\nbefore choosing them)"),(0,n.kt)("p",null,"For the nominator column (in the middle of this graph): the first number\nis for the current nominators selected for this era and the second\nnumber is for all nominators that name this node.\n![]{@site/static/img/Nominator_columns.png)\nYou can easily filter out people who are above the \"avg staked\"; they\nalready have too many nominators, so they don't need you and it's not\nreally good for you."),(0,n.kt)("p",null,"Below I share four strategies: one for poorer nominators with low stakes\n(less than 50k), one for richer nominators (100k or more), one for a\nvalidator with a nominator stake, and the last one for nominate and\nforget."),(0,n.kt)("p",null,"After that, you have the most important step. NEVER appoint a validator\nthat performs poorly and can harm the entire network, because it is your\nresponsibility to eject these poorly performing validators from the\nnetwork!\n![]{@site/static/img/StatsIcon.png)"),(0,n.kt)("h2",{id:"low-stake-nominators-strategy"},"Low stake nominators strategy"),(0,n.kt)("p",null,'To get the best validators for you, try to catch some people in the\nwaiting list with the highest "own stake". This means lowering the total\nstake of the nominators so that you have fewer competitors on the side\nof the nominators with the lowest possible commission percentage to keep\nthe best daily reward. People in the waiting list is a good strategy\nbecause most of the time have a low number of nominators without enough\nstake to get elected. Another strategy is to take a validator with only\none great nominator at the "avg staked" or below because the threshold\ncan be even a little lower than average. Never nominate too many\nvalidators with this strategy but choose 1 or 2 running validators only\nand every good validators in the waiting list.'),(0,n.kt)("h2",{id:"richer-nominators-strategy"},"Richer nominators strategy"),(0,n.kt)("p",null,'Your best strategy is to take the lowest possible own stake with the\nlowest commission or try to add your nominator\'s stake + validator own\nstake to reach the "avg staked". Phragmen will eliminate all other\nnominators and split the rewards only between you and the validator. To\nfind out that, just look at the "avg staked" number in the Targets tab.\nThis strategy should be checked almost daily to see if your validator\nhas changed commission percentage and not have any problems, but forcing\nyour total stake on one or two validators with a low commission\npercentage will increase your daily rewards. For limited risk, choose a\nvalidator in the 9-18% range who probably won\'t move their commission\nvalue too much.'),(0,n.kt)("h2",{id:"validators-strategy"},"Validators strategy"),(0,n.kt)("p",null,'If you have a TM, set 18% and choose only your own validator, lowering\nyour TM value as much as possible. You need a little less "avg staked"\nthan what you can find at the top of the "Targets" tab.'),(0,n.kt)("p",null,'If you don\'t have a TM and enough coins, push the percentage as high as\npossible and select your own node until you reach a little less than\n"avg staked" and don\'t select any other nominators. If you are at "avg\nstaked" number on your validator with no other nominators than your\nnominator. You need to create a second wallet for create a second\nnominators and select the "low stake" or "richer" nominator strategy.'),(0,n.kt)("h2",{id:"nominate-and-forget-strategy"},"Nominate and forget strategy"),(0,n.kt)("p",null,"Nominate a maximum of 16 nodes, but check each validator (last step) and\nretain only those validators that have performed at or above average for\nmore than 30 eras and whose commission is between 9% and 18% or whose\ncommission percentage has not changed in the last 60 eras."),(0,n.kt)("h2",{id:"never-nominate-bad-validators"},"NEVER nominate bad validators"),(0,n.kt)("p",null,'This is the most important step. Your job is to remove bad validators\nfrom the network and replace them with good validators that do not cause\nproblems for the network. This action will allow you to earn more\nrewards each time. Before nominate any validators, click on the icon in\nthe "stats" column to check the rewards received at every eras and the\nvalidator is consistently performing at or above the average on the\nrewards graph at the bottom left of the page.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7847).Z,width:"679",height:"387"})," An example of an excellent validator with consistent results over time. On\nthis graph, the green line represents the actual result of the validator\nwhich is really perfect and never touches the average line (red). Never\nselect validators that are always below this average line and watch out\nfor validators that fall below the average (red) line too often on this\ngraph but is grey on the page."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(7629).Z,width:"685",height:"387"})," This\nis an example of a bad validator that is consistently below average and\nthat no one should nominate. This validator should be replaced with a\nbetter validator that doesn't hurt the whole network every era and also\ngives you more rewards."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(4403).Z,width:"2552",height:"1449"}),'\nThis is an example of a good validator that performs above average when\nelected but has frequent dropouts from elected list giving reward graph\nfrequent drops to zero marked with green squares. Notice that all reward\ndrops to zero marked green corresponds with "elected stake" graph also\ndropping to zero, which means validator just did not get elected for\nthat specific era. The only validator performance related drop is marked\nwith red rectangle. This validator is a good to nominate.'),(0,n.kt)("p",null,"The second thing to look at is the commission graph on the right. Some\nvalidators attract nominators by setting a low percentage, but after\ncertain periods of time that percentage increases and can even exceed\n80% for some validators, so be very careful with these validators and\nit's best to not select them. The best validators are stable and the\nline on the right is flat at 18% or less or move between 0% (not\nelected) and back to their old flat percentage."),(0,n.kt)("p",null,"![]{@site/static/img/ValidatorBadCommission.png)\nvalidator who isn't performing well due to regularly below average\nperformance and double commission for no reason. Nominators should not\nnominate him and choose another validator with less percentage and above\naverage results."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(4205).Z,width:"2554",height:"1445"}),"Another\nexample of validator changing commission rate frequently from 18% to\n100% in order to deceive nominators. Nominators should look for other\nreliable validator."),(0,n.kt)("p",null,"So to take this last step:"),(0,n.kt)("p",null,"-"," look at these graphs all the time before nominate someone that's very\nimportant and take only the validator that stays equal or above the\naverage rewards with minimal points below the average as possible (if\nthe reward point is at 0, this validator is not elected and it's not\nimportant. You can see that the commission graph stays at 0% during\nthese times, but at 10% commission and low reward, then validator is\nperforming poorly in that era)."),(0,n.kt)("p",null,"-"," see that the commission is as flat as possible"))}m.isMDXComponent=!0},7629:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/BadValidator-f6233d5dcb29973d75a678ef40f38d67.png"},4205:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Flip-flopper-99a22d2dc2fc0b5a24f80520631f7252.png"},7847:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/GoodAverageValidator-e3958452251c926ff45ec83db68000ce.png"},4403:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Good_validator_with_drops_from_elected_list-40cfa753278b671ffa7b915d84b2a3ee.png"}}]);