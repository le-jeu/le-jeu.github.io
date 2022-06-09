// ==UserScript==
// @id 	 black-game-wasabee-skin
// @name 	 Wasabee Skin: Black Game
// @namespace 	 https://wasabee.rocks/
// @version 	 0.1.3
// @updateURL 	 https://le-jeu.github.io/dist/black-game-wasabee-skin.meta.js
// @downloadURL 	 https://le-jeu.github.io/dist/black-game-wasabee-skin.user.js
// @description 	 Black Game skin for Wasabee
// @author 	 Wasabee Project Team
// @include      https://intel.ingress.com/*
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
    !function(o){var r={};function n(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return o[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=o,n.c=r,n.d=function(o,r,a){n.o(o,r)||Object.defineProperty(o,r,{enumerable:!0,get:a})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,r){if(1&r&&(o=n(o)),8&r)return o;if(4&r&&"object"==typeof o&&o&&o.__esModule)return o;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),2&r&&"string"!=typeof o)for(var e in o)n.d(a,e,function(r){return o[r]}.bind(null,e));return a},n.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(r,"a",r),r},n.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},n.p="",n(n.s=1)}([function(o,r,n){"use strict";o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var n=function(o,r){var n=o[1]||"",a=o[3];if(!a)return n;if(r&&"function"==typeof btoa){var e=(l=a,t=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),b="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(b," */")),c=a.sources.map((function(o){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(o," */")}));return[n].concat(c).concat([e]).join("\n")}var l,t,b;return[n].join("\n")}(r,o);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(o,n,a){"string"==typeof o&&(o=[[null,o,""]]);var e={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(e[l]=!0)}for(var t=0;t<o.length;t++){var b=[].concat(o[t]);a&&e[b[0]]||(n&&(b[2]?b[2]="".concat(n," and ").concat(b[2]):b[2]=n),r.push(b))}},r}},function(o,r,n){window.plugin.wasabeeSkins||(window.plugin.wasabeeSkins={});const a={};window.plugin.wasabeeSkins.blackgame=a,a.static={CSS:{colorvars:n(2),iitc:n(4),iitcPlugins:n(6),black:n(8)},defaultOperationColor:"#cc0055",linkStyle:{dashArray:[28,5,8,5,8,5,8,5,2,5,2,5,2,5,2,5,28,4],assignedDashArray:[20,6,10,6,2,6,2,6],opacity:.7,weight:2.5}}},function(o,r,n){var a=n(3);o.exports="string"==typeof a?a:a.toString()},function(o,r,n){(r=n(0)(!1)).push([o.i,":root {\n    --background-color-rgba1: rgba(20, 20, 20, .85);\n    /*rgba(8,48,78,.)*/\n    --background-color-rgba2: rgba(0, 0, 0, 0);\n    /*rgba(0,0,0,0)*/\n    --background-color-rgba3: rgba(0, 0, 0, .3);\n    /*rgba(0,0,0,.3)*/\n    --background-color-rgba4: rgba(0, 0, 0, .6);\n    /*rgba(0,0,0,.6)*/\n    --background-color-rgba5: rgba(0, 0, 0, .55);\n    /*rgba(8,48,78,.55)*/\n    --background-color-rgba6: rgba(0, 0, 1, .9);\n    /*rgba(8,48,78,.9)*/\n    --background-color-rgba7: rgba(0, 0, 0, .7);\n    /*rgba(8,58,78,.7)*/\n    --background-color-rgba8: rgba(0, 0, 0, .9);\n    /*rgba(8,58,78,.9)*/\n    --background-color-rgba9: rgb(0, 0, 3);\n    /*rgba(8,48,78)*/\n    --background-color-rgba10: rgba(0, 0, 1, .9);\n    /*rgba(8,48,78,.85)*/\n\n    --background-color-rgba11: rgba(40, 40, 40, .9);\n\n    --background-color-036: #111;\n    --background-color-069: #000;\n    --background-color-0e3d4e: #000;\n    --background-color-08304e: #000;\n    --background-color-222: #222;\n    --background-color-262c32: #262c32;\n    --background-color-b42e2e: #b42e2e;\n    --background-color-e22: #e22;\n    --background-color-ffce00: #eeeeef;\n    --background-color-005684: rgba(0,83,116,.5);\n    --background-color-017f01: rgba(1,150,1,.5);\n    --border-color-036: #000;\n    --border-color-069: #000;\n    --border-color-20a8b1: #4d4c4c;\n    --border-color-666: #666;\n    --border-color-ffce00: #eeeeef;\n    --border-color-0b314e: #111;\n    --box-shadow-color-20a8b1: #20a8b1;\n    --color-000: #000;\n    --color-03dc03: #03dc03;\n    --color-03fe03: #03fe03;\n    --color-20a8b1: #eeeeef;\n    --color-666: #666;\n    --color-788: #788;\n    --color-888: #888;\n    --color-eee: #eeeeed;\n    --color-ffcc00: #ffcc00;\n    --color-ffce00: #eeeeef;\n    --color-fff: #fff;\n\n    --table-background-header: rgba(0, 0, 0, .85);/*rgba(25, 63, 95, 0.75);*/\n    --table-background-odd: rgba(40, 40, 40, .85);/*rgba(8, 48, 78, 0.75);*/\n    --table-background-even: rgba(20, 20, 20, .85);/*rgba(25, 63, 95, 0.75);*/\n}\n",""]),o.exports=r},function(o,r,n){var a=n(5);o.exports="string"==typeof a?a:a.toString()},function(o,r,n){(r=n(0)(!1)).push([o.i,'#map {\n    background-color: var(--background-color-0e3d4e);\n}\n\n#sidebar {\n    background-color: var(--background-color-rgba6) !important;\n    border-left: 1px solid var(--border-color-20a8b1);\n    color: var(--color-888);\n}\n\n#sidebar > * {\n    border-bottom: 1px solid var(--border-color-20a8b1);\n}\n\n#sidebartoggle {\n    background-color: var(--background-color-rgba6);\n    color: var(--color-ffce00);\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#sidebartoggle .open {\n    border-right: 10px solid var(--border-color-ffce00);\n}\n\n#sidebartoggle .close {\n    border-left: 10px solid var(--border-color-ffce00);\n}\n\na {\n    color: var(--color-ffce00);\n}\n\n.fieldmu {\n    color: var(--color-ffce00);\n}\n\n#chatcontrols {\n    color: var(--color-ffce00);\n    background: var(--background-color-rgba6) !important;\n}\n\n\n#chatcontrols a {\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#chatcontrols a.active {\n    border-color: var(--border-color-ffce00);\n    background: var(--background-color-rgba9);\n}\n\n#chatcontrols a.active + a {\n    border-left-color: var(--border-color-ffce00)\n}\n\n#chatcontrols .expand {\n    border-bottom: 10px solid var(--border-color-ffce00);\n}\n\n#chatcontrols .shrink {\n    border-top: 10px solid var(--border-color-ffce00);\n}\n\n#chatinput {\n    background: var(--background-color-rgba6) !important;\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#chat {\n    background: var(--background-color-rgba6) !important;\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#chat a {\n    font-style: italic;\n}\n\n/*#chat td:first-child,\n#chatinput td:first-child {\n    width: 65px;\n}*/\n\n/*#chat td:nth-child(2),\n#chatinput td:nth-child(2) {\n    width: 100px;\n}*/\n\n#chatinput input {\n    color: var(--color-ffce00);\n    background: var(--background-color-rgba6);\n    width: 100%;\n    border-left: 1px solid var(--border-color-20a8b1);\n}\n\n.pl_nudge_date {\n display: inline-block;\n text-align: center;\n margin-left: -2px;\n padding-left: 1px;\n padding-right: 1px;\n border: 1px solid #ffd652;\n}\n\n.pl_nudge_pointy_spacer {\n    display: none;\n}\n\nh2 {\n    color: var(--color-ffce00);\n}\n\n/* search input, and others */\ninput:not([type]),\n.input,\ninput[type="text"],\ninput[type="password"],\ninput[type="number"],\ninput[type="email"],\ninput[type="search"],\ninput[type="url"] {\n    color: var(--color-ffce00);\n}\n\n\n#portaldetails .close {\n    background-color: var(--background-color-rgba6);\n    border-top: 1px solid var(--border-color-20a8b1);\n    border-left: 1px solid var(--border-color-20a8b1);\n    color: var(--color-ffce00);\n}\n\n#updatestatus {\n    background-color: var(--background-color-rgba6);\n    border-top: 1px solid var(--border-color-20a8b1);\n    border-left: 1px solid var(--border-color-20a8b1);\n    color: var(--color-ffce00);\n}\n\n#iitc-plugin-zoomLevel {\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#loadlevel {\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n.ui-tooltip,\n.ui-dialog {\n    background-color: var(--background-color-rgba6);\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n.ui-tooltip,\n.ui-dialog a {\n    color: var(--color-ffce00);\n}\n\n.ui-dialog-titlebar {\n    background-color: var(--background-color-rgba6);\n}\n\n.ui-dialog-title-active {\n    color: var(--color-ffce00);\n}\n\n.ui-dialog-title {\n    padding-right: 40px;\n}\n\n.ui-dialog-buttonpane {\n    border-top: 1px solid var(--border-color-20a8b1);\n}\n\n.ui-dialog-buttonset button,\n.ui-dialog-content button {\n    color: var(--color-ffce00);\n    border: 1px solid var(--border-color-ffce00);\n    background-color: var(--background-color-rgba6);\n}\n\n.ui-dialog-titlebar-button, .ui-dialog-titlebar-button-collapse::after, .ui-dialog-titlebar-button-close::after, .ui-dialog-titlebar-button-close::before {\n    border-color: var(--color-20a8b1);\n}\n\n.cellscore svg rect {\n    fill: var(--background-color-08304e);\n}\n\n#portal_highlight_select {\n    color: var(--color-ffce00);\n}\n\ntable.artifact tr > * {\n    background: var(--background-color-rgba6);\n}\n\n#map .leaflet-popup-content-wrapper {\n    border: 1px solid var(--border-color-20a8b1);\n    background: var(--background-color-0e3d4e);\n}\n\n#map .leaflet-popup-content {\n    color: var(--color-ffce00);\n}\n\n.cellscore .ui-accordion-header,\n.cellscore .ui-accordion-content {\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n.cellscore .ui-accordion-header {\n    color: var(--color-ffce00);\n}\n\n.ui-tabs-nav {\n    border-bottom: 1px solid var(--border-color-20a8b1);\n}\n\n.ui-tabs-nav li {\n    border: 1px solid var(--border-color-20a8b1);\n}',""]),o.exports=r},function(o,r,n){var a=n(7);o.exports="string"==typeof a?a:a.toString()},function(o,r,n){(r=n(0)(!1)).push([o.i,"/* bookmarks */\n\n.bookmarksDialog .bookmarkFolder {\n    border: 1px solid var(--border-color-20a8b1);\n    background: var(--background-color-069);\n    color: var(--color-fff);\n}\n\n#bkmrksSetbox a.disabled,\n#bkmrksSetbox a.disabled:hover {\n    color: var(--color-666);\n    border-color: var(--border-color-666);\n}\n\n#bkmrksSetbox a {\n    color: var(--color-ffce00);\n    border: 1px solid var(--border-color-ffce00);\n    background: var(--background-color-rgba6);\n}\n\n#bkmrksAutoDrawer a.bkmrk.selected {\n    color: var(--color-03dc03);\n}\n\n#bkmrksAutoDrawer .longdistance {\n    color: var(--color-ffcc00);\n}\n\n#bkmrksAutoDrawer .bookmarkFolder {\n    border: 1px solid var(--border-color-20a8b1);\n}\n\n#bookmarksBox .bookmarkList .bookmarkFolder,\n#bookmarksBox .bookmarkList .bookmarkFolder .folderLabel,\n#bkmrksAutoDrawer .folderLabel {\n    background: var(--background-color-069);\n    color: var(--color-fff);\n}\n\n#bkmrksAutoDrawer .bookmarkFolder div {\n    border-top: 1px solid var(--border-color-20a8b1);\n    background: var(--background-color-rgba3);\n}\n\n#bookmarksBox,\n#bookmarksBox * {\n    border-color: var(--border-color-20a8b1);\n}\n\n#bookmarksBox .bookmarkList .bookmarkFolder.open .folderLabel:hover > span > span {\n    border-color: transparent var(--border-color-036) transparent transparent;\n}\n\n#bookmarksBox .bookmarkList .bookmarkFolder .folderLabel:hover .bookmarksAnchor,\n#bookmarksBox .bookmarkList li.bkmrk:hover {\n    background: var(--background-color-036);\n}\n\n#bookmarksBox .addForm,\n#bookmarksBox #bookmarksTypeBar,\n#bookmarksBox h5 {\n    color: var(--color-888);\n}\n#bookmarksBox h5:hover {\n    color: var(--color-ffce00);\n    background: var(--background-color-rgba2);\n}\n\n#bookmarksBox #topBar,\n#bookmarksBox .addForm,\n#bookmarksBox #bookmarksTypeBar,\n#bookmarksBox .bookmarkList li.bookmarksEmpty,\n#bookmarksBox .bookmarkList li.bkmrk a {\n    background-color: var(--background-color-rgba10)\n}\n\n#bookmarksBox .addForm input,\n#bookmarksBox ul .bookmarksLink {\n    color: var(--color--ffce00);\n}\n#bookmarksBox .addForm a {\n    color: var(--color-20a8b1);\n}\n\n/* MPE */\n\n.mpe select,\n.mpe a {\n    border: 1px solid var(--border-color-ffce00);\n    background: var(--background-color-rgba9);\n    color: var(--border-color-ffce00);\n}\n\n/* privacy */\n\n#privacycontrols {\n    background-color: var(--background-color-rgba6);\n}\n\n#privacycontrols a {\n    width: inherit;\n    border-color: var(--border-color-20a8b1);\n}\n\n/* linked portal */\n\n.showLinkedPortalLink {\n    background-color: var(--background-color-0e3d4e);\n}\n\n/* score cycle times */\n\n#score_cycle_times_display * {\n    color: var(--color-ffce00);\n}\n\n/* portals list */\n\n#portalslist table td, #portalslist table th {\n    border-bottom-color: var(--border-color-0b314e);\n    background-color: var(--table-background-header);\n}\n\n#portalslist table tr.res td, #portalslist .filterRes {\n    background-color: var(--background-color-005684);\n}\n#portalslist table tr.enl td, #portalslist .filterEnl {\n    background-color: var(--background-color-017f01);\n}",""]),o.exports=r},function(o,r,n){var a=n(9);o.exports="string"==typeof a?a:a.toString()},function(o,r,n){(r=n(0)(!1)).push([o.i,"/* wasabee */\n.wasabee-table>thead>tr,\n.wasabee-table>tfoot>tr {\n    background-color: var(--table-background-header);\n}\n.wasabee-table>tbody>tr {\n    background-color: var(--table-background-even);\n}\n.wasabee-table>tbody>tr:nth-child(2n+1) {\n    background-color: var(--table-background-odd);\n}\n\n.wasabee-agent-menu, .wasabee-state-menu {\n    display: grid;\n}\n\n.wasabee-agent-menu label, .wasabee-state-menu label {\n    grid-column: 1;\n    text-decoration: underline dotted;\n    align-self: center;\n}\n\n.wasabee-state-menu select, .wasabee-agent-menu select {\n    grid-column: 2;\n    justify-self: end;\n}\n\n#dialog-wasabee-assign .desc, #dialog-wasabee-state .desc {\n    line-height: 1.5em;\n}\n\n#map .wasabee-popup .leaflet-popup-content div.desc,\n#map .wasabee-popup .wasabee-wd-popup span  {\n  color: var(--color-ffce00);\n}\n\n\n/* marker color */\n.CapturePortalMarker {\n  color: #38ff5d;\n}\n.LetDecayPortalAlert {\n  color: #fffefe;\n}\n.DestroyPortalAlert {\n  color: #f92722;\n}\n.FarmPortalMarker {\n  color: #f17030;\n}\n.GotoPortalMarker {\n  color: #e235a9;\n}\n.GetKeyPortalMarker {\n  color: #78b32c;\n}\n.CreateLinkAlert {\n  color: #65dba7;\n}\n.MeetAgentPortalMarker {\n  color: #FDCA40;\n}\n.OtherPortalAlert {\n  color: #dfc4da;\n}\n.RechargePortalAlert {\n  color: #38bd90;\n}\n.UpgradePortalAlert {\n  color: #7ddb42;\n}\n.UseVirusPortalAlert {\n  color: #eb3cff;\n}\n.ExcludeMarker {\n  color: #efff64;\n}\n\n.leaflet-popup-content-wrapper.wasabee-popup a.enl {\n    color: #03fe03 !important;\n}\n\n.leaflet-popup-content-wrapper.wasabee-popup a.res {\n    color: #00c5ff !important;\n}\n\n/* < 0.21 */\n#map .leaflet-popup-content-wrapper.wasabee-popup {\n    background-color: var(--background-color-0e3d4e) !important;\n}\n\n/* >= 0.21 */\n#map .wasabee-popup .leaflet-popup-content-wrapper {\n    background-color: var(--background-color-0e3d4e) !important;\n}\n\n.wasabee-popup a {\n    color: var(--color-ffce00);\n}\n\n.wasabee-popup button {\n    color: var(--color-ffce00);\n    border: 1px solid var(--border-color-ffce00);\n    background-color: var(--background-color-rgba6);\n    border-radius: 5px;\n    padding: .375rem .75rem;\n}\n\n\n.wasabee-popup button:hover {\n    background-color: var(--background-color-rgba11);\n}\n\n.wasabee-popup-assignment {\n    color: var(--color-888);\n}\n\n.wasabee-link-popup .info-block {\n  color: white;\n}\n",""]),o.exports=r}]);

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

