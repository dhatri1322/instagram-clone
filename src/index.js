// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new client from react-dom
import App from './App'; // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
