import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Welcome from './components/Welcome';

import './assets/main.css';

// CREATE REDUX STORE
const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Route path="/signup" exact component={ SignUp }/>
      <Route path="/signin" exact component={ SignIn }/>
      <Route path="/welcome" exact component={ Welcome }/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
