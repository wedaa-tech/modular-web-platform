import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

// Create a root for React 18.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap the App component with BrowserRouter to enable routing.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
