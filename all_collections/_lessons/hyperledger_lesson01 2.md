---
layout: lesson
course: hyperledger
module: 1
title: Background
permalink: /courses/hyperledger/1/hyperledger-background/
---
<br>
<br>
<span class="openingParagraph">BACK TO THE BEGINNING</span>
Blockchain (or Distributed Ledger) technology as we know it provides a unique system of trust within a network. The ledger tracks the events or data generated within a system and is distributed amongst a network of peers to ensure that none of them can tamper with the information once it is saved.

<style>
    .imageWithTextCallout section {
        margin: 0;
        max-height: 4rem;
    }
    .imageWithTextCallout .col-md-3 {
        margin-bottom: unset;
        padding-left: 0;
        padding-right: 0;
    }
    .imageWithTextCallout img {
        min-width: 100% !important;
        position: relative;
        left: 0;
    }
    .imageWithTextCallout h4 {
        margin-top: 0;
    }
    section.downPinkStripesDivider {
        background-position-y: bottom;
        max-height: 2rem;
        margin-bottom: 1.5rem;
    }
</style>
{% include callouts/imageWithTextCallout.html
    title="Hyperledger 2020 Panel"
    image="Hyperledger-blockchain-tech-for-business-534x300.jpeg"
    bodyText="If you're interested in learning about Hyperledger, our 2020 Community Kickoff Panel covers a lot of the basics. <a href='https://weteachblockchain.org/events/hyperledger_2020_kickoff' target='_blank'>Click here to watch the full video</a>."
%}

While public blockchain technology originally emerged as a solution to provide distributed trust within the Bitcoin network, the technology has progressed a long way since 2008. With the introduction of the Ethereum Virtual Machine, the concept of a blockchain system expanded to include not only the distributed ledger but also distributed software that could run on a peer network.
<iframe class="askAnExpert" src="https://www.youtube.com/embed/biHMZDmm8qc" width="1024" height="475" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>

<span class="imageCaption"><span class="mainImageTitle"><b>ASK AN EXPERT: WHAT'S THE DIFFERENCE BETWEEN PUBLIC AND PRIVATE BLOCKCHAINS?</b></span><span> // Blockchain.WTF</span>

<h3>LIMITATIONS OF PUBLIC BLOCKCHAINS</h3>

Despite the rapid adoption of public distributed ledger systems, there are some drawbacks to this design pattern. In particular, a public blockchain requires that the data and any software that uses it operate in a state of relatively complete transparency. In addition, a public blockchain ecosystem such as Ethereum relies on a delicate balance of economic forces to ensure its survival. This means that a business seeking to run its operations on a public ledger would not only need to devise a complex architecture to ensure adequate privacy but also that they might fall subject to increases in costs if market conditions shift.

{% include callouts/note.html
    bodyText="While any blockchain, like bitcoin or ethereum, can be run in a private network, these are not built to function as private blockchains. Hyperledger was designed from the ground up to work in a private context, and has capabilities that could never work in public blockchains."
%}

<h3>PRIVATE BLOCKCHAINS</h3>

In the Bitcoin context, it's required that the blockchain act as a core system of trust. While this is still partially true in the private context, it's possible that in many situations the parties involved are already existing partners. In these cases, it may be better to think of the blockchain as a database with very strict controls that limit who can edit which information, and how different users can act within the system.

<img src="/assets/img/courses/private-blockchains/PrivateBC-01.jpg" />

Many IT systems, especially in privacy or high-risk situations such as healthcare or banking, have already implemented very complex database systems with strict access controls. In these cases, a Hyperledger or other private blockchain solution offers an efficient design pattern to provide system designers and stakeholders with reduced risk and robust privacy integration.

<hr />

In this course, we'll explore how the Hyperledger technology stack can be employed to launch a private blockchain for use by a set of trusted peers, and how this can increase efficiency relative to traditional database systems.
