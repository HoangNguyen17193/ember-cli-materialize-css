/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'app'
      ]
    }
  });
  app.import('bower_components/materialize/dist/css/materialize.css');
  app.import('bower_components/materialize/dist/js/materialize.js');

  return app.toTree();
};
