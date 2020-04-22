---
layout: lesson
course: blockchain-security
module: 2
title: Cryptocurrency Wallets
permalink: /courses/blockchain-security/2/cryptocurrency-wallets/
---
<br>
<br>
<span class="openingParagraph">Cryptocurrency wallets is an essential concept to master for anyone interested in blockchains.</span>

Although the software we use to manage cryptocurrencies is called a "wallet", no actual value is held in the wallet itself. Instead, it is a management interface for interacting with your private keys and blockchain networks. Because balances are tracked by the blockchain itself, cryptocurrency wallets mainly automate the process of signing cryptographic messages and broadcasting them to peer nodes in the network.

{% include callouts/imageWithTextCallout.html 
    title="Hot Wallets"
    image="/courses/blockchain-security/Jaxx.png"
    bodyText="Hot wallets are wallets where the funds are instantly accessible and low value. Usually, these are used as mobile apps and run on a smart phone or website. Quick access comes at the cost of reduced security, so these wallets are meant to hold only the amount of cash you might carry in your pocket. The idea is that once funds reach a certain level, you might want to transfer them somewhere more secure, like a savings account."
%}

{% include callouts/imageWithTextCallout.html 
    title="Custodial Wallets"
    image="/courses/blockchain-security/6C6694DB-99B9-42E5-8F4D-FD3777FC39A9.png"
    bodyText="It is important to distinguish between self-hosted wallets and custodial wallets. They are called <em>custodial</em> because the wallets are held <em>in custody</em> by another entity. Consider, as an example, the difference between keeping gold bars in your home safe, or purchasing gold as a commodity on the stock market. In one case, you own the physical good, while in the other you trust an authority to hold it on your behalf. In this way, storing tokens in a custodial wallet is not seen as secure, since the institution is vulnerable as a central point of failure."
%}

{% include callouts/imageWithTextCallout.html 
    title="Cold Wallets"
    image="/courses/blockchain-security/205E6B2A-F563-4400-8F6C-8C833CA82007.png"
    bodyText="For funds which will not be immediately used, a higher security storage option might be more appropriate. These can also be offline backups of a hot wallet or may serve as a single piece of multi-signature access.<br> A key phrase is just a string of letters and numbers, so these can take the form of some words written down on a piece of paper. We will learn more about this in our next lesson, HD Wallets &amp; Seed Phrases. Other options for cold storage include steel wallets, using a secure thermal printer, or keeping a dedicated computer completely <a href='https://en.wikipedia.org/wiki/Air_gap_%28networking%29'>air gapped</a>."
%}

{% include callouts/imageWithTextCallout.html 
    title="Hardware Wallets"
    image="/courses/blockchain-security/9E1D71A1-A3CD-425E-8AD7-D24B51340AE5.png"
    bodyText="Hardware wallets offer some of the best balance of ease-of-use and security at the cost of... well, price! Buying a dedicated device will always be more costly than using paper and pen, but the added convenience and security is worth it. A variety of devices are available from several vendors at multiple price points. The Ledger Nano S is one of the most popular devices in large part due to its wide token support, and currently sells for just under $50 USD."
%}
