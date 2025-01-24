// Import necessary modules
import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Dashboard component
const Dashboard = () => {
    // State to store top tracks and artists
    const [topTracks, setTopTracks] = useState([]);
    const [topArtists, setTopArtists] = useState([]);
    const accessToken = 'BQAvyTjnGvI6VV-nZBldMuaRF4ZuD-k8TBLntv01U16o-M6jdz6Avqg1-yZP5OHXKZd_-anLbvDnUSsonHELi909fS6td5eLOJ5oAtdjhm-MUBX98Ypt6PDxupcvOzEpPdhV4Vh9JWYtk4_YQsuFEUI3Bh9xy48AhtH6fUGg8lCFQ0ncYfI8V7nOOVyULZ-UqY4bS9cFVQb6zRpmRd0DD0Q6fGDk_23stPs';
    // useEffect to fetch data when the component loads
    useEffect(() => {
        // Fetch Top Tracks
        axios.get(`http://localhost:5001/auth/top-tracks`, {
            params: { access_token: accessToken },
        })
        .then((response) => {
            setTopTracks(response.data.items); // Update state with API response
        })
        .catch((error) => {
            console.error('Error fetching top tracks:', error);
        });

        // Fetch Top Artists
        axios.get(`http://localhost:5001/auth/top-artists`, {
            params: { access_token: accessToken },
        })
        .then((response) => {
            setTopArtists(response.data.items); // Update state with API response
        })
        .catch((error) => {
            console.error('Error fetching top artists:', error);
        });
    }, []);

    // Render the data in a visually structured way
    return (
        <div>
            <div className="wrapper">
                <div className="section" id="top-tracks">
                    <h2>Your Top Tracks</h2>
                    <ul>
                        {topTracks.map((track, index) => (
                            <li key={index}>{track.name} by {track.artists[0].name}</li>
                        ))}
                    </ul>
                </div>
                <div className="section" id="top-artists">
                    <h2>Your Top Artists</h2>
                    <ul>
                        {topArtists.map((artist, index) => (
                            <li key={index}>{artist.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;