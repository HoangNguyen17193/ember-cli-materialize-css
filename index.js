/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialize-css',
  included: function (app) {
    this._super.included.apply(this, arguments);

    app.import(app.bowerDirectory + '/materialize/dist/js/materialize.js');
    app.import(app.bowerDirectory + '/materialize/dist/css/materialize.css');
  }
};
