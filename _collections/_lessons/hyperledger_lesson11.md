---
layout: lesson
course: hyperledger
module: 3
title: Chaincode on the Node
permalink: /courses/hyperledger/3/chaincode-review
---

<span class="openingParagraph">
In the previous lesson, we covered how to connect to and query the Hyperledger node. Now, we'll explore how the node can be configured to respond to those requests.</span>

<h4>The chaincode: Fabcar.js</h4>
In this example, the file Fabcar.js contains our chaincode SDK. This file gives us a single convenient place to add and remove functionality. Let's take a look at a couple of the function calls to see how they work.

{% include callouts/note.html
	bodyText="The chaincode is all stored in a single folder in fabric-samples/chaincode. The Fabcar.js script is located at fabric-samples/chaincode/fabcar/node/fabcar.js."
%}

<h5>Query All Cars (line 145)</h5>

{% include callouts/callout.html
	title="Title"
	bodyText="This function simply returns all of the cars in the database as we saw in the last example. <script src='https://gist.github.com/alexander-morris/02bd87637892fc746f1a489d36e86cdb'></script>"
%}

As you can see, all that's really happening here is a quick query that pulls cars 0 - 999 by their IDs. The SDK is taking care of the heavy lifting and abstracting all of this away so that we can just play through the iterator object, which is just an extension of the state object that we have at our node. In this way, a highly secure blockchain IDE can be used with comparable ease to a standard database.
        
{% include callouts/note.html
	bodyText="Application Layer | Smart Contract SDK / API | Ledger Read / Write"
%}

You can try running different commands using the query function, but we'll go through a few of them now.

<h4>Invoke functionality</h4>
The Invoke Process is a bit more complicated than a standard db write since there is a consensus process taking place behind the scenes. Rather than writing directly, the application must submit ‘update transactions’ to the chain, which are then ordered (think ‘mined’) into the ledger after being approved by the other nodes. As a result, we'll be using invoke.js ( fabric-samples/fabcar/invoke.js ) to write to the Hyperledger database while query.js can be used to read from it.

{% include callouts/definition.html
	title="transaction flow for invoke calls"
	bodyText="<ol><li>Propose updated transactions</li><li>Order transaction proposals</li><li>Notify the client once the ledger is updated</li></ol>"
%}

To see how this is happening, you'll want to take a look under the hood and check into how invoke.js differs from query.js. The main difference is the addition of the addOrderer call shown on line 5 below. As you can see, the user's hfc key is imported from the local directory and used as the Fabric_Client's default.

{% include callouts/callout.html
	title="Under the Hood"
	bodyText="<script src='https://gist.github.com/alexander-morris/c393208505312bfdf6ce4ec421f99381.js'></script>The actual call to the peer network is similar to the functionality we saw for in query.js. From line 45 - 50 we see the same user authentication, and then the transaction processing and housekeeping happen on line 56.<script src='https://gist.github.com/alexander-morris/978c208f352f0fdc9785b1937892b95a.js'></script>"

%}

In the following example, we'll use the payload in lines 61-68 to try creating and modifying some entries in the system!
