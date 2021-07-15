---
title: What is Taproot?
image: BIP_tile.jpg
permalink: /faq/what-is-taproot/
layout: faq
tag: CONCEPTS
focusKeyword: Bitcoin, BIP, Bitcoin upgrade 
learnMoreLink: /courses/demystifying_defi/1/demystifyingdefi
learnMoreText: the Demystifying DeFi course
learnMoreImage: DEFI_title.jpg
weight: 5
sticky: true
readtime: 2m
---
<p>Now that you know all about BIPs (<a href='/faq/what-is-bitcoin-improvement-proposal/'>Bitcoin Improvement Proposals</a>), let's look at Taproot, the recent protocol changes that have been adopted, almost unanimously, by the members of the Bitcoin network.</p>

<p>Taproot is a standards upgrade that makes actual changes to the code that makes up the network, and is the first major upgrade the network has adopted in about four years (SegWit was adopted in 2017).</p>

{% include callouts/callout.html
   title="The Taproot upgrade is made up of 3 BIPs"
	bodyText="<ul>
  <li><a href='https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki'>340 - Schnorr Signatures for secp256k1</a></li>
  <li><a href='https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki'>341 - Taproot: SegWit version 1 spending rules</a></li>
  <li><a href='https://github.com/bitcoin/bips/blob/master/bip-0342.mediawiki'>342 - Validation of Taproot Scripts</a></li>
 </ul>"
%}

<p>As we discuss in our <a href='/courses/crypto-curious-course/'>Crypto Curious Course</a> and <a href='/courses/demystifying-defi/'>Demystifying DeFi</a>, smart contract capabilities have been relatively limited because of certain features that have been previously adopted by Bitcoin. Taproot looks to change this, all while providing a greater level of privacy when it comes to what's in a smart contract.</p>

<p>While the upgrade doesn't enhance the anonymity that each individual has, it will make it much harder to distinguish between simple and complex transactions, like a transaction launching a smart contract.</p>

{% include callouts/definition.html
	title="Smart Contract"
	bodyText="A programmable contract that can be executed on certain blockchains, such as Ethereum."
%}

<p>Taproot is largely enabled by how digital signatures are organized within a transaction. The first effect is the enhanced privacy gained by streamlining and making the deployment of smart contracts less expensive. However, the reorganization of these signatures also opens up Bitcoin to employ tools similar to the ones <a href='/courses/ethereum-101-blockchain-beyond-bitcoin/'>Ethereum</a> has employed.</p>

<p>As we discuss in the mentioned courses, the deployment and running of smart contracts has largely been limited by the technological limitations of the Bitcoin chain. Taproot looks to remove those limitations, opening several possibilities for the network. This includes the running of dApps using the Bitcoin chain and the potential to create a robust, Bitcoin-based DeFi ecosystem that could potentially catch up with Ethereum, in time.</p>

<p>It is tough to tell what will come of Taproot, as it is largely just a tool that may or may not prove to be successful. But the implementation opens up the possibilities of a Bitcoin that has some of the characteristics of Ethereum.</p>
