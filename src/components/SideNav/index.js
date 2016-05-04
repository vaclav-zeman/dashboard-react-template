import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import './sidenav.scss';

const SideNav = (props) => {
  return (
    <nav className={cx('SideNav', props.customClass)}>
    </nav>
  );
};

SideNav.propTypes = {
	customClass: PropTypes.string
};

export default SideNav;
