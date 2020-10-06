// ==UserScript==
// @author         jaiperdu
// @name           IITC plugin: Default base maps with labels above fields
// @category       Map Tiles
// @version        0.2.0
// @description    Print labels as an overlay of intel layer
// @id             labels_layer
// @updateURL    https://le-jeu.github.io/dist/labels_layer.meta.js
// @downloadURL    https://le-jeu.github.io/dist/labels_layer.user.js
// @namespace      https://github.com/IITC-CE/ingress-intel-total-conversion
// @match          https://intel.ingress.com/*
// @grant          none
// ==/UserScript==

function wrapper(plugin_info) {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

//PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
//(leaving them in place might break the 'About IITC' page or break update checks)
plugin_info.buildName = 'local';
plugin_info.dateTimeVersion = '2020-10-06-202034';
plugin_info.pluginId = 'labels_layer';
//END PLUGIN AUTHORS NOTE


// use own namespace for plugin
window.plugin.labelsLayer = function() {};

window.plugin.labelsLayer.addLayer = function() {
  const baseLayers = {};

  // create panes for labels
  const labelPane = window.map.createPane('labels');

  // This pane is above links/fields
  labelPane.style.zIndex = 500;

  // Layers in this pane are non-interactive and do not obscure mouse/touch events
  labelPane.style.pointerEvents = 'none';

  const cartoAttr = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
  const cartoUrl = 'https://{s}.basemaps.cartocdn.com/{theme}/{z}/{x}/{y}.png';
  baseLayers['CartoDB Dark Matter'] = L.layerGroup([
    L.tileLayer(cartoUrl,{attribution:cartoAttr,theme:'dark_nolabels'}),
    L.tileLayer(cartoUrl,{attribution:cartoAttr,theme:'dark_only_labels', pane: 'labels'})
  ]);
  baseLayers['CartoDB Positron'] = L.layerGroup([
    L.tileLayer(cartoUrl,{attribution:cartoAttr,theme:'light_nolabels'}),
    L.tileLayer(cartoUrl,{attribution:cartoAttr,theme:'light_only_labels', pane: 'labels'})
  ]);

  // Google Maps - including ingress default (using the stock-intel API-key)
  baseLayers['Google Default Ingress Map'] = L.layerGroup([
    L.gridLayer.googleMutant(
      { type:'roadmap',
        maxZoom: 21,
        backgroundColor: '#0e3d4e',
        styles: [
            { featureType:"all", elementType:"all",
              stylers: [{visibility:"on"}, {hue:"#131c1c"}, {saturation:"-50"}, {invert_lightness:true}] },
            { featureType:"all", elementType:"labels", stylers: [{visibility:"off"}] },
            { featureType:"water", elementType:"all",
              stylers: [{visibility:"on"}, {hue:"#005eff"}, {invert_lightness:true}] },
            { featureType:"transit", elementType:"all", stylers:[{visibility:"off"}] }
          ],
      }),
    L.gridLayer.googleMutant(
      { type:'roadmap',
        maxZoom: 21,
        styles: [
            { featureType:"all", elementType:"all",
              stylers: [{visibility:"on"}, {hue:"#131c1c"}, {saturation:"-50"}, {invert_lightness:true}] },
            { featureType:"all", elementType:"geometry",
              stylers: [{visibility:"off"}] },
            { featureType:"poi", stylers:[{visibility:"off"}]},
          ],
        pane: 'labels'
      })
  ]);

  // replace stock basemaps
  for (const obj of window.layerChooser._layers)
    if (baseLayers[obj.name])
      obj.layer = baseLayers[obj.name];

  for (const name in baseLayers)
    baseLayers[name].on('add remove', window.layerChooser._onLayerChange, window.layerChooser);

  window.layerChooser._update();
};

var setup =  window.plugin.labelsLayer.addLayer;

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

