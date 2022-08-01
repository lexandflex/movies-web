import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import createStore from '@store/index';
import App from './App';

export const { store } = createStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
