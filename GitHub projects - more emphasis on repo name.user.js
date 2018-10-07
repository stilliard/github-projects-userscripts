// ==UserScript==
// @name         GitHub projects - more emphasis on repo name
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  repo names are tiny by default and shows the opener of the issue but that's not of much use so we remove it and replace with a bigger bolder repo name
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = '.js-project-issue-details-container .text-gray.d-block { font-size: 14px; font-weight: bold; font-family: monospace; overflow: hidden; height: 25px; position: absolute; top: 6px; }'; // font improvements & move to top
    style.innerHTML += ' .js-project-card-issue-link { margin-top: 23px; }'; // push down under the repo name now positioned to the top
    style.innerHTML += ' .js-issue-number { font-weight: normal; }';
    style.innerHTML += ' .js-issue-number:after { content: ""; display: block; }'; // hide added by area by pushing it out of view
    style.innerHTML += ' [data-card-type=\'\["note"\]\'] small.text-gray-light { display:none; }'; // also hide note added by line
    document.body.appendChild(style);

})();