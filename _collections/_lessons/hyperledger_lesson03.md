---
layout: lesson
course: hyperledger
module: 1
title: Transaction Flow
permalink: /courses/hyperledger/1/transaction-flow/
---
<br>
<br>
<span class="openingParagraph">
In order to integrate privacy and permissions into the Hyperledger architecture, there are a few additional features which have been added on top of the Bitcoin design pattern. In the Hyperledger context, clients still propose transactions to the network, but the process for validating these transactions is slightly different.</span>

In a Hyperledger app, a transaction can be required to find multiple endorsements from trusted parties within the system before it can be added to the blockchain. Endorsements can be configured to ensure a minimal risk of fraud within the system. An example of this might be to require a business partner to verify certain details of a transaction before it is written to the public ledger. Once all necessary endorsements have been met, the transaction is passed to an ordering node, which will add it to the chain, or Validated Ledger.

{% include callouts/note.html
	bodyText='<em>You can find the full docs <a href="https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html">here</a>.</em>'
%}

<h3>GENERAL TRANSACTION FLOW</h3>

<h4>1. Client Initiates Transactions</h4>
To initiate a transaction, the client creates a properly formatted proposal via the Hyperledger Software Development Kit (SDK), and signs it from their identity, and then transmits it to the network for approval.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-01.png"
	title="CLIENT INITIATES TRANSACTIONS // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>Client A;</i> <b>B:</b> <i>SDK;</i> <b>C:</b> <i>Proposal;</i> <b>D:</b> <i>Peers.</i>"
%}

<h4>2. Endorsing Peers Verify Signature and Execute the Transaction</h4>
If an Endorsing Peer receives a transaction with a valid signature from a known peer, they can execute it and sign a Proposal Response, which can be passed to the wider network as a change to the state object.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-02.png"
	title="ENDORSING PEERS... // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>App;</i> <b>B:</b> <i>Signed Proposal Response;</i> <b>C:</b> <i>Signatures;</i> <b>D:</b> <i>Peers.</i></div>"
%}

<h4>3. Proposal Responses are Inspected</h4>
Proposal Responses are transmitted across the network and inspected by each node independently using the SDK. The nodes can then endorse the proposal as well, or simply act as witnesses.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-03.png"
	title="PROPOSAL RESPONSES ARE INSPECTED // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>SDK.</i>"
%}

<h4>4. Client Assembles Endorsements into a Transaction</h4>
Once a predetermined minimum endorsements is met, the client software can assemble them into a Transaction, or State Transition, which is passed to the Ordering nodes, which will add it to the blockchain.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-04.png"
	title="CLIENT ASSEMBLES... // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>SDK;</i> <b>B:</b> <i>Channels;</i> <b>C:</b> <i>Ordering Service;</i> <b>D:</b> <i>Ordered Transactions.</i>"
%}

<h4>5. The transaction is Verified and Committed to the Ledger</h4>
Ordering nodes accomplish consensus through a complex process known as Proof of Authority, which enables them to determine which order the transactions should fall into based on a predetermined hierarchy between known nodes.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-05.png"
	title="THE TRANSACTION IS... // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>Ordering Service;</i> <b>B:</b> <i>Peers;</i> <b>C:</b> <i>Transaction.</i>"
%}

<h4>6. The Ledger is updated across all nodes</h4>
Once the State Object has been updated, and the Verified Ledger is confirmed by the Ordering Nodes, each client node can now read the new information with confidence.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-06.png"
	title="THE LEDGER IS... // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>Appending Transaction;</i> <b>B:</b> <i>App.</i>"
%}

The full flow is seen in the figure below:

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/TransactionFlow-07.png"
	title="FULL FLOW // https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
	bodyText="<b>A:</b> <i>Collect TRANSACTION-ENDORSED Msgs into a valid endorsement that satisfies endorsementPolicy (chaincodeID) broadcast(endorsement);</i> <b>B:</b> <i>tx=&lt;clientID, chaincodeID, txPayload, timeStamp, clientSig&gt;;</i> <b>C:</b> <i>Simulate/Execute tx Sign TRANSACTION-ENDORSED;</i> <b>D:</b> <i>Verify endorsement, readset if OK, apply writeset to state;</i> <b>E:</b> <i>Ordering service;</i> <b>F:</b> <i>VClient (C);</i> <b>G:</b> <i>Endorsing Peer (EP1);</i> <b>H:</b> <i>Endorsing Peer (EP2);</i> <b>I:</b> <i>Endorsing Peer (EP3);</i> <b>J:</b> <i>Orderers;</i> <b>K:</b> <i>(Committing) Peer (CP1).</i>"
%}

<div>If this all seems very complicated, don't worry! The SDK takes care of most of the work, as we'll see in the next lesson.</div>
