import * as types from '../constants';

const initialState = {
  loginLoading: false,
  loginInfo: null,
  loginError: null
};

const loginReducer = (state = initialState, action = {}) => {
  const { data, error, type } = action;

  switch (type) {
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loginLoading: true
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loginInfo: data
      };
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loginError: error
      };
    default:
      return {
        ...state
      };
  }
};

export default loginReducer;
