import Ember from 'ember';
import layout from '../templates/components/signature-pad';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement: function() {
    var canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas);

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    $("#save").click(function() {
      var sign = signaturePad.toDataURL("image/svg+xml"); // save image as SVG
      console.log(sign);
    })
  }
});
