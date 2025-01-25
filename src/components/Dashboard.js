import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const accessToken = searchParams.get('access_token');

    useEffect(() => {
        if (accessToken) {
            // Fetch user data or Spotify analytics here
            console.log('Access Token:', accessToken);
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Welcome to Your Dashboard</h1>
            <p>Start exploring your Spotify data!</p>
        </div>
    );
};

export default Dashboard;