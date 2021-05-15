import axios from 'axios';

//making a request we ise the input to complete the url
const instance = axios.create({
baseURL: "https://api.themoviedb.org/3"

});

export default instance;
