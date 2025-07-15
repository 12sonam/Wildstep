import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ExpeditionProvider } from './context/ExpeditionContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ExpeditionProvider>
        <App />
      </ExpeditionProvider>
    </BrowserRouter>
  </React.StrictMode>
); 