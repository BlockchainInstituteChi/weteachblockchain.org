---
layout: lesson
course: blockchain-security
module: 2
title: Individual Account Compromise
permalink: /courses/blockchain-security/2/individual-account-compromise/
---
<span class="openingParagraph">Generally, good password management and key management practices are fundamental to ensuring the security of digital assets. </span>&nbsp;
Software review, careful audits, and change management should also be high priorities for any decentralized projects. Storing private keys in a publicly accessible place can introduce a crime of opportunity when not already present. In addition, a weak quality password could make it possible for any computer with a modern video card to crack your password. The problem is made worse by the existence of inexpensive, on-demand processing, for example, through a traditional cloud provider. Finally, ensuring your source of entropy/randomness was sufficient during account creation may not be something the end-user has control over, however, this can be a major weakness after keys were already thought to have been secured.

<img src="/assets/img/courses/blockchain-security/BadActor-01.png" />

Aside from actual wallets being hacked, there is always the risk that a developer's Github account could be compromised, in which case a bad actor could add malicious code into the client software for the blockchain network. In the past, bad actors have gone as far as to join the development communities for modules which were used in other software, such as the cryptographic libraries used in the Bitcoin client, and sought to create security loopholes by pushing malicious code to those dependencies.
