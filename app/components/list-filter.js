import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['list-filter'],
  value: 'all',
  filterLabel: computed(/* REPLACE ME *//*, */ function() {
    return `You have selected: ${this.valur}`;
  }),
});
