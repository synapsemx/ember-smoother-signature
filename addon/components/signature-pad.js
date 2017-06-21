import Ember from 'ember';
import layout from '../templates/components/signature-pad';

export default Ember.Component.extend({
  layout: layout,
  data: '',
  signaturePad: '',

  didInsertElement: function() {
    var canvas = document.querySelector("canvas");
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
    resizeCanvas();
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
    }
  }
});
