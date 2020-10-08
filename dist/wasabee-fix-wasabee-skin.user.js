// ==UserScript==
// @id 	 wasabee-fix-wasabee-skin
// @name 	 Wasabee Skin: Wasabee Fix
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.3
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
    !function(n){var t={};function a(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=n,a.c=t,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="",a(a.s=1)}([function(n,t,a){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var a=function(n,t){var a=n[1]||"",e=n[3];if(!e)return a;if(t&&"function"==typeof btoa){var o=(r=e,d=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(u," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[a].concat(i).concat([o]).join("\n")}var r,d,u;return[a].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(n,a,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);e&&o[u[0]]||(a&&(u[2]?u[2]="".concat(a," and ").concat(u[2]):u[2]=a),t.push(u))}},t}},function(n,t,a){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const e={};window.plugin.wasabeeSkins.wasabee_fix=e,e.static={CSS:{fix:a(2),iitcfix:a(4)}}},function(n,t,a){var e=a(3);n.exports="string"==typeof e?e:e.toString()},function(n,t,a){(t=a(0)(!1)).push([n.i,".wasabee-dialog-fanfield div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-homogeneous div.container {\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-homogeneous div.desc {\n  grid-column: 1 / span 4;\n}\n\n.wasabee-dialog-link div.container {\n  display: grid;\n  grid-template-columns: min-content auto auto auto;\n}\n\n.wasabee-dialog-link button.drawb {\n  height: auto;\n}\n\n.wasabee-dialog-madrid div.container {\n   display: grid;\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-madrid div.desc {\n  grid-column-end: 4;\n   padding: 4px;\n}\n\n.wasabee-dialog-madrid span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-multimax div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-multimax div.desc {\n  grid-column-end: 4;\n  padding: 4px;\n}\n\n.wasabee-dialog-multimax span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-onion div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-onion div.desc {\n  grid-column-end: 4;\n}\n\n.wasabee-dialog-onion span {\n  grid-column: 3;\n}\n\n.wasabee-dialog-starburst div.container {\n  grid-template-columns: min-content auto auto;\n}\n\n.wasabee-dialog-starburst div.anchor {\n  grid-column: 3;\n}\n\n.wasabee-dialog-fanfield button.drawb,\n.wasabee-dialog-madrid button.drawb,\n.wasabee-dialog-multimax button.drawb,\n.wasabee-dialog-onion button.drawb,\n.wasabee-dialog-starburst button.drawb {\n   grid-column: 3\n}\n\n.wasabee-dialog-settings div.container {\n    grid-template-columns: auto\n}\n\n.wasabee-dialog div.container,\n.wasabee-dialog div.content {\n    grid-gap: 0.3em 0.6em\n}\n",""]),n.exports=t},function(n,t,a){var e=a(5);n.exports="string"==typeof e?e:e.toString()},function(n,t,a){(t=a(0)(!1)).push([n.i,"/* iitc-ce: commit 50ea9ecf521557008a20287d4d6271cf07624008 */\n.ui-dialog-content {\n  padding: 12px;\n\tmax-width: unset !important;\n \toverflow: auto;\n\n  /* Limiting the height of dialog content on small screens */\n  /* 57px – height .ui-dialog-titlebar + .ui-dialog-buttonpane */\n  /* 24px – padding 12px * 2 */\n  /*  2px – border 1px * 2 */\n  max-height: calc(100vh - 57px - 24px - 2px) !important;\n}\n\n.ui-dialog {\n  max-width: calc(100vw - 2px);\n}\n\n@media (min-width: 700px) {\n  .ui-dialog {\n    max-width: 600px;\n  }\n}\n\n.ui-dialog-aboutIITC {\n  width: unset !important;\n  min-width: unset !important;\n  max-width: calc(100vw - 2px) !important;\n}\n",""]),n.exports=t}]);

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

