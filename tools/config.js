module.exports = (function() {

  //---

  var config = {};

  //---

  config.paths = {
    dev    : 'builds/development/',
    prod   : 'builds/production/',
    tsSrc  : 'src/typescript/'
  };

  config.paths.vendor = config.paths.dev + 'js/vendor.js';
  config.paths.bundle = config.paths.dev + 'js/bundle.js';

  //---

  config.package = '../package.json';

  //---

  return config;

})();