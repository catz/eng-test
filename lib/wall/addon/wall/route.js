import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';

export default Route.extend({
  app: service(),
  beforeModel() {},

  model(params) {
    return { user: { id: params.id, name: 'User Name' } };
  },

  setupController(controller, models) {
    this._super(...arguments);

    const app = get(this, 'app');
    set(app, 'user', models.user);
  }
});
