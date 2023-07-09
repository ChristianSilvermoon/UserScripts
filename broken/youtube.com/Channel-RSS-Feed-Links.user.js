// ==UserScript==
// @name     			Youtube Channel RSS Feed Links
// @description		Adds RSS Feed button to pages
// @namespace			https://christiansilvermoon.github.io/UserScripts/
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAVlJREFUWIXFl81xgzAQhZ8YysgxhaSDNJDUgqnFueXkDtxBGvDRuaSJzcFSWJC0b8EyeTPMYGal97E/YhwACB6n4AkQ4NTQ8xPAFcDZBdFPtz8NIZJOAF7Fgujn5t+NAb4oRDfdtjZfQpR7rXusOYfostidIXYEKEPsDJBD9GZsTTLkz8JYCDzQneJBRAPrxhnIO24HkUfnFRnwmAOAHCOETz4AT8p1jBwrJcnFm9Bb7zBOF1uvtL4Jk8FyY228jJGhmhEbwDIp/V4qjKY5B2DSgDUTArkdQG/snZCmAO6xtEvADyLWB8zcXHfY8C3wvHmKSaYGNAcoLS5ByDBdbL2SrwfSODEIp6mWvwTeTdf0CNZOQe0U3GC8DeBOMx9ArbbsG1DLChnFeA68AXjmuE11AfChM3CZQ1h1tt62NDF67Z9XfAxAgBcAT272Nrr9f+znD/ZXzMD/6Rf2NngPzEexFgAAAABJRU5ErkJggg==
// @version  			18.12.2
// @grant    			none
// @include				https://www.youtube.com/channel/*
// ==/UserScript==

if ( !document.getElementById("RSSButton") ) {

  const URL_Start					= `${window.location.protocol}//${window.location.hostname}/channel/`
  const channelID					= window.location.href.split(URL_Start)[1];
  const RSS_URL						= `https://www.youtube.com/feeds/videos.xml?channel_id=${channelID}`;


  const ButtonArea				= document.getElementById("other-buttons");
	const RSSButton 				= document.createElement("paper-button");
	RSSButton.id						= "RSSButton";
  RSSButton.innerHTML			= "RSS Feed";

  [
    ["aria-label","RSS Feed"],
    ["role","button"],
    ["aria-disabled","false"],
    ["class","style-scope ytd-subscribe-button-renderer"],
    ["title","Open Channel's RSS Feed in new tab."],
    ["onclick", `window.open('${RSS_URL}','_blank')`]
  ].forEach( item => { RSSButton.setAttribute(item[0],item[1]) });

  ButtonArea.appendChild(RSSButton);
}
