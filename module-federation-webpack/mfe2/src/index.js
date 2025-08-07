import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Entry point for the MFE2 React application.
// It renders the main App component into the 'root' div in public/index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
