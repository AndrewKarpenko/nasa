import {instance as axios} from '../utils/interceptor';

import {
  GET_ASTEROID_RANDOMLY, GET_ASTEROID_BY_ID,
} from '../actions/types';

const apiKey = '1mkoKmF7QgjpgDiH8NnEESbafGOfGVNSP16zxEg3';

export const getAsteroidById = (id, cb) => (dispatch) => {
  axios.get(`${id}?api_key=${apiKey}`)
    .then((data) => {
      dispatch({
        type: GET_ASTEROID_BY_ID,
        payload: data.data,
      });
      cb && cb();
    })
    .catch((err) => console.log(err));
};

export const getAsteroidRandomly = (cb) => (dispatch) => {
  axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`)
    .then((data) => {
      const index = Math.floor(Math.random() * 20);
      dispatch({
        type: GET_ASTEROID_RANDOMLY,
        payload: data.data.near_earth_objects[index],
      });
      cb && cb();
    })
    .catch((err) => console.log(err));
};
