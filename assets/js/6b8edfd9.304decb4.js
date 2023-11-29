"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="End-to-End Encrypted Messaging in xx Messenger",s={unversionedId:"cmix/e2e-xxm",id:"cmix/e2e-xxm",title:"End-to-End Encrypted Messaging in xx Messenger",description:"[End-to-End Encrypted",source:"@site/docs/cmix/e2e-xxm.md",sourceDirName:"cmix",slug:"/cmix/e2e-xxm",permalink:"/all-docs/docs/cmix/e2e-xxm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cover Traffic",permalink:"/all-docs/docs/cmix/coverTraffic"},next:{title:"ID Collisions and Notifications",permalink:"/all-docs/docs/cmix/idCollisionAndNotifications"}},c={},l=[{value:"Cryptographic Primitives Summary",id:"cryptographic-primitives-summary",level:2},{value:"Resources",id:"resources",level:2}],p={toc:l},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-encrypted-messaging-in-xx-messenger"},"End-to-End Encrypted Messaging in xx Messenger"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/End-to-end_encryption"},"End-to-End Encrypted\n(E2EE)")," messaging\nis a way to securely and privately communicate with connections\u2014only the\nsender and receiver can read the contents of their messages. While\n",(0,r.kt)("a",{parentName:"p",href:"../overview/cmix"},"cMixx")," protects your metadata (the who, what,\nwhen, and where of your communications), the E2EE between clients on the\nxx Network provides the additional guarantee that no third party can\ndecipher data that is processed and stored. End-to-end encryption keeps\nyour message content private from third parties, including xx Nodes,\nnodes\u2019 internet service providers, cell phone companies, and any other\ntelecommunications devices or malicious actors on the internet\u2013your data\nbelongs to you, and only you. We call these E2EE links authenticated\nchannels."),(0,r.kt)("p",null,"In xx Messenger, we provide E2EE messaging that is protected against\nthreats from quantum computers. We accomplish this by using a key\nexchange algorithm that uses ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Post-quantum_cryptography"},"post-quantum\ncryptography"),"\ncombined with a known-secure regular key exchange algorithm, ensuring\nthat an attacker trying to break the protocol must break both to be\nsuccessful. The xx Network uses the ",(0,r.kt)("a",{parentName:"p",href:"https://sike.org/files/SIDH-spec.pdf"},"Supersingular Isogeny\nDiffie\u2013Helman")," (SIDH) algorithm\nfor post-quantum key exchange and the classic\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange"},"Diffie\u2013Helman"),"\n(DH) algorithm for regular key exchange."),(0,r.kt)("p",null,"To create an authenticated channel for E2EE messaging, the xx Messenger\nneeds the cMixx contact (public cryptographic identity key) to establish\nencryption. Users can obtain these keys in one of two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Exchanging QR codes with another user"),(0,r.kt)("li",{parentName:"ol"},"Looking up another user with the User Discovery search function")),(0,r.kt)("p",null,"After acquiring the other users\u2019 cMixx contact, the xx Messenger sends an\nauthentication request message containing the SIDH and DH public keys\nneeded to initiate the key exchange. The recipient responds with their\nown SIDH and DH public keys, and the original sender sends a final\nconfirmation message."),(0,r.kt)("p",null,"After receiving the other user\u2019s SIDH and DH public keys, xx Messenger\ncomputes the shared SIDH and shared DH secrets. It then combines these\nsecrets with a hash algorithm (BLAKE2B) to form the E2E Session Base\nKey. This step finalizes the authenticated channel creation\u2013each user\ncan now send E2EE messages."),(0,r.kt)("p",null,"To provide ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Forward_secrecy"},"forward\nsecrecy")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2016/221.pdf"},"post-compromise security"),", the\nE2E Session Base Key is periodically re-keyed in a process sometimes\nknown as\n",(0,r.kt)("a",{parentName:"p",href:"http://cryptowiki.net/index.php?title=Ratcheted_encryption"},"ratcheting"),".\nThe sender on each side of the connection controls how often a re-key\noccurs. To initiate a re-key, the client sends new SIDH and DH public\nkeys using the authenticated channel already in place. When the\nrecipient responds, the sender can generate a new E2E Session Base Key\nto create a new version of the authenticated channel, which is\nfunctionally identical to the previous authenticated channel but a\ndifferent key. These rekeys require an additional message, so they are\nonly sent on an as-needed basis."),(0,r.kt)("p",null,"Each message in the xx Messenger is encrypted with ",(0,r.kt)("a",{parentName:"p",href:"https://cr.yp.to/chacha/chacha-20080128.pdf"},"XChaCha20 symmetric\nencryption")," with a keyed\nhash ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Message_authentication_code"},"message authentication\ncode"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2104"},"HMAC-SHA256"),". The key\nused for encryption is derived from the E2E Session Base Key. In\naddition, a fingerprint, which only the recipient can use, is included\nin the message to allow the recipient to look up the same encryption key\nfor that message."),(0,r.kt)("h2",{id:"cryptographic-primitives-summary"},"Cryptographic Primitives Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("th",{parentName:"tr",align:null},"Length"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChaCha20"),(0,r.kt)("td",{parentName:"tr",align:null},"256 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages and payloads are encrypted by ChaCha20.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLAKE2B"),(0,r.kt)("td",{parentName:"tr",align:null},"256 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Used as part of key generation, key expansion, identity generation, and identification codes. Used to combine Diffie\u2013Helman and SIDH keys after key integration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA256"),(0,r.kt)("td",{parentName:"tr",align:null},"256 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Message HMACs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Diffie\u2013Helmen"),(0,r.kt)("td",{parentName:"tr",align:null},"3072 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Discrete log-based component of key negotiation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SIDH"),(0,r.kt)("td",{parentName:"tr",align:null},"3024 bits"),(0,r.kt)("td",{parentName:"tr",align:null},"Quantum-resistant component of key negotiation.")))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/client/-/blob/release/network/message/sendE2E.go"},"Sending E2E\nMessages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/client/-/tree/release/keyExchange"},"User Key\nExchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/client/-/tree/release/storage/e2e"},"E2E Manager and Storage\nImplementation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/crypto/-/tree/release/e2e"},"E2E Cryptographic\nLibrary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/crypto/-/tree/release/diffieHellman"},"Diffie Hellman Cryptographic\nLibrary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git.xx.network/elixxir/crypto/-/tree/release/hash"},"Hashing Cryptographic\nLibrary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cloudflarearchive/sidh"},"Cloudflare's SIDH Implementation (in\nGo)"))))}d.isMDXComponent=!0}}]);