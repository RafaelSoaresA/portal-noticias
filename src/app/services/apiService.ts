import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const newsApi = axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2'
});
