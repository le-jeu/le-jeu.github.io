// ==UserScript==
// @author         jaiperdu
// @name           IITC plugin: Authentication test
// @category       Misc
// @version        0.1.1
// @description    Simple authentication test
// @id             auth-test
// @updateURL      https://le-jeu.github.io/dist/auth-test.meta.js
// @downloadURL    https://le-jeu.github.io/dist/auth-test.user.js
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
plugin_info.dateTimeVersion = '2020-12-30-155658';
plugin_info.pluginId = 'auth-test';
//END PLUGIN AUTHORS NOTE


// use own namespace for plugin
const authTest = function() {};
window.plugin.authTest = authTest;

authTest.dialogHTML = null;

// web app client id with auth screen allowing https://intel.ingress.com as origin
authTest.CLIENT_ID = '399825269956-mof3j81s694gnosta48i1kfvortfjb0l.apps.googleusercontent.com';

authTest.SCOPES = 'openid profile email';
authTest.TYPE = 'id_token permission';

authTest.loginMap = new Map();
authTest.htmlLoginList = null;

authTest.getProfile = function(access_token, retry) {
  const userinfoRoute = new URL('https://openidconnect.googleapis.com/v1/userinfo')

  userinfoRoute.search = new URLSearchParams({
    access_token: access_token
  }).toString();

  return fetch(userinfoRoute, {
    method: 'GET',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
    .then((profile) => {
      console.log(profile);
      const data = authTest.loginMap.get(profile.email) || {};
      data.access_token = access_token;
      data.name = profile.name;
      data.email = profile.email;
      data.picture = profile.picture;
      authTest.loginMap.set(profile.email, data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      if (retry) {
        for (const [email, profile] of authTest.loginMap) {
          if (profile.access_token == access_token) {
            return authTest.authorize('none', email);
          }
        }
      }
    });
}

authTest.authorize = function(prompt, hint) {
  const options = {
    prompt: prompt,
    client_id: authTest.CLIENT_ID,
    scope: authTest.SCOPES,
    response_type: authTest.TYPE,
    login_hint: hint,
  };

  window.gapi.auth2.authorize(options, response => {
    if (response.error) {
      const err = `error: ${response.error}: ${response.error_subtype}`;
      alert(err);
      console.log(err);
      return;
    }

    console.log(response);

    authTest.getProfile(response.access_token)
      .then((profile) => {
        profile.issue_at = response.first_issued_at;
        profile.expires_at = response.expires_at;

        authTest.updateHTML();
      });
  });
};

authTest.updateHTML = function () {
  authTest.htmlLoginList.textContent = '';

  for (const [email, profile] of authTest.loginMap) {
    const item = L.DomUtil.create('li', '', authTest.htmlLoginList);

    const picture = L.DomUtil.create('img', 'profile-picture', item);
    picture.src = profile.picture;
    L.DomEvent.on(picture, 'click', () => {
      authTest.getProfile(profile.access_token, true);
      authTest.updateHTML();
    });

    const details = L.DomUtil.create('div', 'profile-details', item);
    const nameEmail = L.DomUtil.create('div', 'profile-name', details);
    nameEmail.textContent = `${profile.name} <${email}>`;
    const expire = L.DomUtil.create('div', 'profile-expires', details);
    expire.append('expires at:')
    const time = L.DomUtil.create('time', '', expire);
    const expTime = new Date(profile.expires_at);
    time.dateTime = expTime.toISOString();
    time.textContent = expTime.toLocaleString();
  }
};


authTest.showDialog = function () {
  const content = L.DomUtil.create('div');

  for (const [text, prompt] of [
      ['Consent', 'consent'],
      ['Select account', 'select_account'],
      ['None', 'none']
    ]) {
    const promptButton = L.DomUtil.create('button', null, content);
    promptButton.textContent = text;
    L.DomEvent.on(promptButton, 'click', () => authTest.authorize(prompt));
  }

  authTest.htmlLoginList = L.DomUtil.create('ul', 'authtest-profile-list', content);
  authTest.updateHTML();

  dialog({
    title: "Authentication Test",
    html: content,
    id: 'dialog-authtest',
    width: 'auto',
    dialogClass: 'ui-dialog-authtest',
  });
};

authTest.setupCSS = function() {
  $("<style>")
    .prop("type", "text/css")
    .text('\
.authtest-profile-list li {\
    display: grid;\
    border: 1px solid rgba(0,0,0,.5);\
    background-color: rgba(0,0,0,.5);\
    padding: 3px;\
    grid-gap: .5em;\
    grid-template-columns: 40px auto\
}\
\
.authtest-profile-list .profile-picture {\
	width: 40px;\
	cursor: pointer;\
}\
\
.authtest-profile-list .profile-expires {\
	font-style: italic;\
}')
    .appendTo("head");
}

authTest.setupMenu = function() {
  $('#toolbox').append('<a id="authTest-authorize" onclick="window.plugin.authTest.showDialog();">AuthTest</a> ');
};

var setup = function() {
  authTest.setupCSS();

  if (typeof window.gapi !== "undefined") {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.enableDebugLogs(true);
      authTest.setupMenu();
    });
  }
  else {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      window.gapi.load("auth2", () => {
        window.gapi.auth2.enableDebugLogs(true);
        authTest.setupMenu();
      });
    };
    (document.body || document.head || document.documentElement).appendChild(
      script
    );
  }
};


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

