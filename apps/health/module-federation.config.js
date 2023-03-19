module.exports = {
  name: 'health',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
