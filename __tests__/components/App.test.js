import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../src/components/App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('exists', () => {
    expect(wrapper).toBeTruthy();
  });
});