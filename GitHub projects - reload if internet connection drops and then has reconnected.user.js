// ==UserScript==
// @name         GitHub projects - reload if internet connection drops and then has reconnected
// @namespace    https://www.wildfireinternet.co.uk/
// @version      0.1
// @description  Atm if it drops and comes back the websocket connections die
// @author       Andrew
// @match        https://github.com/*/*/projects/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('online', function () {
        console.log('Connection lost but is now back, reloading page to bring back websockets!');
        window.location.reload();
    });

})();