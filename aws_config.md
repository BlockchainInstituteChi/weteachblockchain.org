# What is this?
This doc covers the AWS setup required for redirects to this repo.

The following domain names are being forwarded to this site via AWS:
 - blockchain.wtf
 - www.blockchain.wtf
 - theblockchaininstitute.org
 - www.theblockchaininstitute.org
 
# General Structure
In order to properly wrap the SSL certificates on traffic from these sites, and prevent certificate errors during the redirect, each site is pointed at a CloudFront instance, which then adds the SSL, and redirects the traffic to the heroku instance, which handles any redirects, and then the user reaches weteachblockchain.org.

1. A record is pointed to CloudFront
2. CloudFront adds an SSL Cert and forwards to an S3 bucket with the same name as the domain
3. The S3 bucket redirects the traffic to the heroku node
4. The heroku node applies any redirects and then forwards the traffic to the weteachblockchain.org domain
 
# Heroku Redirect Server
The heroku server handles any path redirects from the old site. For the full details, check this repo: https://github.com/BlockchainInstituteChi/redirectServer
 
# CloudFront Configuration
The CloudFront instances are configured to use the S3 bucket as the 'origin', and must be configured with the apex domain as well as the "www" subdomain for proper forwarding behaviour.

# S3 Bucket
- Under the 'properties' tab in S3, it's possible to set up 'static web hosting'. Be sure to set it to forward to the heroku instance. 
- The S3 bucket must be named to match the apex domain exactly
- The 'protocol' field on the static web hosting settings panel must be left empty

# DNS
For proper results, the apex domain should point directly to CloudFront, and the www. subdomain should point to the apex domain.

