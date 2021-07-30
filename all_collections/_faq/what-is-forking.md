---
title: What is a blockchain fork?
image: Forking.jpg
ogImage: Forking.jpg
permalink: /faq/what-is-forking/
layout: faq
readtime: 2m
tag: CONCEPTS
focusKeyword: Temporary Forks, Soft Forks, Hard Forks, Open-Source
learnMoreLink: /courses/crypto-curious-course/
learnMoreText: the Crypto Curious Course
learnMoreImage: ccc_jan25_2020.jpg
weight: 10
sticky: false
---
<p>No, we are not talking about everyone’s favorite piece of silverware. Think of it as a fork in the road. The path you were walking down now diverges into two (or more) different paths forward.</p>

<p><a href="/faq/what-is-blockchain/" target="_blank">Blockchains</a> exist because networks of computers run the same software that follows the same set of rules. The code that makes up this software on a public blockchain is open-source, meaning anyone can copy it and make any changes they want.</p>

<p>If groups of nodes are running different software or there are inconsistencies in the record of transactions, it can cause the blockchain to fork.</p>

{% include callouts/definition.html
	title="NODE"
	bodyText='A node is a computer that runs a blockchain’s software and is working to maintain it. <br>
	Learn more blockchain terms with our crypto <a href="/posts/12/07/crypto-lingo-you-need-to-know" target="_blank">crypto slang page</a>.'
%}

<h2>Types of Forks</h2>
<h3>Temporary Forks</h3>
<p>Blockchains collectively maintain a record of all the transactions conducted on the network. The most common type of fork occurs when multiple blocks have the same block height.</p>
<img src="/assets/img/Forks2_BlockHeight.jpg" alt="Illustration representing two blocks at the same height on the blockchain" title="Block Height">
<p>This can happen when multiple new valid blocks are found and confirmed during times of high transaction volume. Groups of nodes would temporarily have different copies of the blockchain ledger. In proof-of-work consensus models, the longest chain will always win, so the network will ultimately return to a global consensus. The transactions contained in the shorter chain will return to the mempool to be added to a future block.</p>

{% include callouts/definition.html
	title="MEMPOOL"
	bodyText='The digital waiting room where transactions are sent before they are included in a block by a miner. <br>
	Learn more blockchain terms with our crypto <a href="/posts/12/07/crypto-lingo-you-need-to-know" target="_blank">crypto slang page</a>.'
%}

<h3>Permanent Forks</h3>
<p>While most forks are temporary, <a href="/faq/what-is-bitcoin-improvement-proposal/" target="_blank">software upgrades</a> to the network or changes in the protocol can result in a permanent fork.</p>

<h3>Soft Forks</h3>
<p>A type of upgrade which is backward compatible with nodes running older versions of the software. Even if only some of the nodes chose to run the upgraded version of the software they can still interact with and maintain consensus on the network. Soft Forks do not create a new path so there is no new blockchain or currency.</p>

<h3>Hard Fork</h3>
<p>A software upgrade or change that forces nodes on the network to upgrade or results in a permanent split in the network. In this case, the upgraded nodes are not backward compatible and cannot interact with older nodes.</p>

<p>If nodes are running the old version of the software, they will end up with their own version of blockchain data, completely separate from the nodes that upgraded. This situation results in the creation of two separate networks.</p>

<img src="/assets/img/Forks2_BCfork.jpg" alt="Illustration representing the Bitcoin and Bitcoin Cash hard fork" title="Bitcoin Cash hard fork">

{% include callouts/callout.html
   title="Bitcoin and Bitcoin Cash"
	bodyText="On August 1st of 2017, Bitcoin experienced a hard fork that created two separate blockchains, Bitcoin and Bitcoin Cash.
	<br>
	<br>
	The Bitcoin community had argued for years over whether Bitcoin should be a store of value or medium of exchange. Those that favored Bitcoin being a medium of exchange 	proposed a change to the code that would increase the size limit of each block from one megabyte to eight.
	<br>
	<br>
	The nodes that accepted the new upgrade became incompatible with the nodes that did not and two diverging paths were formed. If you held bitcoin before the fork, you 	would now have an equal amount of coins on both networks that could be used independently of each other."
%}
