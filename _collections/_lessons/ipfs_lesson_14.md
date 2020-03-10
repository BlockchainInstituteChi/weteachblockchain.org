---
layout: lesson
course: ipfs
module: 4
title: Key Challenges
permalink: /courses/IPFS/4/key-challenges
---


<span>
<span class="openingParagraph">
While it seems like a simple issue, paying someone to store a file is actually much more complex than most other decentralized activities. In particular, the main issue comes when the network is expected to store more than one copy of a file.</span>
&nbsp;
<h3>PROOF OF REPLICATION</h3>
<hr />
In a trustless system, this means that the network must be able to verify that the file exists on multiple devices simultaneously. This is important since devices must be permitted to leave and rejoin the network as they see fit.

The complication in Proof of Replication is that a node might pretend to store a file by downloading it from another node only when the network contacts it to ask for the file. While this still provides a useful activity and can increase download speeds, it creates difficulties since it is uncertain whether a particular node has the file, or simply has a sufficiently fast connection to another node which is storing it.
&nbsp;
<h3>PROOF OF SPACETIME</h3>
<hr />
While this might sound like something out of Star Trek, it's one of the main innovations created by the Filecoin team. Once this problem is resolved, the network will be able to sufficiently prove that a file is not only currently present on a particular node, but that it has been there over a particular period of time.
