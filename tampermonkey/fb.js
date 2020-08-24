// ==UserScript==
// @name         fb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fenbi.com/*
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require           https://cdn.jsdelivr.net/npm/sweetalert2@9
// @grant             GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
     const version = GM_info.script.version
     const pathname = location.pathname;
    document.title = 'test';
    document.querySelector('link[rel="icon"]').href = '//common.cnblogs.com/favicon.ico?v=20200522';
     window.onload = function(){
         setTimeout(function (){
             addClass();
             if(pathname.indexOf('report')!==-1){
                 document.querySelector('.fb-collpase-bottom[_ngcontent-c7] .fb-collpase-header[_ngcontent-c7]').click();
                 return;
             }
             if(pathname.indexOf('practice')!==-1){
                  document.querySelectorAll('#fb-web-nav-header[_ngcontent-c2] .fb-web-nav[_ngcontent-c2] ul[_ngcontent-c2] li[_ngcontent-c2] a[_ngcontent-c2]').forEach(function(item, i){item.text = i});
                 document.querySelector('.pause-exercise .font-color-gray-light').outerText='stop';
                 document.querySelector('.action-font-item').style.display='none';
                 document.querySelector('.night-action').style.display='none';
                 document.querySelector('.download-exercise').style.display='none';
                 document.querySelector('.submit-exercise .font-color-gray-light').outerText='submit';
                 //document.querySelector('.fb-collpase-bottom[_ngcontent-c6] .fb-collpase-header[_ngcontent-c6] a[_ngcontent-c6]').outerText='Sheet';
                 //document.querySelector('.header-content h4').style.display='none';
                 document.querySelector('.fb-collpase-bottom[_ngcontent-c6] .fb-collpase-header[_ngcontent-c6] a[_ngcontent-c6]').click();
             }
         },500);
     }
})();
function addClass(){
    GM_addStyle(`
#fb-web-nav-header[_ngcontent-c2] .fenbi-icon-url[_ngcontent-c2] .header-content-image[_ngcontent-c2]{
    display: none;
}
#fb-web-nav-header[_ngcontent-c2] .fenbi-icon-url[_ngcontent-c2] .header-content-image[_ngcontent-c2]{
    display: none;
}
.pd-category-item[_ngcontent-c5] .pd-sub-category-item[_ngcontent-c5] .pd-item-name[_ngcontent-c5]{
    width: 140px!important;
}
.pd-category-item[_ngcontent-c5] .pd-sub-category-item[_ngcontent-c5] .pd-item-num[_ngcontent-c5]{
    width: 140px!important;
}
.theme-normal .radio-ques-type{
    color: black!important;
    background: none!important;
}
.solu-list[_ngcontent-c6] .solu-list-item[_ngcontent-c6]:nth-child(1) div[_ngcontent-c6] p{
     max-width: 400px!important;
}
.solu-list[_ngcontent-c6] .question-video[_ngcontent-c6]{
   display: none;
}
`);
}