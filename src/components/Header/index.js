import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserInfo from './components/UserInfo';

import './header.scss';

const Header = (props) => {
  return (
    <header className="Header">
      <Link to="/" className="Header-button">
        <i className="fa fa-chevron-left" />
        Menu
      </Link>

      <h1 className="Header-pageTitle">
        Dashboard
      </h1>

      <UserInfo
        image="http://loremflickr.com/60/60"
        userName="Václav Zeman" 
      />
    </header>
  );
};

export default Header;
