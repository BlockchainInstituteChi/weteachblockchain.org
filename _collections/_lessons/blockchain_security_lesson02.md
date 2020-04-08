---
layout: lesson
course: blockchain-security
module: 1
title: Protecting Digital Keys
permalink: /courses/blockchain-security/1/protecting-digital-keys/
---
<span class="openingParagraph">While blockchain technology originally emerged as a solution to provide distributed trust within the Bitcoin network, the technology has progressed a long way since 2008.</span>&nbsp;
While this new architecture has many advantages, the implementation of a blockchain-based system is complex and requires a thorough review to ensure appropriate security.


<img src="/assets/img/courses/blockchain-security/Keys-01.png" />

Regardless of which blockchain you use, there are no avoiding key management concerns. The distributed ledger ecosystem requires each user to store and manage their own cryptographic keys. All on-chain interactions are tied to identities using signatures with private keys. As a result, the ecosystem depends heavily on the security of its keys.
&nbsp;

<div class="bigQuote">
"Your keys, your bitcoin. Not your keys, not your bitcoin."
<span><strong>Andreas M. Antonopoulos</strong></span>
</div>
&nbsp;


<h3>CRYPTOGRAPHY REVIEW</h3>
<hr />
Remember that <em>private keys</em> are little more than randomly generated numbers that serve a master key to your wallet or profile. Since they are private and thus <strong>never</strong> to be shared, <em>public keys</em> are generated from the private key. In this way, the numbers are "linked" since one is born from the other. The public key allows other people to perform the following activities:
<ul>
 	<li>Encrypt a message specifically for you from them</li>
 	<li>Verify a cryptographically signed challenge phrase</li>
</ul>
<em>More information is available about <a href="https://theblockchaininstitute.org/courses/blockchain-101/lessons/public-key-cryptography/">Public Key Cryptography</a> in the Blockchain 101 Course.</em>

&nbsp;

&nbsp;
