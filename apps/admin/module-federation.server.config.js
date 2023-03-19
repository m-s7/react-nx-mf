module.exports = {
  name: 'admin',
  exposes: {
    './Module': 'apps/admin/src/remote-entry.ts',
  },
};
