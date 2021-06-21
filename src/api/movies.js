import axios from 'axios';
import config from '../config';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: config.API_KEY,
    language: 'es-ES',
  },
});

export default movieDB;