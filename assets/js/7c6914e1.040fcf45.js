"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="Proxxy",l={unversionedId:"dapps/proxxy",id:"dapps/proxxy",title:"Proxxy",description:"Proxxy is a technology that leverages the xx Network's",source:"@site/docs/dapps/proxxy.md",sourceDirName:"dapps",slug:"/dapps/proxxy",permalink:"/all-docs/docs/dapps/proxxy",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/all-docs/docs/dapps/intro"},next:{title:"xx Messenger",permalink:"/all-docs/docs/dapps/xxm"}},s={},p=[{value:"Why is Proxxy needed?",id:"why-is-proxxy-needed",level:2},{value:"How does Proxxy work?",id:"how-does-proxxy-work",level:2},{value:"How does the app contact a Relay Server?",id:"how-does-the-app-contact-a-relay-server",level:3},{value:"Supported Networks",id:"supported-networks",level:2},{value:"Metamask Recommendations",id:"metamask-recommendations",level:2},{value:"Download and Install",id:"download-and-install",level:2},{value:"Windows Instructions.",id:"windows-instructions",level:3},{value:"macOS Instructions.",id:"macos-instructions",level:3},{value:"Linux instructions.",id:"linux-instructions",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxxy"},"Proxxy"),(0,o.kt)("p",null,"Proxxy is a technology that leverages the xx Network's\n",(0,o.kt)("a",{parentName:"p",href:"/all-docs/docs/cmix/"},"cMix")," network to provide metadata protection\nto users of web3."),(0,o.kt)("p",null,"With Proxxy, any wallet can integrate better privacy, in order to avoid\nuser's data being collected by RPC providers."),(0,o.kt)("p",null,"Currently, in order to use Proxxy, users have to install a desktop\napplication, which will act as a local proxy to supported blockchain\nnetworks."),(0,o.kt)("p",null,"In principle, any wallet that supports adding custom networks will work\nwith the Proxxy App, but for now MetaMask is the main wallet being\ntargeted."),(0,o.kt)("p",null,"In the future, Proxxy technology will be made into an API that can be\nintegrated directly in any wallet. However, this will always be\ndependent on developers of said wallets doing the integration,\npotentially in partnerships with the xx network."),(0,o.kt)("p",null,"You can use Proxxy now by downloading the Desktop App, navigating to the\nProxxy ",(0,o.kt)("a",{parentName:"p",href:"https://proxxy.xx.network"},"webpage"),", and following the\nconnection flow."),(0,o.kt)("h2",{id:"why-is-proxxy-needed"},"Why is Proxxy needed?"),(0,o.kt)("p",null,"Anytime a user interacts with a blockchain using a website or mobile\nwallet connecting to anything other than the RPC endpoint of a\npersonally operated full node, it is leaking data that can be gathered."),(0,o.kt)("p",null,"This data might not be collected by RPC providers, but it can be. This\nlack of privacy has been known and acknowledged for a long time\n(Coindesk\n",(0,o.kt)("a",{parentName:"p",href:"https://www.coindesk.com/markets/2018/11/08/the-little-known-ways-ethereum-reveals-user-location-data/"},"article"),")\nand remains one to this day with RPC providers:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"MetaMask must have an RPC provider to work, and an RPC provider must\ncollect your IP and wallet address to work"'))," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,o.kt)("p",null,"When a user connects to a public RPC endpoint, of any blockchain, the\nowner of that endpoint can see all the traffic coming and going."),(0,o.kt)("p",null,"Metadata such as IP address can be used to determine location, date &\ntime can be used to find routines, and often more, such as tracking data\nfrom a browser that can be used to create social graphs, user profiles\nand personal information, etc (",(0,o.kt)("a",{parentName:"p",href:"https://edu.gcfglobal.org/en/internetsafety/understanding-browser-tracking/1/"},"Understanding browser\ntracking"),")."),(0,o.kt)("p",null,"The following image represents how user metadata is leaked to the RPC\nprovider when using MetaMask."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6144).Z,width:"2122",height:"746"})),(0,o.kt)("p",null,"By collecting the metadata and transaction data, Infura can associate a\nsource address of any transaction with information that might help\nidentify the user, effectively breaking the pseudonymity provided by the\nblockchain."),(0,o.kt)("p",null,"With Proxxy, users are safe to interact with a public RPC endpoint, and\ntheir metadata and/or browser data does not end up in the possession of\nthe company operating the RPC infrastructure."),(0,o.kt)("h2",{id:"how-does-proxxy-work"},"How does Proxxy work?"),(0,o.kt)("p",null,"Proxxy uses a pair of client / server applications that communicate over\nthe cMix network."),(0,o.kt)("p",null,"The client receives RPC requests from the wallet application interacting\nwith a given blockchain and sends them over cMix to the Relay server."),(0,o.kt)("p",null,"The Relay server then forwards the request to configured RPC endpoints\naccording to the blockchain network the user is interacting with."),(0,o.kt)("p",null,"The RPC endpoint replies to the request and the Relay server then\nforwards it back to the client over cMix, which then responds back to\nthe wallet application."),(0,o.kt)("p",null,"The source code for Proxxy client / server applications can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xx-labs/blockchain-cmix-relay"},"here"),"."),(0,o.kt)("p",null,"The Proxxy App wraps the client side application, so that the user is\npresented with a simple interface and experience, instead of requiring\nthe use of a command line application."),(0,o.kt)("p",null,"The source code for the Proxxy App and Website can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xx-labs/proxxy"},"here"),"."),(0,o.kt)("p",null,"The following image shows how user metadata is protected when using\nMetaMask with the Proxxy App."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2714).Z,width:"2500",height:"1082"})),(0,o.kt)("p",null,"Infura can still collect metadata, but now this will always be\ninformation about the Relay Server, so there is no way to associate\nsource addresses to user information, thus maintaining the pseudonymity\nproperties provided by the blockchain."),(0,o.kt)("h3",{id:"how-does-the-app-contact-a-relay-server"},"How does the app contact a Relay Server?"),(0,o.kt)("p",null,"The Proxxy App can contact any number of Relay Servers, and the only\ninformation required is the Relay server contact data, which is\ngenerated by the server when connecting to the cMix network."),(0,o.kt)("p",null,"The xx foundation maintains a\n",(0,o.kt)("a",{parentName:"p",href:"https://nx38767.your-storageshare.de/s/8PTGRzoHtxNpHZy"},"file")," with the\ncontact data of active Relay Servers."),(0,o.kt)("p",null,"It's important to note that even if the xx foundation was malicious, and\nchanged the contact information of the Relay Servers, user's metadata is\nSTILL PROTECTED by cMix. This can be seen in the image above, as the\nRelay Server can only pick up messages from the cMix network, which have\nbeen stripped of all metadata."),(0,o.kt)("p",null,"In other words, malicious Relay Servers cannot gather user metadata over\nthe cMix network. This is a clear contrast to some privacy protecting\ntechnologies, which rely on a direct connection with a relay server.\nWhen a wallet does not use cMix and directly connects to a relay server,\na malicious relay server provider will be able to gather user metadata,\nthe same as an RPC provider."),(0,o.kt)("h2",{id:"supported-networks"},"Supported Networks"),(0,o.kt)("p",null,"Currently, the following networks are supported by Proxxy."),(0,o.kt)("p",null,"Mainnets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethereum"),(0,o.kt)("li",{parentName:"ul"},"Avalanche C-Chain"),(0,o.kt)("li",{parentName:"ul"},"Polygon"),(0,o.kt)("li",{parentName:"ul"},"Binance Smart Chain (also known as BSC or BNB)"),(0,o.kt)("li",{parentName:"ul"},"Astar"),(0,o.kt)("li",{parentName:"ul"},"Moonbeam"),(0,o.kt)("li",{parentName:"ul"},"Fantom"),(0,o.kt)("li",{parentName:"ul"},"Arbitrum (ETH L2)"),(0,o.kt)("li",{parentName:"ul"},"Optimism (ETH L2)"),(0,o.kt)("li",{parentName:"ul"},"Celo"),(0,o.kt)("li",{parentName:"ul"},"Aurora"),(0,o.kt)("li",{parentName:"ul"},"Shiden"),(0,o.kt)("li",{parentName:"ul"},"Moonriver")),(0,o.kt)("p",null,"Testnets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ethereum Goerli"),(0,o.kt)("li",{parentName:"ul"},"Ethereum Sepolia"),(0,o.kt)("li",{parentName:"ul"},"Avalanche Fuji C-Chain"),(0,o.kt)("li",{parentName:"ul"},"Polygon Mumbai"),(0,o.kt)("li",{parentName:"ul"},"Binance Smart Chain Testnet"),(0,o.kt)("li",{parentName:"ul"},"Fantom Testnet"),(0,o.kt)("li",{parentName:"ul"},"Celo Alfajores"),(0,o.kt)("li",{parentName:"ul"},"Aurora Testnet")),(0,o.kt)("p",null,"Support for any more EVM based networks can be added easily on demand,\nvia the xxfoundation canny\n",(0,o.kt)("a",{parentName:"p",href:"https://xxfoundation.canny.io/proxxy?selectedCategory=supported-networks"},"page"),"."),(0,o.kt)("h2",{id:"metamask-recommendations"},"Metamask Recommendations"),(0,o.kt)("p",null,"Before setting up Proxxy with MetaMask, it is recommended to disable\nmultiple settings that reduce the user's privacy."),(0,o.kt)("p",null,"In order to disable these settings, open your MetaMask wallet, go to\nSettings -> Security & Privacy and disable the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Show balance and token price checker"),(0,o.kt)("li",{parentName:"ul"},"Show incoming transactions"),(0,o.kt)("li",{parentName:"ul"},"Autodetect tokens"),(0,o.kt)("li",{parentName:"ul"},"Batch account balance requests"),(0,o.kt)("li",{parentName:"ul"},"Participate in MetaMetrics")),(0,o.kt)("h2",{id:"download-and-install"},"Download and Install"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Proxxy app is available for Windows, Linux and Mac machines."),"\n",(0,o.kt)("strong",{parentName:"p"},"Refer to the detailed instructions below for your operating\nsystem.")),(0,o.kt)("h3",{id:"windows-instructions"},"Windows Instructions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the Proxxy file for Windows\n",(0,o.kt)("a",{parentName:"p",href:"https://nx38767.your-storageshare.de/s/wYsHnZZKZqMZXxW/download?path=%2F&files=Proxxy-win-x64.exe"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the file browser, navigate to the folder where the\napplication was downloaded to and double-click the file.\n",(0,o.kt)("img",{src:n(1662).Z,width:"735",height:"533"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You may get a notice saying "Windows protected your PC"\npreventing you from running the program. This is common with\nnewer applications that have not yet been registered with\nWindows OS. To get past the SmartScreen filter, click on the\n"',(0,o.kt)("em",{parentName:"p"},'More info"')," link.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{src:n(7260).Z,width:"664",height:"625"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, click the ",(0,o.kt)("em",{parentName:"p"},"Run anyway")," button and the setup will\nlaunch.\n",(0,o.kt)("img",{src:n(2683).Z,width:"662",height:"621"})))),(0,o.kt)("h3",{id:"macos-instructions"},"macOS Instructions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the binary for macOS and for your CPU architecture:\n",(0,o.kt)("a",{parentName:"li",href:"https://nx38767.your-storageshare.de/s/wYsHnZZKZqMZXxW/download?path=%2F&files=Proxxy-mac-x64.zip"},"x64"),"\nor\n",(0,o.kt)("a",{parentName:"li",href:"https://nx38767.your-storageshare.de/s/wYsHnZZKZqMZXxW/download?path=%2F&files=Proxxy-mac-arm64.zip"},"arm64"),',\nwhich you can check on the "About This Mac" page. The Intel\nversion (x64) will work on Apple Silicon devices (arm64) as\nwell.'),(0,o.kt)("li",{parentName:"ol"},"Open the Finder, head to Downloads, and double click on the\nfile to unzip the application.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(680).Z,width:"1836",height:"880"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now that you have the Proxxy application unzipped, you can\ndrag it to the ",(0,o.kt)("em",{parentName:"li"},"Applications")," folder on the left side of the\nfinder.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3253).Z,width:"1838",height:"870"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("em",{parentName:"li"},"Applications")," folder, find the ",(0,o.kt)("em",{parentName:"li"},"Proxxy")," app in\nthe application list, and double click to open.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8743).Z,width:"1824",height:"868"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"A warning will appear saying that the developer cannot be\nverified. Click the ",(0,o.kt)("em",{parentName:"li"},"OK b"),"utton. This warning might look\ndifferent on older macOS versions, which could have a\n",(0,o.kt)("em",{parentName:"li"},"Cancel")," button. If so, press that button instead.\n",(0,o.kt)("img",{src:n(4423).Z,width:"259",height:"306"})),(0,o.kt)("li",{parentName:"ol"},"Next, click on the Apple icon in the top left corner of your\nscreen in the menu bar. In the drop-down menu, select System\n",(0,o.kt)("em",{parentName:"li"},"Preferences\u2026"),".\n",(0,o.kt)("img",{src:n(6121).Z,width:"450",height:"352"}),'If\nyour machine is running macOS Ventura (version 13 and up),\nyou should select "System Settings..."\ninstead.',(0,o.kt)("img",{src:n(7395).Z,width:"404",height:"261"})),(0,o.kt)("li",{parentName:"ol"},"The System Preferences window will show up. Click on\n",(0,o.kt)("em",{parentName:"li"},"Security & Privacy"),".\n",(0,o.kt)("img",{src:n(5515).Z,width:"764",height:"777"}),'If\nyour machine is running macOS Ventura (version 13 and up),\nthe menu is now called "Privacy &\nSecurity"',(0,o.kt)("img",{src:n(5927).Z,width:"713",height:"621"})),(0,o.kt)("li",{parentName:"ol"},"Scroll down on the settings until you find a prompt where it\nsays ",(0,o.kt)("em",{parentName:"li"},'"Proxxy" was blocked\u2026'),", click the ",(0,o.kt)("em",{parentName:"li"},"Open Anyway"),"\nbutton.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3666).Z,width:"719",height:"620"})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"You might be prompted to insert your password or use TouchID\nin order to confirm this action.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4597).Z,width:"705",height:"621"})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"In the window that opens, click the ",(0,o.kt)("em",{parentName:"li"},"Open")," button and the\nProxxy app will launch.\n",(0,o.kt)("img",{src:n(1727).Z,width:"256",height:"381"})),(0,o.kt)("li",{parentName:"ol"},"When launching the app for the first time after unblocking\nit in the Security settings in some machines, it will stay\nblack and not load. If this happens, close the app and open\nit again. It should now work.")),(0,o.kt)("h3",{id:"linux-instructions"},"Linux instructions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the file, according to your CPU architecture:\n",(0,o.kt)("a",{parentName:"p",href:"https://nx38767.your-storageshare.de/s/wYsHnZZKZqMZXxW/download?path=%2F&files=Proxxy-linux-x64"},"x64"),"\nor\n",(0,o.kt)("a",{parentName:"p",href:"https://nx38767.your-storageshare.de/s/wYsHnZZKZqMZXxW/download?path=%2F&files=Proxxy-linux-arm64"},"arm64"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the defualt file manager (Ex. Gnome/Files, KDE/Dolphin,\netc.).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse to the location of the file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right click the file and select "Properties".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'A window will appear, (Example of Gnome/Files shown below)\nselect the "Permissions" tab, check the "Execute: Allow\nexecuting file as program" box and close the window.\n',(0,o.kt)("img",{src:n(7244).Z,width:"439",height:"436"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can now launch the ",(0,o.kt)("em",{parentName:"p"},"Proxxy")," application by\ndouble-clicking the file right from the file manager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After the App launches, head back to the Proxxy\n",(0,o.kt)("a",{parentName:"p",href:"https://proxxy.xx.network"},"webpage")," and follow the rest of the\ninstructions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If you are using the Brave browser, please note that you need to\ndisable Brave Shield in order to be able to connect the proxxy\nwebpage to the app.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(9209).Z,width:"874",height:"1519"})))),(0,o.kt)("references",null),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://support.metamask.io/hc/en-us/articles/10992445334555-Does-MetaMask-collect-my-personal-data-"},"https://support.metamask.io/hc/en-us/articles/10992445334555-Does-MetaMask-collect-my-personal-data-"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},1662:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Downloaded_Proxxy_Exe_file-db94e114fda86388dc4feb7dfc2fc731.png"},5927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Macos_PrivacyAndSecurity-08a4927285f3d9d0350ac3a3d0b2a58b.png"},2714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MetaMask_with_Proxxy-8acd7b2e7d177a7f03749c43685c0fe4.png"},7260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/More_Info-fc5732662adbafbc0dcea39a83d2fae1.png"},6121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Open_System_Preferences_from_Apple_Menu-49460f1dfb9adf6d605957686fcbc64c.png"},3666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Open_anyway-9aef85b52a7223bc949d802c0c2331f4.png"},1727:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Open_proxxy-6b782075fd805496b4663a7ad7e14407.png"},9209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Proxxy-5c6966cc3d3ffeeb53e677cfeca1ac63.png"},8743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Proxxy_in_applications-0db86178e01f7212f37fa6827d8791b1.png"},3253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Proxxy_to_applications_folder-a785447c193acfce744ff543ed6e9f66.png"},4423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Proxxy_warning-4e4fbae983611f5e227f6318b1fdd64a.png"},6144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Regular_MetaMask-e73e278ca41dac8530729139de6e09f3.png"},2683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Run_Anyway-21dbd9bd64878b269a54bad606f575a0.png"},5515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Security_&_Privacy_in_System_Preferences-53827b34fe017aeac7dc01248166df2d.png"},7395:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/System_settings-fff16bc2f9c6a58ae739013282e17b53.png"},4597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Touchid_confirm-200be655a633b96696fdbf3e57e273ff.png"},680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Unzip_proxxy-8a84b834cdad0fcd23dfa63130987491.png"},7244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linux+x-35ce033e3d006817e931a1e215676c3d.png"}}]);