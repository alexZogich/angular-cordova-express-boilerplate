
module.exports = {
  buildSrc: 'dist/client',
  apkDest: 'apk',
  libMatch: "<!--CORDOVA-->",
  libSrc: "<script src='cordova.js'></script><script src='cordova_plugins.js'></script>",
  create: {
    dir: 'cordova',
    id: 'com.resolved.debtfree',
    name: 'Debtfree'
  },
  plugins: [
    'org.apache.cordova.device',
    'cordova-plugin-whitelist'
  ],
  xml: [
    '<allow-intent href="http://*/*" />'
  ]
};