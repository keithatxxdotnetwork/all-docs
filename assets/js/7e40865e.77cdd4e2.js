"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[7190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={},i="Dynamic DNS (DDNS)",l={unversionedId:"wiki/dynamicDNS",id:"wiki/dynamicDNS",title:"Dynamic DNS (DDNS)",description:"Dynamic DNS (DDNS) is a system that automatically updates DNS records",source:"@site/docs/wiki/dynamicDNS.md",sourceDirName:"wiki",slug:"/wiki/dynamicDNS",permalink:"/all-docs/docs/wiki/dynamicDNS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cryptographic and Network Primitives",permalink:"/all-docs/docs/wiki/cryptoAndNetPrimitives"},next:{title:"End-to-End Encrypted Messaging in xx Messenger",permalink:"/all-docs/docs/wiki/e2e-xxm"}},d={},s=[{value:"Setting the Domain Name on Node Computer",id:"setting-the-domain-name-on-node-computer",level:2},{value:"Update the <code>cmix.yaml</code> file",id:"update-the-cmixyaml-file",level:3},{value:"Update the <code>gateway.yaml</code> file",id:"update-the-gatewayyaml-file",level:3},{value:"Setting the Domain Name on Gateway Computer",id:"setting-the-domain-name-on-gateway-computer",level:2},{value:"Update the <code>gateway.yaml</code> file",id:"update-the-gatewayyaml-file-1",level:3}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dynamic-dns-ddns"},"Dynamic DNS (DDNS)"),(0,o.kt)("p",null,"Dynamic DNS (DDNS) is a system that automatically updates DNS records\nwhen an IP address changes. It allows you to connect to a server using a\ndomain name without worrying that its dynamic IP address may change."),(0,o.kt)("p",null,"Entities on the cMix network communicate using IP addresses or domain\nnames. If a Node or Gateway uses a dynamic IP, then changes in the IP\naddress can result in downtime until the Node operator manually updates\nit. To avoid this downtime, DDNS can be used so that entities contact\nyour Node or Gateway using a domain name rather than an IP address that\ncan change. If an IP address changes, it will quickly be updated in the\nDNS records, and entities on the network should continue to communicate\nwith your Node or Gateway."),(0,o.kt)("p",null,"Once you have set up DDNS and have a domain name linked to your Node or\nGateway, follow the instructions below for configuring the cMix software\nto utilize it."),(0,o.kt)("p",null,"If your Node or Gateway has a static IP address, then there is no need\nto use dynamic DNS. However, you are still welcome to use a domain name\nby following the instructions below."),(0,o.kt)("h2",{id:"setting-the-domain-name-on-node-computer"},"Setting the Domain Name on Node Computer"),(0,o.kt)("p",null,"To use DDNS on the Node, you must enable ",(0,o.kt)("inlineCode",{parentName:"p"},"overridePublicIP")," on the Node and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"cmixAddress")," on\nthe Gateway with the Node's domain name."),(0,o.kt)("h3",{id:"update-the-cmixyaml-file"},"Update the ",(0,o.kt)("inlineCode",{parentName:"h3"},"cmix.yaml")," file"),(0,o.kt)("p",null,"Follow the instructions below on the Node machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the cMix configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nano /opt/xxnetwork/config/cmix.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Find the line that cotains ",(0,o.kt)("inlineCode",{parentName:"li"},"#overridePublicIP"),". Remove the leading ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," and replace the\nplaceholder IP address with the domain name for your cMix Node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # The public IPv4 address of the Node, as reported to the network. When not\n  # set, external IP address lookup services are used to set this value. If a\n  # port is not included, then the port from the port flag is used instead.\n  # WARNING: Do not modify this option unless explicitly required.\n  overridePublicIP: "yourdomain.com"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the file and exit ",(0,o.kt)("em",{parentName:"p"},"nano")," by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + s"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl +x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To activate the change, restart the cMix service."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl restart xxnetwork-cmix\n")),(0,o.kt)("h3",{id:"update-the-gatewayyaml-file"},"Update the ",(0,o.kt)("inlineCode",{parentName:"h3"},"gateway.yaml")," file"),(0,o.kt)("p",null,"Follow the instructions below on the Gateway machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the Gateway configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nano /opt/xxnetwork/config/gateway.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use the down key to navigate to the line with ",(0,o.kt)("inlineCode",{parentName:"li"},"cmixAddress:")," and replace the IP\naddress with the domain name and port for your cMix Node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# The IP address of the machine running cMix that the Gateway communicates with.\n# Expects an IPv4 address with a port. (Required)\ncmixAddress: "yourdomain.com:11420"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the file and exit ",(0,o.kt)("em",{parentName:"p"},"nano")," by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + s"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl +x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To activate the change, restart the Gateway service."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl restart xxnetwork-gateway\n")),(0,o.kt)("h2",{id:"setting-the-domain-name-on-gateway-computer"},"Setting the Domain Name on Gateway Computer"),(0,o.kt)("h3",{id:"update-the-gatewayyaml-file-1"},"Update the ",(0,o.kt)("inlineCode",{parentName:"h3"},"gateway.yaml")," file"),(0,o.kt)("p",null,"To use DDNS on the Gateway, you must enable ",(0,o.kt)("inlineCode",{parentName:"p"},"overridePublicIP")," and\nconfigure it with the Gateway's domain name."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open up the Gateway configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nano /opt/xxnetwork/config/gateway.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Find the line that cotains ",(0,o.kt)("inlineCode",{parentName:"li"},"#overridePublicIP"),". Remove the leading ",(0,o.kt)("inlineCode",{parentName:"li"},"#")," and replace the\nplaceholder IP address with the domain name for your cMix Node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # The public IPv4 address of the Node, as reported to the network. When not\n  # set, external IP address lookup services are used to set this value. If a\n  # port is not included, then the port from the port flag is used instead.\n  # WARNING: Do not modify this option unless explicitly required.\n  overridePublicIP: "yourdomain.com"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the file and exit ",(0,o.kt)("em",{parentName:"p"},"nano")," by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + s"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl +x"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To activate the change, restart the Gateway service."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl restart xxnetwork-gateway\n")))}m.isMDXComponent=!0}}]);