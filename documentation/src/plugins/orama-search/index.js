const path = require('path');

module.exports = function () {
  return {
    name: 'orama-search-plugin',
    getClientModules() {
      return [path.resolve(__dirname, './orama-ui-setup.js')];
    },
  };
};
