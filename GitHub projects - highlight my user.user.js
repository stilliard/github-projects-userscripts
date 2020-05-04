// ==UserScript==
// @name         GitHub projects - highlight my user
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  background colour change for my user's tasks ;D
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = 'article[data-card-assignee="\\[\\"stilliard\\"\\]"] { background-color: #e3f9d4 !important; }';
    document.body.appendChild(style);

})();
