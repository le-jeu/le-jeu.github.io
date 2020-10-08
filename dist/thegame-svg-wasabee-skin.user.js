// ==UserScript==
// @id 	 thegame-svg-wasabee-skin
// @name 	 Wasabee Skin: TheGame SVG
// @namespace 	 https://wasabee.rocks/
// @version 	 0.0.2
// @updateURL 	 https://le-jeu.github.io/dist/thegame-svg-wasabee-skin.meta.js
// @downloadURL 	 https://le-jeu.github.io/dist/thegame-svg-wasabee-skin.user.js
// @description 	 SVG Icon set for Wasabee
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
    !function(I){var i={};function a(g){if(i[g])return i[g].exports;var M=i[g]={i:g,l:!1,exports:{}};return I[g].call(M.exports,M,M.exports,a),M.l=!0,M.exports}a.m=I,a.c=i,a.d=function(I,i,g){a.o(I,i)||Object.defineProperty(I,i,{enumerable:!0,get:g})},a.r=function(I){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})},a.t=function(I,i){if(1&i&&(I=a(I)),8&i)return I;if(4&i&&"object"==typeof I&&I&&I.__esModule)return I;var g=Object.create(null);if(a.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:I}),2&i&&"string"!=typeof I)for(var M in I)a.d(g,M,function(i){return I[i]}.bind(null,M));return g},a.n=function(I){var i=I&&I.__esModule?function(){return I.default}:function(){return I};return a.d(i,"a",i),i},a.o=function(I,i){return Object.prototype.hasOwnProperty.call(I,i)},a.p="",a(a.s=0)}([function(I,i,a){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const g={};window.plugin.wasabeeSkins.thegame_svg=g,g.static={CSS:{theGameSVG:a(1)}}},function(I,i,a){var g=a(2);I.exports="string"==typeof g?g:g.toString()},function(I,i,a){var g=a(3),M=a(4),c=a(5),e=a(6),n=a(7),t=a(8),o=a(9),s=a(10),w=a(11),C=a(12),r=a(13);i=g(!1);var A=M(c),l=M(e),u=M(n),b=M(t),x=M(o),S=M(s),m=M(w),D=M(C),j=M(r);i.push([I.i,".wasabee-toolbar-op {\n  background-image: url("+A+");\n  background-size: 16px;\n}\n.wasabee-toolbar-quickdraw {\n  background-image: url("+l+");\n  background-size: 16px;\n}\n\n.wasabee-anchor-icon.wasabee-layer-main {\n  background-image: url("+u+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupa {\n  background-image: url("+b+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupb {\n  background-image: url("+x+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupc {\n  background-image: url("+S+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupd {\n  background-image: url("+m+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupe {\n  background-image: url("+D+")\n}\n.wasabee-anchor-icon.wasabee-layer-groupf {\n  background-image: url("+j+")\n}\n\n.wasabee-anchor-icon.wasabee-layer-custom {\n  background-image: url("+u+");\n  mask-image: url("+u+");\n  -webkit-mask-image: url("+u+");\n}",""]),I.exports=i},function(I,i,a){"use strict";I.exports=function(I){var i=[];return i.toString=function(){return this.map((function(i){var a=function(I,i){var a=I[1]||"",g=I[3];if(!g)return a;if(i&&"function"==typeof btoa){var M=(e=g,n=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(t," */")),c=g.sources.map((function(I){return"/*# sourceURL=".concat(g.sourceRoot||"").concat(I," */")}));return[a].concat(c).concat([M]).join("\n")}var e,n,t;return[a].join("\n")}(i,I);return i[2]?"@media ".concat(i[2]," {").concat(a,"}"):a})).join("")},i.i=function(I,a,g){"string"==typeof I&&(I=[[null,I,""]]);var M={};if(g)for(var c=0;c<this.length;c++){var e=this[c][0];null!=e&&(M[e]=!0)}for(var n=0;n<I.length;n++){var t=[].concat(I[n]);g&&M[t[0]]||(a&&(t[2]?t[2]="".concat(a," and ").concat(t[2]):t[2]=a),i.push(t))}},i}},function(I,i,a){"use strict";I.exports=function(I,i){return i||(i={}),"string"!=typeof(I=I&&I.__esModule?I.default:I)?I:(/^['"].*['"]$/.test(I)&&(I=I.slice(1,-1)),i.hash&&(I+=i.hash),/["'() \t\n]/.test(I)||i.needQuotes?'"'.concat(I.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):I)}},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPHBhdGggZD0iTTcgMTVoMTJ2Mkg3em0wLTZoMTJ2Mkg3em0wLTZoMTJ2Mkg3eiIvPgogIDxjaXJjbGUgY3g9IjMiIGN5PSI0IiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMyIgY3k9IjEwIiByPSIyIi8+CiAgPGNpcmNsZSBjeD0iMyIgY3k9IjE2IiByPSIyIi8+Cjwvc3ZnPg=="},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9Ii01IC01IDMxMCAzMTAiIHZlcnNpb249IjEuMSI+CiAgPHBhdGggZD0iTTAsMzAwTDE1MCwwTDMwMCwzMDBMMTUwLDEwMEwwLDMwMEwxNTAsMjAwTDMwMCwzMDBMMCwzMDAiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOmJsYWNrO3N0cm9rZS13aWR0aDoxMCIvPgo8L3N2Zz4K"},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDMsIDcwJSwgNTAlKTtzdHJva2U6YmxhY2s7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIj4KCSAgPHBhdGggZD0iTSAwLDEwIEEgMTAsMTAsMCwwLDEsMjAsMTAgQyAyMCwyMCwgMTAsMjAsIDEwLDQwIEMgMTAsMjAsIDAsMjAsIDAsMTAiLz4KCSAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iNC41IiAvPgoJPC9nPgo8L3N2Zz4K"},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDM5LCA3MCUsIDUwJSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS1saW5lam9pbjpyb3VuZCI+CgkgIDxwYXRoIGQ9Ik0gMCwxMCBBIDEwLDEwLDAsMCwxLDIwLDEwIEMgMjAsMjAsIDEwLDIwLCAxMCw0MCBDIDEwLDIwLCAwLDIwLCAwLDEwIi8+CgkgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgLz4KCTwvZz4KPC9zdmc+"},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDYwLCA3MCUsIDUwJSk7c3Ryb2tlOmJsYWNrO3N0cm9rZS1saW5lam9pbjpyb3VuZCI+CgkgIDxwYXRoIGQ9Ik0gMCwxMCBBIDEwLDEwLDAsMCwxLDIwLDEwIEMgMjAsMjAsIDEwLDIwLCAxMCw0MCBDIDEwLDIwLCAwLDIwLCAwLDEwIi8+CgkgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgLz4KCTwvZz4KPC9zdmc+"},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDEyMCwgNzAlLCA1MCUpO3N0cm9rZTpibGFjaztzdHJva2UtbGluZWpvaW46cm91bmQiPgoJICA8cGF0aCBkPSJNIDAsMTAgQSAxMCwxMCwwLDAsMSwyMCwxMCBDIDIwLDIwLCAxMCwyMCwgMTAsNDAgQyAxMCwyMCwgMCwyMCwgMCwxMCIvPgoJICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0LjUiIC8+Cgk8L2c+Cjwvc3ZnPg=="},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDI4NSwgNzAlLCA1MCUpO3N0cm9rZTpibGFjaztzdHJva2UtbGluZWpvaW46cm91bmQiPgoJICA8cGF0aCBkPSJNIDAsMTAgQSAxMCwxMCwwLDAsMSwyMCwxMCBDIDIwLDIwLCAxMCwyMCwgMTAsNDAgQyAxMCwyMCwgMCwyMCwgMCwxMCIvPgoJICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0LjUiIC8+Cgk8L2c+Cjwvc3ZnPgo="},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDE4MCwgNzAlLCA1MCUpO3N0cm9rZTpibGFjaztzdHJva2UtbGluZWpvaW46cm91bmQiPgoJICA8cGF0aCBkPSJNIDAsMTAgQSAxMCwxMCwwLDAsMSwyMCwxMCBDIDIwLDIwLCAxMCwyMCwgMTAsNDAgQyAxMCwyMCwgMCwyMCwgMCwxMCIvPgoJICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0LjUiIC8+Cgk8L2c+Cjwvc3ZnPgo="},function(I,i,a){"use strict";a.r(i),i.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItMSAtMSAyMiA0MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxtYXNrIGlkPSJob2xlIj4KICAgIDxyZWN0IHg9Ii0xIiB5PSItMSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjQyIiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjQuNSIgZmlsbD0iYmxhY2siLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNob2xlKSIgc3R5bGU9ImZpbGw6aHNsKDMxNSwgNzAlLCA1MCUpO3N0cm9rZTpibGFjaztzdHJva2UtbGluZWpvaW46cm91bmQiPgoJICA8cGF0aCBkPSJNIDAsMTAgQSAxMCwxMCwwLDAsMSwyMCwxMCBDIDIwLDIwLCAxMCwyMCwgMTAsNDAgQyAxMCwyMCwgMCwyMCwgMCwxMCIvPgoJICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI0LjUiIC8+Cgk8L2c+Cjwvc3ZnPgo="}]);

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

