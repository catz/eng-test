import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

// http://ember-engines.com/guide/services
const engines = {
  'profile-engine': {
    dependencies: {
      services: []
    }
  },
  wall: {
    dependencies: {
      services: []
    }
  },
  viewer: {
    dependencies: {
      services: [],
      externalRoutes: {
        wall: 'wall'
      }
    }
  },
  host: {
    dependencies: {
      services: [],
      externalRoutes: {
        wall: 'wall'
      }
    }
  }
};

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines
});

loadInitializers(App, config.modulePrefix);

export default App;
