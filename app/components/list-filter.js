import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  filterLabel: computed('value', function() {
    return `You have selected: ${this.value}`;
  }),

  init() {
    this._super(...arguments);
    this.filter('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  },
});
