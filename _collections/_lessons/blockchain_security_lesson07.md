---
layout: lesson
course: blockchain-security
module: 3
title: Centralized Points of Failure
permalink: /courses/blockchain-security/3/centralized-points-of-failure/
---
<span class="openingParagraph">Centralized points of failure represent salacious opportunities for would-be adversaries to attack. </span>&nbsp;
Think about it this way: if you're barricaded in a room and there is only a single way in and out of the room, where does it make the most sense for your enemy to attack? The single point, of course! In a similar way, when we rely on a single service to a point of reliance, we can say that it is a single point of failure since its loss would mean a major catastrophe for us.

<img class="aligncenter size-full wp-image-11231" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/SinglePoint-01.png" alt="" width="2816" height="1329" />
<div class="learnpressImageCaption"><b>SINGLE POINT OF FAILURE:</b>    <b>A:</b> <i>Computer;</i> <b>B:</b> <i>Router;</i> <b>C:</b> <i>Application Server.</i>
In centralized networks, devices communicate across common channels and not directly with eachother. This can result in increased risk of catastrophic failure or network hijack.</div>
&nbsp;


<h3>ALTERNATIVES TO CENTRALIZATION</h3>
<hr />

<h4>Federation</h4>
Federated services allow multiple providers to offer an identical service under a single integration endpoint, but in many cases, these networks do not currently have enough separate providers to ensure stability. As a result, it is possible that a single service like this could be attacked and result in the compromise of the wider network. Sometimes these use bridges to make interacting with the federated servers easier, but the bridge can turn into a point of failure itself.
<h4>Peer-to-Peer</h4>
Another option is to leverage a full peer-to-peer environment. This reduces our reliance on bridges and helps alleviate some network constraints that centralized networks are prone to. Of course, this can be very difficult to achieve a substantial mass of interest. This leads to lopsided access for less popular content. For example, looking at the <a href="https://en.wikipedia.org/wiki/BitTorrent">BitTorrent network</a>, the newest content moves fastest, while old contents suffer from lack of nodes hosting the data. One solution to this is to offer economic incentives for users who help to support the diversity of the network. This is a critical area where cryptoeconomics may be a boon for future protocols.
&nbsp;

<h3>REDUCING TECHNICAL RISK</h3>
<hr />

Most public blockchains strive for complete decentralization, however, it's unclear if such a feat is achievable; or will we simply get closer to 100% but never there due to non-technical issues, but this sometimes includes the use of federated service servers. In the case of Ethereum, the <a href="https://infura.io/">Infura</a> network provides API access to the blockchain for developers so that they do not need to have a copy of a full node in order to check blockchain data. These kinds of services provide vital tools for network growth but must be carefully managed to avoid potentially dangerous centralization.

&nbsp;
