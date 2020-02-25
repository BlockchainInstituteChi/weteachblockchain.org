---
layout: lesson
course: ipfs
module: 3
title: Retrieving Files
permalink: /courses/ipfs/3/retrieving-files
---


<span><span class="openingParagraph">
We’re now online, so we can try downloading a file from the network.</span>

<code class="cli">ipfs cat /ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ/cat.jpg &gt; cat.jpg
$ open cat.jpg</code>

<img class="wp-image-1931 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/cat.jpg" alt="Cute kitten photo" width="1280" height="800" />
<div class="learnpressImageCaption">
  Here’s a kitty from the decentralized web!
</div>
<br>

If everything is working properly, you should now see an image file open with a picture of a cat! This image file is now on your computer, but you didn’t get it over HTTP, and it may have been downloaded from any of hundreds of IPFS nodes around the world.
<code class="cli"> ipfs init
initializing ipfs node at /Users/alexandermorris/.go-ipfs
generating 2048-bit RSA keypair...done
peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z</code>

<div class="purpleNote">
  <b>NOTE:</b><i>If you're following along with the web client (at <a href="https://try-ipfs.theblockchaininstitute.org/">https://try-ipfs.theblockchaininstitute.org/</a>) then you won't be able to use the path shown above. Instead, you'll need the IPFS Address of the file. In this case, we aren't using any encryption, so the address of our cat.jpg will always be the same hash of the file. You can get the file from the IPFS web example by searching for the ID/hash of the file: <a href="https://try-ipfs.theblockchaininstitute.org/?q=QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ"><code>QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ</code></a></i>
</div>
</span>
