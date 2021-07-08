---
title: What is a BIP (Bitcoin Improvement Proposal)?
image: BIP_header.jpg
permalink: /faq/what-is-bitcoin-improvement-proposal/
layout: faq
tag: CONCEPTS
focusKeyword: BIP, Taproot, Bitcoin upgrade, Blockchain 
learnMoreLink: /courses/blockchain-101/
learnMoreText: Blockchain 101 course
learnMoreImage: BC101-01.jpg
weight: 5
sticky: true
readtime: 3m
---
<p>As we teach in our <a href='/courses/crypto-curious-course/'>Crypto Curious Course</a>, the Bitcoin blockchain has no central administrators making decisions or changes to the Bitcoin software protocol. This, however, doesn't mean that no changes can ever be made when it comes to establishing and changing Bitcoin's rules. Bitcoin is supposed to be for the people, by the people. So how is "by the people" achieved? A new protocol change that was recently adopted gives us a great opportunity to examine how the community proposes and implements these network adjustments. We'll also explore the details of the first Bitcoin protocol change in four years, an upgrade known as Taproot.</p>

<img src="/assets/img/BIP_1.jpg" alt="Bitcoin symbol" title="BIP 1.jpg">

<p>Before diving into these changes, let's go over a couple key steps that had to be followed in order for Taproot to simply be proposed to the community. All suggested protocol upgrades start out as a <b>Bitcoin Improvement Proposal</b>, or BIP for short. This is a key process that takes suggested upgrades to the community, making up for Bitcoin's lack of a central administrator. Since Bitcoin is open-source, it's helpful to view the network as an ever evolving program instead of something static that can never be changed.</p>

<p>Any person is able to author a BIP, with many of them originating in community discussion channels where the details can be ironed out. At this stage the proposal is considered to be a draft that can ultimately be turned into a BIP. The refinement process can take as long as several years, as the BIP will ultimately have to pass a vote officially adopting the BIP. Often this time is used to gather popular support for the BIP.</p>

{% include callouts/note.html
	bodyText="All Bitcoin Improvement Proposals are public and can be <a href=' https://github.com/bitcoin/bips'> viewed on github</a>"
%}

<p>This community review is also an important time for addressing any potential problems the BIP might bring. At this point two things can happen to the BIP. If there are legitimate objections raised, the BIP is often withdrawn and can be edited and resubmitted. If there happens to be a rough general consensus that the BIP is useful, it will go on to the next step. The exact details of this activation depends on the type of protocol change being proposed.</p>

<h2>Different Types of BIPs</h2>
<img src="/assets/img/BIP_2.jpg" alt="BIP" title="BIP 2.jpg">
<p>There are three main types of BIPs that each address a different aspect of the Bitcoin network. The first has to do with changes to the process of reaching consensus. The second are community standards that often deal with interoperability issues. The last type of BIP is a refinement to the development process.</p>

{% include callouts/callout.html
   title="What can a BIP change?"
	bodyText="<ul>
  <li>Consensus Process</li>
  <li>Community Standards</li>
  <li>Development Process</li>
 </ul>"
%}

<p>The key to the Bitcoin network is its ability to reach a decentralized consensus, and is one of the most important aspects of the network that must be preserved. Consensus changes can often be heavily debated, which has led to many of the BIPs allowing a type of backwards compatibility. This allows even the nodes who don't accept the BIP to continue operating under old consensus rules. This allows for a greater chance that the BIP will be accepted, as it is less than binding.</p>

{% include callouts/definition.html
	title="Nodes"
	bodyText="Computers that run a blockchain’s software and work to maintain it."
%}

<p>Community standards BIPs don't make any actual changes to the codebase. Instead, they help provide guidelines for projects that are utilizing or developing using the Bitcoin blockchain. These suggested standards act as a guide for developers and can also include the best practices for Bitcoin holders. Process BIPs are implemented to refine the development and BIP process. </p>

<p>Now that we know all about the BIP process, let's explore the latest Bitcoin network upgrade, Taproot.</p>
