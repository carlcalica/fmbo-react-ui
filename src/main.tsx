import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/satoshi.scss';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { Provider } from 'react-redux';
import store from "./redux";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>   
    <Provider store={store}>
        <Router>
          <App />
        </Router>
    </Provider>
  </React.StrictMode>,
);
