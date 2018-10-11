import axios from 'axios';
import config from '../config.json';

export function getMovies(currentPage = "1"){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}&language=en-US&page=${currentPage}`)
}