import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.appdoquintal.com/'
});

export const apiv2 = axios.create({
  baseURL: 'https://api.appdoquintal.com/'
});

export const base_uri_image = 'https://api.appdoquintal.com/files/'

export default api;
