---
layout: lesson
course: hyperledger
module: 3
title: Configure the Fabric
permalink: /courses/hyperledger/3/configure-settings
---
<br>
<br>
<span class="openingParagraph">
Now that we have the core Hyperledger node running, we can use our node.js client to interact with it and send queries. Before we can get started, though, we'll need to launch our node and configure some users and permissions.</span>

<h4>Start the Node</h4>
First, you'll want to run the initialization script. This is similar to byfn.sh from the previous example.

{% include callouts/terminal.html
    title="Start the Fabcar Example Network on Docker"
    user="alex@ubuntu"
    directory="~/fabric-samples/"
    bodyText="fabcar/startFabric.sh, // *This file is actually just going to invoke the general start script at basic-network/start.sh."
%}  

<h4>Set Up The Admin User</h4>
Now that the node is running, we'll need to run a script to set up an admin user. This will also generate key files for this user, which we will need in order to begin interacting with our testing network nodes.

{% include callouts/terminal.html
    title="Create the admin user"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="node enrollAdmin.js"
%}  

{% include callouts/terminal.html
    title="Were the keys generated?"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="ls hfc-key-store/"
%}  

        
{% include callouts/note.html
    bodyText="To see how this works, review lines 45-55 in enrollAdmin.js. The enroll method on line 53 is the key interaction with the Hyperledger node. 
<br>
<script src='https://gist.github.com/alexander-morris/a9a401c648cbeb5d2cd3fb4b65cf8b13.js'></script>"
%}

Every application requires this functionality to register a first user (our admin) who can then register subsequent users. The admin user shouldn’t ever be used to update/query the ledger, and really only exists as a root source of trust in the system. This is somewhat similar to how the genesis block is added in public blockchains.

<h4>Register a Normal User</h4>
To add a regular user, we can use the following script:
{% include callouts/terminal.html
    title="Register a User"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="node registerUser.js // open this file to see the process, ls hfc-key-store/ // always check that keys were created!"
%}      



{% include callouts/callout.html
    title="Registering Users:"
    bodyText="To see how this is being executed, open up registerUser.js and take a peak. In particular, the createUser call now has slightly different parameters.
<br>
<script src='https://gist.github.com/alexander-morris/8493a22160cecb2e062ce642a239c48e.js'><script>"
%}

Congratulations - Now that you can create users you're now ready to move on to editing the ledger.

In the next section, we'll demonstrate how users can execute commands</em>
