---
layout: lesson
course: blockchain-security
module: 1
title: Independence Is Essential
permalink: /courses/blockchain-security/1/independence-is-essential/

---
<!-- <iframe width="1280" height="720" src="https://www.youtube.com/embed/VqgISgbnxtg?list=PLVmd1I9lPns9tKLMAYdnUx3oiegbIg7sJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<span class="openingParagraph">A blockchain is a way of structuring a collection of digital signatures.</span>

Keeping your keys secure is the first step to using decentralized systems safely. While similar, organizations and individuals have slightly different needs when it comes to security. We'll cover the tools that can be used later on in this series.

<h3>Personal Key Management</h3>
If you own any cryptocurrencies, you may benefit from careful planning. It's easier than it sounds!

With disintermediation comes reduced support and increased risk of personal compromise. In public blockchains such as Bitcoin or Ethereum, there is no backup plan or password reset. If you drop your wallet on the sidewalk, you lose your money. Similarly, if you don't look after your private keys, it could result in being <strong>irrevocably locked out</strong>.

{% include callouts/note.html
	bodyText="Your digital signature controls your stake in a blockchain. <br> <br><b>If someone is able to access your Private Key, they can sign your assets over to themselves!</b>"
%}

<img src="/assets/img/courses/blockchain-security/LaptopX.jpg" alt="Laptop with an X" title="Locked Out"/>

<h3>Businesses and Key Management</h3>
Especially in public blockchains, proper key management is incredibly important. If your project is running on a public blockchain, a compromised key could mean having your funds hijacked, or smart contracts compromised. Currently, there is little in the way of "undo" functionality for these types of scenarios. In private blockchains, an ecosystem where there may be a greater degree of control, it's still very important to ensure that information can still be securely added and stored on the chain. In the same way that it's important for users to secure their passwords for personal accounts, they should ensure that their keys are stored securely and backed up to minimize risks of being lost or inaccessible.


{% include callouts/callout.html
    title="It's turtles all the way down"
	bodyText="The entire purpose of blockchains is to store signatures that verify information, so without properly storing your keys, your blockchain empire may come crumbling down. "
%}

In the case of decentralized applications, this means that there is always a risk that your organization could lose control of a smart contract or other assets if the keys are lost, and there is no recourse. As a result, it is always recommended to consult with technical experts prior to engaging in any on-chain business or when dealing with large amounts of cryptocurrency. They can help ensure that proper recovery techniques are in place including multi-signature shared control.
