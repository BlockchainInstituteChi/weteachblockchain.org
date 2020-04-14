---
layout: lesson
course: blockchain101
module: 2
title: What is Cryptocurrency Mining?
permalink: /courses/blockchain-101/02/what-is-cryptocurrency-mining
---

<span>
<div style="text-align: center;">

<iframe src="https://www.youtube.com/embed/XQZ0FgepHc4?rel=0" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

</div>
<span class="openingParagraph">Now that we know a little bit about the structure of a blockchain and its components, we can explore how a blockchain is managed and maintained. How is data checked for reliability and then put into blocks? What keeps the network running? The answer to these questions is a process known as “mining”.
</span>

<span style="font-weight: 400;">Since a copy of the blockchain is stored on each computer on the network, data can be retrieved relatively easily and quickly. This allows nodes on the network to act as reliable validators. These nodes are tasked with checking the reliability of information when a new block is being compiled by a block producer, the node selected to compile the next block. This process is also known as reaching consensus or </span><b>mining.</b>
&nbsp;

<h3>PROOF-OF-WORK</h3>
<hr />
<img src="/assets/img/courses/blockchain-101/PoW-01.png" />

<span style="font-weight: 400;">The first blockchains used <strong>Proof-of-Work</strong> as a way to achieve consensus. Blocks go through a complex, energy consuming process of trial and error when they are trying to create a new, sufficiently random hash. In order to do this, nodes try to be the first to guess a value that meets specific criteria. The time and effort expended by these computers act as proof that they put in sufficient work needed to help maintain the network, and is appropriately known as Proof-of-Work. The miner that solves the equation that results in the creation of a block receives a reward in the form of a coin or coins, creating an economic incentive for users to mine blocks. Block rewards also act as an incentive for miners to contribute to the security of the system. The higher the blockchain’s hash rate, the more secure the chain will be. The more processing power a miner has, the more likely they are to solve the next block and receive the block reward as they are able to attempt to guess the most variables in the least amount of time.</span>

<span style="font-weight: 400;">While Proof-of-Work was the first consensus mechanism used by a blockchain, many have criticized its main feature as a downfall. Massive amounts of energy are consumed in order to secure a blockchain, so others have explored ways to have a secure blockchain without expending massive amounts of energy. New coins are constantly being mined, the number depending on the specific blockchain’s rules or protocols. </span>
&nbsp;

<h3>PROOF-OF-STAKE</h3>
<hr />
<img src="/assets/img/courses/blockchain-101/PoS-01.png" />

<span style="font-weight: 400;"><strong>Proof-of-Stake</strong> (PoS) has gained popularity as a potential alternative to Proof-of-Work by completely disregarding the “race” to find a specific variable. Instead, a node is selected to write the next block. There are different ways of selecting validators within Proof-of-Stake models, but the most common selection method is proportional to the amount of cryptocurrency staked. In other words, the more cryptocurrency that is staked by a node, the more likely that </span><span style="font-weight: 400;">node is to be selected as the next block’s writer. </span>

<span style="font-weight: 400;">The theory behind Proof-of-Stake is that the more cryptocurrency one is willing to stake, the more stake that an individual has in the success of the network. If that individual is found to be sabotaging the consensus process, their stake is taken by the network, giving block producers great incentive to correctly validate the next block. Validators essentially </span><span style="font-weight: 400;">bet</span><span style="font-weight: 400;"> cryptocurrency for the right to write a block. In return, they collect either a block reward or transaction fees. The collection of fees are an incentive for validators to stake their own currency, making sure validators have “skin in the game”, or money to lose if they are found to be acting maliciously. This threat of losing your cryptocurrency helps ensure the security of the network, as it highly discourages actions that might compromise the blockchain. However, it is not always possible to tell if a user is acting maliciously or a validator is not participating when they are supposed to. Sabotaging the blockchain is very different than not being able to validate a node because of a lost internet connection. As a result, those who commit these non-malicious errors are often given warnings or “fined” instead of having their entire stake taken on the first transgression.</span>

<span style="font-weight: 400;">Proof-of-Work has its advantages over Proof-of-Stake. Proof-of-Work consensus mechanisms are completely trustless, as adding to the blockchain does not require a single validator to write the next block. Additionally, trust is amplified by each node’s ability to monitor the others, constantly monitoring the network for inconsistencies. No one individual has to be trusted for a block to be confirmed since all nodes are double checking the validity of a block’s data when it has been formed.</span>

<span style="font-weight: 400;">Proof-of-Stake also has its criticisms. Validators are arbitrarily selected, and a certain degree of trust must be assumed in order for the network to run. In order to gain a stake in the network, a potential participant has to obtain the required coins or tokens in order to be eligible to be selected as a validator. Additionally, if validators are selected by the size of their stake, the ecosystem puts itself in a situation where the rich have the disproportionate opportunity to be selected as a validator and collect rewards, allowing them to stake even more, repeating the process. Essentially, the rich get richer over time.</span>

{% include callouts/definition.html title="Incentives, Block Rewards, and Mining Difficulty" bodyText="As mentioned before, a key part of a blockchain’s architecture is decentralization. In order to maintain and add to this unique network construction, incentives must be provided to make sure nodes participate in the network, as to continue the building of the blockchain. The main incentive for mining is the block reward that goes to the node that writes the next block, encouraging more competition on the network and contributing to the security of the chain. Additionally, mechanisms are installed to control the amount awarded as block rewards to create an economically viable network.

We already touched on two of the primary consensus mechanisms: Proof-of-Work and Proof-of-Stake. While many protocols use these popular consensus mechanisms, there are a few networks that use rather unique methods of achieving consensus. Proof-of-Activity, used by Decred, combines traits of Proof-of-Work with Proof-of-Stake to create a hybrid consensus mechanism. Some consensus mechanisms give advantages to those who transact their coins or tokens frequently, while others incentivize the holding of tokens. Additionally, there are many subsets of Proof-of-Stake, each having a different way of determining which node gets to write the next block. These consensus mechanisms are different, but they all aim to achieve the same goal; incentivize behaviors that will maintain the security and integrity of their respective blockchains" %}

</div>
<br>

<span style="font-weight: 400;">To summarize, mining is the process of creating blocks made up of valid transactions. Essentially, it is the process in which nodes come to a consensus on what transactions are to be accepted. </span>

<span style="font-weight: 400;">The process of creating a block differs with each blockchain, but the most common mechanisms to achieve consensus are Proof-of-Work and Proof-of-Stake. Proof-of-Work pits miners against each other in a race to see who can find a compatible variable the fastest, creating a competitive and secure network. Proof-of-Stake selects between users who have “staked” cryptocurrency; if the user acts maliciously, they are warned and their stake is taken. If the selected validator writes a reliable block, they obtain the block reward. There are multiple ways of blockchains in which blockchains reach consensus and both existing and new projects are inventing unique incentive mechanisms.  </span>

Now that we know how cryptocurrency is mined, let's look at some potential attacks methods that could disrupt this process and how blockchains look to mitigate these attacks.
