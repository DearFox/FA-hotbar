// ==UserScript==
// @name         Скрывание лайков
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Скрывает лайки в вк
// @author       DearFox
// @match        https://vk.com/*
// @icon         https://www.google.com/s2/favicons?domain=vk.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
GM_addStyle(`.PostButtonReactions__title {
    height: 0px !important;
    width: 0px !important;
}
.like._like {
    height: 0px !important;
    width: 0px !important;
}`);
    // Your code here...
})();
