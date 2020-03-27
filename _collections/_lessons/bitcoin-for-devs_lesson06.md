---
layout: lesson
course: bitcoin-for-developers
module: 2
title: Public and Private Keys
permalink: /courses/bitcoin-for-developers/2/public-and-private-keys
---

<span>
<span class="openingParagraph">Asymmetric cryptographic algorithms were first developed in the 1970s and are fundamental to so many of the technologies we use today. It’s used on any secured page on the internet, on your cell phone, at your bank, etc.</span>

The first asymmetric algorithms:
<br>
<ul>
 	<li>Diffie–Hellman key exchange
<ul>
 	<li>1976</li>
</ul>
</li>
 	<li>RSA (Rivest–Shamir–Adleman)
<ul>
 	<li>1978</li>
</ul>
</li>
</ul>
With asymmetric cryptography, instead of having one key, each party has two keys: a <strong>public key</strong> and a <strong>private key</strong>.

{% include callouts/imageWithCaption.html
	image="https://theblockchaininstitute.org/wp-content/uploads/2019/02/AliceBobKeys-01.png"
	title=""
	bodyText="<b>A:</b> <i>Alice Private Key;</i> <b>B:</b> <i>Alice Public Key;</i> <b>C:</b> <i>Bob Private Key;</i> <b>D:</b> <i>Bob Public Key.</i>"
%}

How this works is quite interesting. Alice and Bob can exchange public keys with each other in the open. It does not matter if Charlie obtains a copy of the public keys; all he can do with those keys is encrypted a message to Alice or Bob.

With Bob’s public key, Alice can encrypt her message to him and transmit it. Charlie, even having both public keys, cannot decipher the message. The only person who can decipher the message is someone in possession of Bob’s private key, in this case, only Bob can do this.

{% include callouts/callout.html
	title="Public Keys"
	bodyText="<ul>
		<li>Can be shared publicly.</li>
		<li>Can be used to encrypt a message to another party.</li>
		<li>Bob’s public key can be used to encrypt a message to Bob that only he can decipher.</li>
	</ul>"
%}
<br>

{% include callouts/callout.html
	title="Private Keys"
	bodyText="<ul>
		<li>It is infeasible to reverse engineer a private key from a public key.</li>
		<li>Are the only keys that can be used to decrypt a message.</li>
		<li>Need to be kept strictly private.</li>
	</ul>"
%}

Bob can also use Alice’s public key to encrypt a message to Alice.


{% include callouts/imageWithCaption.html
	image="https://theblockchaininstitute.org/wp-content/uploads/2019/02/TextandKeys-01.png"
	title=""
	bodyText="<b>A:</b> <i>Plain text;</i> <b>B:</b> <i>Alice public key;</i> <b>C:</b> <i>Cipher text;</i> <b>D:</b> <i>Alice private key.</i>"
%}

{% include callouts/imageWithCaption.html
	image="https://theblockchaininstitute.org/wp-content/uploads/2019/02/AlicePublicKey-01-2.png"
	title=""
	bodyText="<b>A:</b> <i>Alice public key.</i>"
%}

Public keys and encrypted messages can now be transmitted in the open and our key thief here, Charlie, will still be unable to read the contents of the message.

Asymmetric cryptography is an incredibly powerful tool that can be used for a wide variety of applications.

The first use case is using this technology to encrypt and decrypt messages! However, the bitcoin software makes use of this technology to sign and verify messages, or more specifically, transactions.

&nbsp;
<h3>ENCRYPTING VS. SIGNING VS. HASHING</h3>

<hr />

Bitcoin, and other cryptocurrencies, are built on cryptography, but actually very little “encryption” is done in the Bitcoin protocol while signing and hashing is used extensively. Let’s be sure we understand the difference. Below are rough explanations of these three related yet different functions.

{% include callouts/definition.html
	title="ENCRYPTION"
	bodyText="Scrambling data so that only entities with access to the keys will be able to decipher the message."
%}

{% include callouts/definition.html
	title="SIGNING"
	bodyText="Taking data and producing from it a “signature,” another piece of data, that could have only have come from the entity controlling a certain private key."
%}

{% include callouts/definition.html
	title="HASHING"
	bodyText="Creating a unique identifier for a specific piece of data."
%}


{% include callouts/imageWithCaption.html
	image="https://theblockchaininstitute.org/wp-content/uploads/2019/02/EncryptSignHash-01.png"
	title=""
	bodyText="<b>A:</b> <i>The quick brown fox jumps over the lazy dog;</i> <b>B:</b> <i>Encrypt;</i> <b>C:</b> <i>Sign;</i> <b>D:</b> <i>Hash.</i>"
%}

Let’s take just a quick look at how the signing, and the verifying of those signatures works on the Bitcoin network.

Bitcoin uses elliptic curve cryptography, ECDSA, or more specifically the <a href="https://en.bitcoin.it/wiki/Secp256k1" target="_blank" rel="noopener noreferrer">SECP256k1</a> curve.


{% include callouts/imageWithCaption.html
	image="https://theblockchaininstitute.org/wp-content/uploads/2019/02/BitcoinSigs-01.jpg"
	title=""
	bodyText="<b>BITCOIN USES SECP256k1 SIGNATURES</b> <i>Elliptic curve cryptography</i>"
%}

Alice’s wallet will produce a transaction sending funds from an address she controls to an address Bob controls. This transaction data is signed with Alice’s private key. This produces a signature that proves Alice, or anyone in possession of her private key, has authorized the transfer.

To sign a transaction in Bitcoin, the data is first hashed (which we discussed in Enter the Blockchain Part I) then ran through the an algorithm which uses the private key to produce a signature.

When trying to verify that signature, you’ll need the transaction data that was signed (in the case of Bitcoin, that would be the transaction hash) the signature, and the public key. That data is then run through a validation algorithm which generally returns a true or false response.

Cryptography is very much a skill all its own separate from software development. There is a saying in the crypto world, “don’t roll your own crypto.” This phrase expresses the idea that it is very risky to attempt to build your own cryptography tools. There are many tried and tested libraries out there for signing and verifying signatures.

And now that we’ve covered some basics, we’ll be diving into decentralization and the functioning of decentralized networks in the next lesson.

<hr />

Further reading: <a href="https://arstechnica.com/information-technology/2013/10/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/">A (relatively easy to understand) primer on elliptic curve cryptography.</a>
