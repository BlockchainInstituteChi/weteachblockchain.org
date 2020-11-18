---
layout: lesson
course: hyperledger
module: 1
title: Design Considerations
permalink: /courses/hyperledger/1/design-considerations/
---

<h3 class="topTitle" >NODE ROLES AND PRIVILEGES</h3>
Before you start designing your project, it may help to consider the various stakeholders involved and how they will participate in the network. Which nodes will need access to which information?

{% include callouts/note.html
	bodyText="Ledger entries are permanent, so it's critical that the validation process is well thought out before you start building. Flow charts are a great place to start."
%}

<h3>NODE ADMINISTRATION</h3>
Beyond the technical structure and systems design, it's also important to consider how the human element will factor into your network. In a supply chain for example, is it truly necessary to have each store or warehouse run their own node? Each added participant can introduce privacy and security concerns, so be sure to ask yourself whether the node truly needs to have the privileges you've given it.

<h3>DEPLOYMENT SCALE</h3>
Keeping a ledger doesn't have to be a global solution. Many Hyperledger apps operate on a much smaller scale. If your design challenge seems too big, you may want to consider building a modular system that can plug into a wider network later. Hyperledger's Proof of Authority consensus mechanism provides a viable scaling solution, as consensus is much easier to reach.
