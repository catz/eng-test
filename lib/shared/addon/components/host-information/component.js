import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  user: null,
  classNames: ['imported-component'],

  actions: {
    changeProfile() {}
  }
});
