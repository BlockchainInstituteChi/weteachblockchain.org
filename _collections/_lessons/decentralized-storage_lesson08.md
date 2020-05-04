---
layout: lesson
course: decentralized-storage
module: 3
title: Decentralization in the Browser
permalink: /courses/decentralized-storage/3/decentralization-in-the-browser/
---
<br>
<br>
<span class="openingParagraph">
Since it would be impractical to expect everyone to upgrade their software for decentralized storage such as IPFS right away, teams like those at <a href="https://protocol.ai/" target="_blank" rel="noopener noreferrer">Protocol Labs</a> are developing different modules that allow the technology to run in nontraditional places. For example, any website to easily integrate peer-to-peer storage into their services by making use of <a href="https://en.wikipedia.org/wiki/WebRTC">WebRTC</a> technologies built into modern browsers.</span>

{% include callouts/callout.html 
	title="Try the online IPFS portal!"
	bodyText="Visit <a href='https://try-ipfs.weteachblockchain.org'>try-ipfs.weteachblockchain.org</a> to try using the Interplanetary File System to share files directly with other users."
%}

<h3>USING THE INTERFACE</h3>

When you reach the page, you'll be able to upload and download files from IPFS using the browser window.

{% include callouts/imageWithCaption.html
	image="/courses/decentralized-storage/1.-Initializing.png"
	title="Wait for the note to initialize"
	bodyText="Once your node has finished initializing, you can upload files and share them with others using the 'Link' button. They'll then be able to download them from your node, right in your browser window!"
%}

<h3>WHAT'S HAPPENING?</h3>

Everything here is working just like it did in the command line interface. Once the node is done initializing, it will have its own ID and addresses and will begin to network with other IPFS peers throughout the network. You can see the connected peers in the lower left portion of the user interface:

<img src="/assets/img/courses/decentralized-storage/Peers.jpg" />

These are IPFS addresses. They can make things difficult to read, but you’ll notice there are patterns
depending on the client software being used and the location of the node. When your node uploads or requests a file, these other nodes will receive your request and either serve the file themselves or offer to route information to a node that can serve the file.

The peers we see above are operating for free to facilitate the network, which presents some problems if we want to get things running at a larger scale. Instead, a number of solutions have been proposed to compensate nodes for storing files. This problem is largely unsolved though several projects are attempting to solve this issue along with tackling many others.
