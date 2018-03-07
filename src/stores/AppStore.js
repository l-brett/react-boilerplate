import { createStore, combineReducers } from 'redux';

import { config } from './reducers/Config';

const store = createStore(
  combineReducers({
    config:config
  }),
  /* defaultState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Allow redux devtools
);

export default store;