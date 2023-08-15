"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,f=d["".concat(l,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:9},c="9. Transfer TLS Credentials",i={unversionedId:"node/gateway-configuration/transfer-creds",id:"node/gateway-configuration/transfer-creds",title:"9. Transfer TLS Credentials",description:"Three files that were genereated during the setup of the Node computer must be copied to the gateway computer, the Gateway credentials gateway-cert.crt and gateway-key.key, and the cMix public certificate, cmix-cert.crt.",source:"@site/docs/node/gateway-configuration/9-transfer-creds.md",sourceDirName:"node/gateway-configuration",slug:"/node/gateway-configuration/transfer-creds",permalink:"/all-docs/docs/node/gateway-configuration/transfer-creds",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. xx Network Gateway Tarball",permalink:"/all-docs/docs/node/gateway-configuration/gateway-tarballs"},next:{title:"10. Gateway Options",permalink:"/all-docs/docs/node/gateway-configuration/gateway-config"}},l={},p=[],u={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"9-transfer-tls-credentials"},"9. Transfer TLS Credentials"),(0,a.kt)("p",null,"Three files that were genereated during the setup of the Node computer must be copied to the gateway computer, the Gateway credentials ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway-cert.crt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway-key.key"),", and the cMix public certificate, ",(0,a.kt)("inlineCode",{parentName:"p"},"cmix-cert.crt"),"."),(0,a.kt)("p",null,"The instructions below assume that you have SSH enabled and configured on your Gateway computer."),(0,a.kt)("p",null,"First, get the address for the Gateway computer."),(0,a.kt)("p",null,"Get the public IP address by running the following command on the Gateway computer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -w "\\n" ipinfo.io/ip \n')),(0,a.kt)("p",null,"Next, you will need the username for the Gateway computer.\nUsing SCP, you will copy the three required files, ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway-cert.crt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway-key.key"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"cmix-cert.crt")," from the node computer to the gateway computer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"scp /opt/xxnetwork/cred/gateway-cert.crt /opt/xxnetwork/cred/gateway-key.key /opt/xxnetwork/cred/cmix-cert.crt [Gateway username]@[Gateway public IP]:/opt/xxnetwork/cred/\n")),(0,a.kt)("p",null,"Sample output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gateway-cert.crt                   100% 2053    60.3KB/s   00:00\ngateway-key.key                    100% 3276    93.0KB/s   00:00\ncmix-cert.crt                      100% 2053    69.3KB/s   00:00\n")),(0,a.kt)("p",null,"Check that all the correct files are in the cred/ directory using ls to list the files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -1 /opt/xxnetwork/cred/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cmix-cert.crt\ngateway-cert.crt\ngateway-key.key\nnetwork-management.crt\nscheduling-cert.crt\n")),(0,a.kt)("p",null,"You should now delete the Gateway's private key, ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway-key.key"),", from the Node computer."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Ensure that the Gateway key was copied correctly to the Gateway and securely backed up before deleting it off the Node computer.")),(0,a.kt)("p",null,"The following should be run on the Node computer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm /opt/xxnetwork/cred/gateway-key.key\n")))}s.isMDXComponent=!0}}]);