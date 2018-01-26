import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import 'normalize.css/normalize.css';
import style from './styles/styles.scss';

render(<App />, document.getElementById('app'));