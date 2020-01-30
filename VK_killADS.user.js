// ==UserScript==
// @name         VK_killADS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://vk.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var ads = document.querySelector('#ads_left');
    if (ads) {
        ads.remove();}
})();