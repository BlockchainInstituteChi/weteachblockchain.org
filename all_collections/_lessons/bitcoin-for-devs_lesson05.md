---
layout: lesson
course: bitcoin-for-developers
module: 2
title: Asymmetric Cryptography
permalink: /courses/bitcoin-for-developers/2/asymmetric-cryptography
---
<br>
<br>
<span class="openingParagraph">
Cryptocurrencies are called so because <b>cryptography</b> is how these tokens are secured. Having a basic understanding of asymmetric cryptography is a prerequisite for comprehending how cryptocurrencies work.</span>

<b>Asymmetric </b>or public/private key cryptography was developed in the 1970s. Prior to then, the only cryptography available was symmetric. Let’s take a look at how symmetric cryptography works to gain some insight into why asymmetric cryptography was developed and the advantages it has.

{% include callouts/bigQuote.html
	body="Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys: public keys which may be disseminated widely, and private keys which are known only to the owner. The generation of such keys depends on cryptographic algorithms based on mathematical problems to produce one-way functions. Effective security only requires keeping the private key private; the public key can be openly distributed without compromising security."
	sourceName="Wikipedia"
	sourceUrl="https://en.wikipedia.org/wiki/Public-key_cryptography"
%}

Alice and Bob want to communicate securely with one another.

<img src="/assets/img/courses/bitcoin-for-developers/Hannah2a-02.jpg" />

To do this Alice creates a message to Bob and scrambles it using a specific formula also called an encryption algorithm. This is done using a secret, or a key.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/SharedKey-01.jpg"
	title="Encryption Process"
	bodyText="<b>A:</b> <i>Plain text;</i> <b>B:</b> <i>Encryption Algorithm;</i> <b>C:</b> <i>Cypher text;</i> <b>D:</b> <i>Shared Key.</i>"
%}

Let’s look at a much more simplified example of this…

Alice wants to encrypt the word “Hello” to send to Bob. She uses the very simple formula of taking each letter in the word and changing it to the letter two spaces over in the alphabet. This formula is the algorithm or key.

{% include callouts/callout.html
	title="Simple Cypher Encryption"
	bodyText="Hello → [ move over two spaces in the alphabet ] → Kgnnq"
%}

{% include callouts/callout.html
	title="Simple Cypher Decryption"
	bodyText="Kgnnq → Key → Hello"
%}

If Bob knows this formula, then Alice can securely transmit this message to Bob, and it will look like gibberish to anyone who intercepts the message.

This works just fine; the problem is with transmitting the key to Bob. How do you securely transfer the key? Anyone who intercepts it will be able to read all the communication between Alice and Bob.

<img src="/assets/img/courses/bitcoin-for-developers/Hannah2a-05.jpg" />

This is a fundamental weakness in symmetric cryptography that was solved by asymmetric cryptography. Lets see how it's done in the next lesson!

