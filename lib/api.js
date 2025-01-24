import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5001', // URL of your backend
});

export default API;