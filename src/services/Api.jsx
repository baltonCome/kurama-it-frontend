import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8000/api/',
    withCredentials: true,
    headers: {
        'Content-type' : 'application/json'
    }
})

export const apiPrivate = axios.create({
    baseURL:'http://localhost:8000/api/',
    withCredentials: true,
    headers: {
        'Content-type' : 'application/json'
    }
})

export default api;