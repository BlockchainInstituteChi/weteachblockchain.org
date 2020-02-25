---
layout: lesson
course: ipfs
module: 3
title: Storing Files
permalink: /courses/ipfs/3/storing-files
---


<span><span class="openingParagraph">
You can also push files to the network:</span>
<code class="cli">hash=`echo "I <3 The Blockchain Institute -$(whoami)" | ipfs add -q`</code>
This will generate a hash of your string message and store it at a new ipfs hash url. 
<code class="cli"> curl "https://ipfs.io/ipfs/$hash"</code>
This should now return:
<code class="cli">I <3 The Blockchain Institute -< your username ></code>
</span>
