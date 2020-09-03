import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://next-blog-api.herokuapp.com/'
});