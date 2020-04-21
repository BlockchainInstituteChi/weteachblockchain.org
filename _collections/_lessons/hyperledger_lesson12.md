---
layout: lesson
course: hyperledger
module: 3
title: Creating Records
permalink: /courses/hyperledger/3/creating-a-record
---
<br>
<br>
<span class="openingParagraph">
A car dealership isn't much without being able to track cars. In order to add new cars to the database, we'll need to use invoke.js with a slightly different payload. If we wanted to add a new Purple Tata Nano owned by someone named Alex, we would need to update the invoke call slightly.</span>

{% include callouts/callout.html
    title="Update Invoke.js "
    bodyText="<script src='https://gist.github.com/alexander-morris/48f85e11ae5dfdcaa4895f4ae7e97845.js'></script>"
%}

The rest of the script can remain unchanged since it's just going to pass this payload to the server. One thing to keep in mind here is that in this case, we're passing the ID "CAR10", which we wouldn't have without first querying the database to see what the last car in the list was numbered.

{% include callouts/terminal.html
    title="Run the command"
    user="alex@ubuntu"
    directory="~/fabric-samples/fabcar/"
    bodyText="node invoke.js // push a record, node query.js // verify after creation"
%}         
