---
layout: lesson
course: hyperledger
module: 3
title: Configure the Fabric
permalink: /courses/hyperledger/3/configure-settings
---

<span class="openingParagraph">
Now that we have the core Hyperledger node running, we can use our node.js client to interact with it and send queries. Before we can get started, though, we'll need to launch our node and configure some users and permissions.</span>
<ol>
<li><h4>Start the Node</h4>
First, you'll want to run the initialization script. This is similar to byfn.sh from the previous example.
<code class="cli">fabcar/startFabric.sh</code>
This file is actually just going to invoke the general start script at <span style="font-weight: 400;">basic-network/start.sh </span></li>

<li><h4>Set Up The Admin User</h4>
<span style="font-weight: 400;">Now that the node is running, we'll need to run a script to set up an admin user. This will also generate key files for this user.</span>
<code class="cli">node enrollAdmin.js</code>
<span style="font-weight: 400;">You can see the key file that was generated with the following command:</span>
<code class="cli">ls hfc-key-store/</code>
<span style="font-weight: 400;">To see how this works, review lines 45-55 in enrollAdmin.js. The enroll method on line 53 is the key interaction with the Hyperledger node.</span>
https://gist.github.com/alexander-morris/a9a401c648cbeb5d2cd3fb4b65cf8b13
<br>
<span style="font-weight: 400;">Every application requires this functionality to register a first user (our admin) who can then register subsequent users. The admin user shouldn’t ever be used to update/query the ledger, and really only exists as a root source of trust in the system. This is somewhat similar to how the genesis block is added in public blockchains.</span></li>

<li><h4>Register a Normal User</h4>
<span style="font-weight: 400;">To add a regular user, we can use the following script:</span>
<code class="cli">node registerUser.js</code>
<span style="font-weight: 400;">Once the call is complete, we should see a new key generated in the key-store folder. </span>
<code class="cli">ls hfc-key-store/</code>
To see how this is being executed, open up registerUser.js and take a peak. In particular, the createUser call now has slightly different parameters.

https://gist.github.com/alexander-morris/8493a22160cecb2e062ce642a239c48e
</li>
</ol>
&nbsp;

Congratulations - Now that you can create users you're now ready to move on to editing the ledger.
&nbsp;

<hr />
<em>In the next section, we'll demonstrate how users can execute commands.</em>
