---
layout: lesson
course: decentralized-storage
module: 2
title: Limitations
permalink: /courses/decentralized-storage/2/limitations/
---
<br>
<br>
<span class="openingParagraph">Decentralized Systems Are Complicated</span>
While Decentralized Storage is very appealing for many applications, it's important to understand that like any system, it can only be extended so far.

{% include callouts/note.html 
    bodyText="While IPFS is currently operational, and we will try it in the next lessons, it is important to note that this is far from production-grade technology. At best, Filecoin expects to be up and running by 2021, but it may take some time to develop the necessary incentive structures."
%}

<h1>What's holding it back?</h1>
The main limitation of a decentralized storage network is of the incentive structure and network growth needed to maintain it. Aside from this, however, there are some restricting design concerns which should be addressed by anyone desiring to build on this technology.

<h3>PUBLIC DATA</h3>
Once a piece of information is uploaded to a public storage network, there's no way to know who may have stored a copy and whether they still hold this copy. Unfortunately, even if the file is encrypted, it could be stored indefinitely, and the encryption technology used could eventually be broken. 

<h3>INCENTIVISATION</h3>
In a peer-to-peer network, files are only stored if payment is provided. As a result, services can be interrupted if payments are not made as expected. In some of the proposed decentralized storage networks, payment is made when a file is served, which means that a dramatic increase in traffic could result in funds being depleted. By comparison, traditional networks such as Amazon Web Services usually operate on credit, so they will usually not interrupt services for weeks or even months after a dramatic increase in traffic.  

<h3>LEGAL ACCOUNTABILITY</h3>
Because decentralized storage networks are mostly anonymous, there is minimal legal recourse if things go wrong. For many traditional organizations, this can be a substantial bottleneck, since this means that lost revenue during a site crash or other similar scenarios cannot be recovered through litigation. 

In the next lesson, we'll explore how this and other qualities of decentralized storage can provide major advantages in the right applications.
