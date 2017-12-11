import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import loginAction from '../redux/actions/loginAction';

const LoginPageContainer = (props) => <LoginForm {...props} />;

const mapStateToProps = ({ loginReducer }) => ({
  loginLoading: loginReducer.loginLoading,
  loginInfo: loginReducer.loginInfo,
  loginError: loginReducer.loginError
});

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
