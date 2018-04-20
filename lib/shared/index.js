/* eslint-env node */
'use strict';

// https://github.com/babel/ember-cli-babel#options
const options = {
  babel: {
    plugins: []
  }
};

module.exports = {
  name: 'shared',
  options,

  isDevelopingAddon() {
    return true;
  }
};
