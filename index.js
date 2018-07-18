'use strict';

module.exports = {
  name: 'ember-smoother-signature',
  contentFor: function(type, config) {
    if (type === 'head') {
      return '';
    } else if (type === 'head-footer') {
      return '';
    } else if (type === 'body') {
      return '';
    } else if (type === 'body-footer') {
      if (config.enviroment === 'test') {
        return '';
      } else {
        return '<script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>';
      }
    }
  }
};
