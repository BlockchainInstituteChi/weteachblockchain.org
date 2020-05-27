---
layout: lesson
course: bitcoin-for-developers
module: 2
title: Governance
permalink: /courses/bitcoin-for-developers/2/governance
---

<br>
<br>
<span class="openingParagraph">
So, we have a decentralized network, that no one entity can control. How do we make changes and upgrades to that network?</span>

How are changes made on a network that no one controls? This dilemma we call governance.

While governance solutions have been built into some blockchain protocols, Bitcoin is fairly simple in this regard. There are only a few built-in methods for decisions making. Let’s take a look at how things get done.
<h3>THE BIP PROCESS</h3>

<hr />

BIP stands for Bitcoin Improvement Proposal. This is a process for submitting changes to the<a href="https://github.com/bitcoin/"> repo</a>.

A description of the process and a complete list of BIP’s can be found <a href="https://github.com/bitcoin/bips">here.</a>

Proposed changes should first be discussed on the <a href="https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev">mailing list</a>, then a pull request submitted.

Once a proposed change becomes a BIP it goes through peer review and the below process.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/Process-01.jpg"
	title=""
	bodyText="<b>A:</b> <i>Draft;</i> <b>B:</b> <i>Deferred;</i> <b>C:</b> <i>Accepted;</i> <b>D:</b> <i>Rejected;</i> <b>E:</b> <i>Withdrawn;</i> <b>F:</b> <i>Final;</i> <b>G:</b> <i>Replaced;</i> <b>H:</b> <i>Active.</i>"
%}

After a BIP is accepted, then the real fun of network implementation begins.
<h3>HOW A BIP BECOMES NETWORK PROTOCOL</h3>

<hr />

How difficult the process is depends a lot on the type of change or BIP that is being implemented.
<h4>Types of BIP’s or Tracks.</h4>
<ul>
 	<li>Standards
<ul>
 	<li>Changes that affect network protocol</li>
 	<li>Changes in block or transaction validity rules</li>
 	<li>Changes or additions that affect the interoperability of applications using Bitcoin</li>
 	<li>Requires community consensus</li>
</ul>
</li>
 	<li>Informational
<ul>
 	<li>Changes in general guidelines or information to the Bitcoin community</li>
 	<li>Does not require community consensus</li>
</ul>
</li>
 	<li>Process
<ul>
 	<li>Proposes a change to a process</li>
 	<li>Usually requires community consensus</li>
</ul>
</li>
</ul>
It’s very important to note the difference between a simple code change and a consensus change. Any change affecting the consensus rules on the network will require either a soft fork or a hard fork.

{% include callouts/note.html
	bodyText="In this context “fork” has a different meaning from software fork or a fork in a repo. Here we mean a chain split or a network partition that can result in separate networks."
%}

<h3>HARD FORKS VS. SOFT FORKS</h3>

<hr />

A soft fork is a network upgrade which can be thought of a non-mandatory. Nodes running old versions of the software will still be able to interact with and maintain consensus on the network.

A hard fork is a network upgrade or change that either forces nodes on the network to upgrade or results in a permanent split in the network.

{% include callouts/definition.html
	title="TEMPORARY FORKS"
	bodyText="The most common way in which a fork occurs is when there are separate groups of nodes that have different copies of the blockchain ledger. This can happen when there’s a high transaction volume, and nodes find multiple new blocks which can be confirmed within the rules of the system. In Proof of Work models, the longest chain will always win, so the network will ultimately return to a global consensus quite quickly."
%}

{% include callouts/definition.html
	title="BALANCE OF POWER"
	bodyText="There are many different groups in the bitcoin ecosystem that have influence. Miners, developers, wallets and users, exchanges, and merchants. It’s important to remember that while bitcoin core developers can release changes to the protocol, no one has to upgrade to run the new software. That is a choice made by every individual who has a machine running bitcoin."
%}

The process of transitioning to new consensus rules is called activation.

There have been a number of methods used in Bitcoin to activate a change:

{% include callouts/definition.html
	title="FLAG DATE"
	bodyText="This is a very simple activation method where a new rule becomes active on a specific date."
%}

{% include callouts/definition.html
	title="ISM ISSUPERMAJORITY"
	bodyText="This uses miner signaling and was the first version of MASF(described below). This bit of code activates changes once 950 of the last 1000 blocks have signaled for activating the new change."
%}

{% include callouts/definition.html
	title="BIP9 - VERSION BITS"
	bodyText="Miner signalling, a way for miners to signal readiness for a soft fork by setting bits in the block header nVersion field."
%}

{% include callouts/definition.html
	title="MASF - MINER ACTIVATED SOFT FORK"
	bodyText="In this scenario blocks signal a version and a soft fork is activated through this signaling."
%}

{% include callouts/definition.html
	title="UASF - USER ACTIVATED SOFT FORK"
	bodyText="This scenario involves non-mining full nodes updating their software to a version that requires certain rules on the network, perhaps beginning at a flag date after which blocks that do not meet those requirements are not propagated on the network."
%}

The above is a rough summary as this is a rather complicated situation. Other networks employ more sophisticated methods for determining consensus and activating changes. The Decred project has an interesting model which you can read about <a href="https://docs.decred.org/governance/introduction-to-decred-governance/">here</a>.

There has been an evolution of methods used to bring about change in Bitcoin. The well-distributed balance of power in the ecosystem has done a good job of preventing any hostile takeovers, it has also made the system very conservative with only the most tried and test and overwhelmingly approved of changes making it to activation.

The activation process on the bitcoin network is a complicated and constantly evolving process.

<hr />

Further reading can be found here:

<a href="https://medium.com/@elombrozo/forks-signaling-and-activation-d60b6abda49a">Forks, Signaling, and Activation</a>

<a href="https://bitcoincore.org/en/2016/06/08/version-bits-miners-faq/">Version bits FAQ for miners</a>

<a href="https://medium.com/@bergealex4/uasf-user-driven-protocol-development-da4e886832d">UASF: User Driven Protocol Development</a>

<hr />

In the next section we’ll get into technical specifics starting with setting up a node.
