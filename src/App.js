import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store';
import Routes from './routes/routes';
import './styles/style.css';

export default class App extends Component {
  render() {
    debugger;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}
