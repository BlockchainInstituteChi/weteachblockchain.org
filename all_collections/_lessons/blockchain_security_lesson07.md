---
layout: lesson
course: blockchain-security
module: 3
title: Centralized Points of Failure
permalink: /courses/blockchain-security/3/centralized-points-of-failure/
---
<br>
<br>
<span class="openingParagraph">Centralized points of failure represent salacious opportunities for would-be adversaries to attack. </span>
Think about it this way: if you're barricaded in a room and there is only a single way in and out of the room, where does it make the most sense for your enemy to attack? The single point, of course! In a similar way, when we rely on a single service to a point of reliance, we can say that it is a single point of failure since its loss would mean a major catastrophe for us.

{% include callouts/imageWithCaption.html
	image="/courses/blockchain-security/SinglePoint-01.jpg"
	title="SINGLE POINT OF FAILURE:"
	bodyText="<b>A:</b> <i>Computer;</i> <b>B:</b> <i>Router;</i> <b>C:</b> <i>Application Server.</i><br>In centralized networks, devices communicate across common channels and not directly with eachother. This can result in increased risk of catastrophic failure or network hijack."
%}

<h3>ALTERNATIVES TO CENTRALIZATION</h3>
Depending on the degree of centralization which is acceptable, it is possible to adapt the network topography. Federated system provide a mid-ground for decentralized solutions, but commonly come at the cost of network security.

{% include callouts/definition.html
	title="Federation"
	bodyText="Federated services allow multiple providers to offer an identical service under a single integration endpoint, but in many cases, these networks do not currently have enough separate providers to ensure stability. As a result, it is possible that a single service like this could be attacked and result in the compromise of the wider network. Sometimes these use bridges to make interacting with the federated servers easier, but the bridge can turn into a point of failure itself."
%}
{% include callouts/definition.html
	title="Peer-to-Peer"
	bodyText='Another option is to leverage a full peer-to-peer environment. This reduces our reliance on bridges and helps alleviate some network constraints that centralized networks are prone to. Of course, this can be very difficult to achieve a substantial mass of interest. This leads to lopsided access for less popular content. For example, looking at the <a href="https://en.wikipedia.org/wiki/BitTorrent">BitTorrent network</a>, the newest content moves fastest, while old contents suffer from lack of nodes hosting the data. One solution to this is to offer economic incentives for users who help to support the diversity of the network. This is a critical area where cryptoeconomics may be a boon for future protocols.'
%}


<h3>REDUCING TECHNICAL RISK</h3>
<hr />

Most public blockchains strive for complete decentralization, however, it's unclear if such a feat is achievable; or will we simply get closer to 100% but never there due to non-technical issues, but this sometimes includes the use of federated service servers. In the case of Ethereum, the <a href="https://infura.io/">Infura</a> network provides API access to the blockchain for developers so that they do not need to have a copy of a full node in order to check blockchain data. These kinds of services provide vital tools for network growth but must be carefully managed to avoid potentially dangerous centralization.

