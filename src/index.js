import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import styles from './country.css';

render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory} routes={routes} />
      </div>
    </Provider>
    , document.getElementById('root')
);
