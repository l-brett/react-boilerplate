import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

import App from '../../src/components/App.js';
import AppRouter from '../../src/routers/AppRouter.js';

configure({ adapter: new Adapter() });

describe('App component', () => {

  it('should redirect to app component', () => {
    const router = mount(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(router.find(App)).toHaveLength(1);
  });

  it('should only render root if exact', () => {
    const router = mount(
      <MemoryRouter initialEntries={["/test"]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(router.find(App)).toHaveLength(0);
  });
});