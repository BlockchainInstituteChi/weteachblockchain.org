---
layout: lesson
course: ipfs
module: 1
title: General Architecture 
permalink: /courses/ipfs/1/general-architecture
---


<span> <span class="openingParagraph">
While this course will mainly focus on IPFS, there are a number of proposed solutions to blockchain-based and decentralized storage. The general architecture remains quite similar between them, so it will help to review how these systems operate before comparing them.</span>

{% include callouts/imageWithCaption.html
	image="/courses/ipfs/StorageWorks-01-1.png"
	title="<b>HOW BLOCKCHAIN STORAGE WORKS:</b>"
	bodyText="<b>A:</b> <i>Data;</i> <b>B:</b> <i>Shards;</i> <b>C:</b> <i>Encrypted Shards;</i> <b>D:</b> <i>Hashes;</i> <b>E:</b> <i>Blockchain Ledger;</i> <b>F:</b> <i>Distributed Nodes with Synced Ledger;</i> <b>1:</b> <i>Shard Data;</i> <b>2:</b> <i>Encrypt Shards;</i> <b>3:</b> <i>Generate Hashes;</i> <b>4:</b> <i>Replicate Shards;</i> <b>5:</b> <i>Distribute Shards;</i> <b>6:</b> <i>Record Transactions.</i>
Because blockchains must be stored on all nodes of the network, data on them is expensive. As a result, hashes are used to represent an image of each piece of a file, and the pieces can then be safely distributed to storage nodes without risk of substitution of compromise."
%}

<h3>GENERAL PROCESS</h3>

<hr />

<ol>
 	<li>
<h4>Shard Data</h4>
In order to optimize storage and retrieval of files, data is broken down into tiny packets which can each be stored on a different node.</li>
 	<li>
<h4>Encryption</h4>
Each shard is encrypted to anonymize and sterilize the data before public storage.</li>
 	<li>
<h4>Signatures</h4>
In order to uniquely track each shard or file, a hash signature is created that represents each unit of storage uniquely. This will be used to verify that nodes are storing the correct files at the correct addresses.</li>
 	<li>
<h4>Replication</h4>
In a decentralized network, it's important to have multiple redundant versions of each file. This allows nodes to join and leave the network as they see fit without the file being unavailable.</li>
 	<li>
<h4>Distribution</h4>
Shards are then distributed across the network to a group of nodes to maximize availability.</li>
 	<li>
<h4>Recording</h4>
In a truly decentralized network, a ledger or blockchain can be used to record when and where files are stored, and to ensure that parties are held accountable for breaches of trust.</li>
</ol>
&nbsp;

In the next section, we'll cover in more detail how IPFS implements this functionality.
