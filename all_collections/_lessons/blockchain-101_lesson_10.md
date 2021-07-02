---
layout: lesson
course: blockchain-101
module: 2
title: Asymmetric Encryption
permalink: /courses/blockchain-101/02/asymmetric-encryption
---


<iframe src="https://www.youtube.com/embed/2f-IrPdTOwk?rel=0" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

<span class="openingParagraph">We've gone over the security features of blockchains, but let's look at security on an personal level. What aspects of blockchains ensure personal security?
</span>

<span style="font-weight: 400;">Asymmetric encryption is a cryptographic system that uses both </span><b>public keys </b><span style="font-weight: 400;">and </span><b>private keys</b><span style="font-weight: 400;">.</span>
<ul>
 	<li style="font-weight: 400;"><b>Public-key encryption</b><span style="font-weight: 400;"> is when a message is encrypted with a recipient’s public key. The message can only be decrypted with the corresponding private key. The public-key encryption system attempts to provide confidentiality while providing an avenue to communicate.</span></li>
</ul>
<ul>
 	<li style="font-weight: 400;"><b>A digital signature</b><span style="font-weight: 400;"> is a message or transaction signed with the sender’s private key, and it can be verified by anyone who has access to the sender’s public key. This process verifies that the sender has access to the needed corresponding private key, and is therefore likely to be associated with public key as well. This encryption ensures that the message is unchanged between the sender and the receiver.</span></li>
</ul>

<h3><b>PUBLIC AND PRIVATE KEYS</b></h3>

<span style="font-weight: 400;">Communication between nodes is a key part of decentralized networks. Nodes use a method known as </span><b>asymmetric encryption</b><span style="font-weight: 400;"> in order to sign transactions to prove where they came from. Within this method, public and private keys are absolutely essential for the encryption and decryption of messages. Public keys can be dispersed widely, whereas private keys are only known to the owner.</span>

<span style="font-weight: 400;">In this type of cryptographic system, public keys can be used by anyone to encrypt or verify a message for a particular receiver; they function as addresses. </span><span style="font-weight: 400;">For asymmetric encryption to work, the user must be able to securely generate and store a private key that acts as a password. From this private key, a public key is also generated. Security relies upon the private key staying private, while the public key can be published without compromising the security of the private key. </span>

<img src="/assets/img/courses/blockchain-101/PrivateKey-01-1.jpg" alt="Lock and key for message" title="Private Key"/>

<img src="/assets/img/courses/blockchain-101/PublicKey-01-1.jpg" alt="Message sent to locked location" title="Public Key"/>

<h3><b>HASHING</b></h3>

<span style="font-weight: 400;">Hashing is the process of creating an irreversible “digest” as a means to organize data. The hash function takes an input of any length (a message, for example), and returns a fixed-length string of seemingly random numbers and letters, which is called the hash value (also known as a message digest, digital fingerprint, or digest). </span><span style="font-weight: 400;">  Simply put, hashing is a more efficient way to identify long strings of data.</span>


<span>Try it yourself! Try typing your name in the window below to see the hash digest!</span>
<iframe src="https://fluffy-umbrella.weteachblockchain.org" width="100%" height="100px"></iframe>

<span style="font-weight: 400;">By now, you should understand that blockchains are a combination of existing technologies like cryptography and peer-to-peer networking, combined with an incentive layer to power a globally uncensorable network. By overlaying these technologies onto our existing processes, we can build new ways of working digitally.</span>

<span style="font-weight: 400;">Encryption and decryption can be represented by keys and lockboxes, allowing the passing of secure messages. The public key is like your mailbox's address; anyone can deposit funds or a message in the form of a letter, however only the person with the key to the mailbox can open it to retrieve the messages or funds inside. These cryptogrpahic methods have been in use since the time of Caesar. These encryption technologies are integrated into many experiences on the internet and have become more prevalent with the introduction of e-commerce.</span>

<img src="/assets/img/courses/blockchain-101/EstoniaID-01.jpg" alt="Phone over Estonia" title="Estonian E-Residency Program"/>

<span style="font-weight: 400;">Cryptographic signing and verification is a digital representation of signatures that can ultimately replace handwritten signatures. The country of Estonia has transitioned to conducting much of their administrative governance with Smart Chip ID cards, allowing non-residents to establish businesses remotely with their E-Residency program. Without ever visiting Europe, an individual can register a business, establish a bank account, and pay taxes from the comfort of any computer in the world!</span>

How does cryptocurrency relate to blockchains? We'll cover that in our next lesson.

