import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import { shallow } from 'enzyme';

configure({ adapter: new Adapter() });

const props = {
  changeUser: () => {},
  currentUserId: 1,
  users: [
    {
      id: 1,
      email: 'a@a.com',
      isAdmin: true,
    },
    {
      id: 2,
      email: 'b@b.com',
      isAdmin: false,
    },
  ]

};

describe('Header', () => {
  it('should render 3 links if current user is admin', () => {
    const wrapper =  shallow(
      <Header {...props} />
    );
    const links = wrapper.find(NavLink);
    expect(links.length).toBe(3);
  });
  it('should render 2 links if current user is not admin', () => {
    const newProps = Object.assign({}, props, {
      currentUserId: 2,
    })
    const wrapper =  shallow(
      <Header {...newProps} />
    );
    const links = wrapper.find(NavLink);
    expect(links.length).toBe(2);
  });
})
