---
layout: lesson
course: bitcoin-for-developers
module: 3
title: Bitcoin Nodes
permalink: /courses/bitcoin-for-developers/3/bitcoin-nodes
---
<br>
<br>
<span class="openingParagraph">Now that we’ve covered the history behind Bitcoin and have a theoretical understanding of how blockchains function, let’s see it in action.</span>

Thus far when we have said “node” we meant “full node”. As mentioned, full nodes keeps a complete copy of the Bitcoin blockchain and participates in network consensus by checking and forwarding valid transactions. They download every block and transaction and check them against Bitcoin’s consensus rules.

<h3>THINGS A "FULL NODE" DOES</h3>

<hr />

<ul>
 	<li>Keep a complete copy of the blockchain</li>
 	<li>Maintain connections to peers</li>
 	<li>Validate incoming data (transactions and blocks)</li>
 	<li>Distribute valid data</li>
</ul>
In these ways, a full node contributes to network “consensus”.

{% include callouts/note.html title="SPV nodes reminder:" bodyText='Lightweight or thin clients are nodes that use Simplified Payment Verification. SPV is a method for verifying that particular transactions were included in a block without downloading the entire blockchain. This allows you to run software that interacts with the bitcoin network on low resource machines, such as running a wallet on a smartphone. However, using SPV instead of full nodes means the loss of some privacy and security.' %}

Before we can set up a node there are two more things to consider. Do we want to run on mainnet, testnet or regtest? And which Bitcoin implementation do we want to use?
{% include callouts/definition.html
	title="Mainnet"
	bodyText="<b>Mainnet</b> is the live Bitcoin network. To fully participate in the Bitcoin ecosystem you’ll want to be running a mainnet node. However, when starting out and testing new applications mainnet is likely not the best option as it comes with the risk of losing coins which have real value. To run a mainnet full node you will need to download the entire ~200GB blockchain."
%}

{% include callouts/definition.html
	title="Testnet"
	bodyText="<b>Testnet</b> is a public bitcoin network that is used by developers around the world to test Bitcoin applications. You can find and use Bitcoin testnet coins and exchange them with others on the testnet. These coins very intentionally have no exchange value; they are used simply for testing. To run a testnet node you will need to download the testnet blockchain which is significantly smaller than mainnet at only ~20GB."
%}

{% include callouts/definition.html
	title="Regtest"
	bodyText="<b>Regtest</b> allows you to set up your own local blockchain. When you start a node in regtest mode there is no blockchain data to download. You need to create all the blockchain data yourself!"
%}

Once you know what network you want to run on, you’ll need to choose a client or implementation. <a href="https://github.com/bitcoin/bitcoin" target="_blank" rel="noopener noreferrer">Bitcoin core</a> (formerly Bitcoin-Qt), is the reference implementation and is still the most commonly used bitcoin implementation. It is written in C++. However, there are now a number of other options such as<a href="https://github.com/bitpay/bitcore/" target="_blank" rel="noopener noreferrer"> Bitcore</a> witch is written in Node.js or<a href="https://github.com/btcsuite/btcd" target="_blank" rel="noopener noreferrer"> btcd</a> which is written in GoLang.

Here we will walk through instructions for both Bitcoin’s testnet and running in regtest mode using the reference implementation Bitcoin Core, or more specifically the bitcoind daemon.

{% include callouts/note.html
	bodyText='The below instructions are for Ubuntu machines. Mac OS and Windows instructions can be found <a href="https://bitcoin.org/en/full-node"> here</a>.'
%}

<h3>UBUNTU INSTRUCTIONS</h3>

<hr />

{% include callouts/terminal.html
	title="Install the Bitcoin Daemon"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="apt-add-repository ppa:bitcoin/bitcoin, apt-get update, apt-get install bitcoind"
%}     

<h3>BITCOIND RESOURCES</h3>

<hr />

<ul>
 	<li><a href="https://jlopp.github.io/bitcoin-core-config-generator/" target="_blank" rel="noopener noreferrer">Configuration generator</a></li>
 	<li><a href="https://en.bitcoin.it/wiki/Running_Bitcoin" target="_blank" rel="noopener noreferrer">Bitcoind commands</a></li>
 	<li><a href="https://coin.dance/nodes" target="_blank" rel="noopener noreferrer">Network statistics</a></li>
</ul>
Once you have the software installed, we’ll need to configure it.
<h3>TESTNET INSTRUCTIONS</h3>

<hr />

{% include callouts/terminal.html
	title="Install the Bitcoin Daemon"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="apt-add-repository ppa:bitcoin/bitcoin, apt-get update, apt-get install bitcoind"
%}     


{% include callouts/terminal.html
	title="Start bitcoind"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="bitcoind -testnet -printtoconsole -daemon -server"
%}     

{% include callouts/terminal.html
	title="View the debug log in a separate console window"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="tail -f .bitcoin/testnet/debug.log"
%}     

{% include callouts/terminal.html
	title="Create a config file in .bitcoin"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="touch bitcoin.conf"
%}     

<h3>THE BITCOIN.CONF FILE</h3>

<hr />

{% include callouts/codeSnippet.html
	title="Bitcoin.conf Configured for RPC"
	bodyText='# Set up RPC, server=1, rpcuser=test, rpcpassword=test, rpchost=127.0.0.1, rpcport=6163, # Run on the testnet, testnet=1, # Specify a directory for testnet data, #datadir=/home/bitcoin/.bitcoin/testnet'
%}

<h3>REGTEST MODE INSTRUCTIONS</h3>

<hr />

{% include callouts/note.html
	bodyText='Learn more about <a href="https://bitcoin.org/en/developer-examples#regtest-mode" target="_blank" rel="noopener noreferrer"> regtest</a>.'
%}

{% include callouts/terminal.html
	title="Start bitcoind in regtest mode"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="bitcoind -regtest -printtoconsole -daemon -server"
%}     

{% include callouts/terminal.html
	title="View the debug log in a separate console window"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="tail -f .bitcoin/regtest/debug.log"
%}     

{% include callouts/terminal.html
	title="Create a config file in .bitcoin/regtest"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="touch bitcoin.conf"
%}     

<h3>THE BITCOIN.CONF FILE</h3>
<hr />

{% include callouts/codeSnippet.html
	title="Bitcoin.conf Configured for RPC"
	bodyText="# Set up RPC, server=1, rpcuser=test, rpcpassword=test, rpchost=127.0.0.1, rpcport=6163, # Run on a regtest network, regtest=1, # Connect only to the specified node, connect=[your local IP]"
%}

<h3>TRY OUT SOME COMMANDS</h3>

<hr />
{% include callouts/terminal.html
	title="Kill bitcoind and restart"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="pkill -9 -f bitcoind, bitcoind [-regtest or -testnet] -printtoconsole -daemon -server"
%}     

{% include callouts/terminal.html
	title="Use bitcoin-cli to view your connection to peers"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="bitcoin-cli [-regtest or -testnet] -getinfo"
%}     

{% include callouts/terminal.html
	title="Generate a new address to receive coins"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="bitcoin-cli [-regtest or -testnet] getnewaddress"
%}     

{% include callouts/terminal.html
	title="Check your balance"
	user="hannah@ubuntu"
	directory="~/"
	bodyText="bitcoin-cli [-regtest or -testnet] getbalance"
%}     

Now that we’ve had a chance to experience bitcoin on the command line, let’s take a step back in our next lesson and be sure we understand in more depth what a bitcoin is.
