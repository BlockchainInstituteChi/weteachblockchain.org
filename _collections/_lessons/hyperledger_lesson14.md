---
layout: lesson
course: hyperledger
module: 3
title: Updating Records
permalink: /courses/hyperledger/3/updating-records
---

<span class="openingParagraph">
Now let's assume Alex moves to Canada. It's cold in the Winter, so now Alex needs a hybrid instead of an all-electric Tesla. If Alex wants to buy Valeria's Prius, we'll need to update the blockchain to reflect this change.</span>

<h4>Task:</strong> update car0 -&gt; set owner: Valeria to Alex</h4>
<ol>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Application layer calls ( Smart Contract SDK ).changeCarOwner with the new object</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">The SDK processes this object and generates a new transaction that issues a change of the color to red</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Now, the state database updates to include the new transaction, similar to the UTXO calculation in bitcoin, and updates the color to match the new transaction</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Then, once all of this is complete, the chaincode SDK will return a success response to the application layer</span></li>
</ol>

The payload would need to look like this:
https://gist.github.com/alexander-morris/a9a67b0bc47d5f6829f9769a6d2d584d
<span style="font-weight: 400;">We can then verify this by running node query.js again, and we’ll see that CAR0 now has an owner: Alex</span>
