---
layout: lesson
course: decentralized-storage
module: 2
title: Technical Overview
permalink: /courses/decentralized-storage/2/technical_overview
---
<br>
<br>
<span class="openingParagraph">In this module, we'll explore how IPFS stores files.</span>
IPFS, or the Interplanetary File System, uses a blockchain-based peer-to-peer network to share files directly between participants. Because IPFS does not have one core server, the blockchain is needed to help the nodes identify bad data, and ensures safe and reliable communication for long term file storage. 

{% include callouts/callout.html 
	title="Incentives and Blockchains"
	bodyText="In order for a decentralized network to operate, it needs two things: <ol><li>A common source of truth</li><li>A way to reward good behaviour</li></ol> In the case of decentralized storage, a blockchain is used to track network activity, and participants must typically stake a fee, which is returned if their activity is deemed to be non-malicious."
%}

For the sake of this course, we've mostly focused on IPFS, but there are a number of players entering the decentralized storage space, and each of them has chosen to accomplish this goal in slightly different ways. Generally, the framework for a decentralized storage network can be summarized as shown below. If you would like a deeper dive into this decentralized storage technology, check out <a href="/courses/ipfs/">our full course on IPFS</a>.

{% include callouts/upsideDownImageWithCaption.html
	image="/courses/decentralized-storage/StorageWorks-01-1.jpg"
	title="<b>HOW DECENTRALIZED STORAGE WORKS:</b>"
	bodyText="1: The data (<b>A</b>) is broken into many pieces, or shards (<b>B</b>)

<br>2: Each Shard is encrypted (<b>C</b>) using the public key of the user who wants to store the file

<br>3: A hash (<b>D</b>) is generated for each shard

<br>4: The encrypted shards (<b>C</b>) are distributed to the peer nodes for storage

<br>5: The encrypted shards are replicated across many peer nodes, which each share a copy of the common ledger (<b>F</b>)

<br>6: The shard hashes are recorded to the blockchain (<b>E</b>) for reference during retrieval"
%}

{% include callouts/note.html
	bodyText="While not depicted above, the creators of IPFS have implemented a token called Filecoin, which enables rewards for participants who successfully provide the correct shard when it is requested."
%}

Because blockchains must be stored on all nodes of the network, data on them is expensive. As a result, hashes are used to represent an image of each piece of a file, and the pieces can then be safely distributed to storage nodes without risk of substitution of compromise.
