// ==UserScript==
// @id 	 wasabee-fix-Wasabee-Skin
// @name 	 wasabee-fix
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.2
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
    !function(n){var t={};function a(o){if(t[o])return t[o].exports;var e=t[o]={i:o,l:!1,exports:{}};return n[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=t,a.d=function(n,t,o){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)a.d(o,e,function(t){return n[t]}.bind(null,e));return o},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="",a(a.s=1)}([function(n,t,a){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var a=function(n,t){var a=n[1]||"",o=n[3];if(!o)return a;if(t&&"function"==typeof btoa){var e=(r=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(d," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[a].concat(i).concat([e]).join("\n")}var r,u,d;return[a].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(n,a,o){"string"==typeof n&&(n=[[null,n,""]]);var e={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(e[r]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);o&&e[d[0]]||(a&&(d[2]?d[2]="".concat(a," and ").concat(d[2]):d[2]=a),t.push(d))}},t}},function(n,t,a){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const o={};window.plugin.wasabeeSkins.wasabee_fix=o,o.static={CSS:{fix:a(2),iitcfix:a(4)}}},function(n,t,a){var o=a(3);n.exports="string"==typeof o?o:o.toString()},function(n,t,a){(t=a(0)(!1)).push([n.i,".wasabee-dialog-fanfield div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-homogeneous div.container {\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-homogeneous div.desc {\n  grid-column: 1 / span 4;\n}\n\n.wasabee-dialog-link div.container {\n  display: grid;\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-link button.drawb {\n  height: auto;\n}\n\n.wasabee-dialog-madrid div.container {\n   display: grid;\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-madrid div.desc {\n  grid-column-end: 4;\n   padding: 4px;\n}\n\n.wasabee-dialog-madrid span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-multimax div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-multimax div.desc {\n  grid-column-end: 4;\n  padding: 4px;\n}\n\n.wasabee-dialog-multimax span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-onion div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-onion div.desc {\n  grid-column-end: 4;\n}\n\n.wasabee-dialog-onion span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-starburst div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-starburst div.anchor {\n  grid-column: 3;\n}\n\n.wasabee-dialog-fanfield button.drawb,\n.wasabee-dialog-madrid button.drawb,\n.wasabee-dialog-multimax button.drawb,\n.wasabee-dialog-onion button.drawb,\n.wasabee-dialog-starburst button.drawb {\n   grid-column: 3\n}\n\n.wasabee-dialog-settings div.container {\n    grid-template-columns: auto\n}\n\n.wasabee-dialog div.container,\n.wasabee-dialog div.content {\n    grid-gap: 0.3em 0.6em\n}\n",""]),n.exports=t},function(n,t,a){var o=a(5);n.exports="string"==typeof o?o:o.toString()},function(n,t,a){(t=a(0)(!1)).push([n.i,".ui-dialog-content {\n    max-height: 80vh !important;\n    max-width: 100vw !important;\n    overflow-x: auto;\n}\n\n.ui-dialog-aboutIITC {\n    min-width: 100px !important;\n}\n",""]),n.exports=t}]);

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

