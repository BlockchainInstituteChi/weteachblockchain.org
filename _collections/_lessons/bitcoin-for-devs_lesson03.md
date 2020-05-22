---
layout: lesson
course: bitcoin-for-developers
module: 1
title: Enter the Blockchain - Part I
permalink:  /courses/bitcoin-for-developers/1/enter-the-blockchain-part-i
---
<br>
<br>
<span class="openingParagraph">The Bitcoin blockchain was created to allow a network to coordinate and reach “consensus,” or agreement on shared data. Blockchains were created to solve the problem of how do users coordinate data with people, around the world, who they don’t know or trust?</span>

In this lesson and the next, we’ll walk through how the Bitcoin network comes to agreement on transaction data.

But first, lets cover hashing as it is an integral part of the Bitcoin “Proof-of-Work consensus mechanism.”

A hash function takes an input value and creates an output value deterministic of the input value. For any input value X, you will always receive the same output value Y whenever the hash function is run. In this way, every input has a determined output.

<img src="/assets/img/courses/bitcoin-for-developers/1_b-02.png" />
<h3>Properties of hashes:</h3>
<br>
<ul>
 	<li>    Fixed length</li>
 	<li>    No matter the size of the input, the output will be a uniform size</li>
 	<li>    Easy to verify, infeasible to reverse</li>
 	<li>    Any change in the input, no matter how small, will result in a different output</li>
 	<li>    The output can be called the hash value, digest, or simply hash</li>
</ul>
This is very useful in a number of ways. It allows you to use a hash as a nearly unforgeable identifier of data which can then be used to validate that data. The hash of data can also be used in a table to facilitate the quick lookup of that data.

Bitcoin uses hash in many ways. For example, they are used to create transaction ID’s and to summarize and secure the data in a “block” of transaction data via Merkle trees.
{% include callouts/definition.html
    title="MERKLE TREE"
    bodyText="A tree constructed by hashing paired data (the leaves), then pairing and hashing the results until a single hash remains, the Merkle root."
%}

{% include callouts/note.html
	bodyText='The <a href="https://en.bitcoinwiki.org/wiki/SHA-256">SHA-256</a> hash algorithm is used extensively in bitcoin.'
%}

And now that hashes are out of the way, let's get back to understanding how the Bitcoin network makes decisions on which data is correct, and which is not.

The first thing to keep in mind here is that this is a truly peer-to-peer network. There is no Bitcoin corporation, nor is there any one entity in control.

When trying to visualize this process, it is helpful to keep the picture of nodes (computers) on a distributed network in your head. Remember, bitcoin is not a business or corporation, there is no CEO, no one entity is in control of it. Bitcoin is simply a network of computers all running the same, or compatible, software.

<img src="/assets/img/courses/bitcoin-for-developers/1-03.png"  />


Let’s walk through the Bitcoin blockchain proof-of-work consensus process with an example:

You have one bitcoin that you are trying to double spend. You create a perfectly valid bitcoin transaction sending your 1 BTC (the abbreviation for the currency unit of Bitcoin) to Alice. You sign that transaction and broadcast it to the Bitcoin peer-to-peer (P2P) network. However, at the same time, you create an also perfectly valid transaction sending that 1 BTC to Bob, sign and broadcast it. <b>How will the network decide which transaction is valid and which transaction is to be rejected as a double spend?</b>

<img src="/assets/img/courses/bitcoin-for-developers/1_b-01.png"  />

Every node on the Bitcoin network contributes to “consensus,” the process by which the data is agreed upon and becomes the ‘truth’ on the network. However, certain nodes, called <b>miners</b>, play a very important role in this process.

The Bitcoin software creates a competition between mining nodes who do the work of gathering transaction data into “blocks.” In this competition, the winning miner receives a reward for their work and their block of data becomes a part of the blockchain.

The mining reward plays a very important role in providing economic incentives to do the work of maintaining the network. Miners, who are simply people running computers with a lot of processing power, are competing with each other to create a valid block of Bitcoin transaction data that will be accepted by the network. When a miners block of data is accepted by the network, they are given some bitcoin as a “mining reward” or “block reward” This happens in a special transaction called a coinbase transaction (not to be confused with Coinbase the company).

<img src="/assets/img/courses/bitcoin-for-developers/Halving-01.png"  />

When the Bitcoin network was launched in 2009, the reward was 50 BTC per block. This reward halves (called halving) every 4 years (or 210,000 mined blocks) until it reaches an amount too small to transfer on the Bitcoin network. This was originally scheduled for the year 2140, but due to variations in difficulty adjustments, will likely occur before then.

To create a valid block and win the competition, a miner needs to validate all the transactions in the block and then find a hash for the block that meets with the current network requirements.

The Bitcoin software is designed to self adjust it’s settings so that a block is found roughly every ten minutes. This is done via a network difficulty setting. Roughly every two weeks, every 2016 blocks, all the nodes on the network calculate how quickly valid blocks were “found” or “mined” on the network. If valid blocks of transaction data were mined more frequently than every 10 min, the difficulty requirement will go up. If blocks were minded less often than every 10 min, the difficulty requirement will do down.

The difficulty requirement is simply the format of the hash of the block data.

When the difficulty requirement goes up, then the network will only accept hashes that start with a greater number of zeros.

For example, the first hash below might not be ‘difficult’ enough to meet current network standards, while the second hash might be satisfactory.

{% include callouts/codeSnippet.html
	title="A low-difficulty hash"
	bodyText="<b>0000000000000</b>8a3a41b85b8b29ad444def299fee21793cd8b9e567eab02cd81"
%}

{% include callouts/codeSnippet.html
	title="A higher difficulty hash"
	bodyText="<b>00000000000000000000</b>85b8b29ad444def299fee21793cd8b9e567eab02cd81"
%}

This involves some luck as a miner will not be able to determine what the hash will look like prior to running the data through the hashing function. However, we call it difficulty rather than luckiness as the more computing power miners put into the process(relative to the rest of the network) the more likely they are to be lucky enough to find an acceptable hash.

A miner attempts to find an acceptable hash simply by hashing the block data together with a random number called a “nonce.”

{% include callouts/definition.html
	title="NONCE"
	bodyText="An arbitrary number that can be used just once in cryptographic communication. In the case of bitcoin mining, a nonce is added to the block data to produce variation in hashing output."
%}

A miner will hash the block data, again and again, each time trying a different nonce until they are successful in finding a valid block hash, or until another miner has done so.

Because of the way hash functions work, finding a compatible hash is a matter of trial and error that can take a considerable amount of computing power. Yet, verifying that a hash is valid is very quick and easy.

This hashing is intentional busy work called “<a href="https://en.wikipedia.org/wiki/Proof-of-work_system" target="_blank" rel="noopener noreferrer"><b>proof-of-work,</b></a>” a concept first developed as a method to combat spam emails in 1993.

This competition plays out with a miner winning the competition and receiving a reward roughly every 10min.

In the next lesson, we’ll see how this competition determines which transaction in a double spend is valid and which is rejected. But first, here are some Mining Terms to get familiar with:

{% include callouts/definition.html
	title="DIFFICULTY"
	bodyText="The number of leading zeros that a block hash should have."
%}

{% include callouts/definition.html
	title="BLOCK REWARD"
	bodyText="The amount of BTC given to a miner when their block is accepted by the network."
%}

{% include callouts/definition.html
	title="BLOCK TIME"
	bodyText="A measure of how long it will take the hashing power of the network to find a solution to the block hash, on average."
%}

{% include callouts/definition.html
	title="HASH RATE"
	bodyText="The estimated number of terahash per second the Bitcoin network is performing."
%}

{% include callouts/definition.html
	title="HASHING POWER"
	bodyText="The hash rate of a particular mining computer."
%}

{% include callouts/definition.html
	title="APPLICATION SPECIFIC INTEGRATED CIRCUIT (ASIC)"
	bodyText="A computer chip built to be heavily optimized for a particular computational process, such as hashing SHA256."
%}

{% include callouts/definition.html
	title="HALVING"
	bodyText="The date, roughly every four years, when the block reward is reduced by half."
%}
