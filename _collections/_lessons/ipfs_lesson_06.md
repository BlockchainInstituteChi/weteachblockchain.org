---
layout: lesson
course: ipfs
module: 2
title: Uploading and Sharing Files
permalink: /courses/ipfs/2/uploading-and-sharing-files
---
<br>
<br>
<span class="openingParagraph">
The IPFS web portal makes uploading and sharing files using IPFS easy. As a demonstration, we'll store this photo of Alex's dog on IPFS and share it with ourselves. </span>

Here's the image:

<img src="/assets/img/courses/ipfs/Dog.jpg" />

<h3>UPLOADING</h3>

<hr />

You can now click and drag files onto the drop box on the right to upload them to your node. Once uploaded, you'll see them added to the list as shown below.

<img src="/assets/img/courses/ipfs/FilesUpload.jpg" />

<h3>SHARING</h3>
<hr />

You can also send a link to this page to allow others to easily download the same file. Just click the 'Link' button on the right once your upload is complete. The IPFS address of this file is:<code>QmT6s9dZXRFbxGhvSW68BdZEFF9mHaTW6erH3TNMrRGZfX</code> so if you'd like to download it through the web interface, you could do so at <em><a href="https://try-ipfs.theblockchaininstitute.org/?q=QmT6s9dZXRFbxGhvSW68BdZEFF9mHaTW6erH3TNMrRGZfX">https://try-ipfs.theblockchaininstitute.org/?q=QmT6s9dZXRFbxGhvSW68BdZEFF9mHaTW6erH3TNMrRGZfX</a></em>.

As we'll explore more in the following section, IPFS addresses are file-specific, not owner specific. The address is actually a unique key for the file that you uploaded. It's derived by taking the hash of the file, which means that it can also act as a checksum. If anyone tries to send you another file in its place, your node will reject the imposter when it's hash does not match that which was requested.
