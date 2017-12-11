import * as types from '../constants';
import loginAPI from '../../api/loginAPI';

export default function loginAction() {
  return dispatch => {
    dispatch(loginRequest());
    loginAPI()
      .then(response => dispatch(loginSuccess(response)))
      .catch(error => dispatch(loginFail(error)));
  };
}

const loginRequest = () => ({
  type: types.LOGIN.REQUEST
});

const loginSuccess = data => ({
  type: types.LOGIN.SUCCESS,
  data
});

const loginFail = error => ({
  type: types.LOGIN.FAILURE,
  error
});
