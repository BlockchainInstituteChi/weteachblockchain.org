---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 2
title: Unique Digital Assets
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/2/unique-ditial-assets/
---
<br>
<br>
<span class="openingParagraph">
While ERC-20 tokens serve well to support marketplaces and other situations where supply and demand controls are necessary, there are a range of other applications that are not well-served by interchangeable tokens. In particular, it is very useful to have unique tokens which are indivisible. As an example, consider a property title, collectible, or art, where fungibility is not required, and verifying uniqueness is what creates the value.</span>

{% include callouts/callout.html
   title="ERC-721"
	bodyText="A a standard that provides developers with a simple way to create unique assets on the Ethereum blockchain. Broadly referred to as Non-Fungible-Tokens or NFTs, this class has created some interesting solutions. In this application, the same smart contract is used to generate all of the individual items, but each item has unique characteristics."
%}

{% include callouts/imageWithTextCallout.html 
    title="CRYPTOKITTIES"
    image="/courses/ethereum-101/cryptokitties.png"
    bodyText="Adorable, colorful, fluffy in pixelated 2D, and entirely yours, forever. These cute collectibles can be yours today if you send some Ether to the right smart contract. In this context, the smart contract randomizes certain characteristics such as the color or appearance, which makes each kitty unique, even though they all come from the same contract."
%}
