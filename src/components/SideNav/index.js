import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Menu from '../Menu';
import ActionBar from '../ActionBar';

import './sidenav.scss';

const SideNav = (props) => {
  const menuItems = [
    {
      title: 'Dashboard',
      link: '/',
      faClass: 'fa-dashboard'
    },
    {
      title: 'Users',
      link: '/users',
      faClass: 'fa-users',
      count: 15
    },
    {
      title: 'Data',
      link: '/data',
      faClass: 'fa-bar-chart'
    },
    {
      title: 'Finance',
      link: '/finance',
      faClass: 'fa-bank'
    },
    {
      title: 'Messages',
      link: '/messages',
      faClass: 'fa-envelope-o',
      count: 253
    }
  ];

  const menuItems2 = [
    {
      title: 'Another',
      link: '/home',
      faClass: 'fa-phone'
    },
    {
      title: 'Money',
      link: '/users',
      faClass: 'fa-money'
    },
    {
      title: 'Stats',
      link: '/data',
      faClass: 'fa-briefcase'
    },
    {
      title: 'Management',
      link: '/finance',
      faClass: 'fa-book'
    }
  ];

  return (
    <nav className={cx('SideNav', props.customClass)}>
			<span className="SideNav-companyLogo">
				Bitterish inc.
			</span>

      <Menu 
        items={menuItems}
        caption="Pages" />

      <Menu 
        items={menuItems2}
        caption="Management" />

      <ActionBar />
    </nav>
  );
};

SideNav.propTypes = {
	customClass: PropTypes.string
};

export default SideNav;