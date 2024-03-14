import axios from 'axios';

const api = axios.create({
  ///baseURL: 'https://swapi.dev/api/'

  // When inspecting the app on chrome dev tools I noticed the GET request was getting an error.
  // This led me to check the api and evetually the url with was wrong.
  // I added the correct one below.
  baseURL: 'https://swapi.py4e.com/api/'

});

export const fetchMovies = async () => {
  const response = await api.get('films/');
  return response.data.results;
};
