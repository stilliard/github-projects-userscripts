// ==UserScript==
// @name         GitHub projects - highlight my user
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.2
// @description  background colour change for my user's tasks ;D
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var myUsername = "stilliard"; // Replace "stilliard" with your username

    var style = document.createElement('style');
    style.innerHTML = 'article[data-card-assignee*="' + myUsername + '"] { background-color: #2c2f29 !important; }';
    document.body.appendChild(style);

})();
