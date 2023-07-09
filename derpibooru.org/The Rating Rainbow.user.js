// ==UserScript==
// @name         The Rating Rainbow
// @version      23.7.9
// @author       Christian "Krissy" Silvermoon
// @description  Adds Post Rating-based color coding to thumbnails & post pages. See https://derpibooru.org/pages/tags for details.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAVlJREFUWIXFl81xgzAQhZ8YysgxhaSDNJDUgqnFueXkDtxBGvDRuaSJzcFSWJC0b8EyeTPMYGal97E/YhwACB6n4AkQ4NTQ8xPAFcDZBdFPtz8NIZJOAF7Fgujn5t+NAb4oRDfdtjZfQpR7rXusOYfostidIXYEKEPsDJBD9GZsTTLkz8JYCDzQneJBRAPrxhnIO24HkUfnFRnwmAOAHCOETz4AT8p1jBwrJcnFm9Bb7zBOF1uvtL4Jk8FyY228jJGhmhEbwDIp/V4qjKY5B2DSgDUTArkdQG/snZCmAO6xtEvADyLWB8zcXHfY8C3wvHmKSaYGNAcoLS5ByDBdbL2SrwfSODEIp6mWvwTeTdf0CNZOQe0U3GC8DeBOMx9ArbbsG1DLChnFeA68AXjmuE11AfChM3CZQ1h1tt62NDF67Z9XfAxAgBcAT272Nrr9f+znD/ZXzMD/6Rf2NngPzEexFgAAAABJRU5ErkJggg==

// @namespace    https://christiansilvermoon.github.io/UserScripts/
// @homepageURL  https://github.com/ChristianSilvermoon/UserScripts
// @updateURL    https://github.com/ChristianSilvermoon/UserScripts/raw/master/derpibooru.org/The%20Rating%20Rainbow.user.js
// @downloadaURL https://github.com/ChristianSilvermoon/UserScripts/raw/master/derpibooru.org/The%20Rating%20Rainbow.user.js

// @include      /^https://(www\.|)(derpi|trixie|fur|twi)booru\.org/
// @grant        none
// ==/UserScript==

(function() {

    //Edit ONLY the color codes listed here for custom colors.
    const COLORS = {
        "safe"         : "#418dd9", // Blue
        "questionable" : "#4aa158", // Green
        "suggestive"   : "#b157b7", // Purple
        "explicit"     : "#d45460", // Red
        "grotesque"    : "#703800", // Brown
        "semigrim"     : "#b9b541", // Yellow
        "grimdark"     : "#d49b39"  // Orange
    }

    /* DEFAULT COLORS for reference purposes
    const COLORS = {
        "safe"         : "#418dd9", // Blue
        "questionable" : "#4aa158", // Green
        "suggestive"   : "#b157b7", // Purple
        "explicit"     : "#d45460", // Red
        "grotesque"    : "#703800", // Brown
        "semigrim"     : "#b9b541", // Yellow
        "grimdark"     : "#d49b39"  // Orange
    }
    */

    let posts = document.getElementsByClassName("media-box");

    //All pages with post objects (Thumbnails)
    for ( post of posts ) {
        let header = post.querySelector(".media-box__header");
        let tags = post.querySelector(".image-container").getAttribute("data-image-tag-aliases").split(", ");

        if ( tags.includes("safe") ) {
            header.style.borderBottom = `6px solid ${COLORS.safe}`;
        }

        if ( tags.includes("questionable") ) {
            header.style.borderBottom = `6px solid ${COLORS.questionable}`;
        }

        if ( tags.includes("suggestive") ) {
            header.style.borderBottom = `6px solid ${COLORS.suggestive}`;

        }

        if ( tags.includes("explicit") ) {
            header.style.borderBottom = `6px solid ${COLORS.explicit}`;
        }

        if ( tags.includes("grotesque") ) {
            header.style.borderBottom = `6px solid ${COLORS.grotesque}`;
        }

        if ( tags.includes("semi-grimdark") ) {
            header.style.borderBottom = `6px solid ${COLORS.semigrim}`;
        }

        if ( tags.includes("grimdark") ) {
            header.style.borderBottom = `6px solid ${COLORS.grimdark}`;
        }
    }

    //Post Specific Page
    if ( window.location.href.match( new RegExp('derpibooru.org/(images/|)[0-9]') ) != null ) {
        let metabar = document.getElementsByClassName("image-metabar")[1];
        let tagElements = document.getElementsByClassName("tag__name");
        let tags = [];

        for ( tagElement of tagElements ) {
            tags.push( tagElement.innerHTML );
        }

        console.log(tags);

        if ( tags.includes("safe") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.safe}`;

        }

        if ( tags.includes("questionable") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.questionable}`;
        }

        if ( tags.includes("suggestive") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.suggestive}`;

        }

        if ( tags.includes("explicit") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.explicit}`;
        }

        if ( tags.includes("grotesque") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.grotesque}`;
        }

        if ( tags.includes("semi-grimdark") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.semigrim}`;
        }

        if ( tags.includes("grimdark") ) {
            metabar.style.borderBottom = `6px solid ${COLORS.grimdark}`;
        }
    }

    //New Ratings Page
    if ( window.location.href.match( new RegExp('/pages/tags') ) != null ) {
      let Tags = document.getElementsByClassName("tag");
      for ( tag of Tags ) {
        switch( tag.innerText.toLowerCase() ) {
          case "safe":
            tag.style.border = `2px solid ${COLORS.safe}`;
            tag.style.color  = COLORS.safe;
            break;
          case "questionable":
            tag.style.border = `2px solid ${COLORS.questionable}`;
            tag.style.color  = COLORS.questionable;
            break;
          case "suggestive":
            tag.style.border = `2px solid ${COLORS.suggestive}`;
            tag.style.color  = COLORS.suggestive;
            break;
          case "explicit":
            tag.style.border = `2px solid ${COLORS.explicit}`;
            tag.style.color  = COLORS.explicit;
            break;
          case "grotesque":
            tag.style.border = `2px solid ${COLORS.grotesque}`;
            tag.style.color  = COLORS.grotesque;
            break;
          case "semi-grimdark":
            tag.style.border = `2px solid ${COLORS.semigrim}`;
            tag.style.color  = COLORS.semigrim;
            break;
          case "grimdark":
            tag.style.border = `2px solid ${COLORS.grimdark}`;
            tag.style.color  = COLORS.grimdark;
            break;
        }
      }
    }

    // Colorize Ratings Tags on Images As Well
   if ( window.location.href.match( new RegExp('/(images|)/[0-9]') ) != null ) {
      let Tags = document.getElementsByClassName("tag dropdown");
      for ( tag of Tags ) {
        switch( tag.getAttribute("data-tag-name") ) {
          case "safe":
            tag.style.border = `2px solid ${COLORS.safe}`;
            tag.style.color  = COLORS.safe;
            break;
          case "questionable":
            tag.style.border = `2px solid ${COLORS.questionable}`;
            tag.style.color  = COLORS.questionable;
            break;
          case "suggestive":
            tag.style.border = `2px solid ${COLORS.suggestive}`;
            tag.style.color  = COLORS.suggestive;
            break;
          case "explicit":
            tag.style.border = `2px solid ${COLORS.explicit}`;
            tag.style.color  = COLORS.explicit;
            break;
          case "grotesque":
            tag.style.border = `2px solid ${COLORS.grotesque}`;
            tag.style.color  = COLORS.grotesque;
            break;
          case "semi-grimdark":
            tag.style.border = `2px solid ${COLORS.semigrim}`;
            tag.style.color  = COLORS.semigrim;
            break;
          case "grimdark":
            tag.style.border = `2px solid ${COLORS.grimdark}`;
            tag.style.color  = COLORS.grimdark;
            break;
        }
      }
    }
})();
