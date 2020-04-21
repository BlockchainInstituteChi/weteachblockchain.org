---
layout: lesson
course: hyperledger
module: 3
title: Updating Records
permalink: /courses/hyperledger/3/updating-records
---
<br>
<br>
<span class="openingParagraph">
Now let's assume Alex moves to Canada. It's cold in the Winter, so now Alex needs a hybrid instead of an all-electric Tesla. If Alex wants to buy Valeria's Prius, we'll need to update the blockchain to reflect this change.</span>
        
{% include callouts/callout.html
	title="Task: update car0 - set owner: Valeria to Alex"
	bodyText="<ol><li><span>Application layer calls ( Smart Contract SDK ).changeCarOwner with the new object</span></li><li><span>The SDK processes this object and generates a new transaction that issues a change of the color to red</span></li><li><span>Now, the state database updates to include the new transaction, similar to the UTXO calculation in bitcoin, and updates the color to match the new transaction</span></li><li><span>Then, once all of this is complete, the chaincode SDK will return a success response to the application layer</span></li></ol>"
%}

{% include callouts/callout.html
	title="Example Payload"
	bodyText="<script src='https://gist.github.com/alexander-morris/a9a67b0bc47d5f6829f9769a6d2d584d.js'>"
%}
            
<span>We can then verify this by running node query.js again, and we’ll see that CAR0 now has an owner: Alex</span>
