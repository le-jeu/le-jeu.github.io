// ==UserScript==
// @author         jaiperdu
// @name           IITC plugin: Portals pictures
// @category       Info
// @version        0.1.1
// @description    Show portal pictures in a dialog
// @id             portals-pictures
// @updateURL      https://le-jeu.github.io/dist/portals-pictures.meta.js
// @downloadURL    https://le-jeu.github.io/dist/portals-pictures.user.js
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
plugin_info.dateTimeVersion = '2020-10-08-222357';
plugin_info.pluginId = 'portals-pictures';
//END PLUGIN AUTHORS NOTE

// use own namespace for plugin
window.plugin.portalPictures = function() {};

const defaultImage = 'https://fevgames.net/wp-content/uploads/2018/11/FS-Onyx.png';

window.plugin.portalPictures.onPortalDetailsUpdated = function (e) {
  const img = document.querySelector('.portal-pictures-image[data-guid="' + e.guid + '"]');
  if (img) {
    img.src = (e.portalData.image || defaultImage).replace("http:", "");
    img.title = e.portalData.title;
  }
}

window.plugin.portalPictures.showDialog = function() {
  let portals = [];

  let bounds = map.getBounds();
  for (const [guid, portal] of Object.entries(window.portals)) {
    let ll = portal.getLatLng();
    if (bounds.contains(ll)) {
      portals.push(portal);
    }
  }

  const container = document.createElement('div');
  container.style.maxWidth = "1000px";

  const filter = document.createElement('input');
  filter.type = 'text';
  filter.addEventListener('input', function(ev) {
    ev.preventDefault();
    const f = ev.target.value.toLowerCase();
    for (const n of document.querySelectorAll('.portal-pictures-image')) {
      const title = n.title.toLowerCase();
      if (title.includes(f))
        n.style.display = 'initial';
      else
        n.style.display = 'none';
    }
  });
  container.appendChild(filter);

  const div = document.createElement('div');
  container.appendChild(div);

  for (const portal of portals) {
    const img = document.createElement("img");
    img.src = (portal.options.data.image || defaultImage).replace("http:", "");
    img.title = portal.options.data.title;
    img.classList.add('imgpreview');
    img.classList.add('portal-pictures-image');
    img.dataset.guid = portal.options.guid;
    img.dataset.count = 0;
    img.addEventListener("click", function(ev) {
      img.dataset.count++;
      let prev = img.previousElementSibling;
      while (prev && prev.dataset.count - img.dataset.count < 0)
        prev = prev.previousElementSibling;
      if (prev)
        img.parentNode.insertBefore(img, prev.nextSibling);
      else
        img.parentNode.insertBefore(img, img.parentNode.firstElementChild);
      renderPortalDetails(portal.options.guid);
      ev.preventDefault();
      return false;
    }, false);
    div.appendChild(img);
  }

  window.addHook("portalDetailsUpdated", window.plugin.portalPictures.onPortalDetailsUpdated);

  dialog({
    id: 'plugin-portal-pictures',
    html: container,
    title: 'Show portal pictures',
    width: 'auto',
    closeCallback: () => {
      window.removeHook("portalDetailsUpdated", window.plugin.portalPictures.onPortalDetailsUpdated);
    }
  });
};

window.plugin.portalPictures.setup  = function() {
  $('#toolbox').append(' <a onclick="window.plugin.portalPictures.showDialog()">Portal pictures</a>');
};

let setup =  window.plugin.portalPictures.setup;

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

