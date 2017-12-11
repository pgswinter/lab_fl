import React from 'react';
import LoginPageContainer from '../containers/LoginPageContainer';
import RegisterPageContainer from '../containers/RegisterPageContainer';
import { Switch, Route } from 'react-router-dom';

// import SignupPage from '../_components/SignupPage/SignupPage'
// import SearchPage from '../_components/SearchPage'
// import EditPage from '../_components/EditPage'
// import UploadPage from '../_components/UploadPage'
// import ForgetPassword from '../_components/ForgetPassword'
// import ManagePage from '../_components/ManagePage'
// import UsersAdmin from '../_components/UsersAdmin/UsersAdmin'
// import Sample_User_Search_Layout from '../_components/Sample_User_Search_Layout'

const Routes = () => (	
  <Switch>
    <Route exact path="/signin" component={LoginPageContainer} />
    <Route exact path="/signup" component={RegisterPageContainer} />
  </Switch> 
);

export default Routes;
