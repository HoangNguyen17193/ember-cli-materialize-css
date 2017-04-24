import Ember from 'ember';
import layout from '../templates/components/em-check-box';

export default Ember.Component.extend({
  layout,
  checked: false,
  actions: {
    toggle() {
      if (Ember.isNone(this.get('checked'))) {
        this.set('checked', false);
      }
      this.toggleProperty('checked');
    }
  }
});
