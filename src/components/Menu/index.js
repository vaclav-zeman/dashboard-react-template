import React, { PropTypes } from 'react';
import MenuItem from './components/MenuItem';

import './menu.scss';

const Menu = (props) => {
  const menuItems = [
    {
      title: 'Home',
      link: '/home',
      customClass: ''
    },
    {
      title: 'Users',
      link: '/users',
      customClass: ''
    },
    {
      title: 'Data',
      link: '/data',
      customClass: ''
    },
    {
      title: 'Finance',
      link: '/finance',
      customClass: ''
    }
  ];

  return (
    <ul className="Menu">
      {menuItems.map(item => <MenuItem key={Math.random()} item={item} />)}
    </ul>
  );
};

export default Menu;
