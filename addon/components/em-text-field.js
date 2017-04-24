import Ember from 'ember';
import layout from '../templates/components/em-text-field';

const { computed } = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  active: false,
  disabled: false,
  validateClass: computed('isValidate', 'isValid', function () {
    const { isValidate, isValid } = this.getProperties('isValidate', 'isValid');
    if (isValidate) {
      if (isValid) {
        return 'validate valid';
      }
      return 'validate invalid';
    }
    return '';
  }),
  actions: {
    toggleActive() {
      if (!this.get('disabled')) {
        this.set('active', true);
        this.$('input').focus();
      }
    }
  }
});