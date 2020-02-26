---
layout: lesson
course: hyperledger
module: 2
title: Deploying your First Network
permalink: /courses/hyperledger/2/deploying-your-first-network/
---
<h3>DOWNLOAD THE EXAMPLE FILES</h3>
<hr />

Starting from an appropriate directory,
<code class="cli">curl -sSL http://bit.ly/2ysbOFE | bash -s</code>
<code class="cli">ls</code>
<code class="cli">cd fabric-samples/</code>
<code class="cli">cd bin</code>
&nbsp;

<h3>DEPLOY THE EXAMPLE</h3>
<hr />

This folder contains some example launch scripts:

<code>BYFN.sh</code> - <strong>B</strong>uild <strong>Y</strong>our <strong>F</strong>irst <strong>N</strong>etwork

Let's try running it:
<code class="cli">cd first-network/</code>
<code class="cli">./byfn.sh -h</code>
<code class="cli">./byfn.sh generate</code>

Now that we have the network up and running, let's see what files were generated.

<div class="purpleNote">
  <b>NOTE:</b><i>If the dependency installs aren’t set properly then you’ll need to spin down the network, verify all dependencies, and then spin up the network again</i>
</div>

<code class="cli">ls channel-artifacts</code>
<code class="cli">ls crypto-config</code>

There are a few commands available from the network launch script.
<code class="cli">./byfn.sh up // Turns on the network</code>
<code class="cli">./byfn.sh down // Shuts down the network</code>
<code class="cli">./byfn.sh generate // Generates a new network</code>

Once the install is complete, you'll see a nice ascii art printout of the word END, which means everything worked!

&nbsp;
