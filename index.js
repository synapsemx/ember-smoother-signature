/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-signature-pad',
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
        return '<script src="https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.5.3/signature_pad.min.js"></script>';
      }
    }
  }
};
