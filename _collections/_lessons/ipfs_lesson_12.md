---
layout: lesson
course: ipfs
module: 3
title: Storing Files
permalink: /courses/ipfs/3/storing-files
---

<br>
<br>
<span class="openingParagraph">
You can also push files to the network:</span>

{% include callouts/terminal.html 
  user="alex@ubuntu" 
  directory="~/" 
  bodyText="hash=`echo "I <3 The Blockchain Institute -$(whoami)" | ipfs add -q`" 
  %}

This will generate a hash of your string message and store it at a new ipfs hash url. 

{% include callouts/terminal.html 
  user="alex@ubuntu" 
  directory="~/" 
  bodyText="hash="curl "https://ipfs.io/ipfs/$hash"" 
  %}

This should now return:

{% include callouts/terminal.html 
  user="alex@ubuntu" 
  directory="~/" 
  bodyText="hash="I <3 The Blockchain Institute -< your username >" 
  %}
