import React from 'react';
import {render} from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';

import AppRouter from '../src/routers/AppRouter';
import App from '../src/app';


jest.mock('react-dom');

describe('App bootstrap', () => {
  let wrapper;

  it('renders the app component', () => {
    expect(render).toHaveBeenCalledWith(<AppRouter />, null);
  });
});

