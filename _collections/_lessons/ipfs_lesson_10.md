---
layout: lesson
course: ipfs
module: 3
title: Going Online
permalink: /courses/ipfs/3/going-online
---
<br>
<br>
<span class="openingParagraph">
Now that you have IPFS installed and your node has an address, you can take the node online and join the network. You may want to use a separate shell window for this.</span>

Since IPFS is a novel protocol, we'll need to launch their helper daemon to provide a network service.

{% include callouts/terminal.html
    title="launch the gateway daemon"
    user="alex@ubuntu"
    directory="~/"
    bodyText=" ipfs daemon <br>Initializing daemon... API server listening on /ip4/127.0.0.1/tcp/5001<br>Gateway server listening on /ip4/127.0.0.1/tcp/8080"
%}        

Once you're online, you'll be able to see linked peers. These peers are now acting as your web host, and we will try to download them in the next section. 

{% include callouts/terminal.html
    title="Check for peers"
    user="alex@ubuntu"
    directory="~/"
    bodyText="ipfs swarm peers <br>/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ <br>/ip4/104.236.151.122/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx <br>/ip4/134.121.64.93/tcp/1035/ipfs/QmWHyrPWQnsz1wxHR219ooJDYTvxJPyZuDUPSDpdsAovN5 <br>/ip4/178.62.8.190/tcp/4002/ipfs/QmdXzZ25cyzSF99csCQmmPZ1NTbWTe8qtKFaZKpZQPdTFB"
%}  
