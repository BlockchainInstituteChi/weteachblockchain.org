---
layout: lesson
course: blockchain-security
module: 1
title: Protecting Digital Keys
permalink: /courses/blockchain-security/1/protecting-digital-keys/
---
<iframe width="1280" height="720" src="https://www.youtube.com/embed/ySOBvgc6ntI?list=PLVmd1I9lPns9tKLMAYdnUx3oiegbIg7sJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<span class="openingParagraph">While blockchain technology originally emerged as a solution to provide distributed trust within the Bitcoin network, the technology has progressed a long way since 2008.</span>
While this new architecture has many advantages, the implementation of a blockchain-based system is complex and requires a thorough review to ensure appropriate security.

<img src="/assets/img/courses/blockchain-security/Keys-01.jpg" />

Regardless of which blockchain you use, there's no way to avoid key management concerns. The distributed ledger ecosystem requires each user to store and manage their own cryptographic keys. All on-chain interactions are tied to identities using signatures with private keys. In fact, a Bitcoin is nothing more than an IOU, passed from one digital key to another. Everything in a blockchain depends on the keys that are used to sign it, so it is extremely important to keep them secured.

{% include callouts/bigQuote.html
	body="Your keys, your bitcoin. Not your keys, not your bitcoin."
	sourceName="Andreas M. Antonopoulos"
	sourceUrl="https://www.youtube.com/watch?v=dnC5mFaIW3Q"
%}

{% include callouts/callout.html
    title="CRYPTOGRAPHY REVIEW"
    bodyText='Remember that <em>private keys</em> are little more than randomly generated numbers that serve a master key to your wallet or profile. Since they are private and thus <strong>never</strong> to be shared, <em>public keys</em> are generated from the private key. In this way, the numbers are "linked" since one is born from the other. <hr>Your <b>Public Key</b> supports certain operations:<br><ul><li>Allows others to encrypt a message specifically for you from them</li><li>Verify a cryptographic signature without knowledge of the private key</li></ul> <hr>Your <b>Private Key</b> supports other operations:<br><ul><li>Encrypt messages to another Public Key</li><li>Generate a cryptographic signature for which others can verify using only your Public Key</li></ul>'
%}

This may seem complicated, but don't worry. In the following lessons, we'll expand on how wallet systems can be used to store your keys, and how you can stay safe while using these emerging technologies.

<em>More information is available about <a href="/courses/blockchain-101/02/asymmetric-encryption">Public Key Cryptography</a> in the Blockchain 101 Course.</em>
