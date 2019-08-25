// ==UserScript==
// @name         The Rating Rainbow
// @namespace    https://christiansilvermoon.github.io/UserScripts/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAVlJREFUWIXFl81xgzAQhZ8YysgxhaSDNJDUgqnFueXkDtxBGvDRuaSJzcFSWJC0b8EyeTPMYGal97E/YhwACB6n4AkQ4NTQ8xPAFcDZBdFPtz8NIZJOAF7Fgujn5t+NAb4oRDfdtjZfQpR7rXusOYfostidIXYEKEPsDJBD9GZsTTLkz8JYCDzQneJBRAPrxhnIO24HkUfnFRnwmAOAHCOETz4AT8p1jBwrJcnFm9Bb7zBOF1uvtL4Jk8FyY228jJGhmhEbwDIp/V4qjKY5B2DSgDUTArkdQG/snZCmAO6xtEvADyLWB8zcXHfY8C3wvHmKSaYGNAcoLS5ByDBdbL2SrwfSODEIp6mWvwTeTdf0CNZOQe0U3GC8DeBOMx9ArbbsG1DLChnFeA68AXjmuE11AfChM3CZQ1h1tt62NDF67Z9XfAxAgBcAT272Nrr9f+znD/ZXzMD/6Rf2NngPzEexFgAAAABJRU5ErkJggg==
// @version      19.8.25
// @description  Adds rating-based color coding to thumbnails & post pages. See https://derpibooru.org/tags/ratings for details.
// @include      https://derpibooru.org/*
// @grant        none
// ==/UserScript==

(function() {

    //Edit ONLY the color codes listed here for custom colors.
    const COLORS = {
        "safe"         : "#418dd9",
        "questionable" : "#4aa158",
        "suggestive"   : "#b157b7",
        "explicit"     : "#d45460",
        "grotesque"    : "#703800",
        "semigrim"     : "#b9b541",
        "grimdark"     : "#d49b39"
    }

    /* DEFAULT COLORS
        const COLORS = {
        "safe"         : "#418dd9",
        "questionable" : "#4aa158",
        "suggestive"   : "#b157b7",
        "explicit"     : "#d45460",
        "grotesque"    : "#703800",
        "semigrim"     : "#b9b541",
        "grimdark"     : "#d49b39"
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
    if ( window.location.href.match( new RegExp('derpibooru.org/[0-9]') ) != null ) {
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

    //The Ratings Page
    if ( window.location.href == "https://derpibooru.org/tags/ratings" ) {
        let table = document.getElementsByTagName("table")[0];
        let Links = table.getElementsByTagName("a");
        let message = document.createElement("span");

        message.innerHTML = "<br/>Tags are Color coded by <b>The Rating Rainbow</b>, a custom UserScript.<br/>You can edit the script to customize the rating colors.<br/><br/>If you feel your copy is out of date, see <a href='https://github.com/ChristianSilvermoon/UserScripts'>The GitHub Page</a>.";
        table.parentElement.appendChild(message);

        for ( link of Links ) {
            switch( link.innerHTML ) {
                case "safe":
                    link.style.borderBottom = `6px solid ${COLORS.safe}`;
                    break;
                case "questionable":
                    link.style.borderBottom = `6px solid ${COLORS.questionable}`;
                    break;
                case "suggestive":
                    link.style.borderBottom = `6px solid ${COLORS.suggestive}`;
                    break;
                case "explicit":
                    link.style.borderBottom = `6px solid ${COLORS.explicit}`;
                    break;
                case "grotesque":
                    link.style.borderBottom = `6px solid ${COLORS.grotesque}`;
                    break;
                case "semi-grimdark":
                    link.style.borderBottom = `6px solid ${COLORS.semigrim}`;
                    break;
                case "grimdark":
                    link.style.borderBottom = `6px solid ${COLORS.grimdark}`;
                    break;
            }
        }
    }
})();
