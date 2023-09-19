"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[6966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Team Stake Auto Calculate",l={unversionedId:"node/references/teamStakeAutoCalculate",id:"node/references/teamStakeAutoCalculate",title:"Team Stake Auto Calculate",description:"Team Stake Auto Calculate is a Team Multiplier option which calculates a roughly optimal amount of team stake to apply to a MainNet Transition Program (MTP) validator each era. The calculation attempts to find the minimum amount of team stake required to elect a validator into the network while optimizing the returns for all nominators because team stake reduces network-wide returns.",source:"@site/docs/node/references/teamStakeAutoCalculate.md",sourceDirName:"node/references",slug:"/node/references/teamStakeAutoCalculate",permalink:"/all-docs/docs/node/references/teamStakeAutoCalculate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regional Multipliers for Mainnet",permalink:"/all-docs/docs/node/references/regionalMultipliers"},next:{title:"xx Tools",permalink:"/all-docs/docs/category/xx-tools"}},s={},c=[{value:"Edge Cases",id:"edge-cases",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"team-stake-auto-calculate"},"Team Stake Auto Calculate"),(0,r.kt)("p",null,"Team Stake Auto Calculate is a Team Multiplier option which calculates a roughly optimal amount of team stake to apply to a ",(0,r.kt)("a",{parentName:"p",href:"https://xx.network/blog/mainnet-transition/"},"MainNet Transition Program")," (MTP) validator each era. The calculation attempts to find the minimum amount of team stake required to elect a validator into the network while optimizing the returns for all nominators because team stake reduces network-wide returns."),(0,r.kt)("p",null,"This is done using the following formula:\n",(0,r.kt)("inlineCode",{parentName:"p"},"team stake = 1/3rd percentile median stake \u2212 self-stake")),(0,r.kt)("p",null,"Where the ",(0,r.kt)("inlineCode",{parentName:"p"},"1/3rd percentile median stake")," is the stake of the validator with the 1/3",(0,r.kt)("sup",null,"rd")," least stake. If the team stake is less than zero, then no team stake is given. This assumes that the validator is also nominating their own validator with a nominator account and self-nomination is required for the validator to be elected into the active set."),(0,r.kt)("h2",{id:"edge-cases"},"Edge Cases"),(0,r.kt)("p",null,"This system has two faults. The team believes both of these edge cases should seldom impact a member of the MainNet Transition Program."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It uses the current data to calculate the amount of TM you will receive instead of the incoming era. As a result, if the number of nominations greatly increases in a single era, it is possible to fall out of the active set. This would then be fixed in the following era and would be very unlikely to happen given the total stake all BetaNet nodes have.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It is assumed Phragmen will place all stake on your validator if your validator needs it to stay in the active set. This assumption is generally valid but can be wrong in some edge cases where the validator's nominator nominates many other validators."))),(0,r.kt)("p",null,"The team believes these are worthwhile trade-offs for most validators relative to constantly checking and modifying their team stake to ensure they stay in the active set."))}p.isMDXComponent=!0}}]);