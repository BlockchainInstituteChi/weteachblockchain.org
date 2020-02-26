---
layout: lesson
course: hyperledger
module: 3
title: Connecting to the Fabric
permalink: /courses/hyperledger/3/connecting-to-the-fabric
---

<span class="openingParagraph">
Before we move on to interactions with the ledger, it will help to review how the ledger is updated in Query.js. ( see fabric-samples/fabcar/query.js)</span>

<ol>
<li><h4>Connecting to the Peer SDK</h4>
In the first four lines of this script, we'll introduce our libraries:
https://gist.github.com/alexander-morris/b96113601629635fc14820a5b79e8bc7

Then, we can initialize the Hyperledger client and connect to the network:

https://gist.github.com/alexander-morris/569e84dfd14c2d74361180bbd6a3b008
</li>
&nbsp;

<li><h4>Querying the ledger</h4>

When a client queries a Hyperledger node, the state object is returned as the consensus at that time. In section 1 we covered the <a href="https://theblockchaininstitute.org/courses/hyperledger-101/lessons/hyperledger-architecture/">transaction flow</a> in greater detail, but we'll now see how the query object is generated and passed to the network endpoint / SDK.

The first 50 lines or so of query.js handle connecting to the network and authenticating the user that we created in the previous step. Finally, we can prepare a test query on line 54:
https://gist.github.com/alexander-morris/32061280fb1fd05c54c94bd0d9d77ee0

You can send the query by triggering the script using the following command:
<code class="cli">node query.js </code>
If your Hyperledger node is running this should return a printout of json data, but right now it will be empty because we haven't added any cars to the dealership's registry!</li>
</ol>

&nbsp;
<hr />

<em>In the next section, we'll explore the chaincode and see how this payload gets processed by other nodes on the network!</em>

