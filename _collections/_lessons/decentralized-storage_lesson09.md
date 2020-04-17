---
layout: lesson
course: decentralized-storage
module: 3
title: Multiple Tokens & Projects
permalink: /courses/decentralized-storage/3/other-tokens/
---
<h3>LEADING PROJECTS</h3>

<hr />

{% include callouts/imageWithTextCallout.html 
    title="Maidsafe"
    image="/courses/decentralized-storage/MaidSafe.jpg"
    bodyText="MAIDSAFE stands for Massive Array of Internet Disks Secure Access For Everyone. And while it's not a blockchain, the MaidSafe project has been working on decentralized storage longer than anyone. Their system uses an entirely new protocol and they've been developing it for the better part of the last decade. The network is composed of clients and farmers where the latter provides resources such as disk space. You can find out more on <a href='https://maidsafe.net/'>Maidsafe's website</a>. As the project still isn't quite ready for production use, developers are forced to shop around for the protocols that best suit their particular needs."
%}

{% include callouts/imageWithTextCallout.html 
    title="SiaCoin"
    image="/courses/decentralized-storage/Sia.png"
    bodyText="Sia launched in early 2013 out of an MIT Hack event and uses a Proof-of-Work algorithm to handle the management of their actual blockchain. In the Sia ecosystem, storage contracts are used which require the provider to stake a fixed amount of tokens in exchange for the privilege of storing files. While they store the file, the providers must consistently upload proofs of storage to the blockchain to verify their participation. Storage providers are then rewarded if they fulfill the terms of service as outlined in the storage contract, and receive their fees from the end user.

The Sia blockchain is then mined using a similar Proof of Work algorithm to the Ethereum Ecosystem, and the mining nodes evaluate whether the storage provider has successfully met the terms of their smart contract agreement. Sia recently unveiled a new form of ASIC miners designed specifically for this task, which has resulted in some criticism as to the actual decentralization of the project since it now requires specific hardware to join. You can <a href='https://sia.tech/' target='_blank' rel='noopener noreferrer'>visit Sia here</a>."
%}

{% include callouts/imageWithTextCallout.html 
    title="IPFS"
    image="/courses/decentralized-storage/IPFS.png"
    bodyText="IPFS Stands for InterPlanetary File System and is accompanied by a token called FileCoin which is utilized to support a free market for storage of data and extra disk space. Instead of using location-based addressing, IPFS seeks to publish files that are content-addressed. That is--the content itself defines the address. This unique system has several valuable benefits especially when it comes to tracking revisions of information over time."
%}

<h3>THE ETHEREUM ECOSYSTEM</h3>

<hr />

The Ethereum Blockchain, launched in 2015, offers the ability to run Smart Contract code on the decentralized network of mining computers. Just as these decentralized applications require decentralized storage, they also provide a uniquely flexible framework for managing storage nodes and accountability.

{% include callouts/imageWithTextCallout.html 
    title="Swarm"
    image="/courses/decentralized-storage/swarm-1.png"
    bodyText="Ethereum's flagship storage solution runs on top of the existing smart contract infrastructure but uses additional proof of custody operation to scan and repair data over time when needed. Rather than use a new protocol such as IPFS, Swarm offers federated HTTPS endpoints to allow users to make calls to a familiar API interface and upload and download files.

While Swarm is not yet fully operational, you can try out their command line utilities in a simulated environment <a href='https://swarm-guide.readthedocs.io/en/latest/introduction.html' target='_blank' rel='noopener noreferrer'>here</a>."
%}

{% include callouts/imageWithTextCallout.html 
    title="Storj"
    image="/courses/decentralized-storage/storj.png"
    bodyText="Storj originally launched as its own blockchain, but today utilizes the existing Ethereum Blockchain and its proof of work algorithm to track fulfillment of storage contracts over time. Smart contracts are used to establish the terms of the storage agreement, but the payments are routed through a centralized entity such as the Storj Labs network authority. As the network develops, it is expected that more payment authorities will be added and thus federate the control of the network.

Storj acts similar to how torrents do and have recently announced compatibility with Amazon's S3 storage solution, which may provide a substantial boost in adoption as it hits the market in 2019. Check out the <a href='https://storj.io/' target='_blank' rel='noopener noreferrer'>Storj website</a> for more information."
%}

<h3>OTHER</h3>

<hr />

{% include callouts/imageWithTextCallout.html 
    title="The TOR Project"
    image="/courses/decentralized-storage/Tor.png"
    bodyText="The TOR Browser is one of the oldest privacy tools on the internet, dating back to the early 2000s. A recent protocol innovation from their research arm, Tahoe LAFS, promises additional security in a similar solution to Filecoin's proposed Proof of Spacetime. <a href='https://blog.torproject.org/tor-heart-tahoe-lafs' target='_blank' rel='noopener noreferrer'>See More Here.</a>"
%}
