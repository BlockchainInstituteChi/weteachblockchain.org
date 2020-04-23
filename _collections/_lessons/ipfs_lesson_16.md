---
layout: lesson
course: ipfs
module: 4
title: Other Tokens or Projects
permalink: /courses/ipfs/4/other-tokens-or-projects
---
<span class="openingParagraph">
For the sake of this course, we've mostly focused on IPFS since it's easy to visualize what's happening, but there are a number of players entering the decentralized storage space. Each of them have chosen to accomplish this goal in slightly different ways. Generally, the framework for a decentralized storage network can be summarized as shown below.</span>

{% include callouts/imageWithTextCallout.html 
    title="Maidsafe"
    image="/courses/ipfs/MaidSafe.jpg"
    bodyText="While it's not a blockchain, the MaidSafe project has been working on decentralized storage longer than anyone. Their system uses an entirely new protocol and they've been developing it for the better part of the last decade. It's not certain whether this will ever come to fruition, but it's certainly worth looking into. You can find Maidsafe's website <a href='https://maidsafe.net/'>here</a>."
%}

{% include callouts/imageWithTextCallout.html 
    title=""
    image="/courses/ipfs/Sia.png"
    bodyText="Sia actually predates much of the buzz in this market. It was launched in early 2013 out of an MIT Hack event, and uses a Proof of Work algorithm to handle the management of their actual blockchain. In the Sia ecosystem, storage contracts are used which require the provider to stake a fixed amount of tokens in exchange for the privilege of storing files. While they store the file, the providers must consistently upload Proofs of Storage to the blockchain to verify their participation. Storage providers are then rewarded if they fulfill the terms of service as outlined in the storage contract, and receive their fees from the end user.

The Sia blockchain is then mined using a similar Proof of Work algorithm to the Ethereum Ecosystem, and mining nodes evaluate the whether the storage provider has successfully met the terms of their smart contract agreement. Sia recently unveiled a new form of ASIC miners designed specifically for this task, which has resulted in some criticism as to the actual decentralization of the project since it now requires specific hardware to join. You can <a href='https://sia.tech/' target='_blank' rel='noopener noreferrer'>visit Sia here</a>."
%}

<h3>THE ETHEREUM ECOSYSTEM</h3>

<hr />

The Ethereum Blockchain, launched in 2015, offers the ability to run Smart Contract code on the decentralized network of mining computers. Just as these decentralized applications require decentralized storage, they also provide a uniquely flexible framework for managing storage nodes and accountability.

{% include callouts/imageWithTextCallout.html 
    title="Swarm"
    image="/courses/ipfs/swarm-1.png"
    bodyText="Ethereum's flagship storage solution runs on top of the existing smart contract infrastructure, but uses an additional proof of custody operation to scan and repair data over time when needed. Rather than use a new protocol such as IPFS, Swarm offers federated HTTPS endpoints to allow users to make calls to a familiar API interface and upload and download files.

While Swarm is not yet fully operational, you can try out their command line utilities in a simulated environment <a href='https://swarm-guide.readthedocs.io/en/latest/introduction.html' target='_blank' rel='noopener noreferrer'>here</a>."
%}

{% include callouts/imageWithTextCallout.html 
    title="Storj"
    image="/courses/ipfs/storj.png"
    bodyText="As with Swarm, Storj utilizes the existing Ethereum Blockchain and it's proof of work algorithm to track fulfillment of storage contracts over time. Smart contracts are used to establish the terms of the storage agreement, but the payments are routed through a centralized entity such as the Storj Labs network authority. As the network develops, it is expected that more payment authorities will be added and thus federate the control of the network.

Storj has recently announced compatibility with Amazon's S3 storage solution, which may provide a substantial boost in adoption as it hits the market in 2019. Check out the <a href='https://storj.io/' target='_blank' rel='noopener noreferrer'>Storj website</a> for more information."
%}

<h3>OTHER</h3>

<hr />

{% include callouts/imageWithTextCallout.html 
    title="The TOR Project"
    image="/courses/ipfs/Tor.png"
    bodyText="The TOR Browser is one of the oldest privacy tools on the internet, dating back to the early 2000s. A recent protocol innovation from their research arm, Tahoe LAFS, promises additional security in a similar solution to Filecoin's proposed Proof of Spacetime. <a href='https://blog.torproject.org/tor-heart-tahoe-lafs' target='_blank' rel='noopener noreferrer'>See More Here</a>"
%}

<hr />
<em>Congratulations, you're now a decentralized storage aficionado. As always, please feel free to contact us if you're interested in more content related to this topic, or if there's anything we can do to clarify the lessons explained in this course. Happy #buidling!</em>

<em>We're here to help. If you have any questions or feedback about this course please email us at info@theblockchaininstitute.org - we'd love to hear from you!</em>
