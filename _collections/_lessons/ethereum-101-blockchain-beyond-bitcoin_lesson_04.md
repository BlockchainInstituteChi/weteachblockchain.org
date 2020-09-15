---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 2
title: Smart Contracts
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/2/smart-contracts/
---
<br>
<br>
<span class="openingParagraph">Anyone can write code that runs on the EVM</span>
One of the main benefits of the Ethereum blockchain is the addition of Smart Contracts. These allow code to be submitted to the State Transition, and to have their output added to the ledger. Contracts and accounts are identical during execution within the EVM, so a peer-to-peer payment is treated just like any other computation. In the Ethereum world, every action that can be registered can be encoded in software, and the entire network is able to compute the outcome simultaneously.

{% include callouts/note.html 
	bodyText="The Ethereum Virtual Machine executes code called <b>Smart Contracts</b>. When a contract is invoked by paying a fee, the network adds the related state changes to a new transaction, and the system propagates the update."
%}

{% include callouts/imageWithCaption.html
	image="/courses/ethereum-101/EthereumNode-01-1.jpg"
	title="Smart Contract Creation"
	bodyText="When a Smart Contract is deployed to the network, the creator pays a small fee, and can invoke it to trigger an event. <hr><b>A:</b> <i>CREATE SOLIDITY SMART CONTRACT;</i> <b>B:</b> <i>COMPILE USING SOLIDITY COMPILER (SOLC);</i> <b>C:</b> <i>PERFORM DEPLOYMENT;</i> <b>D:</b> <i>STORES THE ABI AND CONTRACT ADDRESS;</i> <b>E:</b> <i>INSTANTIATES THE CONTRACT;</i> <b>F:</b> <i>INVOKE CONTRACT METHODS FOR DATA STORAGE;</i> <b>G:</b> <i>Passes the .sol file;</i> <b>H:</b> <i>Using the bytecode invokes deployment via Web3js;</i> <b>I:</b> <i>Returns the contract address and the ABI;</i> <b>J:</b> <i>Passes the address of the ABI of the contract;</i> <b>K:</b> <i>Passes all the parameters for the contract methods;</i> <b>L:</b> <i>Signs and passes Ether to perform the operation;</i> <b>M:</b> <i>ETHEREUM NODE.</i>"
%}

In order to run a new smart contract, the creator must first deploy it to the chain and pay gas for that operation. This will return the newly created address of the contract, which can then be used for further configuration steps.


<h3>CREATING CONTRACTS</h3>

<span >Once the code is written, the owner must submit the contract and pay for the fuel (Gas) to store the contract on the Ethereum Virtual Machine. Once the contract is submitted, the network will run it whenever someone pays for the appropriate amount of gas. Gas cannot be held in a wallet, but is instead purchased at the time of a transaction in order to fund its execution. The Gas Price, or the amount of Ether required to purchase computation, is scaled automatically to match the current amount of computation available in the network and the current demand for it. This flexible structure ensures that the network will not ever accept more computation demands than it can fulfill. </span>

{% include callouts/definition.html 
	title="ORACLE"
	bodyText="In the event that a smart contract needs to check for information outside of the Ethereum ecosystem, a third party such as an Oracle can be used to add that information to the blockchain. Oracle services provide external data for use in smart contracts, and are held accountable through staking or other incentive mechanisms on-chain. If enough Oracles are used, the information can be considered to be sufficiently reliable. Further consideration of <a href='https://blog.ethereum.org/2014/07/22/ethereum-and-oracles/'>Buterin's initial work</a> on the concept may be beneficial."
%}

<h3>AN EXPLOSION OF APPLICATIONS</h3>

<span >While the basic functionality of Smart Contracts only goes so far, they can be structured in layers to create more complex functionality. As long as all of the individual contracts are funded with the proper amount of gas, there's nothing stopping developers from building fully integrated apps entirely on these decentralized networks. In the remainder of this module, we'll explore how this concept has been expanded, and how it turned 2017 into a gold rush for software developers.</span>
