'use strict';

const submodules = [
  'main',
].map(path => './lib/' + path).map(require);

module.exports = Object.assign({}, ...submodules);
