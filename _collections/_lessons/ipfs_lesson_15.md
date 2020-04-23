---
layout: lesson
course: ipfs
module: 4
title: Tokens Using IPFS
permalink: /courses/ipfs/4/tokens-using-ipfs
---
Currently, the only token using IPFS is <a href="https://filecoin.io/">Filecoin</a>, which promotes a unique <a href="https://filecoin.io/proof-of-replication.pdf">Proof of Spacetime and Replication algorithm</a>. While Filecoin is still in development, it has the potential to lead a revolution in the way that we share value and exchange information online. The graphic below depicts how a token can be used as an incentive mechanism in a storage network.

{% include callouts/imageWithCaption.html
    image="/courses/ipfs/LifeCycle-01.png"
    title="FILECOIN: LIFECYCLE OF A FILE"
    bodyText="<b>A:</b> <i>Client;</i>  <b>B:</b> <i>Miner;</i>  <b>C:</b> <i>The Filecoin Blockchainz;</i>  <b>D:</b> <i>Bids and asks are matched on the Storage Market, and secured on the blockchain;</i>  <b>E:</b> <i>Proof of Replication;</i>  <b>F:</b> <i>Proof of Replication &amp; Allocation Table Hash;</i>  <b>G:</b> <i>The Retrieval Market continuously optimize for maximum delivery speed and minimal bandwidth usage across distance, around power outage, overloaded servers, and hostile censorship.</i>"
%}

{% include callouts/callout.html
    title="The Lifecycle"
    bodyText="<br><b>1:</b> <i><b>PUT:</b> Clients <b>(a)</b> send information about the file, storage duration, and a small amount of filecoin to the Storage Market as a bid. Simultaneously, Miners <b>(b)</b> submit asks, competing to offer low cost storage. Deals are made in the Storage Market, on the blockchain.;</i><br><b>2:</b> <i><b>SEND:</b> The Client <b>(a)</b> then sends the file to the Miner <b>(b)</b>, and the Miner adds the file to a sector. The sectors are cryptographically sealed, with verification sent to the blockchain.;</i><br><b>3:</b> <i><b>MANAGE:</b> Miners <b>(b)</b> continuously prove they are storing all sectors they agreed to store. The client’s payment is released in installments. Additional currency is minted over time and awarded to Miners <b>(b)</b> as a block reward, proportional to the storage they provide.;</i><br><b>4:</b> <i><b>GET:</b> A Client <b>(a)</b> requests a file with some payment in filecoin to the Retrieval Market (off chain); the first Miner <b>(b)</b> to send the file is paid. Eventually, the contract expires and the storage is once again free."
%}

