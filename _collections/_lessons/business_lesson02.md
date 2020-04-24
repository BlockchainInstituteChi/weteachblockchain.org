---
layout: lesson
course: blockchain-for-business
module: 1
title: Governance and Forks
permalink: /courses/blockchain-for-business/1/governance-and-forks
---

<br>
<br>
<span>
<span class="openingParagraph">
While private blockchains can be designed or changed to suit the needs of a particular organization, public blockchains have a much more difficult time making changes because of their egalitarian decentralized networks.</span>

Decentralized systems are designed to bring power back to the people. This introduces a unique problem: How do decentralized systems govern themselves? Through a combination of improvement proposals and protocol upgrades via software changes, blockchains can govern themselves with the help and direction of each node on the network.

<span style="font-weight: 400;">The goal within a public blockchain is creating a balance of power. Developers, miners, exchanges, users, and merchants all have a role to play in the ecosystem, giving them the ability to have input in the governance of the network and power. Developers write and release the code, but no one has to run that code. Miners can agree to mine blocks to new standards, but individual nodes can refuse to accept and forward blocks that don't meet those standards. Users and merchants have the power to run the software that they feel is best. The public blockchain ecosystem has a set of built-in checks and balances. Each group gets to represent their interests.</span>
<h3>PROTOCOL CHANGES</h3>

<span style="font-weight: 400;">A popular way of addressing potential protocol changes is by going through a proposal implementation process. Each blockchain has a different process for addressing community introduced proposals, but each involves a rigorous process before a recommendation is approved for implementation.</span>

<img src="/assets/img/courses/blockchain-for-business/BIP-01.png" />

<span style="font-weight: 400;">Bitcoin uses a proposal process through the introduction of BIPs. A Bitcoin Improvement Proposal (BIP) is a design document for introducing new features or upgrades to the Bitcoin software. This is the standard way of communicating ideas since Bitcoin has no central structure or leadership.</span>

<span style="font-weight: 400;">There are three types of BIPs:</span>
<ul>
 	<li>Standards Track BIPs - Changes to the network protocol, block or transaction validation, or anything affecting interoperability.</li>
 	<li>Informational BIPs - Design issues, general guidelines. This type of BIP is NOT for proposing new features and does not represent a community consensus.</li>
 	<li>Process BIPs - Describes or proposes a change in the blockchain’s processes. Similar to Standards BIPs but apply outside the Bitcoin protocol.</li>
</ul>
<span style="font-weight: 400;">Ethereum has its own implementation protocols, taking approved Ethereum Request for Comments (ERC) and turning them into Ethereum Improvement Proposals (EIP).</span>
<h3>A FORK IN THE CHAIN</h3>

<span style="font-weight: 400;">When there is a protocol change, the blockchain’s software must be updated. This is done through a process known as a </span><b>fork</b><span style="font-weight: 400;">. There are multiple types of forks, but all have the goal of updating the blockchain’s protocols.</span>

<img src="/assets/img/courses/blockchain-for-business/Fork-01.png" />

<h4>Hard Fork</h4>
<ul>
 	<li>A hard fork is a protocol change that makes previously valid blocks invalid or vice versa. A hard fork can append the ledger or make major protocol changes.</li>
 	<li>For a node to access the software after the fork, the node must be running the most recent version of the blockchain’s software. This is because the previous chain and the information contained within it has been rendered invalid. A fork is named as such because it creates two paths of a blockchain, one invalid, one valid.</li>
 	<li>A hard fork will ensure that any nodes running old software will have their newly created blocks invalidated, forcing those nodes to update their software if they want to be a part of the new chain.</li>
 	<li>In 2016, the Ethereum-based DAO was hacked. To revert the blockchain to its previous state, a hard fork was implemented to reverse a large scale hack, returning the stolen ether to its rightful owners.</li>
 	<li>Ethereum has been criticized for this hard fork, as many believe immutability must be maintained to have a truly decentralized network. This fork led to a chain split that resulted in Ethereum and Ethereum Classic chains. Most chose to accept the hard fork and continue with the amended Ethereum chain.</li>
</ul>
<h4>Soft Fork</h4>
<ul>
 	<li>A protocol change that is backward compatible, and therefore much less problematic to implement. A soft fork is backward compatible; it can still work with previous versions of the blockchains software. New blocks can still be recognized by old software, making soft forks much less contentious than hard forks. Soft forks are a useful tool for minor network changes.</li>
</ul>
<h4>User Activated Soft Fork</h4>
<ul>
 	<li style="list-style-type: none;">
<ul>
 	<li>A User Activate Soft Fork is a plan to activate a Bitcoin soft fork on a specified date and enforced by a majority of full nodes rather than relying on miners. To succeed, participating nodes must have represented a so-called "economic majority" - users, exchanges and businesses with significant influence over the Bitcoin economy. This is in contrast to previous forks where miners choose which blocks to confirm, giving them great power over software implementation. UASFs are a way to shift the disproportionate power of governance from miners to the rest of the users.</li>
</ul>
</li>
</ul>
<span style="font-weight: 400;">Several blockchains have explored and installed unique governance features. Let’s take a look at some of them in our next lesson.</span>
