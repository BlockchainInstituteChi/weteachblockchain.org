# Blockchain Institute

This is the staging repo for static site generation via Jekyll. This repo compiles to the site at https://staging.weteachblockchain.org/ and the progress can be observed from the 'Environments' tab on the Github repo. Be sure to log in as a verified collaborator to see this tab.

## Contents
1. [About](#about)
2. [Directory Map](#directory-map)
3. [Instructions](#instructions)
   * [General Structure](#general-structure)
   * [Layouts](#layouts)
   * [Title](#title)
   * [Stylesheets](#stylesheet)
   * [Open Graph Protocol](#open-graph-protocol-og)
4. [Adding Images](#adding-images)
5. [Navigation Header / Menu](#navigation-header)
   * [Nav Data](#nav-data)
   * [Nav Layout](#nav-layout)
6. [Pages](#pages)
7. [Events](#events)
8. [Courses Portal](#courses-portal)
9. [CSS / Styles](#css)
   * [SCSS Structure](#scss-structure)
   * [Variables](#variables)
   * [Bootstrap](#bootstrap)
   * [Responsive Design](#responsive-multi-device)


## About
This site uses the [Jekyll templating engine](https://jekyllrb.com/) to generate static HTML pages and hosts them using Github pages from the `master` branch of this repo.

Jekyll uses a combination of [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), CSS, and raw HTML to generate pages. 

***Commits made to the master branch of this repo will trigger a github pages build, which will go live after 2-3 minutes!***


## Directory Map
`Main Folder`<br>
`- _data` This directory contains data files which can represent information or provide structure and context.<br>
`- _includes` This directory contains injectable code components like the navbar and footer.<br>
`- _layouts` This directory contains the page layout formats<br>
`- _posts` This directory contains markdown files for blog posts<br>
`- _sass` This directory contains precompiled scss style code<br>
`- assets` This directory contains styles and image files<br>
`| - css` This subdirectory is where the main stylesheets should go<br>
`| - img` This subdirectory is where images can be added<br>
`- node_modules` This subdirectory stores node.js modules (mainly bootstrap) *DO NOT EDIT*<br>
`- vendor/` This subdirectory stores ruby vendor files *DO NOT EDIT*<br>
`CNAME` This file sets the URL of the github pages build<br>
`Gemfile` This file contains Ruby Gem configuration information *DO NOT EDIT*<br>
`Gemfile.lock` This is a lock file for system specific Ruby build information *DO NOT EDIT*<br>
`package.json` This file contains node.js library build information *DO NOT EDIT*<br>
`package-lock.json` This file contains system specific node.js library build information *DO NOT EDIT*<br>
`README.md` This is the file that creates the docs you're currently reading! *EDIT WITH CAUTION*<br>
`index.html` This is the home page<br>
`crypto-curious.html` This is the CCC landing page<br>
`404.md` This is the 404 - not found page<br>
`< other root pages >` Other root pages are also stored in the top level directory and may appear here. <br>

# Instructions

## General Structure

Jekyll files should all contain a header section (delimited by `---`) which details how they will be compiled to HTML. The header can contain a range of information. The header from `index.html` is shown below as an example. 

```
---
layout: default
title: Home
stylesheet: homepage.css
ogTitle: The Blockchain Institute
ogDesc: We are a nonprofit organization with the mission of educating the world on all things related to blockchain, cryptocurrency, and decentralized technology. Sign up for an in-person class or take a free online course today!
ogImage: https://weteachblockchain.org/assets/img/headerBackgroundTile.jpg
ogUrl: https://weteachblockchain.org/
---
```

### Layouts
Layouts are a core component of Jekyll and are stored in the folder `_layouts`. These should not be modified, but a new page can be presented in a different layout by specifying it in the markdown header as shown above.

### Title
This is used to set the title as it appears in the browser tab or window. These are not crucial, but will help the user to distinguish tabs. Ideally the title should be less than 20 characters. 

### Stylesheets
Each page should have a personalized stylesheet created and added to `assets/css/`. The goal of this is to ensure that unnecessary styles are not loaded onto pages where they are not relevant. For some layouts, such as events and lessons, the stylesheets will be predefined throughout the system, so these markdown templates will simply ignore the `stylesheet` option if it is defined.

### Open Graph Protocol (og)
The Open Graph Protocol provides social media websites and messaging services with the information that they need to preview a page. These can be set in the header space for any page or post / event and will be displayed automatically when the link is shared!

A full example is shown in the index.html sample above, but this is the general format:
```
ogTitle: < title to be shown in the preview >
ogDesc: < text blurb to display below the title > 
ogImage: < full https:// url to the image to display as a preview >
ogUrl: < the url to display for users >
```

[Full Docs Here](https://ogp.me/)


## Adding Images
Images can be added to the folder at `assets/img/` and will be automatically served by Github's CDN. 

To display an image in a page, use an HTML image tag and a relative path as shown below:
`<img src="/assets/img/WTBORG_Events-01.png">`


## Navigation Header
Most of the current layouts use the Navigation header structure to display a menu at the top of the page. This is a slightly complicated functionality, and uses a data file combined with a layout in order to provide a solution which is both customizeable and easy to edit.

### Nav Data
The navigation menu is defined in `_data/navigation.yaml` and can be used to add new items to the header. Each item added should follow this format:
```
- name: Developer Bootcamp
  link: /developer-toolkit/
  class: hideOnDesktop
```

The class should be set to either `normal` or `hideOnDesktop`. This specifies whether the item should be shown in the mobile menu only. By default, these will be set to `normal` and will appear in both mobile and desktop menus.


### Nav Layout
The navigation menu is built as an `_includes` component, which allows it to be injected into all pages. The component file can be found at `_includes/navigation.html` but generally should not be edited.


## Pages
Pages are the core elements of the site and should be added to the root directory with `.html` extensions. 

## Events
Events can be added as markdown files to the directory `_collections/_events/`. Each file should have the following header.

To create a new event file, copy the template at _collections/_events/.event-template.md to a new file with an appropriate name. 

Once published, events will be displayed on the events page at /events/.

## Courses Portal
Courses have inherited much of their structure from the old Learnpress layout.

A *Course* has many *Modules* each of which have one or more *Lessons*.

To create a course:
1. Copy _collections/_courses/.course-template.md to a new file named for the course (i.e. _collections/_courses/courseNameWithoutSpacesOrSpecialCharacters.md). 
2. Define a course slug (i.e. course-name-without-spaces-or-special-characters) and add it to the header of the course markdown file created in (1.)
3. Create an appropriate number of Module files by copying the template at _collections/_modules/.module-template.md and specify the correct course slug (more detailed instructions are in the template file.)
4. Create an appropriate number of lesson files specifying the correct module numbers and course slug. 
5. Save all of the files and wait for github pages to generate them on the live site. 


## CSS 
CSS is created from the `assets` directory and compiles from the `_sass` directory. Jekyll uses [SCSS](https://sass-lang.com/documentation/syntax) which is then compiled to standard CSS. 

### SCSS Structure
As an example, `/assets/css/homepage.css` contains the following code:
```---sss
---
@import "main";

@import "homepageElements";

@import "homepageResponsive";
```

This means that `homepage.css` pulls in the sass from `_sass/main.scss`, `_sass/homepageElements.scss`, and `_sass/homepageResponsive.scss` and then compiles them together into the final output css for the page. 

### Variables
In `_sass/main.scss` it's also important to note that bootstrap and the variables file are imported at the top of the file:

```
@import "variables";
@import "bootstrap/scss/bootstrap";
```

The variables file can thus be used to set global constants, for easy updating later. Here's an example of what this looks like:

```
$white:    #fff;
$red:     #dc3545;
$body-bg: $white;
$body-color: $white;

/* custom vars */
$custom-font-size: 50px;
```

These can then be used in other .scss files like so:

```
.className {
	color: $body-color;
}
```

### Bootstrap 
Bootstrap is a CSS and HTML framework which provides easy to use responsive elements for page design. This streamlines developement for many device types, and ensures consistancy throughout the designs. In order to avoid unnecessary styles being added, please refer to [the bootstrap documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/) and check for potential solutions before writing custom code. 

*As noted in the previous section, boostrap is loaded in main.scss, so it should be available on all pages by default. If this does not appear to be the case, please contact Alex and he can troublesheet further.*


### Responsive (multi-device) 
Because bootstrap is being used for most elements, it is only necessary to make specific tweaks for responsive design. These should generally be stored in a separate css sheet named like `xxxxResponsive.scss` in the `scss/` directory. These can then be imported in the same way that's shown in the SCSS Structure section above.

Responsive css files should follow the structure shown below:

```
/* Desktop */
@media screen and (max-width: 1000px) {
	/* This is for larger devices like iPad Pro */
}

/* Tablet */
@media screen and (max-width: 800px ) {
	/* This is for small devices like tablets phones */
} 

/* Mobile */
@media screen and (max-width: 600px) {
	/* This is for small devices like mobile phones */
}

@media screen and (max-width: 330px) {
	/* This is for extra small devices like older iPhones */
}
```



