parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.body,e=!1,t=!1,c=function(e,t){n.insertAdjacentHTML("beforeend",'\n  <div data-qa="notification"\n  class="'.concat(e,'">\n    ').concat(t,"\n  </div>\n  "))},i=new Promise(function(e,t){setTimeout(function(){return t(Error)},3e3),n.addEventListener("click",function(){e("succes")})});i.then(function(n){return c(n,"First promise was resolved")},function(n){return c(n,"First promise was rejected")});var r=new Promise(function(c,i){n.addEventListener("click",function(){e=!0,t||c("succes")})});r.then(function(n){return c(n,"Second promise was resolved")});var o=new Promise(function(c,i){n.addEventListener("contextmenu",function(){t=!0,e||c("succes")})});o.then(function(n){return c(n,"Second promise was resolved")});var s=new Promise(function(c,i){n.addEventListener("click",function(){t&&e&&c("succes")}),n.addEventListener("contextmenu",function(){t&&e&&c("succes")})});s.then(function(n){return c(n,"Third promise was resolved")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.50d762a1.js.map