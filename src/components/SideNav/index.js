import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Menu from '../Menu';
import ActionBar from '../ActionBar';

import './sidenav.scss';

const SideNav = (props) => {
  const menuItems = [
    {
      title: 'Home',
      link: '/home',
      faClass: 'fa-home'
    },
    {
      title: 'Users',
      link: '/users',
      faClass: 'fa-user'
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
      title: 'Contact',
      link: '/contact',
      faClass: 'fa-envelope-o'
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
      faClass: 'fa-bar-chart'
    },
    {
      title: 'Management',
      link: '/finance',
      faClass: 'fa-bank'
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