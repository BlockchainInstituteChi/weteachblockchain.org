---
layout: lesson
course: ipfs
module: 3
title: Going Online
permalink: /courses/ipfs/3/going-online
---


<span>
<span class="openingParagraph">
Now that you have IPFS installed and your node has an address, you can take the node online and join the network. You may want to use a separate shell window for this.</span>

<code class="cli"> ipfs daemon 
Initializing daemon... 
API server listening on /ip4/127.0.0.1/tcp/5001 
Gateway server listening on /ip4/127.0.0.1/tcp/8080 </code>
You can also see other peers on the network:
<code class="cli"> ipfs swarm peers 
/ip4/104.131.131.82/tcp/4001/ipfs/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ 
/ip4/104.236.151.122/tcp/4001/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx 
/ip4/134.121.64.93/tcp/1035/ipfs/QmWHyrPWQnsz1wxHR219ooJDYTvxJPyZuDUPSDpdsAovN5 
/ip4/178.62.8.190/tcp/4002/ipfs/QmdXzZ25cyzSF99csCQmmPZ1NTbWTe8qtKFaZKpZQPdTFB</code>
</span>
