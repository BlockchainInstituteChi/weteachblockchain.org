---
layout: lesson
course: bitcoin-for-developers
module: 3
title: Wallet History and Mnemonic Seeds
permalink: /courses/bitcoin-for-developers/3/wallet-history-mnemonic-seeds
---
<br>
<br>
<span class="openingParagraph">
The following two lessons were written with the goal of providing a good foundation for building or working with Bitcoin wallets. As such we’ll cover a bit of history and then the current de facto standard for Bitcoin wallets which consists of four BIPS, 39, 32, 43 &amp; 44.</span>

These BIP’s cover mnemonic seeds and hierarchical deterministic(HD) wallets.

<h3>HISTORY</h3>

Cryptocurrency wallets have evolved substantially since the first wallet which was included in the original version of the Bitcoin core client. Let’s first discuss some of the history of Bitcoin wallets to understand why these improvements came about.

<h3>JBOK, OR JUST A BUNCH OF KEYS WALLETS</h3>

<img src="/assets/img/courses/bitcoin-for-developers/KWallets-01.png" />

This type of wallet is simply a collection of randomly generated private keys with no particular relation to one another.

While these wallets worked, there was an issue with backing up the wallet data. For greater privacy, addresses were not reused. This means new addresses, and thus new keys, were generated regularly. New addresses were created on each receive transaction, with a cap of 100 addresses/key kept at any time.

{% include callouts/note.html
	bodyText="This includes change transactions. When a UTXO that is larger than the amount being spent is used, the UTXO is split and the remaining balance is returned to the sender as change."
%}

An early method for backing up a wallet was simply to copy the wallet.dat file that contained the private keys and then store this file in a secure location. However, if regular backups were not taken then they would quickly become outdated.

If a user attempted to restore a heavily used JBOK wallet, they may find that the keys in their backed up wallet.dat file no longer control any value on the blockchain. Essentially, a backup could quickly become useless.

Also, backing up a wallet meant storying what was essentially a database file. This made backups not at all user-friendly.

To solve these problems mnemonic seeds and HD wallets were created.
<h3>MNEMONIC SEEDS</h3>

The process outlined in <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" target="_blank" rel="noopener noreferrer">BIP 39</a> is the current best practice for creating wallets with mnemonic seeds.

So, what is a mnemonic seed?

It is a set of data encoded as a series of words, usually 12 or 24, which can be used to restore an entire wallet.

{% include callouts/definition.html
	title="MNEMONIC"
	bodyText="A device such as a pattern of letters, ideas, or associations that assists in remembering something."
%}

HD wallets, which we will cover in depth in the next lesson, have a parent private key which can be used to derive many child keys. In this way, one set of data, which is called the “seed”, can be used to migrate or restore a wallet with many keys and addressed.

It is, however, important to note that the “seed” is more than just the parent private key. The seed also contains the “chain code”. This is a bit of data which is necessary for the derivation of the child keys, which we’ll discuss in the next lesson.

<h3>HOW THIS WORKS</h3>

This is a simplified version of the process which is meant simply to give you a starting point. For a more in-depth explanation please see the BIP 39 <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" target="_blank" rel="noopener noreferrer">repo</a>, and chapter 5 of <a href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain-ebook/dp/B071K7FCD4" target="_blank" rel="noopener noreferrer">Master Bitcoin 2nd Edition.</a>

First, the wallet should have some source of <a href="https://en.wikipedia.org/wiki/Entropy_(computing)" target="_blank" rel="noopener noreferrer">entropy</a> which is used to generate 128-256 bits of data.

This data is then mapped to a predefined dictionary of 2048 words. This is how those 12-24 words that make up the seed are selected.

Once the seed words have been selected, a “<a href="https://en.wikipedia.org/wiki/Salt_(cryptography)" target="_blank" rel="noopener noreferrer">salt</a>” and optionally a password are selected. In BIP39 compatible wallets, the salt is automatically set to “mnemonic” plus the password if one was added.

{% include callouts/note.html
	bodyText="The addition of a password will change the resulting 512-bit seed. This provides an extra security feature. Even if an attacker was able to acquire a wallet mnemonic phrase they would be unable to recreate the necessary seed data without the addition of the password. Also, a wallet can be created that has two passwords, one for normal use and another “duress password” that results in the recreation of a wallet with only a small amount of funds to fool an attacker."
%}

Once the mnemonic phrase and salt has been selected, they are run through a “key stretching function”. This function hashes the data 2048 times! Which produces the 512-bit wallet seed.

{% include callouts/imageWithCaption.html
	image="/courses/bitcoin-for-developers/Mnemonicseeds-01-1.png"
	title="<b>MNEMONIC TO SEED</b>"
	bodyText="<b>A:</b> <i>Mnemonic Code Words;</i> <b>B:</b> <i>Salt;</i> <b>C:</b> <i>Key Stretching Function;</i> <b>A:</b> <i>M512-Bit Seed.</i>"
%}

<h3>TAKEAWAYS</h3>

The mnemonic phrase, the parent private key and the seed are not the same things.

The seed is built from the mnemonic phrase + salt and contains both the parent private key and the chain code.

The seed contains all the components necessary to migrate or restore an HD wallet.

Before we move on let's take a quick look at wallets in the context of internet security and usage. Often, when wallet types are being discussed the speaker is referring to what device the wallet seed is stored on or accessed from. This is important from the context of accessing funds and keeping them safe from theft.

{% include callouts/definition.html
	title="HOT WALLETS"
	bodyText="A wallet that exists on an internet connected device. In this situation the users private keys are stored on this internet connected device which can make them susceptible to theft. It is recommended to only store a small amount of funds for immediate use on hot wallets."
%}

{% include callouts/definition.html
	title="COLD/HARDWARE WALLETS"
	bodyText='This is a wallet that is stored on a device that is "air gapped", has no internet connect. This is often done in the form of a small hardware device. Wallets such as this are recommended for longer term storage.'
%}

{% include callouts/definition.html
	title="CUSTODIAL WALLETS"
	bodyText="These are wallets provided by services that hold key on behalf of the user. While this can provide some convenience it is important to note that it involves trusting a third party to store your funds honestly and competently."
%}

{% include callouts/definition.html
	title="PAPER WALLETS"
	bodyText="A paper wallet is a common type of 'cold storage'. It’s a method of storing keys offline. This can be done by writing out your wallet seed or private keys on a piece of paper and storing it somewhere safe such as a home fire safe. There are stainless steel versions of these types of wallets that allow you to etch your wallet seeds into a steel plate which provides improved durability."
%}

Further Reading:
<ul>
 	<li><a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" target="_blank" rel="noopener noreferrer">BIP 39</a></li>
 	<li><a href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain-ebook/dp/B071K7FCD4">Chapter 5 of Mastering Bitcoin 2nd Edition</a>
 	<li>Via <a href="https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch05.asciidoc">Github</a></li>
</ul>


<p>We’ll have a look at chain codes and HD wallets in the next lesson.</p>
