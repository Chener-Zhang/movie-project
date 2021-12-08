import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux import 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {combineReducers} from 'redux'
import LogReducer from './reduers/LogReducer'

const rootReducer = combineReducers({LogReducer});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

