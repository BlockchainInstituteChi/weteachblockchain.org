---
layout: lesson
course: ipfs
module: 3
title: Environment Setup
permalink: /courses/ipfs/3/environment-setup
---
<br>
<br>
<span class="openingParagraph">
As with anything truly revolutionary, IPFS takes some getting used to. In this module, we’ll cover how to set up your own node and push / pull files from the network. Since IPFS is a new protocol, you’ll need to install their bundle so that your device will be able to communicate with other IPFS nodes.</span>
<h3>PRE-BUILT BINARY INSTALL</h3>
<h4>Download IPFS Protocol Package</h4>
You can download the binaries for <a href="https://dist.ipfs.io/#go-ipfs">IPFS binaries</a> on a variety of platforms. This can be used directly as demonstrated below, or a variety of other methods may be available for installation depending on your platform. For a full list of options, including building from source, see the official <a href="https://docs.ipfs.io/introduction/install/">IPFS Installation documentation</a>.
<h4>Mac / Linux</h4>
After downloading, untar the archive, and move the ipfs binary somewhere in your executables $PATH using the install.sh script:
<code class="cli">tar xvfz go-ipfs.tar.gz
$ cd go-ipfs
$ ./install.sh</code>
Test it out:
<code class="cli">ipfs help
USAGE:
ipfs - Global p2p merkle-dag filesystem.
...</code>
<h4>Windows</h4>
After downloading, unzip the archive, and move ipfs.exe somewhere in your %PATH%.
Test it out:
<code class="cli">ipfs help
USAGE:
$ ipfs - Global p2p merkle-dag filesystem.
...</code>

Congratulations! You now have a working IPFS installation on your computer. Now let's see what it can do!
