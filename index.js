'use strict';
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-smoother-signature',
  included: function(app) {
    this._super.included(app);
    this._super.included.apply(this, arguments);
    app.import('vendor/signature_pad.min.js');
  },

  treeForVendor() {
    return new Funnel(`${this.project.root}/node_modules/signature_pad/dist`, {
      files: ['signature_pad.min.js']
    });
  }
};
