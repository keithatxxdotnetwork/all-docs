"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[8910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},a="10. cMix Options",s={unversionedId:"node/node-configuration/node-config",id:"node/node-configuration/node-config",title:"10. cMix Options",description:"In this step you will edit the cmix.yaml configuration file.",source:"@site/docs/node/node-configuration/10-node-config.md",sourceDirName:"node/node-configuration",slug:"/node/node-configuration/node-config",permalink:"/all-docs/docs/node/node-configuration/node-config",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"9. Generate cMix TLS Credentials",permalink:"/all-docs/docs/node/node-configuration/generate-creds"},next:{title:"11. xx Network System Services",permalink:"/all-docs/docs/node/node-configuration/node-services-config"}},d={},c=[{value:"Edit the yaml file",id:"edit-the-yaml-file",level:2},{value:"Set the database password",id:"set-the-database-password",level:3},{value:"\ud83c\udf9e\ufe0f Demonstration Video",id:"\ufe0f-demonstration-video",level:2}],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-cmix-options"},"10. cMix Options"),(0,r.kt)("p",null,"In this step you will edit the cmix.yaml configuration file. "),(0,r.kt)("p",null,"In most cases, you will only need to set the correct database password at this point."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Default cmix.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'##\n# cMix Configuration File\n##\n\n# Toggles use of the GPU. (Default true)\nuseGPU: true\n\n# Level of debugging to print (0 = info, 1 = debug, >1 = trace). (Default info)\nlogLevel: 0\n\ncmix:\n  paths:\n    # Path where an error file will be placed in the event of a fatal error.\n    # This path is used by the Wrapper Script. (Required)\n    errOutput: "/opt/xxnetwork/log/cmix-err.log"\n    # Path to where the identity file (IDF) is saved. The IDF stores the Node\'s\n    # network identity. This is used by the wrapper management script. (Required)\n    idf: "/opt/xxnetwork/cred/cmix-IDF.json"\n    # Path to the self-signed TLS certificate for cMix. Expects PEM format.\n    # (Required)\n    cert: "/opt/xxnetwork/cred/cmix-cert.crt"\n    # Path to the private key associated with the self-signed TLS certificate.\n    # (Required)\n    key: "/opt/xxnetwork/cred/cmix-key.key"\n    # Path where log file will be saved. (Default "log/cmix.log")\n    log: "/opt/xxnetwork/log/cmix.log"\n  # Port that cMix will communicate on. (Required)\n  port: 11420\n  # Local IP address of the Node, used for internal listening. Expects an IPv4\n  # address without a port. (default "0.0.0.0")\n  # WARNING: Do not modify this option unless explicitly required.\n  #listeningAddress: "0.0.0.0"\n  # The public IPv4 address of the Node, as reported to the network. When not\n  # set, external IP address lookup services are used to set this value. If a\n  # port is not included, then the port from the port flag is used instead.\n  # WARNING: Do not modify this option unless explicitly required.\n  #overridePublicIP: "1.2.3.4"\n  # If set, then it is used to override the internal IP address used to contact\n  # yourself. Expects an IPv4 address with or without a port. If no port is\n  # included, then the port from the port flag is used.\n  # WARNING: Do not modify this option unless explicitly required.\n  #overrideInternalIP: "127.0.0.1"\n\n# Information to connect to the Postgres database storing keys. (Required)\ndatabase:\n  name: "cmix_node"\n  address: "0.0.0.0:5432"\n  username: "cmix"\n  password: "[password for database]"\n\n# Information to communicate with this Node\'s Gateway.\ngateway:\n  paths:\n    # Path to the self-signed TLS certificate for Gateway. Expects PEM format.\n    # (Required)\n    cert: "/opt/xxnetwork/cred/gateway-cert.crt"\n\nscheduling:\n  paths:\n    # Path to the self-signed TLS certificate for the Scheduling server.\n    # Expects PEM format. (Required)\n    cert: "/opt/xxnetwork/cred/scheduling-cert.crt"\n  # Partial IP Address of the network, provided by xx network. (Required)\n  address: "mainnet.cmix.rip:11420"\n\nmetrics:\n  # Path to store metrics logs.\n  log: "/opt/xxnetwork/log/metrics.log"\n'))),(0,r.kt)("h2",{id:"edit-the-yaml-file"},"Edit the yaml file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"nano /opt/xxnetwork/config/cmix.yaml\n")),(0,r.kt)("h3",{id:"set-the-database-password"},"Set the database password"),(0,r.kt)("p",null,"In the previous step, ",(0,r.kt)("a",{parentName:"p",href:"node-database#set-the-password-for-the-user-named-cmix"},"cMix Node Database Configuration"),", you set the password for the PostgreSQL user, ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix"),".\nReplace ",(0,r.kt)("inlineCode",{parentName:"p"},"[password for database]")," with the password you set earlier. Ex. If you had set the password to ",(0,r.kt)("inlineCode",{parentName:"p"},"1234abcd")," the file should read ",(0,r.kt)("inlineCode",{parentName:"p"},'"1234abcd"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Information to connect to the Postgres database storing keys. (Required)\ndatabase:\n  name: "cmix_node"\n  address: "0.0.0.0:5432"\n  username: "cmix"\n  password: "[password for database]"\n')),(0,r.kt)("h2",{id:"\ufe0f-demonstration-video"},"\ud83c\udf9e\ufe0f ",(0,r.kt)("a",{parentName:"h2",href:"https://www.youtube.com/watch?v=U4obVlHVxvw&t=377s"},"Demonstration Video")))}u.isMDXComponent=!0}}]);