/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-materialize-css',
  afterInstall: function () {
    return this.addBowerPackageToProject('materialize'); // is a promise
  }
};
