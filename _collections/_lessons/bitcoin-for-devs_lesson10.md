---
layout: lesson
course: bitcoin-for-developers
module: 3
title: What is a Bitcoin?
permalink: /courses/bitcoin-for-developers/3/what-is-a-bitcoin
---

<span>
<span class="openingParagraph">
We’ll dive into bitcoin wallets in the next few lessons, but, in order to understand what a wallet is doing, you need to understand what a bitcoin actually is.</span>
<div class="tealCallout">Have you read the Bitcoin whitepaper yet? If not you really should! Check it out here:<a href="https://bitcoin.org/bitcoin.pdf">https://bitcoin.org/bitcoin.pdf</a></div>
&nbsp;

From the bitcoin whitepaper, “We define an electronic coin as a chain of digital signatures.” Bitcoins are not really digital “coins”. They don’t have serial numbers or a set unit; they don’t "live" in a wallet. Bitcoin’s are just divisible and joinable ledger entries that "live" on the bitcoin blockchain.

Here we’ll introduce you to the concept of <b>UTXO</b>’s or <b>unspent transaction outputs</b>. Every transaction has inputs and outputs. To understand this let’s walk through an example.

When a bitcoin is first created, it is given to a miner as a <b>mining reward</b>. Currently, the mining reward for a block is <b>12.5</b> bitcoin or BTC. The transaction that gives the <b>miner</b> these funds is called a <b>coinbase transaction</b>. The 12.5 BTC is sent to the address that the miner has specified. That 12.5 BTC is now an <b>unspent transaction output</b> that can be used in another transaction.

<img class="aligncenter size-full wp-image-11574" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/AlicePaysBob-01.png" alt="" width="2816" height="909" />

Let’s imagine that our miner, Alice, now wants to pay for some server space using BTC. She purchases 0.05 worth of hosting from Bob. In that transaction, she uses the only UTXO that she has which is worth 12.5 BTC.

The transaction breaks up the input worth 12.5 BTC, sending 0.05 to Bob, and 12.449 going back to Alice with the remainder of 0.001 being offered as a transaction fee for the miner who mines the block the transaction is in.
<div class="blueTitleNote"><b>BITCOIN TRANSACTION FEES</b>
Transaction fees on the bitcoin network are not specified but implied in the remainder of any UTXO that is not sent back to the sender as change. Also, fees are generally not calculated base on the value of the transaction but instead based on the size of the transaction data.</div>
&nbsp;

After the transaction is mined, Alice now has a UTXO worth 12.449 and Bob has a UTXO worth 0.05.

<img class="aligncenter wp-image-3153 size-full" src="https://theblockchaininstitute.org/wp-content/uploads/2019/02/Hannah5b-03-s.png" alt="" width="1000" height="580" />

We’ll cover bitcoin transactions in some detail in Part II. The important takeaway for the moment is that bitcoin’s are UTXO’s, which are ledger entries, that live on the bitcoin blockchain. Holding bitcoins means holding, managing and securing the private keys that control those UTXO’s that live on the shared network ledger.
