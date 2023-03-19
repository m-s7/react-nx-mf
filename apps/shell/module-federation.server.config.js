// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: ['admin', 'health'],
};

module.exports = moduleFederationConfig;
