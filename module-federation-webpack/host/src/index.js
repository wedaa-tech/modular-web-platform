import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root for React 18.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the main App component.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
