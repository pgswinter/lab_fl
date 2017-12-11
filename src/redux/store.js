import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  loginReducer,
  registerReducer
});

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
