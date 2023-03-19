import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';

import { handleRequest } from './src/main.server';

const port = process.env['PORT'] || 4201;
const app = express();

const browserDist = path.join(process.cwd(), 'dist/apps/admin/browser');
const serverDist = path.join(process.cwd(), 'dist/apps/admin/server');
const indexPath = path.join(browserDist, 'index.html');

app.use(cors());

// Client-side static bundles
app.get(
  '*.*',
  express.static(browserDist, {
    maxAge: '1y',
  })
);

// Static bundles for server-side module federation
app.use(
  '/server',
  express.static(serverDist, {
    maxAge: '1y',
  })
);

app.use('*', handleRequest(indexPath));

const server = app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);

  /**
   * DO NOT REMOVE IF USING @nrwl/react:module-federation-dev-ssr executor
   * to serve your Host application with this Remote application.
   * This message allows Nx to determine when the Remote is ready to be
   * consumed by the Host.
   */
  process.send?.('nx.server.ready');
});

server.on('error', console.error);
