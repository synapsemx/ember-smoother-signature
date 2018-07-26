'use strict';

module.exports = {
  name: 'ember-smoother-signature',
  included: function(app) {
    this._super.included(app);
    this.app.import('node_modules/signature_pad/dist/signature_pad.min.js');
  }
};
