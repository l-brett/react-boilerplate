import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../../src/components/App.js';
import AppRouter from '../../src/routers/AppRouter.js';



configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store;

beforeEach(() => {
  store = mockStore({config:{title:'Test'}});
})

configure({ adapter: new Adapter() });

describe('App component', () => {

  it('should redirect to app component', () => {
    const router = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );

    expect(router.find(App)).toHaveLength(1);
  });

  it('should only render root if exact', () => {
    const router = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/test"]}>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(router.find(App)).toHaveLength(0);
  });
});