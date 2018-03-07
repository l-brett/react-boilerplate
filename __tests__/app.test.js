import React from 'react';
import {render} from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import AppRouter from '../src/routers/AppRouter';
import { Provider } from 'react-redux';
import App from '../src/app';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store;

jest.mock('react-dom');

beforeEach(() => {
  store = mockStore({});
})

describe('App bootstrap', () => {

  it('renders the app component', () => {
    //TODO: Add test for checking provider has been correctly configured
  });
});