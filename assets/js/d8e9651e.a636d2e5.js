"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[5255],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?n.createElement(m,a(a({ref:r},f),{},{components:t})):n.createElement(m,a({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9205:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={},a="Cover Traffic",s={unversionedId:"cmix/coverTraffic",id:"cmix/coverTraffic",title:"Cover Traffic",description:"Cover traffic, also known as dummy traffic or decoy traffic, is used by the xx Messenger application to essentially give us two additional privacy properties known as \u201csender unobservability\u201d and \u201creceiver unobservability\u201d (see the privacy notions paper https://arxiv.org/abs/1812.05638 ). If cover traffic is enabled, the xx Messenger client will, at random time intervals, send cover messages which are indistinguishable from ordinary messages. Any adversary watching your network traffic will not know when you are sending or receiving an ordinary message or a cover message.",source:"@site/docs/cmix/coverTraffic.md",sourceDirName:"cmix",slug:"/cmix/coverTraffic",permalink:"/all-docs/docs/cmix/coverTraffic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anonymous Data Retrieval Protocol",permalink:"/all-docs/docs/cmix/adrp"},next:{title:"End-to-End Encrypted Messaging in xx Messenger",permalink:"/all-docs/docs/cmix/e2e-xxm"}},c={},l=[],f={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cover-traffic"},"Cover Traffic"),(0,o.kt)("p",null,"Cover traffic, also known as dummy traffic or decoy traffic, is used by the xx Messenger application to essentially give us two additional privacy properties known as \u201csender unobservability\u201d and \u201creceiver unobservability\u201d (see the privacy notions paper ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1812.05638"},"https://arxiv.org/abs/1812.05638")," ). If cover traffic is enabled, the xx Messenger client will, at random time intervals, send cover messages which are indistinguishable from ordinary messages. Any adversary watching your network traffic will not know when you are sending or receiving an ordinary message or a cover message."),(0,o.kt)("p",null,"Our cover traffic design is aided somewhat by our intentional recipient ID collisions (See ",(0,o.kt)("a",{parentName:"p",href:"idCollisionAndNotifications"},"ID Collision and Notifications"),"). Cover traffic is sent to recipient IDs chosen at random from the small ID space which is intended to cause ID collisions. Therefore the cover messages will be received by random users of the xx Network."),(0,o.kt)("p",null,"The cover traffic yields the privacy properties summarized above and this is important for resisting attacks on the anonymity properties of the xx Network. Because your connection data leaks (true for all network connections), that can be used over time to determine who is talking to who. By activating cover traffic you are making these statistical disclosure attacks much more difficult."))}d.isMDXComponent=!0}}]);