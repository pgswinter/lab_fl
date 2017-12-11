import { request } from '../helpers.js';

const registerAPI = data => {
	return request('http://managedpm.flynk.com/api/1.0/Users',{
		method: 'post',
		data
	})
}

export default registerAPI;