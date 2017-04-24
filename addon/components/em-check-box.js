import Ember from 'ember';
import layout from '../templates/components/em-check-box';

export default Ember.Component.extend({
  layout,
  checked: false,
  disabled: false,
  actions: {
    toggle() {
      if (!this.get('disabled')) {
        this.toggleProperty('checked');
      }
    }
  }
});
