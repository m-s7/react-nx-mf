module.exports = {
  name: 'health',
  exposes: {
    './Module': 'apps/health/src/remote-entry.ts',
  },
};
