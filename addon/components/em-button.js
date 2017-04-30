import Ember from 'ember';
import layout from '../templates/components/em-button';

export default Ember.Component.extend({
  layout,
  actions: {
    click() {
      if (!this.get('disabled')) {
        this.sendAction('clickAction');
      }
    }
  }
});