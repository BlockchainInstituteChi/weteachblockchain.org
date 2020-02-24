---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 4
title: Network Congestion
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/4/network-congestion/
---
<span class="openingParagraph">
Because the EVM exists exclusively as a peer-to-peer architecture, there are some limitations on how information can be moved across the network. Every new block must be transmitted across the network once it's confirmed, but new transactions must also be broadcast to as many nodes as possible in order to be included in new blocks. This balance places a non-trivial demand on the networking capabilities of most home computing devices, and will only increase as the network grows. </span>

&nbsp;
<h3>BLOCK PROPAGATION</h3>

<hr />

<span style="font-weight: 400;">Because each node of the network must retain their own copy of the records, the larger the network gets, the more information must constantly be shared. Some projects such as </span><a href="https://bloxroute.com/"><span style="font-weight: 400;">bloXroute</span></a><span style="font-weight: 400;"> have proposed to fix this issue by providing a single channel to transfer new information across the network, but this has limitations as it increases the centralization of the system.</span>

&nbsp;
<h3>BLOCK RATE</h3>

<hr />

<img class="aligncenter size-full wp-image-17032" src="https://theblockchaininstitute.org/wp-content/uploads/2019/11/Blocks-01.png" alt="" width="2169" height="885" />

<span style="font-weight: 400;">More important than the rate of transfer across the network is the rate that new blocks are added to the chain. In order to ensure that the EVM can have universal consensus, the rate and size of new blocks limits the amount of data and computation which can occur during any interval, even if the network could support more. Solutions such as sharding and proof of stake have been proposed to limit the computational burden on the network while also increasing the amount of data which can be stored. </span>

&nbsp;
<h3>ARCHIVE SYNC</h3>

<hr />

<span style="font-weight: 400;">In addition to the movement of EVM data across the network, it's also important for new nodes to be able to access historical records with ease. As of 2019, the Ethereum blockchain is slightly over 1 terabyte, so new forms of storage are being explored to help the peer network share this burden more easily. In the next lesson, we'll explore how decentralized storage could be the key to this problem.</span>
