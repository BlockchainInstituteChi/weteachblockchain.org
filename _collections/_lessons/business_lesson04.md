---
layout: lesson
course: blockchain-for-business
module: 2
title: Scaling to Meet Demand
permalink: /courses/blockchain-for-business/2/scaling-to-meet-demand
---


<span>
<span class="openingParagraph">
Blockchains are a fairly new technology, with the first one, Bitcoin, debuting about a decade ago. The goal for early blockchains was clear: They were trying to prove themselves as a secure, decentralized monetary system. Bitcoin became a store of value, but by the design of having blocks created every ten minutes. Since transactions are only confirmed when a block is created, it's not exactly a fast solution. Most blockchains work fine when they aren't being tested by immense traffic on the network. But as soon as more people use the network, backlogs and bottlenecks are a very real possibility. To use the network at scale some changes had to be made.</span>
<h3>THE SCALING PROBLEM</h3>

<hr />

<img class="aligncenter size-full wp-image-12815" src="https://theblockchaininstitute.org/wp-content/uploads/2019/08/Scaling-01.png" alt="" width="9095" height="2166" />

<span style="font-weight: 400;">The second-generation blockchains looked to solve this scalability issue, however, most came to find they had to sacrifice either speed, security, or decentralization to explore scalability. </span><span style="font-weight: 400;">This is described as the </span><b>scalability trilemma</b><span style="font-weight: 400;">, and it's something that's on the mind of blockchains developers.</span>

<span style="font-weight: 400;">The ideal blockchain would have all three of the characteristics: security, decentralization, and speed. But as we demonstrated above, having all three of these characteristics at scale, with many people using the network, is the true test. And it is becoming increasingly clear that without innovation this "utopian chain" cannot be achieved.</span>

<span style="font-weight: 400;">But fortunately, innovators are working on scalability solutions as we speak, whether it be the lightning network, sharding, or state channels. This problem is facing every blockchain and each is trying to come up with their solutions. And while these solutions will bring us closer to achieving all the desirable aspects of a blockchain, will these solutions bring blockchains to this place, the blockchain promised land so to speak? It will likely get us closer to our goal, but even with these solutions implemented it is unlikely that all three criteria could be completely satisfied. Only time will tell.</span>
<h3>BITCOIN</h3>

<hr />

<img class="aligncenter size-full wp-image-12817" src="https://theblockchaininstitute.org/wp-content/uploads/2019/08/ScalingBitcoin.png" alt="" width="9095" height="2166" />

<span style="font-weight: 400;">Bitcoin scaling has been a very contentious issue. The most promising Bitcoin project designed to address the scalability issue facing Bitcoin is the Lightning Network. </span><span style="font-weight: 400;">The Lightning network conducts off-chain transactions that sync with the blockchain at the open or close of transaction channels. The Lightning Network is designed to make Bitcoin easier to use in everyday commerce settings. This design keeps the security of normal/on-chain Bitcoin transactions and at any time these parties can settle on-chain. </span><span style="font-weight: 400;">Channels are open between individuals or entities that are going to be doing continued business. The structure of the network allows for these smaller transactions to be executed without waiting for the confirmations needed on the Bitcoin blockchain, making transactions much faster. The Lightning Network has long been cited as a possible solution for everyday spending and routing of bitcoin through these party channels.</span>
<h3>ETHEREUM</h3>

<hr />

<img class="aligncenter size-full wp-image-12816" src="https://theblockchaininstitute.org/wp-content/uploads/2019/08/ScalingEth.png" alt="" width="9095" height="2166" />
<h4>PLASMA</h4>
<span style="font-weight: 400;">Ethereum-based Plasma introduced a novel scaling solution that could enable Ethereum to reach many more transactions per second. Like payment channels in the Bitcoin Lightning Network, Plasma is a technique for conducting off-chain transactions while relying on the underlying Ethereum blockchain to ground its security. The goal is to take computational operations away from the Ethereum “main chain” and perform them “off-chain” instead. These techniques are still able to sufficiently guarantee a certain level of security and finality.</span>

<span style="font-weight: 400;">Plasma takes this idea even further by allowing for the creation of “child” blockchains attached to the “main” Ethereum blockchain. These child-chains can even spawn their own child-chains, which can themselves have another set of child-chains etc. So Plasma is many branching blockchains linked to one root blockchain, Ethereum. </span><span style="font-weight: 400;">More complex operations can be performed on the child-chain than are possible on the main chain, allowing developers to run entire applications with thousands of users. Ideally, this Plasma-chain can operate at faster speeds and lower fees than the main chain, as they do not need to be replicated across the entire Ethereum blockchain.</span>
<h4>RAIDEN</h4>
<span style="font-weight: 400;">The Raiden Project is a second-layer based payment solution that looks to solve some of Ethereum’s scaling issues. Raiden is an open-source project that aims to scale Ethereum by using state channel technology, similar to Bitcoin’s Lightning Network.  </span><span style="font-weight: 400;">As a result, there has to be a plan to make sure that the network can handle this increased demand. That’s where projects like Raiden come in. According to the project, th</span><span style="font-weight: 400;">e Raiden Network is an off-chain transfer network for Ethereum-based tokens. It provides a fast, scalable, and cheap alternative to on-chain token transfers. At the same time, the Raiden Network transfers provide users with guarantees of finality, security, and decentralization similar to those offered by blockchains. In short, you get the positive features of blockchain, all while overcoming one of the technologies biggest hurdles.</span>
<h4>SHARDING</h4>
<span style="font-weight: 400;">Another possible scaling solution that has been considered is what is known as Sharding. </span><span style="font-weight: 400;">Sharding is a method to solve scalability issues simply by dividing the blockchain into pieces known as "shards." This mitigates the amount of data that has to be referenced and exchanged per transaction, ultimately increasing transaction throughput.</span>

<span style="font-weight: 400;">Sharding is pretty much exactly what it sounds like. You're taking a blockchain and breaking it into these shards, pieces of the blockchain which can be re-categorized or put into a certain neighborhood, depending on node status or geographic location. This categorization is important because once you are part of a shard, you can interact much easier with others within the same shard; the data within the shard is much smaller than data contained in a full blockchain. However, sharding limits the ability to transact with an entire network, as different shards may not be able to interact with each other. If shards are neighborhoods, then the limitation of shards is that it only lets you interact within your neighborhood.</span>

<span style="font-weight: 400;">This might seem like an excellent scaling solution; however, it comes with its own set of problems. If you segment the blockchain and become part of one shard, it makes it near impossible to interact with a different shard without adding a separate protocol. Additionally, to prevent any type of double-spending, you must lock your funds into a specific shard, restricting your interaction to those in the shared shard. </span><span style="font-weight: 400;">While sharding might address scaling in a certain capacity, it does so in a very limiting way. Could there be specific use cases where sharding is a viable solution? Sure. Any situation where you can be restricted to one neighborhood without hindering functionality. However, the limitations facing sharding might not make the method a reasonable scaling solution for all projects.</span>

<img class="aligncenter size-full wp-image-12814" src="https://theblockchaininstitute.org/wp-content/uploads/2019/08/ScalingSunrise-01.png" alt="" width="4507" height="1907" />

<span style="font-weight: 400;">Blockchain technology is promising, but it is still in its infancy. While these systems have been designed and utilized, they have not been able to meet excessive demand placed upon the network, resulting in exorbitant fees and stalled transactions. The failure of blockchains to meet high demands is what is known as the scalability issue. Current technology only allows a decentralized network to process a handful of transactions per second, an untenable status quo if the technology is to enter the mainstream. However, several projects are looking to solve the scalability issue, each in their unique way. These ideas can be put into two categories, on-chain vs off-chain scaling. On-chain scaling looks to improve the current status quo by adjusting block storage while off-chain scaling projects have created parallel networks to help alleviate the pressure put on the main chain. While the scaling problem has yet to be solved, there are promising innovations on the horizon, ready to tackle this issue.</span>

<span style="font-weight: 400;">Blockchains are set to make a major impact on the business world. In this module, we explored private blockchains, blockchain governance, and scaling decentralized networks. In the next module, we’ll explore markets, cryptocurrency, and finance. </span></span>
