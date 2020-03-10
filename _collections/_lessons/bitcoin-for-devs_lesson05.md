---
layout: lesson
course: bitcoin-for-developers
module: 2
title: Asymmetric Cryptography
permalink: /courses/bitcoin-for-developers/2/asymmetric-cryptography
---

<span>
<span class="openingParagraph">
Cryptocurrencies are called so because <b>cryptography</b> is the material they are built with. Having a basic understanding of asymmetric cryptography is a prerequisite for comprehending how cryptocurrencies work.</span>
<div class="bigQuote">“Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical problems to produce one-way functions. Effective security only requires keeping the private key private; the public key can be openly distributed without compromising security.”
<strong>Wikipedia</strong></div>
&nbsp;

<b>Asymmetric </b>or public/private key cryptography was developed in the 1970s. Prior to then, the only cryptography available was symmetric. Let’s take a look at how symmetric cryptography works to gain some insight into why asymmetric cryptography was developed and the advantages it has.

Alice and Bob want to communicate securely with one another.

<img class="aligncenter wp-image-2486 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/Hannah2a-02.png" alt="" width="7640" height="4187" />

To do this Alice creates a message to Bob and scrambles it using a specific formula also called an encryption algorithm. This is done using a secret, or a key.

<img class="aligncenter size-full wp-image-11409" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/SharedKey-01.png" alt="" width="2170" height="1133" />
<div class="learnpressImageCaption"><b>A:</b> <i>Plain text;</i> <b>B:</b> <i>Encryption Algorithm;</i> <b>C:</b> <i>Cypher text;</i> <b>D:</b> <i>Shared Key.</i></div>
&nbsp;

Let’s look at a much more simplified example of this…

Alice wants to encrypt the word “Hello” to send to Bob. She uses the very simple formula of taking each letter in the word and changing it to the letter two spaces over in the alphabet. This formula is the algorithm or key.
<div class="formula">Hello → move over two spaces in the alphabet → Kgnnq</div>
<div class="formula">Kgnnq → Key → Hello</div>
&nbsp;

If Bob knows this formula, then Alice can securely transmit this message to Bob, and it will look like gibberish to anyone who intercepts the message.

This works just fine; the problem is with transmitting the key to Bob. How do you securely transfer the key? Anyone who intercepts it will be able to read all the communication between Alice and Bob.

<img class="aligncenter wp-image-2489 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/Hannah2a-05.png" alt="" width="9037" height="6729" />

This is a fundamental weakness in symmetric cryptography that was solved by asymmetric cryptography. Lets see how it's done in the next lesson!

&nbsp;

