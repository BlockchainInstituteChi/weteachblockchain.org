---
layout: lesson
course: hyperledger
module: 1
title: Validated Ledger
permalink: /courses/hyperledger/1/validated-ledger/
---
<br>
<br>
<span class="openingParagraph">Validating Transactions</span>
In the Hyperledger environment, the Validated or VLedger represents the present sum of all successfully validated transactions. Transactions which are not successfully validated or endorsed will be exempt from this list, making it a useful tool for efficiency among peer nodes.

{% include callouts/note.html
	bodyText="Instead of the ethereum State Object or the bitcoin consensus chain, Hyperledger makes use of a collective Validated Ledger, which is shared among all network participants and contains only the transactions which have received appropriate endorsements and approvals."
%}

The following graphic shows the process for validating a new transaction. Once the transaction is validated, it can be added to the Validated Ledger.

{% include callouts/imageWithCaption.html
	image="/courses/private-blockchains/ValLedger-01.jpg"
	title="ILLUSTRATION OF THE VALIDATION PROCESS // <a href='https://hyperledger-fabric.readthedocs.io/en/release-1.3/arch-deep-dive.html' target='_blank'>HYPERLEDGER DOCS</a>"
	bodyText="<b>A:</b> <i>PeerLedger;</i>  <b>B:</b> <i>Validated ledger;</i>  <b>C:</b> <i>Block;</i>  <b>D:</b> <i>Submitting client;</i>  <b>E:</b> <i>PeerLedger;</i>  <b>F:</b> <i>Validated Ledger (VL);</i>  <b>G:</b> <i>Genesis block;</i>  <b>H:</b> <i>Peer;</i>  <b>I:</b> <i>Block forming;</i>  <b>J:</b> <i>Verify endorsement, readset, If OK then apply writeset, Else Invalid transaction (blob);</i>  <b>K:</b> <i>Ordering service;</i>  <b>L:</b> <i>Orderers.</i>"
%}

<br>

Because Hyperledger systems exist in a closed environment, most nodes do not need to participate in the full consensus process. As a result, most nodes will simply maintain their copy of the vLedger and trust that others are ensuring its validity. This is also convenient for larger networks since it ensures that the network has a single common state at any time, rather than the possibility of local consensus emerging.
