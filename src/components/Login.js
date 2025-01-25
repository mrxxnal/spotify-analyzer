import React from 'react';
import './Dashboard.css'; // Import Dashboard.css for typing effect and other styles

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:5001/auth/login'; // Redirect to backend login route
    };

    return (
        <div style={{
            position: 'relative',
            height: '90vh',
            backgroundImage: `url('/background.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end', // Ensures content is in the lower half
            paddingBottom: '18vh', // Adjust to raise content ~2cm higher
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
            }}>
                <button
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#333',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#555';
                        e.target.style.color = '#fff';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#333';
                        e.target.style.color = '#fff';
                    }}
                >
                    About Us
                </button>
            </div>
            <h1 className="typing-effect">Welcome to Spotilyzer</h1>
            <button
                onClick={handleLogin}
                style={{
                    padding: '15px 30px',
                    backgroundColor: '#1DB954',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    marginTop: '20px', // Adds spacing between heading and button
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#1aa34a';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#1DB954';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                Log in with Spotify
            </button>
        </div>
    );
};

export default Login;