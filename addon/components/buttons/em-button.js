import Ember from 'ember';
import layout from '../../templates/components/buttons/em-button';

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