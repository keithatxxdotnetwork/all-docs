"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[7048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},i="Geographic Bins",o={unversionedId:"node/references/geoBins",id:"node/references/geoBins",title:"Geographic Bins",description:"Sourced from Blog Posts on 14 Oct 2021 and 1 Nov 2021",source:"@site/docs/node/references/geoBins.md",sourceDirName:"node/references",slug:"/node/references/geoBins",permalink:"/all-docs/docs/node/references/geoBins",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File Structure",permalink:"/all-docs/docs/node/references/fileStructure"},next:{title:"Wrapper Script",permalink:"/all-docs/docs/node/references/managmentTools"}},p={},s=[{value:"Current Regional Multipliers",id:"current-regional-multipliers",level:2},{value:"How Geographic Multipliers are Calculated",id:"how-geographic-multipliers-are-calculated",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geographic-bins"},"Geographic Bins"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6703).Z,width:"1200",height:"713"})),(0,a.kt)("p",null,"Sourced from Blog Posts on 14 Oct 2021",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," and 1 Nov 2021",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("p",null,"The xx network has divided nodes into 11 \u201cgeographic bins\u201d:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Oceania"),(0,a.kt)("li",{parentName:"ul"},"Eastern Asia"),(0,a.kt)("li",{parentName:"ul"},"Southern Africa"),(0,a.kt)("li",{parentName:"ul"},"South and Central America"),(0,a.kt)("li",{parentName:"ul"},"Western Asia"),(0,a.kt)("li",{parentName:"ul"},"North America"),(0,a.kt)("li",{parentName:"ul"},"Central Europe"),(0,a.kt)("li",{parentName:"ul"},"Russia"),(0,a.kt)("li",{parentName:"ul"},"Eastern Europe"),(0,a.kt)("li",{parentName:"ul"},"Middle East"),(0,a.kt)("li",{parentName:"ul"},"Western Europe")),(0,a.kt)("p",null,"As a protocol, cMix gets faster the lower the latency between the nodes\nin a team. In other words, as nodes get closer, they complete cMix\nrounds faster. And as rounds are completed faster, the nodes in them\nearn points faster, resulting in more xx earned for operation (You can\nread more about the point system in the Era Rewards - Era Points section\nof the ",(0,a.kt)("a",{parentName:"p",href:"https://xx.network/wp-content/uploads/2021/12/xx-economics-v1.2.pdf"},"xx Economics White Paper"),")."),(0,a.kt)("p",null,'This creates an economic incentive to centralize. To combat this, each\nbin will be assigned a "regional multiplier" which will multiply the\npoint value of the round for all nodes in it. They are expected to be\nsmall, on the order of 1.1 to 1.4, but will ensure that those higher\nlatency nodes who are so valuable for decentralization, are incentivized\nto remain in the network and that nominators are incentivized to stake\nthem.'),(0,a.kt)("h2",{id:"current-regional-multipliers"},"Current Regional Multipliers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bin ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Bin"),(0,a.kt)("th",{parentName:"tr",align:null},"Multiplier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"NorthAmerica"),(0,a.kt)("td",{parentName:"tr",align:null},"0.992")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"SouthAndCentralAmerica"),(0,a.kt)("td",{parentName:"tr",align:null},"1.273")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"WesternEurope"),(0,a.kt)("td",{parentName:"tr",align:null},"0.845")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"CentralEurope"),(0,a.kt)("td",{parentName:"tr",align:null},"0.875")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"EasternEurope"),(0,a.kt)("td",{parentName:"tr",align:null},"0.980")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"MiddleEast"),(0,a.kt)("td",{parentName:"tr",align:null},"1.100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"NorthernAfrica"),(0,a.kt)("td",{parentName:"tr",align:null},"1.100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"SouthernAfrica"),(0,a.kt)("td",{parentName:"tr",align:null},"1.292")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"Russia"),(0,a.kt)("td",{parentName:"tr",align:null},"0.979")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"EasternAsia"),(0,a.kt)("td",{parentName:"tr",align:null},"1.284")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"WesternAsia"),(0,a.kt)("td",{parentName:"tr",align:null},"1.146")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"Oceania"),(0,a.kt)("td",{parentName:"tr",align:null},"1.337")))),(0,a.kt)("p",null,"They were last set on 07/14/2022."),(0,a.kt)("h2",{id:"how-geographic-multipliers-are-calculated"},"How Geographic Multipliers are Calculated"),(0,a.kt)("p",null,"TODO, pull in from ",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"B. Wenger ",(0,a.kt)("a",{parentName:"li",href:"https://xx.network/blog/MainNetGeoBins"},'"Geographic Bins in MainNet"'),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"B. Wenger, B. Cardoso, R. Carback ",(0,a.kt)("a",{parentName:"li",href:"https://xx.network/blog/regionalMultipliers"},'"Testing Regional Multipliers for MainNet"'),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},6703:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Bins_WorldMap-ce181a3965d43dfddc00fdf4fc4899db.png"}}]);