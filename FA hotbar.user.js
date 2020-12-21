// ==UserScript==
// @name         FA hotbar
// @namespace    https://www.furaffinity.net/user/dearfox/
// @version      1.1
// @description  Statistics based on data from the top menu for furaffinity!
// @author       DearFox
// @match        https://www.furaffinity.net/*
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @downloadUrl  https://github.com/DearFox/FA-hotbar/raw/main/FA%20hotbar.user.js
// @updateUrl    https://github.com/DearFox/FA-hotbar/raw/main/FA%20hotbar.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var menu_info = document.getElementsByClassName("notification-container");
    if(menu_info[0] == undefined){} else{ //проверка на наличие данных.
var mob_ban = document.getElementsByClassName("mobile-notification-bar")[0];
    mob_ban.innerHTML = '';
    var menu_info_numb = menu_info.length;
    console.log(menu_info);
    console.log(menu_info_numb);
    //

    //
    var menu_array = {S:0,W:0,C:0,F:0,J:0};
    //
    function menu_fun(mn){
var i = 0;
while (i < menu_info_numb) {
  if (menu_info[i].innerHTML.substr(-1, 1) == mn){
      menu_array.mn = menu_info[i].innerHTML.slice(0, -1);
      //
      if (Cookies.get(mn) == undefined){
        console.log('Переменная '+mn+' равна: '+Cookies.get(mn));
        Cookies.set(mn, Number(menu_array.mn), { expires: 365, path: '/' });
        console.log('По этой причине она получила значение по умолчанию: '+Cookies.get(mn));
    } else{
    console.log('Куки переменная '+mn+' равна: '+Cookies.get(mn));
    };
      //
      var real = Number(menu_array.mn)-Number(Cookies.get(mn));
      //menu_info[i].innerHTML = menu_info[i].innerHTML+'<sup> '+real+'</sup>';
      menu_info[i].innerHTML = menu_info[i].innerHTML+`<sub title="click to reset" onclick="document.cookie = '`+mn+`=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';"> `+real+'</sub>';
      break; }
  //console.log(menu_info[i].innerHTML);
  //console.log(menu_info[i].innerHTML.substr(-1, 1));
  i++;
} console.log(Number(menu_array.mn));
        console.log(Number(Cookies.get(mn)));
    };


    menu_fun('S');
    menu_fun('W');
    menu_fun('C');
    menu_fun('F');
    menu_fun('J');

    // Your code here...
    }})();
