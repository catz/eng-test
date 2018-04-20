import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  actions: {
    changeProfile() {
      console.log('change profile');
    }
  }
});
