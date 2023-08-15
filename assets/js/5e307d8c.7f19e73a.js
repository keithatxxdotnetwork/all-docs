"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7},s="7. cMix Node Database Configuration",i={unversionedId:"node/node-configuration/node-database",id:"node/node-configuration/node-database",title:"7. cMix Node Database Configuration",description:"In this step you will add a PostgreSQL user, set the user's password and create the node database.",source:"@site/docs/node/node-configuration/7-node-database.md",sourceDirName:"node/node-configuration",slug:"/node/node-configuration/node-database",permalink:"/all-docs/docs/node/node-configuration/node-database",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. TCP Network Settings",permalink:"/all-docs/docs/node/node-configuration/tcp-settings"},next:{title:"8. xx Network Node Tarball",permalink:"/all-docs/docs/node/node-configuration/node-tarballs"}},d={},l=[{value:"Create the PostgreSQL user named <code>cmix</code>",id:"create-the-postgresql-user-named-cmix",level:2},{value:"Set the password for the user named <code>cmix</code>.",id:"set-the-password-for-the-user-named-cmix",level:3},{value:"Create the <code>cmix_node</code> database",id:"create-the-cmix_node-database",level:2},{value:"Verify the <code>cmix_node</code> database",id:"verify-the-cmix_node-database",level:2},{value:"Connect to the database",id:"connect-to-the-database",level:3},{value:"View the database",id:"view-the-database",level:3},{value:"Disconnect from the database",id:"disconnect-from-the-database",level:3},{value:"\ud83c\udf9e\ufe0f Demonstration Video",id:"\ufe0f-demonstration-video",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"7-cmix-node-database-configuration"},"7. cMix Node Database Configuration"),(0,r.kt)("p",null,"In this step you will add a PostgreSQL user, set the user's password and create the node database. "),(0,r.kt)("h2",{id:"create-the-postgresql-user-named-cmix"},"Create the PostgreSQL user named ",(0,r.kt)("inlineCode",{parentName:"h2"},"cmix")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"sudo -u postgres createuser --createdb --pwprompt cmix\n")),(0,r.kt)("h3",{id:"set-the-password-for-the-user-named-cmix"},"Set the password for the user named ",(0,r.kt)("inlineCode",{parentName:"h3"},"cmix"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sample Output"',title:'"Sample','Output"':!0},"Enter password for new role: \nEnter it again: \n")),(0,r.kt)("p",null,"\u26a0\ufe0f Make a note of this password. It will be required in a later step, ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"node-config#set-the-database-password"},"cMix Options"))),(0,r.kt)("h2",{id:"create-the-cmix_node-database"},"Create the ",(0,r.kt)("inlineCode",{parentName:"h2"},"cmix_node")," database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"sudo -u postgres createdb -O cmix cmix_node --encoding='utf-8' --locale='C.UTF-8' --template='template0'\n")),(0,r.kt)("h2",{id:"verify-the-cmix_node-database"},"Verify the ",(0,r.kt)("inlineCode",{parentName:"h2"},"cmix_node")," database"),(0,r.kt)("h3",{id:"connect-to-the-database"},"Connect to the database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"psql -U cmix -d cmix_node -h 0.0.0.0 -p 5432\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sample Output"',title:'"Sample','Output"':!0},'Password for user cmix: \npsql (12.13 (Ubuntu 12.13-0ubuntu0.20.04.1))\nSSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384, bits: 256, compression: off)\nType "help" for help.\n\ncmix_node=>\n')),(0,r.kt)("p",null,"You are now connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix_node")," database as ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix"),". Note the command-line prompt, ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix_node=>")),(0,r.kt)("h3",{id:"view-the-database"},"View the database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"\\l\n")),(0,r.kt)("p",null,"You can see the presence of ",(0,r.kt)("inlineCode",{parentName:"p"},"cmix_node"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sample Output"',title:'"Sample','Output"':!0},"                                  List of databases\n   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   \n-----------+----------+----------+-------------+-------------+-----------------------\n cmix_node | cmix     | UTF8     | C.UTF-8     | C.UTF-8     | \n postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | \n template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +\n           |          |          |             |             | postgres=CTc/postgres\n template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +\n           |          |          |             |             | postgres=CTc/postgres\n(4 rows)\n\ncmix_node=> \n")),(0,r.kt)("h3",{id:"disconnect-from-the-database"},"Disconnect from the database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Copy and run ..."',title:'"Copy',and:!0,run:!0,'..."':!0},"\\quit\n")),(0,r.kt)("p",null,"You are now disconnected from the database and should see the terminal command prompt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Sample Output"',title:'"Sample','Output"':!0},"ubuntu@node:~$ \n")),(0,r.kt)("h2",{id:"\ufe0f-demonstration-video"},"\ud83c\udf9e\ufe0f ",(0,r.kt)("a",{parentName:"h2",href:"https://www.youtube.com/watch?v=U4obVlHVxvw&t=254s"},"Demonstration Video")))}u.isMDXComponent=!0}}]);