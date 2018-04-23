import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('index', { path: '/' });
  this.route('broadcast');
  this.route('web_controls');
  this.route('history');
  this.route('preferences');
  this.route('international');

  this.mount('viewer');
});
