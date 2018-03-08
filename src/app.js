import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './stores/AppStore';
import 'normalize.css/normalize.css';
import style from './styles/styles.scss';

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

render(jsx, document.getElementById('app'));