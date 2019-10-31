import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import store from './redux/store';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={AppContainer} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
