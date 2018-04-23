import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('wall', { path: ':id' }, function() {
    this.mount('viewer');
    this.mount('host');
  });

  this.route('restricted', { path: ':id/restricted' });
});
