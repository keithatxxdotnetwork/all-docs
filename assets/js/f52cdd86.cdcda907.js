"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[5471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="3. Check chain.log",s={unversionedId:"node/validator-staking/validator-status",id:"node/validator-staking/validator-status",title:"3. Check chain.log",description:"To proceed you need to ensure the xxnetwork-chain process is running properly on the Node computer. This can be done by inspecting /opt/xxnetwork/log/chain.log on the Node computer with the following command.",source:"@site/docs/node/validator-staking/3-validator-status.md",sourceDirName:"node/validator-staking",slug:"/node/validator-staking/validator-status",permalink:"/all-docs/docs/node/validator-staking/validator-status",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Stash and Controller Accounts",permalink:"/all-docs/docs/node/validator-staking/accounts"},next:{title:"4. Set Session Keys",permalink:"/all-docs/docs/node/validator-staking/session-keys"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-check-chainlog"},"3. Check ",(0,o.kt)("inlineCode",{parentName:"h1"},"chain.log")),(0,o.kt)("p",null,"To proceed you need to ensure the ",(0,o.kt)("inlineCode",{parentName:"p"},"xxnetwork-chain")," process is running properly on the Node computer. This can be done by inspecting ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/xxnetwork/log/chain.log")," on the Node computer with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fail -f /opt/xxnetwork/log/chain.log\n")),(0,o.kt)("p",null,"The following shows the process is running and syncing. Note the presence of ",(0,o.kt)("inlineCode",{parentName:"p"},"Syncing"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-07-09 11:50:40 \u2699\ufe0f  Syncing 1103.2 bps, target=#115291 (6 peers), best: #11298 (0x945a\u20267acc), finalized #11264 (0x57a2\u2026862e), \u2b07 355.7kiB/s \u2b06 5.2kiB/s\n2021-07-09 11:50:45 \u2699\ufe0f  Syncing 1075.6 bps, target=#115292 (6 peers), best: #16676 (0x4793\u2026eb6a), finalized #16651 (0xaa77\u20261f73), \u2b07 298.3kiB/s \u2b06 4.8kiB/s\n2021-07-09 11:50:50 \u2699\ufe0f  Syncing 1091.8 bps, target=#115293 (6 peers), best: #22135 (0xf654\u2026548c), finalized #22051 (0x3c59\u20261459), \u2b07 293.8kiB/s \u2b06 4.4kiB/s\n2021-07-09 11:50:55 \u2699\ufe0f  Syncing 1029.6 bps, target=#115294 (6 peers), best: #27283 (0x1f92\u20263748), finalized #27211 (0xb33e\u20269f3e), \u2b07 294.2kiB/s \u2b06 4.3kiB/s\n")),(0,o.kt)("p",null,"The following shows the process is synced. Note the presence of ",(0,o.kt)("inlineCode",{parentName:"p"},"\ud83d\udca4 Idle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2728 Imported"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-07-14 20:45:58 \ud83d\udca4 Idle (14 peers), best: #188381 (0x5eaa\u202614a7), finalized #188379 (0xe221\u20266885), \u2b07 11.6kiB/s \u2b06 211.7kiB/s\n2021-07-14 20:46:00 \u2728 Imported #188382 (0x38d3\u2026d252)\n2021-07-14 20:46:03 \ud83d\udca4 Idle (14 peers), best: #188382 (0x38d3\u2026d252), finalized #188380 (0x2797\u2026d5d7), \u2b07 17.3kiB/s \u2b06 15.1kiB/s\n2021-07-14 20:46:06 \u2728 Imported #188383 (0x71a4\u2026743c)\n2021-07-14 20:46:08 \ud83d\udca4 Idle (14 peers), best: #188383 (0x71a4\u2026743c), finalized #188381 (0x5eaa\u202614a7), \u2b07 12.8kiB/s \u2b06 137.9kiB/s\n2021-07-14 20:46:12 \u2728 Imported #188384 (0xd48a\u2026301f)\n")))}u.isMDXComponent=!0}}]);