---
layout: lesson
course: hyperledger
module: 3
title: Connecting to the Fabric
permalink: /courses/hyperledger/3/connecting-to-the-fabric
---
<br>
<br>
<span class="openingParagraph">
Before we move on to interactions with the ledger, it will help to review how the ledger is updated in Query.js. ( see fabric-samples/fabcar/query.js)</span>

{% include callouts/callout.html
    title="Connecting to the Peer SDK"
    bodyText="In the first four lines of this script, we'll introduce our libraries. Then, we can initialize the Hyperledger client and connect to the network: <script src='https://gist.github.com/alexander-morris/569e84dfd14c2d74361180bbd6a3b008.js'></script>"
%}

<h4>Querying the ledger</h4>

When a client queries a Hyperledger node, the state object is returned as the consensus at that time. In section 1 we covered the <a href="https://theblockchaininstitute.org/courses/hyperledger-101/lessons/hyperledger-architecture/">transaction flow</a> in greater detail, but we'll now see how the query object is generated and passed to the network endpoint / SDK.

{% include callouts/callout.html
    title="Connecting to the Peer SDK"
    bodyText="The first 50 lines or so of query.js handle connecting to the network and authenticating the user that we created in the previous step. Finally, we can prepare a test query on line 54: <script src='https://gist.github.com/alexander-morris/32061280fb1fd05c54c94bd0d9d77ee0.js'></script>"
%}

You can send the query by triggering the script using the following command:

{% include callouts/terminal.html
    title="Run the query"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="node query.js"
%}             
            
If your Hyperledger node is running this should return a printout of json data, but right now it will be empty because we haven't added any cars to the dealership's registry! In the next section, we'll explore the chaincode and see how this payload gets processed by other nodes on the network!

