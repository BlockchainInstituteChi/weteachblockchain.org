---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 4
title: Data Storage
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/4/data-storage/
---
<span class="openingParagraph">
In 2019, the full size of the Ethereum blockchain exceeded 1TB. While this is not a restrictive amount of space for an enterprise computer, it's much larger than the average consumer can hope to support. Because this file is the source of truth for the entire system, it's very important that the future of Ethereum supports some kind of decentralized storage.</span>

{% include callouts/imageWithTextCallout.html 
    title="IPFS"
    image="/courses/ethereum-101/ipfs.png"
    bodyText="The Interplanetary Filesystem was originally an Ethereum Foundation-backed project, but has now established their own token in Filecoin. The IPFS network is currently live in testing mode, and you can try it in your browser with our test portal <a href='https://try-ipfs.theblockchaininstitute.org/'>here.</a>"
%}

{% include callouts/imageWithTextCallout.html 
    title="Swarm"
    image="/courses/ethereum-101/swarm.png"
    bodyText="The team at Swarm is currently working to host the entire Ethereum blockchain over their decentralized network, which would allow individual peer nodes to only retain relevant part of the data instead of the full chain. As this network expands, it is expected to provide a framework for storing off-chain data in a reliable and decentralized way."
%}

{% include callouts/imageWithTextCallout.html 
    title="Storj"
    image="/courses/ethereum-101/storj-200x200.png"
    bodyText="Storj is the only decentralized storage network currently running on Ethereum. It's Proof-of-Work based consensus algorithm uses custom hardware to handle storage. While this is considered to be a less decentralized option, integrations with Amazon Web Services have recently made headlines and may provide a path towards wider adoption."
%}

<span style="font-weight: 400;">As features like file storage come online, there will also be a much greater opportunity for new products to integrate additional functionality, such as peer-to-peer content delivery networks or distributed file sharing applications. </span>
