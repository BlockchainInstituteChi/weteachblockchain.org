---
layout: post
title:  "Pickles, DeFi, and Transparency"
date:   2020-10-22 11:02:58 -0500
categories: defi tools
thumbnail: authors/TBI_author.jpg
banner: authors/TBI_blogauthorheader.jpg
author: "clayton"
published: true
permalink: /posts/10/22/pickles-defi-and-transparency
---
<h2>Are you full of $Sushi and $Kimchi? Did that $Hotdog make you sick? </h2>

Perhaps it’s time for Pickle; more food for the DeFi ecosystem. Pickle is a DeFi (decentralized finance) project that aims to keep popular stablecoins at their peg of $1. Stablecoin prices can shift slightly below or above this peg as markets fluctuate.

<h2>What's pickle?</h2>
The Pickle protocol combines common DeFi features such as yield-farming, vaults, and governance. Underlying these features is an incentive structure. Unique incentive structures help to differentiate the numerous DeFi projects from one another. Savvy individuals who understand a protocol’s features will take advantage of these incentive structures, earn crypto, and maximize those earnings depending on how invested they are in the project. The process is comparable to a game designed by the protocol’s developers. In this case, the object of the game is to keep stablecoins...stable. If you know the rules of this “game”, you can earn $PICKLE tokens as a reward. The better you are at the game, the more you earn.

{% include callouts/callout.html
    title="Delicious $PICKLE. A token with no inherent value, according to the protocol’s developers:"
    bodyText="<a href='https://medium.com/@picklefinance/pickle-finance-launch-beea2eb8eacb' target='_blank'><img src='/assets/img/pickleDisclaimer.png'></a>"
%}

You read that correctly...Pickle has 0 financial value and is completely valueless according to its own developers. “Completely valueless” token rewards are actually fairly typical of DeFi projects. Perhaps this nearly universal lack of valuable token features is actually a feature in and of itself...but that is a story for another time. 

<h3>Apparently, nobody read the disclaimer. </h3>
At the time of writing, one $PICKLE token is worth $19.08. Pickling pays? If that’s the case, then it pays to learn the rules of the game. Let’s take another look at that disclaimer before we bust out the rulebook. 

{% include callouts/note.html
    bodyText='First two sentences: “No audits. Contributors to Pickle have made reasonable efforts at ensuring the integrity of the protocol including tests”.'
%}

<b>Translation:</b> you need to trust that the developers are not making up the rules as they go, rigging the rules for their own benefit, or writing down the rules incorrectly. An audit would indicate that an independent third-party has verified the business logic and code, such that an investor can trust that the decisions they are making about their investment is rooted in reality. 

A lack of third-party auditing suggests that the developers are only trustworthy to the degree that an investor understands the developer’s code. To safely progress through and eventually succeed in this game, it seems like you should already be a professional! 

Here’s the problem: this exciting space cannot grow sustainably on the backs of sophisticated pros. Lack of consistent transparency and trust must be addressed. Currently, developers will usually admit that their DeFi projects are experimental and could end in loss of funds. This is not the best way to fight fear, uncertainty, and doubt. FUD prevents new investors from entering the DeFi space. 

{% include callouts/bigQuote.html
	body="Pay no attention to the man behind the curtain!"
	sourceName="-The Wizard of Oz"
	sourceUrl=""
%}

{% include callouts/imageWithCaption.html
	image="pickleSourceCode.png"
	title="The man behind the curtain"
	bodyText="Pickle source code (via Github)"
%}

<h1>Understanding how DeFi projects work is hard work for a newcomer. <h1>

<h4>Here’s the game, in a nut shell:</h4> 
Earn $PICKLE by staking stablecoin and ethereum pairs within Uniswap liquidity pools. Make sure you’re picking the optimal pool, because $PICKLE distributes based on a stablecoin moving above or below it’s $1 target. Above-peg, less $PICKLE. If USDT is at $1.01, be ready to allocate to USDC at its price of $0.99, since it having below-peg status translates to more $PICKLE. Competitive participants will actively chase the highest yield, and in doing so, regulate the prices of these stablecoins (natural result of supply and demand economics). In theory, this helps to stabilize the rest of the DeFi ecosystem, as stablecoins on other DeFi protocols move off-peg due to large volume moving in and out of numerous projects. This is because sophisticated DeFi participants move money between many projects in order to chase profits. And let’s not forget about Pickle’s vaults, or “pJars”. It’s simple enough: deposit your Pickle rewards earned from staking stablecoins, into the pJar of your choosing. Each pJar is designed to earn you even more money through alpha-seeking strategies that have been encoded into the pJar’s smart contract. Consider the “Leveraged-Short DAI pJar”. Or perhaps you prefer the “pJar 0 - sCRV”? You’re placing funds into what is essentially a hedge fund strategy, programmed into a smart contract, which was definitely not audited when it launched. Got all that? 

{% include callouts/imageWithCaption.html
	image="pickleDiagram.png"
	title="The curtain."
	bodyText="<a href='https://medium.com/@picklefinance' target='_blank'>View the full medium article</a>"
%}

Couple the complex nature of DeFi projects like Pickle with a lack of standards, transparency, and trust in the systems and code that form them, and you get a recipe for FUD amongst newcomers. 

People should not fear Pickle. The doubt and uncertainty surrounding the DeFi space can be lessened through the empowerment of its participants. Developers are focused on moving quickly and iterating on their projects. In the meantime, we need tools that allow for greater visibility into the increasingly complex DeFi world.

<h2>Fight the FUD</h2>
Tools are available to help participants make sense of the projects that they invest in, but these tools too often further obscure the nature of the ecosystem itself. For example, I can use Etherscan to look at transaction information within the Pickle ecosystem. Let’s take a look at the pJar - 0 for sCRV previously mentioned. 

{% include callouts/imageWithCaption.html
	image="pickleTransactions.png"
	title="Pickle Transactions on Etherscan"
	bodyText="<a href='https://etherscan.io/address/0x68d14d66B2B0d6E157c06Dc8Fefa3D8ba0e66a89' target='_blank'>View on EtherScan: https://etherscan.io/address/0x68d14d66B2B0d6E157c06Dc8Fefa3D8ba0e66a89</a>"
%}

It’s comforting to know that this data is available and viewable, but is this intuitive for an amateur seeking to optimize his or her first DeFi investment? Who is to say that this is not a money laundering operation? There are about 40 pages to scroll through, and it only represents one part of a greater system. What about the other jars, the staking rewards, the governance contracts? Those are all important components to understand, but to make sense of them via Etherscan you’ll have to open more tabs than you are comfortable with. And that’s if you know what you’re looking for!

Etherscan is but one tool in the transparency arsenal. In order to bring DeFi projects like Pickle into the mainstream, we will need intuitive products that instill trust and promote regulatory compliance via greater visibility. Luckily, there are companies like anchain.ai, a startup focused on bringing transparency and security to blockchains using machine-learning powered products. Anchain’s CISO tool (compliance. investigation. security operation.) allows the user to view projects like Pickle in an entirely new light, by graphing out transactions in a way that mimics the flow of value through the ecosystem. Let’s have another look at the pJar-0 contract, this time using CISO. 

{% include callouts/imageWithCaption.html
	image="pickleCISO-2.png"
	title="The pickle contract, visualized"
	bodyText="<a href='https://ciso.anchainai.com/s/2w5k2SxPCuq'>Clicking here</a> will take you to CISO, where you can explore this pJar for yourself"
%}

Here we see a visualization of inflows and outflows from the pJar-0 contract. This graph can be expanded upon, as your curiosity leads you through the network of transactions. CISO provides an intuitive method for exploring blockchains which helps newcomers to better understand the nature of these networks. It’s transparent in every sense of the word. Not only does it reveal transaction data within DeFi networks, it shows where the transactions are flowing. It reveals entities such as centralized exchanges, decentralized exchanges, and big-money “whales”.

Graphs can be expanded to map out and track flows between many wallets and many entities. One has full control of the shape that their map takes, as it forms a “journey” that can be observed or studied. With CISO, the abstraction of complex DeFi transactions and relationships becomes a detailed story. 

People have a natural affinity for stories, including people who do not understand DeFi whitepapers. Don't forget to do your own research. 

{% include callouts/imageWithCaption.html
	image="pickleCISO-2.png"
	title="Pickle’s beginnings, a short story"
	bodyText="<a href='https://ciso.anchainai.com/s/2w6tddwnote'>See the full graph</a>"
%}

{% include callouts/note.html 
    bodyText="Transparency = Trust"
%}

Perhaps you understand Pickle because you studied it, but will never invest in its ecosystem. Maybe you don’t care how it works, but will throw money into it because others are talking about it on Twitter. Maybe you’d like to understand it, and you’re curious about these weird DeFi projects, but you’re not sure how to begin. If you think that the concept of a decentralized investment vehicle named after a snack item seems ridiculous, then you are not alone. It does seem ridiculous, which makes it seem untrustworthy...but you probably don’t want to get caught missing the next unicorn because you dismissed it as untrustworthy.

Whatever the case, it stands to reason that the more tools that people can use to shed light on the hidden forces underpinning the DeFi ecosystem, the more trust people will have in the projects that define the ecosystem. In turn, the ecosystem can grow sustainably. See for yourself!

Further Reading: <a href='https://medium.com/@picklefinance/pickle-finance-launch-beea2eb8eacb'>Official Pickle Medium</a>
               
