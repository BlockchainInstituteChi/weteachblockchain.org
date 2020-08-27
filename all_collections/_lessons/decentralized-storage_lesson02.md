---
layout: lesson
course: decentralized-storage
module: 1
title: Digital Storage Background
permalink: /courses/decentralized-storage/1/background/
---
<br>
<br>
<span class="openingParagraph">In the early days of computing, <a href="https://en.wikipedia.org/wiki/Data_storage">storage devices</a> were coupled with processing units in single purpose systems. With the introduction of the internet and high-speed broadband, these two components are now commonly separated, often by hundreds of miles. As cloud services have grown, the notion of storage has shifted from individual hard drives and physical devices to a network of high-availability devices which a client device can access for a fee.
</span>

Storage is a key component of computers. <a href="https://en.wikipedia.org/wiki/Player_piano">Player Pianos</a>, dating back to the early 18th century, were the first real form of digital storage. The notches on a steel cylinder pulled tensioned lines, effectively playing a song when the springs were pulled by an attendant. Our modern hard drives are not much more complex than this, using electrical charge rather than the mechanical potential of spring, but otherwise very similar.

{% include callouts/imageWithCaption.html
	image="/courses/decentralized-storage/DistributedNetworks-01.jpg"
	title="<b>DISTRIBUTED NETWORKS:</b>"
	bodyText="<b>A:</b> <i>Centralized;</i> <b>B:</b> <i>Decentralized;</i> <b>C:</b> <i>Distributed.</i>
  A distributed network is a type of computer network that is spread over different nodes. This provides a single data communication network, which can be managed jointly or separately by each network. Besides sharing information within the network, a distributed network often also delegates processing."
%}

Decentralized storage is a combination of solutions to these problems that have evolved over time. The main goal of IPFS (InterPlanetary File System) is to provide a commonly-addressable namespace for networks of computers to use to share their storage. This is done through <a href="https://en.wikipedia.org/wiki/Content-addressable_storage">content-addressable storage</a> enabled by <a href="https://en.wikipedia.org/wiki/Merkle_tree">Merkle Trees</a>.
