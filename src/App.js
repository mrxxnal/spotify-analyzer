import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Ensure the paths are correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Login page */}
                <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
            </Routes>
        </Router>
    );
};

export default App;
