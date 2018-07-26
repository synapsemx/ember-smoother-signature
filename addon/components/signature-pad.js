import Component from '@ember/component';
import { later } from '@ember/runloop';
import layout from '../templates/components/signature-pad';

export default Component.extend({
  layout: layout,
  data: '',
  signaturePad: '',

  backBtnClass: 'btn btn-default',
  backBtnText: 'Back',

  clearBtnClass: 'btn btn-default',
  clearBtnText: 'Clear',

  acceptBtnText: 'Authorize',
  acceptBtnClass: 'btn btn-success',

  resizeCanvas() {
    const {
      canvas,
      signaturePad
    } = this.getProperties('canvas', 'signaturePad')

    const ratio =  Math.max(window.devicePixelRatio || 1, 1)

    canvas.width = canvas.offsetWidth * ratio
    canvas.height = canvas.offsetHeight * ratio
    canvas.getContext('2d').scale(ratio, ratio)
    signaturePad.clear() // otherwise isEmpty() might return incorrect value
  },

  init: function () {
    this._super(...arguments)
    this.resizeCanvas = this.resizeCanvas.bind(this)
  },

  didInsertElement() {
    const canvas = this.element.querySelector('canvas')
    const signaturePad = new window.SignaturePad(canvas)

    this.set('canvas', canvas)
    this.set('signaturePad', signaturePad)

    window.addEventListener('resize', this.resizeCanvas)
    window.addEventListener('orientationchange', this.resizeCanvas)

    if (this.get('isOnModal')) {
      later(this.resizeCanvas, 1000)
    } else {
      this.resizeCanvas()
    }
  },

  willDestroyElement() {
    window.removeEventListener('resize', this.resizeCanvas)
    window.removeEventListener('orientationchange', this.resizeCanvas)
  },

  submit() {},
  back() {},

  actions: {
    accepted() {
      const signaturePad = this.get('signaturePad')
      const isEmpty = signaturePad.isEmpty()
      const data = isEmpty ? '' : signaturePad.toDataURL('image/svg+xml')

      this.set('data', data)
      this.get('submit')(this.get('data'))
    },

    clear() {
      const signaturePad = this.get('signaturePad');
      signaturePad.clear();
    },

    back() {
      this.get('back')(this.get('data'))
    }
  }
});
