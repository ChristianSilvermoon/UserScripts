// ==UserScript==
// @name        Derpibooru Header Search+
// @namespace   https://christiansilvermoon.github.io/UserScripts/
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAVlJREFUWIXFl81xgzAQhZ8YysgxhaSDNJDUgqnFueXkDtxBGvDRuaSJzcFSWJC0b8EyeTPMYGal97E/YhwACB6n4AkQ4NTQ8xPAFcDZBdFPtz8NIZJOAF7Fgujn5t+NAb4oRDfdtjZfQpR7rXusOYfostidIXYEKEPsDJBD9GZsTTLkz8JYCDzQneJBRAPrxhnIO24HkUfnFRnwmAOAHCOETz4AT8p1jBwrJcnFm9Bb7zBOF1uvtL4Jk8FyY228jJGhmhEbwDIp/V4qjKY5B2DSgDUTArkdQG/snZCmAO6xtEvADyLWB8zcXHfY8C3wvHmKSaYGNAcoLS5ByDBdbL2SrwfSODEIp6mWvwTeTdf0CNZOQe0U3GC8DeBOMx9ArbbsG1DLChnFeA68AXjmuE11AfChM3CZQ1h1tt62NDF67Z9XfAxAgBcAT272Nrr9f+znD/ZXzMD/6Rf2NngPzEexFgAAAABJRU5ErkJggg==
// @description Improves Derpibooru's Search Header with features from the search box at the bottom of the page.
// @version     18.30.7
// @grant       none
// @include     https://derpibooru.org*
// ==/UserScript==

function getParameterMap() {
  const url      = window.location.href;
  let parameters = url.split("?");
  parameters.shift(); //Get rid of URL
  parameters     = parameters.join("?"); //Remerge Array
  parameters     = parameters.split("&"); //Split Array at parameter seperator
  
  let map = new Map();
  parameters.forEach( item => {
    let param = item.split("=");
    map.set(param[0], param[1]);
  });
  
  return map;
}

function createOption(value, display) {
  let optionElement       = document.createElement("option");
  optionElement.value     = value;
  optionElement.innerHTML = display;
  return optionElement;
}

function feelingPoniToggle(element) {
  if ( element.name == "random_image" ) {
    element.name = "";
    element.style.filter = "";
  } else {
    element.name = "random_image";
    element.click();
  }
  console.log(element.name);
}


const Parameters = getParameterMap();
const sfOpt = Parameters.has("sf")? Parameters.get("sf") : "created_at";
const sdOpt = Parameters.has("sd")? Parameters.get("sd") : "desc";


//Native Elements
const searchBar    = document.querySelector(".header__search");
const searchBtn    = document.querySelector(".header__search__button");

searchBtn.addEventListener("contextmenu", event => { 
  feelingPoniToggle(searchBtn);
  event.preventDefault()
});

searchBtn.title    = "L Click: Search\nR Click: I'm Feeling Poni"

//Custom Elements
const sfBox        = document.createElement("select");
sfBox.id           = "cSearchSF";
sfBox.name			 	 = "sf";
sfBox.setAttribute("class", "input input--separate-left header__input");

const sfOptGroup   = document.createElement("optgroup");
sfOptGroup.label   = "Sort Method";
sfBox.title        = "Sort Method";
sfBox.appendChild(sfOptGroup);

sfOptGroup.appendChild( createOption("created_at","Upload Date") );
sfOptGroup.appendChild( createOption("score","Score") );
sfOptGroup.appendChild( createOption("wilson","Wilson Score") );
sfOptGroup.appendChild( createOption("relevance","Relevance") );
sfOptGroup.appendChild( createOption("width","Width") );
sfOptGroup.appendChild( createOption("height","Height") );
sfOptGroup.appendChild( createOption("comments","Comments") );
sfOptGroup.appendChild( createOption("random","Random") );

sfBox.value = sfOpt;

const sdBox        = document.createElement("select");
sdBox.id           = "cSearchSD";
sdBox.name			 	 = "sd";
sdBox.setAttribute("class", "input input--separate-left header__input");

const sdOptGroup   = document.createElement("optgroup");
sdOptGroup.label   = "Sort Order";
sdBox.title        = "Sort Order";
sdBox.appendChild(sdOptGroup);

sdOptGroup.appendChild( createOption("desc","Descending") );
sdOptGroup.appendChild( createOption("asc","Ascending") );


sdBox.value = sdOpt;


//Add Customs to Page
searchBar.appendChild(sfBox);
searchBar.appendChild(sdBox);

