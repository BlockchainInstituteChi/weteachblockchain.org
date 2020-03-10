---
layout: lesson
course: blockchain101
module: 2
title: How are Blockchains Secure?
permalink: /courses/blockchain-101/02/how-are-blockchains-secure
---

<span> 
<div style="text-align: center;">

<iframe src="https://www.youtube.com/embed/yNycDHwS6gw?rel=0" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

</div>
<span class="openingParagraph">We've gone over the architecture of decentralized networks, but how do they stay secure? This is a much more difficult problem than addressing the security concerns of a client-server model, as only one server has to be secure. Decentralized networks have to get more creative in order to maintain security, as you have many nodes with equal power trying to coordinate information; there are more actors and more potential for security flaws. 
</span>

<span style="font-weight: 400;">Records on a blockchain are secured through cryptography. Each participant has issued a unique private key which can be used to "sign" transactions; they act as a personal digital signature. </span><span style="font-weight: 400;">A digital signature is a message signed with the sender’s private key, and it can be verified by anyone who has access to the sender’s public key. This verifies that the sender has access to the private key, and is therefore likely to be associated with the public key as well. This ensures that the originator of the message can be verified. </span>

<img class="aligncenter wp-image-4282 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/01/CryptoKey-01.png" alt="" width="2816" height="1243" />

<span style="font-weight: 400;">Blockchains are decentralized and distributed across peer-to-peer networks that are continually updated to reflect every transaction. Because they are not contained in a central location, blockchains do not have a single point of failure and cannot be changed by hacking a single computer. It would require massive amounts of computing power to control a 51% majority of all nodes on the blockchain. We'll go over 51% attacks in an upcoming lesson within this section of the course.</span>

<span style="font-weight: 400;">Decentralized networks offer users an opportunity to preserve their digital identities. In order for decentralized networks to get to this point of viability, they had to address the security concerns presented by these networks. There are several technical components of a blockchain and the information contained in each block that is crucial to its functionality. </span>
&nbsp;

<h3>COMPONENTS OF A BLOCK</h3>
<hr />

<img class="aligncenter wp-image-4283 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/01/BitcoinBlock-01.png" alt="" width="2816" height="1329" />

Each block is limited by the amount of information it can hold. Blocks vary in size depending on the chain, as does each network’s time to completely validate the block, also known as a “block time.” Bitcoin’s blocks are 1MB and take about 8 minutes to validate. Blocks are designed to hold confirmed transactions. They provide a record that is then added to the chain permanently and can be referenced at a later time. The key components of a block both help identify and secure the blockchain.

<span style="font-weight: 400;">Since a copy of the blockchain is stored on each computer on the network, that requested data can be retrieved easily and quickly. Additionally, this architecture allows nodes to act as reliable validators. The further the chain progresses, the harder it is to alter data, as each subsequent block would have to be changed as well. This process would easily alert other nodes to any malicious action. Essentially, to change historical data that has been added to the chain, it would have to be rewound, appending one block at a time. Additionally, blocks are transparent. Data is compiled into each block when it is created, and any attempt to alter confirmed data results in a completely different hash, easily alerting other nodes that invalid information is trying to be added to the blockchain. We’ll go into more detail about hashing in the next lesson</span><span style="font-weight: 400;">.</span>
<h3></h3>
&nbsp;
