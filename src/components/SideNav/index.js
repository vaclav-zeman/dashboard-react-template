import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import Menu from '../Menu';

import './sidenav.scss';

const SideNav = (props) => {
  return (
    <nav className={cx('SideNav', props.customClass)}>
			<span className="SideNav-companyLogo">
				CzechThat inc.
			</span>

      <Menu />
    </nav>
  );
};

SideNav.propTypes = {
	customClass: PropTypes.string
};

export default SideNav;