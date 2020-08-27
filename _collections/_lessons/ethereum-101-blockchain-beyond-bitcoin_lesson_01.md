---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 1
title: Early Bitcoin Proposal
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/1/early-bitcoin-proposal
---
<br>
<br>

<span class="openingParagraph">BITCOIN WAS JUST THE BEGINNING</span>
The original Bitcoin Whitepaper describes a form of peer-to-peer currency where participants prove that they are trustworthy by wasting computational energy. The core goal of the Bitcoin Protocol in the early stages was to provide a way for a network of untrusting peers to exchange value with minimal risk and maximum anonymity. The primary issue with such a system was known as the double spend problem. If peers are to keep track of the value each other hold, then how is it possible to prevent simultaneous spending of the same monies? 

In order to resolve this problem, Satoshi Nakomoto proposed that the new transactions would only lock once a majority of nodes agreed on them. In practice, this means that Bitcoin transactions take about 10 minutes to process. Ethereum operates differently, which enables new possibilities, such as smart contracts, and flexible asset structures.

{% include callouts/callout.html
   title="The concept of blockchain has evolved"
   bodyText='It may come as a surprise to many, but <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">the original Bitcoin Whitepaper</a> published in 2008 never actually used the word blockchain. After it was written, however, the idea caught on. Ethereum emerged in 2015 and expanded the concept substantially.'
%}

<h3>In this course we'll cover</h3>
<ul>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/1/introducing-ethereum/">What makes Ethereum different</a></li>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/2/smart-contracts/">Smart Contracts</a></li>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/2/fungible-tokens/">Token Creation</a></li>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/2/unique-ditial-assets/">Digital Collectibles</a></li>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/3/accountable-design/">Basics of Decentralized Applications</a></li>
    <li><a href="/courses/ethereum-101-blockchain-beyond-bitcoin/4/network-congestion/">Ethereum 2.0 and the Future</a></li>
</ul>

<h3>THE BIG PICTURE</h3>

<img src="/assets/img/TheBigPicture-01.jpg"> 

{% include callouts/note.html
   bodyText="<h5>The Bitcoin Whitepaper proposed a system wherein</h5><ol><li >All peers are anonymous</li><li >All peers can reach agreement</li><li >Agreements can be resolved without systemic failure or malfunction</li><li >All peers are treated equally</li></ol>"
%}
<h3>EVOLVING TO ETHEREUM</h3>

<span >In the Bitcoin protocol, the blockchain is the single unchangeable record, shared by every peer, which allows anonymous users to trust one another. A </span><b>Bitcoin</b><span > exists only as a sum of credits attributed to a certain peer and registered to that blockchain. A blockchain is just a set of records which are structured to provide maximum accountability without compromising privacy.</span>

<span >In Bitcoin, the </span><b>block</b><span > is the batch of transactions which are locked every ten minutes. The </span><b>block time</b><span > is the ten minute window, and we refer to the competition between nodes to prove trustworthiness by wasting energy as </span><b>Proof-of-Work</b><span >. In the next lesson, we'll explore how this concept evolved in the years following 2008.</span>
