---
layout: lesson
course: hyperledger
module: 2
title: Setting up your Developer Environment
permalink: /courses/hyperledger/2/setting-up-your-developer-environment/
---
<span class="openingParagraph">
As you might expect, there are a myriad of ways to setup up a local development environment and configurations can vary widely. We'll help you get started with some basics and hopefully save you some headaches. To start, open up a shell and let's get on with the good stuff! For each dependency listed below, run the command shown to verify that it's installed correctly. If it is not installed, you will need to install binaries from either a package manager or directly.</span>

{% include callouts/note.html
	bodyText="These installation instructions are specifically for Mac OS X. Ubuntu installation instructions will be the same, but Homebrew will not be required."
%}

<h3>Dependencies</h3>
Before we get started, use the following commands to verify that you have the correct software installed. If it fails, click the link in each description for full installation details. 

<h4>Homebrew</h4>
If you're using a Mac, check your homebrew version with the following command. ( <a href="https://brew.sh/">Install Homebrew Here </a>)

{% include callouts/terminal.html
	title="Check that homebrew is installed"
	user="alex@ubuntu"
	directory="~/"
	bodyText="brew -v"
%}     

<h4>Curl</h4>
We'll need curl to download some example files. ( 
<a href="https://curl.haxx.se/download.html"> Install Here </a>)

{% include callouts/terminal.html
	title="Check that homebrew is installed"
	user="alex@ubuntu"
	directory="~/"
	bodyText="curl --version"
%}     

<h4>Docker</h4>
For this course we'll need you to have docker and docker-compose. (<a href="https://www.docker.com/"> Install Here </a>)
{% include callouts/terminal.html
	title="Check that homebrew is installed"
	user="alex@ubuntu"
	directory="~/"
	bodyText="docker --version, docker-compose ---version"
%}     

<h4>Go</h4>
Go is a scripting language which can be used to write Hyperledger chaincode. ( <a href="https://golang.org/doc/install">Install Here </a>)

{% include callouts/terminal.html
	title="Check that homebrew is installed"
	user="alex@ubuntu"
	directory="~/"
	bodyText="go version"
%}   
