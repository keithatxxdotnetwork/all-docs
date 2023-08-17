"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1574],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,c=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},i="About",l={unversionedId:"tools/dashboard/dashboard",id:"tools/dashboard/dashboard",title:"About",description:"The above link will bring you to cMix Dashboard Quick View.",source:"@site/docs/tools/dashboard/dashboard.md",sourceDirName:"tools/dashboard",slug:"/tools/dashboard/",permalink:"/all-docs/docs/tools/dashboard/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"api",permalink:"/all-docs/docs/tools/dashboard/api"},next:{title:"Sleeve Wallet Generator",permalink:"/all-docs/docs/category/sleeve-wallet-generator"}},s={},d=[],u={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about"},"About"),(0,r.kt)("h1",{id:"quick-view"},(0,r.kt)("a",{parentName:"h1",href:"https://dashboard.xx.network/"},"Quick View")),(0,r.kt)("p",null,"The above link will bring you to cMix Dashboard Quick View."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mTPS - Shows the average mTPS (cMix Message Transactions per Second) by hour over the last 24 hrs."),(0,r.kt)("li",{parentName:"ul"},"Latency - The delay before a transfer of data begins following an instruction for its transfer."),(0,r.kt)("li",{parentName:"ul"},"Nodes (worldwide) - Here users can see where we have nodes actives from all over the world."),(0,r.kt)("li",{parentName:"ul"},"Total Rounds - Total number of successfully processed rounds since MainNet, ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.xx.network/blocks/1"},"2021.11.17 | 07:01 (UTC)")),(0,r.kt)("li",{parentName:"ul"},"Avg Throughput/Hr - "),(0,r.kt)("li",{parentName:"ul"},"Total Throughput (24hr)"),(0,r.kt)("li",{parentName:"ul"},"Realtime Success Rate (24hr)"),(0,r.kt)("li",{parentName:"ul"},"Precomp Success Rate"),(0,r.kt)("li",{parentName:"ul"},"Completion Time - A list of the 20 most recent rounds and the time at which they finished.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Round Number - Self explanatory."),(0,r.kt)("li",{parentName:"ul"},"Completion Time (UTC) - Completion of the Realtime Phase."))),(0,r.kt)("li",{parentName:"ul"},"24hr mTPS - A chart which shows the hourly mTPS of the past 24 hours."),(0,r.kt)("li",{parentName:"ul"},"Performance - Shows a chart and table of the duration  of the 10 most recent rounds.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Round Number - Self explanatory."),(0,r.kt)("li",{parentName:"ul"},"Precomp Duration - The number of seconds it took to complete the Precomputation phase of the round."),(0,r.kt)("li",{parentName:"ul"},"Realtime Duration - The number of seconds it took to complete the Realtime phase of the round."))),(0,r.kt)("li",{parentName:"ul"},"Active Validators - Shows the number of cMix nodes online of the number of active cMix nodes."),(0,r.kt)("li",{parentName:"ul"},"Min Server Version - The minimum compatible version of the cMix binary."),(0,r.kt)("li",{parentName:"ul"},"Min Gateway Version - The minimum compatible version of the gateway binary."),(0,r.kt)("li",{parentName:"ul"},"Node Status Breakdown - Shows the status of all known cMix nodes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"online - Represents a node is communicating with the network and can be scheduled to run rounds."),(0,r.kt)("li",{parentName:"ul"},"error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error."),(0,r.kt)("li",{parentName:"ul"},"offline - Represents a node is not communicating with the network."),(0,r.kt)("li",{parentName:"ul"},"not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era.")))),(0,r.kt)("h1",{id:"rounds-view"},(0,r.kt)("a",{parentName:"h1",href:"https://dashboard.xx.network/rounds"},"Rounds View")),(0,r.kt)("p",null,"The above link will opens the cMix Dashboard Rounds View."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Round ID - Self explanatory."),(0,r.kt)("li",{parentName:"ul"},"Completion Time - Date and time (UTC) the round ended, whether SUCCESS or TIMEOUT."),(0,r.kt)("li",{parentName:"ul"},"Status",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SUCCESS - The round completed successfully."),(0,r.kt)("li",{parentName:"ul"},"TIMEOUT - The round failed during the Precomputation or Realtime phase."))),(0,r.kt)("li",{parentName:"ul"},"Realtime Duration - Displays the duration of the Realtime phase or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," if the round timed out."),(0,r.kt)("li",{parentName:"ul"},"Batch Size - The number of message slots allocated for the round."),(0,r.kt)("li",{parentName:"ul"},"Precomputation Start Time - The date and time (UTC) the Precomputation phase started."),(0,r.kt)("li",{parentName:"ul"},"Precomputation End Time - The date and time (UTC) the Precomputation phase ended or '-' if the round failed during the Precomputation phase."),(0,r.kt)("li",{parentName:"ul"},"RealTime Start Time - The date and time (UTC) the Realtime phase started or '-' if the round failed during the Precomputation phase."),(0,r.kt)("li",{parentName:"ul"},"RealTime End Time - The date and time (UTC) the Realtime phase ended or '-' if the round failed during the Realtime phase."),(0,r.kt)("li",{parentName:"ul"},"Round End Time - Date and time (UTC) the round ended, whether SUCCESS or TIMEOUT."),(0,r.kt)("li",{parentName:"ul"},"Node (1st, etc) - The position and node ID of all nodes participating in the round.")),(0,r.kt)("h1",{id:"round-view"},(0,r.kt)("a",{parentName:"h1",href:"https://dashboard.xx.network/rounds/1"},"Round View")),(0,r.kt)("p",null,"The above link opens the cMix Dashboard Round View for Round 1 as an example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nodes in the Round - The number of nodes participating in the round."),(0,r.kt)("li",{parentName:"ul"},"Precomp Duration - Displays the duration of the Precomputation phase or ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," if the round failed."),(0,r.kt)("li",{parentName:"ul"},"Realtime Duration - Displays the duration of the Realtime phase or ",(0,r.kt)("inlineCode",{parentName:"li"},"Error")," if the round failed."),(0,r.kt)("li",{parentName:"ul"},"Batch Size - The number of message slots allocated for the round."),(0,r.kt)("li",{parentName:"ul"},"Nodes Worldwide (1, etc) - Lists the position and node ID of all nodes participating in the round and the path is displayed on a world map."),(0,r.kt)("li",{parentName:"ul"},"Precomputation - Displays the start and finish date and time of Precomputation phase or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," if the round failed."),(0,r.kt)("li",{parentName:"ul"},"Real Time - Displays the start and finish date and time of the Realtime phase or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," if the round failed."),(0,r.kt)("li",{parentName:"ul"},"Result",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Success - The round completed successfully."),(0,r.kt)("li",{parentName:"ul"},'Failed - The round failed during the Precomputation or Realtime phase. If the result is "Failed", additional information regarding the failure will be displayed in the form of a log message.')))),(0,r.kt)("h1",{id:"nodes-view"},(0,r.kt)("a",{parentName:"h1",href:"https://dashboard.xx.network/nodes"},"Nodes View")),(0,r.kt)("p",null,"The above link opens the cMix Dashboard Nodes View"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Name (Conditional) - Displays a name if the node operator has "Set on-chain identity" of the validator.'),(0,r.kt)("li",{parentName:"ul"},"ID - The cMix node ID"),(0,r.kt)("li",{parentName:"ul"},'Wallet (Conditional) - Displays the cMix node\'s associated xx Chain validator wallet address only when the validator is an active validator. See "not currently a validator"'),(0,r.kt)("li",{parentName:"ul"},"Status",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"online - Represents a node is communicating with the network and can be scheduled to run rounds."),(0,r.kt)("li",{parentName:"ul"},"error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error."),(0,r.kt)("li",{parentName:"ul"},"offline - Represents a node is not communicating with the network."),(0,r.kt)("li",{parentName:"ul"},"not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era."))),(0,r.kt)("li",{parentName:"ul"},"Bin - Displays the ",(0,r.kt)("a",{parentName:"li",href:"https://xx.network/blog/mainnetgeobins/"},"geographic bin")," of the node."),(0,r.kt)("li",{parentName:"ul"},"ISP - The Internet Service Provider of the node."),(0,r.kt)("li",{parentName:"ul"},"Precomp Failure Rate ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," - Percentage of rounds participated in, monthly to date, which failed during the Precomputation phase."),(0,r.kt)("li",{parentName:"ul"},"Realtime Failure Rate ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," - Percentage of rounds participated in, monthly to date, which failed during the Realtime phase."),(0,r.kt)("li",{parentName:"ul"},"Percent Uptime - Percentage of the time, to date monthly, a node has been online while an active validator.")),(0,r.kt)("h1",{id:"node-view"},(0,r.kt)("a",{parentName:"h1",href:"https://dashboard.xx.network/nodes/c6wptSinakErZHrk0SlgGQXExETPYYLB2CwpLNze6FMC"},"Node View")),(0,r.kt)("p",null,"The above link opens the cMix Dashboard Node View for the cMix node, xx west, as an example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Name (Conditional) - Displays a name if the node operator has "Set on-chain identity" of the validator.'),(0,r.kt)("li",{parentName:"ul"},"Node ID - The cMix node ID"),(0,r.kt)("li",{parentName:"ul"},"Wallet (Conditional) - Displays the cMix node's associated xx Chain validator wallet address only when the validator is an active validator. "),(0,r.kt)("li",{parentName:"ul"},"Status",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"online - Represents a node is communicating with the network and can be scheduled to run rounds."),(0,r.kt)("li",{parentName:"ul"},"error - Represents a node is communicating with the network but cannot be scheduled to run rounds due to an error."),(0,r.kt)("li",{parentName:"ul"},"offline - Represents a node is not communicating with the network."),(0,r.kt)("li",{parentName:"ul"},"not currently a validator - Represents a cMix node's associated xx Chain validator is not validating or was not elected in the current era."))),(0,r.kt)("li",{parentName:"ul"},"Node Metrics - This section can display weekly and monthly metrics via the drop-down menu.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Weekly - Select a week via the drop-down menu to the right."),(0,r.kt)("li",{parentName:"ul"},"Monthly - Select a month via the drop-down menu to the right."))),(0,r.kt)("li",{parentName:"ul"},"Uptime - Percentage of the time online and offline, of selected period, a node has been online while an active validator."),(0,r.kt)("li",{parentName:"ul"},"Round Success Rate ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," - Shows the percentages of successful and failed, by Realtime and Precomputation timeout, rounds participated in, of selected period."),(0,r.kt)("li",{parentName:"ul"},"Round Profile",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Total - Total number of rounds participated in in the selected period."),(0,r.kt)("li",{parentName:"ul"},"Success - Total number of successful rounds participated in in the selected period."),(0,r.kt)("li",{parentName:"ul"},"Realtime Timed Out ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," - Total number of rounds participated in which failed during the Realtime phase in the selected period."),(0,r.kt)("li",{parentName:"ul"},"Total Timed Out ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," - Total number of rounds participated in which failed in the selected period."))),(0,r.kt)("li",{parentName:"ul"},"Precomp Average Duration - Average duration of the Precomputation phase of all rounds participated in in the selected period."),(0,r.kt)("li",{parentName:"ul"},"Realtime Average Duration - Average duration of the Realtime phase of all rounds participated in in the selected period."),(0,r.kt)("li",{parentName:"ul"},'Last 100 Rounds - A list of the last 100 rounds the node has participated in and the result of the round. Or will display, "This node has not participated in any rounds in the last 48 hours..." if the node has been offline for more then 48 hours.')),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"This does not necessarily indicate the particular node is responsible for the failures.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);