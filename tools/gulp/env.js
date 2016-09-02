// Expose all configurations
var env = {};

module.exports = env;

//---

var path = require('path');

env.rootPath = path.resolve( './' );

// [Gist] Better local require() paths for Node.js
// https://gist.github.com/branneman/8048520
env.rootRequire = function( name ) {
  return require( path.join( env.rootPath, name ) );
};

  //--- local modules

env.pkg       = env.rootRequire('package.json');

env.config    = env.rootRequire('tools/config');

//---

env.args = require('yargs').argv;

env.is = { // TODO: review
  karma       : !!env.args.karma,
  protractor  : !!env.args.protractor,
  e2e         : !!env.args.e2e,
  debug       : !!env.args.debug,
  release     : !!env.args.release,
  preview     : !!env.args.preview,
  proxy       : !!env.args.proxy,
  less        : !!env.args.less,
  sass        : !!env.args.sass,

  publish     : !!env.args.publish, // TODO: review - needed?
  init        : !!env.args.init // TODO: review - needed?
};