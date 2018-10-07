// ==UserScript==
// @name         GitHub projects - WIP limit / column red
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  Glow "in progress" column red when WIP limit reached
// @author       Andrew
// @match        https://github.com/orgs/WildfireInternet/projects/1*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var wipLimit = 2;
    var wipColumId = 2785096;

    var inProgressCol = document.querySelector('#column-' + wipColumId);
    var counterEl = inProgressCol.querySelector('.Counter');

    function checkWIPLimit() {

        var count = counterEl.innerText;
        inProgressCol.style.background = count > wipLimit ? 'lightcoral' : '';

    }

    checkWIPLimit();
    counterEl.addEventListener('DOMSubtreeModified', checkWIPLimit, false);

})();