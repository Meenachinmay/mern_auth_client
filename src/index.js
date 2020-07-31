import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Welcome from './components/Welcome';
import Feature from './components/Feature';

import './assets/main.css';

const middleware = [reduxThunk];

const InitialState = {
  auth: { authenticated: localStorage.getItem('token') }
};

// CREATE REDUX STORE
const store = createStore(
  rootReducer,
  InitialState,
  compose(
    applyMiddleware(...middleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Route path="/signup" exact component={ SignUp }/>
      <Route path="/signin" exact component={ SignIn }/>
      <Route path="/welcome" exact component={ Welcome }/>
      <Route path="/feature" exact component={ Feature }/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
