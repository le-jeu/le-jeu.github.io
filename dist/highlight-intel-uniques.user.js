// ==UserScript==
// @author         jaiperdu
// @name           IITC plugin: Highlight uniques captured/visited/scanned
// @category       Highlighter
// @version        1.5.1
// @description    Highlighter for unique visited/captured/scout controlled portals
// @id             highlight-intel-uniques
// @namespace      https://github.com/IITC-CE/ingress-intel-total-conversion
// @updateURL      https://le-jeu.github.io/dist/highlight-intel-uniques.user.js
// @downloadURL    https://le-jeu.github.io/dist/highlight-intel-uniques.user.js
// @match          https://intel.ingress.com/*
// @grant          none
// ==/UserScript==

function wrapper(plugin_info) {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

//PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
//(leaving them in place might break the 'About IITC' page or break update checks)
plugin_info.buildName = 'lejeu';
plugin_info.dateTimeVersion = '2021-02-08-155027';
plugin_info.pluginId = 'highlight-intel-uniques';
//END PLUGIN AUTHORS NOTE

let plugin = window.plugin.portalHighlighterVisited = function () { };

let [VISITED, CAPTURED, SCANNED] = [1,2,4];

let hidden = {opacity: 0, fillOpacity:0};

plugin.styles = {
    "Uniques ": {
        order: [CAPTURED, SCANNED, VISITED],
        styles: [
            {fillOpacity:0},
            {fillColor:'yellow'},
            {fillColor:'magenta'},
        ],
        default: {},
    },
    "Uniques (Visited)": {
        order: [CAPTURED, SCANNED, VISITED],
        styles: [
            {fillOpacity:0},
            {fillColor:'yellow'},
            {fillColor:'magenta'},
        ],
        default: hidden,
    },
    "Uniques (Captured)": {
        order: [CAPTURED],
        styles: [
            {},
        ],
        default: hidden,
    },
    "Uniques (Scoot controlled)": {
        order: [SCANNED],
        styles: [
            {},
        ],
        default: hidden,
    },
    "Uniques (Hide captured)": {
        order: [CAPTURED],
        styles: [
            hidden,
        ],
        default: {},
    },
    "Uniques (Hide visited)": {
        order: [VISITED | CAPTURED | SCANNED],
        styles: [
            hidden,
        ],
        default: {},
    },
    "Uniques (Hide scoot controlled)": {
        order: [SCANNED],
        styles: [
            hidden,
        ],
        default: {},
    },
};

plugin.highlighter = function (data, style) {
    let visited = data.portal.options.ent[2][18];

    if (visited == null) {
        data.portal.setStyle(style.default);
        return;
    }

    for (let i=0; i < style.order.length; i++) {
        if (visited & style.order[i]) {
            data.portal.setStyle(style.styles[i]);
            return;
        }
    }
    data.portal.setStyle(style.default);
};

var setup = function () {
    for (let name in plugin.styles) {
        let style = plugin.styles[name];
        window.addPortalHighlighter(name, function (data) {
            return plugin.highlighter(data, style);
        });
    }
}

setup.info = plugin_info; //add the script info data to the function as a property
if(!window.bootPlugins) window.bootPlugins = [];
window.bootPlugins.push(setup);
// if IITC has already booted, immediately run the 'setup' function
if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);

