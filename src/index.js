import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux import 
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import LogReducer from './reduers/LogReducer'
import PageReducer from './reduers/PageReducer';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);
const rootReducer = combineReducers({ LogReducer, PageReducer });
const store = createStore(rootReducer, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

