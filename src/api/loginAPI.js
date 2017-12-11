import { request } from '../helpers.js';

const loginAPI = data => {
  return request('/users/authenticate', {
    method: 'post',
    data
  });
};

export default loginAPI;
