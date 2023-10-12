"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>x});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,x=p["".concat(c,".").concat(d)]||p[d]||k[d]||o;return n?r.createElement(x,i(i({ref:t},u),{},{components:n})):r.createElement(x,i({ref:t},u))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:11},i="11. xx Network System Services",s={unversionedId:"node/gateway-configuration/gateway-services-config",id:"node/gateway-configuration/gateway-services-config",title:"11. xx Network System Services",description:"In this step you will configure, enable and start the chain and gateway systemd services.",source:"@site/docs/node/gateway-configuration/11-gateway-services-config.md",sourceDirName:"node/gateway-configuration",slug:"/node/gateway-configuration/gateway-services-config",permalink:"/all-docs/docs/node/gateway-configuration/gateway-services-config",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"10. Gateway Options",permalink:"/all-docs/docs/node/gateway-configuration/gateway-config"},next:{title:"Staking the Validator",permalink:"/all-docs/docs/category/staking-the-validator"}},c={},l=[{value:"Configure xxnetwork-chain service",id:"configure-xxnetwork-chain-service",level:2},{value:"Set the correct user",id:"set-the-correct-user",level:3},{value:"Save the xxnetwork-chain.service file and exit nano.",id:"save-the-xxnetwork-chainservice-file-and-exit-nano",level:3},{value:"Configure xxnetwork-gateway service",id:"configure-xxnetwork-gateway-service",level:2},{value:"Set the correct user",id:"set-the-correct-user-1",level:3},{value:"Save the xxnetwork-gateway.service file and exit nano.",id:"save-the-xxnetwork-gatewayservice-file-and-exit-nano",level:3},{value:"Link System Services",id:"link-system-services",level:2},{value:"Enable System Services",id:"enable-system-services",level:2},{value:"Start System Services",id:"start-system-services",level:2},{value:"Check services status",id:"check-services-status",level:2}],u={toc:l},p="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11-xx-network-system-services"},"11. xx Network System Services"),(0,a.kt)("p",null,"In this step you will configure, enable and start the chain and gateway systemd services."),(0,a.kt)("h2",{id:"configure-xxnetwork-chain-service"},"Configure xxnetwork-chain service"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Default xxnetwork-chain.service file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Job that starts the xx network chain binary\nAfter=local-fs.target network-online.target network.target\nWants=local-fs.target network-online.target network.target\n\n[Service]\nUser=ubuntu\nType=simple\n\nExecStart=/bin/bash -c \"/opt/xxnetwork/bin/xxnetwork-chain --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' --base-path /opt/xxnetwork/db --port 15974 --ws-port 63007  >> /opt/xxnetwork/log/chain.log 2>&1\"\n\nLimitNOFILE=infinity\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,a.kt)("h3",{id:"set-the-correct-user"},"Set the correct user"),(0,a.kt)("p",null,"Confirm your username."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"whoami\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano /opt/xxnetwork/xxnetwork-chain.service\n")),(0,a.kt)("p",null,"The default user is ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu"),". Change this to your username."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User=ubuntu\n")),(0,a.kt)("h3",{id:"save-the-xxnetwork-chainservice-file-and-exit-nano"},"Save the xxnetwork-chain.service file and exit nano."),(0,a.kt)("p",null,"Press Ctrl+s then Ctrl+x"),(0,a.kt)("h2",{id:"configure-xxnetwork-gateway-service"},"Configure xxnetwork-gateway service"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Default xxnetwork-gateway.service file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Job that starts the gateway Wrapper service\nStartLimitIntervalSec=5\nStartLimitBurst=10\nAfter=local-fs.target network-online.target network.target\nWants=local-fs.target network-online.target network.target\n\n[Service]\nUser=ubuntu\nType=simple\n\nExecStart=/opt/xxnetwork/gateway-wrapper.py \\\n--wrapper-log /opt/xxnetwork/log/gateway-wrapper.log \\\n--cmd-dir /opt/xxnetwork/log/gateway-cmd \\\n--gateway \\\n--binary-path /opt/xxnetwork/bin/xxnetwork-gateway \\\n--config-path /opt/xxnetwork/config/gateway.yaml \\\n--id-path /opt/xxnetwork/cred/gateway-IDF.json \\\n--log-path /opt/xxnetwork/log/gateway.log \\\n--management-cert /opt/xxnetwork/cred/network-management.crt \\\n--s3-access-key KEY \\\n--s3-secret SECRET \\\n--s3-region us-west-1 \\\n--s3-management-bucket elixxir-management-mainnet \\\n--s3-bin-bucket elixxir-bins \\\n--cloudwatch-log-group xxnetwork-logs-mainnet \\\n--tmp-dir /tmp/xxnetwork/gateway/\n\nLimitNOFILE=infinity\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n"))),(0,a.kt)("h3",{id:"set-the-correct-user-1"},"Set the correct user"),(0,a.kt)("p",null,"Confirm your username."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"whoami\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nano /opt/xxnetwork/xxnetwork-gateway.service\n")),(0,a.kt)("p",null,"The default user is ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu"),". Change this to your username."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User=ubuntu\n")),(0,a.kt)("h3",{id:"save-the-xxnetwork-gatewayservice-file-and-exit-nano"},"Save the xxnetwork-gateway.service file and exit nano."),(0,a.kt)("p",null,"Press Ctrl+s then Ctrl+x"),(0,a.kt)("h2",{id:"link-system-services"},"Link System Services"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ln -s /opt/xxnetwork/xxnetwork-gateway.service /etc/systemd/system\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ln -s /opt/xxnetwork/xxnetwork-chain.service /etc/systemd/system\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reexec\n")),(0,a.kt)("h2",{id:"enable-system-services"},"Enable System Services"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl enable xxnetwork-chain.service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl enable xxnetwork-gateway.service\n")),(0,a.kt)("h2",{id:"start-system-services"},"Start System Services"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl start xxnetwork-chain.service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl start xxnetwork-gateway.service\n")),(0,a.kt)("h2",{id:"check-services-status"},"Check services status"),(0,a.kt)("p",null,"Both services should be ",(0,a.kt)("inlineCode",{parentName:"p"},"Active: active (running) since [some day date and time]; [duration] ago"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl status xxnetwork-chain\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl status xxnetwork-gateway\n")))}k.isMDXComponent=!0}}]);