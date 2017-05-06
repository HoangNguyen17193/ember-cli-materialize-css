import Ember from 'ember';
import layout from '../templates/components/em-circular-loader';

const { computed, String, isNone } = Ember;

export default Ember.Component.extend({
  layout,
  sizeStyle: computed('size', function () {
    const size = !isNone(this.get('size')) ? parseInt(this.get('size'), 10) : 64;
    return String.htmlSafe(`width: ${size}px; height: ${size}px`);
  }),
  colorStyle: computed('color', function () {
    const color = this.get('color');
    return String.htmlSafe(`border-color: ${color}`);
  })
});