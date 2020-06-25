import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://api.nasa.gov/neo/rest/v1/neo/`
});

export default instance;
