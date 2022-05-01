---
layout: lesson
course: blockchain-security
module: 3
title: Bad Data & DoS
permalink: /courses/blockchain-security/3/bad-data-dos/
---
<!-- <iframe width="1280" height="720" src="https://www.youtube.com/embed/hwRr4uFrbWI?list=PLVmd1I9lPns9tKLMAYdnUx3oiegbIg7sJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<span class="openingParagraph">In a public blockchain, even valid network congestion can cause issues. </span>

In the Ethereum network, valid traffic requests from the Cryptokitties project in 2017 led to an overwhelming transaction volume, and ultimately over-congestion of the network for several days. Ethereum's <a href="http://theblockchaininstitute.org/what-is-ethereums-gas/" target="_blank" rel="noopener noreferrer">Gas pricing algorithm</a> has the ability to adjust upwards to balance the demand but requires a (somewhat passive) vote of miners to achieve.

Similarly, the Bitcoin network prevents network congestion by prioritizing older transactions, which makes it impossible for a single user to send themselves transactions over and over again. Through this configuration, a user could only run transactions until they ran out of BTC to send, which makes these attacks fairly inefficient.

In the private context, such as Hyperledger supply chain tracking, there is a reduced risk of bad data as all nodes must have permission to write to the chain. Despite this, there is always the risk of bad data being intentionally added by another party in order to subvert the network and unfairly game the system.

{% include callouts/imageWithCaption.html
	image="/courses/blockchain-security/DoS-01.jpg"
	title="DoS ATTACK:"
	bodyText="<b>A:</b> <i>Legitimate User;</i>  <b>B:</b> <i>Attacker;</i>  <b>C:</b> <i>DDoS Attack;</i>  <b>D:</b> <i>Internet;</i> <b>E:</b> <i>DoS Protection;</i> <b>F:</b> <i>Server.</i>
In a DOS attack, the server is incapacitated by an overhwelming number of requests, and can be manipulated as a result. Decentralized networks effectively prevent this sort of attack by creating a financial dissincentive, but have sometimes proven ineffective."
%}

No matter the software, sometimes inefficient implementations lead to poor performance. When the performance degrades to the point that the node cannot stay connected to the network any longer. This is effectively a <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack">Denial-of-Service</a> attack.

