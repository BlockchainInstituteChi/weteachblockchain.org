---
layout: lesson
course: bitcoin-for-developers
module: 2
title: Decentralization and Consensus
permalink: /courses/bitcoin-for-developers/2/decentralization-consensus
---

<span>
<span class="openingParagraph">
<b>Bitcoin</b> was built to enable decentralized agreement, or consensus, on data. Bitcoin’s Proof-of-Work, a mining consensus algorithm, was built to achieve this goal and maintaining this decentralization is fundamental to the systems structure and security model. However, this is a very different structure than most of us are used to working with. Interacting with a blockchain is not like querying a database; it is much more complex.</span>

Let’s start by taking a look at the beginning of digital, decentralized networks in an effort to gain some insight into this structure.

<img src="/assets/img/courses/bitcoin-for-developers/DecentralizedCircles-01-01.png" />

These networks began with the internet. While the internet itself soon developed a client-server model, many networks online developed a truly decentralized, peer-to-peer structure. Some examples being:
<ul>
 	<li>IRC/Usenet (federated)</li>
 	<li>Napster/eDonkey/Limewire</li>
 	<li>Kademlia -&gt; BitTorrent</li>
</ul>
The decentralized network that is most commonly known is likely BitTorrent which is used for peer-to-peer (P2P) file sharing. It might be helpful to keep this architecture in your head when visualizing the bitcoin network.

<img src="/assets/img/courses/bitcoin-for-developers/DecentralComm-01-small.png" />

Bitcoin is a decentralized, P2P network in a very similar fashion to a file sharing network. (Learn about decentralized file storage<a href="https://theblockchaininstitute.org/courses/decentralized-storage/"> here</a>.)

When you download the Bitcoin client software, it generally comes with the IP address of a few well-known nodes. When the software runs, it queries those nodes to find it’s connections continues like a ripple effect. Bitcoin main net connections happen on port 8333, and the program looks for connections there.

The software is constantly connecting with peers to receive network data and transaction data. A full node will keep a full copy of the blockchain, check the validity of the data it is receiving, and then pass it along to peers. In this way nodes on the network play an important role in maintaining network consensus.
<h3>FULL NODE VS. LIGHT CLIENT</h3>

<hr />

A “full node” is a computer that is running bitcoin software and maintaining a complete copy of the bitcoin blockchain. In contrast, a “light client” is a computer, or sometimes a mobile phone, that is running bitcoin software, but that does not maintain a complete copy of the blockchain. This is often done to save space on a machine or mobile phone. For example, a bitcoin wallet running on a smartphone. In this scenario incoming transactions are validated via a process called <a href="https://en.bitcoinwiki.org/wiki/Simplified_Payment_Verification" target="_blank" rel="noopener noreferrer">SPV</a>, or Simplified Payment Verification.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/FullNodeLightClient-01.png"
	title="Full Node or Light Client"
	bodyText='<b>WHY RUN A FULL NODE:</b> <i>Running a full node provides a greater level of autonomy, influence in network decisions (see</i><a href="https://en.wikipedia.org/wiki/User_activated_soft_fork" target="_blank" rel="noopener noreferrer"> <i>UASF</i></a><i>) and increased privacy and security. Light clients rely on other full nodes on the network to provide them with data. A light client has to query another node to find data on a transaction that it is interested in. This can reveal the financial interests of the light client operator.</i>'
%}

We briefly covered the mining process in lesson two, Enter the Blockchain Part I, and here we’ll dive a bit deeper into consensus algorithms and maintaining consensus long term with governance systems.
<div class="bigQuote">“A consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed processes or systems. Consensus algorithms are designed to achieve reliability in a network involving multiple unreliable nodes. Solving that issue — known as the consensus problem — is important in distributed computing and multi-agent systems.”
<strong><a href="https://whatis.techtarget.com/definition/consensus-algorithm"> whatis.com</a></strong></div>
&nbsp;

It’s rather remarkable that a collection of computers, with no central authority, can come to an agreement on the state of the network. This process is called emergent consensus. We call it emergent because it is not brought about explicitly but through the interplay of four processes which happen independently on nodes throughout the network.
<ul>
 	<li>Validation of transactions</li>
 	<li>The mining of blocks</li>
 	<li>Validation of blocks</li>
 	<li>Selection of the chain with the most cumulative proof-of-work</li>
</ul>
The longest, valid chain with the most accumulated proof-of-work is the chain that a node is programmed to follow. Accumulated proof-of-work can be thought of as a measure of the amount of hashing power or computing power that went into making that chain of blocks.

Proof-of-Work, discussed in our second lesson, is only one step in this process and can be replaced with other consensus mechanisms such as Proof-of-Stake.
<h3><b>PUBLIC NETWORK CONSENSUS ALGORITHMS</b></h3>

<hr />

<ul>
 	<li>PoW -&gt; Proof of Work</li>
 	<li>PoS -&gt; Proof of Stake</li>
 	<li>DPoS -&gt; Delegated Proof of Stake
<ul>
 	<li>There are many variations on PoS</li>
</ul>
</li>
 	<li>PoA -&gt; Proof of Activity
<ul>
 	<li>A hybrid between PoW &amp; PoS</li>
</ul>
</li>
</ul>
While we won’t dive into differing consensus algorithms here, it is important to note that many options have been developed since the invention of Nakamoto proof-of-work consensus in 2008.

{% include callouts/callout.html 
	title="INCENTIVES AND GAME THEORY"
	bodyText='While Bitcoin is a software project, the network that it creates is sustained and managed with incentives and game theory. Let’s take a look at how that protects the network in the below video: <iframe width="910" height="512" src="https://www.youtube.com/embed/oo-20sLqp3M?list=PLkFjuupTY0WQvkwWZ9QYctjyyZuVg6lLK" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
%}
