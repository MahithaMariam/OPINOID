import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
