import Ember from 'ember';
import layout from '../templates/components/signature-pad';

export default Ember.Component.extend({
  layout: layout,
  data: '',
  signaturePad: '',

  backBtnClass: 'btn btn-default',
  backBtnText: 'Back',

  clearBtnClass: 'btn btn-default',
  clearBtnText: 'Clear',

  acceptBtnText: 'Authorize',
  acceptBtnClass: 'btn btn-success',

  didInsertElement: function() {
    var canvas = document.getElementById("sign-canvas");
    var signaturePad = new SignaturePad(canvas);
    this.set('signaturePad', signaturePad);

    function resizeCanvas() {
      var ratio =  Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener("resize", resizeCanvas);
    if (this.get('isOnModal')) {
      Ember.run.later(resizeCanvas, 1000);
    } else {
      resizeCanvas();
    }
  },

  actions: {
    accepted: function() {
      let signaturePad = this.get('signaturePad');
      this.set('data', signaturePad.toDataURL('image/svg+xml'));
      this.sendAction('submit', this.get('data'));
    },

    clear: function() {
      let signaturePad = this.get('signaturePad');
      signaturePad.clear();
    },

    back: function() {
      this.sendAction('back');
    }
  }
});
