import * as types from '../constants';

const initialState = {
	registerLoading: false,
	registerInfo: null,
	registerError: null
};

const registerReducer = (state = initialState, action ={}) => {
	const { data, error, type} = action

	switch (type) {
		case types.REGISTER.REQUEST:
	      return {
	        ...state,
	        registerLoading: true
	      };
	    case types.REGISTER.SUCCESS:
	      return {
	        ...state,
	        registerInfo: data
	      };
	    case types.REGISTER.FAILURE:
	      return {
	        ...state,
	        registerError: error
	      };
	    default:
	      return {
	        ...state
	      };
	}
}

export default registerReducer