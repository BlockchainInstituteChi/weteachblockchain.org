---
layout: lesson
course: bitcoin-for-developers
module: 1
title: A Bitcoin History Lesson
permalink: /courses/bitcoin-for-developers/1/bitcoin-history-lesson
---
<br>
<br>
<span class="openingParagraph">
This course was designed for developers with no prior blockchain experience, so we’ll start right at the beginning by answering the question, <b>what problem was the first blockchain, Bitcoin, built to solve?</b></span>

The quick answer here is the<b> Double-Spend Problem</b> or the <b>Byzantine Generals Problem</b>, which we’ll discuss more below.

We think of Bitcoin and cryptocurrency as a rather new technology, and it is, but the vision of cash for the Internet is nearly as old as the Internet.

When HTTP error codes were being created, code 402 Payment Required, was held for future use.

<img src="/assets/img/courses/bitcoin-for-developers/Hannah5b-01-s.jpg" />

Subsequently, there were many digital currency experiments prior to Bitcoin. Here’s a list of some fairly successful ones:

<a href="https://en.wikipedia.org/wiki/DigiCash" target="_blank" rel="noopener noreferrer">DigiCash</a> was founded by cryptographer<a href="https://www.chaum.com/" target="_blank" rel="noopener noreferrer"> David Chaum</a> in 1989. The company developed a number of privacy protecting cryptographic protocols and saw some success with the companies product eCash which was trialed by two Australian banks in the ’90s.

Other notable projects include<b><a href="https://en.wikipedia.org/wiki/E-gold" target="_blank" rel="noopener noreferrer"> E-Gold</a></b>, <a href="https://en.wikipedia.org/wiki/Liberty_Reserve" target="_blank" rel="noopener noreferrer"><b>Liberty Reserve </b></a>, and <a href="https://www.goldmoney.com/" target="_blank" rel="noopener noreferrer"><b>Gold Money</b></a><b>.</b> Most of these systems sought to instill confidence by owning gold to back their currency and give it <b>value</b>. These currencies were essentially online tokens representing gold owned by the company.

{% include callouts/note.html
    bodyText="Some understanding of monetary theory is helpful here to properly grasp the functioning of these currencies and modern cryptocurrencies. When a currency is not “backed” by a commodity, such a gold, and controlled by a nation state there needs to be another means of giving it value. Generally, this is done through scarcity either by limiting the supply, via cryptography and a blockchain network or by tying it to a limited physical commodity such as gold."
%}

While these systems worked, they had a serious drawback that was lamented by many in the digital currency community, they were centralized services. This centralization ran counter to the peer-to-peer dream of many digital pioneers, like the renowned “<a href="https://en.wikipedia.org/wiki/Cypherpunk" target="_blank" rel="noopener noreferrer">cypherpunks</a>,” introducing security and privacy risks. However, this centralization existed for one very good reason, the Double-Spend Problem.

Digital goods are very easy to copy. As in copy/paste easy to copy.

<img src="/assets/img/courses/bitcoin-for-developers/1-01.jpg" />

When you have a string of data that represents a digital coin, you can use cryptography to prove origin, but you can’t prevent duplication.

For example, let’s imagine that Alice has only one coin and yet she owes both Bob and Charlie one coin each. Alice can attempt to pay both of them using the same coin. She can take her coin, cryptographically sign it to prove that it is hers and then send it along to Bob. However, she can them take that same string of data that represents her coin, sign it again and send it along to Charlie. She is spending the same coin twice (double spending), and it’s not hard to see how this leads very quickly to massive inflation and destroys the currency.

A central server can be used to prevent double spends--but is there another way?

<img src="/assets/img/courses/bitcoin-for-developers/1-02.jpg"  />

In the server-client model, payments can’t go directly from Alice to Bob, instead they first need to go through the central server which does the work of debiting Alice’s account and crediting Bob’s account.

Many digital currency pioneers worked hard on solutions to this technological centralization issue and created federated systems, etc. But the peer-to-peer dream wasn’t realized until the development of Bitcoin, which solved the pesky problem of digital uniqueness.

The<a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer"> Bitcoin Whitepaper</a> was published by Satoshi Nakamoto in October 2008. Although not directly called so in the paper, this was the invention of what we now call the Blockchain.

The whitepaper should certainly be read by anyone looking to understand this technology and its origins. But to summarized, Satoshi wanted to replace the centralized server with a peer-to-peer network which would then do the work of keeping track of who has what and when.

{% include callouts/imageWithCaption.html
    image="courses/bitcoin-for-developers/ByzantineGenerals2-01.jpg"
    title="The Byzantine Generals Problem"
    bodyText="<i>General;</i> <b>B:</b> <i>Traitor.</i> Byzantine Generals problem is an old fashioned analogy for a modern computing problem. The analogy is an army of generals encircling an enemy city. To defeat the enemy the generals must attack at the same time. However, there may be traitors amongst them. How do they coordinate this data and agree upon an attack time in hostile territory with the possibility of traitors?"
%}

In the computer science world, this phrase refers to the possibility of having to cope with the failure of some of the components in the system.

This term is used frequently in the blockchain world as it refers to the problem of reaching consensus in an open system where not all parties can be assumed to be trustworthy.

The dream for this network is that is would be open to anyone. This brings us to the question of <b>how do you coordinate data with people, around the world, who you don’t know or trust?</b>

{% include callouts/note.html
    bodyText="<strong>Satoshi Nakamoto</strong> is a pseudonym. It is still not clear who the creators of Bitcoin are or were."
%}

