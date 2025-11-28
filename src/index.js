import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import ZvedennyaStore from './components/ZvedennyaTable/Zvedennya.store';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={ZvedennyaStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
