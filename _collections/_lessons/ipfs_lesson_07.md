---
layout: lesson
course: ipfs
module: 2
title: How does it work?
permalink: /courses/ipfs/2/how-does-it-work
---

<span><span class="openingParagraph">
IPFS depends on using a network of connected peer devices to store and distribute files. The node running in your browser is able to discover other nodes on the network. Conveniently, IPFS peers use RSA Encryption to verify their public keys, which prevents imposter attacks.</span>

<img class="aligncenter size-full wp-image-11697" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/Peers_How.jpg" alt="" width="1135" height="458" />

These are IPFS addresses, which can make things a bit difficult to read, but you'll notice there are patterns depending on the client software being used and the location of the node.

When your node uploads or requests a file, these other nodes will receive your request and either serve the file themselves or offer to route information to a node that can serve the file. In fact, files are broken up in a process called sharding, so that only a small piece of your file will be on each individual node. This allows the network to respond dynamically to ensure that files are as available as possible.

&nbsp;
<h3>WHAT'S NEXT?</h3>
<hr />

In the next section, we'll walk you through the IPFS command line utility and explore how IPFS storage and addressing work in a bit more detail. If you're not a developer you might still want to try to follow along. The final section of this course covers the various decentralized storage projects, and it will help to understand the specifics before you get there.</span>
