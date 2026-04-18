/* ============================================
   📦 APPLICATION ENTRY POINT
   Enhanced with performance optimizations
   ============================================ */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Import global styles
import './styles/globals.css';
import './styles/animations.css';
import './styles/components.css';

// Performance optimizations (development only)
if (import.meta.env.DEV) {
  // Import performance utilities
  import('./utils/performance').then(({ optimizeAnimations, monitorPerformance }) => {
    optimizeAnimations();
    monitorPerformance();
  });
}

// Create root
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Create React root
const root = ReactDOM.createRoot(rootElement);

// Render application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Report web vitals in development
