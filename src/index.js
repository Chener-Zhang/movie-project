import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux import 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import LogReducer from './reduers/LogReducer'

const store = createStore(LogReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

