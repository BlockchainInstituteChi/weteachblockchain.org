---
layout: lesson
course: bitcoin-for-developers
module: 1
title: Enter the Blockchain - Part II
permalink: /courses/bitcoin-for-developers/1/enter-the-blockchain-part-ii/
---

<span>
<span class="openingParagraph">
So let’s head back to our example where you are attempting a <b>double spend</b> on the Bitcoin network. You have broadcast two valid transactions for 1 BTC each, one to Alice and one to Bob in an attempt to spend the same bitcoin twice.</span>

<img  src="/assets/img/courses/bitcoin-for-developers/1_b-01.png" />

Which transaction “wins” and becomes valid depends upon which miner wins the mining race! If miner Ayat received the transaction to Alice first, her mining software will then reject the transaction to Bob as an invalid double spend. She will create a block that includes the transaction to Alice, not Bob. If the miner Han receives the transaction to Bob first, his software will reject the transaction to Alice as an invalid double spend. He will create a block that includes the transaction to Bob, not Alice. Though both valid, one of these will lose as an “orphaned block.”

{% include callouts/definition.html
    title="ORPHANED BLOCKS"
    bodyText="These are blocks which are entirely valid but did not become part of the main chain. They can occur naturally when two miners produce blocks at similar times."
%}

If Ayat, or any miner who received Alice’s transaction first, wins this round of the mining race, then Alice receives the transaction. If Han, or any miner who received Bob’s transaction first, wins this round of the mining race, then Bob receives the transaction.

<img src="/assets/img/courses/bitcoin-for-developers/1_b-03.png" />

Let’s assume that Han “wins” this round of the mining race by being the first to find a hash for his block of transaction data that meets with the current network standards. His block of data contains the transaction sending the funds to Bob. He quickly transmits his winning block to the rest of the network. The funds in question are transferred to Bob and the duplicate transaction going to Alice is rejected as an invalid.
<p style="text-align: left;">While it was quite difficult for Han’s computer to find the winning hash, it is trivial for other computers on the network to verify that he has indeed won. Once other nodes have verified that Han did indeed win, they will accept Han’s block, approving of the coinbase transaction that rewards him for his work, and then carry on trying to find a valid hash for the next block.</p>

{% include callouts/note.html
    bodyText='There will only ever be 21 Million bitcoins. Bitcoins are created in the coinbase transaction and given to the winning miner as the block or mining reward. When the network launched in 2009 the mining reward was 50BTC. This reward halves roughly every 4 years, specifically every 210,000 blocks. "Halvings” have taken place in 2012 and 2016, leaving the current block reward at 12.5BTC. The next halving is estimated to take place in 2020. This will continue until the block reward is too small of an amount to be tracked on the Bitcoin network which is estimated to happen ~2140 leaving a total of 21 million BTC.'
%}

<b>This is how Blockchain gets it's name.</b> Each new block of data is <b>cryptographically</b> linked to the last block by including the hash of the previous block in the new block. In this way, blocks are linked together in a sort of cryptographic chain, hence the name blockchain.

{% include callouts/definition.html
    title="BLOCK TIME AND DIFFICULTY ADJUSTMENTS"
    bodyText="When new mining computers join the network there is an increase to the total hashing power of the network, which means that blocks are likely to be found sooner. This situation likely means that the difficulty will be adjusted upwards. And the reverse is true as well. When miners leave the network, the difficulty will be adjusted downwards."
%}

{% include callouts/definition.html
    title="CONFIRMATIONS"
    bodyText="When a transaction has been included in a block it is said to have one 'confirmation'. When a second block is mined ‘on top’ of that block, we say that the transaction now has 2 confirmations, etc, etc. The more confirmations, or blocks added to that chain, the greater the certainty for that transaction. This is important as in a decentralized network like Bitcoin, confirming a transaction is not as simple as a database entry."
%}

<b>The above is the way in which the Bitcoin network agrees upon data and achieves “consensus.”</b> While this whole process is managed by the Bitcoin software, it would be incorrect to think of this system as only computer science. Open, public blockchains like Bitcoin, are entire economic systems that rely heavily on <b>monetary theory</b>, <b>economics</b>, <b>incentive structures</b>, and <b>game theory</b> to function and thrive.

{% include callouts/definition.html
    title="CONSENSUS ALGORITHM"
    bodyText="This is the method by which a network achieves agreement on data. Bitcoin’s consensus algorithm is often referred to as a proof-of-work algorithm due to its heavy reliance on proof-of-work hashing done by miners. Bitcoin’s consensus essentially creates a proof-of-work race between miner nodes in order to determine who gets to add data to the blockchain."
%}

{% include callouts/note.html
    bodyText="There are many other consensus algorithms that have been developed since Bitcoin, such as proof-of-stake."
%}


{% include callouts/callout.html
    title="INCENTIVES AND GAME THEORY"
    bodyText='Bitcoin and other open blockchain systems cannot function without economic incentives. Understanding the system and trying to predict how an open blockchain will behave cannot be done without considering the <a href="https://en.wikipedia.org/wiki/Game_theory" target="_blank" rel="noopener noreferrer">game theory</a>.'
%}

<b>What are the Implications?</b> While outside the scope of this course, it is very interesting to consider the implications of this technology. What might be the impact of money that exists outside the nation-state? What might be the impact of a technology that changes who and how we trust?

Now that was a lot of information to absorb! While that information settles in your head, let’s cover some cryptography basics.
