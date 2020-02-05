# Blockchain Institute

## Static Site Generator
This is the staging repo for static site generation via Jekyll. This repo compiles to the site at https://staging.weteachblockchain.org/ and the progress can be observed from the 'Environments' tab on the Github repo. Be sure to log in as a verified collaborator to see this tab.

## About
This site uses the [Jekyll templating engine](https://jekyllrb.com/) to generate static HTML pages and hosts them using Github pages from the `gh-pages` branch of this repo.

Jekyll uses a combination of [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), CSS, and raw HTML to generate pages. 


# Instructions

## Pages
Pages are the core elements of the site and should be added to the root directory with `.html` extensions. 


## CSS 
CSS is created from the `assets` directory and compiles from the `_sass` directory.

### SCSS Structure
As an example, `/assets/css/homepage.css` contains the following code:
```---
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
Bootstrap is a CSS and HTML framework which provides easy to use responsive elements for page design. This streamlines developement for many device types, and ensures consistancy throughout the designs. In order to avoid unnecessary styles being added, please refer to (the bootstrap documentation)[https://getbootstrap.com/docs/4.0/getting-started/introduction/] and check for potential solutions before writing custom code. 

*As noted in the previous section, boostrap is loaded in main.scss, so it should be available on all pages by default. If this does not appear to be the case, please contact Alex and he can troublesheet further.*





