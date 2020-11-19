---
layout: lesson
course: ipfs
module: 2
title: IPFS in the Browser
permalink: /courses/ipfs/2/ipfs-in-the-browser
---
<br>
<br>
<span class="openingParagraph">Try it yourself</span>
If you're not a developer, don't worry! You can still follow along through this course using our IPFS web client. The team at <a href="https://protocol.ai/" rel="noopener">Protocol Labs</a> has developed a Javascript module to allow any website to easily integrate peer to peer storage into their services.

{% include callouts/callout.html
	title="Try Peer to Peer Storage - Click here!"
	bodyText="We've set up an example for you to use at <a href='https://try-ipfs.weteachblockchain.org' rel='noopener'>https://try-ipfs.weteachblockchain.org</a>. If you'd like to see an image of an adorable kitten, you can also try <a href='https://try-ipfs.weteachblockchain.org/?q=QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ'>this link</a>."
%}

<br>
<h1> </h1>

The really neat thing about using IPFS in the browser is that your files are downloaded directly from other people hosting the network. There's no central server sending you the file and no one tracking which files you view or when. You get all the benefits of decentralized storage without even having to download anything.

When you reach the page, you'll be able to upload and download files from IPFS using the browser window.

{% include callouts/imageWithCaption.html
	image="/courses/ipfs/1.-Initializing.jpg"
	title="Wait for the node to initialize."
	bodyText="Once you open the link, your node will initialize first. This process is how it connects to the other network participants. Once complete, you'll see 'Node Ready' in the logs field."
%}
