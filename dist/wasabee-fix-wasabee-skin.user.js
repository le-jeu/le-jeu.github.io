// ==UserScript==
// @id 	 wasabee-fix-wasabee-skin
// @name 	 Wasabee Skin: Wasabee Fix
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.4
// @updateURL 	 https://le-jeu.github.io/dist/wasabee-fix-wasabee-skin.meta.js
// @downloadURL 	 https://le-jeu.github.io/dist/wasabee-fix-wasabee-skin.user.js
// @description 	 Some UI tweaks for Wasabee
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
    !function(n){var t={};function e(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(a,o,function(t){return n[t]}.bind(null,o));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const a={};window.plugin.wasabeeSkins.wasabee_fix=a,a.static={CSS:{fix:e(1)}}},function(n,t,e){var a=e(2);n.exports="string"==typeof a?a:a.toString()},function(n,t,e){(t=e(3)(!1)).push([n.i,"@media screen and (max-device-width: 400px) {\n  .wasabee-toolbar-wasabee + .wasabee-actions .wasabee-subactions a {\n    width: 41px !important;\n    text-overflow: inherit;\n  }\n}\n\n/* to be replaced with a new toolbar layout */\n.wasabee-toolbar-op + .wasabee-actions {\n  top: 26px !important;\n}\n.leaflet-touch .wasabee-toolbar-op + .wasabee-actions {\n  top: 33px !important;\n}\n\n.wasabee-toolbar-quickdraw + .wasabee-actions {\n  top: calc(2*26.65px) !important;\n}\n.leaflet-touch .wasabee-toolbar-quickdraw + .wasabee-actions {\n  top: 64px !important;\n}\n\n.wasabee-toolbar-link + .wasabee-actions {\n  top: calc(3*26.65px) !important;\n}\n.leaflet-touch .wasabee-toolbar-link + .wasabee-actions {\n  top: 95px !important;\n}\n\n.wasabee-toolbar-marker + .wasabee-actions {\n  top: calc(4*26.65px) !important;\n}\n.leaflet-touch .wasabee-toolbar-marker + .wasabee-actions {\n  top: 126px !important;\n}\n\n.leaflet-touch .wasabee-actions {\n  left: 32px !important;\n}\n\n.wasabee-dialog div.container,\n.wasabee-dialog div.content {\n    grid-gap: 0.3em 0.6em\n}\n",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",a=n[3];if(!a)return e;if(t&&"function"==typeof btoa){var o=(i=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([o]).join("\n")}var i,c,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);a&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}}]);

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

