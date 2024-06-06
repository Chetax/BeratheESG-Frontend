import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleProvider } from '@ant-design/cssinjs';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import {store } from './Redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <StyleProvider>
      <Provider store={store}>
    <App />
    </Provider>
    </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
