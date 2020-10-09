---
layout: lesson
course: blockchain-security
module: 2
title: Cryptocurrency Wallets
permalink: /courses/blockchain-security/2/cryptocurrency-wallets/
---
<iframe width="1280" height="720" src="https://www.youtube.com/embed/3aH-HT3rbY0?list=PLVmd1I9lPns9tKLMAYdnUx3oiegbIg7sJ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<span class="openingParagraph">It's important to have the right tool for the job.</span>

Although the software we use to manage cryptocurrencies is called a "wallet", no actual value is held in the wallet itself. Instead, it is a management interface for interacting with your private keys and blockchain networks. Modern cryptocurrency wallets are more like a chequebook, which doesn't hold any actual assets directly, but can sign them to another person. Because balances are tracked by the blockchain itself, cryptocurrency wallets mainly automate the process of signing cryptographic messages and broadcasting them to peer nodes in the network.

{% include callouts/callout.html
    title="What's in a wallet?"
    bodyText="A wallet doesn't directly contain assets, but instead is a software tool used to manage your Private Keys. Modern wallets also calculate account balances and provide one-click transaction processing, which is otherwise a fairly complicated process."
%}

{% include callouts/imageWithTextCallout.html 
    title="Hot Wallets"
    image="/courses/blockchain-security/Jaxx.png"
    bodyText="Hot wallets store funds for immediate use, and are thereby less secure. Usually, these are used as mobile apps and run on a smart phone or website. Quick access comes at the cost of reduced security, so these wallets are meant to hold only the amount of cash you might carry in your pocket. The idea is that once funds reach a certain level, you might want to transfer them somewhere more secure, like a hardware or cold storage wallet.<br><br>With hot wallets, the keys are stored in the wallet software, which makes them easy to use, but prone to compromise."
%}

{% include callouts/imageWithTextCallout.html 
    title="Custodial Wallets"
    image="/courses/blockchain-security/6C6694DB-99B9-42E5-8F4D-FD3777FC39A9.png"
    bodyText="It is important to distinguish between self-hosted wallets and custodial wallets. They are called <em>custodial</em> because the wallets are held <em>in custody</em> by another entity. Consider, as an example, the difference between keeping gold bars in your home safe, or purchasing gold as a commodity on the stock market. In one case, you own the physical good, while in the other you trust an authority to hold it on your behalf. In this way, storing tokens in a custodial wallet is not seen as secure, since the institution is vulnerable as a central point of failure.<br><br>With custodial wallets, such as <a href='https://coinbase.com/'>coinbase.com</a>, your keys are stored by a third party. While this can be a good solution for first-time buyers, it is recommended to move funds to cold storage for long term safety."
%}

{% include callouts/imageWithTextCallout.html 
    title="Cold Wallets"
    image="/courses/blockchain-security/205E6B2A-F563-4400-8F6C-8C833CA82007.png"
    bodyText="For funds which will not be immediately used, a higher security storage option might be more appropriate. These can also be offline backups of a hot wallet or may serve as a single piece of multi-signature access.<br> A key phrase is just a string of letters and numbers, so these can take the form of some words written down on a piece of paper. We will learn more about this in our next lesson, HD Wallets &amp; Seed Phrases. Other options for cold storage include steel wallets, using a secure thermal printer, or keeping a dedicated computer completely <a href='https://en.wikipedia.org/wiki/Air_gap_%28networking%29'>air gapped</a>.<br><br>If you're located near Chicago, please drop in at our office in Uptown, and we can help you set up a paper wallet of your own."
%}

{% include callouts/imageWithTextCallout.html 
    title="Hardware Wallets"
    image="/courses/blockchain-security/9E1D71A1-A3CD-425E-8AD7-D24B51340AE5.png"
    bodyText="Hardware wallets offer some of the best balance of ease-of-use and security, but are somewhat more expensive. Buying a dedicated device will always be more costly than using paper and pen, but the added convenience and security is worth it. The Ledger Nano S is one of the most popular devices in large part due to its wide token support, and currently sells for just under $50 USD.<br><br>The Blockchain Institute uses a <a href='https://trezor.io/'>Trezor Model T</a> to store our donations, which helps us ensure that they are used for the prescribed purposes."
%}

<h3>Choosing the Right Wallet</h3>
While it might seem like a lot of options, most users follow a similar path in their blockchain journey. Usually, the easiest way to purchase digital assets is through a custodial provider. Once you do, you'll want to export the funds to a hot wallet or a hardware wallet. For assets you plan to hold for a long time, consider setting up a cold storage wallet on paper or via a tool like <a href="https://cryptokeystack.com/">Crypto Key Stack</a> - their fireproof, waterproof wallet is likely to survive as long as you can need it.

