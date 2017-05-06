import Ember from 'ember';
import layout from '../templates/components/em-determinate-loader';

const { computed, String, isNone } = Ember;

export default Ember.Component.extend({
  layout,
  statusWidth: computed('percent', function () {
    const percent = !isNone(this.get('percent')) ? parseInt(this.get('percent'), 10) : 0;
    return String.htmlSafe(`width: ${percent}%`);
  })
});