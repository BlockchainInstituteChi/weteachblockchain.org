---
layout: lesson
course: hyperledger
module: 1
title: Hyperledger Architecture
permalink: /courses/hyperledger/1/hyperledger-architecture/
---
<br>
<br>
<span class="openingParagraph">The making of the machine</span>
This brief video was created by IBM to explain why Hyperledger is different. IBM is among the core developers of this new protocol and has committed in-house resources to build this solution for industrial blockchains. A number of other major software companies including Oracle and the Linux Foundation have also committed in-house teams to support the development of the Hyperledger protocol.

<iframe class="askAnExpert"  src="https://www.youtube.com/embed/_EY0Ld8Hp8Y"  width="1024" height="475"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- <iframe class="askAnExpert" src="https://www.youtube.com/embed/EKa5Gh9whgU" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen"></iframe> -->
<span class="imageCaption"><span class="mainImageTitle"><b>Where does your food come from?</b></span> // IBM Blockchain</span>

<h3>WHY IS HYPERLEDGER DIFFERENT?</h3>
In a public blockchain, trust limitations restrict how information can be allowed to flow. In a private environment, there is much more flexibility, which means that different nodes in the network can have a wider set of responsibilities and the advantage of efficiency tools which rely on trust within the network.

<h3>NODE TYPES</h3>
Unlike the bitcoin or ethereum networks, where all nodes are alike, Hyperledger uses different nodes for different purposes, which ultimately increases efficiency across the network.
{% include callouts/definition.html
	title="In the Hyperledger, a node must take on one of three roles:"
	bodyText="<ul><li><em><strong>Peer - </strong></em>A peer node is similar to a standard client in the Bitcoin or Ethereum networks.</li><li><em><strong>Endorsing - </strong></em>Endorsing nodes can sometimes act as peer nodes, but have the added responsibility and privilege of endorsing others' transactions.</li><li><em><strong>Ordering - </strong></em>Ordering nodes are responsible for adding records to the ledger. These are similar to mining nodes in public blockchains.</li></ul>"
%}        

<h3>RECORD SYSTEMS</h3>
In order to increase the overall efficiency of the system, the network uses several distinct record systems:
<ul style="color:black;">
 	<li><em><strong>General Ledger - </strong></em>The overall ledger of the system records all transactions regardless of whether they're approved or not. This is a useful tool for audits and ensures that no data is lost.</li>
 	<li><em><strong>Validated Ledger - </strong></em>Transactions which have been fully approved are added to the VLedger, which is a shortened version of the overall history containing only the successfully processed events.</li>
 	<li><em><strong>State Object - </strong></em>The State Object is stored as a database record representing the current state of the system. This provides the maximum functional efficiency as peer nodes can simply query the present state rather than reconstructing it from the ledger.</li>
</ul>

In a Hyperledger Network, all most new transactions are added to the State Object almost immediately, producing a database which can perform nearly as well as a common system like SQL, but with all the benefits of a distributed ledger. 
