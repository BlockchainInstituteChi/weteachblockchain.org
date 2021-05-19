---
layout: lesson
course: ethereum-101-blockchain-beyond-bitcoin
module: 3
title: Security Concerns
permalink: /courses/ethereum-101-blockchain-beyond-bitcoin/3/security-concerns/
---
<br>
<br>
<span class="openingParagraph">
While the EVM is revolutionary, it's design creates some challenges for developers, which should be well understood before a mainnet launch can be considered. </span>

<h3>PRIVACY ISSUES</h3>

<hr />

<img src="/assets/img/courses/ethereum-101/00_PrivateBC-01.jpg" alt="A fence protectig a blockchain network" title="Privacy"/>

<span >Because all smart contracts are processed by each node on the network, all data that they use is visible to any participant. As a result, sensitive business data can often not be stored on chain, which complicates the design of such systems. Some solutions, such as Enigma, have proposed ways to handle this computation privately, but these are still in the early stages. </span>

<span >The code of the contracts is also public on the EVM, which means that an attacker can read the code that they're trying to compromise to identify weaknesses.</span>

<h3>LOOPHOLES</h3>

<hr />

<span >Because Smart Contracts cannot be edited once deployed, it's extremely important to carefully audit the code for any potential issues. Smart contract audits should be conducted by third-party firms before any financial systems are managed by them. Furthermore, all data inputs should be carefully examined to ensure that they cannot be manipulated by potential attackers to exploit the contract code.</span>

{% include callouts/callout.html
    title="THE DAO HACK - THE BIRTH OF ETHEREUM CLASSIC"
    bodyText="The DAO hack in 2016 resulted in the loss of a substantial amount of funds by such a large portion of the community that the <a href='https://www.ethereum.org/'>Ethereum Foundation</a> proposed a fork in the blockchain. While much of the network adopted the fork, some miners continued to use the old record. This now comprises the cryptocurrency network Ethereum Classic. The miners who adopted the fork, thereby choosing to 'undo' the hack, now represent the core Ethereum network."
%}

<h3>THIRD-PARTY RELIANCE</h3>

<hr />

<span >As we've already discussed, </span><a href="https://docs.google.com/document/d/1QYr8pCIOhs9Lb7N1VUUlByFnYg1T6V7zuihBKb-f4lM/edit#oracle%20networks"><span >Oracle Networks</span></a><span > can provide a way for smart contracts to use data from external sources. These resources, while versatile, can lead to an increased risk of manipulation. Generally speaking, Ooracles can be subverted much more easily than the overall network, and as a result this information must be closely monitored to detect potential abuse. </span>
