"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:10},i="10. Gateway Options",s={unversionedId:"node/gateway-configuration/gateway-config",id:"node/gateway-configuration/gateway-config",title:"10. Gateway Options",description:"In this step you will edit the gateway.yaml configuration file.",source:"@site/docs/node/gateway-configuration/10-gateway-config.md",sourceDirName:"node/gateway-configuration",slug:"/node/gateway-configuration/gateway-config",permalink:"/all-docs/docs/node/gateway-configuration/gateway-config",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. Transfer TLS Credentials",permalink:"/all-docs/docs/node/gateway-configuration/transfer-creds"},next:{title:"11. xx Network System Services",permalink:"/all-docs/docs/node/gateway-configuration/gateway-services-config"}},d={},c=[{value:"Edit the yaml file",id:"edit-the-yaml-file",level:2},{value:"cmixAddress",id:"cmixaddress",level:3},{value:"Set the database password",id:"set-the-database-password",level:3},{value:"\ud83c\udf9e\ufe0f Demonstration Video",id:"\ufe0f-demonstration-video",level:2}],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-gateway-options"},"10. Gateway Options"),(0,r.kt)("p",null,"In this step you will edit the gateway.yaml configuration file."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Default gateway.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'##\n# Gateway Configuration File\n##\n\n# Level of debugging to print (0 = info, 1 = debug, >1 = trace). (Default info)\nlogLevel: 0\n\n# Path where log file will be saved. (Default "log/gateway.log")\nlog: "/opt/xxnetwork/log/gateway.log"\n\n# Port for Gateway to listen on. Gateway must be the only listener on this port.\n# (Required)\nport: 22840\n\n# The IP address of the machine running cMix that the Gateway communicates with.\n# Expects an IPv4 address with a port. (Required)\ncmixAddress: "0.0.0.0:11420"\n\n# Path to where the identity file (IDF) is saved. The IDF stores the Gateway\'s\n# network identity. This is used by the wrapper management script. (Required)\nidfPath: "/opt/xxnetwork/cred/gateway-IDF.json"\n\n# Path to the private key associated with the self-signed TLS certificate.\n# (Required)\nkeyPath: "/opt/xxnetwork/cred/gateway-key.key"\n\n# Path to the self-signed TLS certificate for Gateway. Expects PEM format.\n# (Required)\ncertPath: "/opt/xxnetwork/cred/gateway-cert.crt"\n\n# Path to the self-signed TLS certificate for cMix. Expects PEM format.\n# (Required)\ncmixCertPath: "/opt/xxnetwork/cred/cmix-cert.crt"\n\n# Path to the self-signed TLS certificate for the Scheduling server. Expects\n# PEM format. (Required)\nschedulingCertPath: "/opt/xxnetwork/cred/scheduling-cert.crt"\n\n# Database connection information. (Required)\ndbName: "cmix_gateway"\ndbAddress: "0.0.0.0:5432"\ndbUsername: "cmix"\ndbPassword: "[password for database]"\n\n##\n# WARNING: Do not modify the options below unless explicitly required.\n##\n\n# Local IP address of the Gateway, used for internal listening. Expects an IPv4\n# address without a port. (Default "0.0.0.0")\n#listeningAddress: "0.0.0.0"\n\n# The public IPv4 address of the Gateway, as reported to the network. When not\n# set, external IP address lookup services are used to set this value. If a\n# port is not included, then the port from the port flag is used instead.\n#overridePublicIP: "1.2.3.4"\n'))),(0,r.kt)("h2",{id:"edit-the-yaml-file"},"Edit the yaml file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"nano /opt/xxnetwork/config/gateway.yaml\n")),(0,r.kt)("h3",{id:"cmixaddress"},"cmixAddress"),(0,r.kt)("p",null,"This is the IP address and port number of the node computer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# The IP address of the machine running cMix that the Gateway communicates with.\n# Expects an IPv4 address with a port. (Required)\ncmixAddress: "0.0.0.0:11420"\n')),(0,r.kt)("h3",{id:"set-the-database-password"},"Set the database password"),(0,r.kt)("p",null,"In the previous step, ",(0,r.kt)("a",{parentName:"p",href:"gateway-database#set-the-password-for-the-user-named-cmix"},"cMix Gateway Database Configuration"),", you set the password for the PostgreSQL user, ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix"),".\nReplace ",(0,r.kt)("inlineCode",{parentName:"p"},"[password for database]")," with the password you set earlier. Ex. If you had set the password to ",(0,r.kt)("inlineCode",{parentName:"p"},"1234abcd")," the file should read ",(0,r.kt)("inlineCode",{parentName:"p"},'"1234abcd"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Database connection information. (Required)\ndbName: "cmix_gateway"\ndbAddress: "0.0.0.0:5432"\ndbUsername: "cmix"\ndbPassword: "[password for database]"\n')),(0,r.kt)("h2",{id:"\ufe0f-demonstration-video"},"\ud83c\udf9e\ufe0f ",(0,r.kt)("a",{parentName:"h2",href:"https://www.youtube.com/watch?v=V5_zLI2UTIc&t=430s"},"Demonstration Video")))}u.isMDXComponent=!0}}]);