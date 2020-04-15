---
layout: lesson
course: blockchain-for-business
module: 1
title: Governance Experiments
permalink: /courses/blockchain-for-business/1/governance-experiments
---


<span>
<span class="openingParagraph">
Proof-of-Work and Proof-of-Stake have proven to be the most popular consensus mechanisms. However, they are not the only methods for getting nodes to verify and agree upon data. Other projects have experimented with rather unique ways of achieving consensus:</span>
<h4>Dash</h4>
<span style="font-weight: 400;">A Proof-of-Work algorithm that is monitored by masternodes. Each Dash masternode requires a minimum stake to run. Masternodes are tasked with acting as extra network supervisors, earning passive income while increasing network security. This is essentially a combination between a Proof-of-Work and Proof-of-Stake algorithm. Blocks are still compiled by miners, but masternodes provide additional supervision while earning coins and ensuring the security of the network.
</span>
<h4>DeCred</h4>
<span style="font-weight: 400;">Another interesting consensus system is Proof-of-Activity, which is a unique hybrid between Proof-of-Work and Proof-of-Stake, allowing the network to implement a series of incentives. </span>
<h4>EOS</h4>
<span style="font-weight: 400;">21 block producers are elected by EOS holders. Block producers are tasked with compiling data into a block, essentially confirming valid transactions to get a block reward. These block producers must stake their EOS, and are randomly chosen to produce the next block. If EOS holders are unhappy with a block producer, they can be voted out and a new block producer is elected. </span><span style="font-weight: 400;">Rewards are very high for block producers, as they collect all transaction fees collected by the network. This provides an incentive for block producers to follow network protocol. </span><span style="font-weight: 400;">This consensus method is known as Delegated Proof-of-Stake or dPoS. It functions as a senate or representative legislative body. EOS holders elect representatives in block producers, who make the crucial decisions and confirmations needed to sustain the network.</span>

<h3>A CASE STUDY: THE BTC vs BCH SPLIT</h3>

<hr />

<img src="/assets/img/courses/blockchain-for-business/CaseStudySplit-01.png" />

<h4>What is the significance of August 1st, 2017 in the Bitcoin community?</h4>
<span style="font-weight: 400;">One of the most contentious forks in cryptocurrency history occurred when Bitcoin Cash split from the main Bitcoin blockchain, creating a separate chain and cryptocurrency. This happened on August 1st, 2017. That date was the culmination of the scaling debate surrounding blockchain. Essentially, the Bitcoin network had seen a recent increase in activity from the previous year and there had been a huge increase in transaction volume. We’ll talk about scaling in the next lesson but put simply, scaling addresses the question of how the Bitcoin network can handle the extra strain put on the network.</span>
<h4>How did this affect the bitcoin holders?</h4>
<span style="font-weight: 400;">The Bitcoin blockchain split in a hard fork, resulting in the creation of Bitcoin Cash. This process was a divergence of code based on incompatible ideas. When the chains split, holders of bitcoin were given an equal amount of bitcoin cash. Coins on the Bitcoin network are essentially duplicated onto a different chain. Forks happen all the time on open source projects, but most were not as contentious as the Bitcoin/Bitcoin Cash fork.</span>
<h4>What is the split in the ideology?</h4>
<span style="font-weight: 400;">The disagreement originated over conflicting ideas on how to scale the Bitcoin blockchain for increased global demand. </span><span style="font-weight: 400;">One group wanted to increase the block capacity from 1MB to 2MB to hold more data. Satoshi Nakamoto specifically stated that scaling should occur on-chain, bolstering the block increase argument as it more closely followed Satoshi’s original vision. This group would eventually split off into the Bitcoin Cash blockchain. </span><span style="font-weight: 400;">The Bitcoin Core developers wanted to upgrade the internal structure of blocks to be more efficient and flexible for future growth. Importantly, this contains a fix to a long-standing bug in Bitcoin call transaction malleability. The addition of SegWit, a protocol upgrade that stores data more efficiently within the 1MB block by utilizing block headers was Bitcoin Core’s solution to this problem. The addition of SegWit also enabled the viability of second-layer solutions.</span>
<h3>SCALING STRATEGIES</h3>

<hr />

<span style="font-weight: 400;">Bitcoin Core is still roughly 1MB while Bitcoin Cash increased to 8MB during the split.  Bitcoin Cash would eventually increase to 32 MB per block. </span>

<span style="font-weight: 400;">One of Bitcoin Core’s proposed solutions was to introduce side chains. They conduct transactions on a parallel blockchain. Another solution was to add a second layer like the Lightning Network, which has transactions conducted off-chain that are not recorded on the Bitcoin blockchain except at open or close. They also aimed to implement the previously mentioned “SegWit”, a protocol change that adjusted how transaction data is stored in a block. Bitcoin Cash planned to increase block sizes and plans to keep doing so as needed. </span><span style="font-weight: 400;">Bitcoin Cash had a successful first year, having been added to multiple exchanges and onboarding several new vendors. However, not all has been rosy in the Bitcoin Cash community since the split.</span>

<span style="font-weight: 400;">Much of blockchain governance is focused on making blockchains as efficient as possible while maintaining decentralization and security. In the next lesson, we’ll take a look at how blockchains are striving to meet the demand needed for widespread use.</span>
