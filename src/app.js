import React from 'react';
import {render} from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import style from './styles/styles.scss';

render(<AppRouter />, document.getElementById('app'));