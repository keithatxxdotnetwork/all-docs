"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[9596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},s="Ledger",i={unversionedId:"tools/webWallet/accounts/ledger",id:"tools/webWallet/accounts/ledger",title:"Ledger",description:"Introduction",source:"@site/docs/tools/webWallet/accounts/ledger.md",sourceDirName:"tools/webWallet/accounts",slug:"/tools/webWallet/accounts/ledger",permalink:"/all-docs/docs/tools/webWallet/accounts/ledger",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Claiming Tokens",permalink:"/all-docs/docs/tools/webWallet/accounts/claim"},next:{title:"Multisig Accounts",permalink:"/all-docs/docs/tools/webWallet/accounts/multisig"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Functionality (Light vs XL versions)",id:"functionality-light-vs-xl-versions",level:2},{value:"XL Version",id:"xl-version",level:4},{value:"Light Version",id:"light-version",level:4},{value:"Account Generation",id:"account-generation",level:2},{value:"(Optional) Create a Sleeve wallet",id:"optional-create-a-sleeve-wallet",level:4},{value:"Setup Ledger Device",id:"setup-ledger-device",level:2},{value:"Download Ledger Live",id:"download-ledger-live",level:4},{value:"(Optional) Setup your device with recovery phrase",id:"optional-setup-your-device-with-recovery-phrase",level:4},{value:"Download the xx Network Ledger app",id:"download-the-xx-network-ledger-app",level:4},{value:"Small note about Ledger accounts",id:"small-note-about-ledger-accounts",level:2},{value:"Using the Ledger Wallet",id:"using-the-ledger-wallet",level:2},{value:"Add Account to the Web Wallet",id:"add-account-to-the-web-wallet",level:4},{value:"Verify Account Address",id:"verify-account-address",level:4},{value:"Review and Approve a Transaction",id:"review-and-approve-a-transaction",level:4},{value:"Possible Issues",id:"possible-issues",level:4},{value:"Support",id:"support",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ledger"},"Ledger"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Hardware wallets like ",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," are considered\nsome of the most secure ways to store and use cryptocurrencies as they\nkeep your private keys off of online devices that could be compromised\nby malware or mismanagement. This page will walk you through the\nprocess of setting up a Ledger device to use with the xx Network. Please\nkeep in mind that even if you are familiar with using Ledger devices,\nthere are some unique key generation steps when creating xx Network\nwallets due to the quantum-ready signature scheme that has been\ndeveloped to address the looming threat of quantum computing on\ncryptocurrency wallets."),(0,o.kt)("h2",{id:"functionality-light-vs-xl-versions"},"Functionality (Light vs XL versions)"),(0,o.kt)("p",null,"There are two options available when downloading the xx Network app onto\nyour Ledger device: a \u201clight\u201d version and an \u201cXL\u201d version. The\ndifference between them is simply the amount of functionality they\nsupport and the amount of space they take up on your Ledger device."),(0,o.kt)("h4",{id:"xl-version"},"XL Version"),(0,o.kt)("p",null,"The XL version is capable of signing almost every type of transaction\navailable in the xx Network ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.xx.network/"},"Web Wallet")," with\nthe primary exceptions being Democracy transactions (you can use a\ngovernance proxy if you\u2019d like to secure your wallets with a Ledger but\nstill participate in voting). If you are running a validator (node) then\nit is highly recommended you use the XL version. The XL version will\ngenerally require an entire Ledger device dedicated to it as it will\ntake up the majority of memory on a standard Ledger Nano S."),(0,o.kt)("h4",{id:"light-version"},"Light Version"),(0,o.kt)("p",null,"The light version will sign the majority of transactions needed for a\nlight user of the network: balance transfers, staking, and nominating.\nThe light version does not support some key functions needed for running\na node or setting a proxy so if you want to run a node or participate in\nGovernance then you will need to add your account directly in the xx\nwallet temporarily or upgrade to the XL version."),(0,o.kt)("p",null,"You can see the complete list of compatible functions for both versions\nat the bottom of the Github\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-xxnetwork"},"repository"),"."),(0,o.kt)("h2",{id:"account-generation"},"Account Generation"),(0,o.kt)("p",null,"xx Network wallets can be created using the novel\nSleeve Wallet Generation tool wich is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://sleeve.xx.network/"},"Sleeve")," website and the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.xx.network/#/accounts/generate"},"Web Wallet"),"."),(0,o.kt)("p",null,"Sleeve allows a quantum-secure wallet to be embedded into the creation\nof a standard non quantum-secure wallet. The quantum-secure wallet will be used in the future, once xx Network\nadopts quantum-secure cryptography, but for the time being, the standard\nwallet is in use. Any standard wallet created using Sleeve will be upgradable to their\nrespective quantum-secure wallet."),(0,o.kt)("h4",{id:"optional-create-a-sleeve-wallet"},"(Optional) Create a Sleeve wallet"),(0,o.kt)("p",null,"Even after adoption of quantum-secure cryptography, xx Network will\ncontinue to support non quantum-secure wallets. This means that creating a wallet using Sleeve is recommended, but not\nmandatory. If you decide to use Sleeve to create your xx Netqork wallet, you won't be\ngenerating your account directly on the Ledger device."),(0,o.kt)("p",null,"Instead, you should use our offline wallet generation tool to create\nboth a standard and quantum secure recovery phrase.You will then use the standard recovery phrase to initialize your Ledger\ndevice. The offline wallet generator tool will securely generate two recovery\nphrases: a standard recovery phrase and a quantum secure recovery\nphrase. Refer to ",(0,o.kt)("a",{parentName:"p",href:"/all-docs/docs/tools/webWallet/accounts/generateAccount"},"Using the Wallet Generator")," for a walkthrough of\nthe steps needed to download and install the wallet generator tool."),(0,o.kt)("p",null,"Once you\u2019ve generated your recovery phrases, make sure to keep them\nsomewhere safe where they won\u2019t be lost or stolen. These phrases will\ngive complete access to your wallet."),(0,o.kt)("h2",{id:"setup-ledger-device"},"Setup Ledger Device"),(0,o.kt)("h4",{id:"download-ledger-live"},"Download Ledger Live"),(0,o.kt)("p",null,"Go to the Ledger ",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live/"},"website")," and download\nand install the Ledger Live app."),(0,o.kt)("p",null,"Once you\u2019ve installed and opened Ledger Live, plug in your Ledger\ndevice."),(0,o.kt)("h4",{id:"optional-setup-your-device-with-recovery-phrase"},"(Optional) Setup your device with recovery phrase"),(0,o.kt)("p",null,"If you previously created an xx Network wallet using Sleeve, follow this\ninstructions. Otherwise, skip to the next section."),(0,o.kt)("p",null,"You will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4404382560913-Restore-your-device-from-a-recovery-phrase?support=true"},"RESTORE YOUR LEDGER ACCOUNTS WITH YOUR RECOVERY PHRASE")," process to setup the device as detailed\non the Ledger support."),(0,o.kt)("p",null,"During this process you will enter the standard recovery phrase (",(0,o.kt)("strong",{parentName:"p"},"NOT\nTHE QUANTUM RECOVERY PHRASE"),") directly into the Ledger device."),(0,o.kt)("h4",{id:"download-the-xx-network-ledger-app"},"Download the xx Network Ledger app"),(0,o.kt)("p",null,"With your account successfully added to the Ledger device you will need\nto add the xx Network app to your Ledger."),(0,o.kt)("p",null,"Make sure the Ledger is plugged in and unlocked and then open the Ledger\nLive app."),(0,o.kt)("p",null,'Go to the "My Ledger" tab and search for the xx Network app. Choose the\nXL or light version according to your needs and click Install.'),(0,o.kt)("h2",{id:"small-note-about-ledger-accounts"},"Small note about Ledger accounts"),(0,o.kt)("p",null,"The xx Network blockchain is developed using Substrate, which has its\nown wallet derivation scheme using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-bip39"},"substrate-bip39"),". This\nscheme is used by both the Web Wallet and the Wallet Generator app (which\ndisplays the generated wallet address in the last step)."),(0,o.kt)("p",null,"However, Ledger devices use the industry standard\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"},"bip39"),",\nwhich differs from the Substrate one. This means that the same\n",(0,o.kt)("strong",{parentName:"p"},"recovery phrase")," will ",(0,o.kt)("strong",{parentName:"p"},"NOT")," result in the same wallet when setup on\na Ledger device or the Web Wallet. ",(0,o.kt)("strong",{parentName:"p"},"Please keep this in mind when\nproceeding in the next steps"),"."),(0,o.kt)("h2",{id:"using-the-ledger-wallet"},"Using the Ledger Wallet"),(0,o.kt)("h4",{id:"add-account-to-the-web-wallet"},"Add Account to the Web Wallet"),(0,o.kt)("p",null,"Now that you\u2019ve set up your Ledger wallet, you\u2019re ready to begin using\nit with the Web Wallet"),(0,o.kt)("p",null,"The first thing you need to do is add your Ledger Wallet account to the\nxx wallet. Note that this does not store your keys in the browser, they\nremain secure in the Ledger device so you will need to have your Ledger\navailable anytime you want to sign a transaction."),(0,o.kt)("p",null,"First, plug your Ledger device into your computer, unlock it and open\nthe xx network app."),(0,o.kt)("p",null,"Once the app is open, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.xx.network/"},"wallet"),".\nClick on the Accounts tab and then select the Accounts menu item."),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Add via Ledger"),".\n",(0,o.kt)("img",{src:n(3913).Z,width:"1765",height:"937"})),(0,o.kt)("p",null,"You will be asked to name your account and presented with some options\nfor creating derived accounts. The name of your account can be anything\nyou want and will only be seen by you. You may change it at any time\nafter adding it to the xx wallet. Derivations will not be covered in\nthis wiki page."),(0,o.kt)("p",null,"Press the ",(0,o.kt)("em",{parentName:"p"},"Save")," button to continue after choosing the name.\n",(0,o.kt)("img",{src:n(6604).Z,width:"1779",height:"1018"}),"\nWhen you click ",(0,o.kt)("em",{parentName:"p"},"Save")," you may be prompted by your web browser to allow\nthe Ledger device to connect. Select the device and click ",(0,o.kt)("em",{parentName:"p"},"Connect"),".\n",(0,o.kt)("img",{src:n(1).Z,width:"2188",height:"1079"}),"\nYou should now see your Ledger account in the xx wallet window with the\nwallet address below the name. It is highly recommended that you verify\nthis address before sending or receiving any xx coins with this wallet."),(0,o.kt)("h4",{id:"verify-account-address"},"Verify Account Address"),(0,o.kt)("p",null,"After adding your account to the xx wallet, you should always verify\nthat the address matches the address shown on your Ledger device."),(0,o.kt)("p",null,"To do this, simply click on the three dots next to the ",(0,o.kt)("em",{parentName:"p"},"send")," button and\nthen select ",(0,o.kt)("em",{parentName:"p"},"Show address on hardware device"),".\n",(0,o.kt)("img",{src:n(8417).Z,width:"1727",height:"497"}),"\nIf your Ledger device is connected, unlocked, and you\u2019re in the xx\nnetwork Ledger app, you should now see your wallet address show up on\nthe Ledger device."),(0,o.kt)("p",null,"Use the buttons to scroll through the entire address and if it matches\nthe wallet address you see on the xx wallet then you can go ahead and\nclick ",(0,o.kt)("em",{parentName:"p"},"Approve")," on the Ledger and you\u2019re all set to use the wallet.\n",(0,o.kt)("img",{src:n(356).Z,width:"3023",height:"2070"}),"\n",(0,o.kt)("img",{src:n(6709).Z,width:"2757",height:"2238"}),"\n",(0,o.kt)("img",{src:n(969).Z,width:"3024",height:"2172"})),(0,o.kt)("p",null,"If the wallet address does not match, then make sure you followed the\nsetup instructions correctly and if you\u2019re still having trouble email\n","[","/cdn-cgi/l/email-protection ","[","email\xa0protected","]","]"),(0,o.kt)("h4",{id:"review-and-approve-a-transaction"},"Review and Approve a Transaction"),(0,o.kt)("p",null,"In order to use the Ledger device to sign a transaction, make sure it is\nplugged into your computer and that you\u2019ve opened the xx network Ledger\napp on your Ledger device."),(0,o.kt)("p",null,"Create your transaction as you would with a non-Ledger wallet and click\non the ",(0,o.kt)("em",{parentName:"p"},"Sign and Submit")," button (this may be labeled something else\ndepending on the type of transaction you\u2019re executing)."),(0,o.kt)("p",null,"In this example we\u2019re showing a transaction that sends xx coins.\n",(0,o.kt)("img",{src:n(1696).Z,width:"1232",height:"803"}),"\nThe transaction should now show up on your Ledger device with all the\ntransaction details. Carefully review the transaction on your Ledger by\nscrolling through it with the buttons and make sure it matches the\ntransaction you\u2019re attempting to send.\n",(0,o.kt)("img",{src:n(6290).Z,width:"2914",height:"1831"}),"\n",(0,o.kt)("img",{src:n(6861).Z,width:"2592",height:"1253"}),"\n",(0,o.kt)("img",{src:n(5455).Z,width:"3142",height:"1774"})),(0,o.kt)("p",null,"If it looks incorrect then click Reject on the Ledger and try the\ntransaction again."),(0,o.kt)("p",null,"Otherwise click ",(0,o.kt)("em",{parentName:"p"},"Approve")," and you should see a submission status icon at\nthe top right of the xx wallet. Assuming the transaction is valid, this\nwill turn green and your transaction has been successfully processed.\n",(0,o.kt)("img",{src:n(8214).Z,width:"2691",height:"1691"}),"\n",(0,o.kt)("img",{src:n(3309).Z,width:"355",height:"467"}),"\n",(0,o.kt)("img",{src:n(4519).Z,width:"339",height:"445"})),(0,o.kt)("h4",{id:"possible-issues"},"Possible Issues"),(0,o.kt)("p",null,"If you run into any error using the xx wallet and the Ledger device,\nmake sure the transaction you are trying to sign is supported by the xx\nnetwork Ledger app version you are using (light or XL)."),(0,o.kt)("p",null,"Also, make sure your Ledger device is connected, unlocked, and the xx\nnetwork app is open, whenever you are trying to use the Ledger wallet in\nthe xx wallet to send transactions."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"If you are having issues using the xx network Ledger app, you can join\nthe xx network ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/Y8pCkbK"},"Discord")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://t.me/xxnetwork"},"Telegram")," communities and ask for support."))}h.isMDXComponent=!0},3913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Add_via_ledger-8b103d4e45a2f5f0141b921d993e984e.png"},8417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_address-46e8f54aa140fe71ae86bef8cdb783a6.png"},356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_address_1-f61d0da083e9df463466b32eac96e0d9.jpg"},6709:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_address_2-29073c092dff8a1df61cc96867c1579e.jpg"},969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_address_approve-871a5c41dd1d08f7b7cc42a4636baee2.jpg"},6861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_balances_dest-cc8525b736dd13d3d3288ceeae7b9c49.jpg"},6290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_balances_transfer-cdbf88e95fbb8a3b5c7f65d7a1924e2c.jpg"},5455:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_transfer_amount-c6d94a653de143655aa90230414d6aa0.jpg"},8214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Ledger_transfer_approve-04c9d8281ecda6b813445a3881168f8c.jpg"},6604:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2022-06-22_at_3.59.21_PM-0266cf9bf38e1d37fab68ca88965b282.png"},1:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screen_Shot_2022-06-22_at_3.59.43_PM-e362d197134c60c304d89a31b522ca33.png"},1696:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Send_xx-91a6854ac8d678b47a757b5841c8e38b.png"},3309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tx_submission-7654d916557adcba640d1052395a69b1.png"},4519:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tx_success-d08cb7c27d17410bb3752cfc01e57968.png"}}]);