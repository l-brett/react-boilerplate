import { createStore, combineReducers } from 'redux';

import { config } from './reducers/Config';

const store = createStore(
  combineReducers({
    config:config
  })
);

export default store;