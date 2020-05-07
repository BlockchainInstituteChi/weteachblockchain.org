---
layout: lesson
course: hyperledger
module: 3
title: Launch the Sample App
permalink: /courses/hyperledger/3/launch-sample-app
---

{% include callouts/note.html
    bodyText="If you haven’t gone through the environment setup steps, please visit the <a href='https://staging.weteachblockchain.org/courses/hyperledger/2/setting-up-your-developer-environment/'>previous section</a>."
%}

Because Hyperledger networks require multiple nodes operating with different roles, we'll need to simulate not just a single node, but a whole network. In this case, we'll use the docker containers provided by the Hyperledger consortium to set up a testing network. Docker allows us to run several virtual machines, each with a chosen purpose, and will help to simulate a wider network.

<h3>INSTALLATION PROCEDURE</h3>


Before we start, you'll want to make sure the first network example is down. Be sure to run this command from the first-network directory.

{% include callouts/terminal.html
    title="shut down the network and clear docker"
    user="alex@ubuntu"
    directory="~/fabric-samples/"
    bodyText="./byfn.sh down // shut down the network,cd ../fabcar/ // Switch to the example directory,docker rm -f $(docker ps -aq // clean up docker files,docker network prune,docker rmi dev-peer0.org1.example.com-fabcar-1.0-5c906e402ed29f20260ae42283216aa75549c571e2e380f3615826365d8269ba"
%}   

This quickly clears the old image and prunes the network. This step is important when testing multiple docker apps to avoid any overlap or interference. (<a href="https://docs.docker.com/engine/reference/commandline/rmi/">More on this here.</a>)

Now that we have everything set up on the Hyperledger end, we can install our node.js client. 

{% include callouts/terminal.html
    title="Install the Node Modules"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="npm install"
%}     

Now that everything is cleaned up, we're ready to start experimenting!
