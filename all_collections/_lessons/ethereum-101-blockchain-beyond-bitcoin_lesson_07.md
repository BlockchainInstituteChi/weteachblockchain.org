---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 3
title: Accountable Design
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/3/accountable-design/
---
<br>
<br>
<span class="openingParagraph">
The most important purpose of the Ethereum blockchain is to provide a reliable way of verifying information and computation over time. Just as Bitcoin was designed to provide maximum accountability and maximum privacy for value transfer, Ethereum is designed from the ground up to be a decentralized computer.</span>

<h3>THE STATE OBJECT</h3>

<span >As we've explored already, the consensus mechanisms of the Ethereum Virtual Machine allow computers all over the world to share a common State Object. This unique characteristic allows the EVM to act as both the executive and judicial authority, enabling it to monitor events and track changes, and take corrective action automatically. </span>

<h3>MERKLE TREES</h3>

<span >As in the Bitcoin context, the EVM uses a chain of hash signatures to link information over time. In order to increase the amount of information that can be represented within a single hash, tree structures can be used to contain even more information. </span>

{% include callouts/imageWithCaption.html
	image="/courses/ethereum-101/MerkleTrees-01.jpg"
	title=""
	bodyText="In a Merkle Tree, raw data is hashed, and the signatures of many data sets can be combined together to create a single very small signature for a large data set."
%}

<span >In the EVM this technique is employed to allow a very large State Object to exist without a signature of equal size. In fact, the entire hash signatures for the whole EVM make up only a fraction of its size. </span>

{% include callouts/definition.html
	title="TRANSITION FUNCTION"
	bodyText='In order to add new information to the State Object, the entire network of peers must be able to find consensus on which changes to make. This process is embedded in the core EVM code, and uses a similar solution to the Bitcoin Proof-of-Work consensus algorithm in order to accomplish complex operations within a<a href="https://docs.google.com/document/d/1QYr8pCIOhs9Lb7N1VUUlByFnYg1T6V7zuihBKb-f4lM/edit#byzantine-fault-tolerant"> Byzantine Fault Tolerant system.</a>'
%}

<span >As will soon become apparent, this is no small feat. Providing Byzantine Fault Tolerance across a Turing Complete Machine is the collective work of hundreds of people all over the world, and is at the heart of what makes the Ethereum Virtual Machine so revolutionary. In the following lessons, we'll explore the challenges that this task presented, and how they can influence the design of the apps that run on this network. </span>
