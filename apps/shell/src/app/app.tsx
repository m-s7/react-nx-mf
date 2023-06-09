import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Admin = React.lazy(() => import('admin/Module'));

const Health = React.lazy(() => import('health/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/admin">Admin</Link>
        </li>

        <li>
          <Link to="/health">Health</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/health" element={<Health />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
