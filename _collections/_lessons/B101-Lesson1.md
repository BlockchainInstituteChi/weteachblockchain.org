---
layout: lesson
course: blockchain101
module: 1
title: Introduction to the Blockchain
permalink: /courses/blockchain-101/01/Lesson-1
---

<span> 
<!DOCTYPE html><html
lang=en-US prefix="og: http://ogp.me/ns#" itemscope itemtype=http://schema.org/WebPage><head><script async src="https://theblockchaininstitute.org/?w3tc_minify=c7873.default.include.ddc1dd.js"></script> <meta
charset=UTF-8><meta
name=viewport content="width=device-width, initial-scale=1"><link
rel=profile href=http://gmpg.org/xfn/11><link
rel=pingback href=https://theblockchaininstitute.org/xmlrpc.php><title>Blockchain 101 &raquo; Blockchain Institute</title><link
rel=canonical href=https://theblockchaininstitute.org/courses/blockchain-101/ ><meta
property=og:locale content=en_US><meta
property=og:type content=article><meta
property=og:title content="Blockchain 101 &raquo; Blockchain Institute"><meta
property=og:description content="Home&nbsp;&#047;&nbsp;Course Catalog&nbsp;&#047;&nbsp;101&nbsp;&#047;&nbsp;Blockchain 101 Introduction to the Blockchain Blockchain Technology didn&#039;t just pop up overnight. How did we get here? Introduction to the Blockchain The Birth of Digital Money The Enigma: Satoshi Nakamoto From Digital Currency to Cryptocurrency The Byzantine Generals Problem Properties of a Blockchain Decentralization and Mining Centralization vs Decentralization Peer-to-Peer Networks How are &hellip; Continue reading Blockchain 101"><meta
property=og:url content=https://theblockchaininstitute.org/courses/blockchain-101/ ><meta
property=og:site_name content="Blockchain Institute"><meta
property=article:publisher content=https://www.facebook.com/TheBlockchainInstitute><meta
property=og:image content=https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-1024x475.png><meta
property=og:image:secure_url content=https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-1024x475.png><meta
property=og:image:width content=1024><meta
property=og:image:height content=475><meta
property=og:image:alt content="Blockchain 101"><meta
name=twitter:card content=summary_large_image><meta
name=twitter:description content="Home&nbsp;&#047;&nbsp;Course Catalog&nbsp;&#047;&nbsp;101&nbsp;&#047;&nbsp;Blockchain 101 Introduction to the Blockchain Blockchain Technology didn&#039;t just pop up overnight. How did we get here? Introduction to the Blockchain The Birth of Digital Money The Enigma: Satoshi Nakamoto From Digital Currency to Cryptocurrency The Byzantine Generals Problem Properties of a Blockchain Decentralization and Mining Centralization vs Decentralization Peer-to-Peer Networks How are &hellip; Continue reading Blockchain 101"><meta
name=twitter:title content="Blockchain 101 &raquo; Blockchain Institute"><meta
name=twitter:site content=@bchaininstitute><meta
name=twitter:image content=https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01.png><meta
name=twitter:creator content=@bchaininstitute> <script type=application/ld+json>{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/theblockchaininstitute.org\/","sameAs":["https:\/\/www.facebook.com\/TheBlockchainInstitute","https:\/\/www.instagram.com\/theblockchaininstitute\/","https:\/\/www.linkedin.com\/company\/blockchain-institute-chi\/","https:\/\/www.youtube.com\/c\/blockchainwtf","https:\/\/twitter.com\/bchaininstitute"],"@id":"https:\/\/theblockchaininstitute.org\/#organization","name":"The Blockchain Institute","logo":"https:\/\/theblockchaininstitute.org\/wp-content\/uploads\/2018\/10\/android-chrome-256x256.png"}</script> <link
rel=dns-prefetch href=//assets.juicer.io><link
rel=dns-prefetch href=//theblockchaininstitute.org><link
rel=dns-prefetch href=//www.google.com><link
rel=dns-prefetch href=//fonts.googleapis.com><link
rel=dns-prefetch href=//use.fontawesome.com><link
rel=dns-prefetch href=//cdn.jsdelivr.net><link
rel=dns-prefetch href=//s.w.org><link
href=https://fonts.gstatic.com crossorigin rel=preconnect> <script data-cfasync=false>var mi_version         = '7.10.4';
	var mi_track_user      = true;
	var mi_no_track_reason = '';
	
	var disableStr = 'ga-disable-UA-121231750-1';

	/* Function to detect opted out users */
	function __gaTrackerIsOptedOut() {
		return document.cookie.indexOf(disableStr + '=true') > -1;
	}

	/* Disable tracking if the opt-out cookie exists. */
	if ( __gaTrackerIsOptedOut() ) {
		window[disableStr] = true;
	}

	/* Opt-out function */
	function __gaTrackerOptout() {
	  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
	  window[disableStr] = true;
	}
	
	if ( mi_track_user ) {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','__gaTracker');

		__gaTracker('create', 'UA-121231750-1', 'auto');
		__gaTracker('set', 'forceSSL', true);
		__gaTracker('require', 'displayfeatures');
		__gaTracker('send','pageview');
	} else {
		console.log( "" );
		(function() {
			/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ */
			var noopfn = function() {
				return null;
			};
			var noopnullfn = function() {
				return null;
			};
			var Tracker = function() {
				return null;
			};
			var p = Tracker.prototype;
			p.get = noopfn;
			p.set = noopfn;
			p.send = noopfn;
			var __gaTracker = function() {
				var len = arguments.length;
				if ( len === 0 ) {
					return;
				}
				var f = arguments[len-1];
				if ( typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function' ) {
					console.log( 'Not running function __gaTracker(' + arguments[0] + " ....) because you are not being tracked. " + mi_no_track_reason );
					return;
				}
				try {
					f.hitCallback();
				} catch (ex) {

				}
			};
			__gaTracker.create = function() {
				return new Tracker();
			};
			__gaTracker.getByName = noopnullfn;
			__gaTracker.getAll = function() {
				return [];
			};
			__gaTracker.remove = noopfn;
			window['__gaTracker'] = __gaTracker;
					})();
		}</script> <script>window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/theblockchaininstitute.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.5"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);</script> <style>img.wp-smiley,img.emoji{display:inline !important;border:none !important;box-shadow:none !important;height:1em !important;width:1em !important;margin:0 .07em !important;vertical-align:-0.1em !important;background:none !important;padding:0 !important}</style><link
rel=stylesheet id=juicerstyle-css  href='//assets.juicer.io/embed.css?ver=5.2.5' type=text/css media=all><link
rel=stylesheet id=contact-form-7-css  href='https://static.theblockchaininstitute.org/wp-content/plugins/contact-form-7/includes/css/styles.css.gzip?ver=5.1.6' type=text/css media=all><link
rel=stylesheet id=ixion-style-css  href='https://static.theblockchaininstitute.org/wp-content/themes/wp_theme-master/style.css.gzip?ver=5.2.5' type=text/css media=all><link
rel=stylesheet id=ixion-fonts-archivo-css  href='//fonts.googleapis.com/css?family=Archivo+Narrow%3A400%2C400i%2C700%2C700i&#038;subset=latin%2Clatin-ext' type=text/css media=all><link
rel=stylesheet id=ixion-fonts-cooper-css  href=https://static.theblockchaininstitute.org/wp-content/themes/wp_theme-master/assets/fonts/cooperhewitt.css.gzip type=text/css media=all><link
rel=stylesheet id=genericons-css  href='https://static.theblockchaininstitute.org/wp-content/plugins/jetpack/_inc/genericons/genericons/genericons.css.gzip?ver=3.1' type=text/css media=all><link
rel=stylesheet id=font-awesome-official-css  href=https://use.fontawesome.com/releases/v5.9.0/css/all.css type=text/css media=all integrity=sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E crossorigin=anonymous><link
rel=stylesheet id=bfa-font-awesome-css  href='//cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css?ver=4.7.0' type=text/css media=all><link
rel=stylesheet id=learn-press-bundle-css  href='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/css/bundle.min.css.gzip?ver=3.2.6.5' type=text/css media=all><link
rel=stylesheet id=learn-press-css  href='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/css/learnpress.css.gzip?ver=3.2.6.5' type=text/css media=all><link
rel=stylesheet id=olympus-google-fonts-css  href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C300%2C400%2C500%2C700%2C900%2C100i%2C300i%2C400i%2C500i%2C700i%2C900i%7CKanit%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100i%2C200i%2C300i%2C400i%2C500i%2C600i%2C700i%2C800i%2C900i&#038;subset=cyrillic%2Cvietnamese%2Ccyrillic-ext%2Cgreek-ext%2Cgreek%2Clatin%2Clatin-ext%2Cthai&#038;display=swap&#038;ver=1.9.92' type=text/css media=all><link
rel=stylesheet id=font-awesome-official-v4shim-css  href=https://use.fontawesome.com/releases/v5.9.0/css/v4-shims.css type=text/css media=all integrity=sha384-zpflLcSaYRmTsnK2LTOdvChgML+Tt/4aE2szcblLVBXd8Jq/HGz6rhZqZ+4TkK75 crossorigin=anonymous><style id=font-awesome-official-v4shim-inline-css>@font-face{font-family:"FontAwesome";src:url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.eot"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.woff2") format("woff2"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.woff") format("woff"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.ttf") format("truetype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-brands-400.svg#fontawesome") format("svg")}@font-face{font-family:"FontAwesome";src:url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.eot"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.woff2") format("woff2"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.woff") format("woff"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.ttf") format("truetype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-solid-900.svg#fontawesome") format("svg")}@font-face{font-family:"FontAwesome";src:url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.eot"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.woff2") format("woff2"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.woff") format("woff"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.ttf") format("truetype"), url("https://use.fontawesome.com/releases/v5.9.0/webfonts/fa-regular-400.svg#fontawesome") format("svg");unicode-range:U+F004-F005,U+F007,U+F017,U+F022,U+F024,U+F02E,U+F03E,U+F044,U+F057-F059,U+F06E,U+F070,U+F075,U+F07B-F07C,U+F080,U+F086,U+F089,U+F094,U+F09D,U+F0A0,U+F0A4-F0A7,U+F0C5,U+F0C7-F0C8,U+F0E0,U+F0EB,U+F0F3,U+F0F8,U+F0FE,U+F111,U+F118-F11A,U+F11C,U+F133,U+F144,U+F146,U+F14A,U+F14D-F14E,U+F150-F152,U+F15B-F15C,U+F164-F165,U+F185-F186,U+F191-F192,U+F1AD,U+F1C1-F1C9,U+F1CD,U+F1D8,U+F1E3,U+F1EA,U+F1F6,U+F1F9,U+F20A,U+F247-F249,U+F24D,U+F254-F25B,U+F25D,U+F267,U+F271-F274,U+F279,U+F28B,U+F28D,U+F2B5-F2B6,U+F2B9,U+F2BB,U+F2BD,U+F2C1-F2C2,U+F2D0,U+F2D2,U+F2DC,U+F2ED,U+F328,U+F358-F35B,U+F3A5,U+F3D1,U+F410,U+F4AD}</style><style>html,body{overflow:hidden}body{opacity:0}body.course-item-popup #wpadminbar{_display:none}body.course-item-popup #learn-press-course-curriculum{position:fixed;top:60px;bottom:0;left:0;background:#FFF;border-right:1px solid #DDD;overflow:auto;z-index:9999}body.course-item-popup #learn-press-content-item{position:fixed;z-index:9999;background:#FFF;top:60px;right:0;bottom:0;overflow:visible}</style> <script src='https://static.theblockchaininstitute.org/wp-includes/js/jquery/jquery.js.gzip?ver=1.12.4-wp'></script> <script src='https://static.theblockchaininstitute.org/wp-includes/js/jquery/jquery-migrate.min.js.gzip?ver=1.4.1'></script> <script src='//assets.juicer.io/embed-no-jquery.js?ver=5.2.5'></script> <script>var monsterinsights_frontend = {"js_events_tracking":"true","download_extensions":"doc,pdf,ppt,zip,xls,docx,pptx,xlsx","inbound_paths":"[]","home_url":"https:\/\/theblockchaininstitute.org","hash_tracking":"false"};</script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/google-analytics-for-wordpress/assets/js/frontend.min.js.gzip?ver=7.10.4'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/surbma-smooth-scroll/js/surbma-smooth-scroll.js.gzip?ver=1.1'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/vendor/plugins.all.min.js.gzip?ver=3.2.6.5'></script> <script src='https://static.theblockchaininstitute.org/wp-includes/js/underscore.min.js.gzip?ver=1.8.3'></script> <script>var userSettings = {"url":"\/","uid":"0","time":"1582647860","secure":"1"};</script> <script src='https://static.theblockchaininstitute.org/wp-includes/js/utils.min.js.gzip?ver=5.2.5'></script> <script>var lpGlobalSettings = {"url":"https:\/\/theblockchaininstitute.org\/courses\/blockchain-101\/lessons\/introduction-to-the-blockchain-review\/","siteurl":"https:\/\/theblockchaininstitute.org","ajax":"https:\/\/theblockchaininstitute.org\/wp-admin\/admin-ajax.php","theme":"wp_theme-master","localize":{"button_ok":"OK","button_cancel":"Cancel","button_yes":"Yes","button_no":"No"}};</script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/global.min.js.gzip?ver=3.2.6.5'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/utils.min.js.gzip?ver=3.2.6.5'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/frontend/learnpress.min.js.gzip?ver=3.2.6.5'></script> <script>var lpCourseSettings = {"root_url":"https:\/\/theblockchaininstitute.org\/","id":1243,"url":"https:\/\/theblockchaininstitute.org\/courses\/blockchain-101\/","result":0,"current_item":"","items":""};</script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/frontend/course.js.gzip?ver=3.2.6.5'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/learnpress/assets/js/frontend/become-teacher.js.gzip?ver=3.2.6.5'></script> <link
rel=alternate type=application/json+oembed href="https://theblockchaininstitute.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Ftheblockchaininstitute.org%2Fcourses%2Fblockchain-101%2F"><link
rel=alternate type=text/xml+oembed href="https://theblockchaininstitute.org/wp-json/oembed/1.0/embed?url=https%3A%2F%2Ftheblockchaininstitute.org%2Fcourses%2Fblockchain-101%2F&#038;format=xml"> <script src=//script.crazyegg.com/pages/scripts/0073/9552.js async=async></script> <style>.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important}</style><link
rel=icon href=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-android-chrome-256x256-32x32.png sizes=32x32><link
rel=icon href=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-android-chrome-256x256-192x192.png sizes=192x192><link
rel=apple-touch-icon-precomposed href=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-android-chrome-256x256-180x180.png><meta
name=msapplication-TileImage content=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-android-chrome-256x256-270x270.png><style id=wp-custom-css>html{-webkit-tap-highlight-color:transparent !important}button{padding-left:2em !important;padding-right:2em !important}.menu-item a::after, .menu-item-has-children a::after{display:none !important}.branding-container p.site-title{display:none !important}a:hover{color:#f9bf32 !important}.red{color:#e20a62 !important}.green{color:#06b7b2 !important}.teal{color:#1073aa !important}a,a:visited{color:#1073aa}h1{color:black}.eduBorder h1{color:white}code.cli:before{content:"$ "}code.cli{background-color:#000;color:green;padding-left:0.5em;padding-right:0.5em;font-weight:700;padding-top:0.25em;padding-bottom:0.25em;margin:1em;width:calc(100% - 1em);display:inline-block}.downloadInfo,.downloadsInfo{box-shadow:#00000038 1pt 1pt 9px}.downloadInfo img, .downloadsInfo img, .downloadsInfo p{width:100% !important;margin-bottom:-1em}.downloadsInfo h5{padding-bottom:0.5em}.downloadInfo h3, .downloadsInfo h3{text-align:center}.downloadsInfo .elementor-widget-container{margin:0 !IMPORTANT}img.custom-logo{width:16em}.main-navigation ul>li>a{color:#000;font-weight:800}.menu-item-344 a{color:black !important}li#menu-item-344{border-radius:2em;border:solid #0f78a9 1px;padding-left:1em;padding-right:1em;color:black}li#menu-item-344:hover{box-shadow:inset 0 0 5px 5px #70d38f82;border:solid 1px #70d38f82}.branding-container{padding-top:0.5em;padding-bottom:0.5em}.site-description{font-family:"Kanit";letter-spacing:-0.005em;width:100%;margin-bottom:0;font-weight:450}.site-description-wrapper{min-width:100%}.post-thumbnail.page-thumbnail img{margin-top:0}.main-navigation ul ul{border-top:2px solid #2977ab}.main-navigation ul ul:before{color:#2977ab}.main-navigation ul>li>a:hover{color:#2977ab}@media screen and (max-width: 600px){button.menu-toggle{background:#327aad !important}.main-navigation ul:before{color:#2876ab !important}.main-navigation ul{border-top:3px solid #2876ab}}a.button.callout-button{background-color:#e20a62;margin-bottom:5%;font-size:1.3em;opacity:0.75}a.button.callout-button:hover{opacity:0.95}.post-thumbnail{position:relative;background:black;max-height:30em;overflow:hidden}.entry-title-overlay{position:absolute;bottom:0;left:0;height:100%;width:100%;background:#00000078}h1.entry-title{position:absolute;bottom:5px;color:white;font-size:3em !important;text-transform:uppercase;width:100%;padding-left:1em;letter-spacing:0.03em}.post-thumbnail img{min-width:100%;min-height:100%}.site-main{width:100%}.fullWidthImage img, .fullWidthImage figure, .fullWidthImage div{width:100% !important}a.contactUsLink{color:#aeaeae}a.contactUsLink:hover{color:#1073aa}.social_section_1info i:hover{color:#1073aa}.social_section_1info a, .social_section_1info li{display:inline-block;margin-right:0.5em;color:#aeaeae;font-size:1.15em}h3.footerHeader, span.footerText, .social_section_1info a, .social_section_1info li, .mc_signup i{color:#aeaeae}.mc_signup_input{width:75%;height:40px;padding-left:10px !important}button.mc_signup{height:40px;vertical-align:bottom;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:white;border:solid grey 1px !important;margin-left:-10px;padding-top:5px}.mc_signup i{font-size:20pt}.mc4wp-form-fields{margin-top:10px}.front-page-wrapper{border-bottom:unset;margin-bottom:-0.5em}.middlePic{width:102%;margin-left:-1%}.entry-author{display:none}.comments-area{display:none}.navigation.post-navigation{display:none}.jp-relatedposts{display:none !important}.entry-meta{display:none}.event_tile.all{width:30%;margin-right:20px;margin-bottom:30px;display:inline-table}.event_tile{box-shadow:#8080808a 0 0 1px 1px}.event_tile_image img{width:100%;height:200px}.event_tile.all{width:calc(100% / 3 - 20px);margin-right:20px;margin-bottom:30px;display:inline-table}.event_tile_summary{display:none}.event_tile_tags{display:none}.event_tile_text{height:100px}.event_tile.single{text-align:center;margin-bottom:20px}iframe.mapIframe{height:20em;margin-top:1.5em}input.wpcf7-text{width:100%;margin-bottom:2px}input.wpcf7-form-control.wpcf7-submit{background:#e20a62}textarea.wpcf7-textarea{height:202px}.teamPic{border-radius:50% !important;overflow:hidden}.teamPic img{min-width:100%}.partnerLogo{display:inline-block;max-width:30%}.edu_tile_hp_date{display:none}.edu_tile_tags{display:none}.edu_tile_summary{display:none}.edu_tile_image img{width:100% !important}h2.edu_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.edu_tile{position:relative}.industry_tile_hp_date{display:none}.industry_tile_tags{display:none}.industry_tile_summary{display:none}.industry_tile_image{background:black;height:10em;overflow:hidden}.industry_tile_image img{width:100% !important;opacity:0.5}h2.industry_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.industry_tile{position:relative;margin-bottom:5px}.web3_tile_hp_date{display:none}.web3_tile_tags{display:none}.web3_tile_summary{display:none}.web3_tile_image{background:black;height:10em;overflow:hidden}.web3_tile_image img{min-width:100% !important;opacity:0.5;min-height:100% !important}h2.web3_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.web3_tile{position:relative;margin-bottom:5px}.downloadsInfo p{font-size:0.75em;width:75%;margin:auto}.downloadsInfo h5{margin-bottom:-0.25em}.downloadsInfo,.downloadInfo{max-width:30% !important;display:inline-table;margin-right:1.5%;margin-left:1.75%;margin-top:0 !important;box-shadow:#00000033 1pt 1pt 1px 1px;vertical-align:top}.downloadsInfo img, .downloadInfo img, .downloadsInfo p{margin-top:0 !important;height:15em !important}.downloadInfo h3, .downloadsInfo h3{margin-top:0}h3.headerSection{background-color:#1073aa;text-align:center;color:#fff;width:100%;margin:auto;margin-top:2em}.downloadInfo img, .downloadsInfo img{height:200px !important}.downloadsInfo,downloadInfo{box-shadow:none}.downloadInfo .teal, .downloadsInfo .teal{color:#1073aa;text-align:left}@media screen and (max-width: 800px){h2.edu_tile_header{font-size:1.25em}h2.industry_tile_header{font-size:1.25em}h2.web3_tile_header{font-size:1.25em}.event_tile.all{width:50%}.post-thumbnail{max-height:10em}h1.entry-title{font-size:1.85em !important}.teamColumn{width:100% !important}}@media screen and (max-width: 500px){h2.edu_tile_header{font-size:1.25em}h2.industry_tile_header{font-size:1.25em}h2.web3_tile_header{font-size:1.25em}.event_tile.all{width:100%}.post-thumbnail{max-height:10em}h1.entry-title{font-size:1.85em !important}.course-curriculum{display:none}.course-tabs div#learn-press-course-curriculum{display:unset}div#learn-press-content-item{position:absolute !important;left:0 !important}form.lp-form.form-button.lp-button-back{display:none}a.toggle-content-item{display:none !important}h2.course-title a{width:0.85em;overflow:hidden;display:inline-block;height:2em;padding:0 !important;margin-top:0 !important;float:right}h2.course-title a:before{content:"☰";color:#1a72aa}.course-item-search{width:calc(100% - 4em) !important;padding-right:0 !important}.course-item-search button{left:calc(100% - 0.5em) !important;right:-1em !important}.downloadInfo,.downloadsInfo{min-width:100% !important;margin:auto}}.donationsPortal{height:100vh;position:relative;width:100vh}.downloadsDesc h5{margin-top:-0.5em;margin-bottom:0}.downloadsDesc span{font-size:0.75em}button.ctaButton{background-color:#1073aa}h3.courseTitle{margin-top:-5px}span.courseDate{font-size:0.75em;margin-top:-20px;margin-bottom:-20px;text-transform:uppercase}p.courseDate{margin-bottom:0;font-size:0.8em}.fullWidthIframeContainer{position:relative;height:0;padding-bottom:56.25%;padding-top:25px}.fullWidthIframeContainer iframe{position:absolute;top:0;left:0;width:100%;height:100%}form.enroll-course{position:relative;height:3.5em;bottom:-1em}button.lp-button.button.button-enroll-course{height:100%;bottom:0}.learn-press-courses li{margin-bottom:5% !important}h3.course-title{min-height:2em}button.lp-button.button.button-enroll-course:hover{background:white;color:#1070ac;box-shadow:inset #1070ac8a 0 0 0.25em 0.5em}div#course-item-content-header{background:white}h2.course-title{text-transform:uppercase;font-size:1.25em !important;font-weight:700;position:absolute;width:50%;text-align:center;margin-left:25% !important}a.toggle-content-item{border-left:none !important;text-decoration:none}.next span:after{content:"\00a0 ▶";font-size:0.75em}.prev span:before{content:"◀\00a0 ";font-size:0.75em}button.lp-button.button{background:#1a72aa}li.lp_course{box-shadow:#00000038 1pt 1pt 9px !important}span.course-instructor{padding-right:0.5em}.lp_course h3.course-title{padding-left:0.25em !important}.lp_course span.price{padding-left:0.35em}.course-item-nav .prev a:hover, .course-item-nav .next a:hover{color:#1a72aa}.course-item-nav .prev a, .course-item-nav .next a{text-decoration:none}.course-item span.item-name:hover, .course-item a.section-item-link:hover, .course-title a:hover{color:#06B7B2;text-decoration:none !important}.section-left{display:inline-block !important;width:100% !important}.section-meta{display:inline-block !important;width:100%}.course-tab-panel{display:block !important}.course-nav-tabs{display:none}.course-tab-panel-instructor,.course-author{display:none}form.lp-form.form-button.lp-button-back{display:none}body:not(.page-id-47) .grecaptcha-badge{display:none}h2.event_tile_header.FAQ{padding-left:0.25em;font-size:0.75em;text-transform:uppercase;color:black;max-height:2.5em;text-overflow:ellipsis;overflow:hidden}.event_tile_hp_date.FAQ{padding-left:0.25em;font-size:0.75em}.FAQ_Header h1.elementor-heading-title.elementor-size-large{font-size:3em;border-bottom:1pt #00000029 solid;width:calc(100% - 20px);padding-left:0.25em;color:black}input#popup_ok{background-color:#1a72aa}.show-quiz-review button{background:#1a71aa}.form-button button{background:#1a71aa}h2.event_tile_header{font-size:1.05em}.lp-course-buttons{display:none}.course-info{display:none}div#lp-archive-courses{padding-right:1em}img.bci-course-logo{position:absolute;left:calc( 50% - 9% );width:18%;padding-top:0.5em}.headerBlock{display:inline-block;max-width:calc(30% - 1em);margin:unset;margin-right:1em;position:relative}.headerBlock span{font-size:xx-large;position:absolute;top:calc(50% - 2em);margin-left:unset !important;color:white;text-transform:uppercase;font-weight:600;text-align:center;width:11em;padding-left:1em;padding-right:1em;max-width:11em;left:calc(50% - 5.5em)}.headerBlock img{width:100%;position:unset}.header-overlay.header-blocks{background:white !important;background-color:white !important;margin-bottom:-0.25em !important}.headerBlock{display:inline-block;max-width:calc( 100% / 3 - 0.25em);margin:unset;position:relative;text-align:center}.header-overlay.header-blocks::before{display:none}.course-item-nav a{display:inline-block;width:75%}a.bci-course-logo{position:relative;width:25%;z-index:5}img.bci-course-logo{position:absolute;left:calc( 50% - 5em );width:10em;padding-top:0.5em}.menu-item-3093:hover{background:#30ac9a !important}.menu-item-3093 a{background:transparent}li#menu-item-3093, .menu-item-3093 a{background:#e44862;border-radius:0 !important;color:white !important}.menu-item-3093 a{background:transparent}.nav-menu li{margin-left:1.5em !important}input.mc_signup_input{width:70%}.pageTitleHeaderCentered{text-align:center !important;width:auto;margin:auto}iframe.donationsPortal{position:fixed !important;display:block;width:100vw !important;max-width:unset;left:0;margin:0 !important;background:white;margin-top:-3em !important}@media only screen and (max-width: 1150px){.headerBlock span{font-size:2em;left:1em;width:80%}}@media only screen and (max-width: 950px){.headerBlock span{font-size:1.65em;left:1em;width:80%}button.menu-toggle{padding-left:0.5em !important;padding-right:0.5em !important}}@media only screen and (max-width: 800px){.header-overlay.header-blocks{display:none}.main-navigation ul ul{border-top:none;padding-bottom:1em}li#menu-item-3093{margin-right:2em;text-align:center}.container h1{font-size:1.25em !important}}#menu-item-3093 a{color:#f63f29}li#menu-item-3093{color:#34968361;height:2.5em;margin-top:0.25em;border-radius:1.25em;padding-right:0.75em;padding-left:0.75em;padding-top:0.25em;padding-bottom:0.25em}.quickLinks{text-align:center}.quickLinks a{padding:0.25em;margin:0.25em;display:inline-block;text-align:center;background:#1273a9;color:white;font-weight:600;text-transform:uppercase;padding-left:0.5em;padding-right:0.5em}img.small{max-height:calc(100% - 1em);margin-top:0.5em}.lessonHeader img{width:100%;position:absolute;display:block;float:left;left:0;top:0;min-height:7em}.lessonHeader .overlay{position:absolute;top:1em;color:white;left:4em;text-transform:uppercase}.lessonHeader .overlay h3{margin:0;padding:0;font-size:1em;font-weight:600;letter-spacing:0.05em}.lessonHeader .overlay h1{color:white;margin:0;font-weight:400;letter-spacing:0.05em}.lessonHeader{display:block;max-height:8em}.content-item-description.lesson-description{margin-top:8.5em}.lessonHeader a{color:white;text-decoration:none}.course-price{text-align:center}a.back-to-top{padding:1em;border:none;background:#1073aa;color:white;text-transform:uppercase;text-decoration:none}.learnpressImageCaption p{margin:0}.learnpressImageCaption{background:rgb(43,43,43);padding:1em;color:white}.openingParagraph{text-transform:uppercase;color:rgb(0,100,140);font-family:'Kanit';font-size:1.25em;line-height:2em}.tealCallout{background:#0b9ba4;color:white;padding:1em;border-radius:1em;padding-bottom:2em}.tealCallout h6, .tealCallout h4,  .tealCallout h5,  .tealCallout h3,  .tealCallout h2, .tealCallout h1{color:white;margin:1em}.tealCallout p{padding-left:1em;padding-right:1em;text-align:justify}.bigQuote{font-size:1.35em;text-align:center;font-style:italic;font-weight:300}.inline-text-image{padding:1em;width:unset}@media only screen and (max-width: 800px){.lessonHeader .overlay h1{font-size:1.25em}}.branding-container{margin-left:0 !important;margin-right:0 !important;min-width:100% !important;background-color:white;max-width:unset !important;padding:0;padding-left:2.75em;padding-right:2.25em}.utility-container ul.social_section_1info{display:inline-block;padding:0.75em;padding-left:3em;margin:0 !important}form.search-form{padding-right:2em}.utility-container i,span.search-form-icon::before{color:#30ac9a !important}header.site-header{margin-bottom:0 !important}.header-overlay{margin:0;min-width:100%;max-height:70vh !important;overflow:hidden;height:fit-content}.header-overlay img{min-width:100%}a.button.callout-button{background-color:#e20a62;margin-bottom:5%}.homePageBlock{min-height:50vh;text-align:center;min-width:100vw !important;left:calc((100% - 100vw)/2)}.homePageBlock.tealBackground{text-align:left;background:#4bab9e;color:white}.homePageCoursesBlock h3:hover{color:black !important}a.learnMoreButton{background:white;padding:0.5em;display:block;max-width:70%;text-align:center;text-transform:uppercase;font-weight:600;letter-spacing:0.075em;font-size:1.05em;margin-top:1em}.tealBackground a.learnMoreButton{color:#4bab9d}.homePageBlock.purpleBackground{background:#951f6d;color:white;text-align:left}.purpleBackground a.learnMoreButton{color:#951f6d}.purpleBackground h1, .tealBackground h1, .blueBackground h1{color:white}.homePageBlock.blueBackground{color:white;background:#286287;text-align:left}.homePageCoursesBlock{text-align:left}.homePageCoursesBlock a{display:block;margin-top:1.15em;line-height:0.95em}.homePageCoursesBlock span.comingSoon{font-size:0.75em;display:inline-block;color:grey;vertical-align:top}.homePageCoursesBlock a:hover{color:#30ac9a !important}.homePageBlock.questions, .homePageBlock.questions h1, .homePageBlock.questions a{color:white}.homePageBlock.questions a{display:block;text-align:left}.homePageBlock h1{margin-top:2em}.homePageBlock.differenceBetween h1{margin-top:unset}.differenceBetween a.learnMoreButton{background:#286287;color:white;width:30%;margin:auto;margin-top:1em}.homePageBlock.coursesBlockMaster h1{margin-top:unset}.purple{color:#963E6C !important}.orange{color:#f63f28 !important}.blue{color:#00678d !important}.post-thumbnail{width:100vw;left:calc((100% - 100vw) / 2 );position:relative;display:block;min-height:50vh}.homePageBlock.questions{min-height:unset !important;background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/FAQ_bg.jpg);background-size:cover}.homePageBlock.differenceBetween h1{margin-top:-0.75em}.questions .textwidget.custom-html-widget h1{font-size:3em}.questions .textwidget.custom-html-widget span{font-size:1.5em}@media screen and (max-width: 800px){.utility-container ul.social_section_1info{padding-top:0.25em;padding-bottom:0.25em}form.search-form{padding-right:unset}.differenceBetween a.learnMoreButton{width:80%}.post-thumbnail{min-height:unset}.branding-container{padding-left:0.5em;padding-right:0.5em}}.squigglyDivider, .squigglyDivider img{min-width:100vw;left:calc((100% - 100vw) / 2 );position:relative}span.missionStatement{font-size:0.35em;display:block;width:50%;font-weight:400;margin-bottom:3em;text-align:justify;margin-top:1em}.downArrow{position:absolute;bottom:0.5em;color:white;background:#e44862;width:2em;height:2em;font-size:1.5em;border-radius:1em;text-align:center;left:calc(50% - 1em);opacity:0.5}.downArrow i{color:white;padding-top:0.6em}.downArrow:hover{opacity:0.75}.site-description-wrapper{width:100vw;height:100%;background:#0000003b;margin:0 !important}.backToTopButton{color:white;background-color:red;border-radius:1em;width:1.75em;height:1.75em;padding:0.25em;padding-top:0em;padding-bottom:1.5em;position:fixed;right:1em;bottom:1em;text-align:center;vertical-align:top}.backToTopButton i{position:relative !important;margin-top:-5em;color:white;bottom:0.05em}.callToAction h1{color:white;text-align:left;margin-top:1em;margin-left:1em}.callToAction span{margin-left:1em;text-align:left !important;color:white;float:left;padding:1em}html{-webkit-tap-highlight-color:transparent !important}button{padding-left:2em !important;padding-right:2em !important}.menu-item a::after, .menu-item-has-children a::after{display:none !important}.branding-container p.site-title{display:none !important}a:hover{color:#f9bf32 !important}.red{color:#e20a62 !important}.green{color:#06b7b2 !important}.teal{color:#1073aa !important}a,a:visited{color:#1073aa}h1{color:black}.eduBorder h1{color:white}code.cli:before{content:"$ "}code.cli{background-color:#000;color:green;padding-left:0.5em;padding-right:0.5em;font-weight:700;padding-top:0.25em;padding-bottom:0.25em;width:calc(100% - 1em);display:inline-block}.downloadInfo,.downloadsInfo{box-shadow:#00000038 1pt 1pt 9px}.downloadInfo img, .downloadsInfo img, .downloadsInfo p{width:100% !important;margin-bottom:-1em}.downloadsInfo h5{padding-bottom:0.5em}.downloadInfo h3, .downloadsInfo h3{text-align:center}.downloadsInfo .elementor-widget-container{margin:0 !IMPORTANT}img.custom-logo{width:16em}.main-navigation ul>li>a{color:#000;font-weight:800}.menu-item-344 a{color:black !important}li#menu-item-344{border-radius:2em;border:solid #0f78a9 1px;padding-left:1em;padding-right:1em;color:black}li#menu-item-344:hover{box-shadow:inset 0 0 5px 5px #70d38f82;border:solid 1px #70d38f82}.branding-container{padding-top:0.5em;padding-bottom:0.5em}.site-description{font-family:"Kanit";letter-spacing:-0.005em;width:100%;margin-bottom:0;font-weight:450}.site-description-wrapper{min-width:100%}.post-thumbnail.page-thumbnail img{margin-top:0}.main-navigation ul ul{border-top:2px solid #2977ab}.main-navigation ul ul:before{color:#2977ab}.main-navigation ul>li>a:hover{color:#2977ab}@media screen and (max-width: 600px){button.menu-toggle{background:#327aad !important}.main-navigation ul:before{color:#2876ab !important}.main-navigation ul{border-top:3px solid #2876ab}}a.button.callout-button{background-color:#e20a62;margin-bottom:5%;font-size:1.3em;opacity:0.75}a.button.callout-button:hover{opacity:0.95}.post-thumbnail{position:relative;background:black;max-height:30em;overflow:hidden}.entry-title-overlay{position:absolute;bottom:0;left:0;height:100%;width:100%;background:#00000078}h1.entry-title{position:absolute;bottom:5px;color:white;font-size:3em !important;text-transform:uppercase;width:100%;padding-left:1em;letter-spacing:0.03em}.post-thumbnail img{min-width:100%;min-height:100%}.site-main{width:100%}.fullWidthImage img, .fullWidthImage figure, .fullWidthImage div{width:100% !important}a.contactUsLink{color:#aeaeae}a.contactUsLink:hover{color:#1073aa}.social_section_1info i:hover{color:#1073aa}.social_section_1info a, .social_section_1info li{display:inline-block;margin-right:0.5em;color:#aeaeae;font-size:1.15em}h3.footerHeader, span.footerText, .social_section_1info a, .social_section_1info li, .mc_signup i{color:#aeaeae}.mc_signup_input{width:75%;height:40px;padding-left:10px !important}button.mc_signup{height:40px;vertical-align:bottom;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:white;border:solid grey 1px !important;margin-left:-10px;padding-top:5px}.mc_signup i{font-size:20pt}.mc4wp-form-fields{margin-top:10px}.front-page-wrapper{border-bottom:unset;margin-bottom:-0.5em}.middlePic{width:102%;margin-left:-1%}.entry-author{display:none}.comments-area{display:none}.navigation.post-navigation{display:none}.jp-relatedposts{display:none !important}.entry-meta{display:none}.event_tile.all{width:30%;margin-right:20px;margin-bottom:30px;display:inline-table}.event_tile{box-shadow:#8080808a 0 0 1px 1px}.event_tile_image img{width:100%;height:200px}.event_tile.all{width:calc(100% / 3 - 20px);margin-right:20px;margin-bottom:30px;display:inline-table}.event_tile_summary{display:none}.event_tile_tags{display:none}.event_tile_text{height:100px}.event_tile.single{text-align:center;margin-bottom:20px}iframe.mapIframe{height:20em;margin-top:1.5em}input.wpcf7-text{width:100%;margin-bottom:2px}input.wpcf7-form-control.wpcf7-submit{background:#e20a62}textarea.wpcf7-textarea{height:202px}.teamPic{border-radius:50% !important;overflow:hidden}.teamPic img{min-width:100%}.partnerLogo{display:inline-block;max-width:30%}.edu_tile_hp_date{display:none}.edu_tile_tags{display:none}.edu_tile_summary{display:none}.edu_tile_image img{width:100% !important}h2.edu_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.edu_tile{position:relative}.industry_tile_hp_date{display:none}.industry_tile_tags{display:none}.industry_tile_summary{display:none}.industry_tile_image{background:black;height:10em;overflow:hidden}.industry_tile_image img{width:100% !important;opacity:0.5}h2.industry_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.industry_tile{position:relative;margin-bottom:5px}.web3_tile_hp_date{display:none}.web3_tile_tags{display:none}.web3_tile_summary{display:none}.web3_tile_image{background:black;height:10em;overflow:hidden}.web3_tile_image img{min-width:100% !important;opacity:0.5;min-height:100% !important}h2.web3_tile_header{color:white;text-align:center;position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);text-transform:uppercase;font-weight:500;width:90%}.web3_tile{position:relative;margin-bottom:5px}.downloadsInfo p{font-size:0.75em;width:75%;margin:auto}.downloadsInfo h5{margin-bottom:-0.25em}.downloadsInfo,.downloadInfo{max-width:30% !important;display:inline-table;margin-right:1.5%;margin-left:1.75%;margin-top:0 !important;box-shadow:#00000033 1pt 1pt 1px 1px;vertical-align:top}.downloadsInfo img, .downloadInfo img, .downloadsInfo p{margin-top:0 !important;height:15em !important}.downloadInfo h3, .downloadsInfo h3{margin-top:0}h3.headerSection{background-color:#1073aa;text-align:center;color:#fff;width:100%;margin:auto;margin-top:2em}.downloadInfo img, .downloadsInfo img{height:200px !important}.downloadsInfo,downloadInfo{box-shadow:none}.downloadInfo .teal, .downloadsInfo .teal{color:#1073aa;text-align:left}@media screen and (max-width: 800px){h2.edu_tile_header{font-size:1.25em}h2.industry_tile_header{font-size:1.25em}h2.web3_tile_header{font-size:1.25em}.event_tile.all{width:50%}.post-thumbnail{max-height:10em}h1.entry-title{font-size:1.85em !important}.teamColumn{width:100% !important}}@media screen and (max-width: 500px){h2.edu_tile_header{font-size:1.25em}h2.industry_tile_header{font-size:1.25em}h2.web3_tile_header{font-size:1.25em}.event_tile.all{width:100%}.post-thumbnail{max-height:10em}h1.entry-title{font-size:1.85em !important}.course-curriculum{display:none}.course-tabs div#learn-press-course-curriculum{display:unset}div#learn-press-content-item{position:absolute !important;left:0 !important}form.lp-form.form-button.lp-button-back{display:none}a.toggle-content-item{display:none !important}h2.course-title a{width:0.85em;overflow:hidden;display:inline-block;height:2em;padding:0 !important;margin-top:0 !important;float:right}h2.course-title a:before{content:"☰";color:#1a72aa}.course-item-search{width:calc(100% - 4em) !important;padding-right:0 !important}.course-item-search button{left:calc(100% - 0.5em) !important;right:-1em !important}.downloadInfo,.downloadsInfo{min-width:100% !important;margin:auto}}.donationsPortal{height:100vh;position:relative;width:100vh}.downloadsDesc h5{margin-top:-0.5em;margin-bottom:0}.downloadsDesc span{font-size:0.75em}button.ctaButton{background-color:#1073aa}h3.courseTitle{margin-top:-5px}span.courseDate{font-size:0.75em;margin-top:-20px;margin-bottom:-20px;text-transform:uppercase}p.courseDate{margin-bottom:0;font-size:0.8em}.fullWidthIframeContainer{position:relative;height:0;padding-bottom:56.25%;padding-top:25px}.fullWidthIframeContainer iframe{position:absolute;top:0;left:0;width:100%;height:100%}form.enroll-course{position:relative;height:3.5em;bottom:-1em}button.lp-button.button.button-enroll-course{height:100%;bottom:0}.learn-press-courses li{margin-bottom:5% !important}h3.course-title{min-height:2em}button.lp-button.button.button-enroll-course:hover{background:white;color:#1070ac;box-shadow:inset #1070ac8a 0 0 0.25em 0.5em}div#course-item-content-header{background:white}h2.course-title{text-transform:uppercase;font-size:1.25em !important;font-weight:700;position:absolute;width:50%;text-align:center;margin-left:25% !important}a.toggle-content-item{border-left:none !important;text-decoration:none}.next span:after{content:"\00a0 ▶";font-size:0.75em}.prev span:before{content:"◀\00a0 ";font-size:0.75em}button.lp-button.button{background:#1a72aa}li.lp_course{box-shadow:#00000038 1pt 1pt 9px !important}span.course-instructor{padding-right:0.5em}.lp_course h3.course-title{padding-left:0.25em !important}.lp_course span.price{padding-left:0.35em}.course-item-nav .prev a:hover, .course-item-nav .next a:hover{color:#1a72aa}.course-item-nav .prev a, .course-item-nav .next a{text-decoration:none}.course-item span.item-name:hover, .course-item a.section-item-link:hover, .course-title a:hover{color:#06B7B2;text-decoration:none !important}.section-left{display:inline-block !important;width:100% !important}.section-meta{display:inline-block !important;width:100%}.course-tab-panel{display:block !important}.course-nav-tabs{display:none}.course-tab-panel-instructor,.course-author{display:none}form.lp-form.form-button.lp-button-back{display:none}body:not(.page-id-47) .grecaptcha-badge{display:none}h2.event_tile_header.FAQ{padding-left:0.25em;font-size:0.75em;text-transform:uppercase;color:black;max-height:2.5em;text-overflow:ellipsis;overflow:hidden}.event_tile_hp_date.FAQ{padding-left:0.25em;font-size:0.75em}.FAQ_Header h1.elementor-heading-title.elementor-size-large{font-size:3em;border-bottom:1pt #00000029 solid;width:calc(100% - 20px);padding-left:0.25em;color:black}input#popup_ok{background-color:#1a72aa}.show-quiz-review button{background:#1a71aa}.form-button button{background:#1a71aa}h2.event_tile_header{font-size:1.05em}.lp-course-buttons{display:none}.course-info{display:none}div#lp-archive-courses{padding-right:1em}img.bci-course-logo{position:absolute;left:calc( 50% - 9% );width:18%;padding-top:0.5em}.headerBlock{display:inline-block;max-width:calc(30% - 1em);margin:unset;margin-right:1em;position:relative}.headerBlock span{font-size:xx-large;position:absolute;top:calc(50% - 2em);margin-left:unset !important;color:white;text-transform:uppercase;font-weight:600;text-align:center;width:11em;padding-left:1em;padding-right:1em;max-width:11em;left:calc(50% - 5.5em)}.headerBlock img{width:100%;position:unset}.header-overlay.header-blocks{background:white !important;background-color:white !important;margin-bottom:-0.25em !important}.headerBlock{display:inline-block;max-width:calc( 100% / 3 - 0.25em);margin:unset;position:relative;text-align:center}.header-overlay.header-blocks::before{display:none}.course-item-nav a{display:inline-block;width:75%}a.bci-course-logo{position:relative;width:25%;z-index:5}img.bci-course-logo{position:absolute;left:calc( 50% - 5em );width:10em;padding-top:0.5em}.menu-item-3093:hover{background:#30ac9a !important}.menu-item-3093 a{background:transparent}li#menu-item-3093, .menu-item-3093 a{background:#e44862;border-radius:0 !important;color:white !important}.menu-item-3093 a{background:transparent}.nav-menu li{margin-left:1.5em !important}input.mc_signup_input{width:70%}.pageTitleHeaderCentered{text-align:center !important;width:auto;margin:auto}iframe.donationsPortal{position:fixed !important;display:block;width:100vw !important;max-width:unset;left:0;margin:0 !important;background:white;margin-top:-3em !important}@media only screen and (max-width: 1150px){.headerBlock span{font-size:2em;left:1em;width:80%}}@media only screen and (max-width: 950px){.headerBlock span{font-size:1.65em;left:1em;width:80%}button.menu-toggle{padding-left:0.5em !important;padding-right:0.5em !important}}@media only screen and (max-width: 800px){.header-overlay.header-blocks{display:none}.main-navigation ul ul{border-top:none;padding-bottom:1em}li#menu-item-3093{margin-right:2em;text-align:center}.container h1{font-size:1.25em !important}}#menu-item-3093 a{color:#f63f29}li#menu-item-3093{color:#34968361;height:2.5em;margin-top:0.25em;border-radius:1.25em;padding-right:0.75em;padding-left:0.75em;padding-top:0.25em;padding-bottom:0.25em}.quickLinks{text-align:center}.quickLinks a{padding:0.25em;margin:0.25em;display:inline-block;text-align:center;background:#1273a9;color:white;font-weight:600;text-transform:uppercase;padding-left:0.5em;padding-right:0.5em}img.small{max-height:calc(100% - 1em);margin-top:0.5em}.lessonHeader img{width:100%;position:absolute;display:block;float:left;left:0;top:0;min-height:7em}.lessonHeader .overlay{position:absolute;top:1em;color:white;left:4em;text-transform:uppercase}.lessonHeader .overlay h3{margin:0;padding:0;font-size:1em;font-weight:600;letter-spacing:0.05em}.lessonHeader .overlay h1{color:white;margin:0;font-weight:400;letter-spacing:0.05em}.lessonHeader{display:block;max-height:8em}.content-item-description.lesson-description{margin-top:8.5em}.lessonHeader a{color:white;text-decoration:none}.course-price{text-align:center}a.back-to-top{padding:1em;border:none;background:#1073aa;color:white;text-transform:uppercase;text-decoration:none}.learnpressImageCaption p{margin:0}.learnpressImageCaption{background:rgb(43,43,43);padding:2em;color:white}.tealCallout{background:#0b9ba4;color:white;padding:1em;border-radius:1em;overflow:hidden}.tealCallout h6, .tealCallout h4,  .tealCallout h5,  .tealCallout h3,  .tealCallout h2, .tealCallout h1{color:white;margin:1em}.bigQuote{font-size:1.35em;text-align:center;font-style:italic;font-weight:300}@media only screen and (max-width: 800px){.lessonHeader .overlay h1{font-size:1.25em}.inline-text-image{padding:1em;width:calc(100% - 2em)}}.branding-container{margin-left:0 !important;margin-right:0 !important;min-width:100% !important;background-color:white;max-width:unset !important;padding:0;padding-left:2.75em;padding-right:2.25em}.utility-container ul.social_section_1info{display:inline-block;padding:0.75em;padding-left:3em;margin:0 !important}form.search-form{padding-right:2em}.utility-container i,span.search-form-icon::before{color:#30ac9a !important}header.site-header{margin-bottom:0 !important}.header-overlay{margin:0;min-width:100%;max-height:70vh !important;overflow:hidden;height:fit-content}.header-overlay img{min-width:100%}a.button.callout-button{background-color:#e20a62;margin-bottom:5%}.homePageBlock{min-height:50vh;text-align:center;min-width:100vw !important;left:calc((100% - 100vw)/2)}.homePageBlock.tealBackground{text-align:left;background:#4bab9e;color:white}.homePageCoursesBlock h3:hover{color:black !important}a.learnMoreButton{background:white;padding:0.5em;display:block;max-width:70%;text-align:center;text-transform:uppercase;font-weight:600;letter-spacing:0.075em;font-size:1.05em;margin-top:1em}.tealBackground a.learnMoreButton{color:#4bab9d}.homePageBlock.purpleBackground{background:#951f6d;color:white;text-align:left}.purpleBackground a.learnMoreButton{color:#951f6d}.purpleBackground h1, .tealBackground h1, .blueBackground h1{color:white}.homePageBlock.blueBackground{color:white;background:#286287;text-align:left}.homePageCoursesBlock{text-align:left}.homePageCoursesBlock a{display:block;margin-top:1.15em;line-height:0.95em}.homePageCoursesBlock span.comingSoon{font-size:0.75em;display:inline-block;color:grey;vertical-align:top}.homePageCoursesBlock a:hover{color:#30ac9a !important}.homePageBlock.questions, .homePageBlock.questions h1, .homePageBlock.questions a{color:white}.homePageBlock.questions a{display:block;text-align:left}.homePageBlock h1{margin-top:2em}.homePageBlock.differenceBetween h1{margin-top:unset}.differenceBetween a.learnMoreButton{background:#286287;color:white;width:30%;margin:auto;margin-top:1em}.homePageBlock.coursesBlockMaster h1{margin-top:unset}.purple{color:#963E6C !important}.orange{color:#f63f28 !important}.blue{color:#00678d !important}.post-thumbnail{width:100vw;left:calc((100% - 100vw) / 2 );position:relative;display:block;min-height:50vh}.homePageBlock.questions{min-height:unset !important;background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/FAQ_bg.jpg);background-size:cover}.homePageBlock.differenceBetween h1{margin-top:-0.75em}.questions .textwidget.custom-html-widget h1{font-size:3em}.questions .textwidget.custom-html-widget span{font-size:1.5em}@media screen and (max-width: 800px){.utility-container ul.social_section_1info{padding-top:0.25em;padding-bottom:0.25em}form.search-form{padding-right:unset}.differenceBetween a.learnMoreButton{width:80%}.post-thumbnail{min-height:unset}.branding-container{padding-left:0.5em;padding-right:0.5em}}.squigglyDivider, .squigglyDivider img{min-width:100vw;left:calc((100% - 100vw) / 2 );position:relative}span.missionStatement{font-size:0.35em;display:block;width:50%;font-weight:400;margin-bottom:3em;text-align:justify;margin-top:1em}.downArrow{position:absolute;bottom:0.5em;color:white;background:#e44862;width:2em;height:2em;font-size:1.5em;border-radius:1em;text-align:center;left:calc(50% - 1em);opacity:0.5}.downArrow i{color:white;padding-top:0.6em}.downArrow:hover{opacity:0.75}.site-description-wrapper{width:100vw;height:100%;background:#0000003b;margin:0 !important}.backToTopButton{color:white;background-color:red;border-radius:1em;width:1.75em;height:1.75em;padding:0.25em;padding-top:0em;padding-bottom:1.5em;position:fixed;right:1em;bottom:1em;text-align:center;vertical-align:top}.backToTopButton i{position:relative !important;margin-top:-5em;color:white;bottom:0.05em}.callToAction h1{color:white;text-align:left;margin-top:1em;margin-left:1em}.callToAction span{margin-left:1em;text-align:left !important;color:white;float:left;padding:1em}.courseSummary{margin-left:1em;margin-right:1em;background:#d3d3d3b3;border-radius:0.5em;padding-bottom:1.5em;padding-top:0.5em}.courseSummary h3{font-size:1.5em}.courseSummary h5{color:black}.callToAction a.learnMoreButton{margin-top:unset;display:inline-block;padding-left:3em;padding-right:3em;float:left;margin-left:2em}span.mainImageTitle{color:#dc3650}.purpleNote{padding:1.5em;color:white;background:#951f6d;margin:1em}.blueTitleNote{padding:1.5em;margin:1em;color:white;background:#113346}.formula{padding:1.5em;margin:1em;background:#848586;text-align:center;color:white}.alignleft{display:inline-block;margin:1em;float:left;margin-right:2.5em;max-width:calc(30% - 2em)}.textRight{max-width:calc(70% - 2em);display:inline-block;margin-top:-1.75em;min-height:calc(200px + 2em)}.tealCallout .textRight h4{margin:0;margin-top:0.2em}.tealCallout .textRight span{text-align:justify;margin-bottom:1em}.textRight p{padding:0}.coursePageBlock{min-width:100vw;display:block;left:calc((100% - 100vw )/ 2 );background-size:cover !important}.coursePageBlock.banner{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/Courses-01.jpg)}.coursePageBannerOverlay{min-width:100vw;min-height:calc(100% + 1.10em);background:#00000099;margin-top:-0.55em;margin-left:calc( (100% - 100vw) / 2 )}.coursePageBannerOverlay h1{color:white;margin-top:2em;font-family:"Kanit";letter-spacing:-0.005em;font-weight:450;margin-bottom:1em}.coursePageBannerOverlay a.button{background:red;color:white !important;padding:0.75em;padding-left:2em;padding-right:2em;font-size:0.75em;font-weight:800;margin-top:2em;margin-bottom:6em}.coursePageBannerOverlay span{color:white;font-size:0.85em;line-height:normal;text-align:justify}.coursePageIntro{margin-top:3em;margin-left:0.5em}.coursePageIntro h2{font-family:"Kanit";letter-spacing:-0.005em;width:100%;margin-bottom:0;font-weight:450}.coursePageIntro span{max-width:calc(100% - 4em) !important;width:100% !important;white-space:normal !important;display:inline-block !important}.pathButton{min-height:10em;background-size:cover !important}.pathButton .textwidget.custom-html-widget, .pathButton .elementor-widget-container{height:100%}.pathButton a{min-width:100% !important;min-height:100% !important;display:inline-block}.pathButton.beginners{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/Beginners_button.jpg)}.pathButton.developers{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/Developers_button.jpg)}.pathButton.professionals{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/Professionals_button.jpg)}.pathButton h4{position:absolute;top:calc(50% - 1em);left:25%;width:50%;color:white;margin:unset;text-align:center}.courseDescription span.description{display:inline-block;max-width:100%;position:relative;height:fit-content;font-size:0.75em;color:black}.courseDescription span.author{font-style:italic;font-size:0.75em;display:block;margin-top:-0.5em}.courseDescription span.title{font-weight:800;color:black;display:block;margin-top:-0.55em;text-transform:uppercase}.courseDescription a.button{padding-top:0.5em;padding-bottom:0.5em;font-size:0.65em;padding-left:5em;padding-right:5em;background:red;font-weight:900}.courseThumbnail{max-width:25vw;min-width:20em;padding-right:0.75em}a.button.courseCategory{padding:0.5em;font-size:0.75em;padding-left:2em;padding-right:2em;margin-top:-0.15em !important;display:block;float:right;text-align:center;width:fit-content}a.button.courseCategory.developers{background:#1073aa}a.button.courseCategory.beginners{background:#4bab9d}a.button.courseCategory.professionals{background:#951f6d}.courseCategoryColumn{max-width:18vw;width:10vw !important}.courseDescriptionColumn{min-width:50vw;margin-bottom:2em}.coursePageBlock.banner.beginnersBanner{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/BEGINNERS-01.jpg)}.coursePageBlock.banner.developerBanner{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/DEVELOPERS-01.jpg)}.coursePageBlock.banner.professionalBanner{background:url(https://bci-static.s3.us-east-2.amazonaws.com/misc/coursesPortal/PROFESSIONALS-01.jpg)}@media screen and (max-width: 600px){.courseThumbnail{max-width:unset}.courseCategoryColumn{display:none}}@media only screen and ( min-width: 1300px ){}@media only screen and (min-width: 1300px){.spaceMaker{min-height:2em}.content-item-description.lesson-description{margin-top:14em}}@media screen and (max-width: 600px){.backToTopButton{display:none}span.missionStatement{width:100%}.downArrow{display:none}}.courseSummary{margin-left:1em;margin-right:1em;background:#d3d3d3b3;border-radius:0.5em;padding-bottom:1.5em;padding-top:0.5em}.courseSummary h3{font-size:1.5em}.courseSummary h5{color:black}.homePageBlock button.mc_signup{float:left}.homePageBlock input.mc_signup_input{float:left}.homePageBlock h3:hover{color:black !important}.white .downArrow{background:white !important}.downArrowLink.white i{color:#107079 !important}.homePageBlock .mc4wp-response{display:block;float:left;width:calc(100% - 3.5em);color:black;background:#ffffff5e;border-radius:0.25em;margin-top:1em}iframe#historyIFrame{height:calc(100vh - 5em);min-height:calc(100vh - 5em)}a.contactUsLink{padding-right:1em}a.contactUsLink:hover{color:#1073aa !important;text-decoration:none !important}@media only screen and (min-width: 1300px){span.missionStatement{display:none !important}.spaceMaker{min-height:2em}.content-item-description.lesson-description{margin-top:14em}}@media screen and (max-width: 600px){.backToTopButton{display:none}span.missionStatement{width:100%}.downArrow{display:none}.courseThumbnail{max-width:unset;min-width:unset;padding-right:unset}.courseDescription a.button{width:100%;text-align:center;font-size:1.05em;padding-right:0.5em;padding-left:0.5em;margin-top:0.5em}.courseCategoryColumn{display:none !important}.homePageBlock.tealBackground,.homePageBlock.purpleBackground,.homePageBlock.blueBackground{display:none}.differenceBetween{display:none}.homePageBlock.questions{display:none}}body{opacity:1 !important}span.missionStatement{display:block !important}</style><style>body,#content,.entry-content,.post-content,.page-content,.post-excerpt,.entry-summary,.entry-excerpt,.widget-area,.widget,.sidebar,#sidebar,footer,.footer,#footer,.site-footer{font-family:"Roboto"}#site-title, .site-title, #site-title a, .site-title a, .entry-title, .entry-title a,h1,h2,h3,h4,h5,h6,.widget-title{font-family:"Kanit"}button,input,select,textarea{font-family:"Kanit"}</style></head><body
class="lp_course-template-default single single-lp_course postid-1243 wp-custom-logo wp_theme-master learnpress learnpress-page group-blog singular has-cta-button has-description no-featured-posts header-overlay-light elementor-default course-item-popup viewing-course-item viewing-course-item-1626 course-item-lp_lesson"><div
id=page class=site>
<a
class="skip-link screen-reader-text" href=#content>Skip to content</a><header
id=masthead class=site-header role=banner><div
class=utility-container><ul
class=social_section_1info><li><a
href=https://www.facebook.com/TheBlockchainInstitute><i
class="fa fa-facebook fa- "></i></a></li><li><a
href=https://twitter.com/bchaininstitute><i
class="fa fa-twitter fa- "></i></a></li><li><a
href=https://www.linkedin.com/company/blockchain-institute-chi/ ><i
class="fa fa-linkedin fa- "></i></a></li><li><a
href=https://www.instagram.com/theblockchaininstitute/ ><i
class="fa fa-instagram fa- "></i></a></li></ul><form
role=search method=get class=search-form action=https://theblockchaininstitute.org/ >
<label>
<span
class=screen-reader-text>Search for:</span>
<input
type=search class=search-field
placeholder="Search &hellip;"
value name=s
title="Search for:">
<span
class=search-form-icon></span>
</label>
<input
type=submit class=search-submit
value=Search></form></div><div
class=branding-container><div
class=site-branding>
<a
href=https://theblockchaininstitute.org/ class=custom-logo-link rel=home><img
width=998 height=267 src=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-logo_color-2.jpg class=custom-logo alt="Blockchain Institute" srcset="https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-logo_color-2.jpg 998w, https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-logo_color-2-300x80.jpg 300w, https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-logo_color-2-768x205.jpg 768w" sizes="(max-width: 998px) 100vw, 998px"></a><p
class=site-title><a
href=https://theblockchaininstitute.org/ rel=home>Blockchain Institute</a></p></div><nav
id=site-navigation class=main-navigation role=navigation>
<button
class=menu-toggle aria-controls=top-menu aria-expanded=false>Menu</button><div
class=menu-main-container><ul
id=top-menu class=menu><li
id=menu-item-44 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44"><a
href=#>Services</a><ul
class=sub-menu><li
id=menu-item-15874 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15874"><a
href=https://theblockchaininstitute.org/events/ >Events</a></li><li
id=menu-item-13707 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13707"><a
href=/course-catalog/ >Education</a></li><li
id=menu-item-42 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"><a
href=https://theblockchaininstitute.org/sponsorship/ >Sponsorship</a></li></ul></li><li
id=menu-item-1973 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1973"><a
href=/courses/ >Courses</a><ul
class=sub-menu><li
id=menu-item-12834 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12834"><a
href=/beginners/ >Beginners</a></li><li
id=menu-item-12835 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12835"><a
href=/developers/ >Developers</a></li><li
id=menu-item-12836 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12836"><a
href=/professionals/ >Professionals</a></li></ul></li><li
id=menu-item-45 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45"><a
href=#>Resources</a><ul
class=sub-menu><li
id=menu-item-1569 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1569"><a
href=https://theblockchaininstitute.org/faq/ >FAQs</a></li><li
id=menu-item-69 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"><a
href=https://theblockchaininstitute.org/downloads/ >Downloads</a></li><li
id=menu-item-3361 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3361"><a
href=https://theblockchaininstitute.org/resources/ >Resources Page</a></li></ul></li><li
id=menu-item-46 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-46"><a
href=#>About</a><ul
class=sub-menu><li
id=menu-item-56 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><a
href=https://theblockchaininstitute.org/network/ >Network</a></li><li
id=menu-item-55 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"><a
href=https://theblockchaininstitute.org/team/ >Team</a></li><li
id=menu-item-49 class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"><a
href=https://theblockchaininstitute.org/contact-us/ >Contact Us</a></li></ul></li><li
id=menu-item-3093 class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3093"><a
target=_blank rel="noopener noreferrer" href=https://donations.theblockchaininstitute.org/ >Donate</a></li></ul></div></nav></div></header><div
id=content class=site-content><div
class="post-thumbnail page-thumbnail">
<img
width=1080 height=501 src=https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-1080x501.png class="attachment-ixion-featured-image size-ixion-featured-image wp-post-image" alt="Blockchain 101" srcset="https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-1080x501.png 1080w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-200x93.png 200w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-600x278.png 600w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-768x356.png 768w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-1024x475.png 1024w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/BC101-01-300x139.png 300w" sizes="(max-width: 1080px) 100vw, 1080px"></div><div
id=primary class=content-area><main
id=main class=site-main role=main><article
id=post-1243 class="post-1243 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-257 course"><div
class=entry-content><div
id=lp-single-course class=lp-single-course><nav
class=learn-press-breadcrumb itemprop=breadcrumb><a
href=https://theblockchaininstitute.org>Home</a>&nbsp;&#47;&nbsp;<a
href=https://theblockchaininstitute.org/courses-latest/ >Course Catalog</a>&nbsp;&#47;&nbsp;<a
href=https://theblockchaininstitute.org/learn/101/ >101</a>&nbsp;&#47;&nbsp;Blockchain 101</nav><div
id=learn-press-course class=course-summary> <script src=https://static.theblockchaininstitute.org/wp-includes/js/bci-login-lightbox.min.js defer></script> <div
class=course-curriculum id=learn-press-course-curriculum><div
class=curriculum-scrollable><ul
class=curriculum-sections><li
class=section id=section-introduction-to-the-blockchain-10
data-id=introduction-to-the-blockchain-10
data-section-id=10><div
class=section-header><div
class=section-left><h5 class="section-title">Introduction to the Blockchain</h5><p
class=section-desc>Blockchain Technology didn't just pop up overnight. How did we get here?</p></div></div><ul
class=section-content><li
class="course-item course-item-lp_lesson course-item-1626 current item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/introduction-to-the-blockchain-review/ >
<span
class=item-name>Introduction to the Blockchain</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1245 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/birth-of-digital-money/ >
<span
class=item-name>The Birth of Digital Money</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1613 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/satoshi-nakamoto/ >
<span
class=item-name>The Enigma: Satoshi Nakamoto</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2674 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/from-digital-currency-to-cryptocurrency/ >
<span
class=item-name>From Digital Currency to Cryptocurrency</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1258 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/byzantine-generals-problem/ >
<span
class=item-name>The Byzantine Generals Problem</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1256 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/what-is-a-blockchain/ >
<span
class=item-name>Properties of a Blockchain</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li></ul></li><li
class=section id=section-decentralization-and-mining-14
data-id=decentralization-and-mining-14
data-section-id=14><div
class=section-header><div
class=section-left><h5 class="section-title">Decentralization and Mining</h5></div></div><ul
class=section-content><li
class="course-item course-item-lp_lesson course-item-1266 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/centralization-vs-decentralization/ >
<span
class=item-name>Centralization vs Decentralization</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1862 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/peer-to-peer-networks/ >
<span
class=item-name>Peer-to-Peer Networks</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1264 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/how-are-blockchains-secure/ >
<span
class=item-name>How are Blockchains Secure?</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1446 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/public-key-cryptography/ >
<span
class=item-name>Asymmetric Encryption</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2724 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/the-differences-between-blockchains-and-cryptocurrency/ >
<span
class=item-name>Blockchains vs Cryptocurrency</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2717 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/what-is-cryptocurrency-mining/ >
<span
class=item-name>What is Cryptocurrency Mining?</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2361 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/51-attack/ >
<span
class=item-name>51% Attacks</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li></ul></li><li
class=section id=section-blockchain-use-cases-15
data-id=blockchain-use-cases-15
data-section-id=15><div
class=section-header><div
class=section-left><h5 class="section-title">Blockchain Use Cases</h5></div></div><ul
class=section-content><li
class="course-item course-item-lp_lesson course-item-2718 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/blockchain-in-action/ >
<span
class=item-name>Blockchain in Action</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2727 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/what-is-ethereum/ >
<span
class=item-name>What is Ethereum?</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-1448 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/applications-smartcontracts/ >
<span
class=item-name>Applications of Smart Contracts</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-2017 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/limitations-blockchains/ >
<span
class=item-name>Limitations of Blockchains</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li><li
class="course-item course-item-lp_lesson course-item-11361 item-free">
<a
class=section-item-link href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/conclusion/ >
<span
class=item-name>Conclusion</span><div
class=course-item-meta><i
class="fa item-meta course-item-status trans"></i></div>
</a></li></ul></li></ul></div></div><div
id=learn-press-content-item><div
id=course-item-content-header><div
class=course-item-search><form>
<input
type=text placeholder="Search item">
<button
type=button></button></form></div><h2 class="course-title">
<a
href=/courses/ ><img
src=https://static.theblockchaininstitute.org/wp-content/uploads/2018/10/cropped-logo_color-2.jpg class=small></a></h2><a
class=toggle-content-item href></a><form
class="lp-form form-button lp-button-back" method=post action=https://theblockchaininstitute.org/courses/blockchain-101/ >
<button
class="lp-button button">Back to Course</button></form></div><div
class=content-item-scrollable><div
class=content-item-wrap><div
class=content-item-summary><div
class=lessonHeader>
<img
src=https://s3.us-east-2.amazonaws.com/bci-static/misc/Coursepage_HeaderBG.png><div
class=overlay><h3>
<a
href=https://theblockchaininstitute.org/courses/blockchain-101/>Blockchain 101</a></h3><h1>Introduction to the Blockchain</h1></div></div><div
class="content-item-description lesson-description"><div
style="text-align: center;"><p><iframe
width=1024 height=475 src="https://www.youtube.com/embed/8ZeM8H1uedU?rel=0" frameborder=0 allowfullscreen></iframe></p></div><p><span
class=openingParagraph>To understand the potential of blockchain technology, it’s helpful to understand the context of this wave of innovation by looking at the first blockchain, Bitcoin, and its first use-case, digital money.</span></p><p><span
style="font-weight: 400;">The concepts and ideas that would lead to blockchain and cryptocurrency date back to the early 1980s. The next 25 years saw the rise and fall of many digital cash projects and culminated in Satoshi Nakamoto creating Bitcoin, the first blockchain. Nakamoto solved the problems faced by previous failed digital cash projects, including maintaining a reliable peer-to-peer network and preventing against counterfeit. Satoshi Nakamoto’s creation was a transparent, secure ledger that could not be compromised; once any information is added to the chain, it cannot be removed. </span></p><p><img
class="aligncenter wp-image-4271 size-full" src=https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01.png alt width=9037 height=4188 srcset="https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01.png 9037w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01-200x93.png 200w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01-600x278.png 600w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01-768x356.png 768w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01-1024x475.png 1024w, https://static.theblockchaininstitute.org/wp-content/uploads/2019/02/IntroductiontotheBlockchain_a-01-1080x501.png 1080w" sizes="(max-width: 9037px) 100vw, 9037px"></p><p><span
style="font-weight: 400;">The architecture of a blockchain allows peers to interact in a trustless system without the aid of an intermediary. Blockchains are able to do this by having the network members reach consensus, a computationally-intensive process secured by cryptography. While there are many apparent benefits to blockchains, the technology is still relatively young and is yet to meet the full demand faced by networks today. Despite these unknowns, there is still a lot of intrigue over the potential impact of blockchain technologies.</span></p><p>&nbsp;</p><p>&nbsp;</p></div></div><div
class=course-item-nav><div
class=next>
<span>Next</span>
<a
href=https://theblockchaininstitute.org/courses/blockchain-101/lessons/birth-of-digital-money/ >
The Birth of Digital Money </a></div></div></div></div><div
id=course-item-content-footer></div></div></div></div></div><footer
class=entry-footer></footer></article></main></div></div><footer
id=colophon class=site-footer role=contentinfo><div
class="footer-widgets clear"><div
class=widget-areas><div
class=widget-area><section
id=custom_html-2 class="widget_text widget widget_custom_html"><div
class="textwidget custom-html-widget"><h3 class="footerHeader">
ABOUT US</h3>
<span
class=footerText>
The Blockchain Institute was founded to promote the adoption, development, and use of blockchain technology. <a
href=/contact/ target=_blank class=contactUsLink rel="noopener noreferrer">Contact Us</a>
</span><ul
class=social_section_1info><li><a
href=https://www.facebook.com/TheBlockchainInstitute><i
class="fa fa-facebook fa- " ></i></a></li><li><a
href=https://twitter.com/bchaininstitute><i
class="fa fa-twitter fa- " ></i></a></li><li><a
href=https://www.linkedin.com/company/blockchain-institute-chi/ ><i
class="fa fa-linkedin fa- " ></i></a></li><li><a
href=https://www.instagram.com/theblockchaininstitute/ ><i
class="fa fa-instagram fa- " ></i></a></li></ul>
<span
class="footerText copyrightMessage">Copyright 2019 Blockchain Institute. All Rights Reserved.</span></div></section></div><div
class=widget-area><section
id=custom_html-3 class="widget_text widget widget_custom_html"><div
class="textwidget custom-html-widget"><h3 class="footerHeader">
SUBSCRIBE</h3>
<span
class=footerText>
Stay in the loop with our monthly newsletter on all things blockchain!
</span> <script>(function() {
	if ( ! window.mc4wp) {
		window.mc4wp = {
			listeners: [],
			forms    : {
				on: function (event, callback) {
					window.mc4wp.listeners.push(
						{
							event   : event,
							callback: callback
						}
					);
				}
			}
		}
	}
})();</script><form
id=mc4wp-form-1 class="mc4wp-form mc4wp-form-114" method=post data-id=114 data-name ><div
class=mc4wp-form-fields><input
type=email name=EMAIL placeholder="Your email address" class=mc_signup_input required><button
class=mc_signup type=submit value="Sign up"><i
class="fa fa-envelope fa- " ></i></button></div><label
style="display: none !important;">Leave this field empty if you're human: <input
type=text name=_mc4wp_honeypot value tabindex=-1 autocomplete=off></label><input
type=hidden name=_mc4wp_timestamp value=1582647860><input
type=hidden name=_mc4wp_form_id value=114><input
type=hidden name=_mc4wp_form_element_id value=mc4wp-form-1><div
class=mc4wp-response></div></form>
<br>
<a
href=/press-releases target=_blank class=contactUsLink rel="noopener noreferrer">Press Releases</a> <a
href=/course-catalog target=_blank class=contactUsLink rel="noopener noreferrer">Course Catalog</a> <a
href=/team target=_blank class=contactUsLink rel="noopener noreferrer">About</a> <a
href=/contact-us target=_blank class=contactUsLink rel="noopener noreferrer">Contact</a></div></section></div></div></div></footer></div> <script>(function() {function addEventListener(element,event,handler) {
	if (element.addEventListener) {
		element.addEventListener( event,handler, false );
	} else if (element.attachEvent) {
		element.attachEvent( 'on' + event,handler );
	}
}
function maybePrefixUrlField() {
	if (this.value.trim() !== '' && this.value.indexOf( 'http' ) !== 0) {
		this.value = "http://" + this.value;
	}
}

var urlFields = document.querySelectorAll( '.mc4wp-form input[type="url"]' );
if ( urlFields && urlFields.length > 0 ) {
	for ( var j = 0; j < urlFields.length; j++ ) {
		addEventListener( urlFields[j],'blur',maybePrefixUrlField );
	}
}
/* test if browser supports date fields */
var testInput = document.createElement( 'input' );
testInput.setAttribute( 'type', 'date' );
if ( testInput.type !== 'date') {

	/* add placeholder & pattern to all date fields */
	var dateFields = document.querySelectorAll( '.mc4wp-form input[type="date"]' );
	for (var i = 0; i < dateFields.length; i++) {
		if ( ! dateFields[i].placeholder) {
			dateFields[i].placeholder = 'YYYY-MM-DD';
		}
		if ( ! dateFields[i].pattern) {
			dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
		}
	}
}
})();</script><script>var wpcf7 = {"apiSettings":{"root":"https:\/\/theblockchaininstitute.org\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"cached":"1"};</script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/contact-form-7/includes/js/scripts.js.gzip?ver=5.1.6'></script> <script src='https://static.theblockchaininstitute.org/wp-includes/js/comment-reply.min.js.gzip?ver=5.2.5'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/surbma-smooth-scroll/js/jquery.scrollTo.min.js.gzip?ver=2.1.2'></script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/surbma-smooth-scroll/js/jquery.localScroll.min.js.gzip?ver=2.0.0'></script> <script src='https://www.google.com/recaptcha/api.js?render=6LdepIYUAAAAAK7MsGMWTBihzQPovqk9ZKMI65Ip&#038;ver=3.0'></script> <script src='https://static.theblockchaininstitute.org/wp-content/themes/wp_theme-master/assets/js/navigation.js.gzip?ver=20151215'></script> <script src='https://static.theblockchaininstitute.org/wp-content/themes/wp_theme-master/assets/js/skip-link-focus-fix.js.gzip?ver=20151215'></script> <script src='https://static.theblockchaininstitute.org/wp-includes/js/wp-embed.min.js.gzip?ver=5.2.5'></script> <script>var mc4wp_forms_config = [];</script> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/mailchimp-for-wp/assets/js/forms-api.min.js.gzip?ver=4.7.4'></script> <!--[if lte IE 9]> <script src='https://static.theblockchaininstitute.org/wp-content/plugins/mailchimp-for-wp/assets/js/third-party/placeholders.min.js.gzip?ver=4.7.4'></script> <![endif]--> <script>( function( grecaptcha, sitekey, actions ) {

	var wpcf7recaptcha = {

		execute: function( action ) {
			grecaptcha.execute(
				sitekey,
				{ action: action }
			).then( function( token ) {
				var forms = document.getElementsByTagName( 'form' );

				for ( var i = 0; i < forms.length; i++ ) {
					var fields = forms[ i ].getElementsByTagName( 'input' );

					for ( var j = 0; j < fields.length; j++ ) {
						var field = fields[ j ];

						if ( 'g-recaptcha-response' === field.getAttribute( 'name' ) ) {
							field.setAttribute( 'value', token );
							break;
						}
					}
				}
			} );
		},

		executeOnHomepage: function() {
			wpcf7recaptcha.execute( actions[ 'homepage' ] );
		},

		executeOnContactform: function() {
			wpcf7recaptcha.execute( actions[ 'contactform' ] );
		},

	};

	grecaptcha.ready(
		wpcf7recaptcha.executeOnHomepage
	);

	document.addEventListener( 'change',
		wpcf7recaptcha.executeOnContactform, false
	);

	document.addEventListener( 'wpcf7submit',
		wpcf7recaptcha.executeOnHomepage, false
	);

} )(
	grecaptcha,
	'6LdepIYUAAAAAK7MsGMWTBihzQPovqk9ZKMI65Ip',
	{"homepage":"homepage","contactform":"contactform"}
);</script> </body></html> </span>
