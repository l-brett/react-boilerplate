import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../../src/components/App';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();


configure({ adapter: new Adapter() });

describe('App component', () => {
  it('exists', () => {
    const wrapper = shallow(<App AppTitle="Test" />);

    expect(wrapper.find('h1').text()).toBe('Test');

  });
});