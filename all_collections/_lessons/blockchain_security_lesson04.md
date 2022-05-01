---
layout: lesson
course: blockchain-security
module: 2
title: Individual Account Compromise
permalink: /courses/blockchain-security/2/individual-account-compromise/
---
<!-- <iframe width="1280" height="720" src="https://www.youtube.com/embed/45l8Hka5Zxw?list=PLVmd1I9lPns9tKLMAYdnUx3oiegbIg7sJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<span class="openingParagraph">In the past, an 8 digit password was nearly impossible to crack, but in 2020, it's not only possible - it's easy. </span>

Staying safe online is about more than just a strong secret key. Avoiding illegal torrents and other un-verified downloads is a good place to start, but when it comes to corporate e-governance, things get even more complicated. Software review, careful audits, and change management should all be high priorities for any decentralized projects. Storing private keys in a publicly accessible place can introduce a crime of opportunity when not already present. 

In addition, a weak quality password could make it possible for any computer with a modern video card to crack your password. The problem is made worse by the existence of inexpensive, on-demand processing, for example, through a traditional cloud provider. Finally, ensuring your source of entropy/randomness was sufficient during account creation may not be something the end-user has control over, however, this can be a major weakness after keys were already thought to have been secured.

<img src="/assets/img/courses/blockchain-security/BadActor-01.jpg" alt="Thief hacking a laptop" title="Bad Actors"/>

Aside from actual wallets being hacked, there is always the risk that a developer's Github account could be compromised, in which case a bad actor could add malicious code into the client software for the blockchain network. In the past, bad actors have gone as far as to join the development communities for modules which were used in other software, such as the cryptographic libraries used in the Bitcoin client, and sought to create security loopholes by pushing malicious code to those dependencies.

{% include callouts/note.html 
    bodyText="While core blockchain code doesn't often malfunction, wallet and client software is an easy target for many hackers. It's important to always verify that the wallet software you are downloading matches the publisher's hash. Most the iOS and Google Play app stores do this automatically, but we must be particularly careful with desktop applications."
%}

<h3>The Bright Side</h3>
While this might all seem a bit intense, some say that cryptocurrency has actually resulted in a substantial increase in the strength of modern cryptography. Now - if you're smart enough to hack, you can make quite a substantial return. Once a bug is exploited (usually quite noticeably) the network will often patch the hole and implement a fork, at which point the attacker is rewarded, albeit indirectly, and the system is forced to improve. 

Unfortunately, not all security flaws are wide ranging enough to require a fork, and so there is always the risk that a system can be undermined from within, or without. In the next lessons, we'll cover how to protect yourself from these kinds of systemic risks.


