// ==UserScript==
// @id 	 wasabee-fix-Wasabee-Skin
// @name 	 wasabee-fix
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.1
// @updateURL 	 https://le-jeu.github.io/dist/wasabee-fix-wasabee-skin.meta.js
// @downloadURL 	 https://le-jeu.github.io/dist/wasabee-fix-wasabee-skin.user.js
// @description 	 some UI tweaks for Wasabee
// @author 	 Wasabee Project Team
// @include 	 /https?:\/\/.*\.ingress\.com\/?((intel|mission)?(\/?(\?|#).*)?)?/
// @category 	 Other
// @grant 	 none
// ==/UserScript==



function wrapper(plugin_info) {
  // ensure plugin framework is there, even if iitc is not yet loaded
  if (typeof window.plugin !== "function") {
    window.plugin = function() {};
  }

  // PLUGIN START --------------------------------------------------------


  // Code injection
  let setup = function() {
    !function(n){var a={};function e(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=a,e.d=function(n,a,t){e.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,a){if(1&a&&(n=e(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var o in n)e.d(t,o,function(a){return n[a]}.bind(null,o));return t},e.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(a,"a",a),a},e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},e.p="",e(e.s=0)}([function(n,a,e){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const t={};window.plugin.wasabeeSkins.wasabee_fix=t,t.static={CSS:{fix:e(1)}}},function(n,a,e){var t=e(2);n.exports="string"==typeof t?t:t.toString()},function(n,a,e){(a=e(3)(!1)).push([n.i,".wasabee-dialog-fanfield div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-homogeneous div.container {\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-homogeneous div.desc {\n  grid-column: 1 / span 4;\n}\n\n.wasabee-dialog-link div.container {\n  display: grid;\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-link button.drawb {\n  height: auto;\n}\n\n.wasabee-dialog-madrid div.container {\n   display: grid;\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-madrid div.desc {\n  grid-column-end: 4;\n   padding: 4px;\n}\n\n.wasabee-dialog-madrid span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-multimax div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-multimax div.desc {\n  grid-column-end: 4;\n  padding: 4px;\n}\n\n.wasabee-dialog-multimax span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-onion div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-onion div.desc {\n  grid-column-end: 4;\n}\n\n.wasabee-dialog-onion span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-starburst div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-starburst div.anchor {\n  grid-column: 3;\n}\n\n.wasabee-dialog-fanfield button.drawb,\n.wasabee-dialog-madrid button.drawb,\n.wasabee-dialog-multimax button.drawb,\n.wasabee-dialog-onion button.drawb,\n.wasabee-dialog-starburst button.drawb {\n   grid-column: 3\n}\n\n.wasabee-dialog-settings div.container {\n    grid-template-columns: auto\n}\n\n.wasabee-dialog div.container,\n.wasabee-dialog div.content {\n    grid-gap: 0.3em 0.6em\n}\n",""]),n.exports=a},function(n,a,e){"use strict";n.exports=function(n){var a=[];return a.toString=function(){return this.map((function(a){var e=function(n,a){var e=n[1]||"",t=n[3];if(!t)return e;if(a&&"function"==typeof btoa){var o=(r=t,u=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(d," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var r,u,d;return[e].join("\n")}(a,n);return a[2]?"@media ".concat(a[2]," {").concat(e,"}"):e})).join("")},a.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);t&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),a.push(d))}},a}}]);

    // there really isn't anything to do here, but if you need startup logic for your skin, add it here
    if (!window.plugin.wasabeeSkins) window.plugin.wasabeeSkins = {};
  };

  // PLUGIN END ----------------------------------------------------------
  setup.info = plugin_info; //add the script info data to the function as a property
  if (!window.bootPlugins) {
    window.bootPlugins = [];
  }
  window.bootPlugins.push(setup);
  // if IITC has already booted, immediately run the 'setup' function
  if (window.iitcLoaded && typeof setup === "function") {
    setup();
  }

}
//wrapper end

// inject code into site context
var script = document.createElement("script");
var info = {};
if (typeof GM_info !== "undefined" && GM_info && GM_info.script) {
  info.script = {
    version: GM_info.script.version,
    name: GM_info.script.name,
    description: GM_info.script.description
  };
}

script.appendChild(
  document.createTextNode("(" + wrapper + ")(" + JSON.stringify(info) + ");")
);
(document.body || document.head || document.documentElement).appendChild(
  script
);

