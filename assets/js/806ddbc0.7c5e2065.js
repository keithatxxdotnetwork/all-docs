"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[2657],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Anonymous Data Retrieval Protocol",l={unversionedId:"cmix/adrp",id:"cmix/adrp",title:"Anonymous Data Retrieval Protocol",description:"The Anonymous Data Retrieval Protocol (ADRP) allows users to request",source:"@site/docs/cmix/adrp.md",sourceDirName:"cmix",slug:"/cmix/adrp",permalink:"/all-docs/docs/cmix/adrp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Technical Glossary",permalink:"/all-docs/docs/cmix/xxdk/technical-glossary"},next:{title:"Cover Traffic",permalink:"/all-docs/docs/cmix/coverTraffic"}},s={},p=[{value:"Protocol Description",id:"protocol-description",level:2},{value:"Cryptographic Primitives Summary:",id:"cryptographic-primitives-summary",level:2},{value:"Resources",id:"resources",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anonymous-data-retrieval-protocol"},"Anonymous Data Retrieval Protocol"),(0,a.kt)("p",null,"The Anonymous Data Retrieval Protocol (ADRP) allows users to request\ndata anonymously from a server without ever revealing their identity.\nWith normal ",(0,a.kt)("a",{parentName:"p",href:"e2e-xxm"},"end-to-end")," connections in the xx network, users always know the identity of whom\nthey are messaging. With ADRP, one can send a request to another user\ncontaining a one-time-use key negotiation for an entirely new user. The\nrecipient can respond to the negotiation without ever knowing the\nidentity of the original sender. When ADRP is combined with the metadata\nshredding capability of the cMix protocol encapsulation, a powerful\nanonymous data lookup is guaranteed."),(0,a.kt)("p",null,"This protocol is open for use with the\n",(0,a.kt)("a",{parentName:"p",href:"https://git.xx.network/elixxir/client"},"xxDK")," and is the basis for the\n",(0,a.kt)("a",{parentName:"p",href:"userDiscovery"},"User Discovery")," system\u2019s privacy."),(0,a.kt)("h2",{id:"protocol-description"},"Protocol Description"),(0,a.kt)("p",null,"The requestor needs to know the xx messenger contact details\n(cryptographic identity) of any user they request on the network\n(including a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie\u2013Hellman\nkey"),"\nand a network identity). xx messenger then generates a new key pair and\nnetwork identity by calculating a new, symmetric ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie\u2013Hellman\nkey"),"\nusing the new key and the recipient\u2019s key. The payload contents are then\nencrypted with the new symmetric key via\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant"},"ChaCha20"),", with\nan appended HMAC."),(0,a.kt)("p",null,"The request is sent over cMix in a single packet containing the new\npublic key (in clear-text) and encrypted message contents. Once\nreceived, the recipient can execute a Diffie\u2013Hellman with the clear-text\npublic key and decrypt the payload. The contents (and clear-text public\nkey) can be used to respond to the request from the new one-time-use\nidentity. The responses are also encrypted via\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Salsa20#ChaCha_variant"},"ChaCha20"),", with\nan appended HMAC."),(0,a.kt)("p",null,"The recipient can then process the contents and respond via the ad-hoc\nnegotiated link. Finally, the sender confirms receipt by checking the\nnetwork for receptions on the new identity."),(0,a.kt)("h2",{id:"cryptographic-primitives-summary"},"Cryptographic Primitives Summary:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,a.kt)("th",{parentName:"tr",align:null},"Length"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RSA"),(0,a.kt)("td",{parentName:"tr",align:null},"4096 bits"),(0,a.kt)("td",{parentName:"tr",align:null},"Used as the signature algorithm for signing a fact or a key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blake2b"),(0,a.kt)("td",{parentName:"tr",align:null},"256 bits"),(0,a.kt)("td",{parentName:"tr",align:null},"Algorithm used for generating single-use specific fingerprints and keys. Additionally used for HMACs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Diffie Helmen"),(0,a.kt)("td",{parentName:"tr",align:null},"3072 bits"),(0,a.kt)("td",{parentName:"tr",align:null},"Discrete log-based component of key negotiation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ChaCha20"),(0,a.kt)("td",{parentName:"tr",align:null},"256 bits (key)"),(0,a.kt)("td",{parentName:"tr",align:null},"Messages and payloads are encrypted by ChaCha20.")))),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single-Use\n",(0,a.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/client/-/tree/release/single"},"Implementation")),(0,a.kt)("li",{parentName:"ul"},"Single-Use ",(0,a.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/crypto/-/tree/release/e2e/singleUse"},"Cryptographic\nLibrary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.xx.network/xx_network/primitives/-/tree/release/id"},"ID Implementation (Ephemeral and\nReception)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/primitives/-/blob/release/format/message.go"},"cMix Message\nFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/client/-/blob/release/network/message/sendCmix.go"},"Sending cMix\nMessages"))))}d.isMDXComponent=!0}}]);