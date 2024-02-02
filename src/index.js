import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
import { store1 } from './store1';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store1 = {store1}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);