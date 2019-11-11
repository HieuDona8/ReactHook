import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import {Provider} from 'react-redux';
import store from './Redux';

ReactDOM.render(
  <Provider store ={store}>
    <List />
  </Provider>,
  document.getElementById('root')
);

