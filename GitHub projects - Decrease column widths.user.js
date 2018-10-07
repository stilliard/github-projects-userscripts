// ==UserScript==
// @name         GitHub projects - Decrease column widths
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  By default the column widths on project boards on github are too big, this decreases them a little
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = '.project-column { max-width: 300px; min-width: 300px; }';
    document.body.appendChild(style);

})();