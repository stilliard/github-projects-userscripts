// ==UserScript==
// @name         GitHub projects - focus on clicked card
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  focuses out the rest of the page when a cards sidebar info is showing
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // fade opacity of other content like a modal
    var style = document.createElement('style');
    style.innerHTML = '.hide-sm ~ .project-columns { opacity: .5; }';
    style.innerHTML += ' .js-project-card-details-pane { width: 560px !important; }';
    document.body.appendChild(style);

    // helper to simulate click
    function clickEl(el) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('click', true, false);
        el.dispatchEvent(event);
    }

    // delay helper, setTimeout but sweeter promise syntax ;)
    function delay(seconds) {
        let promise = new Promise(resolve => setTimeout(resolve, seconds));
        return promise;
    }

    // helper to close card info
    function closeCardInfo() {
        var el = document.querySelector('.js-project-card-details .js-hide-project-card-details');
        if (el && el.offsetParent) {
            delay(500).then(() => clickEl(el));
        }
    }

    // bind ESC to close card info
    document.body.addEventListener('keydown', (event) => {
        if (event.key == 'Escape' || event.key == 'Esc') {
            closeCardInfo();
        }
    });

    // also bind click to close card info
    // ~~~~~~
    // TODO: revisit this, i'm not happy that it's bound to EVERY click atm, not the most performant way of doing this!
    // ~~~~~~
    document.body.addEventListener('click', (event) => {
        var els = document.querySelectorAll('.hide-sm ~ .project-columns');
        if (els && els.length && els[0].contains(event.target)) {
            closeCardInfo();
        }
    });

})();


