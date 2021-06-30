---
layout: lesson
course: blockchain-101
module: 1
title: The Byzantine Generals Problem
permalink: /courses/blockchain-101/01/the-byzantine-generals-problem
---

<iframe width="1024" height="475" src="https://www.youtube.com/embed/PVYGtH7if8I?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<span class="openingParagraph">The Byzantine Generals’ Problem is a classic problem faced by any distributed computer system network. It addresses the question of how a distributed computer network can reach a reliable consensus even when some of the nodes (computers) on the network may attempt to pass along fraudulent information. The internet has opened up many new avenues for commerce and education, but how can we trust a random person across the world?</span>

<h3>THE SCENARIO:</h3>

<span style="font-weight: 400;">Imagine that the powerful Byzantine Empire has decided to capture a city. Of course, there is fierce resistance from within the city. The Byzantine Army has completely encircled the city. A good strategy, however, this has separated the Byzantine army into separate encampments. In order to ensure that the army can surround the city, the army has to split up into groups led by different generals. It now has many divisions with each division being commanded by its own general. The generals communicate between each as well as between all under their command within their division only through messengers. How can the generals efficiently and accurately communicate without fear of their message or plans being compromised by a spy?</span>

{% include callouts/imageWithCaption.html
	image="/courses/blockchain-101/ByzantineGenerals-01.jpg"
	title=""
	bodyText="All of the commanding generals have to agree upon one of the two plans of action: All attack at one particular time, or if faced by fierce resistance, conduct a full-on retreat. The army cannot hold on forever in this separated state; a decision must be made. If the attack or retreat is without full strength (consensus), then the Byzantine army will experience massive casualties"
%}


{% include callouts/imageWithCaption.html
	image="/courses/blockchain-101/ByzantineGenerals-02.jpg"
	title=""
	bodyText="If all generals and messengers are trustworthy then there is no problem, a consensus is absolute.  However, some of the messengers and even a few generals/commanders could be traitors. If they are spies or enemy soldiers, there is a very high chance that they will not follow orders; they will pass on the incorrect message. There has to be some form of verification in order to make sure that the information has not been compromised by enemies."
%}


{% include callouts/imageWithCaption.html
	image="/courses/blockchain-101/ByzantineGenerals-03.jpg"
	title=""
	bodyText="The network of generals is able to communicate with each other in order to verify the messages being transmitted. If there is a discrepancy, it is easy to identify who is the traitor. Bitcoin uses the same exact method of checking transactions. Instead of decision-making generals communicating a plan of attack, Bitcoin nodes communicate the validity of transactions using their own ledger.  Nodes make up a peer-to-peer network that checks the validity of the messages that other nodes are sending; the nodes that make up the Bitcoin network are constantly double checking other nodes."
%}


<span style="font-weight: 400;">In the computer science world, this problem refers to the possibility of having to cope with the failure of some of the components (nodes/the generals) in the system, and if the network can maintain resilience when faced with this issue. If a problem with a node arises, the whole network will NOT grind to a halt. Rather, blocks will continue to be produced as normal. This term is used frequently in the blockchain world as it refers to the problem of reaching consensus in a public blockchain, where not all parties can be assumed to be trustworthy.

