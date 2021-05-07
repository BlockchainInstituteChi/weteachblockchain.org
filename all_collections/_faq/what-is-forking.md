---
title: What is Forking?
image: Forking.jpg
ogImage: Forking.jpg
permalink: /faq/what-is-forking/
layout: faq
readtime: 1 min read
tag: CONCEPTS
learnMoreLink: /courses/blockchain-101/
learnMoreText: our Blockchain 101 course
learnMoreImage: BC101-01.jpg
weight: 10
sticky: false
---
<img src="/assets/img/courses/blockchain-for-business/Fork-01.jpg">

<span>A public blockchain can only exist by many computers running the same software, which collectively maintains a record of all transactions conducted on the network. Public blockchains offer completely open-source code, which allows any developer to iterate off of the existing code, making any changes that they desire. If either the collective record or the software that maintains it is questioned, there can be a fork in the network.</span> 

<h2>Types of Forks:</h2>

{% include callouts/callout.html
   title="Temporary Forks:"
	bodyText="The most common way in which a fork occurs is when there are separate groups of nodes that have different copies of the blockchain ledger. This can happen when there's a high transaction volume as different nodes find multiple new blocks which can be confirmed within the rules of the system. In proof-of-work consensus models, the longest chain will always win, so the network will ultimately return to a global consensus quite quickly."
%}

{% include callouts/callout.html
   title="Permanent Forks:"
	bodyText="<strong>Soft Forks:</strong>
<span>A network upgrade which can be thought of as non-mandatory. Nodes running older versions of the software will still be able to interact with and maintain consensus on the network.</span>
<br>
<br>
<strong>Hard Forks:</strong>
<span>A network software upgrade or change that either forces nodes on the network to upgrade or results in a permanent split in the network.</span>"
%}

<span>If nodes are running the old version of the software, they will end up with their own version of blockchain data, completely separate from the nodes that upgraded. This situation results in the creation of two separate networks.</span>
