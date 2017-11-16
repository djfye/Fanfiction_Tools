// ==UserScript==
// @name          Fanfiction Tools
// @author        Ewino
// @version       1.7.2
// @description   Enhances fanfiction.net.
// @icon          https://github.com/djfye/Fanfiction_Tools/raw/master/favicon_2010_iphone.png
// @namespace     http://userscripts.org/scripts/show/102342
// @include       /^https?://(www\.)?fanfiction\.net/.*$/
// @include       /^https?://(www\.)?fictionpress.com/.*$/
// @require       https://code.jquery.com/jquery-3.2.1.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.2.6/jquery.minicolors.min.js
// @require       https://github.com/tuupola/jquery_lazyload/raw/2.x/lazyload.min.js
// @resource      miniColorsCss https://cdnjs.cloudflare.com/ajax/libs/jquery-minicolors/2.2.6/jquery.minicolors.css
// @updateURL     https://github.com/djfye/Fanfiction_Tools/raw/master/Fanfiction_Tools.meta.js
// @downloadURL   https://github.com/djfye/Fanfiction_Tools/raw/master/Fanfiction_Tools.user.js
// @updateVersion 5
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_addStyle
// @history       1.7.2 Small fixes for site changes (more time formatting and pages moved to https)
// @history       1.7 Removed the "no-copy" limitation, Fixed FF.net color problems (extra-contrasted buttons and mismatched backgrounds), adjusted for new date formats (thanks phelougu!), small changes in chapter separators.
// @history       1.62 Tweaked the autoloading feature a bit. So now it works and is more precise. Also changed the text and buttons color on dark backgrounds
// @history       1.6 Added color choosers. Now you can customize the date and word-mark colors (i.e. to work better with the dark theme)
// @history       1.55 Some style changes (changed the chapter titles/separators), Made the combineReview and shortenFavsFollows toggles work (thanks phelougu!)
// @history       1.5 Changes to accomodate to ff.net's structure and style changes (yay! no more annoying menus!). If you find a feature that doesn't work for you, please let me know.
// @history       1.4 Introduced language filtering, shortened the new favs/follows line, and started using GM's built-in updater.
// @history       1.39 A new fix for the site changes. Thanks afoongwl!
// @history       1.38 No major update yet. Adapting to the site's new layout.
// @history       1.37 Added the average update interval.
// @history       1.36 Fixed a bug in Firefox 3.6 where the menu would not open
// @history       1.35 Fixed a bug (following a site update) where marking information in several lists (like a user's favorite stories tab) didn't work.
// @history       1.3 Added options to auto-close menus only on click, and not hide the chapter navigator (also fixed a small bug with list auto-loading)
// @history       1.2 Added an options window and fixed a small bug.
// @history       1.1 Fixed a bug with updating the url-hashes.
// @history       1.05 FF.net introduced "Share" links in the beginning of each chapter, which broke the auto-loading feature. This fixes it.
// @history       1.0 First version. Rewritten from "Power Fanfiction.net" by Ultimer (http://userscripts.org/scripts/show/61979)
// ==/UserScript==
