---
layout: lesson
course: blockchain-security
module: 2
title: HD Wallets & Seed Phrases
permalink: /courses/blockchain-security/2/hd-wallets-seed-phrases/
---
<br>
<br>
<span class="openingParagraph">Privacy on public blockchains can only be attained through obfuscation.</span>

The first thing to know about Hierarchical Deterministic (HD) Wallets &amp; Seed Phrases is that they're not a piece of software, but rather a specification for how cryptocurrency wallets can more reliably generate and store addresses from a single private key. In fact, hardware wallets predominantly are enabled by this key innovation. 

{% include callouts/note.html
	bodyText="With HD Wallets, a new address can be used for each transaction, making it difficult to trace the flow of funds or other assets."
%}

<h3>THE REALITY</h3>
No singular specification has dominated the blockchain industry or even a particular token. Many wallets have failed to implement the specification in a way that is easy to import and export from vendor to vendor. However, HD wallets and seed phrases still play a valuable role in the everyday use of blockchain software. The key is the structure of hereditary keys, derived from a common seed phrase. In most cases, an extended key is derived first, and the seed is then kept secret. 

{% include callouts/definition.html 
	title="HIERARCHICAL DETERMINISTIC"
	bodyText="A deterministic wallet is nothing more than a way to regenerate many addresses from a single <em>extended</em> private key. We call it extended because it is twice the length of a normal key, which allows us to perform some cool math tricks. We won't get into the fancy math here, but it is helpful to understand how the keys are generated."
%}

{% include callouts/definition.html 
	title="SEED PHRASES"
	bodyText="Seed Phrases are a user-friendly representation of the Extended Private Key used in an HD Wallet. The typically come in the form of 12-, 18-, or 24-word English words. They are the basis for backing up and restoring a hardware wallet. If the device were ever lost, restoring the wallet is as simple as re-entering the Seed Phrase into a new device. This method can also be used with software wallets and generally is seen as the preferred way to backup and restore cryptocurrency wallets."
%}

{% include callouts/imageWithCaption.html
	image="/courses/blockchain-security/Heirarchical-01.jpg"
	title="HIERARCHICAL DETERMINISTIC"
	bodyText="Hierarchical deterministic wallets use a seed phrase to generate multiple pseudonymous identities. This increases security by obfuscating the user's transaction history, and can even be implemented to use a new private key for every transaction. <b>A:</b> <i>Seed;</i> <b>B:</b> <i>Master Key;</i> <b>C:</b> <i>Child Keys;</i> <b>D:</b> <i>Grandchild Keys.</i>"
%}

<h3>KEY GENERATION</h3>
With HD Wallets, a seed phrase is used to generate a master private key, which is then hashed with a predefined value to generate a set of unique addresses, along with a corresponding private key for each of them. Because the addresses and private keys are derived separately, this tool can be used to generate infinitely many addresses, withour ever even recording their private keys. When it comes time to unlock them, we can generate the corresponding keys and withdraw the funds.

{% include callouts/callout.html 
	title="BIP32"
	bodyText="<a href='https://en.bitcoin.it/wiki/BIP_0032'>Bitcoin Implementation Proposal #32</a> was adopted early 2012 in order to provide a solution for relative privacy on the Bitcoin network. While it was created for Bitcoin, it is now used in most cryptocurrencies, as well as some digital collectibles.<br><br>While each address is generated randomly, there are so many available permutations that it is next to impossible to ever end up with the same address as someone else."
%}

<h3>TRY IT YOURSELF</h3>
The best way to understand how HD wallets work is by using one in real time. Fortunately, there is a handy <a href="http://bip32.org/">BIP32 Deterministic Key Generator</a> available online for us to play with! Although the specific derivation paths (algorithms) used vary between tokens, the concept is similar across platforms.

Once you open <a href="http://bip32.org/">the BIP 32 Generator</a> you'll see the interface shown below.

{% include callouts/upsideDownImageWithCaption.html
	image="courses/blockchain-security/bip32-1.png"
	title="1. Set a seed phrase"
	bodyText="Enter a seed phrase and write it down."
%}

{% include callouts/upsideDownImageWithCaption.html
	image="courses/blockchain-security/bip32-2.png"
	title="2. Get an Address"
	bodyText="Scroll down and check your generated address. You can click the dropdown to set the derivation path, and change the Account (k) field to get a new address at that path."
%}

{% include callouts/upsideDownImageWithCaption.html
	image="courses/blockchain-security/bip32-3.png"
	title="3. Check the address on a block explorer"
	bodyText="While it's not necessary, it can be a nice peace of mind to know for certain that your address is not already in use. Open <a href='https://www.blockchain.com/explorer'>a Blockchain Explorer</a> and paste in your generated address to see if it's ever been used before. In this case - looks like we're safe!"
%}

Write down that seed phrase and keep it. You now have your own HD wallet. The BIP32 Generator runs clientside only, so as long as your computer is secure, then you have your own completely private set of Bitcoin addresses which you can use for anything you want. For reference, your chance of overlapping with someone else's address is about the same as selecting a single grain of sand from the entire universe, so it's usually pretty safe to skip Step 3.

