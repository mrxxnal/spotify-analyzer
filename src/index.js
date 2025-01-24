import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import App from './App'; // Ensure the path is correct
import './index.css'; // Ensure this file exists

// Mounting the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
