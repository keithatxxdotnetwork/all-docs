"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[7190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,p=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(p,r(r({ref:t},d),{},{components:n})):a.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r=void 0,l={unversionedId:"wiki/dynamicDNS",id:"wiki/dynamicDNS",title:"dynamicDNS",description:"Dynamic DNS (DDNS) is a system that automatically updates DNS records",source:"@site/docs/wiki/dynamicDNS.md",sourceDirName:"wiki",slug:"/wiki/dynamicDNS",permalink:"/all-docs/docs/wiki/dynamicDNS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cryptoAndNetPrimitives",permalink:"/all-docs/docs/wiki/cryptoAndNetPrimitives"},next:{title:"e2e-xxm",permalink:"/all-docs/docs/wiki/e2e-xxm"}},s={},c=[{value:"Setting the Domain Name on cMix Node",id:"setting-the-domain-name-on-cmix-node",level:2},{value:"Update the Node",id:"update-the-node",level:3},{value:"Update the Gateway",id:"update-the-gateway",level:3},{value:"Setting the Domain Name on cMix Gateway",id:"setting-the-domain-name-on-cmix-gateway",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dynamic DNS (DDNS) is a system that automatically updates DNS records\nwhen an IP address changes. It allows you to connect to a server using a\ndomain name without worrying that its dynamic IP address may change."),(0,o.kt)("p",null,"Entities on the cMix network communicate using IP addresses or domain\nnames. If a Node or Gateway uses a dynamic IP, then changes in the IP\naddress can result in downtime until the Node operator manually updates\nit. To avoid this downtime, DDNS can be used so that entities contact\nyour Node or Gateway using a domain name rather than an IP address that\ncan change. If an IP address changes, it will quickly be updated in the\nDNS records, and entities on the network should continue to communicate\nwith your Node or Gateway."),(0,o.kt)("p",null,"Once you have set up DDNS and have a domain name linked to your Node or\nGateway, follow the instructions below for configuring the cMix software\nto utilize it."),(0,o.kt)("p",null,"If your Node or Gateway has a static IP address, then there is no need\nto use dynamic DNS. However, you are still welcome to use a domain name\nby following the instructions below."),(0,o.kt)("h2",{id:"setting-the-domain-name-on-cmix-node"},"Setting the Domain Name on cMix Node"),(0,o.kt)("p",null,"To use DDNS on the Node, you must enable on the Node and update the on\nthe Gateway with the Node's domain name."),(0,o.kt)("h3",{id:"update-the-node"},"Update the Node"),(0,o.kt)("p",null,"Follow the instructions below on the Node machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the cMix configuration file."),(0,o.kt)("li",{parentName:"ol"},"Use the down key to navigate to the line with (it will be under ",">"," )\nand uncomment it by deleting the prepending the line. Replace the\nplaceholder IP address with the domain name for your cMix Node.",(0,o.kt)("ol",null,(0,o.kt)("li",null)),(0,o.kt)("p",null,"Once the change is made, save the file by pressing , and when prompted\nto save the buffer, press . Finally, when prompted with the file name,\npress .")),(0,o.kt)("li",null,(0,o.kt)("p",null,"To activate the change, restart the cMix service."))),(0,o.kt)("h3",{id:"update-the-gateway"},"Update the Gateway"),(0,o.kt)("p",null,"Follow the instructions below on the Gateway machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the Gateway configuration file."),(0,o.kt)("li",{parentName:"ol"},"Use the down key to navigate to the line with and replace the IP\naddress with the domain name and port for your cMix Node."),(0,o.kt)("li",{parentName:"ol"},"Once the change is made, save the file by pressing , and when\nprompted to save the buffer, press . Finally, when prompted with the\nfile name, press ."),(0,o.kt)("li",{parentName:"ol"},"To activate the change, restart the cMix service.")),(0,o.kt)("h2",{id:"setting-the-domain-name-on-cmix-gateway"},"Setting the Domain Name on cMix Gateway"),(0,o.kt)("p",null,"To use DDNS on the Gateway, you must enable overridePublicIP and\nconfigure it with the Gateway's domain name."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the Gateway configuration file."),(0,o.kt)("li",{parentName:"ol"},"Use the down key to navigate to the line with (it should be at the\nbottom) and uncomment it by deleting the prepending the line. Then\nreplace the placeholder IP address with the domain name for your\ncMix Gateway."),(0,o.kt)("li",{parentName:"ol"},"Once the change is made, save the file by pressing , and when\nprompted to save the buffer, press . Finally, when prompted with the\nfile name, press ."),(0,o.kt)("li",{parentName:"ol"},"To activate the change, restart the cMix service.")))}u.isMDXComponent=!0}}]);