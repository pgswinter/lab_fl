import * as types from '../constants';
import registerAPI from '../../api/registerAPI';

export default function registerAction(){
	return dispatch => {
		dispatch()
			.then(response => dispatch(registerSuccess(response)))
			.catch(error => dispatch(registerFail(error)))
	}
}

const registerRequest = () => ({
	type: types.REGISTER.REQUEST
});

const registerSuccess = data => ({
	type: types.REGISTER.SUCCESS,
	data
})

const registerFail = error => ({
	type: types.REGISTER.FAILURE,
	error
})
