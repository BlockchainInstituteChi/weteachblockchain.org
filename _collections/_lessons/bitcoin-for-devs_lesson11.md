---
layout: lesson
course: bitcoin-for-developers
module: 3
title: Introduction to Wallets and Addresses
permalink: /courses/bitcoin-for-developers/3/intro-to-wallets-and-addresses
---

<span>
In bitcoin, a wallet is a bit of an abstract. The bitcoin protocol doesn’t contain the notion of wallets. This concept is created by user interfaces for user comfort.</span>

Wallets are built for two primary functions:
<ul>
 	<li>They are a user interface for scanning the blockchain and checking the balance of the users addresses.</li>
 	<li>They are systems for managing a users private keys and for signing and sending transactions.</li>
</ul>
Here we will focus primarily on the second function and look at how wallets store private keys, interact with the blockchain and construct, sign and transmit transactions. Primarily we’ll focus on a wallets roll as a keychain for the private keys that control a users funds on the blockchain.

<img src="/assets/img/courses/bitcoin-for-developers/WalletKeychain-01.png" />

First, let’s take a step back and learn the relationship between public/private key pairs and bitcoin addresses.

Again, bitcoin uses Elliptic curve cryptography. A generation point on an elliptic curve is used to produce a public key once a private key has been chosen. More information about this process can be found <a href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc" target="_blank" rel="noopener noreferrer">here.</a>

However, for this lesson we will summarize the process of generating a public key by saying that public keys are derived from private keys and we’ll look at the process of generating bitcoin addresses from public keys.

Bitcoin makes extensive use of hashing functions. To derive an address from a public key two hashing functions are used, <a href="https://en.wikipedia.org/wiki/SHA-2" target="_blank" rel="noopener noreferrer">SHA256</a> and <a href="https://en.wikipedia.org/wiki/RIPEMD" target="_blank" rel="noopener noreferrer">RIPEMD160</a>. Below is the formula used:
<div class="formula">Address = RIPEMD160(SHA256(Public Key))</div>
<br>

This results in a 160-bit, 20-byte string that is then base58 encoded the result of which looks like this:
<div class="formula">1J7mdg5rbQyUHENYdx39WVWK7fsLpEoXZ</div>
<br>

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/PKtoBA-01.jpg"
	title=""
	bodyText="<b>A:</b> <i>Public Key;</i> <b>B:</b> <i>SHA256;</i> <b>C:</b> <i>RIPEMD160;</i> <b>D:</b> <i>'Double Hash' or HASH160;</i> <b>E:</b> <i>Public Key Hash (20 bytes/160 bits);</i> <b>F:</b> <i>Base58Check Encode with 0x00 version prefix;</i> <b>G:</b> <i>Bitcoin Address (Base58Check Encoded Public Key Hash).</i>"
%}

<div class="purpleNote"><b>NOTE:</b><i>Bitcoin addresses are usually encoded as <a href="https://en.wikipedia.org/wiki/Base58" target="_blank" rel="noopener noreferrer">base58 </a></i><i></i><i> which is similar to Base64 but has been modified to avoid both non-alphanumeric characters and letters which might look ambiguous when printed. This was done to help prevent human error when copying the data. In base58 the following similar-looking letters have been removed such as 0 (zero), O (capital o), I (capital i) and l (lower case L) and the symbols “+” &amp; “/”. The remaining characters are, 123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz.</i></div>
&nbsp;
<h3>ADDRESS TYPES AND CHECK ENCODING</h3>

<hr />

In bitcoin, most data presented to the user is not just base58 encoded, but base58check encoded to help prevent errors.

This adds prefix data to addresses that can be used to help verify the accuracy of the following data. Here is how this is done.

A version prefix is added to the address and an additional four bytes are added to the end of the data as a checksum called Base58Check and is used as built-in error-checking to protect against typos.

This checksum is created from the hashing the encoded data as follows:
<div class="formula">Checksum = SHA256(SHA256(prefix+base58 address))</div>
<br>

The first 4 bytes of this are then added to the end of the address.

When an address is typed into a wallet Base58Check code, the decoding software will calculate the checksum of the address on it’s own and compare it to the checksum included in the address. If the two do not match, the address entered is invalid.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/WalletsandAddresses-01-1.png"
	title="<b>BASE58CHECK ENCODING</b>"
	bodyText="<b>1:</b> <i>Add Version Prefix;</i> <b>2:</b> <i>Hash (Version Prefix + Payload);</i> <b>3:</b> <i>Add First 4 Bytes as Checksum;</i> <b>4:</b> <i>Encode in Base-58.</i> <b>A:</b> <i>Payload;</i> <b>B:</b> <i>Version;</i> <b>C:</b> <i>SHA256;</i> <b>D:</b> <i>First 4 Bytes;</i> <b>E:</b> <i>Checksum;</i> <b>F:</b> <i>Base58 Encode;</i> <b>G:</b> <i>Base58Check Encoded Payload.</i>"
%}

In January of 2012, with BIP16, a new type of bitcoin address was introduced, Pay to Script Hash or <strong>P2SH</strong>. This type of address is not based on a public key but instead on the hash of a script. Bitcoin scripting is a topic that we’ll cover in depth in Part II of this series. For the moment let’s think of a bitcoin script as a bit of code that needs to return true when run in order for a transaction to be considered valid. It’s an unlocking script.

A common use case for P2SH addresses is a multi-signature address or multi-sig for short. Any funds sent to this address can only be spent by a transaction that is signed by m of n signatures, 2 of 3 being a very common setup.

To create a 2 of 3 multi-sig P2SH address a script requiring a valid signature from any 2 of 3 keys is created and then hashed in the same fashion as described above.
<div class="formula">Script hash = RIPEMD160(SHA256(the script))</div>
<br>

The version prefix that is used depends on which network the address is intended for and whether it is a P2SH (Pay to Script Hash) or P2PKH (Pay to Public Key Hash) address.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/WalletsandAddresses-02.png"
	title=""
	bodyText="<b>A:</b> <i>Type;</i> <b>B:</b> <i>Version Prefix (Hex);</i> <b>C:</b> <i>Base58 Result Prefix;</i> <b>D:</b> <i>Bitcoin Address;</i> <b>E:</b> <i>Pay-To-Script-Hash Address;</i> <b>F:</b> <i>Bitcoin Testnet Address.</i>"
%}

<div class="tealCallout">
	<b>CONCEPTUALIZE:</b> 
Bitcoin’s, or UTXO’s, "live" at bitcoin addresses. In order to transfer those funds the owner of the funds, who is presumably the owner of the private keys the address was derived from, has to sign the transferring transaction with their private key. In this way users don’t really hold bitcoin’s, but rather control them with their private keys.
</div>
<br>



And now that we have a base for understanding bitcoin addresses, let’s head back to wallets!
