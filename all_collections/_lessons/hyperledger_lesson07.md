---
layout: lesson
course: hyperledger
module: 2
title: Deploying your First Network
permalink: /courses/hyperledger/2/deploying-your-first-network/
---
<h3>DOWNLOAD THE EXAMPLE FILES</h3>
<hr />

Starting from an appropriate directory, download the sample files and enter the /bin/ subfolder.
{% include callouts/terminal.html
  title="Download the Sample Project"
  user="alex@ubuntu"
  directory="~/dev/"
  bodyText="curl -sSL http://bit.ly/2ysbOFE | bash -s, ls, cd fabric-samples/, cd bin"
%}      

<h3>DEPLOY THE EXAMPLE</h3>
<hr />

This folder contains some example launch scripts to help you set up a hyperledger network. The scripts will automatically launch several docker containers, which will simulate a network with multiple independant nodes.

{% include callouts/callout.html
    title="BYFN.sh"
    bodyText="<br><strong>B</strong>uild <br><strong>Y</strong>our <br><strong>F</strong>irst <br><strong>N</strong>etwork"
%}

Let's try running the starter script, and we can explore how it generates the network.

{% include callouts/terminal.html
  title="Start the Sample Network"
  user="alex@ubuntu"
  directory="~/dev/fabric-samples/"
  bodyText="cd first-network/,./byfn.sh -h,./byfn.sh generate"
%}      

Now that we have the network up and running, let's see what files were generated.

{% include callouts/note.html
    bodyText="If the dependency installs aren’t set properly then you’ll need to spin down the network, verify all dependencies, and then spin up the network again"
%}

{% include callouts/terminal.html
  title="Finding the "
  user="alex@ubuntu"
  directory="~/dev/fabric-samples/"
  bodyText="ls channel-artifacts, ls crypto-config"
%} 

There are a few commands available from the network launch script.

{% include callouts/terminal.html
  title="Managing the network"
  user="alex@ubuntu"
  directory="~/dev/fabric-samples/"
  bodyText="./byfn.sh up // Turns on the network,./byfn.sh down // Shuts down the network,./byfn.sh generate // Generates a new network"
%} 


Once the install is complete, you'll see a nice ascii art printout of the word END, which means everything worked!
