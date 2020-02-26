---
layout: lesson
course: hyperledger
module: 3
title: Launch the Sample App
permalink: /courses/hyperledger/3/launch-sample-app
---

<div class="purpleNote"><b>NOTE:</b><i> If you haven’t gone through the environment setup steps, please visit the <a href="https://theblockchaininstitute.org/courses/hyperledger-101/lessons/setting-up-your-developer-environment/">previous section</a>.</i></div>
&nbsp;

Because Hyperledger networks require multiple nodes operating with different roles, we'll need to simulate not just a single node, but a whole network. In this case, we'll use the docker containers provided by the Hyperledger consortium to set up a testing network. Docker allows us to run several virtual machines, each with a chosen purpose, and will help to simulate a wider network.

&nbsp;
<h3><b>INSTALLATION PROCEDURE</b></h3>

<hr />

<span style="font-weight: 400;">Before we start, you'll want to make sure the first network example is down. Be sure to run this command from the first-network directory.</span>
<code class="cli">./byfn.sh down</code>
<span style="font-weight: 400;">Switch to the example directory:</span>
<code class="cli">cd ../fabcar/ </code>
<span style="font-weight: 400;">Let's clean up with docker quickly:</span>
<span style="font-weight: 400;"><code class="cli">docker rm -f $(docker ps -aq)</code>
<code class="cli">docker network prune</code>
<code class="cli">docker rmi dev-peer0.org1.example.com-fabcar-1.0-5c906e402ed29f20260ae42283216aa75549c571e2e380f3615826365d8269ba</code></span>

This quickly clears the old image and prunes the network. This step is important when testing multiple docker apps to avoid any overlap or interference. (<a href="https://docs.docker.com/engine/reference/commandline/rmi/">More on this here.</a>)

Now that we have everything set up on the Hyperledger end, we can install our node.js client:
<code class="cli">npm install</code>
