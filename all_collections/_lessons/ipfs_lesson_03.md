---
layout: lesson
course: ipfs
module: 1
title: General Architecture 
permalink: /courses/ipfs/1/general-architecture
---
<br>
<br>
<span class="openingParagraph">Why IPFS?</span>
While this course will mainly focus on IPFS, there are a number of proposed solutions to blockchain-based and decentralized storage. The general architecture remains quite similar between them, so it will help to review how these systems operate before comparing them. In this lesson, we'll explore how IPFS uses blockchain to track and move files through it's network. 

{% include callouts/imageWithCaption.html
	image="/courses/ipfs/StorageWorks-01-1.jpg"
	title="<b>HOW BLOCKCHAIN STORAGE WORKS:</b>"
	bodyText="Because blockchains must be stored on all nodes of the network, data on them is expensive. As a result, hashes are used to represent an image of each piece of a file, and the pieces can then be safely distributed to storage nodes without risk of substitution of compromise. <br><ol><li>First, the <b>A:</b> <i>Data</i> is broken into <b>B:</b> <i>Shards</i></li><li>Next, the shards are encrypted (<b>C:</b> <i>Encrypted Shards</i>)</li><li>Then, each encrypted shard is hashed <b>D:</b> <i>Hashes</i></li><li>The hashes are added to the ledger (<b>E:</b> <i>Blockchain Ledger)</i></li><li>Each shard is then transmitted through the network (<b>F:</b>) to <i>Distributed Nodes with a Synced Ledger</i></li></ol>"
%}

<h2>GENERAL PROCESS</h2>
While not all decentralized storage networks are the same, this general process applies to most of the ones in development today.

<h3>1. Shard Data</h3>
In order to optimize storage and retrieval of files, data is broken down into tiny packets which can each be stored on a different node.
<h3>2. Encryption</h3>
Each shard is encrypted to anonymize and sterilize the data before public storage.
<h3>3. Signatures</h3>
In order to uniquely track each shard or file, a hash signature is created that represents each unit of storage uniquely. This will be used to verify that nodes are storing the correct files at the correct addresses. 
<h3>4. Replication</h3>
In a decentralized network, it's important to have multiple redundant versions of each file. This allows nodes to join and leave the network as they see fit without the file being unavailable.
<h3>5. Distribution</h3>
Shards are then distributed across the network to a group of nodes to maximize availability.
<h3>6. Recording</h3>
In a truly decentralized network, a ledger or blockchain can be used to record when and where files are stored, and to ensure that parties are held accountable for breaches of trust.

<br>
<h1> </h1>
<br>
In the next section, we'll cover in more detail how IPFS implements this functionality.
