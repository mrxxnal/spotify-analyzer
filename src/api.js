import React, { useEffect } from 'react';
import API from './api';

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/'); // Make a GET request to the backend
                console.log('Response from backend:', response.data); // Log response data
            } catch (error) {
                console.error('Error fetching data:', error); // Log any errors
            }
        };

        fetchData(); // Call the fetch function when the component loads
    }, []);

    return (
        <div>
            <h1>Spotilyzer Dashboard</h1>
        </div>
    );
};

export default App;

