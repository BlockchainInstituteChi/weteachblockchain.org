---
layout: lesson
course: decentralized-storage
module: 1
title: Conventional Protocols
permalink: /courses/decentralized-storage/1/conventional-protocols/
---
<br>
<br>
<span class="openingParagraph">The primary system employed by storage providers in 2018 is used to bridge their network to more traditional HTTP(S) GET and POST requests. This allows, the client to read and store records in servers. While client-server connections have functioned relatively well until now, they suffer from some disadvantages that are addressed by a peer-to-peer structure.</span>

{% include callouts/imageWithCaption.html
	image="/courses/decentralized-storage/P2P_HTTP_IPFS-01.png"
	title=""
	bodyText="Unlike typical online storage, IPFS nodes share the burden of storing data, and are economically incentivised to transmit it to one another. Early versions of this technology allowed the creation of torrents and products like Napster."
%}


<br>

In particular, when HTTP calls are routed, they use location-based routing to request files by their relation to a particular structure. As a result, all files on the network must belong to a particular domain and must be hosted by their infrastructure that supports it. This can lead to overcrowding of connections to an under-resourced server and is prone to the breaking of links as files are changed or moved.

In contrast, technologies such as IPFS utilize purely peer to peer transfer of data. Each file is hosted across a network of connected nodes which each participate independently of each other. In addition, these files use content-based addressing to alleviate the problems of location and revisions. In a similar fashion to the torrents used to share music or movies, these decentralized files are hard to stop, without access to every participating node in the network.
