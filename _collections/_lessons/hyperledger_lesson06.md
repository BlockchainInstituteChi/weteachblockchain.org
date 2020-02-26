---
layout: lesson
course: hyperledger
module: 2
title: Setting up your Developer Environment
permalink: /courses/hyperledger/2/setting-up-your-developer-environment/
---
<span class="openingParagraph">
As you might expect, there are a myriad of ways to setup up a local development environment and configurations can vary widely. We'll help you get started with some basics and hopefully save you some headaches. To start, open up a shell and let's get on with the good stuff! For each dependency listed below, run the command shown to verify that it's installed correctly. If it is not installed, you will need to install binaries from either a package manager or directly.</span>
<div class="purpleNote"><b>NOTE:</b><i>These installation instructions are specifically for Mac OS X. Ubuntu installation instructions will be the same, but Homebrew will not be required.</i></div>
&nbsp;
<h3>Dependencies</h3>

<hr />

<ol>
 	<li>
<h4>Homebrew</h4>
If you're using a Mac, check your homebrew version with
<code class="cli">brew -v</code>
<a href="https://brew.sh/">( Install Here )</a></li>
 	<li>
<h4>Curl</h4>
We'll need curl to download some example files.
<code class="cli">curl --version</code>
<a href="https://curl.haxx.se/download.html">( Install Here )</a></li>
 	<li>
<h4>Docker</h4>
For this course we'll need you to have docker and docker-compose:
<code class="cli">docker --version</code>
<code class="cli">docker-compose ---version</code>

<a href="https://www.docker.com/">( Install Here )</a></li>
 	<li>
<h4>Go</h4>
Go is a scripting language which can be used to write Hyperledger chaincode.
<code class="cli">go version</code>

<a href="https://golang.org/doc/install">( Install Here )</a></li>
</ol>
