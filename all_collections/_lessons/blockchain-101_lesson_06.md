---
layout: lesson
course: blockchain101
module: 1
title: Properties of a Blockchain
permalink: /courses/blockchain-101/01/properties-of-a-blockchain
---

<iframe src="https://www.youtube.com/embed/Urc99JnsgT8?rel=0" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen"></iframe>


<span class="openingParagraph">A <strong>blockchain</strong> is a <strong>decentralized ledger</strong> that records all transactions that are visible on a public network. Blockchain's architecture allows these transactions to be <strong>autonomous and immutable</strong> while using cryptography and network architecture for security. Every transaction is permanently recorded to the blockchain and cannot be altered in any way.
</span>

The name blockchain largely refers to the structure of the technology. Blocks contain data that represents transactions, and when a block is created or "mined," all the data contained in the block is added to the chain. Permanently. All ledgers are updated to recognize this new consensus. Blocks are then linked together to form a chain and can be referred back to at any time, hence the name blockchain. We'll go over the mining process in an upcoming lesson.

<span style="font-weight: 400;">The Bitcoin blockchain was created to allow a network to coordinate and reach “consensus” on shared data. Blockchains were created to solve the problem of </span><b>coordinating data with people around the world, who don’t know or trust each other.</b>

<img src="/assets/img/courses/blockchain-101/1-03.jpg" />

<span style="font-weight: 400;">The first thing to keep in mind here is that Bitcoin, and any other public blockchain, is a truly <strong>peer-to-peer network.</strong> There is no Bitcoin Corporation; there is no one entity in control. When trying to visualize this process, it is helpful to keep the picture of <strong>nodes</strong> (computers) on a shared network, all running the same or compatible software, in your head. </span>

Because a blockchain is designed as a distributed ledger, many computers (nodes) are connected to form a network. As previously mentioned, this structure is referred to as a <strong>decentralized </strong>or<strong> a peer-to-peer (P2P) network.</strong> If someone wants to hack the network, they must get into all of these connection points at the same time. The chances of this occurring are extremely low, which is a testament to the security used in blockchain technology.

<img src="/assets/img/courses/blockchain-101/3609aef6-9da8-437f-921f-a8a4f442e66b.jpg" />

<h4></h4>

<h3 style="text-align: left;">WHAT MAKES A BLOCKCHAIN?</h3>
<hr />

{% include callouts/definition.html title="Security" bodyText="Blockchains have two primary security mechanisms: network structure and cryptography. In blockchain technology, cryptography is used extensively to sign data to prove that a transaction was approved by the owner of the funds. The decentralized structure of network eliminates any central points of failure. To compromise an open blockchain network a hacker would have to control a majority of the nodes at the same time. This makes a network attack very expensive and impractical." %}

{% include callouts/definition.html title="Transparency" bodyText="All transactions on a public blockchain, like Bitcoin, are viewable to anyone with an internet connection. Each transaction is assigned its own unique ID known as a hash. These identifiers can be used to look up a public record of the transaction, also known as transaction receipt. Details included in a transaction receipt include the addresses involved, the amount transferred, a timestamp, transfer fees, and more. All computers on the network have access to all the transactions records, creating a high level of transparency. Because of the transparency provided, many institutions, including nonprofits, use blockchains to instill confidence in their financial practices." %}

{% include callouts/definition.html title="Immutability" bodyText="Once a block is confirmed, the data recorded to the blockchain cannot be removed or edited. Each block is stacked upon the previous block. The next block must have the preceding block’s hash in order to be added to the chain. This assures that the blockchain stays in chronological order, effectively making it tamper-proof." %}

{% include callouts/definition.html title="Distributed" bodyText="Each computer running the blockchain’s software has a copy of all the information contained in that blockchain. Information isn’t processed through a central server but is transmitted and verified by nodes in parts of the network.  The network functions based on a set of rules that every client must follow exactly; if blocks are broadcast to the network and do not follow the validity rules, the block will be rejected. A blockchain's network is distributed, allowing for an egalitarian, peer-based network." %}

{% include callouts/definition.html title="Consensus" bodyText="Every node on the Bitcoin network contributes to consensus, the process by which the data is agreed upon and becomes the truth on the network. However, certain nodes called miners play a very important role in this process. Nodes work together to verify the information being transmitted by other nodes without relying on a central bookkeeper. Each consensus mechanism has its own set of rules; it might help to think of them like sealing an envelope. Once all the messages (transactions) are inside, there is a set of rules that dictate who may seal the envelope (block) and under what conditions." %}



