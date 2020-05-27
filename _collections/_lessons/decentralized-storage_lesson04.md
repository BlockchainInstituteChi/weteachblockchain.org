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
For the sake of this course, we've mostly focused on IPFS since it's easy to visualize what's happening, but there are a number of players entering the decentralized storage space, and each of them has chosen to accomplish this goal in slightly different ways. Generally, the framework for a decentralized storage network can be summarized as shown below. If you would like a deeper dive into this decentralized storage technology, check out <a href="/courses/ipfs/">our full course on IPFS</a>.

{% include callouts/imageWithCaption.html
	image="/courses/decentralized-storage/StorageWorks-01-1.jpg"
	title="<b>HOW DECENTRALIZED STORAGE WORKS:</b>"
	bodyText="1: The data (<b>A</b>) is broken into many pieces, or shards (<b>B</b>)

2: Each Shard is encrypted (<b>C</b>) using the public key of the user who wants to store the file

3: A hash (<b>D</b>) is generated for each shard

4: The encrypted shards (<b>C</b>) are distributed to the peer nodes for storage

5: The encrypted shards are replicated across many peer nodes, which each share a copy of the common ledger (<b>F</b>)

6: The shard hashes are recorded to the blockchain (<b>E</b>) for reference during retrieval"
%}

Because blockchains must be stored on all nodes of the network, data on them is expensive. As a result, hashes are used to represent an image of each piece of a file, and the pieces can then be safely distributed to storage nodes without risk of substitution of compromise.
