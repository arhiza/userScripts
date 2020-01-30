// ==UserScript==
// @name         DuoStickLeague
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duolingo.com/*
// @grant        none
// ==/UserScript==

var stick_league = function()
{
    if (window.location == "https://www.duolingo.com/learn") {
        var block = document.querySelector('h2'); // 'div > div > div > h2'
        if ((block.innerHTML).includes('лига')) {
            block = block.parentNode.parentNode.parentNode.parentNode;
            block.style.position = "fixed";
            block.style['z-index'] = "150";
        }
        block = document.querySelector('h3'); // 'div > div > div > h3'
        if ((block.innerHTML).includes('Заморозка')) {
            block = block.parentNode.parentNode.parentNode;
            block.style.position = "fixed";
            block.style['z-index'] = "170";
        }
    }
};


(function() {
    'use strict';
    //if (document.readyState === "complete")
    //    stick_league();
    //else
        (addEventListener || attachEvent).call(window, addEventListener ? "load" : "onload", stick_league);
        (addEventListener || attachEvent).call(window, addEventListener ? "mousemove" : "onmousemove", stick_league);
})();