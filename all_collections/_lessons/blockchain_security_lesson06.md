---
layout: lesson
course: blockchain-security
module: 2
title: HD Wallets & Seed Phrases
permalink: /courses/blockchain-security/2/hd-wallets-seed-phrases/
---
<br>
<br>
<span class="openingParagraph">The first thing to know about Hierarchical Deterministic (HD) Wallets &amp; Seed Phrases is that they're not a piece of software, but rather a specification for how cryptocurrency wallets can more reliably generate and store addresses from a single private key. In fact, hardware wallets predominantly are enabled by this key innovation.</span>

<h3>THE REALITY</h3>


No singular specification has dominated the blockchain industry or even a particular token. Many wallets have failed to implement the specification in a way that is easy to import and export from vendor to vendor. However, HD wallets and seed phrases still play a valuable role in the everyday use of blockchain software.

<h3>HIERARCHICAL DETERMINISTIC</h3>


A deterministic wallet is nothing more than a way to regenerate many addresses from a single <em>extended</em> private key. We call it extended because it is twice the length of a normal key, which allows us to perform some cool math tricks. We won't get into the fancy math here, but it is helpful to understand how the keys are generated.

{% include callouts/imageWithCaption.html
	image="/courses/blockchain-security/Heirarchical-01.jpg"
	title="HIERARCHICAL DETERMINISTIC"
	bodyText="<b>A:</b> <i>Seed;</i> <b>B:</b> <i>Master Key;</i> <b>C:</b> <i>Child Keys;</i> <b>D:</b> <i>Grandchild Keys.</i>Hierarchical deterministic wallets use a seed phrase to generate multiple pseudonymous identities. This increases security by obfuscating the user's transaction history, and can even be implemented to use a new private key for every transaction."
%}
<br>
{% include callouts/callout.html
    title="Try it yourself!"
    bodyText='The best way to understand how HD wallets work is by using one in real time. Fortunately, there is a handy <a href="http://bip32.org/">BIP32 Deterministic Key Generator</a> available online for us to play with! Although the specific derivation paths (algorithms) used vary between tokens, the concept is similar across platforms.'
%}

<h3>SEED PHRASES</h3>


Seed Phrases are a user-friendly representation of the Extended Private Key used in an HD Wallet. The typically come in the form of 12-, 18-, or 24-word English words. They are the basis for backing up and restoring a hardware wallet. If the device were ever lost, restoring the wallet is as simple as re-entering the Seed Phrase into a new device. This method can also be used with software wallets and generally is seen as the preferred way to backup and restore cryptocurrency wallets.
