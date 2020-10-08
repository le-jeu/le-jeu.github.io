// ==UserScript==
// @id 	 monospace-wasabee-skin
// @name 	 Wasabee Skin: Monospace
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.1
// @updateURL 	 https://le-jeu.github.io/dist/monospace-wasabee-skin.meta.js
// @downloadURL 	 https://le-jeu.github.io/dist/monospace-wasabee-skin.user.js
// @description 	 Monospace skin for Wasabee
// @author 	 jaiperdu
// @include 	 /https?:\/\/.*\.ingress\.com\/?((intel|mission)?(\/?(\?|#).*)?)?/
// @category 	 Appearance
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
    !function(n){var t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=t,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o(o.s=0)}([function(n,t,o){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const e={};window.plugin.wasabeeSkins.monospace=e,e.static={CSS:{monospace:o(1)}}},function(n,t,o){var e=o(2);n.exports="string"==typeof e?e:e.toString()},function(n,t,o){(t=o(3)(!1)).push([n.i,'body,\n#map,\nbutton {\n    font-family: monospace, "Roboto", "Helvetica Neue", Helvetica, sans-serif;\n}\n\nbody {\n    font-size: 12px;\n}\n\nbutton {\n    font-size: 13px;\n}\n\nh2 #name {\n    width: 185px;\n}\n\n#chat td:first-child,\n#chatinput td:first-child {\n    font-size: 12px;\n}\n\n#updatestatus {\n    font-size: 11px;\n}\n\n#bookmarksBox * {\n    font-family: monospace;\n}',""]),n.exports=t},function(n,t,o){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=function(n,t){var o=n[1]||"",e=n[3];if(!e)return o;if(t&&"function"==typeof btoa){var r=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[o].concat(i).concat([r]).join("\n")}var a,c,u;return[o].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,o,e){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);e&&r[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),t.push(u))}},t}}]);

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

