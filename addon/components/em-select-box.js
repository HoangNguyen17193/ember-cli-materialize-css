import Ember from 'ember';
import layout from '../templates/components/em-select-box';

export default Ember.Component.extend({
  layout,
  options: [],
  multipleSelect: false,
  init() {
    this._super(...arguments);
    this.setDefaultValue(this.get('value'), this.get('multipleSelect'));
    this.setData(this.get('value'), this.get('options'));
  },
  setDefaultValue(value, multipleSelect){
    if (!value) {
      if (multipleSelect) {
        this.set('value', []);
      } else {
        this.set('value', '');
      }
    }
  },
  setData(value, options) {
    const multiple = this.get('multipleSelect');
    options.forEach((option) => {
      if ((multiple && value.contains(option.key)) || (!multiple && value === option.key)) {
        Ember.set(option, 'selected', true);
      } else {
        Ember.set(option, 'selected', false);
      }
    });
  },
  didRender() {
    this.$('select').material_select();
  },
  willDestroyElement() {
    this.$('select').material_select('destroy');
  },
  actions: {
    onChange() {
      this.set('value', this.$('select').val() || []);
    }
  }
});
