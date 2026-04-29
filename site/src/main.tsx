import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initAnalytics, trackPageView } from './lib/analytics';

initAnalytics();
trackPageView(window.location.pathname);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
