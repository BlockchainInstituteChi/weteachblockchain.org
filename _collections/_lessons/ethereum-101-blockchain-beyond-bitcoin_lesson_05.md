---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 2
title: Fungible Tokens
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/2/fungible-tokens/
---
<span class="openingParagraph">
One thing which is important to understand about decentralized design patterns is that they are not ever constant. While many smart contracts follow the same formats, each is an independent object which can be configured in any way that suits its purpose. </span>

<span >When we refer to Ethereum altcoins, we're often referring to tokens which meet the ERC-20 Standard. By using a common standard, these tokens can all use common wallets and systems. This has led to increases in interoperability and adoption of new systems such as </span><a href="https://shapeshift.io/#/coins"><span >Shapeshift</span></a><span >. </span><span >The formal documentation</span><span > defines this standard for most use cases, but as we'll explore, there are some situations where one might want to deviate from the accepted format. </span>

<h3>HOW ARE TOKENS CREATED?</h3>

<hr />

<span >To create a new token, a smart contract is written to track the value that is sent to it. When a user sends money to the contract, they'll be issued tokens from the available supply. The tokens will be 'sent' to the same address that funded the contract call. In most applications, other users can also deploy other functionality. In many cases, an Initial Coin Offering (ICO) is structured to sell a certain amount of the initial supply, and subsequent tokens are then released as incentives within the network. </span>

{% include callouts/imageWithCaption.html
	image="/courses/ethereum-101/SmartContract-01-1.png"
	title=""
	bodyText="<b>A:</b> <i>Smart Contract;</i> <b>B:</b> <i>Ether;</i> <b>C:</b> <i>Token;</i> <b>D:</b> <i>Investor.</i> A smart contract can be used to generate Tokens when a user pays into it with Ethereum. The contract then tracks the user's Token Balance over time and allows them to transfer the balance to another user, or deploy it with other compatible functionality."
%}

<h4>Use Cases</h4>
<span >There are a variety of applications of smart contracts that require a way to track value beyond simply Ether. In some cases, such as with stable coins, there's a major benefit to using a subsidiary currency which can have it's supply moderated to control inflation.</span>
<h4>Maker DAO / DAI</h4>
<span >The DAI Stablecoin utilizes an ERC-20 token (Maker) along with automated control mechanisms to implement a stable coin which holds its value at $1 USD. This is only possible because the token can be created and destroyed without the underlying assets used to back it being affected. </span>
<h4>Golem GNT</h4>
<span >The Golem Network facilitates super-computer functionality using a network of decentralized peers. Users on the network earn Golem tokens for computational power, which can, in turn, be used to pay the network for the same service. In order to control inflation on this network, the Golem token is convertible for a different amount of computation depending on the supply available. This distinction incentivizes users to manage demand on their own.</span>
<h4>Augur REP</h4>
<span >Augur facilitates a marketplace for predictions. In this environment, the </span><span >REP token is used to stake a bet, and rewards are then dispersed in the same fashion.</span><span > Because Augur uses REP tokens for voting and dispute resolution, it's important that these exist as a separate form of token. If Ethereum tokens were used instead, any large Ethereum holder could sway decisions without actually having contributed to the network themselves. </span>

<h3>LIMITATIONS</h3>

<hr />

<img src="/assets/img/courses/ethereum-101/Limitations-01.png" />

<span >While the ERC-20 token distribution model was quite popular during 2017, this framework has some structural issues which preclude some interesting use cases. In particular, it's important to note that tokens cannot be used to purchase gas, so the contracts that support these networks still need to hold and pay with Ether for any computations that occur.</span>

<span >As we'll explore in the next lesson, some property shouldn't be divisible to 18 decimal places, or have quite this level of financial complexity. For these sorts of digital assets, a new standard was required. </span>
