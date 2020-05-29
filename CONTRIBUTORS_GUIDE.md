<!-- CONTRIBUTORS_GUIDE.md -->

This guide provides the basic instructions to begin contributing to the site using local tools. We will cover how to download the repo using the Github Desktop client, how to use VSCode to run the site locally, and how to checkout a new Git branch and submit changes for review.

# Sections

1. [Getting Started](#getting-started)
   * [Install Github Desktop](#install-github-desktop)
   * [Install VSCode](#install-vscode)
   * [Install Ruby and Jekyll](#install-ruby-and-jekyll)
2. [Using Github Desktop](#using-github-desktop)
   * [Clone the Repo](#clone-the-repo)
   * [Checkout a Branch](#checkout-a-branch)
   * [Commit Changes](#commit-changes)
3. [Using VSCode](#using-vscode)
   * [Opening The Project](#opening-the-project)
   * [Running the Jekyll Server](#running-the-jekyll-server)

# Getting Started

## Install Github Desktop
Github's desktop application supports a range of features including cloning, editing, and pushing changes to Github repositories. Install it now as we will need it in subsequent steps.

[Click here to download and install Github Desktop](https://desktop.github.com/)

## Install VSCode
Visual Studio Code is a premier software editing tool which integrates quite well with Github. It also supports a number of features like an integrated terminal, which will make editing the website files much easier. 

[Click here to download VSCode. ](https://code.visualstudio.com/download) 

## Install Ruby and Jekyll 
Ruby is a software language that supports a range of CMS tools including Jekyll, which Github Pages will be using to serve our website. 

[Click here for instructions on downloading Jekyll and Ruby for your operating system](https://jekyllrb.com/docs/installation/)

# Using Github Desktop
The Weteachblockchain.org website runs on the Github Pages system, which means that all you need to do to make changes is commit a new branch to the Github repo. We'll step through this process in this section. 

## Clone the Repo
In order to start working with the repository locally, you'll first need to copy the files locally by using the clone feature. To get started, open the root of the repository in your web browser. 

[Click here to open the repository in your browser](https://github.com/blockchaininstitutechi/weteachblockchain.org)

[Then, follow these instructions to clone the repo](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

## Checkout a Branch
Github organizes code into branches within a repository. A branch is essentially a group of sequential changes. Once a branch has been approved, it can be merged back into the master branch of the repo, and your changes will be made live on the WeTeachBlockchain website!

[Follow these instructions to create a new branch with the Github Desktop Client](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work)

## Commit Changes
Now that you have your own branch, you can make changes to any of the files contained in it, and then commit the changes. Committing changes will add the newly edited files to your branch, which will allow you to push them to Github.

[Watch this tutorial for more information about how to commit changes using Github Pages](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#2-selecting-changes-to-include-in-a-commit)

## Push Your Branch
Once you have finished making changes, you will need to push your newly created branch from your local machine to the cloud hosted Github repository. 

[Follow this section of the tutorial to push changes to the remote repository](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)

## Submit a Pull Request
Once your changes are complete, and you have successfully pushed them to the cloud repository, then you can request that a member of the Blockchain Institute staff review them. In order to request a review, you can submit a Pull Request.

[More information on submitting pull requests here](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request#creating-a-new-pull-request)

# Using VSCode
VSCode is a very useful tool for working with software and provides lots of great features out of the box including github management and CLI access. 

## Opening The Project
Once you have downloaded the project files using Github, you can open the main folder in VSCode to begin working with the files. If you cloned the repository as weteachblockchain.org (default) then you should be able to simply right click the folder and select 'Open with VSCode'. If this is not available, open VSCode and select File > Open Folder from the top dropdown menus.
 
## Running the Jekyll Server
Assuming that you successfully opened the folder, and have installed Jekyll and Ruby properly, you may now run the server locally. This will start a local web server, and allow you to test changes before submitting a pull request.

Note: Not all users will need to test changes using a local server. If you are just making simple changes, or editing text or typos, this may not be necessary for you. 

### Open the Terminal
With VSCode open, type [Command]+[~] to open the terminal, or use the dropdown menus at the top of the screen (Terminal > New Terminal). This should open a command line terminal which will allow you to run scripts.

### Install the Jekyll Bundle
Once the CLI is open, enter the following command to install dependancies:
```bundle install```

### Run the Jekyll Server

```bundle exec jekyll serve```

### Open the Local Host Server in a Browser
Open a browser and navigate to [localhost:4000](http://localhost:4000) to view the site.

### Make Changes, and Wait for the Server to Reload
As you make changes, you will see the server reload in the terminal. Be sure to save the files in order to trigger the automatic reload.

### Stop the Server
In order to stop the server, you'll need to cancel the serve command. This can be done simply by clicking on the terminal window and typing [Ctrl] + [C]. Some operating systems may requite [Ctrl] + [Shift] + [C], so try both to be sure!

## Optional: Using VSCode for Github Management
If you'd prefer not to use Github Desktop, or are unable to do so, you can also use the VSCode Source Control Management (SCM) pages to commit changes and create new branches.

[For a tutorial on using VSCode SCM, Click Here](https://code.visualstudio.com/docs/editor/versioncontrol)

# Support
If you ran into problems anywhere in this tutorial, please email us at [info@weteachblockchain.org](emailto:info@weteachblockchain.org) and we will be happy to assist you!
