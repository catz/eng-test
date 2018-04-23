import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {},

  model() {
    return this.modelFor('wall');
  }
});
