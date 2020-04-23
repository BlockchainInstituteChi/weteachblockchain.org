---
layout: lesson
course: ipfs
module: 3
title: Storing Files
permalink: /courses/ipfs/3/storing-files
---


<span><span class="openingParagraph">
You can also push files to the network:</span>

{% include callouts/terminal.html
    title="creating a file"
    user="alex@ubuntu"
    directory="~/"
    bodyText='hash=`echo "I <3 The Blockchain Institute -$(whoami)" | ipfs add -q`'
%}             

This will generate a hash of your string message and store it at a new ipfs hash url. 

{% include callouts/terminal.html
    title="Download and read the file"
    user="alex@ubuntu"
    directory="~/"
    bodyText='curl https://ipfs.io/ipfs/$hash<br>I <3 The Blockchain Institute -alex'
%}             

{% include callouts/callout.html
    title="IPFS Web"
    bodyText="Watch out! The above curl request is actually a call to the IPFS web API. This is used as an access layer, and is fairly centralized, however the underlying file system is not."
%}
