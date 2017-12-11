import React from 'react';
import {connect} from 'react-redux';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import registerAction from '../redux/actions/registerAction';

const RegisterPageContainer = (props) => <RegisterForm {...props} />;

const mapStateToProps = ({registerReducer}) => ({
	registerLoading: registerReducer.registerLoading,
	registerInfo: registerReducer.registerInfo,
	registerError: registerReducer.registerError
});

const mapDispatchToProps = dispatch => {
	return{
		register: () => dispatch(registerAction())
	};
};

export default connect(mapDispatchToProps, mapDispatchToProps)(RegisterPageContainer);