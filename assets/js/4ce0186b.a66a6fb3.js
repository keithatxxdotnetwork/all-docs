"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[2320],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>g});var n=o(7294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=l(o),d=a,g=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return o?n.createElement(g,r(r({ref:e},u),{},{components:o})):n.createElement(g,r({ref:e},u))}));function g(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[h]="string"==typeof t?t:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2137:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const i={},r="Multisig Accounts",s={unversionedId:"tools/webWallet/accounts/multisig",id:"tools/webWallet/accounts/multisig",title:"Multisig Accounts",description:"You can use a multisig account to add extra security layers from a",source:"@site/docs/tools/webWallet/accounts/multisig.md",sourceDirName:"tools/webWallet/accounts",slug:"/tools/webWallet/accounts/multisig",permalink:"/all-docs/docs/tools/webWallet/accounts/multisig",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ledger",permalink:"/all-docs/docs/tools/webWallet/accounts/ledger"},next:{title:"Receive Coins",permalink:"/all-docs/docs/tools/webWallet/accounts/receiveCoins"}},c={},l=[{value:"Overview to use a multisig account",id:"overview-to-use-a-multisig-account",level:2},{value:"Before Starting",id:"before-starting",level:2},{value:"Generate",id:"generate",level:2},{value:"Export",id:"export",level:2},{value:"Using multisig for validate",id:"using-multisig-for-validate",level:2}],u={toc:l},h="wrapper";function p(t){let{components:e,...i}=t;return(0,a.kt)(h,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"multisig-accounts"},"Multisig Accounts"),(0,a.kt)("p",null,"You can use a multisig account to add extra security layers from a\nbasic wallet. The main purpose is to require multiple signatures to\nauthorize a transaction or any change."),(0,a.kt)("h2",{id:"overview-to-use-a-multisig-account"},"Overview to use a multisig account"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create two or more accounts - ",(0,a.kt)("a",{parentName:"li",href:"/all-docs/docs/tools/webWallet/accounts/generateAccount"},"Using the Wallet Generator")),(0,a.kt)("li",{parentName:"ol"},"Generate a multisig account from these accounts by specify the\nthreshold"),(0,a.kt)("li",{parentName:"ol"},"Send some xx coins on each account"),(0,a.kt)("li",{parentName:"ol"},"Do any transaction"),(0,a.kt)("li",{parentName:"ol"},"Sign with required amount of accounts for authorize action")),(0,a.kt)("h2",{id:"before-starting"},"Before Starting"),(0,a.kt)("p",null,"Multisig account costs a lot of fee for every actions so this security\nfeature isn't cheap. The main purpose is to store these accounts keys or\n.json files on different location like that even if you lost one you can\nrecover your account from another key by using a threshold X-1 wallet."),(0,a.kt)("p",null,"Example : you create three accounts but you need only two for sign and\nauthorize a transaction. If you not do that and specify all account with\nthe threshold number you need all accounts for authorize anything if you\nlost one account your multisig account is lost forever."),(0,a.kt)("p",null,"If you dont do this and specify all accounts on the threshold number you\nneed all accounts for authorize anything if you lost one single account\nyour multisig account is lost forever."),(0,a.kt)("h2",{id:"generate"},"Generate"),(0,a.kt)("p",null,'Once you have your wallets set up, you need to generate a multisig\naccount by clicking "Multisig" button ',(0,a.kt)("img",{src:o(9049).Z,width:"1167",height:"463"})),(0,a.kt)("p",null,"Select all accounts to create a multisig account and choose the\nthreshold number here 2 (threshold) of 3 wallets (selected signatories).\n",(0,a.kt)("img",{src:o(3514).Z,width:"1188",height:"655"})),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("p",null,"Multisig is a special account and xx wallet not execute a direct\ndownload like other account of the .json file. You have two possibilites\nto get your multisig account from wallet.xx.network :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Import all accounts and click again on "Multisig" button to recreate\nsame multisig account with exactly the same threshold number.'),(0,a.kt)("li",{parentName:"ol"},'You can click on the "Export" button and select only the multisig\naccount to export a .json file. The advantage is that you can import\nonly two accounts and the multisig account for signing transactions\nif you choose 2 (threshold) of 3 (selected signatories) so you can\nkeep safe your last account safe on cold\nstorage.',(0,a.kt)("img",{src:o(5627).Z,width:"1050",height:"439"}))),(0,a.kt)("h2",{id:"using-multisig-for-validate"},"Using multisig for validate"),(0,a.kt)("p",null,"The first thing is to put some coins on each account for pay the fees\nbut be careful because you need one account with ",(0,a.kt)("strong",{parentName:"p"},"more than 20xx"),"!"),(0,a.kt)("p",null,"This account with more than 20xx must be used ",(0,a.kt)("strong",{parentName:"p"},"first")," in the approval\nprocess for sign the transaction : ",(0,a.kt)("img",{src:o(6093).Z,width:"1204",height:"477"}),"\n",(0,a.kt)("img",{src:o(7863).Z,width:"1205",height:"888"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use an account with more than 20xx for sign the first approval"),(0,a.kt)("li",{parentName:"ul"},'It\'s better if you copy the "multisig call data" for the final\napproval')),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(423).Z,width:"71",height:"139"})),(0,a.kt)("p",null,"If you have enough coins over 20xx on the first account, you see it\nappear on the right of the screen"),(0,a.kt)("p",null,"You now have two options to confirm all the necessary accounts :"),(0,a.kt)("p",null,"1",".",' Go to the "Accounts" tab and you should have a red mark on the left\nside of your multisig because you need more accounts to sign the\ntransaction until you reach the threshold number for the final approval\n',(0,a.kt)("img",{src:o(3633).Z,width:"1755",height:"406"}),"\n",(0,a.kt)("img",{src:o(1816).Z,width:"1080",height:"555"})),(0,a.kt)("p",null,"2",".",' Perform the same actions with the same parameters and you will\narrive at this window until your reach the threshold number "Existing\napprovals (1/3)"\n',(0,a.kt)("img",{src:o(4757).Z,width:"1206",height:"536"}),"\nFor the final approval your have also two choices :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'You have copied the "multisig call data" and by clicking on\n"Multisig approvals" from "Accounts" tab you come to this window and\nhave to enter the "call data for final approval" copied during the\nfirst approval. The "Multisig message with call (for final\napproval)" ticks itself.')),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7681).Z,width:"1209",height:"676"}),'\n2. You haven\'t kept "multisig call data" and you have to do exactly the\nsame transaction with the same parameters. "Multisig message with call\n(for final apporval) is triggered by itself when your reach the\nthreshold number of signatures.\n',(0,a.kt)("img",{src:o(6208).Z,width:"1204",height:"757"})))}p.isMDXComponent=!0},9049:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Account-acbb774cefab30eceb027c67160cdcfe.jpg"},3514:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Addmultisig-42456874c95da741d999000ff4ec1177.jpg"},5627:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Export-a8ceb9d9c98786b7e62367cf988c3452.png"},1816:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/MultiSigApprovalo-733c19425f8d7317d26b2535ac319f05.png"},3633:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Multisig-204e0f08343100517e6c6016edf26097.png"},4757:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/MultisigApprovalConfirmation-dd740985e3e0a22714e7bcd873bdacec.png"},7681:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/MultisigApprovalConfirmationFINAL-4ff67a7f17ccf51f0cc5eb7af4ce8c8d.png"},6093:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/Validator-2565f0d4282baffc9e6d66459adf5792.png"},7863:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/ValidatorConfirm-8336fe452b2d72dde27588a590865e00.png"},6208:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/ValidatorFINAL-b40cdd45915b3a578a222c8bed3d9d04.png"},423:(t,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);