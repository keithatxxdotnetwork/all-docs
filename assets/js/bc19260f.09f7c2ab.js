"use strict";(self.webpackChunkxxnetwork_docs=self.webpackChunkxxnetwork_docs||[]).push([[1086],{3685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),r=n(614);const o={sidebar_position:2},s="Getting Started",l={unversionedId:"cmix/xxdk/getting-started",id:"cmix/xxdk/getting-started",title:"Getting Started",description:"This document uses the term \u201ccMix client\u201d to mean a unique user in the cMix network. The terms \u201cclient\u201d and \u201cserver\u201d will distinguish cMix clients based on their roles in a client-server architecture. They are also used interchangeably with \u201cconnect client\u201d and \u201cconnect server,\u201d respectively.",source:"@site/docs/cmix/xxdk/getting-started.md",sourceDirName:"cmix/xxdk",slug:"/cmix/xxdk/getting-started",permalink:"/all-docs/docs/cmix/xxdk/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/all-docs/docs/cmix/xxdk/overview"},next:{title:"API Quick Reference",permalink:"/all-docs/docs/cmix/xxdk/quick-reference"}},c={},d=[{value:"Objectives of This Guide",id:"objectives-of-this-guide",level:2},{value:"Setting Up a cMix Client",id:"setting-up-a-cmix-client",level:2},{value:"Import the xxDK",id:"import-the-xxdk",level:3},{value:"Fetching the NDF",id:"fetching-the-ndf",level:3},{value:"Create a Client Keystore",id:"create-a-client-keystore",level:3},{value:"Load the Client Keystore",id:"load-the-client-keystore",level:3},{value:"Creating Reception Identities",id:"creating-reception-identities",level:3},{value:"Writing Contacts to File",id:"writing-contacts-to-file",level:4},{value:"Starting Network Threads",id:"starting-network-threads",level:3},{value:"Building Client/Server Relationships using Connections",id:"building-clientserver-relationships-using-connections",level:2},{value:"Setting Up a Connect Server",id:"setting-up-a-connect-server",level:2},{value:"Enabling Message Reception",id:"enabling-message-reception",level:3},{value:"Enabling Incoming Connections",id:"enabling-incoming-connections",level:3},{value:"Start the Server",id:"start-the-server",level:3},{value:"Setting Up a Connect Client",id:"setting-up-a-connect-client",level:2},{value:"Create the E2E User Object",id:"create-the-e2e-user-object",level:3},{value:"Connect To the Server",id:"connect-to-the-server",level:3},{value:"Enabling Message Reception",id:"enabling-message-reception-1",level:3},{value:"Sending Messages to the Server",id:"sending-messages-to-the-server",level:3},{value:"Putting It All Together: Sample Scenario",id:"putting-it-all-together-sample-scenario",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This document uses the term \u201ccMix client\u201d to mean a unique user in the cMix network. The terms \u201cclient\u201d and \u201cserver\u201d will distinguish cMix clients based on their roles in a client-server architecture. They are also used interchangeably with \u201cconnect client\u201d and \u201cconnect server,\u201d respectively.")),(0,a.kt)("p",null,"To integrate cMix with your application logic, each instance needs to be connected to the xx cMix network. This begins with creating a new cMix client and registering its identity with the network. Session data is stored in an encrypted key-value (EKV) store containing cryptographic keys and state."),(0,a.kt)("p",null,"While there are multiple use cases for communicating over cMix, this document focuses on communicating with a specific recipient, such as a server. It outlines the steps for setting up two simple applications structured in a client-server architecture, where each application is also a cMix client. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The client and server applications are both cMix clients, interfacing with the cMix network using the Client API.",src:n(1850).Z,width:"655",height:"291"}),"\n",(0,a.kt)("em",{parentName:"p"},"The client and server applications are both cMix clients, interfacing with the cMix network using the Client API.")),(0,a.kt)("p",null,"The client and server applications are both cMix clients, interfacing with the cMix network using the Client API."),(0,a.kt)("p",null,"The complete source code for the sample client and server applications is ",(0,a.kt)("a",{parentName:"p",href:"https://git.xx.network/elixxir/xxdk-examples"},"available on GitLab"),". You can also browse the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/gitlab.com/elixxir/client/xxdk"},"API Reference")," for comprehensive detail on the different types and functions exposed by the cMix Client API (xxDK)."),(0,a.kt)("h2",{id:"objectives-of-this-guide"},"Objectives of This Guide"),(0,a.kt)("p",null,"This guide covers the entire process of integrating the xxDK in an application, registering within the xxDK and setting up a connection with the cMix network, setting up listeners, as well as sending and receiving messages or other data. It aims to help you accomplish the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create two cMix clients set up in a client-server architecture"),(0,a.kt)("li",{parentName:"ul"},"Set up the client application to exchange messages with a server"),(0,a.kt)("li",{parentName:"ul"},"Set up the server to listen for and respond to messages from the client application(s)")),(0,a.kt)("p",null,"We include a sample scenario in ",(0,a.kt)("a",{parentName:"p",href:"#putting-it-all-together-sample-scenario"},(0,a.kt)("em",{parentName:"a"},"Putting It All Together"))," to create a picture of how the client and server might interact with each other."),(0,a.kt)("h2",{id:"setting-up-a-cmix-client"},"Setting Up a cMix Client"),(0,a.kt)("p",null,"This section briefly discusses commonalities between client and server applications\u2014steps that any cMix client needs to be set up correctly.  They include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fetching an NDF"),(0,a.kt)("li",{parentName:"ol"},"Creating and initializing a cMix object"),(0,a.kt)("li",{parentName:"ol"},"Creating a reception identity"),(0,a.kt)("li",{parentName:"ol"},"Starting network threads")),(0,a.kt)("p",null,"The steps diverge after creating a reception identity. Depending on whether you are building a server or client,  the network threads will be started slightly differently and not necessarily in the order listed above."),(0,a.kt)("p",null,"Once the most basic steps are completed, a cMix client acting as a \u2018server\u2019 starts up a server to listen for connections from clients while each client attempts to connect to the server securely. This is all handled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'"gitlab.com/elixxir/client/connect"\n')),(0,a.kt)("p",null,"Skip over to ",(0,a.kt)("a",{parentName:"p",href:"#setting-up-a-connect-server"},(0,a.kt)("em",{parentName:"a"},"Setting Up a Connect Server"))," to browse server-specific steps and ",(0,a.kt)("a",{parentName:"p",href:"#setting-up-a-connect-client"},(0,a.kt)("em",{parentName:"a"},"Setting Up a Connect Client"))," for steps specific to a client application. "),(0,a.kt)("h3",{id:"import-the-xxdk"},"Import the xxDK"),(0,a.kt)("p",null,"The xxDK is a Go library that can be imported like any other Go package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'"gitlab.com/elixxir/client/xxdk"\n')),(0,a.kt)("p",null,"You will need to import a few more packages along the way. However, we will include them as needed to avoid unused import warnings from the compiler. It is straightforward to switch out the external libraries for any alternatives you prefer."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To ensure you are using the latest release version of the client, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"go get gitlab.com/elixxir/client@release"),". This will update your ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file automatically.")),(0,a.kt)("h3",{id:"fetching-the-ndf"},"Fetching the NDF"),(0,a.kt)("p",null,"The NDF, or network definition file, is a signed file with a ",(0,a.kt)("a",{parentName:"p",href:"https://xxnetwork.wiki/Network_Definition_File_(NDF)"},"predefined structure")," containing the current network state and configuration for a target network.  For deployed applications, the NDF should be queried from one or a few trusted network gateways. See ",(0,a.kt)("a",{parentName:"p",href:"./guides/ndf-retrieval"},"NDF Retrieval"),"  for recommendations on how to retrieve an NDF and establish trust with one or more gateways."),(0,a.kt)("h3",{id:"create-a-client-keystore"},"Create a Client Keystore"),(0,a.kt)("p",null,"The (cMix) client keystore is a directory-backed storage which contains the cryptographic keys and state data. On initialization, it creates a set of keys for outbound communication with the xx network."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is vital that the contents of the Client Keystore are stored securely. See ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.notion.so/cMix-Client-Keystore-1fc63d2a52e946debc70991144f4fb0a"},"cMix Client Keystore"))," for  the cryptographic details of the storage and recommendations for storing the generated keys on different platforms.")),(0,a.kt)("p",null,"The keystore is created on disk by calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"NewCmix()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func NewCmix(ndfJSON string, storageDir string, password []byte, registrationCode string) error\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NewCmix()")," expects multiple arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ndfJSON"),": This is string-formatted NDF data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storageDir"),": The path to the directory that will store the state for the cMix client. It is a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"),": User-specified password for accessing cMix client sessions. Must be passed in as a byte slice (",(0,a.kt)("inlineCode",{parentName:"li"},"[]byte"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"registrationCode"),": Optional argument. Enables pre-selected users to register a code with the registration server. Use an empty string to register without a code.")),(0,a.kt)("h3",{id:"load-the-client-keystore"},"Load the Client Keystore"),(0,a.kt)("p",null,"Next, load the client keystore you just created using the ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadCmix()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func LoadCmix(storageDir string, password []byte, parameters xxdk.Params) (*xxdk.Cmix, error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LoadCmix()")," expects the same ",(0,a.kt)("inlineCode",{parentName:"p"},"storageDir")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," used to call ",(0,a.kt)("inlineCode",{parentName:"p"},"NewCmix()"),". It also expects some network parameters. You can fetch the default parameters using ",(0,a.kt)("inlineCode",{parentName:"p"},"xxdk.GetDefaultCmixParams()"),", which can then be modified and passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadCmix()")," as needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Load with the same storageDir and password used to call NewCmix()\nnet, err := xxdk.LoadCmix(storageDir, []byte(password),\n    xxdk.GetDefaultCMixParams())\nif err != nil {\n    // Handle failed to load state error\n}\n")),(0,a.kt)("p",null,"This call starts communication with the network and registers your client with the ",(0,a.kt)("a",{parentName:"p",href:"technical-glossary#permissioning-server"},"permissioning server"),". This enables you to keep track of the network state for message sending and retrieval."),(0,a.kt)("h3",{id:"creating-reception-identities"},"Creating Reception Identities"),(0,a.kt)("p",null,"A cMix client must generate a cryptographic identity for receiving messages. This is typically referred to as its ",(0,a.kt)("em",{parentName:"p"},"Reception Identity"),". Reception Identities are your designation or name on the network\u2014what other parties know you as."),(0,a.kt)("p",null,"A new Reception Identity can be created by passing a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmix")," object to ",(0,a.kt)("inlineCode",{parentName:"p"},"MakeReceptionIdentity()"),".  You can reuse a Reception Identity or create an infinite number of Reception Identities on the fly, but there is a privacy tradeoff between having established identities and frequently creating new identities."),(0,a.kt)("p",null,"The Reception Identity has keying material in it, so it is crucial that it is stored in an encrypted location. ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreReceptionIdentity()")," handles this automatically, which is the recommended way to store identities. This way, a user only has to save the lookup key, which can be stored arbitrarily.  Similarly, a saved identity can be retrieved from the Client Keystore using ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadReceptionIdentity()"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'// Sample key for storing reception identity object\nidentityStorageKey := "identityStorageKey"\n\t\n// If no extant xxdk.ReceptionIdentity, generate and store a new one\nidentity, err := xxdk.LoadReceptionIdentity(identityStorageKey, net)\nif err != nil {\n\tidentity, err = xxdk.MakeReceptionIdentity(net)\nif err != nil {\n\t// Handle failed to generate reception identity error\n}\nerr = xxdk.StoreReceptionIdentity(identityStorageKey, identity, net)\nif err != nil {\n\t// Handle failed to store new reception identity error\n}\n'),(0,a.kt)("p",null,"Note that the identity storage key is simply a dictionary lookup key used to access a stored identity.")),(0,a.kt)("h4",{id:"writing-contacts-to-file"},"Writing Contacts to File"),(0,a.kt)("p",null,"In order to contact another cMix client directly, you must obtain a contact file based on the Reception Identity belonging to the desired recipient. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "gitlab.com/xx_network/primitives/utils"\n)\n\n// Set the output contact file path\ncontactFilePath := "connectServer.xxc"\n\n// Save the contact file so that clients can connect to this server\nerr := utils.WriteFileDef(outfilePath, identity.GetContact().Marshal())\n')),(0,a.kt)("p",null,"Note that the file extension can be chosen arbitrarily, although we stick to ",(0,a.kt)("inlineCode",{parentName:"p"},".xxc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),"."),(0,a.kt)("h3",{id:"starting-network-threads"},"Starting Network Threads"),(0,a.kt)("p",null,"The network follower is a relatively computationally-intensive thread that keeps track of network state and health. The client is able to operate fully only once the network is in a healthy state, as indicated by the follower seeing rounds completed successfully."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (* Cmix) StartNetworkFollower(timeout time.Duration) error\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StartNetworkFollower()")," takes a single timeout duration that specifies how long to wait for the function call to succeed before a timeout error is returned. To stop the network threads, such as when your application is closed or put in the background, simply run  ",(0,a.kt)("inlineCode",{parentName:"p"},"StopNetworkFollower()"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)("div",null,(0,a.kt)("p",null,"For our application, we have also set up a function that starts network threads and waits until the network is healthy before proceeding."),(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},"// Set networkFollowerTimeout to a value of your choice (seconds)\nnetworkFollowerTimeout := 5 * time.Second\n    \nerr = connectServer.User.StartNetworkFollower(networkFollowerTimeout)\nif err != nil {\n\t// Handle failed to start network follower error\n}\n    \n// Create a tracker channel to be notified of network changes\nconnected := make(chan bool, 10)\n    \n// Provide a callback that will be signalled when network health\n// status changes\nconnectServer.User.GetCmix().AddHealthCallback(\n\tfunc(isConnected bool) {\n\t\tconnected <- isConnected\n\t})\n    \n// You may implement a function which retries\n// attempts to connect to the network\nwaitUntilConnected := func(connected chan bool) {\n\t// ...\n}\n    \n// Wait until connected or crash on timeout\nwaitUntilConnected(connected)\n"))),(0,a.kt)("h2",{id:"building-clientserver-relationships-using-connections"},"Building Client/Server Relationships using Connections"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," package provides a quick and convenient way of establishing client/server relationships over cMix. Initially, a client requires the server\u2019s contact file in order to make a connection. The connection process functionally establishes a cryptographic relationship between the two that is encapsulated by a ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.Connection")," object. Using this object, end-to-end encrypted messages can be sent between client and server with ease and handled with customized business logic as defined by your application."),(0,a.kt)("h2",{id:"setting-up-a-connect-server"},"Setting Up a Connect Server"),(0,a.kt)("p",null,"Creating a server capable of interacting with clients is a very straightforward process using connections. Almost all the code required is standard, with business logic relevant to your specific implementation needs is handled entirely in two places\u2014message listeners and the connection callbacks. Pay special attention to these sections when writing a server application."),(0,a.kt)("h3",{id:"enabling-message-reception"},"Enabling Message Reception"),(0,a.kt)("p",null,"A message listener is the only way to handle incoming end-to-end encrypted messages. They are a piece of code that is registered with the xxDK to be run whenever an E2E message is received. Message listeners can be further filtered to handle specific message types or specific message senders depending on application needs."),(0,a.kt)("p",null,"We will soon create a message listener using the ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterListener()")," method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (c *connect.Connection) RegisterListener(messageType catalog.MessageType,\n    newListener receive.Listener) (receive.ListenerID, error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RegisterListener()")," expects the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"messageType"),": Use ",(0,a.kt)("inlineCode",{parentName:"li"},"catalog.NoType")," (",(0,a.kt)("inlineCode",{parentName:"li"},'"[gitlab.com/elixxir/client/catalog](http://gitlab.com/elixxir/client/catalog)"'),") as a wildcard to listen to all existing types of messages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"newListener"),": An implementation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"Listener")," interface (shown below).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Listener interface for a listener adhere to\ntype Listener interface {\n    // The Hear function is called to exercise the listener, passing in the\n    // data as an item\n    Hear(item Message)\n    // Returns a name, used for debugging\n    Name() string\n}\n")),(0,a.kt)("p",null,"When a message matching the registered listener is received, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hear()")," function will receive a copy of the message to handle with user-specified logic. The code example below shows a very simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," that simply prints out received messages and sends an automated response in return."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'// listener.go\n    \n// ...\n      \nimport (\n\tjww "github.com/spf13/jwalterweatherman"\n\t"gitlab.com/elixxir/client/connect"\n\t"gitlab.com/elixxir/client/e2e/receive"\n\t"gitlab.com/elixxir/client/catalog"\n\t"gitlab.com/elixxir/client/xxdk"\n)\n    \n// listener adheres to the receive.Listener interface.\ntype listener struct {\n\tname string\n\tconnection connect.Connection\n}\n    \n// Hear will be called whenever a message matching the RegisterListener call is\n// received; User-defined message handling logic goes here.\nfunc (l *listener) Hear(item receive.Message) {\n\tjww.INFO.Printf("Message received: %v", item)\n    \n\t// Acknowledge connection by sending a response\n\trespond(l.connection)\n}\n    \n// Name is used for debugging purposes.\nfunc (l *listener) Name() string {\n\treturn l.name\n}\n    \nfunc respond(connection connect.Connection) {\n\tmsgBody := "Hi, I\'m the server, and you just connected to me."\n    \n\troundIDs, messageID, timeSent, err := connection.SendE2E(catalog.XxMessage, []byte(msgBody), xxdk.GetDefaultE2EParams().Base)\n\tif err != nil {\n\t\t// Handle failed to send message error\n\t}\n\tjww.INFO.Printf("Message %v sent in RoundIDs: %+v at %v", messageID, roundIDs, timeSent)\n}\n'))),(0,a.kt)("h3",{id:"enabling-incoming-connections"},"Enabling Incoming Connections"),(0,a.kt)("p",null,"The connection callback is defined within the system as the custom logic that will be executed whenever a client attempts to open a new ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.Connection")," with the running server. To this end, the connection callback will eventually be passed as an argument into ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.StartServer()"),"."),(0,a.kt)("p",null,"The following code sample demonstrates what a callback for handling incoming client connections might look like. Notably, this incorporates the creation of a message listener as described in the previous section in order to facilitate future message reception once the connection is established:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "gitlab.com/elixxir/client/catalog"\n\n// Create callback for incoming connections\nconnectionCallback := func(connection connect.Connection) {\n// User-defined behavior for message reception goes in the listener\n    _, err = connection.RegisterListener(\n        catalog.NoType, &listener{"connection server listener", connection})\n    if err != nil {\n        // Handle failed to register listener error\n    }\n}\n')),(0,a.kt)("h3",{id:"start-the-server"},"Start the Server"),(0,a.kt)("p",null,"Once the connection callback has been defined, the connection server may be started using ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.StartServer()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func StartServer(identity xxdk.ReceptionIdentity, connectionCallback Callback,\n  net *xxdk.Cmix, params xxdk.E2EParams, clParams ConnectionListParams)\n  (*ConnectionServer, error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"StartServer()")," assembles a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," object on the server-side and feeds it into the given ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," whenever an incoming request for an end-to-end (E2E) partnership with a client completes successfully. It expects the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity"),": This is the reception identity of the cMix client, created in ",(0,a.kt)("a",{parentName:"li",href:"#creating-reception-identities"},(0,a.kt)("em",{parentName:"a"},"Creating Reception Identities.")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectionCallback"),": The callback that will handle incoming client connections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"net"),": This is the cMix object created in ",(0,a.kt)("a",{parentName:"li",href:"#create-a-client-keystore"},(0,a.kt)("em",{parentName:"a"},"Create a Client Keystore"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),": Network parameters for sending E2E messages over the cMix network. Includes authentication and rekey parameters amongst others. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"xxdk.GetDefaultE2EParams()")," for the default settings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clParams"),":  Parameters that determine the frequency of stale connection cleanups. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"connect.DefaultConnectionListParams()")," for the default settings.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'import "gitlab.com/elixxir/client/connect"\n    \n// Start the connection server, which will allow clients to start connections with you\ne2eParams := xxdk.GetDefaultE2EParams()\nconnectionListParams := connect.DefaultConnectionListParams()\n    \nconnectServer, err := connect.StartServer(\n\tidentity, connectionCallback, net, e2eParams, connectionListParams)\nif err != nil {\n\t// Handle unable to start connection server error\n}\n'))),(0,a.kt)("p",null,"Now, you can create a client and attempt to connect with the running server."),(0,a.kt)("h2",{id:"setting-up-a-connect-client"},"Setting Up a Connect Client"),(0,a.kt)("p",null,"Similar to the server, almost all the code required for a connect-backed client is standard. The business logic relevant to your specific implementation needs is handled entirely within your own sending logic as well as in the message reception listener."),(0,a.kt)("h3",{id:"create-the-e2e-user-object"},"Create the E2E User Object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Login()")," bundles a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReceptionIdentity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmix")," into an ",(0,a.kt)("inlineCode",{parentName:"p"},"E2e"),", which is required for establishing a client-side ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection"),". This operation ultimately forms the representation of the user of the client\u2019s network identity and allows for end-to-end encrypted operations. While the ",(0,a.kt)("inlineCode",{parentName:"p"},"E2e")," object is assembled under the hood server-side, we must do this explicitly on the client-side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Login(net *Cmix, callbacks AuthCallbacks, identity ReceptionIdentity,\n  params E2EParams) (m *E2e, err error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Login()")," expects the following arguments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"net"),": This is the cMix object created in ",(0,a.kt)("a",{parentName:"li",href:"#create-a-client-keystore"},(0,a.kt)("em",{parentName:"a"},"Create a Client Keystore"))," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"callbacks"),": These are the callbacks for handling E2E relationship operations between cMix clients. The ",(0,a.kt)("inlineCode",{parentName:"li"},"connect")," package will handle these independently, thus one can simply feed in the same struct (",(0,a.kt)("inlineCode",{parentName:"li"},"xxdk.DefaultAuthCallbacks{}"),") shown in the sample code below which provides basic implementations of these callbacks."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"identity"),": This is the same identity created in ",(0,a.kt)("a",{parentName:"li",href:"#creating-reception-identities"},(0,a.kt)("em",{parentName:"a"},"Creating Reception Identities."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),": These are network parameters for sending E2E messages over the cMix network. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"xxdk.GetDefaultE2EParams()")," for the default settings.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'user, err := xxdk.Login(net, xxdk.DefaultAuthCallbacks{}, identity, xxdk.GetDefaultE2EParams())\nif err != nil {\n    panic("unable to login")\n}\n')),(0,a.kt)("h3",{id:"connect-to-the-server"},"Connect To the Server"),(0,a.kt)("p",null,"The simplest way for connecting a client and a server is through the use of a contact file, as described earlier in ",(0,a.kt)("a",{parentName:"p",href:"#writing-contacts-to-file"},(0,a.kt)("em",{parentName:"a"},"Writing Contacts to File")),". While there are several options for finding and establishing relationships with clients across cMix, contact files work especially well in this example because the identity of a server is not expected to change."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect()"),", which is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect")," package (",(0,a.kt)("inlineCode",{parentName:"p"},'"gitlab.com/elixxir/client/connect"')," ), to negotiate the connection. You will need to provide the server\u2019s contact file as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"E2e")," object created by ",(0,a.kt)("inlineCode",{parentName:"p"},"Login()")," in the previous step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func Connect(recipient contact.Contact, user *xxdk.E2e, p xxdk.E2EParams)\n  (connect.Connection, error)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Connect()")," performs key negotiation with a given recipient and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," object, which will later be used to register a listener and send messages. An example of reading in a contact file in order to open a connection is provided below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'// Path to the server contact file\nserverContactPath := "../connectServer/connectServer.xxc"\n    \n// Read the server\'s contact data\ncontactData, err := ioutil.ReadFile(serverContactPath)\nif err != nil {\n\t// Handle failed to read server contact file error\n}\n    \n// Import "gitlab.com/elixxir/crypto/contact" which provides\n// an `Unmarshal` function to convert the byte slice output\n// of `ioutil.ReadFile()`to the `Contact` type expected by `Connect()`\nrecipientContact, err := contact.Unmarshal(contactData)\nif err != nil {\n\t// Handle failed to get contact data error\n}\n    \n// Create the connection\nhandler, err := connect.Connect(recipientContact, user, params)\nif err != nil {\n\t// Handle failed to create connection object error\n}\n'))),(0,a.kt)("h3",{id:"enabling-message-reception-1"},"Enabling Message Reception"),(0,a.kt)("p",null,"Message reception support is added client-side much the same as the server-side."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import "gitlab.com/elixxir/client/catalog"\n\n// Listen for all types of messages using catalog.NoType\n// User-defined behavior for message reception goes in the listener\n_, err = handler.RegisterListener(catalog.NoType, listener{\n    name: "e2e Message Listener",\n})\nif err != nil {\n    // Handle could not register message listener error\n}\n')),(0,a.kt)("p",null,"You will also want to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"Listener")," interface just as we did for the server. All response logic is handled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hear()")," function."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)("div",null,(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'// listener.go\n    \npackage main\n    \nimport (\n\tjww "github.com/spf13/jwalterweatherman"\n    \n\t"gitlab.com/elixxir/client/e2e/receive"\n)\n    \n// listener implements the receive.Listener interface\ntype listener struct {\n\tname string\n}\n    \n// Hear will be called whenever a message matching\n// the RegisterListener call is received\n// User-defined message handling logic goes here\nfunc (l listener) Hear(item receive.Message) {\n\tjww.INFO.Printf("Message received: %v", item)\n}\n    \n// Name is used for debugging purposes\nfunc (l listener) Name() string {\n\treturn l.name\n}\n'))),(0,a.kt)("h3",{id:"sending-messages-to-the-server"},"Sending Messages to the Server"),(0,a.kt)("p",null,"With the connection to the server established and message reception enabled, the client is now ready to begin communicating with the server. This will be done using methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.Connection")," object returned by ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect()")," in the previous steps."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (connect.Connection).SendE2E(mt catalog.MessageType, payload []byte,\n  params e2e.Params) ([]id.Round, e2e.MessageID, time.Time, error)\n")),(0,a.kt)("p",null,"It expects the following arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mt"),": This is the message type. Specify as ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog.XxMessage"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"payload"),": The actual message contents. Pass in the payload as a byte slice.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"params"),": Network parameters for sending E2E messages over the cMix network. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"xxdk.GetDefaultE2EParams().Base")," for the default settings."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"SendE2E()")," returns the list of rounds in which parts of your message were sent, the message ID, and the sent timestamp. An error is returned if the send is unsuccessful."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code sample"),(0,a.kt)(r.Z,{className:"language-go",showLineNumbers:!0,mdxType:"CodeBlock"},'// Test message\nmsgBody := "If this message is sent successfully, we\'ll have established contact with the server."\n    \nparams := xxdk.GetDefaultE2EParams() // defined earlier\n    \nroundIDs, messageID, timeSent, err := handler.SendE2E(catalog.XxMessage, []byte(msgBody), params.Base)\nif err != nil {\n\t// Handle failed to send message error\n}\njww.INFO.Printf("Message %v sent in RoundIDs: %+v at %v", messageID, roundIDs, timeSent)\n'),(0,a.kt)("div",null)),(0,a.kt)("h2",{id:"putting-it-all-together-sample-scenario"},"Putting It All Together: Sample Scenario"),(0,a.kt)("p",null,"Suppose you have a server hooked up to a fax machine. When a client sends something to the server, the server takes that data and sends it as a fax."),(0,a.kt)("p",null,"As the server, you create a cMix client and set it up with a reception identity. You generate your contact file and call ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.StartServer()"),", which is passed a ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback"),", to start listening for connections."),(0,a.kt)("p",null,"You distribute your contact file to your users, so they can use it to contact you like a phone number."),(0,a.kt)("p",null,"Users call ",(0,a.kt)("inlineCode",{parentName:"p"},"connect.Connect()"),", which establishes a relationship with the server."),(0,a.kt)("p",null,"The server sees one of these connections\u2014a user wants to send a fax, so they opened a connection. It assembles a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," object and feeds it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"StartServer()"),"."),(0,a.kt)("p",null,"Next, the server calls ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterListener()")," to start listening for messages coming in from that connection with a client.\xa0"),(0,a.kt)("p",null,"When the listener picks up a fax sent to it as a message, it reads it and sends the fax onward to its intended destination."),(0,a.kt)("p",null,"Assuming that hundreds of users are doing this all at the same time, each with their own ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection"),", you\u2019ll want to catalogue all connections somehow in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback")," passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"StartServer()"),". Then you can look up what ",(0,a.kt)("inlineCode",{parentName:"p"},"Connection")," corresponds to each user and let them know that you successfully sent their fax by sending a message with ",(0,a.kt)("inlineCode",{parentName:"p"},"connection.SendE2e()"),"."),(0,a.kt)("p",null,"On a high level, integrating the Client API with your application can be reduced to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate an identity for your client to identity itself on the network."),(0,a.kt)("li",{parentName:"ol"},"Interact with the network by starting network followers."),(0,a.kt)("li",{parentName:"ol"},"Register listeners for message reception."),(0,a.kt)("li",{parentName:"ol"},"Send and receive encrypted messages.")),(0,a.kt)("p",null,"For best results, ensure that you perform these actions in the given order."))}m.isMDXComponent=!0},1850:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cMix-fe66aaf10ed3b5e3c2aba274ba927f7a.png"}}]);